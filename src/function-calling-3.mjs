import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv';

import { cancelVehicleCover, getVehicleExpiry } from './utils/function-configs.mjs';
import {
    callFunction,
    getFunctionCall,
    shouldInvokeFunction,
} from './utils/should-invoke-function.mjs';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_CLOUD_GEN_IA_API_KEY });

const userQuestion = 'Please cancel my certificate for this period';

const response = await ai.models.generateContent({
    model: process.env.CHATBOT_MODEL,
    contents: userQuestion,
    config: {
        systemInstruction: `You are an insurance agent. Your mission is to provide helpful answers given the resources you have at your disposal.

CRITICAL FUNCTION CALLING RULES:
1. NEVER guess values or use placeholders for function parameters
2. ONLY use exact values provided by the user
3. If a required parameter is missing, DO NOT call the function - instead ask the user for it
4. If you have the required information, DO call the function to get accurate data
5. AVOID FUNCTION CALLING WITH PLACEHOLDERS

Examples:
❌ WRONG: Call vehicleExpiry with {registrationNumber: "unknown"}
❌ WRONG: Call vehicleExpiry with {registrationNumber: "not provided"}
✅ CORRECT: Ask user "I need your registration number to check expiry"
✅ CORRECT: If user says "My car ABC123 expires soon?" call vehicleExpiry with {registrationNumber: "ABC123"}`,
        temperature: 0.1,
        toolConfig: {
            functionCallingConfig: {
                mode: 'ANY',
                allowedFunctionNames: ['vehicleExpiry', 'cancelCover'],
            },
        },
        tools: [{ functionDeclarations: [getVehicleExpiry, cancelVehicleCover] }],
    },
});

const contents = [{ role: 'user', parts: [{ text: userQuestion }] }];

const shouldCallFunction = shouldInvokeFunction(response);
if (shouldCallFunction) {
    const { functionArguments: args, functionName: name } = getFunctionCall(response);
    contents.push({ role: 'model', parts: [{ functionCall: { name, args } }] });
    const result = await callFunction(response);
    contents.push({
        role: 'user',
        parts: [
            {
                functionResponse: {
                    name,
                    response: result,
                },
            },
        ],
    });
}
const finalResponse = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents,
});

// eslint-disable-next-line no-console
console.log('Final answer:', finalResponse.text);

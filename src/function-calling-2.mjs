import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv';

import { checkVehicleExpiry } from './utils/check-vehicle-expiry.mjs';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_CLOUD_GEN_IA_API_KEY });

const userQuestion = 'When does my vehicle expire?';

const getVehicleExpiry = {
    name: 'vehicleExpiry',
    parametersJsonSchema: {
        type: 'object',
        properties: {
            registrationNumber: {
                type: 'string',
            },
            chassisNumber: {
                type: 'string',
            },
        },
        required: ['registrationNumber'],
    },
};

const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: userQuestion,
    config: {
        systemInstruction:
            'You are an insurance agent. Your mission is to provide helpful answers given the resources you have at your disposal',
        temperature: 0.1,
        toolConfig: {
            functionCallingConfig: {
                mode: 'ANY',
                allowedFunctionNames: ['vehicleExpiry'],
            },
        },
        tools: [{ functionDeclarations: [getVehicleExpiry] }],
    },
});

// eslint-disable-next-line no-console
console.log(response.candidates[0].content.parts[0].functionCall);

if (response.candidates && response.candidates[0].content.parts[0].functionCall) {
    const functionCall = response.candidates[0].content.parts[0].functionCall;

    if (functionCall.name === 'vehicleExpiry') {
        // eslint-disable-next-line no-console
        console.log('incoming function call:', functionCall);

        const result = await checkVehicleExpiry(functionCall.args);
        // eslint-disable-next-line no-console
        console.log('Function result:', result);

        const finalResponse = await ai.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: [
                { role: 'user', parts: [{ text: userQuestion }] },
                { role: 'model', parts: [{ functionCall: functionCall }] },
                {
                    role: 'user',
                    parts: [
                        {
                            functionResponse: {
                                name: 'vehicleExpiry',
                                response: result,
                            },
                        },
                    ],
                },
            ],
        });
        // eslint-disable-next-line no-console
        console.log('Final answer:', finalResponse.text);
    }
} else {
    // eslint-disable-next-line no-console
    console.log('No function call was triggered');
    // eslint-disable-next-line no-console
    console.log('Model response:', response.text);
}

import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_CLOUD_GEN_IA_API_KEY });
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
    contents: 'When does my vehicle expire: KAA121A?',
    config: {
        systemInstruction:
            'You are an insurance agent. Your mission is to provide helpful answers. You have access to tools which connect you to DMVIC, the centralised motor vehicle insurance system',
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

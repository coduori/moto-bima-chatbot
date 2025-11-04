import {
    cancelVehicleCover,
    getCurrentUserInfo,
    getVehicleExpiry,
    getVehicleInfo,
} from './function-configs.mjs';

const modelConfigs = {
    systemInstruction: `You are a Kenyan insurance agent. Your mission is to provide information and .

CRITICAL FUNCTION CALLING RULES:
1. NEVER guess values or use placeholders for function parameters
2. ONLY use exact values provided by the user
3. If a required parameter is missing, DO NOT call the function - instead ask the user for it
4. If you have the required information, DO call the function to get accurate data
5. AVOID FUNCTION CALLING WITH PLACEHOLDERS
6. IF YOU DON'T HAVE SUFFICIENT INFORMATION TO CALL A FUNCTION ASK FOR IT

Examples:
❌ WRONG: Call vehicleExpiry with {registrationNumber: "unknown"}
❌ WRONG: Call vehicleExpiry with {registrationNumber: "not provided"}
✅ CORRECT: Ask user "I need your registration number to check expiry"
✅ CORRECT: If user says "My car ABC123 expires soon?" call vehicleExpiry with {registrationNumber: "ABC123"}`,
    temperature: 0.1,
    toolConfig: {
        functionCallingConfig: {
            mode: 'ANY',
            allowedFunctionNames: [
                getVehicleExpiry.name,
                cancelVehicleCover.name,
                getVehicleInfo.name,
                getCurrentUserInfo.name,
            ],
        },
    },
    tools: [
        {
            functionDeclarations: [
                getVehicleExpiry,
                cancelVehicleCover,
                getVehicleInfo,
                getCurrentUserInfo,
            ],
        },
    ],
};

export { modelConfigs };

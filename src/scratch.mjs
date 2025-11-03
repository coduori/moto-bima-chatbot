// // import { GoogleGenerativeAI } from '@google/generative-ai';
// // import { config } from 'dotenv';

// // config();

// // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_CLOUD_GEN_IA_API_KEY);

// // const model = genAI.getGenerativeModel({
// //     model: 'gemini-1.5-flash', // Free tier model
// //     generationConfig: {
// //         temperature: 0.1,
// //         maxOutputTokens: 1000,
// //     },
// // });

// // const functinoDeclaration = () => [
// //     {
// //         name: 'get_vehicle_info',
// //         description: 'Get vehicle registration details and information',
// //         parameters: {
// //             type: 'OBJECT',
// //             properties: {
// //                 registrationNumber: {
// //                     type: 'STRING',
// //                     description: 'Vehicle registration number',
// //                 },
// //                 chassisNumber: {
// //                     type: 'STRING',
// //                     description: 'Vehicle chassis number',
// //                 },
// //             },
// //             required: ['registrationNumber'],
// //         },
// //     },
// // ];

// // const chat = model.startChat({
// //     tools: functinoDeclaration(),
// // });

// // const result = await chat.crea('When does my vehicle expire: KAA121A?');
// // const response = result.response;

// // console.log(response);

// import { GoogleGenAI, mcpToTool } from '@google/genai';
// import { config } from 'dotenv';

// config();

// const GEMINI_API_KEY = process.env.GOOGLE_CLOUD_GEN_IA_API_KEY;
// const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// // const getVehiceExpiry = mcpToTool();

// // const chat = ai.chats.create({
// //     model: 'gemini-2.0-flash',
// //     config: {
// //         temperature: 0.5,
// //         maxOutputTokens: 1024,
// //     },
// // });

//         const model = ai.({ model: "gemini-pro" }); // Try gemini-pro instead
//         const result = await model.generateContent("Say hello in Swahili");
//         console.log(result)

// // const response = await ai.models.generateContent({
// //     model: 'gemini-2.0-flash-001',
// //     contents: 'Why is the sky blue?',
// // });
// // console.log(response.text);

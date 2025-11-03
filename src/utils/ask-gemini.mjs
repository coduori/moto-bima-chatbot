import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv';

config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_CLOUD_GEN_IA_API_KEY });

const askGemini = async ({ model = process.env.CHATBOT_MODEL, contents, config }) => {
    return ai.models.generateContent({
        model,
        contents,
        config,
    });
};

export { askGemini };

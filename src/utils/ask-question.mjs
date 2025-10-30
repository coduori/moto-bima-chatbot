import { InferenceClient } from '@huggingface/inference';
import { config } from 'dotenv';

config();

const huggingFaceInference = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

const askQuestion = async (question, logbookContext) => {
    try {
        const response = await huggingFaceInference.questionAnswering({
            model: 'deepset/roberta-base-squad2',
            inputs: {
                question: question,
                context: logbookContext,
            },
        });
        return response.answer || "I couldn't find that information in the logbook.";
    } catch {
        return '🚧 Prototype Note: An error occurred and the error would be handled in production';
    }
};

export { askQuestion };

import { config } from 'dotenv';

import { askGemini } from './utils/ask-gemini.mjs';
import { modelConfigs } from './utils/model-configs.mjs';
import {
    callFunction,
    getFunctionCall,
    shouldInvokeFunction,
} from './utils/should-invoke-function.mjs';

config();

const userQuestion = 'When does my vehicle expire?';

const response = await askGemini({
    model: process.env.CHATBOT_MODEL,
    contents: userQuestion,
    config: modelConfigs,
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

const finalResponse = await askGemini({
    model: process.env.CHATBOT_MODEL,
    contents,
});

// eslint-disable-next-line no-console
console.log('Final answer:', finalResponse.text);
// eslint-disable-next-line no-console
console.log('Final answer:', finalResponse?.candidates[0]);

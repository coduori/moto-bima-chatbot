import { FUNCTION_CALL_PROCESSOR } from './function-call-processor.mjs';

const shouldInvokeFunction = (response) => {
    return response.candidates && response.candidates[0].content.parts[0].functionCall
        ? true
        : false;
};

const getFunctionCall = (response) => {
    const shouldCallFunction = shouldInvokeFunction(response);

    if (!shouldCallFunction) {
        throw new Error('No function invocation planned.');
    }
    const fnctn = response.candidates[0].content.parts[0].functionCall;
    return {
        functionName: fnctn.name,
        functionArguments: fnctn.args,
    };
};

const callFunction = async (response) => {
    const { functionName, functionArguments } = getFunctionCall(response);
    const result = await FUNCTION_CALL_PROCESSOR[functionName](functionArguments);
    return result;
};

export { callFunction, getFunctionCall, shouldInvokeFunction };

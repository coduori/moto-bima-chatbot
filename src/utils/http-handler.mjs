import { getClient } from './http-client.mjs';

const sendHttpRequest = async (method, endpoint, data) => {
    try {
        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const { body: response } = await getClient().request({
            path: endpoint,
            method,
            body: JSON.stringify(data),
            headers,
        });
        const result = await response.json();

        // eslint-disable-next-line no-console
        console.log(`request to API:: ${JSON.stringify(data)}`);

        // eslint-disable-next-line no-console
        console.log(`response from API:: ${JSON.stringify(result)}`);
        return result;
    } catch (error) {
        throw new Error(`API Request error: ${error}`);
    }
};

export { sendHttpRequest };

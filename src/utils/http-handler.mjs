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

        return response.json();
    } catch (error) {
        throw new Error(`DMVIC Request error: ${error}`);
    }
};

export { sendHttpRequest };

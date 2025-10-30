import { Client } from 'undici';

let client;

const getClient = () => {
    if (client) return client;

    client = new Client('http://localhost:3000', {
        connect: {
            rejectUnauthorized: true,
        },
    });

    return client;
};

export { getClient };

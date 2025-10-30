import { sendHttpRequest } from './http-handler.mjs';

const checkVehicleExpiry = (registrationNumber) => {
    return sendHttpRequest('POST', '/check-vehicle-expiry', { registrationNumber });
};

export { checkVehicleExpiry };

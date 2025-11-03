import { sendHttpRequest } from './http-handler.mjs';

const checkVehicleExpiry = ({ registrationNumber }) => {
    return sendHttpRequest('POST', '/check-vehicle-expiry', { registrationNumber });
};

const cancelInsuranceCover = ({ certificateNumber, cancellationReason }) => {
    return sendHttpRequest('POST', '/cancel-insurance-cover', {
        certificateNumber,
        cancellationReason,
    });
};

export { cancelInsuranceCover, checkVehicleExpiry };

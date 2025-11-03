import { cancelInsuranceCover, checkVehicleExpiry } from './check-vehicle-expiry.mjs';

const FUNCTION_CALL_PROCESSOR = {
    vehicleExpiry: checkVehicleExpiry,
    cancelCover: cancelInsuranceCover,
};

export { FUNCTION_CALL_PROCESSOR };

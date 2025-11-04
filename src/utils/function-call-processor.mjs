import { cancelInsuranceCover, checkVehicleExpiry } from './check-vehicle-expiry.mjs';
import { getCurrentUserInfo, getVehicleInfo } from './dummy-functions.mjs';
import {
    cancelVehicleCover as cancelCover,
    getCurrentUserInfo as currentUser,
    getVehicleExpiry as vehicleExpiry,
    getVehicleInfo as vehicleInfo,
} from './function-configs.mjs';

const FUNCTION_CALL_PROCESSOR = {
    [vehicleExpiry.name]: checkVehicleExpiry,
    [cancelCover.name]: cancelInsuranceCover,
    [vehicleInfo.name]: getVehicleInfo,
    [currentUser.name]: getCurrentUserInfo,
};

export { FUNCTION_CALL_PROCESSOR };

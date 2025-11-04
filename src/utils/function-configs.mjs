const getVehicleExpiry = {
    name: 'vehicleExpiry',
    description:
        'Retrieve insurance status details including commencing and expiry dates. REQUIRES ACTUAL REGISTRATION NUMBER from user or response from a function call.',
    parametersJsonSchema: {
        type: 'object',
        properties: {
            registrationNumber: {
                type: 'string',
                description:
                    'actual vehicle registration number from user or response from a function call. If it is not provided DO NOT use a placeholder value, request the value from the user',
            },
            chassisNumber: {
                type: 'string',
                description:
                    'actual chassis number from user or response from a function call. If it is not provided DO NOT use a placeholder value, request the value from the user',
            },
        },
        required: ['registrationNumber'],
    },
};

const cancelVehicleCover = {
    name: 'cancelCover',
    description:
        "cancel a vehicle's insurance cover. REQUIRES ACTUAL CERTIFICATE NUMBER from user or previous function call AND CANCELLATION REASON from user",
    parametersJsonSchema: {
        type: 'object',
        properties: {
            certificateNumber: {
                type: 'string',
                description:
                    'actual certificate number from user or response from a function call. If it is not provided DO NOT use a placeholder value, request the value from the user',
            },
            cancellationReason: {
                type: 'string',
                description:
                    'actual cancellation reason from user. If it is not provided DO NOT use a placeholder value, request the value from the user',
            },
        },
        required: ['cancellationReason', 'certificateNumber'],
    },
};

const getCurrentUserInfo = {
    name: 'getUserInfo',
    description:
        'retrieves info about the user interacting with the model. This info is helpful in getting context such as vehicle info and policy holder details',
    parametersJsonSchema: {},
};

const getVehicleInfo = {
    name: 'getVehicleInfo',
    description:
        'retrieves vehicle info related to the user interacting with the model. This info is helpful in getting vehicle information such as chassis number, registration number passenger count etc.',
    parametersJsonSchema: {
        type: 'object',
        properties: {
            userId: {
                type: 'number',
                description:
                    'the user id retrieved from the contents of getUserInfo function call. THIS VALUE SHOULD NOT BE GUESSED!',
            },
        },
        required: ['userId'],
    },
};

export { cancelVehicleCover, getCurrentUserInfo, getVehicleExpiry, getVehicleInfo };

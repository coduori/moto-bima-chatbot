const getVehicleExpiry = {
    name: 'vehicleExpiry',
    parametersJsonSchema: {
        type: 'object',
        properties: {
            registrationNumber: {
                type: 'string',
            },
            chassisNumber: {
                type: 'string',
            },
        },
        required: ['registrationNumber'],
    },
};

const cancelVehicleCover = {
    name: 'cancelCover',
    parametersJsonSchema: {
        type: 'object',
        properties: {
            certificateNumber: {
                type: 'string',
            },
            cancellationReason: {
                type: 'string',
            },
        },
        required: ['cancellationReason', 'certificateNumber'],
    },
};

export { cancelVehicleCover, getVehicleExpiry };

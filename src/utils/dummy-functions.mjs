const USERS_DB = [
    {
        id: 1,
        name: 'Peter',
        nationalId: 21708945,
        kraPin: 'A010323898J',
    },
    {
        id: 2,
        name: 'John',
        nationalId: 21895645,
        kraPin: 'A010980788K',
    },
    {
        id: 3,
        name: 'Samuel',
        nationalId: 29087645,
        kraPin: 'A097855678V',
    },
    {
        id: 4,
        name: 'Simon',
        nationalId: 29087645,
        kraPin: 'A095567856V',
    },
];
const VEHICLES_DB = [
    {
        id: 1,
        policyHolderId: 1,
        registration: 'KAA 121A',
        chassis: '000-999889JYHU',
    },
    {
        id: 2,
        policyHolderId: 2,
        registration: 'KCR 112G',
        chassis: '02G0-3424234FGHJIUH',
    },
    {
        id: 3,
        policyHolderId: 3,
        registration: 'KBA 642X',
        chassis: 'HH-234JKHUO389JYHU',
    },
];

const getCurrentUserInfo = () => {
    const userId = Math.floor(Math.random() * 10) + 1;
    return USERS_DB.find((user) => user.id === userId);
};

const getVehicleInfo = ({ userId }) => {
    return VEHICLES_DB.find((vehicle) => vehicle.policyHolderId === userId);
};

export { getCurrentUserInfo, getVehicleInfo };

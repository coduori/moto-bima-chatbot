const generateLogbookContext = (logbookData) => {
    const data = logbookData || {};

    let contextText = `VEHICLE LOGBOOK INFORMATION:
        
Registration Details:
- Registration Number: ${data.vehicleRegistration}
- Registration Date: ${data.dateOfRegistration}

Vehicle Specifications:
- Make: ${data.vehicleMake}
- Model: ${data.vehicleModel}
- Type: ${data.vehicleType}
- Body Type: ${data.vehicleBody}
- Year: ${data.yearOfManufacture}
- Color: ${data.vehicleColor}
- Fuel Type: ${data.fuelType}
- Chassis/Frame: ${data.chassisNumber}
- Engine Number: ${data.engineNumber}

Ownership:
- Owner Name: ${data.name}
- Owner PIN: ${data.PIN}

Additional Information:
- Number of Axles: ${data.axles}
- Tax Class: ${data.vehicleType}`;

    return contextText;
};

export { generateLogbookContext };

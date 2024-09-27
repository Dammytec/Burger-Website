import React, { useState } from 'react';

const statesLocalGov = {
    Abuja: ['Garki', 'Wuse', 'Asokoro', 'Kwali', 'Abaji', 'Bwari'],
    Lagos: ['Ikeja', 'Surulere', 'Yaba', 'Agege', 'Apapa', 'Ifako-ijaye', 'Kosofe', 'Mushin', 'Oshodi-isolo', 'shomolu', 'Ojo', 'Ajeromi-ifelodun', 'Amuwo-odofin', 'Badagry', 'Ikorodu', 'Ibeju-Lekki', 'Epe'],
};

function State({ stateValue, localGovValue, handleStateChange, handleLocalGovChange }) {
    const [localGovAreas, setLocalGovAreas] = useState([]);

    const onStateChange = (event) => {
        const selectedState = event.target.value;
        handleStateChange(event); // Update the parent component's state
        setLocalGovAreas(statesLocalGov[selectedState] || []);
    };

    return (
        <div className="pr-4">
            <div className="mb-4">
                <label className="block text-[#502314]">
                    State<span className="text-red-500">*</span>
                </label>
                <select
                    name="state"
                    className="border border-gray-300 rounded p-2 mt-1 w-full md:w-[400px] outline-red-200"
                    value={stateValue}
                    onChange={onStateChange}
                >
                    <option value="">Select State</option>
                    {Object.keys(statesLocalGov).map(state => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-[#502314]">
                    Local Government Area<span className="text-red-500">*</span>
                </label>
                <select
                    name="localGovArea"
                    className="border border-gray-300 rounded p-2 mt-1 w-full md:w-[400px] outline-red-200"
                    value={localGovValue}
                    onChange={handleLocalGovChange}
                    disabled={!stateValue}
                >
                    <option value="">Select Local Government Area</option>
                    {localGovAreas.map(area => (
                        <option key={area} value={area}>
                            {area}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
    
}

export default State;


import React, { useState } from 'react';

const PhoneNumberInput = ({ value, onChange }) => {
    const [countryCode, setCountryCode] = useState('+234');
    const [phoneNumber, setPhoneNumber] = useState(value || '');

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        let code = '';
        
        switch (selectedCountry) {
            case 'Nigeria':
                code = '+234';
                break;
            case 'USA':
                code = '+1';
                break;
            case 'Australia':
                code = '+61';
                break;
            default:
                code = '';
        }

        setCountryCode(code);
        setPhoneNumber(code + ' ');  // Update the phone number field with the country code
    };

    const handlePhoneNumberChange = (e) => {
        const newPhoneNumber = countryCode + ' ' + e.target.value.replace(countryCode + ' ', '');
        setPhoneNumber(newPhoneNumber);
        onChange(e); // Notify parent of the change
    };

    return (
        <div className="w-full max-w-xs flex mt-4">
            <select
                onChange={handleCountryChange}
                className="px-2 py-2 border-r-0 border rounded-l-lg focus:outline-none"
            >
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
            </select>
            <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-2 border rounded-r-lg focus:outline-red-200"
            />
        </div>
    );
};

export default PhoneNumberInput;




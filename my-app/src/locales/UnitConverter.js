import React, { useState } from 'react';
import { convertUnits } from './format'; 

const UnitConverter = () => {
    const [value, setValue] = useState(0); 
    const [type, setType] = useState('inches'); 

    const conversionResult = convertUnits(value, type);
    const error = conversionResult.error;

    return (
        <div className="unit-converter">
            <label>
                Enter Value: 
                <input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))} />
            </label>

            <label>
                Select Type of Conversion: 
                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="inches">Inches to Centimeters</option>
                    <option value="pounds">Pounds to Kilograms</option>
                    <option value="liters">Liters to Ounces</option>
                    <option value="missing">Centimeters to Kilometers</option>
                </select>
            </label>

            <div className="conversion-result">
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <>
                        <p>Converted Value: {Object.values(conversionResult)[0]}</p>
                        <p>Converted Unit: {Object.keys(conversionResult)[0]}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default UnitConverter;

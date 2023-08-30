import React, { useState } from 'react';
import { formatNumber } from './format'; 

const NumberFormatter = () => {
    const [num, setNum] = useState(0); 
    const [locale, setLocale] = useState('en-US'); 

    const formattedNumbers = formatNumber(num, locale);

    return (
        <div className="number-formatter">
            <label>
                Enter Number: 
                <input type="number" value={num} onChange={e => setNum(parseFloat(e.target.value))} />
            </label>

            <label>
                Select Locale: 
                <select value={locale} onChange={e => setLocale(e.target.value)}>
                    <option value="en-US">English (US)</option>
                    <option value="fr-FR">French (France)</option>
                    <option value="ua-UA">Ukrainian (Ukraine)</option>
                    <option value="xx-XX">Missing (Missing)</option>
                </select>
            </label>

            <div className="formatted-numbers">
                <p>Default: {formattedNumbers[0]}</p>
                <p>Currency: {formattedNumbers[1]}</p>
                <p>With Decimals: {formattedNumbers[2]}</p>
                <p>Scientific Notation: {formattedNumbers[3]}</p>
            </div>
        </div>
    );
};

export default NumberFormatter;

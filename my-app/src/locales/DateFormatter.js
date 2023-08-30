import React, { useState } from 'react';
import { formatDate } from './format'; 

const DateFormatter = () => {
    const [date, setDate] = useState(new Date()); 
    const [locale, setLocale] = useState('en-US'); 

    const formattedDates = formatDate(date, locale);

    return (
        <div className="date-formatter">
            <label>
                Select Date: 
                <input type="datetime-local" onChange={e => setDate(new Date(e.target.value))} />
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

            <div className="formatted-dates">
                <p>{formattedDates[0]}</p>
                <p>{formattedDates[1]}</p>
                <p>{formattedDates[2]}</p>
                <p>{formattedDates[3]}</p>
            </div>
        </div>
    );
};

export default DateFormatter;

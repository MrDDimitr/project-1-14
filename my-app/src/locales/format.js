export const formatDate = (date, locale) => {
    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const options3 = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const options4 = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

    const safelyFormatDate = (options) => {
        try {
            return new Intl.DateTimeFormat(locale, options).format(date);
        } catch (error) {
            console.error('Error formatting date:', error);
            return date.toString();  // Return the date in its default string representation as a fallback
        }
    };

    return [
        safelyFormatDate(options1),
        safelyFormatDate(options2),
        safelyFormatDate(options3),
        safelyFormatDate(options4)
    ];
};

export const formatNumber = (num, locale) => {
    const defaultFormat = num.toString();

    const currencyMap = {
        'en-US': 'USD',
        'ua-UA': 'UAH',
        'fr-FR': 'EUR',
    };

    const safelyFormat = (options) => {
        try {
            return new Intl.NumberFormat(locale, options).format(num);
        } catch (error) {
            console.error('Error formatting number:', error);
            return defaultFormat; // Use default format in case of error
        }
    };

    return [
        safelyFormat(),
        safelyFormat({ style: 'currency', currency: currencyMap[locale] || 'USD' }),
        safelyFormat({ minimumFractionDigits: 2 }),
        safelyFormat({ notation: 'scientific' })
    ];
};

export const convertUnits = (value, type) => {
    const conversions = {
        'inches': {
            'cm': value * 2.54
        },
        'pounds': {
            'kg': value * 0.453592
        },
        'liters': {
            'oz': value * 33.814
        }
    };

    if (!conversions[type]) {
        console.error(`Error: Invalid type "${type}" provided.`);
        return { error: `Invalid type "${type}". Available types are: ${Object.keys(conversions).join(', ')}.` };
    }

    return conversions[type];
};

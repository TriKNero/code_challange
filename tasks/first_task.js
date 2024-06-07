
function getSignFromString(str) {
    const firstChar = str[0];
    let sign;
    if ('-' === firstChar) sign = -1;
    if ('+' === firstChar) sign = 1;
    return sign;
}

function parseInt(str) {
    let result = 0;
    let stringToParse = str;
    const sign = getSignFromString(str)
    if (sign) stringToParse = str.slice(1);

    for (let i = 0; i < stringToParse.length; i++) {
        const zeroCharCode = 48;
        const nineCharCode = zeroCharCode + 9;
        const charCode = stringToParse.charCodeAt(i);
        const isNumberChar = charCode >= zeroCharCode && charCode <= nineCharCode;

        if (isNumberChar) result = result * 10 + (charCode - zeroCharCode);
        else break;
    }

    if (result === 0) return 0;
    return sign ? result * sign : result;
}


module.exports = parseInt;
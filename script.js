function toCase(text) {
if (text.length === 0) {
        return '-';
    }

    // Convert the string to lowercase
    const lowercaseStr = text.toLowerCase();

    // Append '-' and the uppercase version of the same string
    const result = lowercaseStr + '-' + text.toUpperCase();

    // Return the newly formed string
    return result;
}

const text = prompt("Enter text:");
alert(toCase(text));

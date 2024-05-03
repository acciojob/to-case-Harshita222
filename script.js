function toCase(text) {
    // Check if the input text is empty
    if (text.length === 0) {
        return '-';
    } else {
        let result = '';
        for (let i = 0; i < text.length; i++) {
			  if (text[i] === ' ') {
                result += '-';
				  } else {
            // Convert each character to lowercase and append '-' followed by its uppercase version
            result += text[i].toLowerCase() + '-' + text[i].toUpperCase();
        }
		}
        return result;
    }
}



const text = prompt("Enter text:");
alert(toCase(text));

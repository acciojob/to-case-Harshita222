function toCase(text) {
  // write your code here
	if (text.length === 0) {
		return '-';
	}else{
		for (let i = 0; i < text.length; i++) {
			let res=text[i].toLowerCase()+'-'+toUpperCase()
		return res;
		}
	
	
}
// const text = prompt("Enter text:");
alert(toCase(text));

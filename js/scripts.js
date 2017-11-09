var a = 7,
	b = 12,
	value = (a * a) - (2 * a * b) + (b * b);
	
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0 ) {
    console.log('wynik ujemny');
} else {
	console.log('wynik równy 0');
}

//only a pull request change
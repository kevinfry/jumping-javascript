function isValidForDisplay(a) {
	// the most annoying
	if (a === undefined) {
		return false;
	}
	// this one can happen too
	if (a === null) {
		return false;
	}
	// mobile first -> if it's not there, let's not show it
	if (a.toString() === '') {
		return false;
	}
	// some data sets might return this
	if (a.toString() === 'null') {
		return false;
	}

	// eh, another condition that may remain
	return a.toString() !== 'n/a';
}

// https://stackoverflow.com/questions/14484787/wrap-text-in-javascript/14487422#14487422
function wordWrap(str, maxWidth) {
	var newLineStr = "<br />";
	var done = false;
	var res = '';
	do {
		var found = false;
		// Inserts new line at first whitespace of the line
		for (i = maxWidth - 1; i >= 0; i--) {
			if (testWhite(str.charAt(i))) {
				res = res + [str.slice(0, i), newLineStr].join('');
				str = str.slice(i + 1);
				found = true;
				break;
			}
		}
		// Inserts new line at maxWidth position, the word is too long to wrap
		if (!found) {
			res += [str.slice(0, maxWidth), newLineStr].join('');
			str = str.slice(maxWidth);
		}

		if (str.length < maxWidth)
			done = true;
	} while (!done);

	return res + str;
}

function testWhite(x) {
	var white = new RegExp(/^\s$/);
	return white.test(x.charAt(0));
}

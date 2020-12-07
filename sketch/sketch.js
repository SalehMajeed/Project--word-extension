function setup() {
	noCanvas();

	let bgpage = chrome.extension.getBackgroundPage();
	let word = bgpage.word.trim();
	let url = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key='your api'`;

	loadJSON(url, got_data);

	function got_data(data) {
		console.log(data[0].text);
		createP(data[0].text);
	}
}

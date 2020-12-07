chrome.runtime.onMessage.addListener(receiver);

window.word = '';

function receiver(request, sender, response) {
	window.word = request.text;
}

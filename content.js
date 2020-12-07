window.addEventListener('mouseup', moused_upped);

function moused_upped() {
	let selected_tex = window.getSelection().toString().trim();

	if (selected_tex.length > 0) {
		let message = {
			text: selected_tex,
		};
		chrome.runtime.sendMessage(message);
	}
}

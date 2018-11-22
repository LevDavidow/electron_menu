// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const target = document.getElementById('target');

document.addEventListener('mouseup', (e) => {
	target.style.top = `${e.clientY}px`;
	target.style.left = `${e.clientX}px`;
});
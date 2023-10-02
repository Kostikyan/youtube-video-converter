const convertButton = document.getElementById("convert-button");
const inputUrl = document.getElementById("inputURL");

convertButton.addEventListener('click', () => {
    console.log(`URL: ${inputUrl.value}`);
    sendURL(inputUrl.value);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
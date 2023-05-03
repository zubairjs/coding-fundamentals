const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');
const randomizeButton = document.getElementById('randomize-button');
const copyButton = document.getElementById('copy-text');
const checkmarkSucces = document.getElementById('checkmark-succes');

const QUOTE_API_ENDPOINT = 'https://api.quotable.io';

async function getQuote() {
  const response = await fetch(`${QUOTE_API_ENDPOINT}/quotes/random`);
  const data = await response.json();
  return data;
}

async function displayQuote() {
  const randomQuote = await getQuote();
  quoteText.textContent = await randomQuote[0].content;
  author.textContent = await `— ${randomQuote[0].author}`;
  copyButton.style.display = 'inline-block';
  checkmarkSucces.style.display = 'none';
}

function copyToClipboard() {
  const textToCopy = `“${quoteText.textContent}” ${author.textContent}.`;
  navigator.clipboard.writeText(textToCopy);
  copyButton.style.display = 'none';
  checkmarkSucces.style.display = 'inline-block';
}

window.addEventListener('DOMContentLoaded', async (e) => {
  e.preventDefault();
  await displayQuote();
});

randomizeButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await displayQuote();
});

copyButton.addEventListener('click', copyToClipboard);

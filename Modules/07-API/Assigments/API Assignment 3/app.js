const GIST_API_ENDPOINT =
  'https://api.github.com/gists/d5a2b0a4ead2fa517aef6e1dfc279ccc';

async function getBio() {
  const response = await fetch(GIST_API_ENDPOINT);
  const data = await response.json();
  return JSON.parse(data.files['me.json'].content);
}

async function displayBio() {
  const { name, age, hobbies } = await getBio();
  document.querySelector('#name').textContent = `Name: ${name}`;
  document.querySelector('#age').textContent = `Age: ${age}`;
  document.querySelector('.bio').classList.toggle('hidden');
  document.querySelector('.likes').classList.toggle('hidden');

  const hobbiesList = document.querySelector('#hobbies');
  hobbies.forEach((hobby) => {
    const hobbyItem = document.createElement('li');
    hobbyItem.classList.add('hobby');
    hobbyItem.textContent = hobby;
    hobbiesList.appendChild(hobbyItem);
  });
}

const button = document.getElementById('fetch-button');

button.addEventListener(
  'click',
  async (e) => {
    e.preventDefault();
    displayBio();
  },
  { once: true }
);

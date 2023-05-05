const API_ENDPOINT = 'https://api.github.com/users';

async function getUser(username) {
  const response = await fetch(`${API_ENDPOINT}/${username}`);
  const userData = await response.json();
  return userData;
}

function displayStyle(element, property) {
  element.style.display = property;
}

function getDate(dateString) {
  if (!dateString) return;
  const dateObj = new Date(dateString);
  const date = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const year = dateObj.getFullYear();
  return `${date} ${month} ${year}`;
}

async function displayUser(username) {
  const pendingSearch = document.querySelector('.pending-search');
  displayStyle(pendingSearch, 'none');

  const onSearch = document.querySelector('.on-search');
  displayStyle(onSearch, 'flex');

  const userAvatar = document.querySelector('.user-avatar');
  const userName = document.querySelector('.user-name');
  const userBio = document.querySelector('.bio');
  const joinedDate = document.querySelector('.joined-date');

  const user = await getUser(username);
  if (user.login === undefined) {
    userAvatar.src = './image/avatar-placeholder.png';
    userAvatar.alt = 'avatar';
    userName.href = '#';
    userName.textContent = 'No such user found.';
    userBio.textContent = '';
    joinedDate.textContent = '';
    console.log('User', user.message);
    return;
  } else {
    userAvatar.src = user.avatar_url;
    userAvatar.alt = 'avatar';
    userName.href = user.html_url;
    userName.textContent = user.name || user.login;
    userBio.textContent = user.bio;
    const createdDate = getDate(user.created_at);
    joinedDate.textContent = `Joined at: ${createdDate}`;
    joinedDate.title = new Date(user.created_at);
  }
}

const getUserButton = document.querySelector('#get-button');
const userNameInput = document.querySelector('#username');

getUserButton.addEventListener('click', async (e) => {
  e.preventDefault();
  displayUser(userNameInput.value);
});

userNameInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    displayUser(userNameInput.value);
  }
});

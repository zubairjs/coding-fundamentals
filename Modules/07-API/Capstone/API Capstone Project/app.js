const CAT_API_ENDPOINT = 'https://api.thecatapi.com/v1/breeds';

async function getCatsData() {
  const response = await fetch(CAT_API_ENDPOINT);
  const data = await response.json();
  return data;
}

// #Method 1

async function displayCatCards() {
  const catsData = await getCatsData();
  const cards = document.querySelector('.cards');

  for (let i = 0; i < catsData.length; i++) {
    const card = document.createElement('article');
    card.classList.add('card');

    const imageSection = document.createElement('section');
    imageSection.classList.add('img-container');
    imageSection.innerHTML = `
    <img
      class="cat-image"
      src="https://cdn2.thecatapi.com/images/${catsData[i].reference_image_id}.jpg"
      alt="${catsData[i].name} cat"
      onerror="this.onerror=null; this.src='./image/missing-cat.jpg'"
    />
    <img class="stretch-icon" src="./image/stretch-image.svg" alt="stretch icon" />
    `;

    const infoSection = document.createElement('section');
    infoSection.classList.add('info');

    const breedName = document.createElement('h3');
    breedName.classList.add('breed-name');
    breedName.textContent = catsData[i].name;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = catsData[i].description;

    infoSection.append(breedName, description);

    const linkSection = document.createElement('section');
    linkSection.classList.add('link');

    const profileLink = document.createElement('a');
    profileLink.classList.add('profile-link');
    profileLink.href = catsData[i].wikipedia_url;
    profileLink.target = '_blank';
    profileLink.textContent = 'Profile';

    linkSection.appendChild(profileLink);

    card.append(imageSection, infoSection, linkSection);
    cards.appendChild(card);
  }
}

// #Method 2 (Alternative)
// async function displayCatCards() {
//   const catsData = await getCatsData();
//   const cards = document.querySelector('.cards');

//   for (let i = 0; i < catsData.length; i++) {
//     console.log(i, catsData[i].name, catsData[i].reference_image_id);
//     cards.innerHTML += `
//     <article class="card">
//       <section class="img-container">
//         <img
//           class="cat-image"
//           src="https://cdn2.thecatapi.com/images/${catsData[i].reference_image_id}.jpg"
//           alt="${catsData[i].name} cat"
//           onerror="this.onerror=null; this.src='./image/missing-cat.jpg'"
//         />
//         <img class="stretch-icon" src="./image/stretch-image.svg" alt="stretch icon" />
//       </section>

//       <section class="info">
//         <h3 class="breed-name">${catsData[i].name}</h3>
//         <p class="description">${catsData[i].description}</p>
//       </section>

//       <section class="link">
//         <a
//           class="profile-link"
//           href=${catsData[i].wikipedia_url}
//           target="_blank"
//           >Profile</a
//         >
//       </section>
//     </article>`;
//   }
// }

// #Event

async function fullScreenImage(e) {
  const catImages = document.querySelectorAll('.cat-image');

  for (let image of catImages) {
    image.onclick = () => {
      image.classList.toggle('zoom');
    };
  }
}

window.addEventListener('DOMContentLoaded', async (e) => {
  await displayCatCards();
  fullScreenImage();
});

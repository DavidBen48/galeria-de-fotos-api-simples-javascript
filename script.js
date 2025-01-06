// URL da API do Unsplash para buscar imagens de carros específicos e limitar a 20 imagens
const API_URL = 'https://api.unsplash.com/search/photos?client_id=qT-xVxWbEWHgpEviVvE1j9IVbtFzcSVZ4ueI2RJh7iU&query=auto&per_page=20';

const searchInput = document.getElementById('search-bar');
const searchButton = document.getElementById('search-btn');
const photoGallery = document.getElementById('photo-gallery');

async function loadPhotos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    photoGallery.innerHTML = ''; 

    data.results.forEach(photo => { 
      const photoItem = document.createElement('div');
      photoItem.classList.add('photo-item');

      const img = document.createElement('img');
      img.src = photo.urls.small; 
      img.alt = photo.alt_description; 

      const title = document.createElement('div');
      title.classList.add('photo-title');
      title.textContent = photo.alt_description || 'Sem título'; 

      photoItem.appendChild(img);
      photoItem.appendChild(title);
      photoGallery.appendChild(photoItem);
    });
  } catch (error) {
    console.error('Erro ao carregar fotos:', error);
  }
}

function filterPhotos() {
  const query = searchInput.value.toLowerCase(); 

  const photos = document.querySelectorAll('.photo-item');

  photos.forEach(photo => {
    const title = photo.querySelector('.photo-title').textContent.toLowerCase(); 
    if (title.includes(query)) { 
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
}

searchButton.addEventListener('click', filterPhotos); 
searchInput.addEventListener('input', filterPhotos); 

loadPhotos(); 
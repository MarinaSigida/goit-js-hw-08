// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        alt=${description}
      />
    </a>
  </li>
  `;
});

console.log(galleryItem);

gallery.insertAdjacentHTML('beforeend', galleryItem.join(''));

// Modal window with simple ligthbox
const lightbox = new SimpleLightbox('.gallery a', {
  // captionType: text,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionsDelay: 250,
});

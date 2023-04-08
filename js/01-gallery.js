import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      galleryItem =>
        `<div class="gallery__item">
        <a clss="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}"
        alt= "${galleryItem.description}"></a></div>`
    )
    .join('')
);

galleryRef.addEventListener('click', activateOriginalImage);

function activateOriginalImage(event) {
  event.preventDefault();

  console.log('activateOriginalImage -> target', event.target);
  console.log('activateOriginalImage -> currentTarget', event.currentTarget);

  console.log(event);
  console.log(event.target.nodeName);

  if (event.target.nodeName !== 'IMG') {
    return;
  }

 

  console.log(event.target.dataset);
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();

}
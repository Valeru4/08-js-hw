// Add imports above this line
import { galleryItems } from './gallery-items'

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";




const galleryEl = document.querySelector('.gallery')

const imgItemEl = createImageItemEl(galleryItems)


galleryEl.insertAdjacentHTML('beforeend', imgItemEl)

function createImageItemEl(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                                    <a class="gallery__link" href="${original}">
                                        <img
                                        class="gallery__image"
                                        src="${preview}"
                                        alt="${description}"
                                        />
                                    </a>
                                </li>`;
    }).join('');
}



galleryEl.addEventListener('click',  new SimpleLightbox('.gallery__item a', 
    {captionDelay: 250,  captionsData: 'alt', enableKeyboard: true}))



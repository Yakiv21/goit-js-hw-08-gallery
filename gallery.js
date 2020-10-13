import galleryImagesEl from "./gallery-items.js"

const galleryEl = document.querySelector('.js-gallery');
const modalLightboxEl = document.querySelector('.js-lightbox');
const overlayEl = document.querySelector('.lightbox__overlay');
const modalImageEl = document.querySelector('.lightbox__image');
const buttonEl = document.querySelector('.lightbox__button');

const galleryListEl = createGalleryList(galleryImagesEl);

galleryEl.insertAdjacentHTML("beforeend", galleryListEl);

galleryEl.addEventListener('click', onOpenModal);
buttonEl.addEventListener('click', onCloseModal);
overlayEl.addEventListener('click', onCloseModalOnOverlay);
document.addEventListener('keydown', onCloseModalEsc);

  function createGalleryList(img) {
    return  img.map(({original, description, preview}) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`}).join("");
  }  
 
function onOpenModal(evt) {
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains('gallery__image');
    
    if (!isGalleryImage) {
        return;
    };

    modalLightboxEl.classList.add('is-open');
    modalImageEl.src = evt.target.dataset.source;
    modalImageEl.alt = evt.target.alt;
}

function onCloseModal() {
    modalLightboxEl.classList.remove("is-open");
    modalImageEl.src = "";
}

function onCloseModalOnOverlay(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseModal();
    }
}
function onCloseModalEsc (evt) {
    if (evt.code === "Escape") {
        onCloseModal();
    }
}





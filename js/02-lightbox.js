import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.addEventListener("click", onClickGalleryConteiner);

const makeGaleryElements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a></li>`
  )
  .join("");

galleryConteiner.insertAdjacentHTML("afterbegin", makeGaleryElements);

function onClickGalleryConteiner(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;

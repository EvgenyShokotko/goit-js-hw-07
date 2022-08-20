import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.addEventListener("click", onClickGalleryConteiner);

const makeGaleryElements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"src="${preview}" data-source="${original}" alt="${description}" />
      </a>
      </div>`
  )
  .join("");

galleryConteiner.insertAdjacentHTML("afterbegin", makeGaleryElements);

function onClickGalleryConteiner(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  addBasicLightbox(event);
}

function addBasicLightbox(event) {
  const instance = basicLightbox.create(
    `<img class = "close" src="${event.target.dataset.source}"/>`
  );
  instance.show();
  closeBasicLightbox(instance);
}

function closeBasicLightbox(instance) {
  instance.show(
    galleryConteiner.addEventListener("keydown", (event) => {
      console.log(event.key);
      if (event.key === "Escape") {
        instance.close();
      }
    })
  );
}

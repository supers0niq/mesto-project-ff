export function createCard(cardData, onImageClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  cardImage.addEventListener("click", () => onImageClick(cardData));

  return cardElement;
}

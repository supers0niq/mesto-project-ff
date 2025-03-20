export function createCard(cardData, onImageClick, onDeleteClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  cardImage.addEventListener("click", () => onImageClick(cardData));

  deleteButton.addEventListener("click", onDeleteClick);

  return cardElement;
}

export function deleteCard(evt) {
  const cardElement = evt.target.closest('.card');
  cardElement.remove();
}
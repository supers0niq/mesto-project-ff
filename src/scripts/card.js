import { putLike, deleteLike } from "./api.js";

export function createCard(cardData, onImageClick, onDeleteClick, profileId) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeCounter = cardElement.querySelector(".card__like-count");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeCounter.textContent = cardData.likes?.length || 0;

  likeButton.addEventListener("click", () => {
    const isLiked = likeButton.classList.contains("card__like-button_is-active");
    const likeMethod = isLiked ? deleteLike : putLike;
    // Only allow likes for server cards with _id
    if (cardData._id) {
      likeMethod(cardData._id)
        .then((updatedCard) => {
          likeButton.classList.toggle("card__like-button_is-active");
          likeCounter.textContent = updatedCard.likes.length;
        })
        .catch((error) => {
          console.error("Error toggling like:", error);
          alert("Не удалось обновить лайк.");
        });
    }
  });

  cardImage.addEventListener("click", () => onImageClick(cardData));

  // Show delete button for initialCards or owned server cards
  if (cardData.owner?._id && cardData.owner._id !== profileId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", () => onDeleteClick(cardData._id, cardElement));
  }

  // Set initial like state for server cards
  if (cardData._id && cardData.likes?.some((like) => like._id === profileId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  return cardElement;
}
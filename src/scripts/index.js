import "../pages/index.css";
import { openPopup, closePopup, openImagePopup } from "./modal.js";
import { createCard } from "./card.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileForm = profilePopup.querySelector(".popup__form");
const cardForm = cardPopup.querySelector(".popup__form");
const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const cardsContainer = document.querySelector(".places__list");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const handleImageClick = (cardData) => {
  openImagePopup(imagePopup, cardData);
};

initialCards.forEach((item) => {
  const cardElement = createCard(item, handleImageClick);
  cardsContainer.append(cardElement);
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
});

profileAddButton.addEventListener("click", () => {
  cardForm.reset();
  openPopup(cardPopup);
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
});

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardForm.querySelector(".popup__input_type_card-name").value;
  const link = cardForm.querySelector(".popup__input_type_url").value;
  const cardElement = createCard({ name, link }, handleImageClick); // Передаём обработчик
  cardsContainer.prepend(cardElement);
  closePopup(cardPopup);
});

document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", (evt) => {
    const popup = evt.target.closest(".popup");
    if (popup) {
      closePopup(popup);
    }
  });
});

document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

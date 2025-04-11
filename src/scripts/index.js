import "../pages/index.css";
import { openPopup, closePopup } from "./modal.js";
import { createCard } from "./card.js";
import {
  getInitialInfo,
  editProfile,
  postNewCard,
  deleteMyCard,
  updateNewAvatar,
} from "./api.js";
import {
  enableValidation,
  clearValidation,
  validationConfig,
} from "./validation.js";

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileImageButton = document.querySelector(".profile__image_cover");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const avatarPopup = document.querySelector(".popup_type_avatar");
const deletePopup = document.querySelector(".popup_type_delete");

const profileForm = document.forms["edit-profile"];
const cardForm = document.forms["new-place"];
const avatarForm = document.forms["avatar_edit"];
const deleteForm = document.forms["delete-card"];

const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const cardNameInput = cardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = cardForm.querySelector(".popup__input_type_url");
const avatarLinkInput = avatarForm.querySelector(".popup__input_type_url");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

let profileId = null;
let currentDeleteCard = null;

function showLoadingBtn(isLoading, button) {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
  button.disabled = isLoading;
}

function handleImageClick(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(imagePopup);
}

function handleDeleteClick(cardId, cardElement) {
  currentDeleteCard = { cardId, cardElement };
  openPopup(deletePopup);
}

function addCard(cardData) {
  const cardElement = createCard(
    cardData,
    handleImageClick,
    handleDeleteClick,
    profileId
  );
  cardsContainer.prepend(cardElement);
}

function loadCards(cards) {
  cardsContainer.innerHTML = "";
  cards.forEach((card) => addCard(card));
}


getInitialInfo()
  .then(([user, serverCards]) => {
    profileId = user._id;
    profileName.textContent = user.name;
    profileJob.textContent = user.about;
    profileImage.style.backgroundImage = `url(${user.avatar})`;
    loadCards(serverCards);
  })
  .catch((error) => {
    console.error("Failed to load server data:", error);
    alert(
      "Не удалось загрузить данные с сервера. Пожалуйста, обновите страницу."
    );
  });


profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  clearValidation(profileForm, validationConfig);
  openPopup(profilePopup);
});

profilePopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closePopup(profilePopup));

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = nameInput.value;
  const job = jobInput.value;
  const saveButton = profileForm.querySelector(".popup__button");
  showLoadingBtn(true, saveButton);

  editProfile(name, job)
    .then((user) => {
      profileName.textContent = user.name;
      profileJob.textContent = user.about;
      closePopup(profilePopup);
    })
    .catch((error) => {
      console.error("Profile update failed:", error);
      alert("Не удалось обновить профиль.");
    })
    .finally(() => showLoadingBtn(false, saveButton));
});


profileAddButton.addEventListener("click", () => {
  cardForm.reset();
  clearValidation(cardForm, validationConfig);
  openPopup(cardPopup);
});

cardPopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closePopup(cardPopup));

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  const saveButton = cardForm.querySelector(".popup__button");

  
  if (!name || !link) {
    alert("Пожалуйста, заполните оба поля: название и ссылку.");
    return;
  }
  if (name.length < 2 || name.length > 30) {
    alert("Название должно быть от 2 до 30 символов.");
    return;
  }
  const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlPattern.test(link)) {
    alert(
      "Пожалуйста, введите корректную ссылку (например, https://example.com/image.jpg)."
    );
    return;
  }

  showLoadingBtn(true, saveButton);

  postNewCard(name, link)
    .then((card) => {
      addCard(card);
      closePopup(cardPopup);
      cardForm.reset();
    })
    .catch((error) => {
      console.error("Card creation failed:", error);
      alert(`Не удалось добавить карточку. Ошибка: ${error}`);
    })
    .finally(() => showLoadingBtn(false, saveButton));
});

profileImageButton.addEventListener("click", () => {
  avatarForm.reset();
  clearValidation(avatarForm, validationConfig);
  openPopup(avatarPopup);
});

avatarPopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closePopup(avatarPopup));

avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const link = avatarLinkInput.value;
  const saveButton = avatarForm.querySelector(".popup__button");
  showLoadingBtn(true, saveButton);

  updateNewAvatar(link)
    .then((user) => {
      profileImage.style.backgroundImage = `url(${user.avatar})`;
      closePopup(avatarPopup);
    })
    .catch((error) => {
      console.error("Avatar update failed:", error);
      alert("Не удалось обновить аватар. Проверьте ссылку.");
    })
    .finally(() => showLoadingBtn(false, saveButton));
});


deletePopup.querySelector(".popup__close").addEventListener("click", () => {
  closePopup(deletePopup);
  currentDeleteCard = null;
});

deleteForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!currentDeleteCard) return;

  const { cardId, cardElement } = currentDeleteCard;
  const saveButton = deleteForm.querySelector(".popup__button");
  showLoadingBtn(true, saveButton);

  if (cardId) {
    deleteMyCard(cardId)
      .then(() => {
        cardElement.remove();
        closePopup(deletePopup);
        currentDeleteCard = null;
      })
      .catch((error) => {
        console.error("Card deletion failed:", error);
        alert("Не удалось удалить карточку.");
      })
      .finally(() => showLoadingBtn(false, saveButton));
  } else {
    cardElement.remove();
    closePopup(deletePopup);
    currentDeleteCard = null;
    showLoadingBtn(false, saveButton);
  }
});

enableValidation(validationConfig);

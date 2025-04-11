export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-35",
  headers: {
    authorization: "2a0472aa-7748-4657-8174-bc4f6caabc25",
    "Content-Type": "application/json",
  },
};

export const getResData = async (res) => {
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status} - ${data.message || "Неизвестная ошибка"}`);
};

export const getUserInfo = async () => {
  return fetch(`${config.baseUrl}/users/me`, { headers: config.headers }).then(getResData);
};

export const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, { headers: config.headers }).then(getResData);
};

export const getInitialInfo = async () => {
  return Promise.all([getUserInfo(), getInitialCards()]);
};

export const editProfile = async (userProfileName, userProfileAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ name: userProfileName, about: userProfileAbout }),
  }).then(getResData);
};

export const postNewCard = async (nameCard, linkCard) => {
  console.log("Отправка данных на сервер:", { name: nameCard, link: linkCard });
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: nameCard,
      link: linkCard,
    }),
  })
    .then(getResData)
    .catch((err) => {
      console.error("Ошибка добавления карточки:", err);
      throw err;
    });
};

export const putLike = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(getResData);
};

export const deleteLike = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResData);
};

export const deleteMyCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResData);
};

export const updateNewAvatar = async (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: avatarLink }),
  }).then(getResData);
};
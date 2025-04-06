(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e){var t=e.parentNode.querySelector(".".concat(e.name,"-error"));return t||((t=document.createElement("span")).className="".concat(e.name,"-error popup__error"),e.parentNode.appendChild(t)),t}function n(e,n){var r=t(e);e.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)}function r(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function o(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(o){o.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,o){var c=Array.from(e.querySelectorAll(o.inputSelector)),a=e.querySelector(o.submitButtonSelector);r(c,a,o),c.forEach((function(e){e.addEventListener("input",(function(){(function(e,r,o){r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage||""):r.setCustomValidity(""),r.validity.valid?n(r,o):function(e,n,r){var o=t(e);e.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(r,r.validationMessage,o)})(0,e,o),r(c,a,o)}))}))}(o,e)}))}function c(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),c=e.querySelector(t.submitButtonSelector);o.forEach((function(e){n(e,t),e.setCustomValidity("")})),r(o,c,t)}var a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-35",headers:{authorization:"2a0472aa-7748-4657-8174-bc4f6caabc25","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}o(e);var l,s=document.querySelector(".popup_type_edit"),d=s.querySelector(".popup__form"),p=d.querySelector(".popup__input_type_name"),f=d.querySelector(".popup__input_type_job"),_=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),y=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__image"),v=document.querySelector(".popup_type_new-card"),S=v.querySelector(".popup__form"),b=S.querySelector(".popup__input_type_card-name"),q=S.querySelector(".popup__input_type_url"),C=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_image"),g=E.querySelector(".popup__image"),L=E.querySelector(".popup__caption"),k=document.querySelector(".places__list"),x=document.querySelector("#card-template").content;function A(e){e.classList.add("popup_is-opened")}function U(e){e.classList.remove("popup_is-opened")}function j(e){var t=x.querySelector(".card").cloneNode(!0),n=t.querySelector(".card__image"),r=t.querySelector(".card__title"),o=t.querySelector(".card__like-button"),c=t.querySelector(".card__delete-button"),i=t.querySelector(".card__like-count");return n.src=e.link,n.alt=e.name,r.textContent=e.name,i.textContent=e.likes.length,e.likes.some((function(e){return e._id===l}))&&o.classList.add("card__like-button_is-active"),e.owner._id!==l&&(c.style.display="none"),o.addEventListener("click",(function(){return function(e,t,n){(t.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:a.headers}).then(u)}(e):function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then(u)}(e)).then((function(e){t.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}(e._id,o,i)})),c.addEventListener("click",(function(){return function(e,t){(function(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a.headers}).then(u)})(t).then((function(){return e.remove()})).catch((function(e){return console.log(e)}))}(t,e._id)})),n.addEventListener("click",(function(){g.src=e.link,g.alt=e.name,L.textContent=e.name,A(E)})),t}function T(e){k.prepend(e)}Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(u),fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(u)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];l=o._id,_.textContent=o.name,m.textContent=o.about,h.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){return T(j(e))}))})).catch((function(e){return console.log(e)})),d.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=d.querySelector(".popup__button");r.textContent="Сохранение...",(t=p.value,n=f.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then(u)).then((function(e){_.textContent=e.name,m.textContent=e.about,U(s)})).catch((function(e){return console.log(e)})).finally((function(){return r.textContent="Сохранить"}))})),S.addEventListener("submit",(function(t){t.preventDefault();var n,r,o=S.querySelector(".popup__button");o.textContent="Сохранение...",(n=b.value,r=q.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:n,link:r})}).then(u)).then((function(t){T(j(t)),U(v),S.reset(),c(S,e)})).catch((function(e){return console.log(e)})).finally((function(){return o.textContent="Создать"}))})),y.addEventListener("click",(function(){p.value=_.textContent,f.value=m.textContent,c(d,e),A(s)})),C.addEventListener("click",(function(){S.reset(),c(S,e),A(v)})),o(e),document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){return U(e.closest(".popup"))}))}))})();
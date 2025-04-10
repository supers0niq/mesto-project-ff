/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={117:(t,e,r)=>{t.exports=r.p+"6666407ac3aa5af1d5de.jpg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:q(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var y="suspendedStart",h="suspendedYield",v="executing",m="completed",b={};function _(){}function g(){}function w(){}var S={};p(S,u,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(A([])));L&&L!==r&&a.call(L,u)&&(S=L);var E=w.prototype=_.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==n(p)&&a.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function q(e,r,n){var o=y;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?m:h,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return g.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=p(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,p(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(j.prototype),p(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),p(E,l,"Generator"),p(E,u,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}r.p="";var c,u,s={baseUrl:"https://nomoreparties.co/v1/wff-cohort-35",headers:{authorization:"2a0472aa-7748-4657-8174-bc4f6caabc25","Content-Type":"application/json"}},l=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},p=function(t,e){var r="".concat(s.baseUrl).concat(t);return fetch(r,e).then(l)},f=function(){var t=i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/users/me",{headers:s.headers}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/cards",{headers:s.headers}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=i(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/users/me",{method:"PATCH",headers:s.headers,body:JSON.stringify({name:e,about:r})}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=i(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/cards",{method:"POST",headers:s.headers,body:JSON.stringify({name:e,link:r})}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var t=i(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/cards/likes/".concat(e),{method:"PUT",headers:s.headers}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=i(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/cards/likes/".concat(e),{method:"DELETE",headers:s.headers}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=i(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/cards/".concat(e),{method:"DELETE",headers:s.headers}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=i(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p("/users/me/avatar",{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:e})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function g(t,e,r){(t.classList.contains("card__like-button_is-active")?m:v)(r).then((function(r){t.classList.toggle("card__like-button_is-active"),e.textContent=r.likes.length})).catch((function(t){console.log(t)}))}function w(t,e,r,n,o,a){var i=e.querySelector(".card").cloneNode(!0),s=i.querySelector(".card__image"),l=i.querySelector(".card__title"),p=i.querySelector(".card__delete-button"),f=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-count"),y=t._id;return s.src=t.link,s.alt=t.name,l.textContent=t.name,d.textContent=t.likes.length,t.likes.some((function(t){return t._id===a}))&&f.classList.add("card__like-button_is-active"),f.addEventListener("click",(function(){r(f,d,y)})),s.addEventListener("click",n),t.owner&&t.owner._id===a?p.addEventListener("click",(function(){y?(c=y,u=p,o()):console.error("cardId is undefined")})):p.classList.add("card__delete-button-unactive"),i}function S(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",E),t.addEventListener("mousedown",L)}function x(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",E),t.removeEventListener("mousedown",L)}function L(t){t.target===t.currentTarget&&x(t.currentTarget)}function E(t){"Escape"===t.key&&x(document.querySelector(".popup_is-opened"))}var k={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},j=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},q=function(t,e){t.disabled=!0,t.classList.add(e)},O=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r)):q(e,r)},C=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);q(n,e.inactiveButtonClass),r.forEach((function(r){j(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return(e=function(t){var e=function(t){if("object"!=P(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var N=document.querySelector("#card-template").content,B=document.querySelector(".places__list"),G=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}];function M(t,e){t.forEach((function(t){!function(t,e,r,n,o,a,i,c){var u=n(t,r,o,a,i,c||null);e.append(u)}(I(I({},t),{},{_id:t._id||"local-".concat(Math.random().toString(36).substr(2,9)),owner:t.owner||{_id:e||"local-user"},likes:t.likes||[]}),B,N,w,g,ot,ft,e)}))}function F(t,e){e.textContent=t?"Сохранение...":"Сохранить"}var U=document.querySelector(".popup_type_edit"),H=document.querySelector(".profile__edit-button"),J=document.querySelector('form[name="edit-profile"]'),V=J.querySelector(".popup__input_type_name"),z=J.querySelector(".popup__input_type_description"),Y=document.querySelector(".profile__title"),$=document.querySelector(".profile__description"),K=U.querySelector(".popup__button");H.addEventListener("click",(function(){S(U),V.value=Y.textContent,z.value=$.textContent,C(J,k)})),J.addEventListener("submit",(function(t){t.preventDefault();var e=V.value,r=z.value;F(!0,K),K.disabled=!0,y(e,r).then((function(t){Y.textContent=t.name,$.textContent=t.about,x(U)})).catch((function(t){return console.error("Ошибка при редактировании профиля:",t)})).finally((function(){F(!1,K),K.disabled=!1}))}));var Q=document.querySelector(".popup_type_new-card"),R=document.querySelector(".profile__add-button"),W=document.querySelector('form[name="new-place"]'),X=W.querySelector(".popup__input_type_card-name"),Z=W.querySelector(".popup__input_type_url"),tt=Q.querySelector(".popup__button");R.addEventListener("click",(function(){S(Q),W.reset(),C(W,k)})),W.addEventListener("submit",(function(t){t.preventDefault();var e=X.value,r=Z.value;F(!0,tt),tt.disabled=!0,h(e,r).then((function(t){var e=w(t,N,g,ot,ft,dt);B.prepend(e),x(Q)})).catch((function(t){return console.error("Ошибка при добавлении карточки:",t)})).finally((function(){W.reset(),F(!1,tt),tt.disabled=!1}))}));var et=document.querySelector(".popup_type_image"),rt=et.querySelector(".popup__image"),nt=et.querySelector(".popup__caption");function ot(t){S(et),rt.src=t.target.src,rt.alt=t.target.alt,nt.textContent=t.target.alt}var at=document.querySelector(".profile__image_cover"),it=document.querySelector(".profile__image"),ct=document.querySelector(".popup_type_avatar"),ut=document.forms.avatar_edit,st=ut.querySelector(".popup__input_type_url"),lt=ct.querySelector(".popup__button");at.addEventListener("click",(function(){S(ct),ut.reset(),C(ut,k)})),ut.addEventListener("submit",(function(t){t.preventDefault();var e=st.value;F(!0,lt),lt.disabled=!0,_(e).then((function(t){it.style.backgroundImage="url('".concat(t.avatar,"')"),x(ct)})).catch((function(t){return console.error("Ошибка при обновлении аватара:",t)})).finally((function(){ut.reset(),F(!1,lt),lt.disabled=!1}))}));var pt=document.querySelector(".popup_type_delete");function ft(){S(pt)}document.querySelector('form[name="delete-card"]').addEventListener("submit",(function(t){var e,r,n;t.preventDefault(),c&&u||console.error("Ошибка: currentCardId или currentDeleteButton не определены"),r=(e={cardId:c,deleteButton:u}).cardId,n=e.deleteButton,b(r).then((function(){n.closest(".places__item").remove(),x(pt)})).catch((function(t){return console.error("Ошибка при удалении карточки:",t)}))})),document.querySelectorAll(".popup__close").forEach((function(t){var e=t.closest(".popup");t.addEventListener("click",(function(){return x(e)}))}));var dt=null;M(G,dt),Promise.all([f(),d()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];Y.textContent=o.name,$.textContent=o.about,dt=o._id,it.style.backgroundImage="url(".concat(o.avatar,")"),B.innerHTML="",M(a,dt),M(G,dt)})).catch((function(t){console.error("Ошибка при загрузке данных с сервера:",t),Y.textContent="Жак-Ив Кусто",$.textContent="Исследователь океана",dt="local-user-id",it.style.backgroundImage="url(".concat(r(117),")"),M(G,dt)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,r,n,o,a){var i=Array.from(t.querySelectorAll(e)),c=t.querySelector(o);O(i,c,a),i.forEach((function(e){e.addEventListener("input",(function(){!function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?j(t,e,r,n):function(t,e,r,n,o){var a=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),a.textContent=r,a.classList.add(o)}(t,e,e.validationMessage,r,n)}(t,e,r,n),O(i,c,a)}))}))}(e,t.inputSelector,t.inputErrorClass,t.errorClass,t.submitButtonSelector,t.inactiveButtonClass)}))}(k)})();
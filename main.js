/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new T(n||[]);return c(i,"_invoke",{value:j(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",b={};function _(){}function g(){}function S(){}var w={};f(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==o&&i.call(E,u)&&(w=E);var k=S.prototype=_.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,c,a,u){var s=d(e[o],e,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,n){var o=h;return function(i,c){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:r,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=S,c(k,"constructor",{value:S,configurable:!0}),c(S,"constructor",{value:g,configurable:!0}),g.displayName=f(S,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},x(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=i.call(c,"catchLoc"),s=i.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},n}function r(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}var o,i,c={baseUrl:"https://nomoreparties.co/v1/wff-cohort-35",headers:{authorization:"2a0472aa-7748-4657-8174-bc4f6caabc25","Content-Type":"application/json"}},a=function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))},u=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/users/me"),{headers:c.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/cards"),{headers:c.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:r,link:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:c.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:c.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:c.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:r})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function v(t,e,r){(t.classList.contains("card__like-button_is-active")?d:p)(r).then((function(r){t.classList.toggle("card__like-button_is-active"),e.textContent=r.likes.length})).catch((function(t){console.log(t)}))}function m(t,e,r,n,c,a){var u=e.querySelector(".card").cloneNode(!0),s=u.querySelector(".card__image"),l=u.querySelector(".card__title"),f=u.querySelector(".card__delete-button"),p=u.querySelector(".card__like-button"),d=u.querySelector(".card__like-count"),h=t._id;return s.src=t.link,s.alt=t.name,l.textContent=t.name,d.textContent=t.likes.length,t.likes.some((function(t){return t._id===a}))&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){r(p,d,h)})),s.addEventListener("click",n),t.owner._id!==a?f.classList.add("card__delete-button-unactive"):f.addEventListener("click",(function(){o=h,i=f,c()})),u}function b(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",S),t.addEventListener("mousedown",g)}function _(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",S),t.removeEventListener("mousedown",g)}function g(t){t.target===t.currentTarget&&_(t.currentTarget)}function S(t){"Escape"===t.key&&_(document.querySelector(".popup_is-opened"))}var w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},L=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},E=function(t,e){t.disabled=!0,t.classList.add(e)},k=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r)):E(e,r)},x=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);E(n,e.inactiveButtonClass),r.forEach((function(r){L(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return(e=function(t){var e=function(t){if("object"!=q(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==q(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=document.querySelector("#card-template").content,A=document.querySelector(".places__list");function N(t,e){t.forEach((function(t){!function(t,e,r,n,o,i,c,a){var u=n(t,r,o,i,c,a||null);e.append(u)}(C(C({},t),{},{_id:t._id||"local-".concat(Math.random().toString(36).substr(2,9)),owner:t.owner||{_id:e||"local-user"},likes:t.likes||[]}),A,T,m,v,rt,dt,e)}))}function D(t,e){e.textContent=t?"Сохранение...":"Сохранить"}var U=document.querySelector(".popup_type_edit"),I=document.querySelector(".profile__edit-button"),B=U.querySelector(".popup__close"),G=document.querySelector('form[name="edit-profile"]'),M=G.querySelector(".popup__input_type_name"),F=G.querySelector(".popup__input_type_description"),H=document.querySelector(".profile__title"),J=document.querySelector(".profile__description"),V=U.querySelector(".popup__button");I.addEventListener("click",(function(){b(U),M.value=H.textContent,F.value=J.textContent,x(G,w)})),B.addEventListener("click",(function(){_(U)})),G.addEventListener("submit",(function(t){t.preventDefault();var e=M.value,r=F.value;D(!0,V),V.disabled=!0,l(e,r).then((function(t){H.textContent=t.name,J.textContent=t.about,_(U)})).catch((function(t){return console.error("Ошибка при редактировании профиля:",t)})).finally((function(){D(!1,V),V.disabled=!1}))}));var z=document.querySelector(".popup_type_new-card"),Y=document.querySelector(".profile__add-button"),$=z.querySelector(".popup__close"),K=document.querySelector('form[name="new-place"]'),Q=K.querySelector(".popup__input_type_card-name"),R=K.querySelector(".popup__input_type_url"),W=z.querySelector(".popup__button");Y.addEventListener("click",(function(){b(z),K.reset(),x(K,w)})),$.addEventListener("click",(function(){_(z)})),K.addEventListener("submit",(function(t){t.preventDefault();var e=Q.value,r=R.value;D(!0,W),W.disabled=!0,f(e,r).then((function(t){var e=m(t,T,v,rt,dt,yt);A.prepend(e),_(z)})).catch((function(t){return console.error("Ошибка при добавлении карточки:",t)})).finally((function(){K.reset(),D(!1,W),W.disabled=!1}))}));var X=document.querySelector(".popup_type_image"),Z=X.querySelector(".popup__close"),tt=X.querySelector(".popup__image"),et=X.querySelector(".popup__caption");function rt(t){b(X),tt.src=t.target.src,tt.alt=t.target.alt,et.textContent=t.target.alt}Z.addEventListener("click",(function(){_(X)}));var nt=document.querySelector(".profile__image_cover"),ot=document.querySelector(".profile__image"),it=document.querySelector(".popup_type_avatar"),ct=it.querySelector(".popup__close"),at=document.forms.avatar_edit,ut=at.querySelector(".popup__input_type_url"),st=it.querySelector(".popup__button");nt.addEventListener("click",(function(){b(it),at.reset(),x(at,w)})),ct.addEventListener("click",(function(){_(it)})),at.addEventListener("submit",(function(t){t.preventDefault();var e=ut.value;D(!0,st),st.disabled=!0,y(e).then((function(t){ot.style.backgroundImage="url('".concat(t.avatar,"')"),_(it)})).catch((function(t){return console.error("Ошибка при обновлении аватара:",t)})).finally((function(){at.reset(),D(!1,st),st.disabled=!1}))}));var lt=document.querySelector(".popup_type_delete"),ft=lt.querySelector(".popup__close"),pt=document.querySelector('form[name="delete-card"]');function dt(){b(lt)}function ht(){_(lt)}ft.addEventListener("click",ht),pt.addEventListener("submit",(function(t){var e,r,n;t.preventDefault(),r=(e={cardId:o,deleteButton:i}).cardId,n=e.deleteButton,h(r).then((function(){n.closest(".places__item").remove(),ht()})).catch((function(t){return console.error("Ошибка при удалении карточки:",t)}))}));var yt=null;N([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],yt),Promise.all([u(),s()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];H.textContent=o.name,J.textContent=o.about,yt=o._id,ot.style.backgroundImage="url(".concat(o.avatar,")"),A.innerHTML="",N(i,yt)})).catch((function(t){console.error("Ошибка при загрузке данных с сервера:",t)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,r,n,o,i){var c=Array.from(t.querySelectorAll(e)),a=t.querySelector(o);k(c,a,i),c.forEach((function(e){e.addEventListener("input",(function(){!function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?L(t,e,r,n):function(t,e,r,n,o){var i=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),i.textContent=r,i.classList.add(o)}(t,e,e.validationMessage,r,n)}(t,e,r,n),k(c,a,i)}))}))}(e,t.inputSelector,t.inputErrorClass,t.errorClass,t.submitButtonSelector,t.inactiveButtonClass)}))}(w)})();
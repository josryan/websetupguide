/*! For license information please see parallax.js.LICENSE.txt */
this.LIBRO=this.LIBRO||{},this.LIBRO.parallax=function(t){"use strict";var e=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n=function(t){return t.constructor===Object},r=function(t,i,o,a){for(var l in void 0===o&&(o=!1),void 0===a&&(a=!1),t)if(e(t,l)&&e(i,l))if(n(t[l]))r(t[l],i[l],o,a);else{var d=i[l];!o||"true"!==d&&"false"!==d||(d="true"===d),a&&"string"==typeof d&&/^[0-9]+(.[0-9]+?)$/.test(d)&&(d=Number(d)),t[l]=d}},i=[];function o(){i.forEach((function(t){return function(t){var e=t.clientHeight,n=t.getBoundingClientRect(),i=n.top+e/2,o=window.innerHeight/2,a={speed:.2,break:768},l=t.getAttribute("data-parallax").split(";").reduce((function(t,e){var n=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}(e.split(":"),2),r=n[0],i=n[1];return t[r]=i,t}),{});if(r(a,l),window.innerWidth>=a.break){if(n.top>=-e&&n.left>=-e&&n.right<=(window.innerWidth||document.documentElement.clientWidth)+e&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)+e){var d=Math.round(a.speed*e*((i-o)/o));t.setAttribute("style","position: relative; top: "+d+"px")}}else t.setAttribute("style","top: 0")}(t)}))}window.addEventListener("DOMContentLoaded",(function(){(i=t.dom.getElements("[data-parallax]")).length&&(o(),window.addEventListener("scroll",o),window.addEventListener("resize",o))}))}(LIBRO.common);
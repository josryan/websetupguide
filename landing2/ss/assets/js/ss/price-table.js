this.LIBRO=this.LIBRO||{},this.LIBRO.priceTable=function(e){"use strict";function t(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];e.store.debug&&(t=e.logger.tag("price-table")).info.apply(t,function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}([],function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}(r),!1))}function r(){var t;e.store.once("URL_DATA",n),(t=e.dom.getElements(".price-table")).length>1&&t.forEach((function(t,r){var n=e.dom.getElements(t,".price-table__feature"),o=n.length,a=t.nextElementSibling||t.previousElementSibling;if(o>e.dom.getElements(a,".price-table__feature").length){var i=e.dom.getElements(a,".price-table__feature__name").map((function(e){return e.innerHTML.toLowerCase()})),l=n.filter((function(t){var r=e.dom.getElement(t,".price-table__feature__name");return r&&!i.includes(r.innerHTML.toLowerCase())}));e.dom.addClass(l,"price-table__feature--highlight")}}))}function n(r){t("Handling %s content: %s","URL_DATA",r);try{e.dom.appendQueryParams(".price-table .button","href",r)}catch(e){t(e)}}return r(),{init:r}}(LIBRO.common);
this.LIBRO=this.LIBRO||{},this.LIBRO.plusStore=function(t){"use strict";var e=function(){return(e=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{c(n.next(t))}catch(t){r(t)}}function a(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}function n(t,e){var i,n,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(o=2&r[0]?n.return:r[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],n=0}finally{i=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function o(){for(var e,i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];c.debug&&(e=t.logger.tag("plus-store")).info.apply(e,function(t,e,i){if(i||2===arguments.length)for(var n,o=0,r=e.length;o<r;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return s}(i),!1))}var r=new t.EventEmitter,s=new Map,a=new Map,c={debug:!1,ncid:"",lang:"en-US",product:{isrc:"",offerIds:[],programCode:"",businessUnit:"",tastemakerName:"",sku:"",contextSku:"",switchCategory:"",requestedAttributes:[]},widgets:{smartWidgetUrl:"https://s.aolcdn.com/membership/omp-static/omp-widgets/2.1.1/smart-widget.yahoo.prod.js",switchWidgetUrl:"https://s.aolcdn.com/membership/omp-static/omp-widgets/2.1.1/switch-widget.prod.js"},rapid:{spaceId:""}},d={user:{isAuthenticated:!1,logInUrl:"https://login.yahoo.com/?.done={{done}}&.lang={{lang}}&src={{isrc}}",logoutUrl:"https://login.yahoo.com/account/logout?logout_all=1&.done={{done}}&src={{isrc}}",allow_tandt:!1,user_loggedinalias:"",ccpa:{url:"",label:"",warning:"",showDAAPrivacyRightsIcon:!1},ccpaIconUrl:"",privacyLinks:{warningMsg:"",links:{},footerSequence:[]},privacyIconUrl:""},savingsPlan:{promo:{bmsm:{offerId:null,promoDesc:"",promoType:"",amount:0,campaignName:"",campaignDesc:""}},content:{bmsm:{}}},subscription:{content:{},subscriptionCategory:"",hasSwitchedPlan:!1,cpSku:""},request:{doneUrl:"",url:"",slug:"",ncid:"",feature:"",dspid:0,dspn:"",dspcid:""},ocmContent:{},mediaQueries:[{media:"(min-width: 768px)"},{media:"(min-width: 870px)"},{media:"(min-width: 900px)"}],hasSubscription:{contextSku:"",userSubscribed:!1}};function u(e){if(""===e)return e;var i=e;i=t.dataUtils.upsertQueryParam(i,"ncid",c.ncid),i=t.dataUtils.upsertQueryParam(i,"isrc",c.product.isrc);var n=d.request,o=n.doneUrl,r={ncid:n.ncid,varId:n.slug,done:o};return Object.keys(r).forEach((function(e){var n=t.dataUtils.sanitizeQueryParam(e,r[e]);n&&(i=t.dataUtils.upsertQueryParam(i,e,n))})),i}function l(){var e=c.product,i={contextSku:e.contextSku,businessUnit:e.businessUnit};t.dom.isWindowObject("window.OMP.smartWidget")&&!0===window.OMP.smartWidget.isReady?window.OMP.smartWidget.getHasSubscription(i):a.set("getHasSubscription",i)}function g(i){if("string"!=typeof i&&i.message)switch(o("incoming message, event: %s, message: %s",i.status,i.message),i.status){case"USER_STATUS":!function(e){var i,n,o,r,s;"user_logged_in_alias"in e&&(e.user_loggedinalias=e.user_logged_in_alias),t.dataUtils.copyObjectValues(d.user,e,!0,!0),e.privacyLinks&&(d.user.privacyLinks.links=e.privacyLinks.links),"user_loggedinalias"in e&&(d.user.isAuthenticated=!0,n=(i=c.product).offerIds,o=i.programCode,r=i.sku,(s={offerIds:n,businessUnit:i.businessUnit,programCode:o,productContentRequest:{sku:r,feature:"savings_program"}}).offerIds&&s.businessUnit&&s.programCode&&s.productContentRequest.sku&&window.OMP.smartWidget.getEligiblePromo(s),function(){var t=c.product,e=t.businessUnit,i=t.sku,n={businessUnit:e,contextSku:t.contextSku,productContentRequest:{sku:i,feature:"subscription_type"}};window.OMP.smartWidget.getSubscriptionCategory(n)}(),l()),w("USER_DATA",d.user)}(i.message);break;case"ELIGIBLE_PROMO":!function(i){var n,r,s,a;o("Got eligibility data: %s",i);var u=null===(r=null===(n=i.data)||void 0===n?void 0:n.eligiblePromos)||void 0===r?void 0:r.attributes,l=null===(a=null===(s=i.data)||void 0===s?void 0:s.eligiblePromos)||void 0===a?void 0:a.eligibilityResult;if(u&&l&&"savings_program"in u&&l.length>0)try{var g=t.dataReducers.reduceAttributeData(u.savings_program,"savings_program_type"),p=c.product.offerIds[0],f=l.find((function(t){return t.offerId===p}));if(f){var m="".concat(100*f.amount,"%");d.savingsPlan.promo.bmsm=e(e({},d.savingsPlan.promo.bmsm),f);var h=t.dataUtils.replaceObjectPlaceholders(g,{discount:m});d.savingsPlan.content=e(e({},d.savingsPlan.content),h),t.dom.isWindowObject("window.YAHOO.rapidInstance")&&window.YAHOO.rapidInstance.setRapidAttribute({keys:{itmId:f.campaignName}})}else o("No matching promo for offer id: %s was found",p)}catch(t){console.log(t),o("Error parsing savings plan data: %s",t)}w("SAVINGS_PLAN_DATA",d.savingsPlan.content)}(i.message);break;case"SUBS_CATEGORY":!function(i){var n,r;o("Got subscription content: %s",i);var s,a=null===(r=null===(n=i.data)||void 0===n?void 0:n.subscriptionCategory)||void 0===r?void 0:r.attributes;if(a&&"subscription_type"in a)try{var c=t.dataReducers.reduceAttributeData(a.subscription_type,"subscription"),l=i.data.subscriptionCategory.category;t.dom.isWindowObject("window.YAHOO.rapidInstance")&&window.YAHOO.rapidInstance.setRapidAttribute({keys:{pl3:l}});var g=(s=c[l],t.dataUtils.updatePropertyValue(s,"cta_url",u));d.subscription.content=e(e({},d.subscription.content),g),d.subscription.subscriptionCategory=l,d.subscription.cpSku=i.data.subscriptionCategory.cpSku}catch(t){o("Error parsing subscription content: %s",t)}w("SUBSCRIPTION_CONTENT",d.subscription.content),w("SUBSCRIPTION_CATEGORY",d.subscription.subscriptionCategory)}(i.message);break;case"OCM_CONTENT":!function(e){if(o("Got OCM content: %s",e),e)try{d.ocmContent=t.dataReducers.parseAttributeData(e.attributes)}catch(t){o("Error parsing OCM content: %s",t)}w("OCM_CONTENT",d.ocmContent)}(i.message);break;case"HAS_SUBSCRIPTION":!function(t){if(t)try{d.hasSubscription=t}catch(t){o("Error parsing IsSubscribed data: %s",t)}w("HAS_SUBSCRIPTION",d.hasSubscription)}(i.message);break;default:o(i)}}function p(t){var e;if("string"!=typeof t)switch(t.status){case"INIT_ERROR":w("SWITCH_LIGHTBOX_VISIBILITY","OFF"),o("Could no initialize switch widget");break;case"LIGHTBOX_HIDDEN":if(!0===d.subscription.hasSwitchedPlan){var i=null===(e=d.subscription.content.switch)||void 0===e?void 0:e.success_url;i?window.location.href=i:window.location.reload()}w("SWITCH_LIGHTBOX_VISIBILITY","OFF");break;case"SWITCH_SUCCESS":d.subscription.hasSwitchedPlan=!0}}function w(t,e){void 0===e&&(e=""),o("Emitting to page modules: %s with data: %s",t,e),s.set(t,e),r.emit(t,e)}function f(t){w("MEDIA_QUERY_LIST_EVENT",{matches:t.matches,media:t.media})}return t.dom.isWindowObject("window.LIBRO.config")?function(){i(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:t.dataUtils.copyObjectValues(c,window.LIBRO.config),n=encodeURIComponent(window.location.href),d.user.logInUrl=t.dataUtils.replacePlaceholders(d.user.logInUrl,{done:n,lang:c.lang,isrc:c.product.isrc}),d.user.logoutUrl=t.dataUtils.replacePlaceholders(d.user.logoutUrl,{done:n,isrc:c.product.isrc}),function(){var e=new URL(window.location.href),i=e.pathname,n=i.lastIndexOf("/")+1,o=i.slice(n),r=t.dataUtils.getQueryParam(window.location.search,"done");if(r)for(;r!==decodeURIComponent(r);)r=decodeURIComponent(r);var s=t.dataUtils.getQueryParam(window.location.search,"ncid"),a=t.dataUtils.getQueryParam(window.location.search,"feature"),c=t.dataUtils.getQueryParam(window.location.search,"dspid"),u=t.dataUtils.getQueryParam(window.location.search,"dspn"),l=t.dataUtils.getQueryParam(window.location.search,"dspcid");t.dataUtils.copyObjectValues(d.request,{url:e.href,doneUrl:r,slug:o,ncid:s,feature:a,dspid:c,dspn:u,dspcid:l}),w("URL_DATA",d.request)}(),i=function(){w("PAGE_LOADED",d),d.mediaQueries.forEach((function(t){t.mediaQueryList=window.matchMedia(t.media),t.mediaQueryList.addEventListener("change",f),f({matches:t.mediaQueryList.matches,media:t.media})}))},"interactive"===document.readyState||"complete"===document.readyState?i():window.addEventListener("DOMContentLoaded",(function(){i()})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,t.dom.loadScript(c.widgets.smartWidgetUrl,"window.OMP.smartWidget")];case 2:return e.sent(),window.OMP.smartWidget.init({debug:c.debug}),window.OMP.smartWidget.once("READY",(function(){window.OMP.smartWidget.on("DATA",g),window.OMP.smartWidget.getUserStatus(),a.forEach((function(t,e){o("Executing queued up smart widget call: %s, with params: %s",e,t),window.OMP.smartWidget[e](t),a.delete(e)}))})),[3,4];case 3:return o(e.sent()),[2];case 4:return[2]}var i,n}))}))}():o("Error, missing LIBRO.config"),{on:function(t,e){o('Event handler registered for "on" %s',t),r.on(t,e),s.has(t)&&(o("Returning previously emitted data for event %s",t),e(s.get(t)))},emit:w,off:function(t,e){try{r.off(t,e),o("Event handler unsubscribed from %s",t)}catch(t){}},once:function(t,e){s.has(t)?(o('Returning previously emitted data for event %s, will not register "once" event handler',t),e(s.get(t))):(o('Event handler registered for "once" %s',t),r.once(t,e))},getData:function(){return JSON.parse(JSON.stringify({data:d,config:c}))},getOCMContent:function(e){return i(this,void 0,void 0,(function(){var i,o;return n(this,(function(n){return i=c.product.sku,o={contextSku:i,requestedAttributes:e},t.dom.isWindowObject("window.OMP.smartWidget")&&!0===window.OMP.smartWidget.isReady?window.OMP.smartWidget.getOCMContent(o):a.set("getOCMContent",o),[2]}))}))},showSwitchLightbox:function(){return i(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:e={sku:d.subscription.cpSku,ncid:c.ncid,spaceId:c.rapid.spaceId,switchCategory:c.product.switchCategory},w("SWITCH_LIGHTBOX_VISIBILITY","ON"),n.label=1;case 1:return n.trys.push([1,4,,5]),t.dom.isWindowObject("window.OMP.switchWidget")?[3,3]:(o("window.OMP.switchWidget does not exist, will load.."),[4,t.dom.loadScript(c.widgets.switchWidgetUrl,"window.OMP.switchWidget")]);case 2:n.sent(),n.label=3;case 3:return[3,5];case 4:return i=n.sent(),w("SWITCH_LIGHTBOX_VISIBILITY","OFF"),o(i),[2];case 5:if(!window.OMP.switchWidget.isInitialized){o("switchWidget is not initialized, will initialize..");try{window.OMP.switchWidget.init(e,{debug:c.debug,allowPopups:!0}),window.OMP.switchWidget.once("READY",(function(){window.OMP.switchWidget.showLightbox(e)})),window.OMP.switchWidget.on("DATA",p)}catch(t){w("SWITCH_LIGHTBOX_VISIBILITY","OFF"),o(t)}return[2]}return window.OMP.switchWidget.showLightbox(e),[2]}}))}))},hideSwitchLightbox:function(){window.OMP.switchWidget.hideLightbox()},getHasSubscription:l}}(LIBRO.common);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e){t.exports={ak:"AIzaSyBq6NsJZ7lcXK4_9m95RBI7GLaoBqgGNFE",ad:"remembrall-522f0.firebaseapp.com",pid:"remembrall-522f0",sb:"remembrall-522f0.appspot.com",GOOGLE:"AIzaSyCOXGdZH5uF1O6jmXLc80PSbzSJyVRzdT0",GSEARCH:"010322187392027779852:etpv6mruimg",rapidAPI:"84ff2428fdmshb42d48d6af5a776p10f852jsn922e80e12a04"}},180:function(t,e,r){r(15),r(27),r(53),r(108),r(63),r(65);r(138);function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=encodeURI(t);return new Promise((function(t){try{fetch("https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.flickr.com/search/?text=".concat(n)).then((function(t){return t.text()})).then((function(html){for(var n=[],c=/photo-list-photo-view[^>]*url\((.*)\)/g,o=c.exec(html);o;)n.push("https:".concat(o[1])),o=c.exec(html);n=n.slice(r%n.length).slice(0,e),t(n)}))}catch(e){t([])}}))}function c(text){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return text.replace(/\(.*\)/g,"").replace(/[*_-]/g,"").split("\n")[0].toLowerCase().split(t?/[/;.,?¿!+()\[\]{}<>]/:/[  ・/;.,?¿!+()\[\]{}<>]/).reduce((function(t,e){return e.length>t.length?e:t}),"")}e.findImagesForKeyword=n,e.getKeyWord=c;var o=1;e.getRandomImage=function(text){var t=c(text,!0);return o=o%99+1,new Promise((function(e){n(t,1,o).then((function(t){t?e(t[Math.floor(Math.random()*t.length)]):e()}))}))},e.getNumberDueInSet=function(t){var e=Date.now(),r=t.settings?t.settings.maxNewPerDay:999999,n=t.newToday;if(!t.cards)return 0;var c=Math.min(t.cards.reduce((function(t,r){return r.nextReview<e&&r.totalReviews&&r.totalReviews>0&&!r.suspended?t+1:t}),0),t.settings&&t.settings.maxReviewsPerDay?t.settings.maxReviewsPerDay-t.reviewsToday:999999),o=t.cards.reduce((function(t,e){return e.totalReviews&&0!==e.totalReviews||e.suspended?t:t+1}),0);return c+Math.min(r-Math.min(n,r),o)},e.msToString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t<0?"-":"";r&&(t*=-1);var n=Math.floor(t/1e3),c=Math.floor(n/31536e3);n-=60*c*60*24*365;var o=Math.floor(n/86400);n-=60*o*60*24;var d=Math.floor(n/3600);n-=60*d*60;var f=Math.floor(n/60),l=n-=60*f;return l<10&&f>0&&(l="0".concat(l)),c||o||d||f?c||o||d?c||o?c?"".concat(r).concat(c,"y").concat(!e&&o?" ".concat(o,"d"):""):"".concat(r).concat(o,"d").concat(!e&&d?" ".concat(d,"h"):""):"".concat(r).concat(d,"h").concat(!e&&f?" ".concat(f,"m"):""):"".concat(r).concat(f).concat(!e&&l?":".concat(l):"m"):"".concat(r).concat(l,"s")}},183:function(t,e,r){var n,c=r(236);function o(){if("object"===("undefined"==typeof localStorage?"undefined":c(localStorage)))try{localStorage.setItem("localStorage",1),localStorage.removeItem("localStorage"),n=!0}catch(t){n=!1,console.log("LocalStorage is unavailable. Reverting to Cookies as a fallback.")}else n=!1}function d(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new Date;n.setTime(n.getTime()+31536e6*(r?-1:1));var c="expires="+n.toUTCString();document.cookie=t+"="+e+";"+c+";path=/"}r(37),r(27),r(108),e.list=function(t){for(var e=[],r=Object.keys(localStorage),i=r.length;i--;)e.push(localStorage.getItem(r[i]));return e},e.set=function(t,e){var r=Array.isArray(e)||"object"===c(e)?encodeURI(JSON.stringify(e)):e;void 0===n&&o(),n?localStorage.setItem(t,r):d(t,e)},e.remove=function(t){void 0===n&&o(),n?localStorage.removeItem(t):d(t,"",!0)},e.get=function(t){void 0===n&&o();var e=n?localStorage.getItem(t):function(t){for(var e=t+"=",r=decodeURIComponent(document.cookie).split(";"),i=0;i<r.length;i++){for(var n=r[i];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}(t);return e}},189:function(t,e,r){r(190),t.exports=r(191)},232:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(107).default)("5c670272",content,!0,{sourceMap:!1})},233:function(t,e,r){var n=r(106)(!1);n.push([t.i,".textcenter{text-align:center}.textright{text-align:right}.sub{font-size:.85em}.fade,.sub{opacity:.7}.sub.fade{opacity:.5}.fakelink{text-decoration:underline;cursor:pointer}",""]),t.exports=n},234:function(t,e,r){"use strict";r.r(e);r(35),r(71),r(72);var n=r(25),c=(r(44),r(37),r(182),r(15),r(235),r(45),r(36),r(34),r(43)),o=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=r(183),S=r(237),v=r(180).getNumberDueInSet;function w(){return{id:Date.now(),name:"New set",settings:{maxNewPerDay:10,maxReviewsPerDay:50,languageTools:"none",studyReverse:!1},lastUpdated:Date.now(),newToday:0,reviewsToday:0,cards:[]}}o.a.use(c.a),e.default=function(){return new c.a.Store({state:{currentUser:null,setList:{},currentSetId:null,appState:"study",isMobile:!1,pauseDbSets:!1,isEditingText:!1},mutations:{setUsername:function(t,e){t.currentUser=e,l.set("currentUser",e)},setSetList:function(t,e){t.setList=e},setCurrentSetId:function(t,e){t.currentSetId=e,"user"===t.appState&&(t.appState="study"),l.set("currentSetId",e)},logOut:function(t){l.remove("currentUser"),l.remove("currentSetId"),t.currentUser=null,t.setList=[],t.currentSetId=null},setAppWidth:function(t,e){t.isMobile=parseInt(e)<=768},setPauseDbSets:function(t,e){t.pauseDbSets=e},setIsEditingText:function(t,e){t.isEditingText=e},setAppState:function(t,e){t.appState=e||"study"},updateSetName:function(t,e){o.a.set(t.setList[t.currentSetId],"name",e),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,name:t.setList[t.currentSetId].name,lastUpdated:t.setList[t.currentSetId].lastUpdated},"updating set name")},updateSetSettings:function(t,e){for(var param in e)t.setList[t.currentSetId].settings||(t.setList[t.currentSetId].settings={}),o.a.set(t.setList[t.currentSetId].settings,param,e[param]);o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,settings:t.setList[t.currentSetId].settings,lastUpdated:t.setList[t.currentSetId].lastUpdated},"updating set settings")},addSet:function(t){var e=w();t.setList[e.id]=e,t.currentSetId=e.id,l.set("currentSetId",e.id),t.pauseDbSets||S.setSet(t.currentUser,e)},uploadSet:function(t,e){var r=w();for(var n in e)"id"!==n&&(r[n]=e[n]);t.setList[r.id]=r,t.currentSetId=r.id,l.set("currentSetId",r.id),t.pauseDbSets||S.setSet(t.currentUser,r)},deleteSet:function(t,e){o.a.delete(t.setList,e),t.currentSetId=Object.keys(t.setList)[0],t.pauseDbSets||S.deleteSet(t.currentUser,e)},resetSetDay:function(t,e){o.a.set(t.setList[e],"newToday",0),o.a.set(t.setList[e],"reviewsToday",0),o.a.set(t.setList[e],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:e,newToday:0,reviewsToday:0,lastUpdated:t.setList[e].lastUpdated},"resetting set day")},addCard:function(t,e){var r=t.setList[t.currentSetId].cards||[];r.push(f(f({},e),{},{id:Date.now()})),o.a.set(t.setList[t.currentSetId],"cards",r),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,cards:r,lastUpdated:t.setList[t.currentSetId].lastUpdated},"adding card")},updateCard:function(t,e){var r;for(var n in t.setList)if(t.setList[n].cards&&t.setList[n].cards.find((function(t){return t.id===e.id}))){r=parseInt(n);break}if(!r)return console.log("No card found by the id",e.id,"in any deck.");var c=t.setList[r].cards.findIndex((function(t){return t.id===e.id}));if(void 0!==c)for(var param in e)o.a.set(t.setList[r].cards[c],param,e[param]);o.a.set(t.setList[r],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:r,cards:t.setList[r].cards,lastUpdated:t.setList[r].lastUpdated},"updating card")},studyCard:function(t,e){var r=t.setList[t.currentSetId].cards.findIndex((function(t){return t.id===e.id}));if(void 0!==r)for(var param in e)o.a.set(t.setList[t.currentSetId].cards[r],param,e[param]);new Date(t.setList[t.currentSetId].lastUpdated).getDate()!==(new Date).getDate()&&(o.a.set(t.setList[t.currentSetId],"newToday",0),o.a.set(t.setList[t.currentSetId],"reviewsToday",0)),e.totalReviews<=1?o.a.set(t.setList[t.currentSetId],"newToday",t.setList[t.currentSetId].newToday?t.setList[t.currentSetId].newToday+1:1):o.a.set(t.setList[t.currentSetId],"reviewsToday",t.setList[t.currentSetId].reviewsToday?t.setList[t.currentSetId].reviewsToday+1:1),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,lastUpdated:t.setList[t.currentSetId].lastUpdated,newToday:t.setList[t.currentSetId].newToday,reviewsToday:t.setList[t.currentSetId].reviewsToday,cards:t.setList[t.currentSetId].cards},"studying card")},deleteCard:function(t,e){var r;for(var n in t.setList)if(t.setList[n].cards&&t.setList[n].cards.find((function(t){return t.id===e}))){r=t.setList[n];break}if(!r)return console.log("No card found by the id",e,"in any deck.");var c=r.cards.filter((function(t){return t.id!==e}));o.a.set(r,"cards",c),o.a.set(r,"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:r.id,cards:r.cards,lastUpdated:r.lastUpdated})},moveCard:function(t,e){var r=e.id,n=e.from,c=e.to;if(n==c)return console.log("Same set!");var d=t.setList[n].cards.find((function(t){return t.id===r}));if(d){d.set=c;var f=t.setList[c].cards;f.push(d),o.a.set(t.setList[c],"cards",f),o.a.set(t.setList[c],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:c,cards:t.setList[c].cards,lastUpdated:t.setList[c].lastUpdated},"moving card to new set");var l=t.setList[n].cards.filter((function(t){return t.id!==r}));o.a.set(t.setList[n],"cards",l),o.a.set(t.setList[n],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.setList[n].id,cards:t.setList[n].cards,lastUpdated:t.setList[n].lastUpdated},"deleting moved card from old set")}}},actions:{logInAs:function(t,e){var r=t.commit,n=t.state;S.getAllSets(e).then((function(t){var c=t.docs,o=t.empty;if(o&&e===n.currentUser)return console.log("dc"),r("setPauseDbSets",!1);var d={};c.forEach((function(t){var e=t.data();d[e.id]=e}));var v=function(t){if(!d[t].cards)return"continue";d[t].cards=d[t].cards.map((function(e){return f(f({},e),{},{set:parseInt(t)})}))};for(var w in d)v(w);if(!n.currentUser&&o&&(console.log("first"),S.newUser(e)),!o&&e===n.currentUser)for(var m in d)if(n.setList[m]){if(d[m].lastUpdated<n.setList[m].lastUpdated){var h=prompt("OLD SET IN DATABASE. Overwrite database copy with local copy? (Dumped database copy ".concat(m," to localStorage)"));l.set("".concat(m),d[m].cards),console.log(d[m],n.setList[m]),h&&(console.log("overwriting"),d[m]=n.setList[m])}}else console.log("Deck "+m+" has been created elsewhere, and will now be loaded.");r("setUsername",e),r("setSetList",d),r("setCurrentSetId",d[l.get("currentSetId")]?l.get("currentSetId"):Object.keys(d)[0]),r("setPauseDbSets",!1)}))},goToNextSet:function(t){var e=t.commit,r=t.state,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=Object.keys(r.setList);if(n&&(c=c.filter((function(t){return v(r.setList[t])>0}))),0!==c.length){var o=c[(c.indexOf(r.currentSetId)+1)%c.length];e("setCurrentSetId",o)}},goToPreviousSet:function(t){var e=t.commit,r=t.state,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=Object.keys(r.setList);if(n&&(c=c.filter((function(t){return v(r.setList[t])>0}))),0!==c.length){var o=c[(c.indexOf(r.currentSetId)-1+c.length)%c.length];e("setCurrentSetId",o)}}}})}},237:function(t,e,r){"use strict";r.r(e),r.d(e,"newUser",(function(){return y})),r.d(e,"updateSet",(function(){return I})),r.d(e,"setSet",(function(){return L})),r.d(e,"deleteSet",(function(){return U})),r.d(e,"getAllSets",(function(){return D}));r(64);var n=r(9),c=(r(61),r(15),r(65),r(34),r(178)),o=r(20),d=r(138),f=Object(c.a)({apiKey:d.ak,authDomain:d.ad,projectId:d.pid,storageBucket:d.sb}),l=Object(o.f)(f),S="users",v="sets";function w(t,e){return new Promise(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("adding set",e),c=Object(o.c)(l,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e.id)),r.next=4,Object(o.g)(c,e);case 4:n("set set success!");case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}var m=!1,h=[];function y(t){h.push({type:"newUser",user:t})}function I(t,e,r){h.push({type:"updateSet",user:t,set:e})}function L(t,e){h.push({type:"setSet",user:t,set:e})}function U(t,e){h.push({type:"deleteSet",user:t,setId:e})}setInterval((function(){if(!m&&h.length){m=!0;var t=h.shift();"newUser"===t.type?(e=t.user,new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(o.c)(l,"".concat(S,"/").concat(e)),t.next=3,Object(o.g)(n,{});case 3:r("create new user success!");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(t){m=!1,Date.now()})):"updateSet"===t.type?function(t,e){return new Promise(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=Object(o.c)(l,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e.id)),r.next=3,Object(o.h)(c,e);case 3:n("update set success!");case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}(t.user,t.set).then((function(e){if("not-found"===e.code)return w(t.user,t.set).then((function(t){m=!1,Date.now()}));m=!1,Date.now()})):"setSet"===t.type?w(t.user,t.set).then((function(t){m=!1,Date.now()})):"deleteSet"===t.type?function(t,e){return new Promise(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=Object(o.c)(l,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e)),r.next=3,Object(o.b)(c);case 3:n("delete set successful");case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}(t.user,t.setId).then((function(t){m=!1,Date.now()})):(console.log("invalid db update, skipping..."),m=!1)}var e}),100);var D=function(t){return new Promise(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(o.a)(l,"".concat(S,"/").concat(t,"/").concat(v)),e.next=3,Object(o.e)(n);case 3:c=e.sent,console.log("got sets",c.docs.map((function(t){return t.data()}))),r(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},[[189,32,5,33]]]);
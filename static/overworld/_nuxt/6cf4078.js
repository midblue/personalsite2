(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(e,t,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("085bcce9",content,!0,{sourceMap:!1})},366:function(e,t,n){"use strict";n(328)},367:function(e,t,n){var r=n(14)(!1);r.push([e.i,".elementsholder[data-v-69064f7c]{--water-line-color:#202020;--island-bg-color:#272727;position:absolute;-webkit-user-select:none;-ms-user-select:none;user-select:none;transform:translate(-50%,-50%);pointer-events:none}.elementsholder.hovering[data-v-69064f7c]{z-index:2000!important}.islandholder[data-v-69064f7c]{position:relative;pointer-events:auto;cursor:pointer}.infopane[data-v-69064f7c]{transform-origin:0 100% 0;cursor:auto;padding-left:15px;position:absolute;bottom:10%;left:100%;z-index:3}.infopane .pane[data-v-69064f7c]{pointer-events:auto;min-width:300px;-webkit-user-select:auto;-ms-user-select:auto;user-select:auto;padding:30px;background:#868686;color:#fff}.infopane.bottomright[data-v-69064f7c]{bottom:auto;top:3%;transform-origin:0 0 0}.infopane.topleft[data-v-69064f7c]{transform-origin:100% 100% 0}.infopane.bottomleft[data-v-69064f7c],.infopane.topleft[data-v-69064f7c]{padding-left:0;padding-right:15px;left:auto;right:100%}.infopane.bottomleft[data-v-69064f7c]{bottom:auto;top:3%;transform-origin:100% 0 0}.waterline[data-v-69064f7c]{background:var(--water-line-color);height:1%;position:absolute;z-index:2;top:90%;left:-20%;right:-20%}.islandclip[data-v-69064f7c]{width:100%;height:100%;-webkit-clip-path:polygon(-30% -30%,-30% 90%,130% 90%,130% -30%);clip-path:polygon(-30% -30%,-30% 90%,130% 90%,130% -30%)}.island[data-v-69064f7c]{width:600px;height:800px;background:#fff;border:3px solid var(--island-bg-color);display:flex;align-items:center;justify-content:center;box-shadow:0 15px 30px rgba(0,0,0,.1);transition:box-shadow .2s}.island.paused[data-v-69064f7c]{animation-play-state:paused!important;box-shadow:0 0 90px var(--water-line-color)}",""]),e.exports=r},383:function(e,t,n){"use strict";n.r(t);n(8),n(7),n(9),n(10),n(11);var r=n(0),o=n(3),c=(n(38),n(18),n(5));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"DemoIsland",props:{label:{},slug:{},top:{},left:{}},data:function(){return{hovering:!1,bobRate:(2*Math.random()+10).toFixed(2),bobDelay:(-6*Math.random()).toFixed(2),dragStart:{}}},computed:d(d({},Object(c.b)(["zoom","isMobile","isPortrait"])),{},{perspectiveZoom:function(){return this.zoom}}),watch:{hovering:function(){this.hovering&&this.$emit("travel"),window.removeEventListener("click",this.checkClose),window.removeEventListener("touchstart",this.checkClose)}},mounted:function(){},methods:{clickHolder:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},clickIslandStart:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.changedTouches&&e.changedTouches.length>1)){n.next=2;break}return n.abrupt("return",t.dragStart=[0,0]);case 2:if(!e.changedTouches||1!==e.changedTouches.length){n.next=4;break}return n.abrupt("return",t.dragStart=[e.changedTouches[0].clientX,e.changedTouches[0].clientY]);case 4:t.dragStart=[e.clientX,e.clientY];case 5:case"end":return n.stop()}}),n)})))()},clickIsland:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.changedTouches&&e.changedTouches.length>1)){n.next=2;break}return n.abrupt("return");case 2:if(r=e.clientX||e.changedTouches[0].clientX,o=e.clientY||e.changedTouches[0].clientY,!e.changedTouches||1!==e.changedTouches.length||!(Math.abs(t.dragStart[0]-r)>2||Math.abs(t.dragStart[1]-o)>2)){n.next=8;break}return n.abrupt("return");case 8:if(e.changedTouches||!(Math.abs(t.dragStart[0]-r)>5||Math.abs(t.dragStart[1]-o)>5)){n.next=10;break}return n.abrupt("return");case 10:if(t.isMobile){n.next=12;break}return n.abrupt("return",t.navigateToIsland());case 12:if(!t.hovering){n.next=14;break}return n.abrupt("return",t.navigateToIsland());case 14:return t.$store.dispatch("focusOnIslandMobile",t.slug),t.hovering=!0,e.stopPropagation(),n.next=19,t.$nextTick();case 19:t.$store.commit("set",{scaleToUsableArea:!0}),window.addEventListener("click",t.checkClose),window.addEventListener("touchstart",t.checkClose);case 22:case"end":return n.stop()}}),n)})))()},navigateToIsland:function(){this.$router.push("/".concat(this.slug,"/"))},checkClose:function(e){var path=[];if(e.path)path=e.path;else for(var t=e.target;null!==t.parentNode;)path.push(t),t=t.parentNode;path.find((function(e){return e.classList&&e.classList.contains("pane")}))||(this.$store.commit("set",{showWorldTooltip:!1}),this.hovering=!1,window.removeEventListener("click",this.checkClose),window.removeEventListener("touchstart",this.checkClose))}}},f=(n(366),n(4)),component=Object(f.a)(h,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"elementsholder",class:{hovering:t.hovering},style:{top:100*t.top+"%",left:100*t.left+"%","z-index":1e3*t.top}},[r("div",{staticClass:"islandholder",style:{transform:"scale("+t.perspectiveZoom+")"},on:{mouseenter:function(e){!t.isMobile&&(t.hovering=!0)},mouseleave:function(e){!t.isMobile&&(t.hovering=!1)},mouseup:t.clickHolder,touchend:function(e){return e.preventDefault(),t.clickHolder.apply(null,arguments)}}},[r("transition",{attrs:{name:"fade"}},[t.hovering&&!t.isMobile?r("div",{staticClass:"infopane nozoompan",class:{topleft:t.left>.5&&t.top>.5,bottomleft:t.left>.5&&t.top<=.5,bottomright:t.left<=.5&&t.top<=.5},style:{transform:"scale("+1/t.perspectiveZoom+")"}},[r("div",{staticClass:"pane"},[r("h3",[t._v(t._s(t.label))]),t._v(" "),r("div",[t._v("\n             Here's an element that's attached to a scaling\n            element but always displays at full size!\n          ")])])]):t._e()]),t._v(" "),r("div",{staticClass:"waterline"}),t._v(" "),r("div",{staticClass:"islandclip"},[r("div",{staticClass:"island",class:(e={paused:t.hovering},e["island"+t.slug]=!0,e),style:{animation:this.bobRate+"s ease-in-out infinite alternate bob","animation-delay":this.bobDelay+"s"},on:{mousedown:t.clickIslandStart,touchstart:function(e){return e.preventDefault(),t.clickIslandStart.apply(null,arguments)},mouseup:t.clickIsland,touchend:function(e){return e.preventDefault(),t.clickIsland.apply(null,arguments)}}},[r("span",[t._v(t._s(t.label))])])])],1)])}),[],!1,null,"69064f7c",null);t.default=component.exports}}]);
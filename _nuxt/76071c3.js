(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{303:function(e,t,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("c5872452",content,!0,{sourceMap:!1})},308:function(e,t,o){"use strict";var n=o(2),r=o(90).find,c=o(141),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},309:function(e,t,o){"use strict";o(303)},310:function(e,t,o){var n=o(86)(!1);n.push([e.i,'nav{z-index:3;-webkit-user-select:none;-moz-user-select:none;user-select:none;height:100vh;background:#333;overflow-y:auto;padding-bottom:4rem}nav,nav:after{width:var(--nav-width)}nav:after{content:"";position:fixed;bottom:0;z-index:5;left:0;height:5rem;background:linear-gradient(180deg,transparent,#222 80%);pointer-events:none}nav .option{width:var(--nav-width);height:calc(var(--nav-width)*0.9);cursor:pointer;overflow:hidden;flex-shrink:0}nav .option:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;transition:background .2s ease-in-out}nav .option.first{background:#000;height:calc(var(--nav-width)*1)!important;padding-top:1rem;position:sticky;top:0;z-index:5;box-shadow:0 0 .8rem .8rem #222;transition:box-shadow .2s ease-in-out}nav .option.first .thumb{display:none}nav .option.first:before{background:transparent!important}nav .option.first .letter{position:fixed;color:#fff;font-family:"Bungee Outline",Helvetica,sans-serif;font-size:calc(var(--nav-width)*0.8);line-height:1;font-weight:600;top:7px}nav .option.first .dots{top:83%}nav .option:nth-of-type(2){padding-top:.2rem;height:calc(var(--nav-width)*0.9 + .2rem)}nav .option>*{transition:all .3s ease-in-out;transform:scale(.85)}nav img,nav picture{z-index:2;width:calc(var(--nav-width)*0.7);height:calc(var(--nav-width)*0.7)}nav img{-o-object-fit:cover;object-fit:cover;border-radius:50%;box-shadow:0 0 0 2px #bbb;box-shadow:0 0 0 2px var(--highlight-color,#bbb)}nav .thumb{transition:transform .3s ease-in-out}nav .option.active:before,nav .option:hover:before{background:hsla(0,0%,100%,.2)}nav .option.active>*{transform:scale(.9);opacity:1}nav .option.active .thumb{transform:scale(.9) translateY(-3px)}nav .option.active img{box-shadow:0 0 0 3px #bbb;box-shadow:0 0 0 3px var(--highlight-color,#bbb)}nav .dots{position:absolute;bottom:calc(var(--nav-width)*0.05);grid-gap:.1rem;gap:.1rem}nav .dots .dot{opacity:.5;width:calc(var(--nav-width)*0.04);height:calc(var(--nav-width)*0.04);background:#eee;border-radius:50%}nav .dots .dot.active{opacity:1}nav .xMore{pointer-events:none;position:fixed;top:calc(100vh - 1.7rem);left:0;width:var(--nav-width);font-size:.8rem;color:hsla(0,0%,100%,.7);font-weight:700;text-align:center;z-index:6;white-space:nowrap}',""]),e.exports=n},314:function(e,t,o){var content=o(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("469d6adc",content,!0,{sourceMap:!1})},317:function(e,t,o){"use strict";o.r(t);o(23),o(54),o(31),o(29),o(37),o(28),o(38);var n=o(27),r=o(8),c=o(15),l=(o(35),o(301),o(140),o(30),o(12),o(209),o(72),o(73),o(0)),d=o(50),f=o(55);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=l.a.extend({props:{elements:{},focusY:{type:Number,default:0},focusX:{type:Number,default:0}},computed:v(v({},Object(d.b)(["mobile"])),{},{debouncedOnScroll:function(){return f.a(this.onScroll,50)},debouncedScroll:function(){return f.a(this.scrollToFocus,300)}}),data:function(){return{xMore:0}},watch:{focusY:function(){this.debouncedScroll()},mobile:function(){this.mobile?this.$el.removeEventListener("scroll",this.debouncedOnScroll):this.$el.addEventListener("scroll",this.debouncedOnScroll)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.$el){t.next=7;break}return t.next=5,f.c(100);case 5:t.next=2;break;case 7:e.$el.addEventListener("scroll",e.debouncedOnScroll),e.debouncedOnScroll();case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.$el&&this.$el.removeEventListener("scroll",this.debouncedOnScroll)},methods:{getTitle:function(p){var e;return((null===(e=/<h1[^>]*?>(.*)<\/h1>/.exec(p||""))||void 0===e?void 0:e[1])||"").replace("small","sub").trim()},scrollToFocus:function(){var e,t;this.$el&&this.$el.scrollTo({top:0===this.focusY?0:Math.max(0,((null===(t=null===(e=this.$refs["option"+this.focusY])||void 0===e?void 0:e[0])||void 0===t?void 0:t.offsetTop)||0)-120),behavior:"smooth"})},onScroll:function(e){var t=this;if(this.$el&&!this.mobile){var o=Object.entries(this.$refs).filter((function(e){return Object(n.a)(e,1)[0].includes("option")})).filter((function(e){var o,r=Object(n.a)(e,2),c=(r[0],null===(o=r[1])||void 0===o?void 0:o[0]);return c.offsetTop+c.offsetHeight>t.$el.scrollTop+t.$el.offsetHeight})).length;this.xMore=o}}}}),w=(o(309),o(36)),component=Object(w.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("nav",{directives:[{name:"show",rawName:"v-show",value:!e.mobile,expression:"!mobile"}],staticClass:"flexcolumn hidescrollbar"},[t("transition",{attrs:{name:"fade"}},[e.xMore?t("div",{staticClass:"xMore"},[e._v(e._s(e.xMore)+" more ↓")]):e._e()]),e._v(" "),e._l(e.elements,(function(p,o){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTitle(p.elements[0].text),expression:"getTitle(p.elements[0].text)"}],key:o,ref:"option"+o,refInFor:!0,staticClass:"option flexcenter flexcolumn",class:{active:e.focusY===o,first:0===o},style:{"--highlight-color":p.color,"box-shadow":e.focusY<=1?"none !important":""},on:{click:function(t){return e.$emit("focusY",o)}}},[0===o?t("div",{staticClass:"letter"},[e._v("J")]):e._e(),e._v(" "),t("div",{staticClass:"thumb flexcenter",style:{"--highlight-color":p.color},domProps:{innerHTML:e._s((p.thumbnail||p.image).replace(/large/g,"tiny").replace(/lazy/g,"auto"))}}),e._v(" "),t("div",{staticClass:"dots flex"},e._l(p.elements,(function(element,n){return t("div",{key:"dot"+n+element},[t("div",{staticClass:"dot",class:{active:e.focusX===n&&e.focusY===o}})])})),0)])}))],2)}),[],!1,null,null,null);t.default=component.exports},321:function(e,t,o){"use strict";o(314)},322:function(e,t,o){var n=o(86)(!1);n.push([e.i,'.contents[data-v-5464ea37]{position:relative;height:100%;width:100%;display:flex;--pane-width:calc(min(100vw, 100 * var(--vw)) - var(--nav-width));--pane-height:calc(min(100vh, 100 * var(--vh)))}.contents.mobile[data-v-5464ea37]{--nav-width:0px;--pane-width:calc(min(100vw, 100 * var(--vw)))}main[data-v-5464ea37]{flex:1;overflow-y:auto;scroll-snap-type:y mandatory;scroll-behavior:smooth;overscroll-behavior-x:none}.navigators[data-v-5464ea37],main[data-v-5464ea37]{height:var(--pane-height);width:var(--pane-width)}.navigators[data-v-5464ea37]{position:absolute;z-index:6;pointer-events:none;right:0;top:0}.navigators>*[data-v-5464ea37]{pointer-events:auto}.guide[data-v-5464ea37]{z-index:2;position:absolute;left:50%;bottom:4rem;transform:translateX(-50%)}.contents.mobile .guide[data-v-5464ea37]{display:none}.dots[data-v-5464ea37]{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;justify-content:center;align-items:center;z-index:2;cursor:pointer;transition:bottom .2s ease-in-out}.dots.bottom[data-v-5464ea37]{bottom:.5rem}.dots .dot[data-v-5464ea37]{width:1.5rem;height:.8rem}.dots .dot[data-v-5464ea37]:after{content:"";position:absolute;top:0;left:1px;border-radius:3px;width:calc(100% - 2px);height:100%;background-color:#333;opacity:.15;transition:opacity .2s ease-in-out;box-shadow:0 0 .5rem rgba(0,0,0,.1)}.dots .dot[data-v-5464ea37]:hover:after{opacity:.3}.dots .dot.active[data-v-5464ea37]:after{opacity:.4}.contents.mobile .dots[data-v-5464ea37]{bottom:1.5rem}.contents.mobile .dots .dot[data-v-5464ea37]{width:1rem;height:1rem}.arrow[data-v-5464ea37]{font-weight:700;position:absolute;z-index:2;background:rgba(40,40,40,.3);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.8;transition:all .2s ease-in-out;--s1:4.5rem;--s2:1.7rem;--d:0rem}.arrow[data-v-5464ea37]:hover{opacity:1;background:rgba(40,40,40,.8);--s2:2rem}.contents.mobile .arrow[data-v-5464ea37]{--s1:3rem;--s2:1.4rem;background:transparent;color:var(--text)}.up[data-v-5464ea37]{top:var(--d);border-bottom-right-radius:5px;border-bottom-left-radius:5px}.down[data-v-5464ea37],.up[data-v-5464ea37]{left:50%;transform:translateX(-50%);width:var(--s1);height:var(--s2)}.down[data-v-5464ea37]{bottom:var(--d);top:auto;border-top-right-radius:5px;border-top-left-radius:5px}.next[data-v-5464ea37]{right:var(--d);border-top-left-radius:5px;border-bottom-left-radius:5px;background:var(--highlight-color)!important;opacity:1}.next[data-v-5464ea37],.previous[data-v-5464ea37]{top:50%;transform:translateY(-50%);height:var(--s1);width:var(--s2)}.previous[data-v-5464ea37]{left:var(--d);right:auto;border-top-right-radius:5px;border-bottom-right-radius:5px}@keyframes bounceRight-5464ea37{0%,to{transform:translateX(0)}50%{transform:translateX(-10px)}}.bounceRight[data-v-5464ea37]{animation:bounceRight-5464ea37 .3s ease-in-out forwards}@keyframes bounceLeft-5464ea37{0%,to{transform:translateX(0)}50%{transform:translateX(10px)}}.bounceLeft[data-v-5464ea37]{animation:bounceLeft-5464ea37 .3s ease-in-out forwards}',""]),e.exports=n},329:function(e,t,o){"use strict";o.r(t);o(31),o(29),o(30),o(37),o(38);var n=o(319),r=o(15),c=o(8),l=(o(35),o(23),o(54),o(308),o(12),o(140),o(74),o(40),o(313),o(28),o(0)),d=o(55),f=o(50);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=l.a.extend({asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var o,n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$axios,o=e.store,e.redirect,n=e.route,r=n.hash.replace(/^#/,"").replace(/\/$/,""),c=o.state.elements.find((function(e){return e.slug===r})),t.abrupt("return",{elements:o.state.elements,preselectedSlug:null==c?void 0:c.slug});case 4:case"end":return t.stop()}}),t)})))()},head:function(){var e,t,o,n,r,c,l=this,element=this.elements.find((function(e){return e.slug&&e.slug===l.preselectedSlug})),title=(null===(t=/<h1[^>]*?>([^<]*)/g.exec((null===(e=null==element?void 0:element.elements[0])||void 0===e?void 0:e.text)||""))||void 0===t?void 0:t[1])||"Home",image=(null===(n=/src=(?:'|")([^"']*)/g.exec((null===(o=null==element?void 0:element.elements[0])||void 0===o?void 0:o.image)||""))||void 0===n?void 0:n[1])||(null===(c=/src=(?:'|")([^'"]*)/g.exec((null===(r=this.elements[0].elements[1])||void 0===r?void 0:r.image)||""))||void 0===c?void 0:c[1])||"",d=element?"https://jasperstephenson.com/p/".concat(element.slug):"https://jasperstephenson.com/";return{title:title+" | Jasper Stephenson",meta:[{hid:"description",name:"description",content:"Jasper Stephenson"},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:element?element.elements[0].text.replace(/<h1.*<\/h1>/g,"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim():"Digital Tinkerer, Friendly Ghost."},{hid:"og:image",name:"og:image",content:image},{hid:"og:url",name:"og:url",content:d}]}},data:function(){return{focusX:0,focusY:0,forceFocusX:0}},computed:v(v({},Object(f.b)(["mobile","dev"])),{},{hasNext:function(){return this.focusX!==this.elements[this.focusY].elements.length-1},hasPrevious:function(){return 0!==this.focusX},hasUp:function(){return 0!==this.focusY},hasDown:function(){return this.focusY!==this.elements.length-1}}),mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.addEventListener("keydown",(function(t){"ArrowDown"===t.key?(t.preventDefault(),t.stopPropagation(),e.down()):"ArrowUp"===t.key?(t.preventDefault(),t.stopPropagation(),e.up()):"ArrowLeft"===t.key?(t.preventDefault(),t.stopPropagation(),e.previous()):"ArrowRight"===t.key&&(t.preventDefault(),t.stopPropagation(),e.next())})),t.next=3,e.$nextTick();case 3:!e.preselectedSlug&&e.$route.hash&&(o=e.$route.hash.replace(/^#/,"").replace(/\/$/,""),n=e.elements.find((function(e){return e.slug===o})),e.preselectedSlug=null==n?void 0:n.slug),(r=e.elements.find((function(t){return t.slug===e.preselectedSlug})))&&e.forceFocusY(e.elements.indexOf(r),!0),history.replaceState({},"",e.$route.path.split("/")[0]+(r&&e.preselectedSlug?"/p/"+e.preselectedSlug:"/"));case 7:case"end":return t.stop()}}),t)})))()},methods:{setFocusY:function(e){var t=this;this.focusY=e,this.focusX=0,this.forceFocusX=-1,setTimeout((function(){if(t.focusY===e){t.preselectedSlug=t.elements[e].slug;var o=e!==t.elements.length-1,n=0!==e;o&&t.preload(e+1),n&&t.preload(e-1)}}),200)},forceFocusY:function(e){var t=arguments,o=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]&&t[1],o.focusY=e,o.focusX=0,o.forceFocusX=-1;case 4:if(o.$refs.main){n.next=9;break}return n.next=7,d.c(100);case 7:n.next=4;break;case 9:if(null===(c=o.$refs["row".concat(e)])||void 0===c?void 0:c[0]){n.next=14;break}return n.next=12,d.c(100);case 12:n.next=9;break;case 14:o.$refs.main.scrollTo({left:0,top:o.$refs.main.scrollHeight/o.elements.length*e,behavior:r?"instant":"smooth"}),o.preselectedSlug=o.elements[e].slug;case 17:case"end":return n.stop()}}),n)})))()},setFocusX:function(e){this.focusX=e},down:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop+=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},up:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop-=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},next:function(){var e=this,t=this.focusX;this.forceFocusX=Math.min(this.focusX+1,this.elements[this.focusY].elements.length-1),this.$refs.main&&this.forceFocusX===t&&this.elements[this.focusY].elements.length-1===t&&(this.$refs.main.classList.add("bounceRight"),setTimeout((function(){e.$refs.main.classList.remove("bounceRight")}),300))},previous:function(){var e=this,t=this.focusX;this.forceFocusX=Math.max(0,this.focusX-1),this.$refs.main&&this.forceFocusX===t&&0===t&&(this.$refs.main.classList.add("bounceLeft"),setTimeout((function(){e.$refs.main.classList.remove("bounceLeft")}),300))},preload:function(e){var t,o,r,c,l,d,f;Object(n.a)(((null===(o=null===(t=this.elements[e].elements)||void 0===t?void 0:t[0])||void 0===o?void 0:o.image)||"").matchAll(/src=(?:'|")(.*?)(?:'|")/g)).map((function(e){return e[1]})).forEach((function(i){(new Image).src=i})),(null===(c=null===(r=this.elements[e].elements)||void 0===r?void 0:r[0])||void 0===c?void 0:c.image)&&(null===(f=null===(d=null===(l=this.$refs["row".concat(e)])||void 0===l?void 0:l[0])||void 0===d?void 0:d.$el)||void 0===f||f.querySelectorAll("img").forEach((function(img){img.removeAttribute("loading")})))}}}),w=m,x=(o(321),o(36)),component=Object(x.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"contents",class:{mobile:e.mobile},style:{"--highlight-color":e.elements[e.focusY].color}},[t("LeftNav",{attrs:{elements:e.elements,focusY:e.focusY,focusX:e.focusX},on:{focusY:e.forceFocusY}}),e._v(" "),t("main",{ref:"main"},e._l(e.elements,(function(o,n){return t("PaneRow",e._b({key:"row"+n,ref:"row".concat(n),refInFor:!0,class:{first:0===n},attrs:{hasDown:n!==e.elements.length-1,hasUp:0!==n,forceFocusX:e.forceFocusX,index:n},on:{down:e.down,up:e.up,focusY:function(t){return e.setFocusY(n)},focusX:e.setFocusX}},"PaneRow",o,!1))})),1),e._v(" "),t("div",{staticClass:"navigators"},[t("transition",{attrs:{name:"fade"}},[e.hasUp?t("div",{staticClass:"arrow up",on:{click:e.up}},[e._v("↑")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasDown?t("div",{staticClass:"arrow down",on:{click:e.down}},[e._v("↓")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasNext?t("div",{staticClass:"arrow next",on:{click:e.next}},[e._v("→")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasPrevious?t("div",{staticClass:"arrow previous",on:{click:e.previous}},[e._v("←")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[0===e.focusY&&0===e.focusX?t("div",{staticClass:"guide sub textcenter"},[e._v("\n        Scroll, click, or use the "),t("br"),e._v("arrow keys to navigate.\n      ")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.elements[e.focusY].elements.length>1?t("div",{staticClass:"dots",class:{bottom:!e.hasDown}},e._l(e.elements[e.focusY].elements,(function(p,o){return t("div",{key:e.focusY+" "+o,staticClass:"dot",class:{active:o===e.focusX},on:{click:function(t){!e.mobile&&(e.forceFocusX=o)}}})})),0):e._e()])],1)],1)}),[],!1,null,"5464ea37",null);t.default=component.exports;installComponents(component,{LeftNav:o(317).default,PaneRow:o(327).default})}}]);
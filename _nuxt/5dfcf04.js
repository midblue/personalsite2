(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{292:function(e,t,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("7eeb920c",content,!0,{sourceMap:!1})},296:function(e,t,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("772da5c8",content,!0,{sourceMap:!1})},298:function(e,t,o){"use strict";o(292)},299:function(e,t,o){var n=o(74)((function(i){return i[1]}));n.push([e.i,'nav{background:#333;height:100vh;overflow-y:auto;padding-bottom:4rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:3}nav,nav:after{width:var(--nav-width)}nav:after{background:linear-gradient(180deg,transparent,#222 80%);bottom:0;content:"";height:5rem;left:0;pointer-events:none;position:fixed;z-index:5}nav .option{cursor:pointer;flex-shrink:0;height:calc(var(--nav-width)*.9);overflow:hidden;width:var(--nav-width)}nav .option:before{content:"";height:100%;left:0;position:absolute;top:0;transition:background .2s ease-in-out;width:100%}nav .option.first{background:#000;box-shadow:0 0 .8rem .8rem #222;height:calc(var(--nav-width)*1)!important;padding-top:1rem;position:sticky;top:0;transition:box-shadow .2s ease-in-out;z-index:5}nav .option.first .thumb{display:none}nav .option.first:before{background:transparent!important}nav .option.first .letter{color:#fff;font-family:"Bungee Outline",Helvetica,sans-serif;font-size:calc(var(--nav-width)*.8);font-weight:600;line-height:1;position:fixed;top:7px}nav .option.first .dots{top:83%}nav .option:nth-of-type(2){height:calc(var(--nav-width)*.9 + .2rem);padding-top:.2rem}nav .option>*{transform:scale(.85);transition:all .3s ease-in-out}nav img,nav picture{height:calc(var(--nav-width)*.7);width:calc(var(--nav-width)*.7);z-index:2}nav img{border-radius:50%;box-shadow:0 0 0 2px #bbb;box-shadow:0 0 0 2px var(--highlight-color,#bbb);-o-object-fit:cover;object-fit:cover}nav .thumb{transition:transform .3s ease-in-out}nav .option.active:before,nav .option:hover:before{background:hsla(0,0%,100%,.2)}nav .option.active>*{opacity:1;transform:scale(.9)}nav .option.active .thumb{transform:scale(.9) translateY(-3px)}nav .option.active img{box-shadow:0 0 0 3px #bbb;box-shadow:0 0 0 3px var(--highlight-color,#bbb)}nav .dots{bottom:calc(var(--nav-width)*.05);gap:.1rem;position:absolute}nav .dots .dot{background:#eee;border-radius:50%;height:calc(var(--nav-width)*.04);opacity:.5;width:calc(var(--nav-width)*.04)}nav .dots .dot.active{opacity:1}nav .xMore{color:hsla(0,0%,100%,.7);font-size:.8rem;font-weight:700;left:0;pointer-events:none;position:fixed;text-align:center;top:calc(100vh - 1.7rem);white-space:nowrap;width:var(--nav-width);z-index:6}',""]),n.locals={},e.exports=n},302:function(e,t,o){"use strict";o(296)},303:function(e,t,o){var n=o(74)((function(i){return i[1]}));n.push([e.i,".loading[data-v-5fcd0718]{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:1000}.loading .loading__spinner[data-v-5fcd0718]{animation:spin-5fcd0718 1s linear infinite;border:5px solid #e7e7e7;border-radius:50%;border-top-color:#999;height:30px;width:30px}@keyframes spin-5fcd0718{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),n.locals={},e.exports=n},305:function(e,t,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("252c2b25",content,!0,{sourceMap:!1})},308:function(e,t,o){"use strict";o.r(t);o(25),o(52);var n=o(22),r=o(12),c=(o(38),o(28),o(90),o(209),o(210),o(17),o(91),o(145),o(1)),l=o(32),d=c.a.extend({props:{elements:{type:Array},focusY:{type:Number,default:0},focusX:{type:Number,default:0}},computed:{mobile:function(){return this.$store.state.mobile},debouncedOnScroll:function(){return l.debounce(this.onScroll,50)},debouncedScroll:function(){return l.debounce(this.scrollToFocus,300)}},data:function(){return{xMore:0}},watch:{focusY:function(){this.debouncedScroll()},mobile:function(){this.mobile?this.$el.removeEventListener("scroll",this.debouncedOnScroll):this.$el.addEventListener("scroll",this.debouncedOnScroll)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.$el){t.next=7;break}return t.next=5,l.sleep(100);case 5:t.next=2;break;case 7:e.$el.addEventListener("scroll",e.debouncedOnScroll),e.debouncedOnScroll();case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.$el&&this.$el.removeEventListener("scroll",this.debouncedOnScroll)},methods:{getTitle:function(p){var e;return((null===(e=/<h1[^>]*?>(.*)<\/h1>/.exec(p||""))||void 0===e?void 0:e[1])||"").replace("small","sub").trim()},scrollToFocus:function(){var e,t;this.$el&&this.$el.scrollTo({top:0===this.focusY?0:Math.max(0,((null===(t=null===(e=this.$refs["option"+this.focusY])||void 0===e?void 0:e[0])||void 0===t?void 0:t.offsetTop)||0)-120),behavior:"smooth"})},onScroll:function(e){var t=this;if(this.$el&&!this.mobile){var o=Object.entries(this.$refs).filter((function(e){return Object(n.a)(e,1)[0].includes("option")})).filter((function(e){var o,r=Object(n.a)(e,2),c=(r[0],null===(o=r[1])||void 0===o?void 0:o[0]);return c.offsetTop+c.offsetHeight>t.$el.scrollTop+t.$el.offsetHeight})).length;this.xMore=o}}}}),f=(o(298),o(39)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("nav",{directives:[{name:"show",rawName:"v-show",value:!e.mobile,expression:"!mobile"}],staticClass:"flexcolumn hidescrollbar"},[t("transition",{attrs:{name:"fade"}},[e.xMore?t("div",{staticClass:"xMore"},[e._v(e._s(e.xMore)+" more ↓")]):e._e()]),e._v(" "),e._l(e.elements,(function(p,o){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTitle(p.elements[0].text),expression:"getTitle(p.elements[0].text)"}],key:o,ref:"option"+o,refInFor:!0,staticClass:"option flexcenter flexcolumn",class:{active:e.focusY===o,first:0===o},style:{"--highlight-color":p.color,"box-shadow":e.focusY<=1?"none !important":""},on:{click:function(t){return e.$emit("focusY",o)}}},[0===o?t("div",{staticClass:"letter"},[e._v("J")]):e._e(),e._v(" "),t("div",{staticClass:"thumb flexcenter",style:{"--highlight-color":p.color},domProps:{innerHTML:e._s((p.thumbnail||p.image).replace(/large/g,"tiny").replace(/lazy/g,"auto"))}}),e._v(" "),t("div",{staticClass:"dots flex"},e._l(p.elements,(function(element,n){return t("div",{key:"dot"+n+element},[t("div",{staticClass:"dot",class:{active:e.focusX===n&&e.focusY===o}})])})),0)])}))],2)}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,o){"use strict";o.r(t);var n=o(1).a.extend({data:function(){return{}},computed:{}}),r=(o(302),o(39)),component=Object(r.a)(n,(function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)}),[function(){var e=this._self._c;this._self._setupProxy;return e("div",{staticClass:"loading"},[e("div",{staticClass:"loading__spinner"})])}],!1,null,"5fcd0718",null);t.default=component.exports},312:function(e,t,o){"use strict";var n=o(3),r=o(93).find,c=o(146),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},314:function(e,t,o){"use strict";o(305)},315:function(e,t,o){var n=o(74)((function(i){return i[1]}));n.push([e.i,'.contents[data-v-43bbaa20]{display:flex;height:100%;position:relative;width:100%;--pane-width:calc(min(100vw, 100 * var(--vw)) - var(--nav-width));--pane-height:calc(min(100vh, 100 * var(--vh)))}.contents.noNav[data-v-43bbaa20]{--nav-width:0px}.contents.mobile[data-v-43bbaa20]{--nav-width:0px;--pane-width:calc(min(100vw, 100 * var(--vw)))}main[data-v-43bbaa20]{flex:1;overflow-y:auto;overscroll-behavior-x:none;scroll-behavior:smooth;scroll-snap-type:y mandatory}.navigators[data-v-43bbaa20],main[data-v-43bbaa20]{height:var(--pane-height);width:var(--pane-width)}.navigators[data-v-43bbaa20]{pointer-events:none;position:absolute;right:0;top:0;z-index:6}.navigators>*[data-v-43bbaa20]{pointer-events:auto}.guide[data-v-43bbaa20]{bottom:4rem;left:50%;position:absolute;transform:translateX(-50%);z-index:2}.contents.mobile .guide[data-v-43bbaa20]{display:none}.dots[data-v-43bbaa20]{align-items:center;bottom:2rem;cursor:pointer;display:flex;justify-content:center;left:50%;position:absolute;transform:translateX(-50%);transition:bottom .2s ease-in-out;z-index:2}.dots.bottom[data-v-43bbaa20]{bottom:.5rem}.dots .dot[data-v-43bbaa20]{height:.8rem;width:1.5rem}.dots .dot[data-v-43bbaa20]:after{background-color:#333;border-radius:3px;box-shadow:0 0 .5rem rgba(0,0,0,.1);content:"";height:100%;left:1px;opacity:.15;position:absolute;top:0;transition:opacity .2s ease-in-out;width:calc(100% - 2px)}.dots .dot[data-v-43bbaa20]:hover:after{opacity:.3}.dots .dot.active[data-v-43bbaa20]:after{opacity:.4}.contents.mobile .dots[data-v-43bbaa20]{bottom:1.5rem}.contents.mobile .dots .dot[data-v-43bbaa20]{height:1rem;width:1rem}.arrow[data-v-43bbaa20]{align-items:center;background:rgba(40,40,40,.3);color:#fff;cursor:pointer;display:flex;font-weight:700;justify-content:center;opacity:.8;position:absolute;transition:all .2s ease-in-out;z-index:2;--s1:4.5rem;--s2:1.7rem;--d:0rem}.arrow[data-v-43bbaa20]:hover{background:rgba(40,40,40,.8);opacity:1;--s2:2rem}.contents.mobile .arrow[data-v-43bbaa20]{--s1:3rem;--s2:1.4rem;background:transparent;color:var(--text)}.up[data-v-43bbaa20]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;top:var(--d)}.down[data-v-43bbaa20],.up[data-v-43bbaa20]{height:var(--s2);left:50%;transform:translateX(-50%);width:var(--s1)}.down[data-v-43bbaa20]{border-top-left-radius:5px;border-top-right-radius:5px;bottom:var(--d);top:auto}.next[data-v-43bbaa20]{background:var(--highlight-color)!important;border-bottom-left-radius:5px;border-top-left-radius:5px;opacity:1;right:var(--d)}.next[data-v-43bbaa20],.previous[data-v-43bbaa20]{height:var(--s1);top:50%;transform:translateY(-50%);width:var(--s2)}.previous[data-v-43bbaa20]{border-bottom-right-radius:5px;border-top-right-radius:5px;left:var(--d);right:auto}@keyframes bounceRight-43bbaa20{0%,to{transform:translateX(0)}50%{transform:translateX(-10px)}}.bounceRight[data-v-43bbaa20]{animation:bounceRight-43bbaa20 .3s ease-in-out forwards}@keyframes bounceLeft-43bbaa20{0%,to{transform:translateX(0)}50%{transform:translateX(10px)}}.bounceLeft[data-v-43bbaa20]{animation:bounceLeft-43bbaa20 .3s ease-in-out forwards}',""]),n.locals={},e.exports=n},321:function(e,t,o){"use strict";o.r(t);var n=o(311),r=o(12),c=o(18),l=(o(38),o(29),o(60),o(312),o(90),o(40),o(28),o(41),o(42),o(31),o(17),o(25),o(91),o(52),o(145),o(304),o(27),o(92),o(1)),d=o(32),f=o(58);function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){Object(c.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m=l.a.extend({head:function(){var e,t,o,n,r,c,l,f,v,h,m=this,element=this.elements.find((function(e){return e.slug&&e.slug===m.preselectedSlug})),title=(null===document||void 0===document?void 0:document.title)||((null===(o=/<h1[^>]*?>([^<]*)/g.exec((null===(t=null===(e=null==element?void 0:element.elements)||void 0===e?void 0:e[0])||void 0===t?void 0:t.text)||""))||void 0===o?void 0:o[1])||"Home").trim()+" | "+d.config.fullName,image=(null===(c=/src=(?:'|")([^"']*)/g.exec((null===(r=null===(n=null==element?void 0:element.elements)||void 0===n?void 0:n[0])||void 0===r?void 0:r.image)||""))||void 0===c?void 0:c[1])||(null===(h=/src=(?:'|")([^'"]*)/g.exec((null===(v=null===(f=null===(l=this.elements)||void 0===l?void 0:l[0])||void 0===f?void 0:f.elements[1])||void 0===v?void 0:v.image)||""))||void 0===h?void 0:h[1])||"",x=element?element.elements[0].text.replace(/<h1.*<\/h1>/g,"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim():d.config.description;return{title:title,meta:[{hid:"description",name:"description",content:x},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:x},{hid:"og:image",name:"og:image",content:image}]}},data:function(){return{c:d,hash:this.$route.hash.replace(/^#/,"").replace(/\/$/,""),focusX:0,focusY:0,forceFocusX:0}},computed:h(h({},Object(f.b)(["dev"])),{},{elements:function(){return this.$store.state.elements},preselectedSlug:function(){return this.$store.state.preselectedSlug},mobile:function(){return this.$store.state.mobile},hasNext:function(){var e;return this.focusX!==(null===(e=this.elements[this.focusY])||void 0===e?void 0:e.elements.length)-1},hasPrevious:function(){return 0!==this.focusX},hasUp:function(){return 0!==this.focusY},hasDown:function(){return this.focusY!==this.elements.length-1}}),watch:{elements:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.scrollToPreselected();case 1:case"end":return e.stop()}}),e)})))()}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.addEventListener("keydown",(function(t){"ArrowDown"===t.key?(t.preventDefault(),t.stopPropagation(),e.down()):"ArrowUp"===t.key?(t.preventDefault(),t.stopPropagation(),e.up()):"ArrowLeft"===t.key?(t.preventDefault(),t.stopPropagation(),e.previous()):"ArrowRight"===t.key&&(t.preventDefault(),t.stopPropagation(),e.next()),e.scrollToPreselected()}));case 1:case"end":return t.stop()}}),t)})))()},methods:{scrollToPreselected:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.elements.length){t.next=2;break}return t.abrupt("return");case 2:if(e.preselectedSlug){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.$nextTick();case 6:return t.next=8,d.sleep(100);case 8:(o=e.elements.find((function(t){return t.slug===e.preselectedSlug})))&&e.forceFocusY(e.elements.indexOf(o),!0),history.replaceState({},"",e.$route.path.split("/")[0]+(o&&e.preselectedSlug?"/p/"+e.preselectedSlug:"/")),e.$store.commit("set",{preselectedSlug:null});case 12:case"end":return t.stop()}}),t)})))()},setFocusY:function(e){var t,o,n,r,c=this;this.focusY=e,this.focusX=0,this.forceFocusX=-1;var title=(null===(r=/<h1[^>]*?>([^<]*)/g.exec((null===(n=null===(o=null===(t=this.elements[e])||void 0===t?void 0:t.elements)||void 0===o?void 0:o[0])||void 0===n?void 0:n.text)||""))||void 0===r?void 0:r[1])||"Home";d.config.fullName.includes(title)?document.title=d.config.fullName:document.title=title+" | "+d.config.fullName,setTimeout((function(){if(c.focusY===e){var t=e!==c.elements.length-1,o=0!==e;t&&c.preload(e+1),o&&c.preload(e-1)}}),200)},forceFocusY:function(e){var t=arguments,o=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]&&t[1],o.focusY=e,o.focusX=0,o.forceFocusX=-1;case 4:if(o.$refs.main){n.next=9;break}return n.next=7,d.sleep(100);case 7:n.next=4;break;case 9:if(null===(c=o.$refs["row".concat(e)])||void 0===c?void 0:c[0]){n.next=14;break}return n.next=12,d.sleep(100);case 12:n.next=9;break;case 14:o.$refs.main.scrollTo({left:0,top:o.$refs.main.scrollHeight/o.elements.length*e,behavior:r?"instant":"smooth"});case 16:case"end":return n.stop()}}),n)})))()},setFocusX:function(e){this.focusX=e},down:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop+=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},up:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop-=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},next:function(){var e,t,o=this,n=this.focusX;this.forceFocusX=Math.min(this.focusX+1,(null===(e=this.elements[this.focusY])||void 0===e?void 0:e.elements.length)-1),this.$refs.main&&this.forceFocusX===n&&(null===(t=this.elements[this.focusY])||void 0===t?void 0:t.elements.length)-1===n&&(this.$refs.main.classList.add("bounceRight"),setTimeout((function(){o.$refs.main.classList.remove("bounceRight")}),300))},previous:function(){var e=this,t=this.focusX;this.forceFocusX=Math.max(0,this.focusX-1),this.$refs.main&&this.forceFocusX===t&&0===t&&(this.$refs.main.classList.add("bounceLeft"),setTimeout((function(){e.$refs.main.classList.remove("bounceLeft")}),300))},preload:function(e){var t,o,r,c,l,d,f;Object(n.a)(((null===(o=null===(t=this.elements[e].elements)||void 0===t?void 0:t[0])||void 0===o?void 0:o.image)||"").matchAll(/src=(?:'|")(.*?)(?:'|")/g)).map((function(e){return e[1]})).forEach((function(i){(new Image).src=i})),(null===(c=null===(r=this.elements[e].elements)||void 0===r?void 0:r[0])||void 0===c?void 0:c.image)&&(null===(f=null===(d=null===(l=this.$refs["row".concat(e)])||void 0===l?void 0:l[0])||void 0===d?void 0:d.$el)||void 0===f||f.querySelectorAll("img").forEach((function(img){img.removeAttribute("loading")})))}}}),x=m,w=(o(314),o(39)),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"contents",class:{mobile:e.mobile,noNav:!e.c.config.showNav},style:{"--highlight-color":e.elements[e.focusY]&&e.elements[e.focusY].color,"--borderRadius":void 0===e.c.config.borderRadius?void 0:e.c.config.borderRadius+"px"}},[e.c.config.showNav?t("LeftNav",{attrs:{elements:e.elements,focusY:e.focusY,focusX:e.focusX},on:{focusY:e.forceFocusY}}):e._e(),e._v(" "),t("main",{ref:"main"},[e._l(e.elements,(function(o,n){return t("PaneRow",e._b({key:"row"+n,ref:"row".concat(n),refInFor:!0,class:{first:0===n},attrs:{hasDown:n!==e.elements.length-1,hasUp:0!==n,forceFocusX:e.forceFocusX,index:n},on:{down:e.down,up:e.up,focusY:function(t){return e.setFocusY(n)},focusX:e.setFocusX}},"PaneRow",o,!1))})),e._v(" "),e.elements.length?e._e():t("Loading")],2),e._v(" "),t("div",{staticClass:"navigators"},[t("transition",{attrs:{name:"fade"}},[e.hasUp?t("div",{staticClass:"arrow up",on:{click:e.up}},[e._v("↑")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasDown?t("div",{staticClass:"arrow down",on:{click:e.down}},[e._v("↓")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasNext?t("div",{staticClass:"arrow next",on:{click:e.next}},[e._v("→")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hasPrevious?t("div",{staticClass:"arrow previous",on:{click:e.previous}},[e._v("←")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[0===e.focusY&&0===e.focusX?t("div",{staticClass:"guide sub textcenter"},[e._v("\n        Scroll, click, or use the "),t("br"),e._v("arrow keys to navigate.\n      ")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.elements[e.focusY]&&e.elements[e.focusY].elements.length>1?t("div",{staticClass:"dots",class:{bottom:!e.hasDown}},e._l(e.elements[e.focusY].elements,(function(p,o){return t("div",{key:e.focusY+" "+o,staticClass:"dot",class:{active:o===e.focusX},on:{click:function(t){!e.mobile&&(e.forceFocusX=o)}}})})),0):e._e()])],1)],1)}),[],!1,null,"43bbaa20",null);t.default=component.exports;installComponents(component,{LeftNav:o(308).default,PaneRow:o(320).default,Loading:o(310).default})}}]);
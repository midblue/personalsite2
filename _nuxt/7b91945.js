(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{289:function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("7eeb920c",content,!0,{sourceMap:!1})},294:function(t,e,o){"use strict";o(289)},295:function(t,e,o){var n=o(88)((function(i){return i[1]}));n.push([t.i,'nav{background:#333;height:100vh;overflow-y:auto;padding-bottom:4rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:3}nav,nav:after{width:var(--nav-width)}nav:after{background:linear-gradient(180deg,transparent,#222 80%);bottom:0;content:"";height:5rem;left:0;pointer-events:none;position:fixed;z-index:5}nav .option{cursor:pointer;flex-shrink:0;height:calc(var(--nav-width)*.9);overflow:hidden;width:var(--nav-width)}nav .option:before{content:"";height:100%;left:0;position:absolute;top:0;transition:background .2s ease-in-out;width:100%}nav .option.first{background:#000;box-shadow:0 0 .8rem .8rem #222;height:calc(var(--nav-width)*1)!important;padding-top:1rem;position:sticky;top:0;transition:box-shadow .2s ease-in-out;z-index:5}nav .option.first .thumb{display:none}nav .option.first:before{background:transparent!important}nav .option.first .letter{color:#fff;font-family:"Bungee Outline",Helvetica,sans-serif;font-size:calc(var(--nav-width)*.8);font-weight:600;line-height:1;position:fixed;top:7px}nav .option.first .dots{top:83%}nav .option:nth-of-type(2){height:calc(var(--nav-width)*.9 + .2rem);padding-top:.2rem}nav .option>*{transform:scale(.85);transition:all .3s ease-in-out}nav img,nav picture{height:calc(var(--nav-width)*.7);width:calc(var(--nav-width)*.7);z-index:2}nav img{border-radius:50%;box-shadow:0 0 0 2px #bbb;box-shadow:0 0 0 2px var(--highlight-color,#bbb);-o-object-fit:cover;object-fit:cover}nav .thumb{transition:transform .3s ease-in-out}nav .option.active:before,nav .option:hover:before{background:hsla(0,0%,100%,.2)}nav .option.active>*{opacity:1;transform:scale(.9)}nav .option.active .thumb{transform:scale(.9) translateY(-3px)}nav .option.active img{box-shadow:0 0 0 3px #bbb;box-shadow:0 0 0 3px var(--highlight-color,#bbb)}nav .dots{bottom:calc(var(--nav-width)*.05);gap:.1rem;position:absolute}nav .dots .dot{background:#eee;border-radius:50%;height:calc(var(--nav-width)*.04);opacity:.5;width:calc(var(--nav-width)*.04)}nav .dots .dot.active{opacity:1}nav .xMore{color:hsla(0,0%,100%,.7);font-size:.8rem;font-weight:700;left:0;pointer-events:none;position:fixed;text-align:center;top:calc(100vh - 1.7rem);white-space:nowrap;width:var(--nav-width);z-index:6}',""]),n.locals={},t.exports=n},299:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("7ebb1628",content,!0,{sourceMap:!1})},302:function(t,e,o){"use strict";o.r(e);o(25),o(51);var n=o(22),r=o(12),c=(o(37),o(28),o(90),o(208),o(209),o(17),o(91),o(145),o(1)),l=o(58),d=c.a.extend({props:{elements:{type:Array},focusY:{type:Number,default:0},focusX:{type:Number,default:0}},computed:{mobile:function(){return this.$store.state.mobile},debouncedOnScroll:function(){return l.a(this.onScroll,50)},debouncedScroll:function(){return l.a(this.scrollToFocus,300)}},data:function(){return{xMore:0}},watch:{focusY:function(){this.debouncedScroll()},mobile:function(){this.mobile?this.$el.removeEventListener("scroll",this.debouncedOnScroll):this.$el.addEventListener("scroll",this.debouncedOnScroll)}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(t.$el){e.next=7;break}return e.next=5,l.c(100);case 5:e.next=2;break;case 7:t.$el.addEventListener("scroll",t.debouncedOnScroll),t.debouncedOnScroll();case 9:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$el&&this.$el.removeEventListener("scroll",this.debouncedOnScroll)},methods:{getTitle:function(p){var t;return((null===(t=/<h1[^>]*?>(.*)<\/h1>/.exec(p||""))||void 0===t?void 0:t[1])||"").replace("small","sub").trim()},scrollToFocus:function(){var t,e;this.$el&&this.$el.scrollTo({top:0===this.focusY?0:Math.max(0,((null===(e=null===(t=this.$refs["option"+this.focusY])||void 0===t?void 0:t[0])||void 0===e?void 0:e.offsetTop)||0)-120),behavior:"smooth"})},onScroll:function(t){var e=this;if(this.$el&&!this.mobile){var o=Object.entries(this.$refs).filter((function(t){return Object(n.a)(t,1)[0].includes("option")})).filter((function(t){var o,r=Object(n.a)(t,2),c=(r[0],null===(o=r[1])||void 0===o?void 0:o[0]);return c.offsetTop+c.offsetHeight>e.$el.scrollTop+e.$el.offsetHeight})).length;this.xMore=o}}}}),f=(o(294),o(38)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("nav",{directives:[{name:"show",rawName:"v-show",value:!t.mobile,expression:"!mobile"}],staticClass:"flexcolumn hidescrollbar"},[e("transition",{attrs:{name:"fade"}},[t.xMore?e("div",{staticClass:"xMore"},[t._v(t._s(t.xMore)+" more ↓")]):t._e()]),t._v(" "),t._l(t.elements,(function(p,o){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.getTitle(p.elements[0].text),expression:"getTitle(p.elements[0].text)"}],key:o,ref:"option"+o,refInFor:!0,staticClass:"option flexcenter flexcolumn",class:{active:t.focusY===o,first:0===o},style:{"--highlight-color":p.color,"box-shadow":t.focusY<=1?"none !important":""},on:{click:function(e){return t.$emit("focusY",o)}}},[0===o?e("div",{staticClass:"letter"},[t._v("J")]):t._e(),t._v(" "),e("div",{staticClass:"thumb flexcenter",style:{"--highlight-color":p.color},domProps:{innerHTML:t._s((p.thumbnail||p.image).replace(/large/g,"tiny").replace(/lazy/g,"auto"))}}),t._v(" "),e("div",{staticClass:"dots flex"},t._l(p.elements,(function(element,n){return e("div",{key:"dot"+n+element},[e("div",{staticClass:"dot",class:{active:t.focusX===n&&t.focusY===o}})])})),0)])}))],2)}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,o){"use strict";var n=o(3),r=o(93).find,c=o(146),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},307:function(t,e,o){"use strict";o(299)},308:function(t,e,o){var n=o(88)((function(i){return i[1]}));n.push([t.i,'.contents[data-v-a7d36254]{display:flex;height:100%;position:relative;width:100%;--pane-width:calc(min(100vw, 100 * var(--vw)) - var(--nav-width));--pane-height:calc(min(100vh, 100 * var(--vh)))}.contents.mobile[data-v-a7d36254]{--nav-width:0px;--pane-width:calc(min(100vw, 100 * var(--vw)))}main[data-v-a7d36254]{flex:1;overflow-y:auto;overscroll-behavior-x:none;scroll-behavior:smooth;scroll-snap-type:y mandatory}.navigators[data-v-a7d36254],main[data-v-a7d36254]{height:var(--pane-height);width:var(--pane-width)}.navigators[data-v-a7d36254]{pointer-events:none;position:absolute;right:0;top:0;z-index:6}.navigators>*[data-v-a7d36254]{pointer-events:auto}.guide[data-v-a7d36254]{bottom:4rem;left:50%;position:absolute;transform:translateX(-50%);z-index:2}.contents.mobile .guide[data-v-a7d36254]{display:none}.dots[data-v-a7d36254]{align-items:center;bottom:2rem;cursor:pointer;display:flex;justify-content:center;left:50%;position:absolute;transform:translateX(-50%);transition:bottom .2s ease-in-out;z-index:2}.dots.bottom[data-v-a7d36254]{bottom:.5rem}.dots .dot[data-v-a7d36254]{height:.8rem;width:1.5rem}.dots .dot[data-v-a7d36254]:after{background-color:#333;border-radius:3px;box-shadow:0 0 .5rem rgba(0,0,0,.1);content:"";height:100%;left:1px;opacity:.15;position:absolute;top:0;transition:opacity .2s ease-in-out;width:calc(100% - 2px)}.dots .dot[data-v-a7d36254]:hover:after{opacity:.3}.dots .dot.active[data-v-a7d36254]:after{opacity:.4}.contents.mobile .dots[data-v-a7d36254]{bottom:1.5rem}.contents.mobile .dots .dot[data-v-a7d36254]{height:1rem;width:1rem}.arrow[data-v-a7d36254]{align-items:center;background:rgba(40,40,40,.3);color:#fff;cursor:pointer;display:flex;font-weight:700;justify-content:center;opacity:.8;position:absolute;transition:all .2s ease-in-out;z-index:2;--s1:4.5rem;--s2:1.7rem;--d:0rem}.arrow[data-v-a7d36254]:hover{background:rgba(40,40,40,.8);opacity:1;--s2:2rem}.contents.mobile .arrow[data-v-a7d36254]{--s1:3rem;--s2:1.4rem;background:transparent;color:var(--text)}.up[data-v-a7d36254]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;top:var(--d)}.down[data-v-a7d36254],.up[data-v-a7d36254]{height:var(--s2);left:50%;transform:translateX(-50%);width:var(--s1)}.down[data-v-a7d36254]{border-top-left-radius:5px;border-top-right-radius:5px;bottom:var(--d);top:auto}.next[data-v-a7d36254]{background:var(--highlight-color)!important;border-bottom-left-radius:5px;border-top-left-radius:5px;opacity:1;right:var(--d)}.next[data-v-a7d36254],.previous[data-v-a7d36254]{height:var(--s1);top:50%;transform:translateY(-50%);width:var(--s2)}.previous[data-v-a7d36254]{border-bottom-right-radius:5px;border-top-right-radius:5px;left:var(--d);right:auto}@keyframes bounceRight-a7d36254{0%,to{transform:translateX(0)}50%{transform:translateX(-10px)}}.bounceRight[data-v-a7d36254]{animation:bounceRight-a7d36254 .3s ease-in-out forwards}@keyframes bounceLeft-a7d36254{0%,to{transform:translateX(0)}50%{transform:translateX(10px)}}.bounceLeft[data-v-a7d36254]{animation:bounceLeft-a7d36254 .3s ease-in-out forwards}',""]),n.locals={},t.exports=n},314:function(t,e,o){"use strict";o.r(e);var n=o(304),r=o(12),c=o(18),l=(o(37),o(305),o(41),o(29),o(28),o(39),o(40),o(31),o(17),o(25),o(51),o(145),o(298),o(27),o(92),o(1)),d=o(58),f=o(57);function h(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach((function(e){Object(c.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m=l.a.extend({head:function(){var t,e,o,n,r,c,l,d,f,h,v=this,element=this.elements.find((function(t){return t.slug&&t.slug===v.preselectedSlug})),title=(null===(o=/<h1[^>]*?>([^<]*)/g.exec((null===(e=null===(t=null==element?void 0:element.elements)||void 0===t?void 0:t[0])||void 0===e?void 0:e.text)||""))||void 0===o?void 0:o[1])||"Home",image=(null===(c=/src=(?:'|")([^"']*)/g.exec((null===(r=null===(n=null==element?void 0:element.elements)||void 0===n?void 0:n[0])||void 0===r?void 0:r.image)||""))||void 0===c?void 0:c[1])||(null===(h=/src=(?:'|")([^'"]*)/g.exec((null===(f=null===(d=null===(l=this.elements)||void 0===l?void 0:l[0])||void 0===d?void 0:d.elements[1])||void 0===f?void 0:f.image)||""))||void 0===h?void 0:h[1])||"",m=element?"https://jasperstephenson.com/p/".concat(element.slug):"https://jasperstephenson.com/";return{title:title+" | Jasper Stephenson",meta:[{hid:"description",name:"description",content:"Jasper Stephenson"},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:element?element.elements[0].text.replace(/<h1.*<\/h1>/g,"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim():"Digital Tinkerer, Friendly Ghost."},{hid:"og:image",name:"og:image",content:image},{hid:"og:url",name:"og:url",content:m}]}},data:function(){return{hash:this.$route.hash.replace(/^#/,"").replace(/\/$/,""),focusX:0,focusY:0,forceFocusX:0}},computed:v(v({},Object(f.b)(["dev"])),{},{elements:function(){return this.$store.state.elements},preselectedSlug:function(){return this.$store.state.preselectedSlug},mobile:function(){return this.$store.state.mobile},hasNext:function(){var t;return this.focusX!==(null===(t=this.elements[this.focusY])||void 0===t?void 0:t.elements.length)-1},hasPrevious:function(){return 0!==this.focusX},hasUp:function(){return 0!==this.focusY},hasDown:function(){return this.focusY!==this.elements.length-1}}),watch:{elements:function(t){var e=this;if(t.length){var o=this.elements.find((function(t){return t.slug===e.preselectedSlug}));o&&this.forceFocusY(this.elements.indexOf(o),!0),history.replaceState({},"",this.$route.path.split("/")[0]+(o&&this.preselectedSlug?"/p/"+this.preselectedSlug:"/"))}}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.addEventListener("keydown",(function(e){"ArrowDown"===e.key?(e.preventDefault(),e.stopPropagation(),t.down()):"ArrowUp"===e.key?(e.preventDefault(),e.stopPropagation(),t.up()):"ArrowLeft"===e.key?(e.preventDefault(),e.stopPropagation(),t.previous()):"ArrowRight"===e.key&&(e.preventDefault(),e.stopPropagation(),t.next())}));case 1:case"end":return e.stop()}}),e)})))()},methods:{setFocusY:function(t){var e=this;this.focusY=t,this.focusX=0,this.forceFocusX=-1,setTimeout((function(){if(e.focusY===t){var o=t!==e.elements.length-1,n=0!==t;o&&e.preload(t+1),n&&e.preload(t-1)}}),200)},forceFocusY:function(t){var e=arguments,o=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.length>1&&void 0!==e[1]&&e[1],o.focusY=t,o.focusX=0,o.forceFocusX=-1;case 4:if(o.$refs.main){n.next=9;break}return n.next=7,d.c(100);case 7:n.next=4;break;case 9:if(null===(c=o.$refs["row".concat(t)])||void 0===c?void 0:c[0]){n.next=14;break}return n.next=12,d.c(100);case 12:n.next=9;break;case 14:o.$refs.main.scrollTo({left:0,top:o.$refs.main.scrollHeight/o.elements.length*t,behavior:r?"instant":"smooth"});case 16:case"end":return n.stop()}}),n)})))()},setFocusX:function(t){this.focusX=t},down:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop+=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},up:function(){this.focusY;this.$refs.main&&(this.$refs.main.scrollTop-=this.$refs.main.scrollHeight/this.elements.length,this.forceFocusX=-1)},next:function(){var t,e,o=this,n=this.focusX;this.forceFocusX=Math.min(this.focusX+1,(null===(t=this.elements[this.focusY])||void 0===t?void 0:t.elements.length)-1),this.$refs.main&&this.forceFocusX===n&&(null===(e=this.elements[this.focusY])||void 0===e?void 0:e.elements.length)-1===n&&(this.$refs.main.classList.add("bounceRight"),setTimeout((function(){o.$refs.main.classList.remove("bounceRight")}),300))},previous:function(){var t=this,e=this.focusX;this.forceFocusX=Math.max(0,this.focusX-1),this.$refs.main&&this.forceFocusX===e&&0===e&&(this.$refs.main.classList.add("bounceLeft"),setTimeout((function(){t.$refs.main.classList.remove("bounceLeft")}),300))},preload:function(t){var e,o,r,c,l,d,f;Object(n.a)(((null===(o=null===(e=this.elements[t].elements)||void 0===e?void 0:e[0])||void 0===o?void 0:o.image)||"").matchAll(/src=(?:'|")(.*?)(?:'|")/g)).map((function(t){return t[1]})).forEach((function(i){(new Image).src=i})),(null===(c=null===(r=this.elements[t].elements)||void 0===r?void 0:r[0])||void 0===c?void 0:c.image)&&(null===(f=null===(d=null===(l=this.$refs["row".concat(t)])||void 0===l?void 0:l[0])||void 0===d?void 0:d.$el)||void 0===f||f.querySelectorAll("img").forEach((function(img){img.removeAttribute("loading")})))}}}),w=m,x=(o(307),o(38)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"contents",class:{mobile:t.mobile},style:{"--highlight-color":t.elements[t.focusY]&&t.elements[t.focusY].color}},[e("LeftNav",{attrs:{elements:t.elements,focusY:t.focusY,focusX:t.focusX},on:{focusY:t.forceFocusY}}),t._v(" "),e("main",{ref:"main"},t._l(t.elements,(function(o,n){return e("PaneRow",t._b({key:"row"+n,ref:"row".concat(n),refInFor:!0,class:{first:0===n},attrs:{hasDown:n!==t.elements.length-1,hasUp:0!==n,forceFocusX:t.forceFocusX,index:n},on:{down:t.down,up:t.up,focusY:function(e){return t.setFocusY(n)},focusX:t.setFocusX}},"PaneRow",o,!1))})),1),t._v(" "),e("div",{staticClass:"navigators"},[e("transition",{attrs:{name:"fade"}},[t.hasUp?e("div",{staticClass:"arrow up",on:{click:t.up}},[t._v("↑")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.hasDown?e("div",{staticClass:"arrow down",on:{click:t.down}},[t._v("↓")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.hasNext?e("div",{staticClass:"arrow next",on:{click:t.next}},[t._v("→")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.hasPrevious?e("div",{staticClass:"arrow previous",on:{click:t.previous}},[t._v("←")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[0===t.focusY&&0===t.focusX?e("div",{staticClass:"guide sub textcenter"},[t._v("\n        Scroll, click, or use the "),e("br"),t._v("arrow keys to navigate.\n      ")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.elements[t.focusY]&&t.elements[t.focusY].elements.length>1?e("div",{staticClass:"dots",class:{bottom:!t.hasDown}},t._l(t.elements[t.focusY].elements,(function(p,o){return e("div",{key:t.focusY+" "+o,staticClass:"dot",class:{active:o===t.focusX},on:{click:function(e){!t.mobile&&(t.forceFocusX=o)}}})})),0):t._e()])],1)],1)}),[],!1,null,"a7d36254",null);e.default=component.exports;installComponents(component,{LeftNav:o(302).default,PaneRow:o(313).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(e,t,o){"use strict";var n=o(10),r=o(5),c=o(4),l=o(113),f=o(18),v=o(13),d=o(207),h=o(48),m=o(88),w=o(206),x=o(3),y=o(89).f,O=o(39).f,_=o(19).f,N=o(302),k=o(208).trim,j="Number",E=r.Number,I=E.prototype,S=r.TypeError,T=c("".slice),$=c("".charCodeAt),M=function(e){var t=w(e,"number");return"bigint"==typeof t?t:P(t)},P=function(e){var t,o,n,r,c,l,f,code,v=w(e,"number");if(m(v))throw S("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=k(v),43===(t=$(v,0))||45===t){if(88===(o=$(v,2))||120===o)return NaN}else if(48===t){switch($(v,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+v}for(l=(c=T(v,2)).length,f=0;f<l;f++)if((code=$(c,f))<48||code>r)return NaN;return parseInt(c,n)}return+v};if(l(j,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var Y,z=function(e){var t=arguments.length<1?0:E(M(e)),o=this;return h(I,o)&&x((function(){N(o)}))?d(Object(t),o,z):t},C=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;C.length>F;F++)v(E,Y=C[F])&&!v(z,Y)&&_(z,Y,O(E,Y));z.prototype=I,I.constructor=z,f(r,j,z,{constructor:!0})}},302:function(e,t,o){var n=o(4);e.exports=n(1..valueOf)},303:function(e,t,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("c5872452",content,!0,{sourceMap:!1})},309:function(e,t,o){"use strict";o(303)},310:function(e,t,o){var n=o(86)(!1);n.push([e.i,'nav{z-index:3;-webkit-user-select:none;-moz-user-select:none;user-select:none;height:100vh;background:#333;overflow-y:auto;padding-bottom:4rem}nav,nav:after{width:var(--nav-width)}nav:after{content:"";position:fixed;bottom:0;z-index:5;left:0;height:5rem;background:linear-gradient(180deg,transparent,#222 80%);pointer-events:none}nav .option{width:var(--nav-width);height:calc(var(--nav-width)*0.9);cursor:pointer;overflow:hidden;flex-shrink:0}nav .option:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;transition:background .2s ease-in-out}nav .option.first{background:#000;height:calc(var(--nav-width)*1)!important;padding-top:1rem;position:sticky;top:0;z-index:5;box-shadow:0 0 .8rem .8rem #222;transition:box-shadow .2s ease-in-out}nav .option.first .thumb{display:none}nav .option.first:before{background:transparent!important}nav .option.first .letter{position:fixed;color:#fff;font-family:"Bungee Outline",Helvetica,sans-serif;font-size:calc(var(--nav-width)*0.8);line-height:1;font-weight:600;top:7px}nav .option.first .dots{top:83%}nav .option:nth-of-type(2){padding-top:.2rem;height:calc(var(--nav-width)*0.9 + .2rem)}nav .option>*{transition:all .3s ease-in-out;transform:scale(.85)}nav img,nav picture{z-index:2;width:calc(var(--nav-width)*0.7);height:calc(var(--nav-width)*0.7)}nav img{-o-object-fit:cover;object-fit:cover;border-radius:50%;box-shadow:0 0 0 2px #bbb;box-shadow:0 0 0 2px var(--highlight-color,#bbb)}nav .thumb{transition:transform .3s ease-in-out}nav .option.active:before,nav .option:hover:before{background:hsla(0,0%,100%,.2)}nav .option.active>*{transform:scale(.9);opacity:1}nav .option.active .thumb{transform:scale(.9) translateY(-3px)}nav .option.active img{box-shadow:0 0 0 3px #bbb;box-shadow:0 0 0 3px var(--highlight-color,#bbb)}nav .dots{position:absolute;bottom:calc(var(--nav-width)*0.05);grid-gap:.1rem;gap:.1rem}nav .dots .dot{opacity:.5;width:calc(var(--nav-width)*0.04);height:calc(var(--nav-width)*0.04);background:#eee;border-radius:50%}nav .dots .dot.active{opacity:1}nav .xMore{pointer-events:none;position:fixed;top:calc(100vh - 1.7rem);left:0;width:var(--nav-width);font-size:.8rem;color:hsla(0,0%,100%,.7);font-weight:700;text-align:center;z-index:6;white-space:nowrap}',""]),e.exports=n},317:function(e,t,o){"use strict";o.r(t);o(23),o(54),o(31),o(29),o(37),o(28),o(38);var n=o(27),r=o(8),c=o(15),l=(o(35),o(301),o(140),o(30),o(12),o(209),o(72),o(73),o(0)),f=o(50),v=o(55);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=l.a.extend({props:{elements:{},focusY:{type:Number,default:0},focusX:{type:Number,default:0}},computed:h(h({},Object(f.b)(["mobile"])),{},{debouncedOnScroll:function(){return v.a(this.onScroll,50)},debouncedScroll:function(){return v.a(this.scrollToFocus,300)}}),data:function(){return{xMore:0}},watch:{focusY:function(){this.debouncedScroll()},mobile:function(){this.mobile?this.$el.removeEventListener("scroll",this.debouncedOnScroll):this.$el.addEventListener("scroll",this.debouncedOnScroll)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.$el){t.next=7;break}return t.next=5,v.c(100);case 5:t.next=2;break;case 7:e.$el.addEventListener("scroll",e.debouncedOnScroll),e.debouncedOnScroll();case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.$el&&this.$el.removeEventListener("scroll",this.debouncedOnScroll)},methods:{getTitle:function(p){var e;return((null===(e=/<h1[^>]*?>(.*)<\/h1>/.exec(p||""))||void 0===e?void 0:e[1])||"").replace("small","sub").trim()},scrollToFocus:function(){var e,t;this.$el&&this.$el.scrollTo({top:0===this.focusY?0:Math.max(0,((null===(t=null===(e=this.$refs["option"+this.focusY])||void 0===e?void 0:e[0])||void 0===t?void 0:t.offsetTop)||0)-120),behavior:"smooth"})},onScroll:function(e){var t=this;if(this.$el&&!this.mobile){var o=Object.entries(this.$refs).filter((function(e){return Object(n.a)(e,1)[0].includes("option")})).filter((function(e){var o,r=Object(n.a)(e,2),c=(r[0],null===(o=r[1])||void 0===o?void 0:o[0]);return c.offsetTop+c.offsetHeight>t.$el.scrollTop+t.$el.offsetHeight})).length;this.xMore=o}}}}),w=(o(309),o(36)),component=Object(w.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("nav",{directives:[{name:"show",rawName:"v-show",value:!e.mobile,expression:"!mobile"}],staticClass:"flexcolumn hidescrollbar"},[t("transition",{attrs:{name:"fade"}},[e.xMore?t("div",{staticClass:"xMore"},[e._v(e._s(e.xMore)+" more ↓")]):e._e()]),e._v(" "),e._l(e.elements,(function(p,o){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTitle(p.elements[0].text),expression:"getTitle(p.elements[0].text)"}],key:o,ref:"option"+o,refInFor:!0,staticClass:"option flexcenter flexcolumn",class:{active:e.focusY===o,first:0===o},style:{"--highlight-color":p.color,"box-shadow":e.focusY<=1?"none !important":""},on:{click:function(t){return e.$emit("focusY",o)}}},[0===o?t("div",{staticClass:"letter"},[e._v("J")]):e._e(),e._v(" "),t("div",{staticClass:"thumb flexcenter",style:{"--highlight-color":p.color},domProps:{innerHTML:e._s((p.thumbnail||p.image).replace(/large/g,"tiny").replace(/lazy/g,"auto"))}}),e._v(" "),t("div",{staticClass:"dots flex"},e._l(p.elements,(function(element,n){return t("div",{key:"dot"+n+element},[t("div",{staticClass:"dot",class:{active:e.focusX===n&&e.focusY===o}})])})),0)])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);
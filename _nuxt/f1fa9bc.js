(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{294:function(e,t,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("6a219f51",content,!0,{sourceMap:!1})},295:function(e,t,n){"use strict";var r=n(11),o=n(5),l=n(3),c=n(112),m=n(17),d=n(13),h=n(201),f=n(45),v=n(86),x=n(200),w=n(4),E=n(87).f,I=n(38).f,y=n(18).f,_=n(296),O=n(203).trim,N="Number",j=o.Number,k=j.prototype,S=o.TypeError,P=l("".slice),M=l("".charCodeAt),T=function(e){var t=x(e,"number");return"bigint"==typeof t?t:C(t)},C=function(e){var t,n,r,o,l,c,m,code,d=x(e,"number");if(v(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=O(d),43===(t=M(d,0))||45===t){if(88===(n=M(d,2))||120===n)return NaN}else if(48===t){switch(M(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=P(d,2)).length,m=0;m<c;m++)if((code=M(l,m))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(c(N,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var A,F=function(e){var t=arguments.length<1?0:j(T(e)),n=this;return f(k,n)&&w((function(){_(n)}))?h(Object(t),n,F):t},L=r?E(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;L.length>R;R++)d(j,A=L[R])&&!d(F,A)&&y(F,A,I(j,A));F.prototype=k,k.constructor=F,m(o,N,F,{constructor:!0})}},296:function(e,t,n){var r=n(3);e.exports=r(1..valueOf)},298:function(e,t,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("7e69325e",content,!0,{sourceMap:!1})},299:function(e,t,n){"use strict";n(294)},300:function(e,t,n){var r=n(83)(!1);r.push([e.i,'.paneElementImage{z-index:2}.paneElementImage picture{display:block}.paneElementImage picture:not(:last-child) img{margin-bottom:1rem}.paneElementImage .iframeholder:before,.paneElementImage picture:before{z-index:1;content:"";position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0 .1rem .3rem rgba(0,0,0,.3),0 1rem 4rem rgba(0,0,0,.3);box-shadow:0 .1rem .3rem var(--highlight-color,rgba(0,0,0,.3)),0 1rem 4rem var(--highlight-color,rgba(0,0,0,.3));border-radius:5px;opacity:.5}.paneElementImage img{cursor:zoom-in}.paneElementImage iframe,.paneElementImage img{z-index:2;display:block;max-width:calc(var(--pane-width)*0.5);max-height:max(var(--pane-height)*.8);border-radius:5px}.paneElementImage .iframeholder{min-width:calc(var(--pane-width)*0.5);width:100%;padding-top:56.25%}.paneElementImage iframe{position:absolute;top:0;left:0;width:100%;height:100%}.paneElementImage .grid2 picture:not(:last-child) img,.paneElementImage .grid3 picture:not(:last-child) img{margin-bottom:0;border-radius:0}.paneElementImage.noText iframe,.paneElementImage.noText img{max-width:calc(var(--pane-width)*0.8)}.mobile .iframeholder{min-width:calc(var(--pane-width)*0.85)}.mobile iframe,.mobile img{max-width:calc(var(--pane-width)*0.85)}',""]),e.exports=r},301:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(44),n(12),n(27),n(28),n(0)),l=n(85),c=o.a.extend({props:{image:{type:String,default:null}},data:function(){return{}},computed:{},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:return t.next=4,l.c(500);case 4:null===(n=e.$refs.image)||void 0===n||n.querySelectorAll("img").forEach((function(img){img.addEventListener("click",(function(){e.$store.commit("set",{lightboxSrc:img.src})}))}));case 5:case"end":return t.stop()}}),t)})))()},methods:{getLightboxSrc:function(s){var e;return(null===(e=/src=(?:'|")(.*?)(?:'|")/.exec(s))||void 0===e?void 0:e[1])||null}}}),m=(n(299),n(35)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"image",staticClass:"paneElementImage",domProps:{innerHTML:e._s(e.image)}})}),[],!1,null,null,null);t.default=component.exports},304:function(e,t,n){"use strict";n(298)},305:function(e,t,n){var r=n(83)(!1);r.push([e.i,".paneElement{flex-shrink:0;flex-grow:0;flex-flow:row nowrap;width:var(--pane-width);height:var(--pane-height);scroll-snap-align:center;overflow:hidden}.paneElement,.paneElement .contents{display:flex;align-items:center;justify-content:center}.paneElement .contents{flex-direction:row;grid-gap:5vw;gap:5vw;padding:6vh 5vw 8vh;transition:transform .3s ease-in-out,opacity .2s;width:100%;height:100%}.paneElement .text{position:relative;pointer-events:none;z-index:3;flex-shrink:0;width:calc(var(--pane-width)*0.65);padding-right:calc(var(--pane-width)*0.05);padding-left:calc(var(--pane-width)*0.3);margin-left:calc(var(--pane-width)*-1*0.3);max-height:max(var(--pane-height)*.85)}.paneElement .text.noImage{width:min(var(--pane-width)*.9,600px);padding-right:0;padding-left:0;margin-left:0}.paneElement .text.noImage.first{width:calc(var(--pane-width)*0.9)}.paneElement .text .header h1{display:inline-block}.paneElement .text .textScroller{width:100%;height:100%;pointer-events:auto;overflow-y:auto;overflow-x:hidden}.paneElement.mobile .contents{flex-direction:column;grid-gap:2rem;gap:2rem;padding:1.5rem 2rem 2.5rem;background:transparent}.paneElement.mobile .contents:before{display:none}.paneElement.mobile .contents .paneElementImage img{max-width:100%;max-height:40vh}.paneElement.mobile .contents .text{width:100%;padding:0;max-height:50%;margin:0;pointer-events:auto}.paneElement.mobile .contents .text.noImage{width:100%;max-height:90%}.paneElement .tags{position:absolute;top:1rem;right:1rem;z-index:5}.paneElement .tags .tag{text-transform:uppercase;font-size:.8rem;font-weight:700;display:inline-block;padding:.2rem .4rem;border-radius:5px;background:var(--text);color:var(--highlight-color);margin-right:.5rem}",""]),e.exports=r},310:function(e,t,n){"use strict";n.r(t);n(31),n(29),n(30),n(12),n(36),n(27),n(37);var r=n(9),o=n(15),l=(n(44),n(295),n(28),n(67),n(0)),c=n(49);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=l.a.extend({props:{color:{type:String},image:{type:String,default:null},text:{type:String,default:null},index:{type:Number,default:0},tags:{type:Array,default:function(){return[]}}},data:function(){return{isFocused:!1}},computed:d(d({},Object(c.b)(["mobile"])),{},{header:function(){var e;return null===(e=/<h1.*<\/h1>/g.exec(this.text))||void 0===e?void 0:e[0]},textMinusHeader:function(){var e;return this.header?null===(e=this.text)||void 0===e?void 0:e.replace(this.header,""):this.text}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new IntersectionObserver(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isFocused=n[0].isIntersecting,e.isFocused&&e.$emit("focused");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{root:null,rootMargin:"0px",threshold:.5}),n.observe(e.$el);case 2:case"end":return t.stop()}}),t)})))()},methods:{}}),f=h,v=(n(304),n(35)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"paneElement",class:{focused:e.isFocused,mobile:e.mobile},style:{"--index":e.index%2,"--highlight-color":e.color}},[e.image?n("div",{staticClass:"bg"}):e._e(),e._v(" "),n("div",{staticClass:"contents"},[e.image?n("PaneElementImages",{class:{noText:!e.text},attrs:{image:e.image}}):e._e(),e._v(" "),0===e.index?n("div",{staticClass:"tags"},e._l(e.tags,(function(t){return n("div",{key:t,staticClass:"tag"},[e._v(e._s(t))])})),0):e._e(),e._v(" "),e.text?n("div",{staticClass:"text flexcolumn",class:{noImage:!e.image,first:0===e.index}},[e.header?n("div",{staticClass:"header",domProps:{innerHTML:e._s(e.header)}}):e._e(),e._v(" "),n("div",{staticClass:"textScroller",domProps:{innerHTML:e._s(e.textMinusHeader)}})]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PaneElementImages:n(301).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{291:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("571b7f34",content,!0,{sourceMap:!1})},293:function(e,t,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("56c40e89",content,!0,{sourceMap:!1})},294:function(e,t,n){"use strict";n(291)},295:function(e,t,n){var r=n(74)((function(i){return i[1]}));r.push([e.i,'.paneElementImage{z-index:2}.paneElementImage picture{display:block}.paneElementImage picture:not(:last-child) img{margin-bottom:1rem}.paneElementImage .iframeholder:before,.paneElementImage picture:before{border-radius:5px;border-radius:var(--borderRadius,5px);box-shadow:0 .1rem .3rem rgba(0,0,0,.3),0 1rem 4rem rgba(0,0,0,.3);box-shadow:0 .1rem .3rem var(--highlight-color,rgba(0,0,0,.3)),0 1rem 4rem var(--highlight-color,rgba(0,0,0,.3));content:"";height:100%;left:0;opacity:.5;position:absolute;top:0;width:100%;z-index:1}.paneElementImage img{cursor:zoom-in}.paneElementImage iframe,.paneElementImage img{border-radius:5px;border-radius:var(--borderRadius,5px);display:block;max-height:max(var(--pane-height)*.8);max-width:calc(var(--pane-width)*.5);z-index:2}.paneElementImage .iframeholder{min-width:calc(var(--pane-width)*.5);padding-top:56.25%;width:100%}.paneElementImage iframe{height:100%;left:0;position:absolute;top:0;width:100%}.paneElementImage .grid2 picture:not(:last-child) img,.paneElementImage .grid3 picture:not(:last-child) img{border-radius:0;margin-bottom:0}.paneElementImage.noText iframe,.paneElementImage.noText img{max-width:calc(var(--pane-width)*.8)}.mobile .iframeholder{min-width:calc(var(--pane-width)*.85)}.mobile iframe,.mobile img{max-width:calc(var(--pane-width)*.85)}',""]),r.locals={},e.exports=r},297:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(38),n(17),n(25),n(27),n(1)),l=n(32),c=o.a.extend({props:{image:{type:String,default:null}},data:function(){return{}},computed:{},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:return t.next=4,l.sleep(500);case 4:null===(n=e.$refs.image)||void 0===n||n.querySelectorAll("img").forEach((function(img){img.addEventListener("click",(function(){e.$store.commit("set",{lightboxSrc:img.src})}))}));case 5:case"end":return t.stop()}}),t)})))()},methods:{getLightboxSrc:function(s){var e;return(null===(e=/src=(?:'|")(.*?)(?:'|")/.exec(s))||void 0===e?void 0:e[1])||null}}}),m=(n(294),n(39)),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"image",staticClass:"paneElementImage",domProps:{innerHTML:e._s(e.image)}})}),[],!1,null,null,null);t.default=component.exports},300:function(e,t,n){"use strict";n(293)},301:function(e,t,n){var r=n(74)((function(i){return i[1]}));r.push([e.i,".paneElement{flex-flow:row nowrap;flex-grow:0;flex-shrink:0;height:var(--pane-height);overflow:hidden;scroll-snap-align:center;width:var(--pane-width)}.paneElement,.paneElement .contents{align-items:center;display:flex;justify-content:center}.paneElement .contents{flex-direction:row;gap:5vw;height:100%;padding:6vh 5vw 8vh;transition:transform .3s ease-in-out,opacity .2s;width:100%}.paneElement .text{flex-shrink:0;margin-left:calc(var(--pane-width)*-1*.3);max-height:max(var(--pane-height)*.85);padding-left:calc(var(--pane-width)*.3);padding-right:calc(var(--pane-width)*.05);pointer-events:none;position:relative;width:calc(var(--pane-width)*.65);z-index:3}.paneElement .text.noImage{margin-left:0;padding-left:0;padding-right:0;width:min(var(--pane-width)*.9,600px)}.paneElement .text.noImage.first{width:calc(var(--pane-width)*.9)}.paneElement .text .header h1{display:inline-block}.paneElement .text .textScroller{height:100%;overflow-x:hidden;overflow-y:auto;pointer-events:auto;width:100%}.paneElement.mobile .contents{background:transparent;flex-direction:column;gap:2rem;padding:1.5rem 2rem 2.5rem}.paneElement.mobile .contents:before{display:none}.paneElement.mobile .contents .paneElementImage img{max-height:40vh;max-width:100%}.paneElement.mobile .contents .text{margin:0;max-height:50%;padding:0;pointer-events:auto;width:100%}.paneElement.mobile .contents .text.noImage{max-height:90%;width:100%}.paneElement .tags{position:absolute;right:1rem;top:1rem;z-index:5}.paneElement .tags .tag{background:var(--text);border-radius:5px;color:var(--highlight-color);display:inline-block;font-size:.8rem;font-weight:700;margin-right:.5rem;padding:.2rem .4rem;text-transform:uppercase}",""]),r.locals={},e.exports=r},309:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(38),n(209),n(25),n(52),n(1)),l=n(32),c=o.a.extend({props:{color:{type:String},image:{type:String,default:null},text:{type:String,default:null},index:{type:Number,default:0},tags:{type:Array,default:function(){return[]}}},data:function(){return{c:l,isFocused:!1}},computed:{mobile:function(){return this.$store.state.mobile},header:function(){var e;return null===(e=/<h1.*<\/h1>/g.exec(this.text))||void 0===e?void 0:e[0]},textMinusHeader:function(){var e;return this.header?null===(e=this.text)||void 0===e?void 0:e.replace(this.header,""):this.text}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new IntersectionObserver(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isFocused=n[0].isIntersecting,e.isFocused&&e.$emit("focused");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{root:null,rootMargin:"0px",threshold:.5}),n.observe(e.$el);case 2:case"end":return t.stop()}}),t)})))()},methods:{}}),m=c,d=(n(300),n(39)),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"paneElement",class:{focused:e.isFocused,mobile:e.mobile},style:{"--index":e.index%2,"--highlight-color":e.color}},[e.image?t("div",{staticClass:"bg"}):e._e(),e._v(" "),t("div",{staticClass:"contents"},[e.image?t("PaneElementImages",{class:{noText:!e.text},attrs:{image:e.image}}):e._e(),e._v(" "),0===e.index?t("div",{staticClass:"tags"},e._l(e.tags,(function(n){return t("div",{key:n,staticClass:"tag"},[e._v(e._s(n))])})),0):e._e(),e._v(" "),e.text?t("div",{staticClass:"text flexcolumn",class:{noImage:!e.image,first:0===e.index}},[e.header?t("div",{staticClass:"header",class:{overlap:e.c.config.overlapTitle,noBackground:!e.c.config.titleBackgroundColor},domProps:{innerHTML:e._s(e.header)}}):e._e(),e._v(" "),t("div",{staticClass:"textScroller",domProps:{innerHTML:e._s(e.textMinusHeader)}})]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PaneElementImages:n(297).default})}}]);
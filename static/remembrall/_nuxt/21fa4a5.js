(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12],{250:function(e,t,n){"use strict";n.r(t);n(63),n(34),n(35),n(12),n(38),n(182),n(45),n(298),n(53),n(37),n(65);var r=n(358),o=n(255),l=n(359);var d,c,f,v,h={props:{cards:{default:[]},inline:{default:!1}},components:{CardInline:r.default,Card:o.default,Dropdown:l.default},data:function(){return{shownCount:this.inline?40:20,typeFilter:"all",setFilter:"all",sortBy:"newest",searchTerm:"",selectedCards:[],filteredCards:[],forceDeselect:!1}},computed:{isMobile:function(){return this.$store.state.isMobile},allPresentSets:function(){var e=this;return Object.keys(this.$store.state.setList).filter((function(t){return e.cards.find((function(e){return e.set===parseInt(t)}))})).map((function(t){return{id:parseInt(t),name:e.$store.state.setList[t].name}}))},sortedCards:function(){var e=this;return this.cards.sort((function(a,b){return"oldest"===e.sortBy?a.id-b.id:"sets"===e.sortBy?b.set-a.set:b.id-a.id}))},clampedCards:function(){return this.filteredCards.slice(0,this.shownCount)}},watch:{searchTerm:function(){this.debouncedUpdateFilteredCards()}},mounted:function(){var e=this;this.$refs.searchbar&&this.$nextTick((function(){return e.$refs.searchbar.focus()})),window.addEventListener("scroll",this.scroll),this.updateFilteredCards()},beforeDestroy:function(){window.removeEventListener("scroll",this.scroll)},methods:{debouncedUpdateFilteredCards:(d=function(){this.updateFilteredCards()},c=400,function(){var e=this,t=arguments,n=function(){v=null,f||d.apply(e,t)},r=f&&!v;clearTimeout(v),v=setTimeout(n,c),r&&d.apply(e,t)}),updateFilteredCards:function(){var e=this;this.filteredCards=this.sortedCards.filter((function(t){return"all"===e.setFilter||e.setFilter===t.set})).filter((function(t){return!e.searchTerm||-1!==t.front.toLowerCase().indexOf(e.searchTerm.toLowerCase())||-1!==t.back.toLowerCase().indexOf(e.searchTerm.toLowerCase())})).filter((function(t){return!!("all"===e.typeFilter||"new"===e.typeFilter&&(!t.totalReviews||0===t.totalReviews)||"notnew"===e.typeFilter&&t.totalReviews&&t.totalReviews>0||"mastered"===e.typeFilter&&t.ok&&t.ok>5&&t.ok/(t.again?t.again:0)>4||"trouble"===e.typeFilter&&t.again&&t.again>3&&t.again/(t.ok?t.ok:0)>=.5||"suspended"===e.typeFilter&&t.suspended||"notsuspended"===e.typeFilter&&!t.suspended)}))},showMore:function(){this.shownCount<this.cards.length&&(this.shownCount+=20)},scroll:function(){Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight-window.pageYOffset<500&&this.showMore()},select:function(e){var t=this.cards.find((function(t){return t.id===e}));if(!t)return console.log("Unable to find card to check by the id",e);this.selectedCards.push(t)},deselect:function(e){var t=this.selectedCards.length;this.selectedCards=this.selectedCards.filter((function(t){return t.id!==e})),this.selectedCards.length!==t-1&&console.log("Unable to find card",e,"to deselect.")},deselectAll:function(){var e=this;this.selectedCards=[],this.forceDeselect=!1,this.$nextTick((function(){return e.forceDeselect=!0}))},moveAll:function(e){var t=this;this.selectedCards.forEach((function(n){t.$store.commit("moveCard",{id:n.id,from:n.set,to:e})}))},suspendAll:function(){var e=this,t=this.selectedCards[0].suspended;this.selectedCards.forEach((function(n){e.$store.commit("updateCard",{id:n.id,suspended:!t})}))},deleteAll:function(){var e=this;confirm("Are you sure you want to delete ".concat(this.selectedCards.length," card").concat(1===this.selectedCards.length?"":"s","?"))&&(this.selectedCards.forEach((function(t){e.$store.commit("deleteCard",t.id)})),this.selectedCards=[])}}},m=h,_=(n(437),n(52)),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"browser"},[n("div",{staticClass:"tools"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],ref:"searchbar",staticClass:"searchbar",attrs:{placeholder:"Type to filter..."},domProps:{value:e.searchTerm},on:{focus:function(t){return e.$store.commit("setIsEditingText",!0)},blur:function(t){return e.$store.commit("setIsEditingText",!1)},input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),e._v(" "),n("div",{staticClass:"buttonlist"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sortBy=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"newest"}},[e._v(e._s(e.isMobile?"":"Sort by ")+"Newest")]),e._v(" "),n("option",{attrs:{value:"oldest"}},[e._v(e._s(e.isMobile?"":"Sort by ")+"Oldest")]),e._v(" "),e.allPresentSets.length>1?n("option",{attrs:{value:"sets"}},[e._v("\n          "+e._s(e.isMobile?"By ":"Sort by ")+"Set\n        ")]):e._e()]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.typeFilter,expression:"typeFilter"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.typeFilter=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"all"}},[e._v("All Cards")]),e._v(" "),n("option",{attrs:{value:"new"}},[e._v("New")]),e._v(" "),n("option",{attrs:{value:"notnew"}},[e._v("Not New")]),e._v(" "),n("option",{attrs:{value:"mastered"}},[e._v("Mastered")]),e._v(" "),n("option",{attrs:{value:"trouble"}},[e._v("Trouble")]),e._v(" "),n("option",{attrs:{value:"suspended"}},[e._v("Suspended")]),e._v(" "),n("option",{attrs:{value:"notsuspended"}},[e._v("Not Suspended")])]),e._v(" "),e.allPresentSets.length>1?n("select",{directives:[{name:"model",rawName:"v-model",value:e.setFilter,expression:"setFilter"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.setFilter=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"all"}},[e._v("All Sets")]),e._v(" "),e._l(e.allPresentSets,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))],2):e._e()]),e._v(" "),e.selectedCards.length?[n("div",{staticClass:"buttonlist withoverflow"},[n("button",{on:{click:e.deselectAll}},[e._v("\n          Deselect"+e._s(e.isMobile?"":" All")+"\n        ")]),e._v(" "),n("Dropdown",{attrs:{label:"Move "+(e.isMobile?"":e.selectedCards.length)+" Card"+(1===e.selectedCards.length?"":"s")}},e._l(e.$store.state.setList,(function(t){return n("div",{staticClass:"button",on:{key:t.id,click:function(n){return e.moveAll(t.id)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),0),e._v(" "),n("button",{on:{click:e.suspendAll}},[e._v("\n          Un/Suspend"),e.isMobile?e._e():n("span",[e._v("\n            "+e._s(e.selectedCards.length)+" Card"+e._s(1===e.selectedCards.length?"":"s"))])]),e._v(" "),n("button",{on:{click:e.deleteAll}},[e._v("\n          Delete"),e.isMobile?e._e():n("span",[e._v("\n            "+e._s(e.selectedCards.length)+" Card"+e._s(1===e.selectedCards.length?"":"s"))])])],1)]:e._e()],2),e._v(" "),e.filteredCards.length?[e._l(e.clampedCards,(function(t){return e.inline?n("CardInline",e._b({key:t.id,attrs:{forceDeselect:e.forceDeselect,showSet:e.allPresentSets.length>1},on:{select:e.select,deselect:e.deselect}},"CardInline",t,!1)):e._e()})),e._v(" "),e.inline?e._e():n("div",{staticClass:"twoupcardlist"},e._l(e.clampedCards,(function(t){return n("Card",e._b({key:t.id,staticClass:"card",attrs:{forStudy:!1,mini:!0}},"Card",t,!1))})),1)]:n("div",[n("br"),e._v(" "),n("center",[e._v("No cards to show here!")])],1)],2)}),[],!1,null,"c0990944",null);t.default=component.exports;installComponents(component,{Dropdown:n(359).default,CardInline:n(358).default,Card:n(255).default})},298:function(e,t,n){"use strict";var r=n(5),o=n(4),l=n(68),d=n(30),c=n(39),f=n(13),v=n(7),h=n(186),m=n(141),_=n(329),w=n(330),C=n(82),y=n(331),x=[],k=o(x.sort),M=o(x.push),T=v((function(){x.sort(void 0)})),A=v((function(){x.sort(null)})),F=m("sort"),S=!v((function(){if(C)return C<70;if(!(_&&_>3)){if(w)return!0;if(y)return y<603;var code,e,t,n,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)x.push({k:e+n,v:t})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)e=x[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:T||!A||!F||!S},{sort:function(e){void 0!==e&&l(e);var t=d(this);if(S)return void 0===e?k(t):k(t,e);var n,r,o=[],v=c(t);for(r=0;r<v;r++)r in t&&M(o,t[r]);for(h(o,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:f(t)>f(n)?1:-1}}(e)),n=o.length,r=0;r<n;)t[r]=o[r++];for(;r<v;)delete t[r++];return t}})},313:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("be443dd8",content,!0,{sourceMap:!1})},314:function(e,t,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("bd6302ae",content,!0,{sourceMap:!1})},329:function(e,t,n){var r=n(70).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},330:function(e,t,n){var r=n(70);e.exports=/MSIE|Trident/.test(r)},331:function(e,t,n){var r=n(70).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},351:function(e,t,n){"use strict";n(313)},352:function(e,t,n){var r=n(106)(!1);r.push([e.i,'input[type=checkbox][data-v-92593026]{margin:0;width:100%;height:100%}.card[data-v-92593026]{cursor:pointer;text-align:left;position:relative;overflow:visible;overflow:initial;display:grid;grid-template-columns:20px 30% 1fr 15% 30px;grid-gap:10px;line-height:1.3}.card.noset[data-v-92593026]{grid-template-columns:20px 40% 1fr 30px}.card[data-v-92593026]:nth-child(2n){background:#fbfbfb}.card.selected[data-v-92593026]{background:#eee}.card>*[data-v-92593026]{height:100%;padding:12px 0;display:flex;align-items:center}.newcard[data-v-92593026]{color:#09c}.center[data-v-92593026]{text-align:center}.card.suspended .cardtext[data-v-92593026]{color:#bbb}.card.suspended[data-v-92593026]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:"SUSPENDED";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;font-size:1.4rem;opacity:1;color:#888}',""]),e.exports=r},353:function(e,t,n){"use strict";n(314)},354:function(e,t,n){var r=n(106)(!1);r.push([e.i,"button[data-v-6bdc0a30]{border-radius:0!important}.secondarypanel[data-v-6bdc0a30]{position:absolute;left:0;top:100%;background:#f5f5f5;width:100%}.secondarypanel>div[data-v-6bdc0a30]{width:100%;overflow:hidden;text-align:center;padding:10px 15px}.secondarypanel>div[data-v-6bdc0a30]:hover{background:#eee}",""]),e.exports=r},358:function(e,t,n){"use strict";n.r(t);n(12),n(37);var r={props:{front:{},back:{},id:{required:!0},set:{required:!0},timeMod:{default:0},nextReview:{default:0},totalReviews:{default:0},created:{default:function(){return(new Date).getTime()}},ok:{default:0},again:{default:0},suspended:{default:!1},imageURL:{},forceDeselect:{default:!1},showSet:{default:!1}},components:{CardTools:n(288).default},data:function(){return{selected:!1,shownFront:"",shownBack:""}},computed:{isNewCard:function(){return!this.totalReviews||0===this.totalReviews}},watch:{front:function(){this.updateText()},back:function(){this.updateText()},selected:function(e){e?this.$emit("select",this.id):this.$emit("deselect",this.id)},forceDeselect:function(e){e&&(this.selected=!1)}},mounted:function(){this.updateText()},methods:{click:function(e){var t=!1;e.path.forEach((function(element){element.classList&&element.classList.contains("cardtools")&&(t=!0)})),t||(this.selected=!this.selected)},updateText:function(){var e=document.createElement("textarea");e.innerHTML=this.front,this.shownFront=e.value,e.innerHTML=this.back,this.shownBack=e.value},setImageURL:function(e){this.$store.commit("updateCard",{id:this.id,imageURL:e})}}},o=(n(351),n(52)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:{newcard:!e.totalReviews,selected:e.selected,suspended:e.suspended,noset:!e.showSet},on:{click:e.click}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected)?e._i(e.selected,null)>-1:e.selected},on:{change:function(t){var n=e.selected,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.selected=n.concat([null])):l>-1&&(e.selected=n.slice(0,l).concat(n.slice(l+1)))}else e.selected=o}}}),e._v(" "),n("div",{staticClass:"cardtext"},[e._v(e._s(e.shownFront))]),e._v(" "),n("div",{staticClass:"cardtext"},[e._v(e._s(e.shownBack))]),e._v(" "),e.showSet?n("div",{staticClass:"sub center"},[e._v("\n    "+e._s(e.$store.state.setList[e.set].name)+"\n  ")]):e._e(),e._v(" "),n("div",{staticStyle:{position:"relative"}},[n("CardTools",{attrs:{id:e.id,setId:e.set,totalReviews:e.totalReviews,ok:e.ok,front:e.front,back:e.back,nextReview:e.nextReview,suspended:e.suspended,imageURL:e.imageURL,left:!0},on:{setImageURL:e.setImageURL}})],1)])}),[],!1,null,"92593026",null);t.default=component.exports;installComponents(component,{CardTools:n(288).default})},359:function(e,t,n){"use strict";n.r(t);var r={props:{label:{required:!0}},components:{},data:function(){return{paneOpen:!1}},computed:{isMobile:function(){return this.$store.state.isMobile}},mounted:function(){},beforeDestroy:function(){},methods:{}},o=(n(353),n(52)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{mouseover:function(t){!e.isMobile&&(e.paneOpen=!0)},click:function(t){e.isMobile&&(e.paneOpen=!e.paneOpen)},mouseleave:function(t){!e.isMobile&&(e.paneOpen=!1)}}},[e._v("\n  "+e._s(e.label)+"\n  "),e.paneOpen?n("div",{ref:"secondaryPanel",staticClass:"secondarypanel"},[e._t("default")],2):e._e()])}),[],!1,null,"6bdc0a30",null);t.default=component.exports},370:function(e,t,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("3f724f50",content,!0,{sourceMap:!1})},437:function(e,t,n){"use strict";n(370)},438:function(e,t,n){var r=n(106)(!1);r.push([e.i,'.browser[data-v-c0990944]{width:100%}.tools[data-v-c0990944]{position:-webkit-sticky;position:sticky;padding:10px 0 1px;top:0;z-index:1000;background:#fff}.buttonlist[data-v-c0990944],.searchbar[data-v-c0990944]{margin-bottom:10px}.searchbar[data-v-c0990944]{width:100%;border-radius:7px;border:1px solid #eee;font-size:1.2rem;font-family:"Avenir Neue","Avenir","Helvetica",sans-serif;padding:10px}.twoupcardlist[data-v-c0990944]{display:grid;grid-template-columns:48% 48%;grid-gap:10px 4%;text-align:center}',""]),e.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{247:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("f36acca2",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n.r(e);var d={props:{toStudy:{},startedWith:{}},components:{},data:function(){return{adjustedStartedWith:this.toStudy.length}},computed:{},watch:{toStudy:function(t){t.length>=this.startedWith&&(this.adjustedStartedWith=t.length)},startedWith:function(t){t>=this.toStudy.length&&(this.adjustedStartedWith=t)}},mounted:function(){},beforeDestroy:function(){},methods:{}},r=(n(271),n(52)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remainingcards"},[t._l(t.adjustedStartedWith-t.toStudy.length>0?t.adjustedStartedWith-t.toStudy.length:0,(function(t){return n("div",{key:t,staticClass:"card"})})),t._v(" "),t._l(t.toStudy,(function(t,e){return n("div",{key:t.id,staticClass:"card",class:{review:t.totalReviews,new:!t.totalReviews,current:0===e}})}))],2)}),[],!1,null,"805d34fa",null);e.default=component.exports},271:function(t,e,n){"use strict";n(247)},272:function(t,e,n){var d=n(134)(!1);d.push([t.i,".remainingcards[data-v-805d34fa]{display:flex;justify-content:center;align-items:center;width:100%;height:10px;position:relative;margin:10px 0 20px}.remainingcards .card[data-v-805d34fa]{flex-shrink:1;flex-grow:0;width:4px;height:4px;background:#ddd;opacity:.5;transform:scaleX(1)}.remainingcards .card.review[data-v-805d34fa]{background:#bbb}.remainingcards .card.review.current[data-v-805d34fa]{opacity:1}.remainingcards .card.new[data-v-805d34fa]{background:#bbb}.remainingcards .card.new.current[data-v-805d34fa]{opacity:1}.remainingcards .card.current[data-v-805d34fa]{flex-shrink:0;-webkit-animation-duration:0s;animation-duration:0s;width:10px;height:10px;border-radius:5px}",""]),t.exports=d}}]);
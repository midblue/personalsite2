(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(t,e,o){var content=o(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(107).default)("267c5106",content,!0,{sourceMap:!1})},439:function(t,e,o){"use strict";o(371)},440:function(t,e,o){var n=o(106)(!1);n.push([t.i,".cardeditor[data-v-bf39dcd8]{margin:50px auto;opacity:.3;transition:all .5s}.cardeditor.focus[data-v-bf39dcd8]{opacity:1}.cardeditor>*[data-v-bf39dcd8]{display:block}.cardeditor textarea[data-v-bf39dcd8]{width:100%;height:100px;font-size:1rem}",""]),t.exports=n},442:function(t,e,o){"use strict";o.r(e);o(27),o(63);var n={props:{front:{},back:{},id:{}},data:function(){return{newFront:"",newBack:"",metaDown:!1}},computed:{isFocused:function(){return"editCard"===this.$store.state.appState},cardToEdit:function(){return this.$store.state.editingCard}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.cardToEdit&&(this.newFront=this.cardToEdit.front,this.newBack=this.cardToEdit.back,this.$refs.front.focus())},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),this.$store.commit("cardToEditId"),this.$store.commit("setAppState","study")},watch:{id:function(){this.newFront=this.cardToEdit.front,this.newBack=this.cardToEdit.back,this.$refs.front.focus()}},methods:{commitEdit:function(){var t=this.newFront.replace(/^[\s\n]*/g,"").replace(/[\s\n]*$/g,""),e=this.newBack.replace(/^[\s\n]*/g,"").replace(/[\s\n]*$/g,"");this.$store.commit("updateCard",{id:this.id,front:t,back:e}),this.$store.commit("cardToEditId"),this.$store.commit("setAppState","study")},focus:function(t){this.$store.commit("setAppState","editCard")},blur:function(t){this.$store.commit("cardToEditId"),this.$store.commit("setAppState","study")},keyDown:function(t){this.isFocused&&("Meta"===t.key&&(this.metaDown=!0),"Enter"===t.key&&this.metaDown&&this.commitEdit())},keyUp:function(t){this.isFocused&&"Meta"===t.key&&(this.metaDown=!1)}}},r=(o(439),o(52)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cardeditor",class:{focus:t.isFocused}},[o("h4",[t._v("Edit Card")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newFront,expression:"newFront"}],ref:"front",attrs:{placeholder:"front"},domProps:{value:t.newFront},on:{focus:t.focus,blur:t.blur,input:function(e){e.target.composing||(t.newFront=e.target.value)}}}),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBack,expression:"newBack"}],attrs:{placeholder:"back"},domProps:{value:t.newBack},on:{focus:t.focus,blur:t.blur,input:function(e){e.target.composing||(t.newBack=e.target.value)}}}),t._v(" "),o("button",{on:{click:t.commitEdit,focus:t.focus,blur:t.blur}},[t._v("Done")])])}),[],!1,null,"bf39dcd8",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25,7,26],{240:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(110);var o=n(138),c=n(81);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},246:function(t,e,n){"use strict";n.r(e);n(53),n(69),n(46),n(36),n(70),n(71),n(47);var r=n(240);n(35),n(12),n(27),n(108),n(65),n(45),n(182),n(139),n(180);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{text:{default:""},language:{required:!0}},data:function(){return{speaker:null}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings}},watch:{language:function(t){this.spawnSpeaker()},text:function(t){t&&this.speakWord()}},methods:{spawnSpeaker:function(){var t=this;if(window.speechSynthesis){this.speaker=new SpeechSynthesisUtterance,this.speaker.lang=this.language,this.speaker.volume=.4,this.speaker.rate=this.settings.speechSpeed||.8;var e,n=window.speechSynthesis.getVoices().filter((function(e){return e.lang.split("-")[0].toLowerCase()===t.language})),c={es:["Google ","Paulina","Mónica"],en:["Google ","Samantha"],any:["Google "]},l=o([].concat(Object(r.a)(c[this.language]||[]),Object(r.a)(c.any||[])));try{var f=function(){var r=e.value,o=n.find((function(t){return t.name.startsWith(r)}));if(o)return t.speaker.voice=o,"break"};for(l.s();!(e=l.n()).done;){if("break"===f())break}}catch(t){l.e(t)}finally{l.f()}this.speaker.voice||(this.speaker.voice=n[0],this.speaker.voice=n[Math.floor(Math.random()*n.length)]),console.log(this.speaker.voice.name)}},speakWord:function(){this.spawnSpeaker(),this.speaker&&(this.speaker.text=this.text,window.speechSynthesis.speak(this.speaker))}}},f=n(52),component=Object(f.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("1b23ee7e",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);n(27),n(64),n(69),n(46),n(12),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(47),n(65),n(34),n(37),n(53);var r=n(137),o={props:{text:{default:""},secondaryText:{default:""}},data:function(){return{kanjiList:[],examplesToShow:null}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},searchString:function(){return this.text.replace(/\n.*/g,"")}},watch:{text:function(){this.getKanjiData()}},mounted:function(){this.getKanjiData()},methods:{getKanjiData:function(){var t=this,e=Array.from(new Set("".concat(this.text.replace(/[^\u4e00-\u9faf]/g,"")).concat(this.secondaryText.replace(/[^\u4e00-\u9faf]/g,""))));this.kanjiList=e.map((function(t){return{character:t,meaning:"loading..."}})),Array.from(e).forEach((function(e,n){fetch("https://kanjialive-api.p.rapidapi.com/api/public/kanji/".concat(e),{headers:{"X-RapidAPI-Key":r.rapidAPI}}).then((function(t){return t.json()})).then((function(r){if(r.error||r.message)return t.$set(t.kanjiList,n,{character:e,message:r.error||r.message});t.$set(t.kanjiList,n,{character:r.kanji.character,meaning:r.kanji.meaning.english,examples:r.examples.slice(0,3).map((function(t){return{japanese:t.japanese,meaning:t.meaning.english}}))})}))}))}}},c=(n(310),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.kanjiList?n("div",[t._l(t.kanjiList,(function(e){return e.meaning?n("div",{key:e.character,staticClass:"kanji sub",on:{mouseover:function(n){t.examplesToShow=e.examples},mouseout:function(e){t.examplesToShow=null}}},[t._v("\n    "+t._s(e.character)+" : "+t._s(e.message||e.meaning)+"\n  ")]):t._e()})),t._v(" "),t.examplesToShow&&t.examplesToShow.length>0?n("div",{staticClass:"examplespopup"},t._l(t.examplesToShow,(function(e,r){return n("div",{key:r,staticClass:"sub"},[t._v("\n      "+t._s(e.japanese)+": "+t._s(e.meaning)+"\n    ")])})),0):t._e()],2):t._e()}),[],!1,null,"f650f436",null);e.default=component.exports},310:function(t,e,n){"use strict";n(283)},311:function(t,e,n){var r=n(106)(!1);r.push([t.i,".examplespopup[data-v-f650f436]{position:absolute;background:#f8f8f8;padding:20px;top:0;left:0;width:100%;pointer-events:none}",""]),t.exports=r},312:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("3b4060d6",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(312)},350:function(t,e,n){var r=n(106)(!1);r.push([t.i,".extras[data-v-9e16d8f4]{padding-bottom:20px}.fakelink[data-v-9e16d8f4]{text-decoration:underline;cursor:pointer}",""]),t.exports=r},357:function(t,e,n){"use strict";n.r(e);n(27),n(64),n(65),n(63);var r=n(246),o=n(300),c=n(180),l={components:{AutoSpeaker:r.default,StudyExtrasJA:o.default},props:{text:{default:""},secondaryText:{default:""},autoSpeak:{default:!1},shown:{default:!1}},data:function(){return{textToSpeak:""}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},searchString:function(){return this.text.replace(/\n.*/g,"")},searchWord:function(){return Object(c.getKeyWord)(this.searchString)},pronunciationLink:function(){return"https://forvo.com/word/".concat(this.searchWord,"/#").concat(this.settings.languageTools)},translationLink:function(){return"https://translate.google.com/#".concat(this.settings.languageTools,"/en/").concat(this.searchString)},definitionLink:function(){if("es"===this.settings.languageTools)return"https://www.spanishdict.com/translate/".concat(this.searchString)}},watch:{shown:function(t){t&&this.settings.autoSpeak&&this.speakWord()}},mounted:function(){},methods:{speakWord:function(){var t=this;this.textToSpeak=this.searchString,setTimeout((function(){return t.textToSpeak=""}),300)}}},f=(n(349),n(52)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("div",{staticClass:"extras"},[t.settings.languageTools?n("AutoSpeaker",{attrs:{text:t.textToSpeak,language:t.settings.languageTools}}):t._e(),t._v(" "),"ja"===t.settings.languageTools?n("StudyExtrasJA",{attrs:{text:t.text,"secondary-text":t.secondaryText}}):t._e(),t._v(" "),n("a",{staticClass:"fakelink sub",on:{click:t.speakWord}},[t._v("Speak it")]),n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.pronunciationLink}},[t._v("Native")]),n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.translationLink}},[t._v("Translation")]),t._v(" "),t.definitionLink?[n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.definitionLink}},[t._v("Definition")])]:t._e()],2):t._e()}),[],!1,null,"9e16d8f4",null);e.default=component.exports;installComponents(component,{AutoSpeaker:n(246).default,StudyExtrasJA:n(300).default})}}]);
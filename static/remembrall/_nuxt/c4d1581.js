(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{246:function(e,t,n){"use strict";n.r(t);n(35),n(12),n(27),n(108),n(182),n(139),n(45),n(180);var r={props:{text:{default:""},language:{required:!0}},data:function(){return{speaker:null}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings}},watch:{language:function(e){this.spawnSpeaker()},text:function(e){e&&this.speakWord()}},methods:{spawnSpeaker:function(){var e=this;if(window.speechSynthesis){this.speaker=new SpeechSynthesisUtterance,this.speaker.lang=this.language,this.speaker.volume=.4,this.speaker.rate=this.settings.speechSpeed||.8;var t=window.speechSynthesis.getVoices().filter((function(t){return t.lang.split("-")[0].toLowerCase()===e.language}));"es"!==this.language&&(this.speaker.voice=t.find((function(e){return e.name.startsWith("Google ")})))}},speakWord:function(){this.spawnSpeaker(),this.speaker&&(this.speaker.text=this.text,window.speechSynthesis.speak(this.speaker))}}},h=n(52),component=Object(h.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=component.exports}}]);
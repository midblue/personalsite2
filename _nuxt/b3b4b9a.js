(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(t,e,o){"use strict";o(0).a.directive("tooltip",{bind:function(t,e,o){var r,n=e.value,l=null===(r=o.context)||void 0===r?void 0:r.$store;if(l){t.tooltipData=n,t.addEventListener("mouseenter",(function(){window.addEventListener("click",c),l.commit("tooltip",t.tooltipData)}));var c=function t(){l.commit("tooltip"),window.removeEventListener("click",t)};t.addEventListener("mouseleave",c)}},componentUpdated:function(t,e,o){var r=e.value;t.tooltipData=r},unbind:function(t,e,o){}})},196:function(t,e,o){var content=o(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(91).default)("459b3afd",content,!0,{sourceMap:!1})},197:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(91).default)("2200960e",content,!0,{sourceMap:!1})},212:function(t,e,o){"use strict";o(22);var r=o(55),n=o(0),l=n.a.extend({mounted:function(){window.addEventListener("resize",r.a(this.resetWindowSize,100),{passive:!0}),this.resetWindowSize()},methods:{resetWindowSize:function(){var t=!!function(){var a=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return!0}()||window.innerWidth<768;this.$store.commit("set",{winSize:[window.innerWidth,window.innerHeight],mobile:t});var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var o=.01*window.innerWidth;document.documentElement.style.setProperty("--vw","".concat(o,"px"))}}}),c=o(37),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("client-only",[e("div",[e("InfoTooltip"),t._v(" "),e("Lightbox"),t._v(" "),e("div",[e("nuxt")],1)],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{InfoTooltip:o(303).default,Lightbox:o(304).default})},215:function(t,e,o){o(216),t.exports=o(217)},276:function(t,e,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(91).default)("758cc9b5",content,!0,{sourceMap:!1})},277:function(t,e,o){var r=o(90)((function(i){return i[1]}));r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Asap:wght@400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap);"]),r.push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-display:swap;font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-display:swap;font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{--font-stack:"Asap","Helvetica",sans-serif;--nav-width:80px;--text:#222;--bg:#f8f8f8}.rowholder.first .first{font-size:min(2rem,5vw);line-height:1.2}.rowholder.first .first h1{font-family:"Bungee Outline",Helvetica,sans-serif;font-size:min(10rem,11vw);line-height:1;margin:0}.rowholder.first .first .sub{font-size:1rem;margin-top:.5rem}.postTitle{background-color:var(--highlight-color);border-radius:5px;font-size:min(5rem,5vw);line-height:1;margin:0 0 2rem -7vw;max-width:calc(100% + 10vw);padding:.5rem 1rem;position:sticky;top:0;transition:left 1s ease-out;z-index:2}.postTitle p{display:none}.postTitle .small{font-size:2rem;line-height:1.2;margin-top:.5rem}.focused .postTitle{left:-10vw}.mobile .postTitle{font-size:min(5rem,8vw);margin-bottom:.5rem;margin-left:0}.mobile .postTitle .small{font-size:1rem;line-height:1.2;margin-top:.2rem}.caption{font-size:.75rem;line-height:1.4;margin:1rem auto 0;max-width:300px;opacity:.5;text-align:center;z-index:3}.padImage img,.padImg img{padding:.5rem}.onWhite,.onWhite *,.onWhite :before{background-color:transparent;box-shadow:none!important}.roundImage img,.roundImage img:after,.roundImage img:before,.roundImage picture,.roundImage picture:after,.roundImage picture:before,.roundImage:after,.roundImage:before{border-radius:50%!important}.roundImage img,.roundImage img:after,.roundImage img:before,.roundImage picture,.roundImage picture:after,.roundImage picture:before{-o-object-fit:cover;object-fit:cover}.grid2,.grid3{max-width:40vw}.grid2 img,.grid2 picture,.grid3 img,.grid3 picture{max-width:100%!important}.mobile .grid2,.mobile .grid3{max-width:100%}.aside{border-left:4px solid #222;border-left:4px solid var(--text);margin:2rem auto;opacity:.8;padding:0 1rem;position:relative}.asideTitle{display:block;font-size:.75rem;font-weight:700;margin-bottom:1rem;margin-top:-1rem;opacity:.5;text-transform:uppercase}blockquote{border-left:4px solid #bbb;border-left:4px solid var(--highlight-color,#bbb);margin:2rem 0;padding-left:2rem}*,:after,:before{box-sizing:border-box;position:relative}html{--vh:1vh;--vw:1vw;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none;background:#f8f8f8;background:var(--bg);color:#222;color:var(--text);font-display:swap;font-family:"Asap","Helvetica",sans-serif;font-family:var(--font-stack);font-size:17.5px;line-height:1.75;max-width:100%;min-width:100%;overflow:hidden;overscroll-behavior-x:none;scroll-behavior:smooth}@media only screen and (max-device-width:768px){html{font-size:15.5px;line-height:1.55}}body{max-width:100%;min-width:100%;overflow:hidden;overscroll-behavior-x:none}.fakelink,a,a:active,a:hover,a:visited{color:inherit;color:var(--highlight-color,inherit);cursor:pointer}.fakelink:hover,a:active:hover,a:hover,a:hover:hover,a:visited:hover{-webkit-text-decoration:underline;text-decoration:underline}h1,h2,h3,h4,h5{margin:2.5em 0 1.5em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}h5{font-size:1em}.container{display:inline-block;height:100%;margin:0 auto;position:relative;width:100%}.bold{font-weight:700}img{max-width:100%}label{display:block;font-size:.93rem;font-weight:700;letter-spacing:.05em;margin-top:.5em;opacity:.8;text-transform:uppercase}label.small{font-size:.8em}input,textarea{background:transparent;border:1px solid var(--gray);border-radius:.5em;color:#222;color:var(--text);margin-bottom:1em;max-width:25em;padding:.3em .4em;width:100%}textarea{height:10em;line-height:1.4;min-width:100%;width:100%}textarea.big{height:25em;max-width:100%}input.big{max-width:100%;padding:.6em .8em;width:100%}.disabled,:disabled{cursor:url(/images/cursors/cursor_not_allowed.svg),auto!important;cursor:url(/images/cursors/cursor_not_allowed.webp),auto!important;cursor:-webkit-image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto!important;cursor:image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto!important;opacity:.3;pointer-events:auto}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.disabled,:disabled{cursor:url(/images/cursors/cursor_not_allowed_2x.webp),auto!important}}.notallowed{cursor:url(/images/cursors/cursor_not_allowed.svg),auto!important;cursor:url(/images/cursors/cursor_not_allowed.webp),auto!important;cursor:-webkit-image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto!important;cursor:image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto!important}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.notallowed{cursor:url(/images/cursors/cursor_not_allowed_2x.webp),auto!important}}.button,button,input[type=submit]{border:0;border-radius:5px;color:#f8f8f8!important;color:var(--bg)!important;display:inline-block;margin-bottom:.1em;margin-right:.1em;padding:.3em .5em;position:relative;text-align:center;-webkit-text-decoration:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:3}.button>*,button>*,input[type=submit]>*{position:relative;z-index:3}.button:after,.button:before,button:after,button:before,input[type=submit]:after,input[type=submit]:before{border-radius:5px;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:2}.button:after,button:after,input[type=submit]:after{background:#222;background:var(--text);background:linear-gradient(180deg,#222 -200%,#222);background:linear-gradient(to bottom,var(--highlight-color,var(--text)) -200%,var(--text) 100%);box-shadow:inset 0 3px 0 0 var(--highlight-color)}.button:hover:after,button:hover:after,input[type=submit]:hover:after{opacity:.9}.button.secondary,button.secondary,input[type=submit].secondary{background:transparent;color:#222!important;color:var(--text)!important}.button.secondary:before,button.secondary:before,input[type=submit].secondary:before{background:transparent;box-shadow:inset 0 0 0 1px #222;box-shadow:inset 0 0 0 1px var(--text);opacity:.5}.button.secondary:after,button.secondary:after,input[type=submit].secondary:after{opacity:0}.button.secondary:hover:after,button.secondary:hover:after,input[type=submit].secondary:hover:after{opacity:.1}.button.mini,button.mini,input[type=submit].mini{padding:.2em .3em}.button.big,button.big,input[type=submit].big{margin:.2em 0;padding:1em 2em;text-align:center}.button.whitebackground,button.whitebackground,input[type=submit].whitebackground{background-color:#fff}.button.square:after,button.square:after,input[type=submit].square:after{border-radius:0}.button.colorbackground,button.colorbackground,input[type=submit].colorbackground{color:#fff!important;text-shadow:0 0 .6em rgba(0,0,0,.3)}.button.colorbackground:after,button.colorbackground:after,input[type=submit].colorbackground:after{background:var(--game)}.button.colorbackground.color2:after,button.colorbackground.color2:after,input[type=submit].colorbackground.color2:after{background:var(--success)}.button.combo,button.combo,input[type=submit].combo{border-radius:0;margin-left:0;margin-right:0}.button.combo:not(.secondary),button.combo:not(.secondary),input[type=submit].combo:not(.secondary){margin-right:1px}.button.combo:after,.button.combo:before,button.combo:after,button.combo:before,input[type=submit].combo:after,input[type=submit].combo:before{border-radius:0}.button.combo:first-of-type,.button.combo:first-of-type:after,.button.combo:first-of-type:before,button.combo:first-of-type,button.combo:first-of-type:after,button.combo:first-of-type:before,input[type=submit].combo:first-of-type,input[type=submit].combo:first-of-type:after,input[type=submit].combo:first-of-type:before{border-bottom-left-radius:5px;border-top-left-radius:5px}.button.combo:last-of-type,.button.combo:last-of-type:after,.button.combo:last-of-type:before,button.combo:last-of-type,button.combo:last-of-type:after,button.combo:last-of-type:before,input[type=submit].combo:last-of-type,input[type=submit].combo:last-of-type:after,input[type=submit].combo:last-of-type:before{border-bottom-right-radius:5px;border-top-right-radius:5px}.button.arrowdown:before,button.arrowdown:before,input[type=submit].arrowdown:before{background:#222;background:var(--text);border-radius:0!important;height:.65em;left:50%;top:100%;transform:translate(-50%,-50%) rotate(45deg);width:.65em}input[type=submit]{background:#222;background:var(--text)}.button,button,details,input,select{cursor:url(/images/cursors/cursor_pointer.svg),pointer;cursor:url(/images/cursors/cursor_pointer.webp),pointer;cursor:-webkit-image-set(url("/images/cursors/cursor_pointer.webp") 1x,url("/images/cursors/cursor_pointer_2x.webp") 2x),pointer;cursor:image-set(url("/images/cursors/cursor_pointer.webp") 1x,url("/images/cursors/cursor_pointer_2x.webp") 2x),pointer}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.button,button,details,input,select{cursor:url(/images/cursors/cursor_pointer_2x.webp),pointer}}summary:hover{-webkit-text-decoration:underline;text-decoration:underline;-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid2{display:grid;grid-template-columns:1fr 1fr}.grid3{display:grid;grid-template-columns:1fr 1fr 1fr}.grid4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.grid5{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr}.grid6{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr}.grid7{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr}.grid8{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr}.gap,.gridgap{grid-gap:1rem;gap:1rem}.gapsmall{grid-gap:.5rem;gap:.5rem}.gaptiny{grid-gap:.25rem;gap:.25rem}select{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");background-position:right .7em top 40%;background-repeat:no-repeat,repeat;background-size:.65em auto;border-radius:5px;box-shadow:inset 0 0 0 .5px #222;box-shadow:inset 0 0 0 .5px var(--text);box-sizing:border-box;color:#222;color:var(--text);display:block;line-height:1.3;margin:0;max-width:100%;padding:.3em 1.4em .3em .8em;width:100%}select:focus{box-shadow:0 0 0 3px -moz-mac-focusring;outline:none}:root:lang(ar) select,:root:lang(iw) select,[dir=rtl] select{padding:.3em .8em .3em 1.4em}select:disabled,select[aria-disabled=true]{cursor:url(/images/cursors/cursor_not_allowed.svg),auto;cursor:url(/images/cursors/cursor_not_allowed.webp),auto;cursor:-webkit-image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto;cursor:image-set(url("/images/cursors/cursor_not_allowed.webp") 1x,url("/images/cursors/cursor_not_allowed_2x.webp") 2x),auto}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){select:disabled,select[aria-disabled=true]{cursor:url(/images/cursors/cursor_not_allowed_2x.webp),auto}}select option{color:#f8f8f8;color:var(--bg)}.textcolumn{line-height:1.5;margin:0 auto;max-width:600px;padding:calc(var(--panesectionpad-top)*2) calc(var(--panesectionpad-left)*2)}.textcolumn div:not(:last-child){margin-bottom:1.5em}.padpane{padding:var(--panesectionpad-top) var(--panesectionpad-left)}hr,hr.half{border:none;border-bottom:1px dashed #222;border-bottom:1px dashed var(--text);margin:.7em auto;opacity:.2}hr.half{width:30%}hr+hr,hr:last-child{display:none}.codeblock,code{background:hsla(0,0%,100%,.1);border-radius:.1em;padding:.1em .3em}.codeblock{font-family:monospace;line-height:1.3;overflow:auto;white-space:pre-wrap}.codeblock .highlight{color:var(--success)}.codeblock .sub{font-size:.7em;line-height:1em;opacity:.4;white-space:auto}ol,ul{margin:.2em .2em .2em 0;padding-left:1.4em}.success{color:var(--success)}.warning{color:var(--warning)}.info{align-items:center;color:var(--info);display:inline-flex;line-height:1.3;padding:.2em .5em;position:relative}.info:before{color:var(--info);content:"ⓘ";font-size:1.2em;font-weight:700;padding-right:.4em}.info:after{background:var(--info);border-radius:.4em;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0}.sub{line-height:1.2em;opacity:.7}.small,.sub{font-size:.85em}.medium{font-size:.92em}.big{font-size:1.15em}.fade{opacity:.7}.sub.fade{opacity:.5}.normal{font-weight:400}.uppercase{text-transform:uppercase}.breakword{word-break:break-word}.rounded{border-radius:.5em;overflow:hidden}.underline{-webkit-text-decoration:underline;text-decoration:underline}.nobg{background:none!important}.pointer{cursor:pointer}.fullwidth{width:100%}.flex,.flexwrap{display:flex}.flexwrap{flex-wrap:wrap}.flexrow{display:flex;flex-direction:row}.flexcolumn{display:flex;flex-direction:column}.flexcenter{align-items:center;display:flex;justify-content:center}.flexbetween{display:flex;justify-content:space-between}.flexstretch{align-items:stretch;display:flex;justify-content:stretch}.flexstretch>*{flex-grow:1}.noflex{flex-grow:0;flex-shrink:0}.flexgrow{flex-grow:1}.nopad,.padnone{padding:0!important}.nopadtop,.padtopnone{padding-top:0!important}.nopadleft,.padleftnone{padding-left:0!important}.nopadright,.padrightnone{padding-right:0!important}.nopadbot,.padbotnone{padding-bottom:0!important}.marnone,.nomar{margin:0!important}.martopnone,.nomartop{margin-top:0!important}.marleftnone,.nomarleft{margin-left:0!important}.marrightnone,.nomarright{margin-right:0!important}.marbotnone,.nomarbot{margin-bottom:0!important}.mar{margin:1em!important}.marsmall{margin:.5em!important}.marbig{margin:1.5em!important}.martiny{margin:.25em!important}.martop{margin-top:1em!important}.martopsmall{margin-top:.5em!important}.martopbig{margin-top:1.5em!important}.martoptiny{margin-top:.25em!important}.marbot{margin-bottom:1em!important}.marbotsmall{margin-bottom:.5em!important}.marbotbig{margin-bottom:1.5em!important}.marbottiny{margin-bottom:.2em!important}.marleft{margin-left:1em!important}.marleftsmall{margin-left:.5em!important}.marleftbig{margin-left:1.5em!important}.marlefttiny{margin-left:.25em!important}.marright{margin-right:1em!important}.marrightsmall{margin-right:.5em!important}.marrightbig{margin-right:1.5em!important}.marrighttiny{margin-right:.2em!important}.marauto,.marginauto{margin-left:auto!important;margin-right:auto!important}.pad{padding:1em!important}.padsmall{padding:.5em!important}.padbig{padding:1.5em!important}.padtiny{padding:.25em!important}.padtop{padding-top:1em!important}.padtopsmall{padding-top:.5em!important}.padtopbig{padding-top:1.5em!important}.padtoptiny{padding-top:.25em!important}.padbot{padding-bottom:1em!important}.padbotsmall{padding-bottom:.5em!important}.padbotbig{padding-bottom:1.5em!important}.padbottiny{padding-bottom:.2em!important}.padleft{padding-left:1em!important}.padleftsmall{padding-left:.5em!important}.padleftbig{padding-left:1.5em!important}.padlefttiny{padding-left:.25em!important}.padright{padding-right:1em!important}.padrightsmall{padding-right:.5em!important}.padrightbig{padding-right:1.5em!important}.padrighttiny{padding-right:.2em!important}.relative{position:relative}.z2{z-index:2}.scroll{overflow-y:scroll}.hidescrollbar{-ms-overflow-style:none;scrollbar-width:none}.hidescrollbar::-webkit-scrollbar{display:none}.nopointer{pointer-events:none}.selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text}.nowrap{flex-wrap:nowrap;white-space:nowrap}.inline,.inlineblock{display:inline-block}.textcenter{text-align:center}.textright{text-align:right}.invisible{opacity:0;pointer-events:none}.displaynone{display:none!important}.fade-enter-active,.fade-leave-active{transition:opacity .25s!important}.fade-enter,.fade-leave-to{opacity:0!important}.fadeslow-enter-active,.fadeslow-leave-active{transition:opacity 2s!important}.fadeslow-enter,.fadeslow-leave-to{opacity:0}.fadein-enter-active{transition:opacity .25s}.fadein-enter{opacity:0}',""]),r.locals={},t.exports=r},279:function(t,e,o){"use strict";o(196)},280:function(t,e,o){var r=o(90)((function(i){return i[1]}));r.push([t.i,".tooltipholder{--tooltip-pad-lr:0.75em;--tooltip-pad-tb:0.5em;font-size:.9rem;pointer-events:none;position:absolute;z-index:1003}.hovertooltip{background:var(--text);border-radius:10px;box-shadow:0 .4em 1em 0 var(--text);color:var(--bg);display:flex;font-weight:400;line-height:1.4;max-width:250px;overflow:hidden}.hovertooltip hr{border:none;border-top:1px solid var(--text);margin:.5em -2em;opacity:.2;width:200%}.hovertooltip>*{padding:var(--tooltip-pad-tb) var(--tooltip-pad-lr)}",""]),r.locals={},t.exports=r},281:function(t,e,o){"use strict";o(197)},282:function(t,e,o){var r=o(90)((function(i){return i[1]}));r.push([t.i,".lightbox[data-v-c2f52eb4]{background:rgba(0,0,0,.8);bottom:0;cursor:zoom-out;left:0;opacity:0;padding:2%;pointer-events:none;position:fixed;right:0;top:0;transition:all .3s;z-index:1000}.lightbox.on[data-v-c2f52eb4]{opacity:1;pointer-events:auto}.lightboximage[data-v-c2f52eb4]{background-position:50%;background-repeat:no-repeat;background-size:contain;display:block;height:100%;width:100%;z-index:1}",""]),r.locals={},t.exports=r},283:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return d})),o.d(e,"mutations",(function(){return f})),o.d(e,"actions",(function(){return h}));var r=o(8),n=(o(36),o(70),o(29),o(12),o(40),o(145),o(22),o(49),o(284),o(55)),l=o(0),c=o(54),m=o.n(c),d=function(){return{elements:[],dev:!1,mobile:!0,winSize:[1200,1e3],lightboxSrc:null,tooltip:null}},f={set:function(t,e){for(var o in e)l.a.set(t,o,e[o])},tooltip:function(t,e){t.tooltip=e}},h={nuxtServerInit:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function o(){var r,l,data,c,content,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.commit,l=t.state,e.req,"1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I",o.next=5,m.a.get("https://us-central1-lix-338122.cloudfunctions.net/".concat(l.dev?"refresh":"doc","/").concat("1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I")).then((function(t){if(500!==t.status)return t.data}));case 5:if(data=o.sent){o.next=8;break}return o.abrupt("return");case 8:c=n.b(data),content=c.content,d=content.map((function(t,e){var o,r;if(t.color)return{slug:0===e?void 0:encodeURIComponent(n.d(((null===(o=/<h1[^>]*?>([^<]*)/.exec(t.content||""))||void 0===o?void 0:o[1])||"").replace(/<[^>]*?>/g,"").trim())),color:t.color,thumbnail:t.thumbnail||(null===(r=/<picture.*?<\/picture>/g.exec(t.content))||void 0===r?void 0:r[0]),tags:t.tags.split(",").map((function(t){return t.trim().toLowerCase()})).filter((function(t){return t})),elements:t.content.replace(/<div class='table ?'>/gi,"").split("<div class='row'>").filter((function(s){return s})).map((function(content){var t,e,o,r;return{image:null===(t=content.split(/<\/div><div class='cell'>/g))||void 0===t||null===(e=t[0])||void 0===e?void 0:e.replace(/^<div[^>]*?>/,""),text:null===(o=content.split(/<\/div><div class='cell'>/g))||void 0===o||null===(r=o[1])||void 0===r?void 0:r.replace(/(<\/div>)+$/g,"")}})).filter((function(t){return t.image||t.text}))}})).filter((function(t){return t}))||[],r("set",{elements:d});case 11:case"end":return o.stop()}}),o)})))()}}},303:function(t,e,o){"use strict";o.r(e);o(31),o(28),o(29),o(12),o(38),o(27),o(39);var r=o(8),n=o(16),l=(o(36),o(0)),c=o(51);o(55);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=l.a.extend({name:"infoTooltip",props:{},data:function(){return{tooltipStyle:{opacity:0},x:0,y:0}},computed:d(d({},Object(c.b)(["mobile","tooltip"])),{},{winWidth:function(){return this.$store.state.winSize[0]},winHeight:function(){return this.$store.state.winSize[1]}}),watch:{tooltip:function(){this.recalcTooltipStyle()},winWidth:function(){this.recalcTooltipStyle()}},mounted:function(){window.addEventListener("mousemove",this.mouseMove)},beforeDestroy:function(){window.removeEventListener("mousemove",this.mouseMove)},methods:{mouseMove:function(t){this.tooltip&&(this.x=t.pageX,this.y=t.pageY,this.recalcTooltipStyle())},recalcTooltipStyle:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.tooltip&&t.$el){e.next=2;break}return e.abrupt("return",t.tooltipStyle={opacity:0});case 2:return e.next=4,t.$nextTick();case 4:try{o=t.$el.getBoundingClientRect(),r=o.width,n=o.height,25,l=t.x+25,c=t.y-5,m="",l+r>=t.winWidth-25&&(l=t.winWidth-r-25,m="translateY(30px)"),c+n>=t.winHeight-25&&(c=t.winHeight-n-25,m=""),t.tooltipStyle={left:l+"px",top:c+"px",transform:m,opacity:1}}catch(e){t.tooltipStyle={opacity:0}}case 5:case"end":return e.stop()}}),e)})))()}}}),h=(o(279),o(37)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tooltipholder",style:t.tooltipStyle},[e("div",{staticClass:"hovertooltip"},[e("div",{domProps:{innerHTML:t._s(t.tooltip)}})])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,o){"use strict";o.r(e);var r={props:[],components:{},data:function(){return{}},computed:{src:function(){return this.$store.state.lightboxSrc}},watch:{},mounted:function(){},methods:{close:function(){this.$store.commit("set",{lightboxSrc:null})}}},n=(o(281),o(37)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lightbox",class:{on:!!t.src},on:{click:t.close}},[t.src?e("div",{staticClass:"lightboximage",style:{"background-image":"url('".concat(t.src,"')")}}):t._e()])}),[],!1,null,"c2f52eb4",null);e.default=component.exports},55:function(t,e,o){"use strict";o.d(e,"a",(function(){return x})),o.d(e,"d",(function(){return y})),o.d(e,"b",(function(){return k})),o.d(e,"c",(function(){return z}));o(31),o(28),o(29),o(38),o(27),o(39);var r=o(16),n=o(15);o(22),o(49),o(192),o(70),o(75),o(138),o(40),o(145),o(12);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=".",d=0,f="[0m",h="[2m",w={gray:"[2m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",pink:"[35m",cyan:"[36m",white:"[37m"};function v(){for(var t,e,o=/(?:[^\n\r]*log\.[jt]s[^\n]*\n)+(?:[^\n]*?massProfiler[^\n]*?\.[jt]s[^\n]*\n)?(?:[^\n]*?embedProfiler[^\n]*?\.[jt]s[^\n]*\n)?([^\n\r]*\/([^/\n\r]+\/[^/\n\r]+\/[^/:\n\r]+))\.[^:\n\r]+:(\d+)/gi.exec("".concat((new Error).stack)),r=(null==o||o[1],null==o||o[3],(null===(e=null==o?void 0:o[2])||void 0===e?void 0:e.replace(/(dist\/|src\/)/gi,""))||""),l=arguments.length,c=new Array(l),v=0;v<l;v++)c[v]=arguments[v];for(var x=0;x<c.length;x++){var y=c[x];if("string"===Object(n.a)(y)&&y in w){if(0===x&&y,!c[x+1])continue;"object"===Object(n.a)(c[x+1])||(c[x+1]=w[y]+"".concat(c[x+1])+f),c.splice(x,1)}}var k=String(f+h+"".concat((new Date).toLocaleTimeString(void 0,{hour12:!1,hour:"2-digit",minute:"2-digit"})," ")+r);for(k.length>d&&(d=k.length);k.length<Math.min(45,Math.max(25,d));)k+=m;k+=f,(t=console).log.apply(t,[k].concat(c))}function x(t){var e,time=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700;return function(){for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];e&&clearTimeout(e),e=setTimeout((function(){t.apply(void 0,r)}),time)}}function y(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(s)||(s=[s]),s.map((function(t){return t.toLowerCase().replace(/[^a-z0-9]/g,"-")})).join("-")}function k(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",data=function(){var t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",data={},e=/<code data-id=(?:'|")([^"']*)(?:'|")>(.*)?<\/code>/g;for(;t=e.exec(s);){var o=y(t[1].replace("data","").trim()),r=t[2].trim().replace(/([^\s]*?)="([^"]*?)"/g,(function(t,e,o){return"".concat(y(e),"='").concat(o,"'")}));try{r=JSON.parse(r)}catch(t){v(t)}data[o]=r}return data}(s=s.replace(/(”|“)/g,'"').replace(/<p><([^\s>]+)/g,"<$1").replace(/<img /g,"<img loading='lazy' ").replace(/<iframe /g,"<iframe loading='lazy' ")),t=s.replace(/<code data-id="([^"]*)">(.*)<\/code>/g,"");return c(c({},data),{},{pageContent:t})}function z(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))}}},[[215,9,2,10]]]);
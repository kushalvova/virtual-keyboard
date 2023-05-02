!function(){"use strict";const e=[[["Backquote","`","~","ё","Ё"],["Digit1","1","!","1","!"],["Digit2","2","@","2",'"'],["Digit3","3","#","3","№"],["Digit4","4","$","4",";"],["Digit5","5","%","5","%"],["Digit6","6","^","6",":"],["Digit7","7","&","7","?"],["Digit8","8","*","8","*"],["Digit9","9","(","9","("],["Digit0","0",")","0",")"],["Minus","-","_","-","_"],["Equal","=","+","=","+"],["Backspace","Backspace","Backspace","Backspace","Backspace"]],[["Tab","Tab","Tab","Tab","Tab"],["KeyQ","q","Q","й","Й"],["KeyW","w","W","ц","Ц"],["KeyE","e","E","у","У"],["KeyR","r","R","к","К"],["KeyT","t","T","е","Е"],["KeyY","y","Y","н","Н"],["KeyU","u","U","г","Г"],["KeyI","i","I","ш","Ш"],["KeyO","o","O","щ","Щ"],["KeyP","p","P","з","З"],["BracketLeft","[","{","х","Х"],["BracketRight","]","}","ъ","Ъ"],["Backslash","\\","|","\\","/"],["Delete","Del","Del","Del","Del"]],[["CapsLock","CapsLk","CapsLk","CapsLk","CapsLk"],["KeyA","a","A","ф","Ф"],["KeyS","s","S","ы","Ы"],["KeyD","d","D","в","В"],["KeyF","f","F","а","А"],["KeyG","g","G","п","П"],["KeyH","h","H","р","Р"],["KeyJ","j","J","о","О"],["KeyK","k","K","л","Л"],["KeyL","l","L","д","Д"],["Semicolon",";",":","ж","Ж"],["Quote","'",'"',"э","Э"],["Enter","Enter","Enter","Enter","Enter"]],[["ShiftLeft","Shift","Shift","Shift","Shift"],["KeyZ","z","Z","я","Я"],["KeyX","x","X","ч","Ч"],["KeyC","c","C","с","С"],["KeyV","v","V","м","М"],["KeyB","b","B","и","И"],["KeyN","n","N","т","Т"],["KeyM","m","M","ь","Ь"],["Comma",",","<","б","Б"],["Period",".",">","ю","Ю"],["Slash","/","?",".",","],["ArrowUp","▲","▲","▲","▲"],["ShiftRight","Shift","Shift","Shift","Shift"]],[["ControlLeft","Ctrl","Ctrl","Ctrl","Ctrl"],["MetaLeft","Win","Win","Win","Win"],["AltLeft","Alt","Alt","Alt","Alt"],["Space"," "," "," "," "],["AltRight","Alt","Alt","Alt","Alt"],["ArrowLeft","◄","◄","◄","◄"],["ArrowDown","▼","▼","▼","▼"],["ArrowRight","►","►","►","►"],["ControlRight","Ctrl","Ctrl","Ctrl","Ctrl"]]];document.querySelector(".page").insertAdjacentHTML("beforeend",'<header>\n                                            <h1 class="title">RSS Virtual Keyboard</h1>\n                                          </header>\n                                          <main class="main">\n                                            <textarea autofocus class="input-text"></textarea>\n                                            <div class="keyboard"></div>\n                                            <p class="description">Keyboard created in Windows</p>\n                                            <p class="description">Switch language: left ctrl + left alt</p>  \n                                          </main>');const t=document.querySelector(".keyboard"),o=document.querySelector(".input-text");let c=0,n=!1;function a(e,t,o){const c=e.split("");return c.splice(o,0,t),c.join("")}function i(e,t,o){const c=e.split("");return c.splice(o+t,1),c.join("")}function s(e){const t=document.querySelector(`.${e}`);t.classList.remove("buttom"),t.classList.add("activeShift"),t.classList.add("activeShift_active")}function l(r){let d=arguments.length>1&&void 0!==arguments[1]&&arguments[1],u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",'<div class="row"></div>'),e.forEach((e=>{t.lastChild.insertAdjacentHTML("beforeend",`<div class="buttom ${e[0]}">${e[r]}</div>`);const s=document.querySelector(`.${e[0]}`);"Backspace"===e[0]?s.addEventListener("click",(()=>{const e=o.selectionStart;o.value=i(o.value,-1,e),o.setSelectionRange(e-1,e-1),o.focus()})):"Enter"===e[0]?s.addEventListener("click",(()=>{const e=o.selectionStart;o.value=a(o.value,"\n",e),o.setSelectionRange(e+1,e+1),o.focus()})):"Tab"===e[0]?s.addEventListener("click",(()=>{const e=o.selectionStart;o.value=a(o.value,"\t",e),o.setSelectionRange(e+1,e+1),o.focus()})):"Delete"===e[0]?s.addEventListener("click",(()=>{const e=o.selectionStart;o.value=i(o.value,0,e),o.setSelectionRange(e,e),o.focus()})):"ShiftRight"===e[0]||"ShiftLeft"===e[0]?(s.addEventListener("mousedown",(e=>{const t=e.target.classList[1];l(c+2,t),o.focus()})),s.addEventListener("mouseup",(()=>{l(c+1),o.focus()}))):"ControlRight"===e[0]||"ControlLeft"===e[0]||"AltRight"===e[0]||"AltLeft"===e[0]||"MetaLeft"===e[0]?o.focus():"CapsLock"===e[0]?s.addEventListener("click",(()=>{l(u?c+1:c+2,!1,!u),n=!u,o.focus()})):s.addEventListener("click",(()=>{const t=o.selectionStart;o.value=a(o.value,`${e[r]}`,t),o.setSelectionRange(t+1,t+1),o.focus()}))}))})),d&&s(d),u&&s("CapsLock")}function r(e){document.addEventListener("keyup",(t=>{"ShiftLeft"!==t.code&&"ShiftRight"!==t.code||l(e+1)})),document.addEventListener("keydown",(t=>{"ShiftLeft"!==t.code&&"ShiftRight"!==t.code||(l(e+2),s(`${t.code}`))}))}o.value="",localStorage.getItem("language")&&(c=+localStorage.getItem("language")),document.addEventListener("keyup",(e=>{"CapsLock"===e.code&&(l(n?c+1:c+2,!1,!n),n=!n)})),window.addEventListener("keydown",(e=>{if("Tab"===e.code){e.preventDefault();const t=o.selectionStart;o.value=a(o.value,"\t",t),o.setSelectionRange(t+1,t+1),o.focus()}"AltRight"!==e.code&&"AltLeft"!==e.code||(e.preventDefault(),o.focus())})),document.addEventListener("keyup",(e=>{const t=document.querySelector(`.${e.code}`);t&&t.classList.remove("buttom_active")})),document.addEventListener("keydown",(e=>{const t=document.querySelector(`.${e.code}`);t&&t.classList.add("buttom_active")})),l(c+1),r(c),function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),c=1;c<t;c++)o[c-1]=arguments[c];const n=new Set;document.addEventListener("keydown",(e=>{"ControlLeft"!==e.code&&"AltLeft"!==e.code||n.add(e.code)})),document.addEventListener("keyup",(t=>{if("ControlLeft"!==t.code&&"AltLeft"!==t.code||(n.has(o[0])&&n.has(o[1])&&e(),n.delete(t.code),"ControlLeft"===t.code&&document.querySelector(".AltLeft").classList.add("buttom_active"),"AltLeft"===t.code&&document.querySelector(".ControlLeft").classList.add("buttom_active")),0===n.size){const e=document.querySelector(".ControlLeft"),t=document.querySelector(".AltLeft");e.classList.contains("buttom_active")&&e.classList.remove("buttom_active"),t.classList.contains("buttom_active")&&t.classList.remove("buttom_active")}}))}((()=>{c=0===c?2:0,localStorage.setItem("language",c),l(c+1),r(c)}),"ControlLeft","AltLeft")}();
const e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let t=null;d.disabled="disabled",e.addEventListener("click",(()=>{t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,d.disabled=!1,e.disabled="disabled"}),1e3)})),d.addEventListener("click",(()=>{clearInterval(t),e.disabled=!1,d.disabled="disabled"}));
//# sourceMappingURL=01-color-switcher.6e16c751.js.map
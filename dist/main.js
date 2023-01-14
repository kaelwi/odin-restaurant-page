(()=>{"use strict";var e={736:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".about > img {\n  width: 35%;\n  border-radius: 10%;\n}",""]);const c=i},314:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n",""]);const c=i},477:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(602),n.b),d=i()(o()),u=s()(l);d.push([e.id,"@font-face {\n  font-family: 'HeaderFont';\n  src: url("+u+");\n}\n\nnav {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n\nnav > h2 {\n  padding: 12px 0 12px 0;\n  width: 128px;\n}\n\nnav > h2:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\nheader > h1 {\n  margin-top: 36px;\n  font-family: 'HeaderFont';\n  font-size: 2.5rem;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.active {\n  text-decoration: underline;\n}",""]);const p=d},743:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#hours {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n\n#hours > p {\n  margin: 0;\n}\n",""]);const c=i},546:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".menu > * > *{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.menu > * > * > p {\n  margin: 5px;\n}\n\n.menu > * > hr {\n  width: 100%;\n}",""]);const c=i},426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(147),n.b),d=i()(o()),u=s()(l);d.push([e.id,"html, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: url("+u+");\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nhr {\n  width: 90%;\n  border-color: black;\n  border-radius: 1px;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#container {\n  width: 70%;\n  height: 90%;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: large;\n  text-align: center;\n}\n\n#container > *:not(img) {\n  width: 70%;\n}",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},602:(e,t,n)=>{e.exports=n.p+"ef0718e13cae4a820617.ttf"},147:(e,t,n)=>{e.exports=n.p+"04c06ac1a29a0452752d.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=n(477),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var g=n(314),C={};C.styleTagTransform=p(),C.setAttributes=s(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=d(),t()(g.Z,C),g.Z&&g.Z.locals&&g.Z.locals;var y=n(743),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),t()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var x=n(546),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=d(),t()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;var w=n(736),Z={};Z.styleTagTransform=p(),Z.setAttributes=s(),Z.insert=i().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=d(),t()(w.Z,Z),w.Z&&w.Z.locals&&w.Z.locals;const I=function(){!function(e){const t=document.getElementById("home");t.classList.add("active");const n=t.parentElement.children;for(let e of n)e!==t&&e.classList.remove("active")}();const e=document.getElementById("container");for(;e.firstChild;)e.removeChild(e.lastChild);const t=document.createElement("p");t.textContent="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",t.style.fontStyle="italic",e.appendChild(t);const n=document.createElement("div");n.id="hours";const r=document.createElement("h3");r.textContent="Hours";const o=document.createElement("p");o.textContent="Thursday 11:30 - 17:00";const a=document.createElement("p");a.textContent="Friday 11:30 - 23:00";const i=document.createElement("p");i.textContent="Saturday 11:30 - 23:00",n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(i),e.appendChild(n);const c=document.createElement("p");c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc dui, cursus id enim viverra, ornare feugiat mauris. Nulla a laoreet tortor. Nunc a rutrum massa. Maecenas ut vulputate urna. Nulla in odio et odio semper pellentesque. Pellentesque habitant morbi tristique senectur et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at commodo magna. Fusce porta tempus congue.",e.appendChild(c),content.appendChild(e)},T=function(){!function(e){const t=document.getElementById("menu");t.classList.add("active");const n=t.parentElement.children;for(let e of n)e!==t&&e.classList.remove("active")}();const e=document.getElementById("container");for(;e.firstChild;)e.removeChild(e.lastChild);e.classList.add("menu");const t=document.createElement("div"),n=document.createElement("h3");n.textContent="Pizza",t.appendChild(n);const r=document.createElement("hr");t.appendChild(r);const o=document.createElement("div"),a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet";const i=document.createElement("p");i.textContent="12 $",o.appendChild(a),o.appendChild(i),t.appendChild(o);const c=document.createElement("div"),s=document.createElement("p");s.textContent="Consectetur";const l=document.createElement("p");l.textContent="10 $",c.appendChild(s),c.appendChild(l),t.appendChild(c),e.appendChild(t);const d=document.createElement("div"),u=document.createElement("h3");u.textContent="Beverages",d.appendChild(u);const p=document.createElement("hr");d.appendChild(p);const m=document.createElement("div"),h=document.createElement("p");h.textContent="Egestas tempus";const f=document.createElement("p");f.textContent="7 $",m.appendChild(h),m.appendChild(f),d.appendChild(m);const v=document.createElement("div"),g=document.createElement("p");g.textContent="Pellentesque";const C=document.createElement("p");C.textContent="8.5 $",v.appendChild(g),v.appendChild(C),d.appendChild(v),e.appendChild(d)},S=n.p+"10a4f10091c17270ebb7.jpg",A=function(){!function(e){const t=document.getElementById("about");t.classList.add("active");const n=t.parentElement.children;for(let e of n)e!==t&&e.classList.remove("active")}();const e=document.getElementById("container");for(e.classList.add("about");e.firstChild;)e.removeChild(e.lastChild);const t=document.createElement("p");t.textContent="Ut venenatis pellentesque enim, vitae dictum magna faucibus ut. In eget lacus purus. Ut eget felis porttitor, luctur nibh sed, aliquet mauris. In tincidunt ut urna non ultrices. Nam viverra ex ullamcorper sollicitudin ultrieces. Pellentesque tincidunt vulputate ante. Sed lobortis velit felis, eget posuere sem accumsan eu. In gravida vehicula risus, sed faucibus nulla porttitor sit amet. Curabitur accumsan, metus id tempor tincidunt, elit quam interdum lectus, in tristique nunc enim quis arcu.",t.style.fontStyle="italic",e.appendChild(t);const n=new Image;n.src=S,e.appendChild(n)},q=document.getElementById("content"),L=document.createElement("div");L.id="container",q.appendChild(L),function(){const e=document.getElementById("content"),t=e.parentNode,n=document.createElement("header"),r=document.createElement("nav"),o=document.createElement("h2");o.id="home",o.textContent="Home";const a=document.createElement("h2");a.id="menu",a.textContent="Menu";const i=document.createElement("h2");i.id="about",i.textContent="About",r.appendChild(o),r.appendChild(a),r.appendChild(i);const c=document.createElement("h1");c.textContent="Restaurant Page";const s=document.createElement("hr");n.appendChild(c),n.appendChild(r),n.appendChild(s),t.insertBefore(n,e)}(),I(),function(){const e=document.getElementById("content").parentNode,t=document.createElement("footer"),n=document.createElement("p");n.textContent="Created by kaelwi 01/2023";const r=document.createElement("hr");t.appendChild(r),t.appendChild(n),e.appendChild(t)}();const j=document.getElementsByTagName("nav")[0];if(null!==j)for(let e of j.children)e.addEventListener("click",(()=>{"home"===e.id?I():"menu"===e.id?T():"about"===e.id&&A()}));else console.log("null")})()})();
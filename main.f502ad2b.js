parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e,a){return r(e)||n(e,a)||l(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}function r(e){if(Array.isArray(e))return e}function a(e){return c(e)||i(e)||l(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector("body"),s=document.querySelector("table"),m=document.querySelector("thead tr"),f=document.querySelector("tbody"),p=document.createElement("form"),v=!1,y=-1,h=[],b=[{label:"Name:",dataSet:"name",element:"input",type:"text"},{label:"Position:",dataSet:"position",element:"input",type:"text"},{label:"Office:",dataSet:"office",element:"select"},{label:"Age:",dataSet:"age",element:"input",type:"number"},{label:"Salary:",dataSet:"salary",element:"input",type:"number"}],g=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];function S(e){for(var t=document.querySelectorAll(".active"),n=E(e),r=0;r<a(f.children).length;r++){for(var o=0;o<a(f.children)[r].children.length;o++)a(f.children)[r].children[o].textContent=n[r][o];A(r)&&(a(t).length>0&&a(t)[0].classList.remove("active"),a(f.children)[r].classList.add("active"))}}function E(t){return a(f.children).map(function(e){return a(e.children).map(function(e){return e.textContent})}).sort(function(n,r){var a=e(v?[r,n]:[n,r],2),o=a[0],l=a[1];switch(t){case 4:return x(o[t])-x(l[t]);default:return o[t].localeCompare(l[t])}})}function x(e){return+e.slice(1).replace(/,/g,".")}function A(e){return a(a(f.children)[e].children).map(function(e,t){return e.textContent===h[t]}).every(function(e){return e})}function w(e){e.className="new-employee-form";for(var t=0,n=b;t<n.length;t++){var r=n[t],a=r.label,o=r.dataSet,l=r.element,i=r.type,c=document.createElement("label");c.textContent=a;var u=document.createElement(l);if("select"===l){u.name=o,u.dataset.qa=o;for(var s=0,m=g;s<m.length;s++){var f=m[s],p=document.createElement("option");p.textContent=f,u.required=!0,u.append(p)}}else u.type=i,u.name=o,u.dataset.qa=o,u.required=!0;c.append(u),e.append(c)}var v=document.createElement("button");v.type="submit",v.textContent="Save to Table",e.append(v),d.append(e)}function C(e,t,n){var r=document.createElement("div");r.dataset.qa="notification",r.className="notification ".concat(e);var a=document.createElement("h2");a.classList="title",a.textContent=t,a.style.whiteSpace="nowrap",r.append(a);var o=document.createElement("p");o.textContent=n,r.append(o),d.append(r),setTimeout(function(){r.remove()},3e3)}s.style.margin="0 0 auto",w(p),f.addEventListener("click",function(e){var t=e.target.closest("tr"),n=document.querySelectorAll(".active");if(t&&f.contains(t)){h.length=0;for(var r=0;r<t.children.length;r++)h.push(t.children[r].textContent);a(n).length>0&&a(n)[0].classList.remove("active"),t.classList.add("active")}}),m.addEventListener("click",function(e){e.preventDefault();var t=a(e.target.parentNode.children).findIndex(function(t){return t===e.target});y!==t?(v=!1,y=t):v?v&&(v=!1):v=!0,S(t)}),p.addEventListener("submit",function(e){e.preventDefault();var t=e.target.name.value,n=e.target.position.value,r=e.target.office.value,a=e.target.age.value,o=e.target.salary.value;if(t.trim().length<5)C("error","Error","The Name field must have at least 5 characters.");else if(n.trim())if(+a<18||+a>90)C("error","Error","The Age field must be no less than 18 and no more than 90.");else if(+o<1)C("error","Error","The Salary field must be no less than 1 dollar");else{var l=Intl.NumberFormat("en-US"),i="$".concat(l.format(o)),c={name:t.trim(),position:n.trim(),office:r,age:a,salary:i},u=document.createElement("tr");for(var d in c){var s=document.createElement("td");s.textContent=c[d],u.append(s)}f.append(u),C("succes","Success","New employee added successfully"),e.target.name.value="",e.target.position.value="",e.target.office.value=g[0],e.target.age.value="",e.target.salary.value=""}else C("error","Error","The Position field cannot be empty.")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.f502ad2b.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ELISTJS=t():e.ELISTJS=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1);function i(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0,t[i])(o,u,...r[i]);n.push(l)}return n}function o(e,t,r){return void 0===r&&(r=[]),i(e,t,Array(e.length).fill(r))}function u(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0,t[i])(e,...r[i]);n.push(o)}return n}function l(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0,t[i])(o,...r[i]);n.push(u)}return n}function a(e,t,r){return l(e,t,Array(e.length).fill(r))}function c(e,t,r){return i(e,Array(e.length).fill(t),r)}function f(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0,t[i])(e,...r);n.push(o)}return n}function p(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=(0,t[i])(...r[i]);n.push(e)}return n}function s(e,t,r){return o(e,Array(e.length).fill(t),r)}function y(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e)}return n}function v(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o)}return n}function h(e,t,r){void 0===r&&(r=[]);let n=Array(e.length).fill(r),i=[];for(var o=0;o<e.length;o++){let e=(0,t[o])(...n[o]);i.push(e)}return i}function b(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=t(i,...oargs);n.push(e)}return n}function m(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r);n.push(o)}return n}function g(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e)}return n}function d(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0,t[i])(o,u,...r[i]),a={i:i,v:e[i]};l&&n.push(a)}return n}function O(e,t,r){return d(e,t,r).map(e=>e.i)}function w(e,t,r){return void 0===r&&(r=[]),d(e,t,Array(e.length).fill(r))}function A(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0,t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l)}return n}function j(e,t,r){return j(e,t,r).map(e=>e.i)}function P(e,t,r){return O(e,Array(e.length).fill(t),r)}function x(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0,t[i])(o,...r),l={i:i,v:e[i]};u&&n.push(l)}return n}function S(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=(0,t[i])(...r[i]),u={i:i,v:e[i]};o&&n.push(u)}return n}function T(e,t,r){return void 0===r&&(r=[]),d(e,Array(e.length).fill(t),Array(e.length).fill(r))}function F(e,t,r){return T(e,t,r).map(e=>e.i)}function I(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r[i]),u={i:i,v:e[i]};o&&n.push(u)}return n}function E(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]),u={i:i,v:e[i]};o&&n.push(u)}return n}function z(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=(0,t[i])(...r),u={i:i,v:e[i]};o&&n.push(u)}return n}function N(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r),u={i:i,v:e[i]};o&&n.push(u)}return n}function D(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r),u={i:i,v:e[i]};o&&n.push(u)}return n}function _(e,t,r){return D(e,t,r).map(e=>e.i)}function k(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(...r[i]),u={i:i,v:e[i]};o&&n.push(u)}return n}function J(e){return void 0===e&&(e=!1),e?(e,t,r)=>e[r]===t[r]:(e,t,r)=>t.includes(e[r])}function M(e,t){let r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat(n,r)}function V(e,t){let r=e%t,n=parseInt((e-r)/t);return 0===r||(n+=1),n}function L(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(let e=0;e<n.length;e++)t.push(n[e])}return t}function R(e){return e[0].map((t,r)=>e.map((t,n)=>e[n][r]))}function q(e,t){let r=e.length,n=[];for(let i=0;i<r;i+=t){let r=e.slice(i,i+t);n.push(r)}return n}function U(e){let t=e.entries();return Array.from(t)}function H(e,t){let r=U(e);return r=(r=r.filter(e=>e[1]==t)).map(e=>e[0])}function $(e,t){return new(0,Object.getPrototypeOf(e).constructor)(...t)}function C(e,t){let r=[];for(let n=0;n<t.length;n++)r.push(e[t[n]]);return r}function B(e){let t=function(e){e.length;let t=e.map(e=>e.length);return Math.min(...t)}(e);return[e.map(e=>e.slice(0,t)),e.map(e=>e.slice(t)).filter(e=>e.length>0)]}function G(e){let t,r=[],n=e;for(;n.length>0;)[t,n]=B(n),r.push(t);return r}function Z(...e){let t;[e,t]=function(e){let t,r=e.length-1;return n.isArray(e[r])?t=1:(t=parseInt(e[r]),e=e.slice(0,r)),[e,t=void 0===t?1:t<1?1:t]}(e),e=m(e,(e,t)=>q(e,t),[t]);let r=function(...e){let t=G(e);return tmats=t.map(R),wfsmat=tmats.map(L),L(wfsmat)}(...e);return r=L(r)}function W(e,t,r){var n,i;return n=t,i=[1,0,2],F(e,t=function(...e){let t=C(e,i);return n(...t)},r)}Object.defineProperty(Array.prototype,"mapfivo",{value:function(e,t){return i(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfiv",{value:function(e,t){return o(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfio",{value:function(e,t){return u(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfvo",{value:function(e,t){return l(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfv",{value:function(e,t){return a(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapivo",{value:function(e,t){return c(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfi",{value:function(e,t){return f(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfo",{value:function(e,t){return p(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapiv",{value:function(e,t){return s(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapio",{value:function(e,t){return y(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapvo",{value:function(e,t){return v(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapf",{value:function(e,t){return h(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapi",{value:function(e,t){return b(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapv",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapo",{value:function(e,t){return g(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctivFivo",{value:function(e,t){return d(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiIv",{value:function(e,t){return F(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiV",{value:function(e,t){return _(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"uniqualize",{value:function(){let e=new Set(this);return Array.from(e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"flat",{value:function(){let e=this;for(;e.some(e=>Array.isArray(e));)e=[].concat(...e);return e},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"tlist",{value:U,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"allIndexesOf",{value:function(e){return H(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"last",{value:function(){return this[this.length-1]},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insert",{value:function(e,t){return Array.prototype.splice.call(this,t,0,e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insertArray",{value:function(e,t){return Array.prototype.splice.call(this,t,0,...e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqs",{value:function(e){return C(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqsNot",{value:function(e){return this.filter((t,r)=>!e.includes(r))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"evens",{value:function(){return this.filter((e,t)=>t%2==0)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"odds",{value:function(){return this.filter((e,t)=>t%2==1)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"interleave",{value:function(...e){return e.unshift(this),Z(...e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"findAllIndexes",{value:function(e,t){return W(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),e.exports={mapfivo:i,mapfiv:o,mapfio:u,mapfvo:l,mapivo:c,mapfi:f,mapfv:a,mapfo:p,mapiv:s,mapio:y,mapvo:v,mapf:h,mapi:b,mapv:m,mapo:g,slctivFivo:d,slctiFivo:O,slctvFivo:function(e,t,r){return d(e,t,r).map(e=>e.v)},slctivFiv:w,slctiFiv:function(e,t,r){return w(e,t,r).map(e=>e.i)},slctvFiv:function(e,t,r){return w(e,t,r).map(e=>e.v)},slctivFio:A,slctiFio:function(e,t,r){return A(e,t,r).map(e=>e.i)},slctvFio:function(e,t,r){return A(e,t,r).map(e=>e.v)},slctivFvo:function(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0,t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l)}return n},slctiFvo:j,slctvFvo:function(e,t,r){return j(e,t,r).map(e=>e.v)},slctivIvo:P,slctiIvo:function(e,t,r){return P(e,t,r).map(e=>e.i)},slctvIvo:function(e,t,r){return P(e,t,r).map(e=>e.v)},slctivFi:x,slctiFi:function(e,t,r){return x(e,t,r).map(e=>e.i)},slctvFi:function(e,t,r){return x(e,t,r).map(e=>e.v)},slctivFo:S,slctiFo:function(e,t,r){return S(e,t,r).map(e=>e.i)},slctvFo:function(e,t,r){return S(e,t,r).map(e=>e.v)},slctivIv:T,slctiIv:F,slctvIv:function(e,t,r){return T(e,t,r).map(e=>e.v)},slctivIo:I,slctiIo:function(e,t,r){return I(e,t,r).map(e=>e.i)},slctvIo:function(e,t,r){return I(e,t,r).map(e=>e.v)},slctivVo:E,slctiVo:function(e,t,r){return E(e,t,r).map(e=>e.i)},slctvVo:function(e,t,r){return E(e,t,r).map(e=>e.v)},slctivF:z,slctiF:function(e,t,r){return z(e,t,r).map(e=>e.i)},slctvF:function(e,t,r){return z(e,t,r).map(e=>e.v)},slctivI:N,slctiI:function(e,t,r){return N(e,t,r).map(e=>e.i)},slctvI:function(e,t,r){return N(e,t,r).map(e=>e.v)},slctivV:D,slctiV:_,slctvV:function(e,t,r){return D(e,t,r).map(e=>e.v)},slctivO:k,slctiO:function(e,t,r){return k(e,t,r).map(e=>e.i)},slctvO:function(e,t,r){return k(e,t,r).map(e=>e.v)},replfivo:function(e,t,r,n){let i=O(e,r,n),o=Array.from(e);for(let e of i)o[e]=t;return o},replace:function(e,t,r){let n=Array.from(e);for(let e=0;e<n.length;e++)n[e]===t&&(n[e]=r);return n},diffi:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffv:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffiv:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push({index:o,value:e[o]});return i},init:function(e,t){return Array.apply(null,Array(e)).map(e=>t)},divide:q,kvlist2d:function(e,t){let r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return r},d2kvlist:function(e){let t=Object.keys(e);return[t,m(t,t=>e[t])]},reheadI:M,reheadV:function(e,t){let r=e.indexOf(t);return M(e,r)},getRowNumsViaLength:V,matRc2index:function(e,t,r){return e*r+t},matIndex2rc:function(e,t){let r=e%t;return[(e-r)/t,r]},list2mat:function(e,t){let r=e.length,n=V(r,t),i=[],o=0;for(var u=0;u<n;u++){let n=[];for(var l=0;l<t;l++)o<r&&n.push(e[o]),o+=1;i.push(n)}return i},list2mat2:function(e,t,r){let n=[],i=0;for(var o=0;o<r;o++){let r=[];for(var u=0;u<t;u++)r.push(e[i]),i+=1;n.push(r)}return n},mat2list:L,transpose:R,batmap:function(e,t,r){let n=[];r=R(r);for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o)}return n},index1dto2d:function(e,t){return[(e-e%t)/t,e%t]},index2dto1d:function(e,t,r){return r*e+t},initMat:function(e,t,r){var n=Array(e).fill(r);for(let e=0;e<n.length;e++)n[e]=Array(t).fill(r);return n},extendWithOneValue:function(e,t,r){let n=Array(r).fill(t);return Array.prototype.concat(e,n)},uniqualize:function(e){let t=new Set(e);return Array.from(t)},tlist:U,allIndexesOf:H,last:function(e){return e[e.length-1]},insert:function(e,t,r,n=!0){if(!0===n);else{e=$(e,e=JSON.parse(JSON.stringify(e)))}return Array.prototype.splice.call(e,r,0,t),e},insertArray:function(e,t,r,n=!0){if(!0===n);else{e=$(e,e=JSON.parse(JSON.stringify(e)))}return Array.prototype.splice.call(e,r,0,...t),e},seqs:C,seqsNot:function(e,t){return e.filter((e,r)=>!t.includes(r))},evens:function(e){return e.filter((e,t)=>t%2==0)},odds:function(e){return e.filter((e,t)=>t%2==1)},dmat2mats:G,interleave:Z,findAllIndexes:W}},function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(l(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(e).replace(i,function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),a=n[r];r<o;a=n[++r])h(a)||!O(a)?u+=" "+a:u+=" "+l(a);return u},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var o,u={};function l(e,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),v(r)?n.showHidden=r:r&&t._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),f(n,e,n.depth)}function a(e,t){var r=l.styles[t];return r?"["+l.colors[r][0]+"m"+e+"["+l.colors[r][1]+"m":e}function c(e,t){return e}function f(e,r,n){if(e.customInspect&&r&&j(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return m(i)||(i=f(e,i,n)),i}var o=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(b(t))return e.stylize(""+t,"number");if(v(t))return e.stylize(""+t,"boolean");if(h(t))return e.stylize("null","null")}(e,r);if(o)return o;var u=Object.keys(r),l=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),A(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(j(r)){var a=r.name?": "+r.name:"";return e.stylize("[Function"+a+"]","special")}if(d(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(A(r))return p(r)}var c,O="",P=!1,x=["{","}"];(y(r)&&(P=!0,x=["[","]"]),j(r))&&(O=" [Function"+(r.name?": "+r.name:"")+"]");return d(r)&&(O=" "+RegExp.prototype.toString.call(r)),w(r)&&(O=" "+Date.prototype.toUTCString.call(r)),A(r)&&(O=" "+p(r)),0!==u.length||P&&0!=r.length?n<0?d(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),c=P?function(e,t,r,n,i){for(var o=[],u=0,l=t.length;u<l;++u)F(t,String(u))?o.push(s(e,t,r,n,String(u),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(s(e,t,r,n,i,!0))}),o}(e,r,n,l,u):u.map(function(t){return s(e,r,n,l,t,P)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,O,x)):x[0]+O+x[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function s(e,t,r,n,i,o){var u,l,a;if((a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?l=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(l=e.stylize("[Setter]","special")),F(n,i)||(u="["+i+"]"),l||(e.seen.indexOf(a.value)<0?(l=h(r)?f(e,a.value,null):f(e,a.value,r-1)).indexOf("\n")>-1&&(l=o?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n")):l=e.stylize("[Circular]","special")),g(u)){if(o&&i.match(/^\d+$/))return l;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+l}function y(e){return Array.isArray(e)}function v(e){return"boolean"==typeof e}function h(e){return null===e}function b(e){return"number"==typeof e}function m(e){return"string"==typeof e}function g(e){return void 0===e}function d(e){return O(e)&&"[object RegExp]"===P(e)}function O(e){return"object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===P(e)}function A(e){return O(e)&&("[object Error]"===P(e)||e instanceof Error)}function j(e){return"function"==typeof e}function P(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(g(o)&&(o=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=e.pid;u[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e)}}else u[r]=function(){};return u[r]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=v,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=d,t.isObject=O,t.isDate=w,t.isError=A,t.isFunction=j,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(3);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return[e.getDate(),S[e.getMonth()],t].join(" ")}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=r(4),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var I="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function E(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(I&&e[I]){var t;if("function"!=typeof(t=e[I]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(e,n){e?r(e):t(n)});try{e.apply(this,i)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),I&&Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=I,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};t.apply(this,r).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(E,t,u)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r}}).call(this,r(2))},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a,c=[],f=!1,p=-1;function s(){f&&a&&(f=!1,a.length?c=a.concat(c):p=-1,c.length&&y())}function y(){if(!f){var e=l(s);f=!0;for(var t=c.length;t;){for(a=c,c=[];++p<t;)a&&a[p].run();p=-1,t=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new v(e,t)),1!==c.length||f||l(y)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}])});
//# sourceMappingURL=elist.js.map
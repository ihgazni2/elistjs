!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ELISTJS=e():t.ELISTJS=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){function r(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=i,o=t[i],u=(0,e[i])(l,o,...r[i]);n.push(u)}return n}function n(t,e,n){return void 0===n&&(n=[]),r(t,e,Array(t.length).fill(n))}function i(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let t=i,l=(0,e[i])(t,...r[i]);n.push(l)}return n}function l(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=t[i],o=(0,e[i])(l,...r[i]);n.push(o)}return n}function o(t,e,r){return l(t,e,Array(t.length).fill(r))}function u(t,e,n){return r(t,Array(t.length).fill(e),n)}function f(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let t=i,l=(0,e[i])(t,...r);n.push(l)}return n}function a(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let t=(0,e[i])(...r[i]);n.push(t)}return n}function c(t,e,r){return n(t,Array(t.length).fill(e),r)}function p(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let t=e(i,...r[i]);n.push(t)}return n}function v(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=e(t[i],...r[i]);n.push(l)}return n}function s(t,e,r){void 0===r&&(r=[]);let n=Array(t.length).fill(r),i=[];for(var l=0;l<t.length;l++){let t=(0,e[l])(...n[l]);i.push(t)}return i}function h(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let t=e(i,...oargs);n.push(t)}return n}function y(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let l=e(t[i],...r);n.push(l)}return n}function m(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let t=e(i,...r[i]);n.push(t)}return n}function b(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=i,o=t[i],u=(0,e[i])(l,o,...r[i]),f={i:i,v:t[i]};u&&n.push(f)}return n}function d(t,e,r){return b(t,e,r).map(t=>t.i)}function g(t,e,r){return void 0===r&&(r=[]),b(t,e,Array(t.length).fill(r))}function A(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=i,o=(0,e[i])(l,...r[i]),u={i:i,v:t[i]};o&&n.push(u)}return n}function O(t,e,r){return O(t,e,r).map(t=>t.i)}function j(t,e,r){return d(t,Array(t.length).fill(e),r)}function P(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let l=i,o=(0,e[i])(l,...r),u={i:i,v:t[i]};o&&n.push(u)}return n}function w(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=(0,e[i])(...r[i]),o={i:i,v:t[i]};l&&n.push(o)}return n}function F(t,e,r){return b(t,Array(t.length).fill(e),Array(t.length).fill(r))}function x(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=e(i,...r[i]),o={i:i,v:t[i]};l&&n.push(o)}return n}function I(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=e(t[i],...r[i]),o={i:i,v:t[i]};l&&n.push(o)}return n}function S(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let l=(0,e[i])(...r),o={i:i,v:t[i]};l&&n.push(o)}return n}function V(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let l=e(i,...r),o={i:i,v:t[i]};l&&n.push(o)}return n}function M(t,e,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<t.length;i++){let l=e(t[i],...r),o={i:i,v:t[i]};l&&n.push(o)}return n}function _(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=e(...r[i]),o={i:i,v:t[i]};l&&n.push(o)}return n}function T(t){return void 0===t&&(t=!1),t?(t,e,r)=>t[r]===e[r]:(t,e,r)=>e.includes(t[r])}function k(t,e){let r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat(n,r)}function L(t,e){let r=t%e,n=parseInt((t-r)/e);return 0===r||(n+=1),n}function q(t){return t[0].map((e,r)=>t.map((e,n)=>t[n][r]))}function z(t){let e=t.entries();return Array.from(e)}function E(t,e){let r=z(t);return r=(r=r.filter(t=>t[1]==e)).map(t=>t[0])}Object.defineProperty(Array.prototype,"mapfivo",{value:function(t,e){return r(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfiv",{value:function(t,e){return n(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfio",{value:function(t,e){return i(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfvo",{value:function(t,e){return l(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfv",{value:function(t,e){return o(this,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapivo",{value:function(t,e){return u(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfi",{value:function(t,e){return f(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfo",{value:function(t,e){return a(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapiv",{value:function(t,e){return c(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapio",{value:function(t,e){return p(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapvo",{value:function(t,e){return v(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapf",{value:function(t,e){return s(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapi",{value:function(t,e){return h(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapv",{value:function(t,e){return y(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapo",{value:function(t,e){return m(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctivFivo",{value:function(t,e){return b(this,t,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"uniqualize",{value:function(){let t=new Set(this);return Array.from(t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"flat",{value:function(){let t=this;for(;t.some(t=>Array.isArray(t));)t=[].concat(...t);return t},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"tlist",{value:z,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"allIndexesOf",{value:function(t){return E(this,t)},writable:!0,enumerable:!1,configurable:!0}),t.exports={mapfivo:r,mapfiv:n,mapfio:i,mapfvo:l,mapivo:u,mapfi:f,mapfv:o,mapfo:a,mapiv:c,mapio:p,mapvo:v,mapf:s,mapi:h,mapv:y,mapo:m,slctivFivo:b,slctiFivo:d,slctvFivo:function(t,e,r){return b(t,e,r).map(t=>t.v)},slctivFiv:g,slctiFiv:function(t,e,r){return g(t,e,r).map(t=>t.i)},slctvFiv:function(t,e,r){return g(t,e,r).map(t=>t.v)},slctivFio:A,slctiFio:function(t,e,r){return A(t,e,r).map(t=>t.i)},slctvFio:function(t,e,r){return A(t,e,r).map(t=>t.v)},slctivFvo:function(t,e,r){void 0===r&&(r=Array(t.length).fill([]));let n=[];for(var i=0;i<t.length;i++){let l=t[i],o=(0,e[i])(l,...r[i]),u={i:i,v:t[i]};o&&n.push(u)}return n},slctiFvo:O,slctvFvo:function(t,e,r){return O(t,e,r).map(t=>t.v)},slctivIvo:j,slctiIvo:function(t,e,r){return j(t,e,r).map(t=>t.i)},slctvIvo:function(t,e,r){return j(t,e,r).map(t=>t.v)},slctivFi:P,slctiFi:function(t,e,r){return P(t,e,r).map(t=>t.i)},slctvFi:function(t,e,r){return P(t,e,r).map(t=>t.v)},slctivFo:w,slctiFo:function(t,e,r){return w(t,e,r).map(t=>t.i)},slctvFo:function(t,e,r){return w(t,e,r).map(t=>t.v)},slctivIv:F,slctiIv:function(t,e,r){return F(t,e,r).map(t=>t.i)},slctvIv:function(t,e,r){return F(t,e,r).map(t=>t.v)},slctivIo:x,slctiIo:function(t,e,r){return x(t,e,r).map(t=>t.i)},slctvIo:function(t,e,r){return x(t,e,r).map(t=>t.v)},slctivVo:I,slctiVo:function(t,e,r){return I(t,e,r).map(t=>t.i)},slctvVo:function(t,e,r){return I(t,e,r).map(t=>t.v)},slctivF:S,slctiF:function(t,e,r){return S(t,e,r).map(t=>t.i)},slctvF:function(t,e,r){return S(t,e,r).map(t=>t.v)},slctivI:V,slctiI:function(t,e,r){return V(t,e,r).map(t=>t.i)},slctvI:function(t,e,r){return V(t,e,r).map(t=>t.v)},slctivV:M,slctiV:function(t,e,r){return M(t,e,r).map(t=>t.i)},slctvV:function(t,e,r){return M(t,e,r).map(t=>t.v)},slctivO:_,slctiO:function(t,e,r){return _(t,e,r).map(t=>t.i)},slctvO:function(t,e,r){return _(t,e,r).map(t=>t.v)},replfivo:function(t,e,r,n){let i=d(t,r,n),l=Array.from(t);for(let t of i)l[t]=e;return l},replace:function(t,e,r){let n=Array.from(t);for(let t=0;t<n.length;t++)n[t]===e&&(n[t]=r);return n},interleave:function(t,e){let r=Math.min(t.length,e.length),n=[];for(let i=0;i<r;i++)n.push(t[i]),n.push(e[i]);if(t.length>r)for(let e=r;e<t.length;e++)n.push(t[e]);if(e.length>r)for(let t=r;t<e.length;t++)n.push(e[t]);return n},diffi:function(t,e,r,n){void 0===n&&(n=T(r));let i=[];for(var l in t)n(t,e,l)||i.push(t[l]);return i},diffv:function(t,e,r,n){void 0===n&&(n=T(r));let i=[];for(var l in t)n(t,e,l)||i.push(t[l]);return i},diffiv:function(t,e,r,n){void 0===n&&(n=T(r));let i=[];for(var l in t)n(t,e,l)||i.push({index:l,value:t[l]});return i},init:function(t,e){return Array.apply(null,Array(t)).map(t=>e)},divide:function(t,e){let r=t.length,n=[];for(let i=0;i<r;i+=e){let r=t.slice(i,i+e);n.push(r)}return n},kvlist2d:function(t,e){let r={};for(let n=0;n<t.length;n++)r[t[n]]=e[n];return r},d2kvlist:function(t){let e=Object.keys(t);return[e,y(e,e=>t[e])]},reheadI:k,reheadV:function(t,e){let r=t.indexOf(e);return k(t,r)},getRowNumsViaLength:L,matRc2index:function(t,e,r){return t*r+e},matIndex2rc:function(t,e){let r=t%e;return[(t-r)/e,r]},list2mat:function(t,e){let r=t.length,n=L(r,e),i=[],l=0;for(var o=0;o<n;o++){let n=[];for(var u=0;u<e;u++)l<r&&n.push(t[l]),l+=1;i.push(n)}return i},list2mat2:function(t,e,r){let n=[],i=0;for(var l=0;l<r;l++){let r=[];for(var o=0;o<e;o++)r.push(t[i]),i+=1;n.push(r)}return n},mat2list:function(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];for(let t=0;t<n.length;t++)e.push(n[t])}return e},transpose:q,batmap:function(t,e,r){let n=[];r=q(r);for(var i=0;i<t.length;i++){let l=e(t[i],...r[i]);n.push(l)}return n},index1dto2d:function(t,e){return[(t-t%e)/e,t%e]},index2dto1d:function(t,e,r){return r*t+e},initMat:function(t,e,r){var n=Array(t).fill(r);for(let t=0;t<n.length;t++)n[t]=Array(e).fill(r);return n},extendWithOneValue:function(t,e,r){let n=Array(r).fill(e);return Array.prototype.concat(t,n)},uniqualize:function(t){let e=new Set(t);return Array.from(e)},tlist:z,allIndexesOf:E}}])});
//# sourceMappingURL=elist.js.map
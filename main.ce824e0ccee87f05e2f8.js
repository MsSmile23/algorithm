/*! For license information please see main.ce824e0ccee87f05e2f8.js.LICENSE.txt */
(()=>{"use strict";var e=document.querySelector(".container"),t=function(e,t){t.innerHTML="",e.forEach((function(n,o){var a=e.length>50,c=r(n,o,a);t.append(c)}))},r=function(e,t,r){var n=document.createElement("li"),o=document.createElement("p");return n.id=t,n.classList.add("item"),n.style.height="".concat(7*e,"px"),o.textContent=e,o.classList.add("item-text"),r&&o.classList.add("item-text-hidden"),n.append(o),n},n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},o=function(e,t){var r=document.getElementById(e),n=+r.querySelector(".item-text").textContent,o=document.getElementById(t),a=+o.querySelector(".item-text").textContent;r.querySelector(".item-text").textContent=a,r.style.height="".concat(5*a,"px"),o.querySelector(".item-text").textContent=n,o.style.height="".concat(5*n,"px")},a=function(e,t){document.getElementById(e).style.background=t},c=function(e){document.getElementById(e).style.background="rgb(80, 170, 234)"},i={bubble:"Сортировка пузырьком или сортировка простыми обменами – один из простейших алгоритмов сортировки. Он применяется для упорядочивания массивов небольших размеров.Суть алгоритма в том, что совершается несколько проходов по массиву. При каждом проходе попарно сравниваются два соседних элемента. Если они находятся в верном порядке, то ничего не происходит, в противном случае они меняются местами. В результате первого прохода максимальный элемент окажется в конце, то есть всплывет словно пузырек. Затем все повторяется до того момента пока весь массив не будет отсортирован.",comb:"Сортировка расчёской — улучшение сортировки пузырьком. Её идея состоит в том, чтобы «устранить» элементы с небольшими значения в конце массива, которые замедляют работу алгоритма. Если при пузырьковой сортировке при переборе массива сравниваются соседние элементы, то при «расчёсывании» сначала берётся достаточно большое расстояние между сравниваемыми значениями, а потом оно сужается вплоть до минимального.Первоначальный разрыв нужно выбирать не случайным образом, а с учётом специальной величины — фактора уменьшения, оптимальное значение которого равно 1,247. Сначала расстояние между элементами будет равняться размеру массива, поделённому на 1,247; на каждом последующем шаге расстояние будет снова делиться на фактор уменьшения — и так до окончания работы алгоритма.",selection:"Сортировка выбором - здесь, чтобы отсортировать массив, находим элемент с минимальным значением, затем сравниваем его со значением первой неотсортированной позиции. Если этот элемент меньше, то он становится новым минимумом и их позиции меняются.",insertion:"Сортировка вставками - сортировка, в которой элементы просматриваются по одному и ставятся на место в соответствии с уже упорядоченным массивом.",quick:"Быстрая сортировка - в целом это один из самых быстрых алгоритмов сортировки массивов, однако на практике он чаще всего применяется с разного рода модификациями. Является примером принципа «разделяй и властвуй». Идея алгоритма заключается в том, что выбирается опорный элемент, относительно которого будет происходит сортировка. Равные и бОльшие элементы помещаются справа, меньшие – слева. Затем к полученным подмассивам рекурсивно применяются два первых пункта."},u=[29,62,12,14,34,1,53,90,31,8,38,68,89,33,32,69,69,75,36,29,23,68,62,94,21,38,70,35,8,15,90,6,37,16,42,89,17,50,98,31,5,10,44,28,39,94,14,2,28,37,54,97,56,35,32,81,20,89,18,86,78,34,100,88,25,2,38,14,86,95,32,45,7,78,84,44,18,52,24,55,39,6,42,74,65,77,39,91,71,17,83,1,18,94,21,41,75,15,42,18,24,81,2,31,89,38,100,5,65,14,28,78,20,62,17,94,56,7,90,31,8,38,83,18,68,6,69,86,55,52,35,18,34,77,44,37,34,39,2,33,78,95,21,70,29,32,14,54,37,10,16,94,86,18,38,71,32,44,15,18,21,74,41,42,23,14,94,1,25,84,17,32,69,35,45,62,39,1,15,90,29,28,36,75,98,6,91,53,89,89,8,75,12,97,42,68,88,39,50,42,98,94,32,69,74,42,29,89,52,36,1,2,15,71,65,44,78,39,15,88,54,62,77,53,18,95,16,29,70,35,25,2,6,78,81,32,90,86,38,42,94,90,89,38,41,31,55,100,68,23,14,89,37,39,69,21,14,17,14,84,7,28,34,12,50,86,18,62,94,97,83,18,21,18,6,44,56,75,42,8,68,37,5,38,28,39,35,33,1,24,32,8,17,91,45,10,75,20,31,34],s=document.querySelector(".popup"),f=function(){s.classList.remove("popup-visible")};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function h(){h=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,c=Object.create(a.prototype),i=new P(n||[]);return o(c,"_invoke",{value:O(e,r,i)}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",x={};function g(){}function b(){}function k(){}var w={};s(w,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,c)&&(w=E);var S=k.prototype=g.prototype=Object.create(w);function q(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,c,i){var u=p(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=d;return function(a,c){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw c;return{value:e,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=j(i,n);if(u){if(u===x)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===x)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,x;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,x):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(l(t)+" is not iterable")}return b.prototype=k,o(S,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:b,configurable:!0}),b.displayName=s(k,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,s(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},q(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new _(f(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},q(S),s(S,u,"Generator"),s(S,c,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),x}},t}function p(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){p(a,n,o,c,i,"next",e)}function i(e){p(a,n,o,c,i,"throw",e)}c(void 0)}))}}var v,y=u.slice(0,100),m=!1,x=!1,g=300,b=document.querySelector(".button"),k=document.querySelector("#algorithm"),w=document.querySelector("#speed"),L=document.querySelector(".info"),E=function(){var e=d(h().mark((function e(t){var r,i,u;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!1,i=0;case 2:if(!(i<t.length-1)){e.next=20;break}if(!x){e.next=5;break}return e.abrupt("return");case 5:if(m){e.next=10;break}return e.next=8,n(100);case 8:e.next=5;break;case 10:return a(i,"green"),a(i+1,"green"),t[i]>t[i+1]&&(u=[t[i+1],t[i]],t[i]=u[0],t[i+1]=u[1],r=!0,o(i,i+1)),e.next=15,n(g);case 15:c(i),c(i+1);case 17:i++,e.next=2;break;case 20:if(r){e.next=0;break}case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=d(h().mark((function e(t){var r,i,u,s,f,l;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=1.247,i=t.length/r;case 2:if(!(i>1)){e.next=30;break}u=Math.round(i),s=0,f=u;case 5:if(!(f<t.length)){e.next=27;break}if(!x){e.next=8;break}return e.abrupt("return");case 8:if(m){e.next=13;break}return e.next=11,n(100);case 11:e.next=8;break;case 13:if(a(s,"green"),a(f,"green"),!(t[s]>t[f])){e.next=22;break}return l=[t[f],t[s]],t[s]=l[0],t[f]=l[1],o(s,f),e.next=22,n(g);case 22:c(s),c(f);case 24:s++,f++,e.next=5;break;case 27:i/=r,e.next=2;break;case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=d(h().mark((function e(t){var r,i,u,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.length-1)){e.next=34;break}if(!x){e.next=4;break}return e.abrupt("return");case 4:if(m){e.next=9;break}return e.next=7,n(100);case 7:e.next=4;break;case 9:a(r=i,"red"),u=i+1;case 12:if(!(u<t.length)){e.next=25;break}case 13:if(m){e.next=18;break}return e.next=16,n(g);case 16:e.next=13;break;case 18:return a(u,"green"),e.next=21,n(g);case 21:t[r]>t[u]?(c(r),a(r=u,"red")):c(u);case 22:u++,e.next=12;break;case 25:s=[t[r],t[i]],t[i]=s[0],t[r]=s[1],o(i,r),c(r),a(i,"orange");case 31:i++,e.next=1;break;case 34:a(t.length-1,"orange");case 35:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=d(h().mark((function e(t){var r,c,i,u;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.length)){e.next=30;break}if(!x){e.next=4;break}return e.abrupt("return");case 4:if(m){e.next=9;break}return e.next=7,n(100);case 7:e.next=4;break;case 9:return r=t[i],a(i,"red"),e.next=13,n(g);case 13:a(i,"orange"),c=i-1;case 15:if(!(c>=0&&t[c]>r)){e.next=27;break}return a(c,"red"),u=[t[c],t[c+1]],t[c+1]=u[0],t[c]=u[1],o(c,c+1),e.next=23,n(g);case 23:a(c,"orange"),c--,e.next=15;break;case 27:i++,e.next=1;break;case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=d(h().mark((function e(t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,0,t.length);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=d(h().mark((function e(t,r,i){var u,s,f,l,p,d,v,y;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u=r;u<i;u++)c(u);if(s=r,f=t[r],a(s,"orange"),r-i==0){e.next=50;break}l=[],p=[],d=r+1;case 8:if(!(d<i)){e.next=46;break}if(!x){e.next=11;break}return e.abrupt("return");case 11:if(m){e.next=16;break}return e.next=14,n(100);case 14:e.next=11;break;case 16:return a(d,"green"),e.next=19,n(g);case 19:if(!(f>t[d])){e.next=39;break}a(v=d,"red");case 22:if(v===s){e.next=34;break}return e.next=25,n(g);case 25:o(v,v-1),y=[t[v-1],t[v]],t[v]=y[0],t[v-1]=y[1],v!==s+1&&a(v,"violet"),v--,a(v,"red"),e.next=22;break;case 34:a(s=v+1,"orange"),l.push(t[d]),e.next=43;break;case 39:return a(d,"violet"),p.push(t[d]),e.next=43,n(100);case 43:d++,e.next=8;break;case 46:return e.next=48,j(t,r,s);case 48:return e.next=50,j(t,s+1,i);case 50:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),C=(v=!0,function(){var e=function(e,t,r,n,o,a){var c;switch(a){case"quick":c=e;break;case"selection":c=t;break;case"comb":c=r;break;case"insertion":c=n;break;default:c=o}return c}(O,q,S,_,E,k.value);m=!m,x&&(v=!0,x=!1),v&&(v=!1,e(y)),b.textContent=m?"Пауза":"Старт"}),N=document.querySelector(".radiobuttons"),P=document.querySelector(".form"),T=function(){var e=P.querySelector(".form-container");if(e.innerHTML="","arrLength"===N.array.value){var t=document.querySelector("#template-length").content.querySelector(".range").cloneNode(!0);t.addEventListener("change",(function(){document.querySelector(".length").textContent=P.range.value})),e.append(t)}else{var r=document.querySelector("#template-array").content.querySelector(".input-container").cloneNode(!0);e.append(r)}};T(),N.addEventListener("change",T);var G=document.querySelector(".change-array"),I=document.querySelector(".close"),F=document.querySelector(".mash-up");t(y,e),b.addEventListener("click",C),k.addEventListener("change",(function(){L.textContent=function(e,t){var r;switch(t){case"quick":r=e.quick;break;case"selection":r=e.selection;break;case"comb":r=e.comb;break;case"insertion":r=e.insertion;break;default:r=e.bubble}return r}(i,k.value),m&&(x=!0,b.textContent="Старт",m=!1)})),w.addEventListener("change",(function(){var e=+w.value;g=300/e})),F.addEventListener("click",(function(){m&&(x=!0,m=!1,b.textContent="Старт"),function(r){for(var n=r.length-1;n>0;n--){var o=Math.floor(Math.random()*(n+1)),a=[r[o],r[n]];r[n]=a[0],r[o]=a[1]}t(r,e)}(y)})),G.addEventListener("click",(function(){m&&(x=!0,m=!1,b.textContent="Старт"),s.classList.add("popup-visible")})),I.addEventListener("click",f),P.addEventListener("submit",(function(r){var n,o;r.preventDefault(),"arrLength"===N.array.value?(n=+P.range.value,y=(y=u).slice(0,n),t(y,e)):(o=P.array.value.split(", ").map((function(e){return+e})),t(y=o,e)),f()}))})();
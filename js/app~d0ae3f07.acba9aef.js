(function(e){function t(t){for(var o,r,i=t[0],u=t[1],f=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={"app~d0ae3f07":0},a={"app~d0ae3f07":0},c=[];function i(e){return u.p+"js/"+({"about~253ae210":"about~253ae210","about~c98f95f3":"about~c98f95f3","about~34f7ba4d":"about~34f7ba4d"}[e]||e)+"."+{"about~253ae210":"8e08d69b","about~c98f95f3":"13fec880","about~34f7ba4d":"f2dcf48a"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"about~c98f95f3":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"about~253ae210":"about~253ae210","about~c98f95f3":"about~c98f95f3","about~34f7ba4d":"about~34f7ba4d"}[e]||e)+"."+{"about~253ae210":"31d6cfe0","about~c98f95f3":"41e5d01e","about~34f7ba4d":"31d6cfe0"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var f=c[i],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){f=d[i],s=f.getAttribute("data-href");if(s===o||s===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],l.parentNode.removeChild(l),n(c)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/sonagi/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=s;c.push([0,"chunk-vendors~253ae210","chunk-vendors~fd28f614","chunk-vendors~5ea1a303","chunk-vendors~b5906859","chunk-vendors~a17fcde5","chunk-vendors~50b699b6","chunk-vendors~2930ad93","chunk-vendors~9c5b28f6"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,a,c){var i=Object(o["N"])("router-view");return Object(o["E"])(),Object(o["i"])(i)}var a={name:"App",data:function(){return{scrollTop:0}},components:{},created:function(){},mounted:function(){window.addEventListener("scroll",this.onScroll)},unmounted:function(){window.removeEventListener("scroll",this.onScroll)},computed:{},methods:{onScroll:function(){this.scrollTop=window.scrollY}}};n("e9a7");a.render=r;var c=a,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(o["gb"])("data-v-3fe88c9e");Object(o["H"])("data-v-3fe88c9e");var f={id:"Section_Intro"},s={class:"center"},d=Object(o["l"])('<div class="intro_title" data-v-3fe88c9e><h3 data-v-3fe88c9e>Mapping the literary geography of</h3><h1 data-v-3fe88c9e>SONAGI 소나기</h1></div><p data-v-3fe88c9e><b data-v-3fe88c9e>Sonagi 소나기</b> is a Korean word that means <b data-v-3fe88c9e>rain shower</b>. It is also the title of a short story by the author Hwang Sun Won, one of the most accomplished writers of short fiction in modern Korea literature. The story which has a simple plot of “a boy in the countryside meets a girl from the city” is one of the most well-known short stories of Hwang. They spend a few sporadic days together browsing the neighborhood set in an agricultural village and there is a slight hint of innocent romance built between them. </p><p data-v-3fe88c9e>The idyllic and natural setting that two young protagonists explore on foot is one of the core elements of the story. This project aims to identify <b data-v-3fe88c9e>the literary geography of Sonagi</b> and <b data-v-3fe88c9e>construct a map of the story</b>, providing another way of understanding the story. </p>',3);Object(o["F"])();var l=u((function(e,t,n,r,a,c){var i=Object(o["N"])("el-button"),l=Object(o["N"])("router-link");return Object(o["E"])(),Object(o["i"])("div",f,[Object(o["n"])("div",s,[d,Object(o["n"])(l,{to:"combinedview"},{default:u((function(){return[Object(o["n"])(i,{icon:"el-icon-arrow-down",circle:"",size:"small"})]})),_:1})])])})),b={name:"Intro",data:function(){return{visible:!0}},props:{},computed:{scrollBlock:function(){return Math.floor(this.scrollPosition/100)}}};n("8adb");b.render=l,b.__scopeId="data-v-3fe88c9e";var h=b,p={class:"not-found"},m=Object(o["n"])("h3",null,"Page not found",-1),v=Object(o["n"])("div",null,"Try one of the pages using the navigation links above.",-1);function g(e,t){return Object(o["E"])(),Object(o["i"])("div",p,[m,v])}const y={};y.render=g;var w=y,O=[{path:"/",redirect:"/intro"},{path:"/intro",name:"Intro",component:h},{path:"/combinedview",name:"CombinedView",component:function(){return Promise.all([n.e("about~253ae210"),n.e("about~c98f95f3"),n.e("about~34f7ba4d")]).then(n.bind(null,"8d7f"))}},{path:"/map",name:"Map",component:function(){return Promise.all([n.e("about~253ae210"),n.e("about~c98f95f3"),n.e("about~34f7ba4d")]).then(n.bind(null,"4bb4"))}},{path:"/findings",name:"Findings",component:function(){return Promise.all([n.e("about~253ae210"),n.e("about~c98f95f3"),n.e("about~34f7ba4d")]).then(n.bind(null,"e82b"))}},{path:"/storysegment",name:"StorySegment",component:function(){return Promise.all([n.e("about~253ae210"),n.e("about~c98f95f3"),n.e("about~34f7ba4d")]).then(n.bind(null,"5b18"))}},{path:"/:pathMatch(.*)*",name:"NotFound",component:w}],j=Object(i["a"])({history:Object(i["b"])(),routes:O}),k=j,S=n("3fd4"),P=(n("7dd6"),Object(o["h"])(c));P.use(k),P.use(S["a"]),P.mount("#app")},"6c20":function(e,t,n){},"8adb":function(e,t,n){"use strict";n("6c20")},c0da:function(e,t,n){},e9a7:function(e,t,n){"use strict";n("c0da")}});
//# sourceMappingURL=app~d0ae3f07.acba9aef.js.map
import{r as d}from"./index.DhYZZe0J.js";/* empty css                        */var m={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=d,w=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,k=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(n,r,o){var s,t={},c=null,a=null;o!==void 0&&(c=""+o),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(a=r.ref);for(s in r)f.call(r,s)&&!b.hasOwnProperty(s)&&(t[s]=r[s]);if(n&&n.defaultProps)for(s in r=n.defaultProps,r)t[s]===void 0&&(t[s]=r[s]);return{$$typeof:w,type:n,key:c,ref:a,props:t,_owner:k.current}}j.Fragment=u;j.jsx=p;j.jsxs=p;m.exports=j;var e=m.exports;const N=({imagenes:n})=>{const[r,o]=d.useState(0),s=d.useRef(null),t=()=>{o(i=>(i+1)%n.length)},c=()=>{o(i=>(i-1+n.length)%n.length)},a=()=>{s.current&&clearInterval(s.current),s.current=setInterval(()=>{t()},5e3)};d.useEffect(()=>(a(),()=>clearInterval(s.current)),[]);const h=()=>{t(),a()},l=()=>{c(),a()};return e.jsxs("div",{className:"slider-wrapper",children:[e.jsx("div",{className:"slider",style:{transform:`translateX(-${r*100}%)`},children:n.map((i,x)=>e.jsx("div",{className:"slide",children:e.jsx("img",{src:i,alt:`Imagen ${x+1}`})},x))}),e.jsx("button",{className:"prev",onClick:l,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-circle-arrow-left",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#626d6f",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"}),e.jsx("path",{d:"M8 12l4 4"}),e.jsx("path",{d:"M8 12h8"}),e.jsx("path",{d:"M12 8l-4 4"})]})}),e.jsx("button",{className:"next",onClick:h,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-circle-arrow-right",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#626d6f",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"}),e.jsx("path",{d:"M16 12l-4 -4"}),e.jsx("path",{d:"M16 12h-8"}),e.jsx("path",{d:"M12 16l4 -4"})]})})]})},M=({images:n,onClose:r})=>{const[o,s]=d.useState(null),[t,c]=d.useState(window.innerWidth>1450),a=l=>{s(l)},h=()=>{s(null)};return d.useEffect(()=>{const l=()=>{c(window.innerWidth>1450)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:n.length>=2?e.jsx("section",{className:"overlay",onClick:r,children:e.jsxs("article",{className:"gallery-container",onClick:l=>l.stopPropagation(),children:[e.jsx("div",{className:"gallery-thumbnails",children:n.map((l,i)=>e.jsx("img",{src:l,alt:`Gallery thumbnail ${i+1}`,className:"thumbnail-image",onClick:()=>a(l)},i))}),o&&e.jsx("section",{className:"overlay",children:e.jsxs("article",{className:"enlarged-image-container",children:[e.jsx("img",{src:o,alt:"Selected",className:"enlarged-image"}),e.jsx("button",{className:"close-selected",onClick:h,children:"×"})]})}),e.jsx("button",{className:"close-gallery",onClick:r,children:"×"})]})}):e.jsx("section",{className:"overlay",children:e.jsxs("article",{className:"enlarged-image-container",children:[e.jsx("img",{src:n,alt:"Selected",className:"enlarged-image"}),e.jsx("button",{className:"close-selected",onClick:r,children:"×"})]})})}):e.jsx(e.Fragment,{children:n.length>=2?e.jsx("section",{className:"overlay",children:e.jsxs("article",{className:"enlarged-image-container",children:[e.jsx("button",{className:"close-selected",onClick:r,children:"×"}),e.jsx(N,{imagenes:n})]})}):e.jsx("section",{className:"overlay",children:e.jsxs("article",{className:"enlarged-image-container",children:[e.jsx("img",{src:n,alt:"Selected",className:"enlarged-image"}),e.jsx("button",{className:"close-selected",onClick:r,children:"×"})]})})})})},S=({title:n,subtitle:r,content:o,images:s,instagram:t,facebook:c,website:a,github:h})=>{const[l,i]=d.useState(!1),x=()=>{i(!0)},v=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"link-card",onClick:x,children:[e.jsx("h2",{children:n}),e.jsx("h3",{children:r}),e.jsx("p",{children:o}),e.jsx("img",{src:s[0],alt:n,className:"card-image"}),e.jsx("p",{children:"Puedes ver más de este trabajo en:"}),e.jsxs("div",{className:"social-links",children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-brand-instagram",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"}),e.jsx("path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),e.jsx("path",{d:"M16.5 7.5l0 .01"})]})}),c&&e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-brand-facebook",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"})]})}),a&&e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-world-www",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"}),e.jsx("path",{d:"M11.5 3a16.989 16.989 0 0 0 -1.826 4"}),e.jsx("path",{d:"M12.5 3a16.989 16.989 0 0 1 1.828 4"}),e.jsx("path",{d:"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"}),e.jsx("path",{d:"M11.5 21a16.989 16.989 0 0 1 -1.826 -4"}),e.jsx("path",{d:"M12.5 21a16.989 16.989 0 0 0 1.828 -4"}),e.jsx("path",{d:"M2 10l1 4l1.5 -4l1.5 4l1 -4"}),e.jsx("path",{d:"M17 10l1 4l1.5 -4l1.5 4l1 -4"}),e.jsx("path",{d:"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"})]})}),h&&e.jsx("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-brand-github",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"})]})})]})]}),l&&e.jsx(M,{images:s,onClose:v})]})};export{S as default};
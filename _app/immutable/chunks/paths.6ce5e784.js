import{n as l,j as w,r as m,s as q,k as v}from"./scheduler.ef95bdc7.js";const c=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(q(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function B(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const s=[];let p=0,d=l;const g=()=>{if(p)return;d();const u=o(n?s[0]:s,f,t);b?f(u):d=v(u)?u:l},x=a.map((u,_)=>w(u,k=>{s[_]=k,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){m(x),d(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1602xyx)==null?void 0:h.base)??"/sveltekit-github-pages";var y;const E=((y=globalThis.__sveltekit_1602xyx)==null?void 0:y.assets)??T;export{E as a,T as b,B as d,A as w};
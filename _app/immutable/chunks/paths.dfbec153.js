import{n as l,j as w,r as m,s as q,k as x}from"./scheduler.ef95bdc7.js";const u=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(q(e,t)&&(e=t,r)){const i=!u.length;for(const s of n)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function B(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=o(n?s[0]:s,f,t);b?f(c):p=x(c)?c:l},v=a.map((c,_)=>w(c,k=>{s[_]=k,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){m(v),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1v2cd5i)==null?void 0:h.base)??"/sveltekit-github-pages";var y;const E=((y=globalThis.__sveltekit_1v2cd5i)==null?void 0:y.assets)??T;export{E as a,T as b,B as d,A as w};

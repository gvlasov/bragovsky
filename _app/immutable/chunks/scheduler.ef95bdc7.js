function w(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(j)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function U(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const c of n)c(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t){let n;return m(t,e=>n=e)(),n}function C(t,n,e){t.$$.on_destroy.push(m(n,e))}function D(t,n,e,c){if(t){const r=y(t,n,e,c);return t[0](r)}}function y(t,n,e,c){return t[1]&&c?E(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const r=t[2](c(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function H(t,n,e,c,r,a){if(r){const _=y(n,e,c,a);t.p(_,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){k().$$.on_mount.push(t)}function K(t){k().$$.after_update.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const l=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function q(){p||(p=!0,x.then(z))}function N(){return q(),x}function O(t){u.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<l.length;){const n=l[o];o++,h(n),M(n.$$)}}catch(n){throw l.length=0,o=0,n}for(h(null),l.length=0,o=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];u.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),u=n}export{q as A,K as a,b,C as c,L as d,D as e,I as f,B as g,G as h,S as i,m as j,F as k,A as l,z as m,w as n,J as o,U as p,O as q,v as r,P as s,N as t,H as u,Q as v,f as w,h as x,j as y,l as z};
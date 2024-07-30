const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BvqiXrT9.js","assets/AboutView-7hNdPMSG.css","assets/SignInView-BIeMgrWb.js","assets/SignInView-BLkQsJdF.css","assets/SignUpView-DK0ZIvCw.js","assets/SignUpView-TmNnpdsj.css","assets/DashBoard-BbcOx27j.js","assets/DashBoard-Bpj1ezFu.css","assets/pricingView-DA7SHInT.js","assets/pricingView-DpWwSwRg.css","assets/Services-BozoedPj.js","assets/Services-B8hNosUo.css","assets/Contact-osoUi1Ub.js","assets/Contact-CDiVg6uR.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ga(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const ie={},xn=[],Ue=()=>{},Nd=()=>!1,Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),va=e=>e.startsWith("onUpdate:"),ge=Object.assign,ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Md=Object.prototype.hasOwnProperty,q=(e,t)=>Md.call(e,t),$=Array.isArray,er=e=>Ui(e)==="[object Map]",Ld=e=>Ui(e)==="[object Set]",G=e=>typeof e=="function",_e=e=>typeof e=="string",Or=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Tl=e=>(ue(e)||G(e))&&G(e.then)&&G(e.catch),Dd=Object.prototype.toString,Ui=e=>Dd.call(e),Ud=e=>Ui(e).slice(8,-1),Fd=e=>Ui(e)==="[object Object]",ya=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tr=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bd=/-(\w)/g,rt=Fi(e=>e.replace(Bd,(t,n)=>n?n.toUpperCase():"")),jd=/\B([A-Z])/g,Vn=Fi(e=>e.replace(jd,"-$1").toLowerCase()),Bi=Fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),os=Fi(e=>e?`on${Bi(e)}`:""),Wt=(e,t)=>!Object.is(e,t),ai=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},kl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bo;const Cl=()=>bo||(bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_e(r)?Wd(r):_a(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(_e(e)||ue(e))return e}const Hd=/;(?![^(]*\))/g,Vd=/:([^]+)/,zd=/\/\*[^]*?\*\//g;function Wd(e){const t={};return e.replace(zd,"").split(Hd).forEach(n=>{if(n){const r=n.split(Vd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Lt(e){let t="";if(_e(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Lt(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=ga($d);function Rl(e){return!!e||e===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class Ol{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Kd(e){return new Ol(e)}function qd(e,t=Be){t&&t.active&&t.effects.push(e)}function Yd(){return Be}let un;class wa{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qd(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Jd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Yt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=jt,n=un;try{return jt=!0,un=this,this._runnings++,yo(this),this.fn()}finally{_o(this),this._runnings--,un=n,jt=t}}stop(){this.active&&(yo(this),_o(this),this.onStop&&this.onStop(),this.active=!1)}}function Jd(e){return e.value}function yo(e){e._trackId++,e._depsLength=0}function _o(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Pl(e.deps[t],e);e.deps.length=e._depsLength}}function Pl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let jt=!0,Ns=0;const xl=[];function qt(){xl.push(jt),jt=!1}function Yt(){const e=xl.pop();jt=e===void 0?!0:e}function Aa(){Ns++}function Ea(){for(Ns--;!Ns&&Ms.length;)Ms.shift()()}function Nl(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Pl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ms=[];function Ml(e,t,n){Aa();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ms.push(r.scheduler)))}Ea()}const Ll=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Ls=new WeakMap,fn=Symbol(""),Ds=Symbol("");function xe(e,t,n){if(jt&&un){let r=Ls.get(e);r||Ls.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ll(()=>r.delete(n))),Nl(un,i)}}function pt(e,t,n,r,i,s){const a=Ls.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&$(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||!Or(u)&&u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":$(e)?ya(n)&&o.push(a.get("length")):(o.push(a.get(fn)),er(e)&&o.push(a.get(Ds)));break;case"delete":$(e)||(o.push(a.get(fn)),er(e)&&o.push(a.get(Ds)));break;case"set":er(e)&&o.push(a.get(fn));break}Aa();for(const c of o)c&&Ml(c,4);Ea()}const Xd=ga("__proto__,__v_isRef,__isVue"),Dl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Or)),wo=Qd();function Qd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let s=0,a=this.length;s<a;s++)xe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qt(),Aa();const r=X(this)[t].apply(this,n);return Ea(),Yt(),r}}),e}function Zd(e){Or(e)||(e=String(e));const t=X(this);return xe(t,"has",e),t.hasOwnProperty(e)}class Ul{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?dh:Hl:s?jl:Bl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=$(t);if(!i){if(a&&q(wo,n))return Reflect.get(wo,n,r);if(n==="hasOwnProperty")return Zd}const o=Reflect.get(t,n,r);return(Or(n)?Dl.has(n):Xd(n))||(i||xe(t,"get",n),s)?o:Ne(o)?a&&ya(n)?o:o.value:ue(o)?i?zl(o):Hi(o):o}}class Fl extends Ul{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=hr(s);if(!yi(r)&&!hr(r)&&(s=X(s),r=X(r)),!$(t)&&Ne(s)&&!Ne(r))return c?!1:(s.value=r,!0)}const a=$(t)&&ya(n)?Number(n)<t.length:q(t,n),o=Reflect.set(t,n,r,i);return t===X(i)&&(a?Wt(r,s)&&pt(t,"set",n,r):pt(t,"add",n,r)),o}deleteProperty(t,n){const r=q(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&pt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Or(n)||!Dl.has(n))&&xe(t,"has",n),r}ownKeys(t){return xe(t,"iterate",$(t)?"length":fn),Reflect.ownKeys(t)}}class eh extends Ul{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const th=new Fl,nh=new eh,rh=new Fl(!0);const Ia=e=>e,ji=e=>Reflect.getPrototypeOf(e);function Wr(e,t,n=!1,r=!1){e=e.__v_raw;const i=X(e),s=X(t);n||(Wt(t,s)&&xe(i,"get",t),xe(i,"get",s));const{has:a}=ji(i),o=r?Ia:n?ka:pr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function $r(e,t=!1){const n=this.__v_raw,r=X(n),i=X(e);return t||(Wt(e,i)&&xe(r,"has",e),xe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Gr(e,t=!1){return e=e.__v_raw,!t&&xe(X(e),"iterate",fn),Reflect.get(e,"size",e)}function Ao(e){e=X(e);const t=X(this);return ji(t).has.call(t,e)||(t.add(e),pt(t,"add",e,e)),this}function Eo(e,t){t=X(t);const n=X(this),{has:r,get:i}=ji(n);let s=r.call(n,e);s||(e=X(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Wt(t,a)&&pt(n,"set",e,t):pt(n,"add",e,t),this}function Io(e){const t=X(this),{has:n,get:r}=ji(t);let i=n.call(t,e);i||(e=X(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pt(t,"delete",e,void 0),s}function So(){const e=X(this),t=e.size!==0,n=e.clear();return t&&pt(e,"clear",void 0,void 0),n}function Kr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=X(a),c=t?Ia:e?ka:pr;return!e&&xe(o,"iterate",fn),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function qr(e,t,n){return function(...r){const i=this.__v_raw,s=X(i),a=er(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?Ia:t?ka:pr;return!t&&xe(s,"iterate",c?Ds:fn),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:o?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ih(){const e={get(s){return Wr(this,s)},get size(){return Gr(this)},has:$r,add:Ao,set:Eo,delete:Io,clear:So,forEach:Kr(!1,!1)},t={get(s){return Wr(this,s,!1,!0)},get size(){return Gr(this)},has:$r,add:Ao,set:Eo,delete:Io,clear:So,forEach:Kr(!1,!0)},n={get(s){return Wr(this,s,!0)},get size(){return Gr(this,!0)},has(s){return $r.call(this,s,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Kr(!0,!1)},r={get(s){return Wr(this,s,!0,!0)},get size(){return Gr(this,!0)},has(s){return $r.call(this,s,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=qr(s,!1,!1),n[s]=qr(s,!0,!1),t[s]=qr(s,!1,!0),r[s]=qr(s,!0,!0)}),[e,n,t,r]}const[sh,ah,oh,ch]=ih();function Sa(e,t){const n=t?e?ch:oh:e?ah:sh;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(q(n,i)&&i in r?n:r,i,s)}const lh={get:Sa(!1,!1)},uh={get:Sa(!1,!0)},fh={get:Sa(!0,!1)};const Bl=new WeakMap,jl=new WeakMap,Hl=new WeakMap,dh=new WeakMap;function hh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ph(e){return e.__v_skip||!Object.isExtensible(e)?0:hh(Ud(e))}function Hi(e){return hr(e)?e:Ta(e,!1,th,lh,Bl)}function Vl(e){return Ta(e,!1,rh,uh,jl)}function zl(e){return Ta(e,!0,nh,fh,Hl)}function Ta(e,t,n,r,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=ph(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function nr(e){return hr(e)?nr(e.__v_raw):!!(e&&e.__v_isReactive)}function hr(e){return!!(e&&e.__v_isReadonly)}function yi(e){return!!(e&&e.__v_isShallow)}function Wl(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function $l(e){return Object.isExtensible(e)&&kl(e,"__v_skip",!0),e}const pr=e=>ue(e)?Hi(e):e,ka=e=>ue(e)?zl(e):e;class Gl{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wa(()=>t(this._value),()=>oi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=X(this);return(!t._cacheable||t.effect.dirty)&&Wt(t._value,t._value=t.effect.run())&&oi(t,4),Kl(t),t.effect._dirtyLevel>=2&&oi(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function mh(e,t,n=!1){let r,i;const s=G(e);return s?(r=e,i=Ue):(r=e.get,i=e.set),new Gl(r,i,s||!i,n)}function Kl(e){var t;jt&&un&&(e=X(e),Nl(un,(t=e.dep)!=null?t:e.dep=Ll(()=>e.dep=void 0,e instanceof Gl?e:void 0)))}function oi(e,t=4,n){e=X(e);const r=e.dep;r&&Ml(r,t)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function _i(e){return ql(e,!1)}function gh(e){return ql(e,!0)}function ql(e,t){return Ne(e)?e:new vh(e,t)}class vh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:pr(t)}get value(){return Kl(this),this._value}set value(t){const n=this.__v_isShallow||yi(t)||hr(t);t=n?t:X(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pr(t),oi(this,4))}}function be(e){return Ne(e)?e.value:e}const bh={get:(e,t,n)=>be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Yl(e){return nr(e)?e:new Proxy(e,bh)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ht(e,t,n,r){try{return r?e(...r):e()}catch(i){Vi(i,t,n)}}function Ve(e,t,n,r){if(G(e)){const i=Ht(e,t,n,r);return i&&Tl(i)&&i.catch(s=>{Vi(s,t,n)}),i}if($(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Ve(e[s],t,n,r));return i}}function Vi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){qt(),Ht(c,null,10,[e,a,o]),Yt();return}}yh(e,n,i,r)}function yh(e,t,n,r=!0){console.error(e)}let mr=!1,Us=!1;const Ae=[];let Xe=0;const Nn=[];let Pt=null,sn=0;const Jl=Promise.resolve();let Ca=null;function Xl(e){const t=Ca||Jl;return e?t.then(this?e.bind(this):e):t}function _h(e){let t=Xe+1,n=Ae.length;for(;t<n;){const r=t+n>>>1,i=Ae[r],s=gr(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function Ra(e){(!Ae.length||!Ae.includes(e,mr&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?Ae.push(e):Ae.splice(_h(e.id),0,e),Ql())}function Ql(){!mr&&!Us&&(Us=!0,Ca=Jl.then(eu))}function wh(e){const t=Ae.indexOf(e);t>Xe&&Ae.splice(t,1)}function Ah(e){$(e)?Nn.push(...e):(!Pt||!Pt.includes(e,e.allowRecurse?sn+1:sn))&&Nn.push(e),Ql()}function To(e,t,n=mr?Xe+1:0){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ae.splice(n,1),n--,r()}}}function Zl(e){if(Nn.length){const t=[...new Set(Nn)].sort((n,r)=>gr(n)-gr(r));if(Nn.length=0,Pt){Pt.push(...t);return}for(Pt=t,sn=0;sn<Pt.length;sn++)Pt[sn]();Pt=null,sn=0}}const gr=e=>e.id==null?1/0:e.id,Eh=(e,t)=>{const n=gr(e)-gr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eu(e){Us=!1,mr=!0,Ae.sort(Eh);try{for(Xe=0;Xe<Ae.length;Xe++){const t=Ae[Xe];t&&t.active!==!1&&Ht(t,null,14)}}finally{Xe=0,Ae.length=0,Zl(),mr=!1,Ca=null,(Ae.length||Nn.length)&&eu()}}function Ih(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:p}=r[u]||ie;p&&(i=n.map(m=>_e(m)?m.trim():m)),d&&(i=n.map(xs))}let o,c=r[o=os(t)]||r[o=os(rt(t))];!c&&s&&(c=r[o=os(Vn(t))]),c&&Ve(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ve(l,e,6,i)}}function tu(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!G(e)){const c=l=>{const u=tu(l,t,!0);u&&(o=!0,ge(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(ue(e)&&r.set(e,null),null):($(s)?s.forEach(c=>a[c]=null):ge(a,s),ue(e)&&r.set(e,a),a)}function zi(e,t){return!e||!Di(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Vn(t))||q(e,t))}let Oe=null,Wi=null;function wi(e){const t=Oe;return Oe=e,Wi=e&&e.type.__scopeId||null,t}function nu(e){Wi=e}function ru(){Wi=null}function ct(e,t=Oe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Uo(-1);const s=wi(t);let a;try{a=e(...i)}finally{wi(s),r._d&&Uo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function cs(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:c,render:l,renderCache:u,props:d,data:p,setupState:m,ctx:I,inheritAttrs:P}=e,U=wi(e);let b,_;try{if(n.shapeFlag&4){const B=i||r,W=B;b=Je(l.call(W,B,u,d,m,p,I)),_=o}else{const B=t;b=Je(B.length>1?B(d,{attrs:o,slots:a,emit:c}):B(d,null)),_=t.props?o:Sh(o)}}catch(B){ar.length=0,Vi(B,e,1),b=ne(vr)}let C=b;if(_&&P!==!1){const B=Object.keys(_),{shapeFlag:W}=C;B.length&&W&7&&(s&&B.some(va)&&(_=Th(_,s)),C=Fn(C,_,!1,!0))}return n.dirs&&(C=Fn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),b=C,wi(U),b}const Sh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Di(n))&&((t||(t={}))[n]=e[n]);return t},Th=(e,t)=>{const n={};for(const r in e)(!va(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kh(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ko(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(a[p]!==r[p]&&!zi(l,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?ko(r,a,l):!0:!!a;return!1}function ko(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!zi(n,s))return!0}return!1}function Ch({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const iu="components";function Rh(e,t){return Ph(iu,e,!0,t)||e}const Oh=Symbol.for("v-ndc");function Ph(e,t,n=!0,r=!1){const i=Oe||Ee;if(i){const s=i.type;if(e===iu){const o=Sp(s,!1);if(o&&(o===t||o===rt(t)||o===Bi(rt(t))))return s}const a=Co(i[e]||s[e],t)||Co(i.appContext[e],t);return!a&&r?s:a}}function Co(e,t){return e&&(e[t]||e[rt(t)]||e[Bi(rt(t))])}const xh=e=>e.__isSuspense;function Nh(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Ah(e)}const Mh=Symbol.for("v-scx"),Lh=()=>mt(Mh),Yr={};function rr(e,t,n){return su(e,t,n)}function su(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:a,onTrigger:o}=ie){if(t&&s){const F=t;t=(...Y)=>{F(...Y),W()}}const c=Ee,l=F=>r===!0?F:an(F,r===!1?1:void 0);let u,d=!1,p=!1;if(Ne(e)?(u=()=>e.value,d=yi(e)):nr(e)?(u=()=>l(e),d=!0):$(e)?(p=!0,d=e.some(F=>nr(F)||yi(F)),u=()=>e.map(F=>{if(Ne(F))return F.value;if(nr(F))return l(F);if(G(F))return Ht(F,c,2)})):G(e)?t?u=()=>Ht(e,c,2):u=()=>(m&&m(),Ve(e,c,3,[I])):u=Ue,t&&r){const F=u;u=()=>an(F())}let m,I=F=>{m=C.onStop=()=>{Ht(F,c,4),m=C.onStop=void 0}},P;if(Ki)if(I=Ue,t?n&&Ve(t,c,3,[u(),p?[]:void 0,I]):u(),i==="sync"){const F=Lh();P=F.__watcherHandles||(F.__watcherHandles=[])}else return Ue;let U=p?new Array(e.length).fill(Yr):Yr;const b=()=>{if(!(!C.active||!C.dirty))if(t){const F=C.run();(r||d||(p?F.some((Y,he)=>Wt(Y,U[he])):Wt(F,U)))&&(m&&m(),Ve(t,c,3,[F,U===Yr?void 0:p&&U[0]===Yr?[]:U,I]),U=F)}else C.run()};b.allowRecurse=!!t;let _;i==="sync"?_=b:i==="post"?_=()=>Re(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),_=()=>Ra(b));const C=new wa(u,Ue,_),B=Yd(),W=()=>{C.stop(),B&&ba(B.effects,C)};return t?n?b():U=C.run():i==="post"?Re(C.run.bind(C),c&&c.suspense):C.run(),P&&P.push(W),W}function Dh(e,t,n){const r=this.proxy,i=_e(e)?e.includes(".")?au(r,e):()=>r[e]:e.bind(r,r);let s;G(t)?s=t:(s=t.handler,n=t);const a=Nr(this),o=su(i,s.bind(r),n);return a(),o}function au(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function an(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ne(e))an(e.value,t,n);else if($(e))for(let r=0;r<e.length;r++)an(e[r],t,n);else if(Ld(e)||er(e))e.forEach(r=>{an(r,t,n)});else if(Fd(e))for(const r in e)an(e[r],t,n);return e}function HE(e,t){if(Oe===null)return e;const n=qi(Oe)||Oe.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,c=ie]=t[i];s&&(G(s)&&(s={mounted:s,updated:s}),s.deep&&an(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:c}))}return e}function en(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(qt(),Ve(c,n,8,[e.el,o,e,t]),Yt())}}/*! #__NO_SIDE_EFFECTS__ */function Pr(e,t){return G(e)?ge({name:e.name},t,{setup:e}):e}const ci=e=>!!e.type.__asyncLoader,ou=e=>e.type.__isKeepAlive;function Uh(e,t){cu(e,"a",t)}function Fh(e,t){cu(e,"da",t)}function cu(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if($i(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ou(i.parent.vnode)&&Bh(r,t,n,i),i=i.parent}}function Bh(e,t,n,r){const i=$i(t,e,r,!0);lu(()=>{ba(r[t],i)},n)}function $i(e,t,n=Ee,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;qt();const o=Nr(n),c=Ve(t,n,e,a);return o(),Yt(),c});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=Ee)=>(!Ki||e==="sp")&&$i(e,(...r)=>t(...r),n),jh=At("bm"),Hh=At("m"),Vh=At("bu"),zh=At("u"),Wh=At("bum"),lu=At("um"),$h=At("sp"),Gh=At("rtg"),Kh=At("rtc");function qh(e,t=Ee){$i("ec",e,t)}const Fs=e=>e?Eu(e)?qi(e)||e.proxy:Fs(e.parent):null,ir=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fs(e.parent),$root:e=>Fs(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ra(e.update)}),$nextTick:e=>e.n||(e.n=Xl.bind(e.proxy)),$watch:e=>Dh.bind(e)}),ls=(e,t)=>e!==ie&&!e.__isScriptSetup&&q(e,t),Yh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(ls(r,t))return a[t]=1,r[t];if(i!==ie&&q(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&q(l,t))return a[t]=3,s[t];if(n!==ie&&q(n,t))return a[t]=4,n[t];Bs&&(a[t]=0)}}const u=ir[t];let d,p;if(u)return t==="$attrs"&&xe(e.attrs,"get",""),u(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==ie&&q(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return ls(i,t)?(i[t]=n,!0):r!==ie&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ie&&q(e,a)||ls(t,a)||(o=s[0])&&q(o,a)||q(r,a)||q(ir,a)||q(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ro(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bs=!0;function Jh(e){const t=Oa(e),n=e.proxy,r=e.ctx;Bs=!1,t.beforeCreate&&Oo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:I,activated:P,deactivated:U,beforeDestroy:b,beforeUnmount:_,destroyed:C,unmounted:B,render:W,renderTracked:F,renderTriggered:Y,errorCaptured:he,serverPrefetch:fe,expose:Te,inheritAttrs:St,components:Zt,directives:$e,filters:Gn}=t;if(l&&Xh(l,r,null),a)for(const ee in a){const J=a[ee];G(J)&&(r[ee]=J.bind(n))}if(i){const ee=i.call(n,n);ue(ee)&&(e.data=Hi(ee))}if(Bs=!0,s)for(const ee in s){const J=s[ee],at=G(J)?J.bind(n,n):G(J.get)?J.get.bind(n,n):Ue,Tt=!G(J)&&G(J.set)?J.set.bind(n):Ue,Ge=ye({get:at,set:Tt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ke=>Ge.value=ke})}if(o)for(const ee in o)uu(o[ee],r,n,ee);if(c){const ee=G(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{li(J,ee[J])})}u&&Oo(u,e,"c");function pe(ee,J){$(J)?J.forEach(at=>ee(at.bind(n))):J&&ee(J.bind(n))}if(pe(jh,d),pe(Hh,p),pe(Vh,m),pe(zh,I),pe(Uh,P),pe(Fh,U),pe(qh,he),pe(Kh,F),pe(Gh,Y),pe(Wh,_),pe(lu,B),pe($h,fe),$(Te))if(Te.length){const ee=e.exposed||(e.exposed={});Te.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:at=>n[J]=at})})}else e.exposed||(e.exposed={});W&&e.render===Ue&&(e.render=W),St!=null&&(e.inheritAttrs=St),Zt&&(e.components=Zt),$e&&(e.directives=$e)}function Xh(e,t,n=Ue){$(e)&&(e=js(e));for(const r in e){const i=e[r];let s;ue(i)?"default"in i?s=mt(i.from||r,i.default,!0):s=mt(i.from||r):s=mt(i),Ne(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Oo(e,t,n){Ve($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function uu(e,t,n,r){const i=r.includes(".")?au(n,r):()=>n[r];if(_e(e)){const s=t[e];G(s)&&rr(i,s)}else if(G(e))rr(i,e.bind(n));else if(ue(e))if($(e))e.forEach(s=>uu(s,t,n,r));else{const s=G(e.handler)?e.handler.bind(n):t[e.handler];G(s)&&rr(i,s,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Ai(c,l,a,!0)),Ai(c,t,a)),ue(t)&&s.set(t,c),c}function Ai(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ai(e,s,n,!0),i&&i.forEach(a=>Ai(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Qh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Qh={data:Po,props:xo,emits:xo,methods:Jn,computed:Jn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Jn,directives:Jn,watch:ep,provide:Po,inject:Zh};function Po(e,t){return t?e?function(){return ge(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Zh(e,t){return Jn(js(e),js(t))}function js(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function Jn(e,t){return e?ge(Object.create(null),e,t):t}function xo(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:ge(Object.create(null),Ro(e),Ro(t??{})):t}function ep(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=Se(e[r],t[r]);return n}function fu(){return{app:null,config:{isNativeTag:Nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tp=0;function np(e,t){return function(r,i=null){G(r)||(r=ge({},r)),i!=null&&!ue(i)&&(i=null);const s=fu(),a=new WeakSet;let o=!1;const c=s.app={_uid:tp++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:kp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&G(l.install)?(a.add(l),l.install(c,...u)):G(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!o){const p=ne(r,i);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,l):e(p,l,d),o=!0,c._container=l,l.__vue_app__=c,qi(p.component)||p.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){const u=sr;sr=c;try{return l()}finally{sr=u}}};return c}}let sr=null;function li(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function mt(e,t,n=!1){const r=Ee||Oe;if(r||sr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&G(t)?t.call(r&&r.proxy):t}}const du={},hu=()=>Object.create(du),pu=e=>Object.getPrototypeOf(e)===du;function rp(e,t,n,r=!1){const i={},s=hu();e.propsDefaults=Object.create(null),mu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Vl(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function ip(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=X(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(zi(e.emitsOptions,p))continue;const m=t[p];if(c)if(q(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const I=rt(p);i[I]=Hs(c,o,I,m,e,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{mu(e,t,i,s)&&(l=!0);let u;for(const d in o)(!t||!q(t,d)&&((u=Vn(d))===d||!q(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Hs(c,o,d,void 0,e,!0)):delete i[d]);if(s!==o)for(const d in s)(!t||!q(t,d))&&(delete s[d],l=!0)}l&&pt(e.attrs,"set","")}function mu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(tr(c))continue;const l=t[c];let u;i&&q(i,u=rt(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:zi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=X(n),l=o||ie;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Hs(i,c,d,l[d],e,!q(l,d))}}return a}function Hs(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=q(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&G(c)){const{propsDefaults:l}=i;if(n in l)r=l[n];else{const u=Nr(i);r=l[n]=c.call(null,t),u()}}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Vn(n))&&(r=!0))}return r}function gu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!G(e)){const u=d=>{c=!0;const[p,m]=gu(d,t,!0);ge(a,p),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return ue(e)&&r.set(e,xn),xn;if($(s))for(let u=0;u<s.length;u++){const d=rt(s[u]);No(d)&&(a[d]=ie)}else if(s)for(const u in s){const d=rt(u);if(No(d)){const p=s[u],m=a[d]=$(p)||G(p)?{type:p}:ge({},p);if(m){const I=Do(Boolean,m.type),P=Do(String,m.type);m[0]=I>-1,m[1]=P<0||I<P,(I>-1||q(m,"default"))&&o.push(d)}}}const l=[a,o];return ue(e)&&r.set(e,l),l}function No(e){return e[0]!=="$"&&!tr(e)}function Mo(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Lo(e,t){return Mo(e)===Mo(t)}function Do(e,t){return $(t)?t.findIndex(n=>Lo(n,e)):G(t)&&Lo(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Pa=e=>$(e)?e.map(Je):[Je(e)],sp=(e,t,n)=>{if(t._n)return t;const r=ct((...i)=>Pa(t(...i)),n);return r._c=!1,r},bu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(vu(i))continue;const s=e[i];if(G(s))t[i]=sp(i,s,r);else if(s!=null){const a=Pa(s);t[i]=()=>a}}},yu=(e,t)=>{const n=Pa(t);e.slots.default=()=>n},ap=(e,t)=>{const n=e.slots=hu();if(e.vnode.shapeFlag&32){const r=t._;r?(ge(n,t),kl(n,"_",r,!0)):bu(t,n)}else t&&yu(e,t)},op=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ie;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(ge(i,t),!n&&o===1&&delete i._):(s=!t.$stable,bu(t,i)),a=t}else t&&(yu(e,t),a={default:1});if(s)for(const o in i)!vu(o)&&a[o]==null&&delete i[o]};function Vs(e,t,n,r,i=!1){if($(e)){e.forEach((p,m)=>Vs(p,t&&($(t)?t[m]:t),n,r,i));return}if(ci(r)&&!i)return;const s=r.shapeFlag&4?qi(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ie?o.refs={}:o.refs,d=o.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,q(d,l)&&(d[l]=null)):Ne(l)&&(l.value=null)),G(c))Ht(c,o,12,[a,u]);else{const p=_e(c),m=Ne(c);if(p||m){const I=()=>{if(e.f){const P=p?q(d,c)?d[c]:u[c]:c.value;i?$(P)&&ba(P,s):$(P)?P.includes(s)||P.push(s):p?(u[c]=[s],q(d,c)&&(d[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else p?(u[c]=a,q(d,c)&&(d[c]=a)):m&&(c.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,Re(I,n)):I()}}}const Re=Nh;function cp(e){return lp(e)}function lp(e,t){const n=Cl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Ue,insertStaticContent:I}=e,P=(f,h,g,w=null,v=null,S=null,O=void 0,E=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!qn(f,h)&&(w=y(f),ke(f,v,S,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:A,ref:M,shapeFlag:H}=h;switch(A){case Gi:U(f,h,g,w);break;case vr:b(f,h,g,w);break;case ui:f==null&&_(h,g,w,O);break;case Ye:Zt(f,h,g,w,v,S,O,E,T);break;default:H&1?W(f,h,g,w,v,S,O,E,T):H&6?$e(f,h,g,w,v,S,O,E,T):(H&64||H&128)&&A.process(f,h,g,w,v,S,O,E,T,D)}M!=null&&v&&Vs(M,f&&f.ref,S,h||f,!h)},U=(f,h,g,w)=>{if(f==null)r(h.el=o(h.children),g,w);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},b=(f,h,g,w)=>{f==null?r(h.el=c(h.children||""),g,w):h.el=f.el},_=(f,h,g,w)=>{[f.el,f.anchor]=I(f.children,h,g,w,f.el,f.anchor)},C=({el:f,anchor:h},g,w)=>{let v;for(;f&&f!==h;)v=p(f),r(f,g,w),f=v;r(h,g,w)},B=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),i(f),f=g;i(h)},W=(f,h,g,w,v,S,O,E,T)=>{h.type==="svg"?O="svg":h.type==="math"&&(O="mathml"),f==null?F(h,g,w,v,S,O,E,T):fe(f,h,v,S,O,E,T)},F=(f,h,g,w,v,S,O,E)=>{let T,A;const{props:M,shapeFlag:H,transition:j,dirs:z}=f;if(T=f.el=a(f.type,S,M&&M.is,M),H&8?u(T,f.children):H&16&&he(f.children,T,null,w,v,us(f,S),O,E),z&&en(f,null,w,"created"),Y(T,f,f.scopeId,O,w),M){for(const te in M)te!=="value"&&!tr(te)&&s(T,te,null,M[te],S,f.children,w,v,we);"value"in M&&s(T,"value",null,M.value,S),(A=M.onVnodeBeforeMount)&&qe(A,w,f)}z&&en(f,null,w,"beforeMount");const K=up(v,j);K&&j.beforeEnter(T),r(T,h,g),((A=M&&M.onVnodeMounted)||K||z)&&Re(()=>{A&&qe(A,w,f),K&&j.enter(T),z&&en(f,null,w,"mounted")},v)},Y=(f,h,g,w,v)=>{if(g&&m(f,g),w)for(let S=0;S<w.length;S++)m(f,w[S]);if(v){let S=v.subTree;if(h===S){const O=v.vnode;Y(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},he=(f,h,g,w,v,S,O,E,T=0)=>{for(let A=T;A<f.length;A++){const M=f[A]=E?xt(f[A]):Je(f[A]);P(null,M,h,g,w,v,S,O,E)}},fe=(f,h,g,w,v,S,O)=>{const E=h.el=f.el;let{patchFlag:T,dynamicChildren:A,dirs:M}=h;T|=f.patchFlag&16;const H=f.props||ie,j=h.props||ie;let z;if(g&&tn(g,!1),(z=j.onVnodeBeforeUpdate)&&qe(z,g,h,f),M&&en(h,f,g,"beforeUpdate"),g&&tn(g,!0),A?Te(f.dynamicChildren,A,E,g,w,us(h,v),S):O||J(f,h,E,null,g,w,us(h,v),S,!1),T>0){if(T&16)St(E,h,H,j,g,w,v);else if(T&2&&H.class!==j.class&&s(E,"class",null,j.class,v),T&4&&s(E,"style",H.style,j.style,v),T&8){const K=h.dynamicProps;for(let te=0;te<K.length;te++){const oe=K[te],me=H[oe],Fe=j[oe];(Fe!==me||oe==="value")&&s(E,oe,me,Fe,v,f.children,g,w,we)}}T&1&&f.children!==h.children&&u(E,h.children)}else!O&&A==null&&St(E,h,H,j,g,w,v);((z=j.onVnodeUpdated)||M)&&Re(()=>{z&&qe(z,g,h,f),M&&en(h,f,g,"updated")},w)},Te=(f,h,g,w,v,S,O)=>{for(let E=0;E<h.length;E++){const T=f[E],A=h[E],M=T.el&&(T.type===Ye||!qn(T,A)||T.shapeFlag&70)?d(T.el):g;P(T,A,M,null,w,v,S,O,!0)}},St=(f,h,g,w,v,S,O)=>{if(g!==w){if(g!==ie)for(const E in g)!tr(E)&&!(E in w)&&s(f,E,g[E],null,O,h.children,v,S,we);for(const E in w){if(tr(E))continue;const T=w[E],A=g[E];T!==A&&E!=="value"&&s(f,E,A,T,O,h.children,v,S,we)}"value"in w&&s(f,"value",g.value,w.value,O)}},Zt=(f,h,g,w,v,S,O,E,T)=>{const A=h.el=f?f.el:o(""),M=h.anchor=f?f.anchor:o("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:z}=h;z&&(E=E?E.concat(z):z),f==null?(r(A,g,w),r(M,g,w),he(h.children||[],g,M,v,S,O,E,T)):H>0&&H&64&&j&&f.dynamicChildren?(Te(f.dynamicChildren,j,g,v,S,O,E),(h.key!=null||v&&h===v.subTree)&&_u(f,h,!0)):J(f,h,g,M,v,S,O,E,T)},$e=(f,h,g,w,v,S,O,E,T)=>{h.slotScopeIds=E,f==null?h.shapeFlag&512?v.ctx.activate(h,g,w,O,T):Gn(h,g,w,v,S,O,T):wn(f,h,T)},Gn=(f,h,g,w,v,S,O)=>{const E=f.component=_p(f,w,v);if(ou(f)&&(E.ctx.renderer=D),wp(E),E.asyncDep){if(v&&v.registerDep(E,pe),!f.el){const T=E.subTree=ne(vr);b(null,T,h,g)}}else pe(E,f,h,g,v,S,O)},wn=(f,h,g)=>{const w=h.component=f.component;if(kh(f,h,g))if(w.asyncDep&&!w.asyncResolved){ee(w,h,g);return}else w.next=h,wh(w.update),w.effect.dirty=!0,w.update();else h.el=f.el,w.vnode=h},pe=(f,h,g,w,v,S,O)=>{const E=()=>{if(f.isMounted){let{next:M,bu:H,u:j,parent:z,vnode:K}=f;{const In=wu(f);if(In){M&&(M.el=K.el,ee(f,M,O)),In.asyncDep.then(()=>{f.isUnmounted||E()});return}}let te=M,oe;tn(f,!1),M?(M.el=K.el,ee(f,M,O)):M=K,H&&ai(H),(oe=M.props&&M.props.onVnodeBeforeUpdate)&&qe(oe,z,M,K),tn(f,!0);const me=cs(f),Fe=f.subTree;f.subTree=me,P(Fe,me,d(Fe.el),y(Fe),f,v,S),M.el=me.el,te===null&&Ch(f,me.el),j&&Re(j,v),(oe=M.props&&M.props.onVnodeUpdated)&&Re(()=>qe(oe,z,M,K),v)}else{let M;const{el:H,props:j}=h,{bm:z,m:K,parent:te}=f,oe=ci(h);if(tn(f,!1),z&&ai(z),!oe&&(M=j&&j.onVnodeBeforeMount)&&qe(M,te,h),tn(f,!0),H&&ce){const me=()=>{f.subTree=cs(f),ce(H,f.subTree,f,v,null)};oe?h.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=cs(f);P(null,me,g,w,f,v,S),h.el=me.el}if(K&&Re(K,v),!oe&&(M=j&&j.onVnodeMounted)){const me=h;Re(()=>qe(M,te,me),v)}(h.shapeFlag&256||te&&ci(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&Re(f.a,v),f.isMounted=!0,h=g=w=null}},T=f.effect=new wa(E,Ue,()=>Ra(A),f.scope),A=f.update=()=>{T.dirty&&T.run()};A.id=f.uid,tn(f,!0),A()},ee=(f,h,g)=>{h.component=f;const w=f.vnode.props;f.vnode=h,f.next=null,ip(f,h.props,w,g),op(f,h.children,g),qt(),To(f),Yt()},J=(f,h,g,w,v,S,O,E,T=!1)=>{const A=f&&f.children,M=f?f.shapeFlag:0,H=h.children,{patchFlag:j,shapeFlag:z}=h;if(j>0){if(j&128){Tt(A,H,g,w,v,S,O,E,T);return}else if(j&256){at(A,H,g,w,v,S,O,E,T);return}}z&8?(M&16&&we(A,v,S),H!==A&&u(g,H)):M&16?z&16?Tt(A,H,g,w,v,S,O,E,T):we(A,v,S,!0):(M&8&&u(g,""),z&16&&he(H,g,w,v,S,O,E,T))},at=(f,h,g,w,v,S,O,E,T)=>{f=f||xn,h=h||xn;const A=f.length,M=h.length,H=Math.min(A,M);let j;for(j=0;j<H;j++){const z=h[j]=T?xt(h[j]):Je(h[j]);P(f[j],z,g,null,v,S,O,E,T)}A>M?we(f,v,S,!0,!1,H):he(h,g,w,v,S,O,E,T,H)},Tt=(f,h,g,w,v,S,O,E,T)=>{let A=0;const M=h.length;let H=f.length-1,j=M-1;for(;A<=H&&A<=j;){const z=f[A],K=h[A]=T?xt(h[A]):Je(h[A]);if(qn(z,K))P(z,K,g,null,v,S,O,E,T);else break;A++}for(;A<=H&&A<=j;){const z=f[H],K=h[j]=T?xt(h[j]):Je(h[j]);if(qn(z,K))P(z,K,g,null,v,S,O,E,T);else break;H--,j--}if(A>H){if(A<=j){const z=j+1,K=z<M?h[z].el:w;for(;A<=j;)P(null,h[A]=T?xt(h[A]):Je(h[A]),g,K,v,S,O,E,T),A++}}else if(A>j)for(;A<=H;)ke(f[A],v,S,!0),A++;else{const z=A,K=A,te=new Map;for(A=K;A<=j;A++){const Me=h[A]=T?xt(h[A]):Je(h[A]);Me.key!=null&&te.set(Me.key,A)}let oe,me=0;const Fe=j-K+1;let In=!1,mo=0;const Kn=new Array(Fe);for(A=0;A<Fe;A++)Kn[A]=0;for(A=z;A<=H;A++){const Me=f[A];if(me>=Fe){ke(Me,v,S,!0);continue}let Ke;if(Me.key!=null)Ke=te.get(Me.key);else for(oe=K;oe<=j;oe++)if(Kn[oe-K]===0&&qn(Me,h[oe])){Ke=oe;break}Ke===void 0?ke(Me,v,S,!0):(Kn[Ke-K]=A+1,Ke>=mo?mo=Ke:In=!0,P(Me,h[Ke],g,null,v,S,O,E,T),me++)}const go=In?fp(Kn):xn;for(oe=go.length-1,A=Fe-1;A>=0;A--){const Me=K+A,Ke=h[Me],vo=Me+1<M?h[Me+1].el:w;Kn[A]===0?P(null,Ke,g,vo,v,S,O,E,T):In&&(oe<0||A!==go[oe]?Ge(Ke,g,vo,2):oe--)}}},Ge=(f,h,g,w,v=null)=>{const{el:S,type:O,transition:E,children:T,shapeFlag:A}=f;if(A&6){Ge(f.component.subTree,h,g,w);return}if(A&128){f.suspense.move(h,g,w);return}if(A&64){O.move(f,h,g,D);return}if(O===Ye){r(S,h,g);for(let H=0;H<T.length;H++)Ge(T[H],h,g,w);r(f.anchor,h,g);return}if(O===ui){C(f,h,g);return}if(w!==2&&A&1&&E)if(w===0)E.beforeEnter(S),r(S,h,g),Re(()=>E.enter(S),v);else{const{leave:H,delayLeave:j,afterLeave:z}=E,K=()=>r(S,h,g),te=()=>{H(S,()=>{K(),z&&z()})};j?j(S,K,te):te()}else r(S,h,g)},ke=(f,h,g,w=!1,v=!1)=>{const{type:S,props:O,ref:E,children:T,dynamicChildren:A,shapeFlag:M,patchFlag:H,dirs:j}=f;if(E!=null&&Vs(E,null,g,f,!0),M&256){h.ctx.deactivate(f);return}const z=M&1&&j,K=!ci(f);let te;if(K&&(te=O&&O.onVnodeBeforeUnmount)&&qe(te,h,f),M&6)zr(f.component,g,w);else{if(M&128){f.suspense.unmount(g,w);return}z&&en(f,null,h,"beforeUnmount"),M&64?f.type.remove(f,h,g,v,D,w):A&&(S!==Ye||H>0&&H&64)?we(A,h,g,!1,!0):(S===Ye&&H&384||!v&&M&16)&&we(T,h,g),w&&An(f)}(K&&(te=O&&O.onVnodeUnmounted)||z)&&Re(()=>{te&&qe(te,h,f),z&&en(f,null,h,"unmounted")},g)},An=f=>{const{type:h,el:g,anchor:w,transition:v}=f;if(h===Ye){En(g,w);return}if(h===ui){B(f);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:E}=v,T=()=>O(g,S);E?E(f.el,S,T):T()}else S()},En=(f,h)=>{let g;for(;f!==h;)g=p(f),i(f),f=g;i(h)},zr=(f,h,g)=>{const{bum:w,scope:v,update:S,subTree:O,um:E}=f;w&&ai(w),v.stop(),S&&(S.active=!1,ke(O,f,h,g)),E&&Re(E,h),Re(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},we=(f,h,g,w=!1,v=!1,S=0)=>{for(let O=S;O<f.length;O++)ke(f[O],h,g,w,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let N=!1;const R=(f,h,g)=>{f==null?h._vnode&&ke(h._vnode,null,null,!0):P(h._vnode||null,f,h,null,null,null,g),N||(N=!0,To(),Zl(),N=!1),h._vnode=f},D={p:P,um:ke,m:Ge,r:An,mt:Gn,mc:he,pc:J,pbc:Te,n:y,o:e};let Q,ce;return{render:R,hydrate:Q,createApp:np(R,Q)}}function us({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function up(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _u(e,t,n=!1){const r=e.children,i=t.children;if($(r)&&$(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=xt(i[s]),o.el=a.el),n||_u(a,o)),o.type===Gi&&(o.el=a.el)}}function fp(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function wu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wu(t)}const dp=e=>e.__isTeleport,Ye=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),ui=Symbol.for("v-stc"),ar=[];let je=null;function xa(e=!1){ar.push(je=e?null:[])}function hp(){ar.pop(),je=ar[ar.length-1]||null}let br=1;function Uo(e){br+=e}function pp(e){return e.dynamicChildren=br>0?je||xn:null,hp(),br>0&&je&&je.push(e),e}function Na(e,t,n,r,i,s){return pp(k(e,t,n,r,i,s,!0))}function zs(e){return e?e.__v_isVNode===!0:!1}function qn(e,t){return e.type===t.type&&e.key===t.key}const Au=({key:e})=>e??null,fi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Ne(e)||G(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,r=0,i=null,s=e===Ye?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Au(t),ref:t&&fi(t),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return o?(Ma(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),br>0&&!a&&je&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&je.push(c),c}const ne=mp;function mp(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Oh)&&(e=vr),zs(e)){const o=Fn(e,t,!0);return n&&Ma(o,n),br>0&&!s&&je&&(o.shapeFlag&6?je[je.indexOf(e)]=o:je.push(o)),o.patchFlag|=-2,o}if(Tp(e)&&(e=e.__vccOpts),t){t=gp(t);let{class:o,style:c}=t;o&&!_e(o)&&(t.class=Lt(o)),ue(c)&&(Wl(c)&&!$(c)&&(c=ge({},c)),t.style=_a(c))}const a=_e(e)?1:xh(e)?128:dp(e)?64:ue(e)?4:G(e)?2:0;return k(e,t,n,r,i,a,s,!0)}function gp(e){return e?Wl(e)||pu(e)?ge({},e):e:null}function Fn(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:c}=e,l=t?vp(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Au(l),ref:t&&t.ref?n&&s?$(s)?s.concat(fi(t)):[s,fi(t)]:fi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(u.transition=c.clone(u)),u}function lt(e=" ",t=0){return ne(Gi,null,e,t)}function xr(e,t){const n=ne(ui,null,e);return n.staticCount=t,n}function Je(e){return e==null||typeof e=="boolean"?ne(vr):$(e)?ne(Ye,null,e.slice()):typeof e=="object"?xt(e):ne(Gi,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fn(e)}function Ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ma(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!pu(t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function vp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Lt([t.class,r.class]));else if(i==="style")t.style=_a([t.style,r.style]);else if(Di(i)){const s=t[i],a=r[i];a&&s!==a&&!($(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function qe(e,t,n,r=null){Ve(e,t,7,[n,r])}const bp=fu();let yp=0;function _p(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||bp,s={uid:yp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gu(r,i),emitsOptions:tu(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ih.bind(null,s),e.ce&&e.ce(s),s}let Ee=null,Ei,Ws;{const e=Cl(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Ei=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Ws=t("__VUE_SSR_SETTERS__",n=>Ki=n)}const Nr=e=>{const t=Ee;return Ei(e),e.scope.on(),()=>{e.scope.off(),Ei(t)}},Fo=()=>{Ee&&Ee.scope.off(),Ei(null)};function Eu(e){return e.vnode.shapeFlag&4}let Ki=!1;function wp(e,t=!1){t&&Ws(t);const{props:n,children:r}=e.vnode,i=Eu(e);rp(e,n,i,t),ap(e,r);const s=i?Ap(e,t):void 0;return t&&Ws(!1),s}function Ap(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yh);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Ip(e):null,s=Nr(e);qt();const a=Ht(r,e,0,[e.props,i]);if(Yt(),s(),Tl(a)){if(a.then(Fo,Fo),t)return a.then(o=>{Bo(e,o,t)}).catch(o=>{Vi(o,e,0)});e.asyncDep=a}else Bo(e,a,t)}else Iu(e,t)}function Bo(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Yl(t)),Iu(e,n)}let jo;function Iu(e,t,n){const r=e.type;if(!e.render){if(!t&&jo&&!r.render){const i=r.template||Oa(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=ge(ge({isCustomElement:s,delimiters:o},a),c);r.render=jo(i,l)}}e.render=r.render||Ue}{const i=Nr(e);qt();try{Jh(e)}finally{Yt(),i()}}}const Ep={get(e,t){return xe(e,"get",""),e[t]}};function Ip(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ep),slots:e.slots,emit:e.emit,expose:t}}function qi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yl($l(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ir)return ir[n](e)},has(t,n){return n in t||n in ir}}))}function Sp(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Tp(e){return G(e)&&"__vccOpts"in e}const ye=(e,t)=>mh(e,t,Ki);function La(e,t,n){const r=arguments.length;return r===2?ue(t)&&!$(t)?zs(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zs(n)&&(n=[n]),ne(e,t,n))}const kp="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cp="http://www.w3.org/2000/svg",Rp="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,Ho=Nt&&Nt.createElement("template"),Op={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Nt.createElementNS(Cp,e):t==="mathml"?Nt.createElementNS(Rp,e):Nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ho.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const o=Ho.content;if(r==="svg"||r==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pp=Symbol("_vtc");function xp(e,t,n){const r=e[Pp];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Vo=Symbol("_vod"),Np=Symbol("_vsh"),Mp=Symbol(""),Lp=/(^|;)\s*display\s*:/;function Dp(e,t,n){const r=e.style,i=_e(n);let s=!1;if(n&&!i){if(t)if(_e(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&di(r,o,"")}else for(const a in t)n[a]==null&&di(r,a,"");for(const a in n)a==="display"&&(s=!0),di(r,a,n[a])}else if(i){if(t!==n){const a=r[Mp];a&&(n+=";"+a),r.cssText=n,s=Lp.test(n)}}else t&&e.removeAttribute("style");Vo in e&&(e[Vo]=s?r.display:"",e[Np]&&(r.display="none"))}const zo=/\s*!important$/;function di(e,t,n){if($(n))n.forEach(r=>di(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Up(e,t);zo.test(n)?e.setProperty(Vn(r),n.replace(zo,""),"important"):e[r]=n}}const Wo=["Webkit","Moz","ms"],fs={};function Up(e,t){const n=fs[t];if(n)return n;let r=rt(t);if(r!=="filter"&&r in e)return fs[t]=r;r=Bi(r);for(let i=0;i<Wo.length;i++){const s=Wo[i]+r;if(s in e)return fs[t]=s}return t}const $o="http://www.w3.org/1999/xlink";function Fp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($o,t.slice(6,t.length)):e.setAttributeNS($o,t,n);else{const s=Gd(t);n==null||s&&!Rl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Bp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Rl(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Sn(e,t,n,r){e.addEventListener(t,n,r)}function jp(e,t,n,r){e.removeEventListener(t,n,r)}const Go=Symbol("_vei");function Hp(e,t,n,r,i=null){const s=e[Go]||(e[Go]={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Vp(t);if(r){const l=s[t]=$p(r,i);Sn(e,o,l,c)}else a&&(jp(e,o,a,c),s[t]=void 0)}}const Ko=/(?:Once|Passive|Capture)$/;function Vp(e){let t;if(Ko.test(e)){t={};let r;for(;r=e.match(Ko);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vn(e.slice(2)),t]}let ds=0;const zp=Promise.resolve(),Wp=()=>ds||(zp.then(()=>ds=0),ds=Date.now());function $p(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(Gp(r,n.value),t,5,[r])};return n.value=e,n.attached=Wp(),n}function Gp(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const qo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Kp=(e,t,n,r,i,s,a,o,c)=>{const l=i==="svg";t==="class"?xp(e,r,l):t==="style"?Dp(e,n,r):Di(t)?va(t)||Hp(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qp(e,t,r,l))?Bp(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Fp(e,t,r,l))};function qp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&qo(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return qo(t)&&_e(n)?!1:t in e}const Yo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>ai(t,n):t};function Yp(e){e.target.composing=!0}function Jo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hs=Symbol("_assign"),VE={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[hs]=Yo(i);const s=r||i.props&&i.props.type==="number";Sn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=xs(o)),e[hs](o)}),n&&Sn(e,"change",()=>{e.value=e.value.trim()}),t||(Sn(e,"compositionstart",Yp),Sn(e,"compositionend",Jo),Sn(e,"change",Jo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[hs]=Yo(s),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?xs(e.value):e.value,o=t??"";a!==o&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===o)||(e.value=o))}},Jp=["ctrl","shift","alt","meta"],Xp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jp.some(n=>e[`${n}Key`]&&!t.includes(n))},zE=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=Xp[t[a]];if(o&&o(i,t))return}return e(i,...s)})},Qp=ge({patchProp:Kp},Op);let Xo;function Zp(){return Xo||(Xo=cp(Qp))}const em=(...e)=>{const t=Zp().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=nm(r);if(!i)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,tm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function tm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nm(e){return _e(e)?document.querySelector(e):e}var rm=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const im=Symbol();var Qo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Qo||(Qo={}));function sm(){const e=Kd(!0),t=e.run(()=>_i({}));let n=[],r=[];const i=$l({install(s){i._a=s,s.provide(im,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!rm?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}function Zo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zo(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ii(e){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(e)}function am(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function om(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cm(e,t,n){return t&&om(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return um(e)||dm(e,t)||Su(e,t)||pm()}function Mr(e){return lm(e)||fm(e)||Su(e)||hm()}function lm(e){if(Array.isArray(e))return $s(e)}function um(e){if(Array.isArray(e))return e}function fm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Su(e,t){if(e){if(typeof e=="string")return $s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $s(e,t)}}function $s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ec=function(){},Ua={},Tu={},ku=null,Cu={mark:ec,measure:ec};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(Tu=document),typeof MutationObserver<"u"&&(ku=MutationObserver),typeof performance<"u"&&(Cu=performance)}catch{}var mm=Ua.navigator||{},tc=mm.userAgent,nc=tc===void 0?"":tc,$t=Ua,ae=Tu,rc=ku,Jr=Cu;$t.document;var Et=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",Ru=~nc.indexOf("MSIE")||~nc.indexOf("Trident/"),Xr,Qr,Zr,ei,ti,vt="___FONT_AWESOME___",Gs=16,Ou="fa",Pu="svg-inline--fa",dn="data-fa-i2svg",Ks="data-fa-pseudo-element",gm="data-fa-pseudo-element-pending",Fa="data-prefix",Ba="data-icon",ic="fontawesome-i2svg",vm="async",bm=["HTML","HEAD","STYLE","SCRIPT"],xu=function(){try{return!0}catch{return!1}}(),se="classic",le="sharp",ja=[se,le];function Lr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[se]}})}var yr=Lr((Xr={},de(Xr,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),de(Xr,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Xr)),_r=Lr((Qr={},de(Qr,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Qr,le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Qr)),wr=Lr((Zr={},de(Zr,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Zr,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Zr)),ym=Lr((ei={},de(ei,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(ei,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ei)),_m=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Nu="fa-layers-text",wm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Am=Lr((ti={},de(ti,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(ti,le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ti)),Mu=[1,2,3,4,5,6,7,8,9,10],Em=Mu.concat([11,12,13,14,15,16,17,18,19,20]),Im=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],on={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ar=new Set;Object.keys(_r[se]).map(Ar.add.bind(Ar));Object.keys(_r[le]).map(Ar.add.bind(Ar));var Sm=[].concat(ja,Mr(Ar),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",on.GROUP,on.SWAP_OPACITY,on.PRIMARY,on.SECONDARY]).concat(Mu.map(function(e){return"".concat(e,"x")})).concat(Em.map(function(e){return"w-".concat(e)})),or=$t.FontAwesomeConfig||{};function Tm(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function km(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Cm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Cm.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],i=km(Tm(n));i!=null&&(or[r]=i)})}var Lu={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ou,replacementClass:Pu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};or.familyPrefix&&(or.cssPrefix=or.familyPrefix);var Bn=x(x({},Lu),or);Bn.autoReplaceSvg||(Bn.observeMutations=!1);var L={};Object.keys(Lu).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Bn[e]=n,cr.forEach(function(r){return r(L)})},get:function(){return Bn[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Bn.cssPrefix=t,cr.forEach(function(n){return n(L)})},get:function(){return Bn.cssPrefix}});$t.FontAwesomeConfig=L;var cr=[];function Rm(e){return cr.push(e),function(){cr.splice(cr.indexOf(e),1)}}var Ct=Gs,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Om(e){if(!(!e||!Et)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ae.head.insertBefore(t,r),e}}var Pm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Er(){for(var e=12,t="";e-- >0;)t+=Pm[Math.random()*62|0];return t}function zn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ha(e){return e.classList?zn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Du(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Du(e[n]),'" ')},"").trim()}function Yi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Va(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function Nm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Mm(e){var t=e.transform,n=e.width,r=n===void 0?Gs:n,i=e.height,s=i===void 0?Gs:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&Ru?c+="translate(".concat(t.x/Ct-r/2,"em, ").concat(t.y/Ct-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):c+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),c+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Lm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uu(){var e=Ou,t=Pu,n=L.cssPrefix,r=L.replacementClass,i=Lm;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var sc=!1;function ps(){L.autoAddCss&&!sc&&(Om(Uu()),sc=!0)}var Dm={mixout:function(){return{dom:{css:Uu,insertCss:ps}}},hooks:function(){return{beforeDOMElementCreation:function(){ps()},beforeI2svg:function(){ps()}}}},bt=$t||{};bt[vt]||(bt[vt]={});bt[vt].styles||(bt[vt].styles={});bt[vt].hooks||(bt[vt].hooks={});bt[vt].shims||(bt[vt].shims=[]);var He=bt[vt],Fu=[],Um=function e(){ae.removeEventListener("DOMContentLoaded",e),Si=1,Fu.map(function(t){return t()})},Si=!1;Et&&(Si=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Si||ae.addEventListener("DOMContentLoaded",Um));function Fm(e){Et&&(Si?setTimeout(e,0):Fu.push(e))}function Dr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Du(e):"<".concat(t," ").concat(xm(r),">").concat(s.map(Dr).join(""),"</").concat(t,">")}function ac(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ms=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function Bm(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function qs(e){var t=Bm(e);return t.length===1?t[0].toString(16):null}function jm(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ys(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=oc(t);typeof He.hooks.addPack=="function"&&!i?He.hooks.addPack(e,oc(t)):He.styles[e]=x(x({},He.styles[e]||{}),s),e==="fas"&&Ys("fa",t)}var ni,ri,ii,Rn=He.styles,Hm=He.shims,Vm=(ni={},de(ni,se,Object.values(wr[se])),de(ni,le,Object.values(wr[le])),ni),za=null,Bu={},ju={},Hu={},Vu={},zu={},zm=(ri={},de(ri,se,Object.keys(yr[se])),de(ri,le,Object.keys(yr[le])),ri);function Wm(e){return~Sm.indexOf(e)}function $m(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Wm(i)?i:null}var Wu=function(){var t=function(s){return ms(Rn,function(a,o,c){return a[c]=ms(o,s,{}),a},{})};Bu=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),ju=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),zu=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in Rn||L.autoFetchSvg,r=ms(Hm,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Hu=r.names,Vu=r.unicodes,za=Ji(L.styleDefault,{family:L.familyDefault})};Rm(function(e){za=Ji(e.styleDefault,{family:L.familyDefault})});Wu();function Wa(e,t){return(Bu[e]||{})[t]}function Gm(e,t){return(ju[e]||{})[t]}function cn(e,t){return(zu[e]||{})[t]}function $u(e){return Hu[e]||{prefix:null,iconName:null}}function Km(e){var t=Vu[e],n=Wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return za}var $a=function(){return{prefix:null,iconName:null,rest:[]}};function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?se:n,i=yr[r][e],s=_r[r][e]||_r[r][i],a=e in He.styles?e:null;return s||a||null}var cc=(ii={},de(ii,se,Object.keys(wr[se])),de(ii,le,Object.keys(wr[le])),ii);function Xi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},de(t,se,"".concat(L.cssPrefix,"-").concat(se)),de(t,le,"".concat(L.cssPrefix,"-").concat(le)),t),a=null,o=se;(e.includes(s[se])||e.some(function(l){return cc[se].includes(l)}))&&(o=se),(e.includes(s[le])||e.some(function(l){return cc[le].includes(l)}))&&(o=le);var c=e.reduce(function(l,u){var d=$m(L.cssPrefix,u);if(Rn[u]?(u=Vm[o].includes(u)?ym[o][u]:u,a=u,l.prefix=u):zm[o].indexOf(u)>-1?(a=u,l.prefix=Ji(u,{family:o})):d?l.iconName=d:u!==L.replacementClass&&u!==s[se]&&u!==s[le]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var p=a==="fa"?$u(l.iconName):{},m=cn(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||m||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Rn.far&&Rn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},$a());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===le&&(Rn.fass||L.autoFetchSvg)&&(c.prefix="fass",c.iconName=cn(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Gt()||"fas"),c}var qm=function(){function e(){am(this,e),this.definitions={}}return cm(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=x(x({},n.definitions[o]||{}),a[o]),Ys(o,a[o]);var c=wr[se][o];c&&Ys(c,a[o]),Wu()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[o][d]=l)}),n[o][c]=l}),n}}]),e}(),lc=[],On={},Mn={},Ym=Object.keys(Mn);function Jm(e,t){var n=t.mixoutsTo;return lc=e,On={},Object.keys(Mn).forEach(function(r){Ym.indexOf(r)===-1&&delete Mn[r]}),lc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ii(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){On[a]||(On[a]=[]),On[a].push(s[a])})}r.provides&&r.provides(Mn)}),n}function Js(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=On[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function hn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=On[e]||[];i.forEach(function(s){s.apply(null,n)})}function yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mn[e]?Mn[e].apply(null,t):void 0}function Xs(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gt();if(t)return t=cn(n,t)||t,ac(Gu.definitions,n,t)||ac(He.styles,n,t)}var Gu=new qm,Xm=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,hn("noAuto")},Qm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(hn("beforeI2svg",t),yt("pseudoElements2svg",t),yt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Fm(function(){eg({autoReplaceSvgRoot:n}),hn("watch",t)})}},Zm={icon:function(t){if(t===null)return null;if(Ii(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:cn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ji(t[0]);return{prefix:r,iconName:cn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(_m))){var i=Xi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gt(),iconName:cn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Gt();return{prefix:s,iconName:cn(s,t)||t}}}},De={noAuto:Xm,config:L,dom:Qm,parse:Zm,library:Gu,findIconDefinition:Xs,toHtml:Dr},eg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(He.styles).length>0||L.autoFetchSvg)&&Et&&L.autoReplaceSvg&&De.dom.i2svg({node:r})};function Qi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Dr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Et){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tg(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Va(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=Yi(x(x({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function ng(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:a}),children:r}]}]}function Ga(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,m=p===void 0?!1:p,I=r.found?r:n,P=I.width,U=I.height,b=i==="fak",_=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(fe){return d.classes.indexOf(fe)===-1}).filter(function(fe){return fe!==""||!!fe}).concat(d.classes).join(" "),C={children:[],attributes:x(x({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(U)})},B=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/U*16*.0625,"em")}:{};m&&(C.attributes[dn]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||Er())},children:[c]}),delete C.attributes.title);var W=x(x({},C),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:x(x({},B),d.styles)}),F=r.found&&n.found?yt("generateAbstractMask",W)||{children:[],attributes:{}}:yt("generateAbstractIcon",W)||{children:[],attributes:{}},Y=F.children,he=F.attributes;return W.children=Y,W.attributes=he,o?ng(W):tg(W)}function uc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=x(x(x({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[dn]="");var u=x({},a.styles);Va(i)&&(u.transform=Mm({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=Yi(u);d.length>0&&(l.style=d);var p=[];return p.push({tag:"span",attributes:l,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function rg(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Yi(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var gs=He.styles;function Qs(e){var t=e[0],n=e[1],r=e.slice(4),i=Da(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(on.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(on.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(on.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var ig={found:!1,width:512,height:512};function sg(e,t){!xu&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zs(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Gt()),new Promise(function(r,i){if(yt("missingIconAbstract"),n==="fa"){var s=$u(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&gs[t]&&gs[t][e]){var a=gs[t][e];return r(Qs(a))}sg(e,t),r(x(x({},ig),{},{icon:L.showMissingIcons&&e?yt("missingIconAbstract")||{}:{}}))})}var fc=function(){},ea=L.measurePerformance&&Jr&&Jr.mark&&Jr.measure?Jr:{mark:fc,measure:fc},Xn='FA "6.5.2"',ag=function(t){return ea.mark("".concat(Xn," ").concat(t," begins")),function(){return Ku(t)}},Ku=function(t){ea.mark("".concat(Xn," ").concat(t," ends")),ea.measure("".concat(Xn," ").concat(t),"".concat(Xn," ").concat(t," begins"),"".concat(Xn," ").concat(t," ends"))},Ka={begin:ag,end:Ku},hi=function(){};function dc(e){var t=e.getAttribute?e.getAttribute(dn):null;return typeof t=="string"}function og(e){var t=e.getAttribute?e.getAttribute(Fa):null,n=e.getAttribute?e.getAttribute(Ba):null;return t&&n}function cg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function lg(){if(L.autoReplaceSvg===!0)return pi.replace;var e=pi[L.autoReplaceSvg];return e||pi.replace}function ug(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function fg(e){return ae.createElement(e)}function qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ug:fg:n;if(typeof e=="string")return ae.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(qu(a,{ceFn:r}))}),i}function dg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(qu(i),n)}),n.getAttribute(dn)===null&&L.keepOriginalSource){var r=ae.createComment(dg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ha(n).indexOf(L.replacementClass))return pi.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===L.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Dr(o)}).join(`
`);n.setAttribute(dn,""),n.innerHTML=a}};function hc(e){e()}function Yu(e,t){var n=typeof t=="function"?t:hi;if(e.length===0)n();else{var r=hc;L.mutateApproach===vm&&(r=$t.requestAnimationFrame||hc),r(function(){var i=lg(),s=Ka.begin("mutate");e.map(i),s(),n()})}}var qa=!1;function Ju(){qa=!0}function ta(){qa=!1}var Ti=null;function pc(e){if(rc&&L.observeMutations){var t=e.treeCallback,n=t===void 0?hi:t,r=e.nodeCallback,i=r===void 0?hi:r,s=e.pseudoElementsCallback,a=s===void 0?hi:s,o=e.observeMutationsRoot,c=o===void 0?ae:o;Ti=new rc(function(l){if(!qa){var u=Gt();zn(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!dc(d.addedNodes[0])&&(L.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&dc(d.target)&&~Im.indexOf(d.attributeName))if(d.attributeName==="class"&&og(d.target)){var p=Xi(Ha(d.target)),m=p.prefix,I=p.iconName;d.target.setAttribute(Fa,m||u),I&&d.target.setAttribute(Ba,I)}else cg(d.target)&&i(d.target)})}}),Et&&Ti.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hg(){Ti&&Ti.disconnect()}function pg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function mg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Xi(Ha(e));return i.prefix||(i.prefix=Gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Gm(i.prefix,e.innerText)||Wa(i.prefix,qs(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function gg(e){var t=zn(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Er()):(t["aria-hidden"]="true",t.focusable="false")),t}function vg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mg(e),r=n.iconName,i=n.prefix,s=n.rest,a=gg(e),o=Js("parseNodeAttributes",{},e),c=t.styleParser?pg(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var bg=He.styles;function Xu(e){var t=L.autoReplaceSvg==="nest"?mc(e,{styleParser:!1}):mc(e);return~t.extra.classes.indexOf(Nu)?yt("generateLayersText",e,t):yt("generateSvgReplacementMutation",e,t)}var Kt=new Set;ja.map(function(e){Kt.add("fa-".concat(e))});Object.keys(yr[se]).map(Kt.add.bind(Kt));Object.keys(yr[le]).map(Kt.add.bind(Kt));Kt=Mr(Kt);function gc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(ic,"-").concat(d))},i=function(d){return n.remove("".concat(ic,"-").concat(d))},s=L.autoFetchSvg?Kt:ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(bg));s.includes("fa")||s.push("fa");var a=[".".concat(Nu,":not([").concat(dn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(dn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=zn(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ka.begin("onTree"),l=o.reduce(function(u,d){try{var p=Xu(d);p&&u.push(p)}catch(m){xu||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,d){Promise.all(l).then(function(p){Yu(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(p){c(),d(p)})})}function yg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xu(e).then(function(n){n&&Yu([n],t)})}function _g(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xs(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Xs(i||{})),e(r,x(x({},n),{},{mask:i}))}}var wg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Qe:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,d=n.title,p=d===void 0?null:d,m=n.titleId,I=m===void 0?null:m,P=n.classes,U=P===void 0?[]:P,b=n.attributes,_=b===void 0?{}:b,C=n.styles,B=C===void 0?{}:C;if(t){var W=t.prefix,F=t.iconName,Y=t.icon;return Qi(x({type:"icon"},t),function(){return hn("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(p?_["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(I||Er()):(_["aria-hidden"]="true",_.focusable="false")),Ga({icons:{main:Qs(Y),mask:c?Qs(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:F,transform:x(x({},Qe),i),symbol:a,title:p,maskId:u,titleId:I,extra:{attributes:_,styles:B,classes:U}})})}},Ag={mixout:function(){return{icon:_g(wg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gc,n.nodeCallback=yg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ae:r,s=n.callback,a=s===void 0?function(){}:s;return gc(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,d=r.maskId,p=r.extra;return new Promise(function(m,I){Promise.all([Zs(i,o),u.iconName?Zs(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var U=Da(P,2),b=U[0],_=U[1];m([n,Ga({icons:{main:b,mask:_},prefix:o,iconName:i,transform:c,symbol:l,maskId:d,title:s,titleId:a,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=Yi(o);c.length>0&&(i.style=c);var l;return Va(a)&&(l=yt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},Eg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Qi({type:"layer"},function(){hn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Mr(s)).join(" ")},children:a}]})}}}},Ig={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,d=u===void 0?{}:u;return Qi({type:"counter",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),rg({content:n.toString(),title:s,extra:{attributes:l,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Mr(o))}})})}}}},Sg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Qe:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,d=u===void 0?{}:u,p=r.styles,m=p===void 0?{}:p;return Qi({type:"text",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),uc({content:n,transform:x(x({},Qe),s),title:o,extra:{attributes:d,styles:m,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Mr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(Ru){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return L.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,uc({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},Tg=new RegExp('"',"ug"),vc=[1105920,1112319];function kg(e){var t=e.replace(Tg,""),n=jm(t,0),r=n>=vc[0]&&n<=vc[1],i=t.length===2?t[0]===t[1]:!1;return{value:qs(i?t[0]:t),isSecondary:r||i}}function bc(e,t){var n="".concat(gm).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=zn(e.children),a=s.filter(function(Y){return Y.getAttribute(Ks)===t})[0],o=$t.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(wm),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var d=o.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?le:se,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?_r[p][c[2].toLowerCase()]:Am[p][l],I=kg(d),P=I.value,U=I.isSecondary,b=c[0].startsWith("FontAwesome"),_=Wa(m,P),C=_;if(b){var B=Km(P);B.iconName&&B.prefix&&(_=B.iconName,m=B.prefix)}if(_&&!U&&(!a||a.getAttribute(Fa)!==m||a.getAttribute(Ba)!==C)){e.setAttribute(n,C),a&&e.removeChild(a);var W=vg(),F=W.extra;F.attributes[Ks]=t,Zs(_,m).then(function(Y){var he=Ga(x(x({},W),{},{icons:{main:Y,mask:$a()},prefix:m,iconName:C,extra:F,watchable:!0})),fe=ae.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(fe,e.firstChild):e.appendChild(fe),fe.outerHTML=he.map(function(Te){return Dr(Te)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cg(e){return Promise.all([bc(e,"::before"),bc(e,"::after")])}function Rg(e){return e.parentNode!==document.head&&!~bm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ks)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yc(e){if(Et)return new Promise(function(t,n){var r=zn(e.querySelectorAll("*")).filter(Rg).map(Cg),i=Ka.begin("searchPseudoElements");Ju(),Promise.all(r).then(function(){i(),ta(),t()}).catch(function(){i(),ta(),n()})})}var Og={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ae:r;L.searchPseudoElements&&yc(i)}}},_c=!1,Pg={mixout:function(){return{dom:{unwatch:function(){Ju(),_c=!0}}}},hooks:function(){return{bootstrap:function(){pc(Js("mutationObserverCallbacks",{}))},noAuto:function(){hg()},watch:function(n){var r=n.observeMutationsRoot;_c?ta():pc(Js("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},xg={mixout:function(){return{parse:{transform:function(n){return wc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=wc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:x({},m.outer),children:[{tag:"g",attributes:x({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),m.path)}]}]}}}},vs={x:0,y:0,width:"100%",height:"100%"};function Ac(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ng(e){return e.tag==="g"?e.children:[e]}var Mg={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Xi(i.split(" ").map(function(a){return a.trim()})):$a();return s.prefix||(s.prefix=Gt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,d=a.width,p=a.icon,m=Nm({transform:c,containerWidth:d,iconWidth:l}),I={tag:"rect",attributes:x(x({},vs),{},{fill:"white"})},P=u.children?{children:u.children.map(Ac)}:{},U={tag:"g",attributes:x({},m.inner),children:[Ac(x({tag:u.tag,attributes:x(x({},u.attributes),m.path)},P))]},b={tag:"g",attributes:x({},m.outer),children:[U]},_="mask-".concat(o||Er()),C="clip-".concat(o||Er()),B={tag:"mask",attributes:x(x({},vs),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Ng(p)},B]};return r.push(W,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(_,")")},vs)}),{children:r,attributes:i}}}},Lg={provides:function(t){var n=!1;$t.matchMedia&&(n=$t.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=x(x({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:x(x({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dg={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Ug=[Dm,Ag,Eg,Ig,Sg,Og,Pg,xg,Mg,Lg,Dg];Jm(Ug,{mixoutsTo:De});De.noAuto;De.config;var Fg=De.library;De.dom;var na=De.parse;De.findIconDefinition;De.toHtml;var Bg=De.icon;De.layer;De.text;De.counter;function Ec(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ec(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ec(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hg(e){var t=jg(e,"string");return typeof t=="symbol"?t:t+""}function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function Ce(e,t,n){return t=Hg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zg(e,t){if(e==null)return{};var n=Vg(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qu={exports:{}};(function(e){(function(t){var n=function(b,_,C){if(!l(_)||d(_)||p(_)||m(_)||c(_))return _;var B,W=0,F=0;if(u(_))for(B=[],F=_.length;W<F;W++)B.push(n(b,_[W],C));else{B={};for(var Y in _)Object.prototype.hasOwnProperty.call(_,Y)&&(B[b(Y,C)]=n(b,_[Y],C))}return B},r=function(b,_){_=_||{};var C=_.separator||"_",B=_.split||/(?=[A-Z])/;return b.split(B).join(C)},i=function(b){return I(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,C){return C?C.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(b,_){return r(b,_).toLowerCase()},o=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},d=function(b){return o.call(b)=="[object Date]"},p=function(b){return o.call(b)=="[object RegExp]"},m=function(b){return o.call(b)=="[object Boolean]"},I=function(b){return b=b-0,b===b},P=function(b,_){var C=_&&"process"in _?_.process:_;return typeof C!="function"?b:function(B,W){return C(B,b,W)}},U={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,_){return n(P(i,_),b)},decamelizeKeys:function(b,_){return n(P(a,_),b,_)},pascalizeKeys:function(b,_){return n(P(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Wg)})(Qu);var $g=Qu.exports,Gg=["class","style"];function Kg(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=$g.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function qg(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Zu(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=qg(u);break;case"style":c.style=Kg(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=zg(n,Gg);return La(e.tag,ut(ut(ut({},t),{},{class:i.class,style:ut(ut({},i.style),a)},i.attrs),o),r)}var ef=!1;try{ef=!0}catch{}function Yg(){if(!ef&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ce({},e,t):{}}function Jg(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),Ce(Ce(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ic(e){if(e&&ki(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(na.icon)return na.icon(e);if(e===null)return null;if(ki(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Tn=Pr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ye(function(){return Ic(t.icon)}),s=ye(function(){return bs("classes",Jg(t))}),a=ye(function(){return bs("transform",typeof t.transform=="string"?na.transform(t.transform):t.transform)}),o=ye(function(){return bs("mask",Ic(t.mask))}),c=ye(function(){return Bg(i.value,ut(ut(ut(ut({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});rr(c,function(u){if(!u)return Yg("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=ye(function(){return c.value?Zu(c.value.abstract[0],{},r):null});return function(){return l.value}}}),Xg={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Qg={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Sc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Zg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,d=(s&3)<<4|o>>4;let p=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||d==null)throw new ev;const p=s<<2|o>>4;if(r.push(p),l!==64){const m=o<<4&240|l>>2;if(r.push(m),d!==64){const I=l<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tv=function(e){const t=tf(e);return nf.encodeByteArray(t,!0)},rf=function(e){return tv(e).replace(/\./g,"")},sf=function(e){try{return nf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=()=>nv().__FIREBASE_DEFAULTS__,iv=()=>{if(typeof process>"u"||typeof Sc>"u")return;const e=Sc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},sv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sf(e[1]);return t&&JSON.parse(t)},Ya=()=>{try{return rv()||iv()||sv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},av=e=>{var t,n;return(n=(t=Ya())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},af=()=>{var e;return(e=Ya())===null||e===void 0?void 0:e.config},of=e=>{var t;return(t=Ya())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function cf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uv(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function fv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="FirebaseError";class st extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=dv,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?hv(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new st(i,o,r)}}function hv(e,t){return e.replace(pv,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const pv=/\{\$([^}]+)}/g;function mv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ir(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Tc(s)&&Tc(a)){if(!Ir(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Zn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function gv(e,t){const n=new vv(e,t);return n.subscribe.bind(n)}class vv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bv(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ys),i.error===void 0&&(i.error=ys),i.complete===void 0&&(i.complete=ys);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ys(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=1e3,_v=2,wv=4*60*60*1e3,Av=.5;function kc(e,t=yv,n=_v){const r=t*Math.pow(n,e),i=Math.round(Av*r*(Math.random()-.5)*2);return Math.min(wv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e&&e._delegate?e._delegate:e}class it{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ov;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sv(t))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rn){return this.instances.has(t)}getOptions(t=rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=rn){return this.component?this.component.multipleInstances?t:rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iv(e){return e===rn?void 0:e}function Sv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ev(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const kv={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Cv=re.INFO,Rv={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Ov=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Rv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ja{constructor(t){this.name=t,this._logLevel=Cv,this._logHandler=Ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const Pv=(e,t)=>t.some(n=>e instanceof n);let Cc,Rc;function xv(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nv(){return Rc||(Rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,ra=new WeakMap,df=new WeakMap,_s=new WeakMap,Xa=new WeakMap;function Mv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Vt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&ff.set(n,e)}).catch(()=>{}),Xa.set(t,e),t}function Lv(e){if(ra.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ra.set(e,t)}let ia={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ra.get(e);if(t==="objectStoreNames")return e.objectStoreNames||df.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Dv(e){ia=e(ia)}function Uv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ws(this),t,...n);return df.set(r,t.sort?t.sort():[t]),Vt(r)}:Nv().includes(e)?function(...t){return e.apply(ws(this),t),Vt(ff.get(this))}:function(...t){return Vt(e.apply(ws(this),t))}}function Fv(e){return typeof e=="function"?Uv(e):(e instanceof IDBTransaction&&Lv(e),Pv(e,xv())?new Proxy(e,ia):e)}function Vt(e){if(e instanceof IDBRequest)return Mv(e);if(_s.has(e))return _s.get(e);const t=Fv(e);return t!==e&&(_s.set(e,t),Xa.set(t,e)),t}const ws=e=>Xa.get(e);function hf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Vt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Vt(a.result),c.oldVersion,c.newVersion,Vt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Bv=["get","getKey","getAll","getAllKeys","count"],jv=["put","add","delete","clear"],As=new Map;function Oc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=jv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bv.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return As.set(t,s),s}Dv(e=>({...e,get:(t,n,r)=>Oc(t,n)||e.get(t,n,r),has:(t,n)=>!!Oc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sa="@firebase/app",Pc="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Ja("@firebase/app"),zv="@firebase/app-compat",Wv="@firebase/analytics-compat",$v="@firebase/analytics",Gv="@firebase/app-check-compat",Kv="@firebase/app-check",qv="@firebase/auth",Yv="@firebase/auth-compat",Jv="@firebase/database",Xv="@firebase/database-compat",Qv="@firebase/functions",Zv="@firebase/functions-compat",eb="@firebase/installations",tb="@firebase/installations-compat",nb="@firebase/messaging",rb="@firebase/messaging-compat",ib="@firebase/performance",sb="@firebase/performance-compat",ab="@firebase/remote-config",ob="@firebase/remote-config-compat",cb="@firebase/storage",lb="@firebase/storage-compat",ub="@firebase/firestore",fb="@firebase/vertexai-preview",db="@firebase/firestore-compat",hb="firebase",pb="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]",mb={[sa]:"fire-core",[zv]:"fire-core-compat",[$v]:"fire-analytics",[Wv]:"fire-analytics-compat",[Kv]:"fire-app-check",[Gv]:"fire-app-check-compat",[qv]:"fire-auth",[Yv]:"fire-auth-compat",[Jv]:"fire-rtdb",[Xv]:"fire-rtdb-compat",[Qv]:"fire-fn",[Zv]:"fire-fn-compat",[eb]:"fire-iid",[tb]:"fire-iid-compat",[nb]:"fire-fcm",[rb]:"fire-fcm-compat",[ib]:"fire-perf",[sb]:"fire-perf-compat",[ab]:"fire-rc",[ob]:"fire-rc-compat",[cb]:"fire-gcs",[lb]:"fire-gcs-compat",[ub]:"fire-fst",[db]:"fire-fst-compat",[fb]:"fire-vertex","fire-js":"fire-js",[hb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,gb=new Map,oa=new Map;function xc(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _t(e){const t=e.name;if(oa.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;oa.set(t,e);for(const n of Ci.values())xc(n,e);for(const n of gb.values())xc(n,e);return!0}function Wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ze(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new yn("app","Firebase",vb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=pb;function pf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=af()),!n)throw zt.create("no-options");const s=Ci.get(i);if(s){if(Ir(n,s.options)&&Ir(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const a=new Tv(i);for(const c of oa.values())a.addComponent(c);const o=new bb(n,r,a);return Ci.set(i,o),o}function mf(e=aa){const t=Ci.get(e);if(!t&&e===aa&&af())return pf();if(!t)throw zt.create("no-app",{appName:e});return t}function et(e,t,n){var r;let i=(r=mb[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pn.warn(o.join(" "));return}_t(new it(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="firebase-heartbeat-database",_b=1,Sr="firebase-heartbeat-store";let Es=null;function gf(){return Es||(Es=hf(yb,_b,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Sr)}catch(n){console.warn(n)}}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),Es}async function wb(e){try{const n=(await gf()).transaction(Sr),r=await n.objectStore(Sr).get(vf(e));return await n.done,r}catch(t){if(t instanceof st)pn.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pn.warn(n.message)}}}async function Nc(e,t){try{const r=(await gf()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(t,vf(e)),await r.done}catch(n){if(n instanceof st)pn.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function vf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=1024,Eb=30*24*60*60*1e3;class Ib{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Eb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mc(),{heartbeatsToSend:r,unsentEntries:i}=Sb(this._heartbeatsCache.heartbeats),s=rf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mc(){return new Date().toISOString().substring(0,10)}function Sb(e,t=Ab){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Lc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lc(e){return rf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(e){_t(new it("platform-logger",t=>new Hv(t),"PRIVATE")),_t(new it("heartbeat",t=>new Ib(t),"PRIVATE")),et(sa,Pc,e),et(sa,Pc,"esm2017"),et("fire-js","")}kb("");var Cb="firebase",Rb="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Cb,Rb,"app");const bf="@firebase/installations",Qa="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=1e4,_f=`w:${Qa}`,wf="FIS_v2",Ob="https://firebaseinstallations.googleapis.com/v1",Pb=60*60*1e3,xb="installations",Nb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mn=new yn(xb,Nb,Mb);function Af(e){return e instanceof st&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef({projectId:e}){return`${Ob}/projects/${e}/installations`}function If(e){return{token:e.token,requestStatus:2,expiresIn:Db(e.expiresIn),creationTime:Date.now()}}async function Sf(e,t){const r=(await t.json()).error;return mn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Tf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Lb(e,{refreshToken:t}){const n=Tf(e);return n.append("Authorization",Ub(t)),n}async function kf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Db(e){return Number(e.replace("s","000"))}function Ub(e){return`${wf} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ef(e),i=Tf(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:wf,appId:e.appId,sdkVersion:_f},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await kf(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:If(l.authToken)}}else throw await Sf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=/^[cdef][\w-]{21}$/,ca="";function Hb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Vb(e);return jb.test(n)?n:ca}catch{return ca}}function Vb(e){return Bb(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function Of(e,t){const n=Zi(e);Pf(n,t),zb(n,t)}function Pf(e,t){const n=Rf.get(e);if(n)for(const r of n)r(t)}function zb(e,t){const n=Wb();n&&n.postMessage({key:e,fid:t}),$b()}let ln=null;function Wb(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=e=>{Pf(e.data.key,e.data.fid)}),ln}function $b(){Rf.size===0&&ln&&(ln.close(),ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="firebase-installations-database",Kb=1,gn="firebase-installations-store";let Is=null;function Za(){return Is||(Is=hf(Gb,Kb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(gn)}}})),Is}async function Ri(e,t){const n=Zi(e),i=(await Za()).transaction(gn,"readwrite"),s=i.objectStore(gn),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&Of(e,t.fid),t}async function xf(e){const t=Zi(e),r=(await Za()).transaction(gn,"readwrite");await r.objectStore(gn).delete(t),await r.done}async function es(e,t){const n=Zi(e),i=(await Za()).transaction(gn,"readwrite"),s=i.objectStore(gn),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&Of(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e){let t;const n=await es(e.appConfig,r=>{const i=qb(r),s=Yb(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ca?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function qb(e){const t=e||{fid:Hb(),registrationStatus:0};return Nf(t)}function Yb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Jb(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Xb(e)}:{installationEntry:t}}async function Jb(e,t){try{const n=await Fb(e,t);return Ri(e.appConfig,n)}catch(n){throw Af(n)&&n.customData.serverCode===409?await xf(e.appConfig):await Ri(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Xb(e){let t=await Dc(e.appConfig);for(;t.registrationStatus===1;)await Cf(100),t=await Dc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await eo(e);return r||n}return t}function Dc(e){return es(e,t=>{if(!t)throw mn.create("installation-not-found");return Nf(t)})}function Nf(e){return Qb(e)?{fid:e.fid,registrationStatus:0}:e}function Qb(e){return e.registrationStatus===1&&e.registrationTime+yf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb({appConfig:e,heartbeatServiceProvider:t},n){const r=ey(e,n),i=Lb(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:_f,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await kf(()=>fetch(r,o));if(c.ok){const l=await c.json();return If(l)}else throw await Sf("Generate Auth Token",c)}function ey(e,{fid:t}){return`${Ef(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e,t=!1){let n;const r=await es(e.appConfig,s=>{if(!Mf(s))throw mn.create("not-registered");const a=s.authToken;if(!t&&ry(a))return s;if(a.requestStatus===1)return n=ty(e,t),s;{if(!navigator.onLine)throw mn.create("app-offline");const o=sy(s);return n=ny(e,o),o}});return n?await n:r.authToken}async function ty(e,t){let n=await Uc(e.appConfig);for(;n.authToken.requestStatus===1;)await Cf(100),n=await Uc(e.appConfig);const r=n.authToken;return r.requestStatus===0?to(e,t):r}function Uc(e){return es(e,t=>{if(!Mf(t))throw mn.create("not-registered");const n=t.authToken;return ay(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ny(e,t){try{const n=await Zb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ri(e.appConfig,r),n}catch(n){if(Af(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ri(e.appConfig,r)}throw n}}function Mf(e){return e!==void 0&&e.registrationStatus===2}function ry(e){return e.requestStatus===2&&!iy(e)}function iy(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pb}function sy(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ay(e){return e.requestStatus===1&&e.requestTime+yf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(e){const t=e,{installationEntry:n,registrationPromise:r}=await eo(t);return r?r.catch(console.error):to(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(e,t=!1){const n=e;return await ly(n),(await to(n,t)).token}async function ly(e){const{registrationPromise:t}=await eo(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e){if(!e||!e.options)throw Ss("App Configuration");if(!e.name)throw Ss("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ss(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ss(e){return mn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="installations",fy="installations-internal",dy=e=>{const t=e.getProvider("app").getImmediate(),n=uy(t),r=Wn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hy=e=>{const t=e.getProvider("app").getImmediate(),n=Wn(t,Lf).getImmediate();return{getId:()=>oy(n),getToken:i=>cy(n,i)}};function py(){_t(new it(Lf,dy,"PUBLIC")),_t(new it(fy,hy,"PRIVATE"))}py();et(bf,Qa);et(bf,Qa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="analytics",my="firebase_id",gy="origin",vy=60*1e3,by="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",no="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Ja("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new yn("analytics","Analytics",yy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(e){if(!e.startsWith(no)){const t=Le.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function Df(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function wy(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ay(e,t){const n=wy("firebase-js-sdk-policy",{createScriptURL:_y}),r=document.createElement("script"),i=`${no}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ey(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Iy(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await Df(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){Pe.error(o)}e("config",i,s)}async function Sy(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await Df(n);for(const c of a){const l=o.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Pe.error(s)}}function Ty(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await Sy(e,t,n,o,c)}else if(s==="config"){const[o,c]=a;await Iy(e,t,n,r,o,c)}else if(s==="consent"){const[o]=a;e("consent","update",o)}else if(s==="get"){const[o,c,l]=a;e("get",o,c,l)}else if(s==="set"){const[o]=a;e("set",o)}else e(s,...a)}catch(o){Pe.error(o)}}return i}function ky(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Ty(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Cy(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(no)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=30,Oy=1e3;class Py{constructor(t={},n=Oy){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Uf=new Py;function xy(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ny(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:xy(r)},s=by.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function My(e,t=Uf,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Le.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Le.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Uy;return setTimeout(async()=>{o.abort()},vy),Ff({appId:r,apiKey:i,measurementId:s},a,o,t)}async function Ff(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Uf){var s;const{appId:a,measurementId:o}=e;try{await Ly(r,t)}catch(c){if(o)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await Ny(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Dy(l)){if(i.deleteThrottleMetadata(a),o)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?kc(n,i.intervalMillis,Ry):kc(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,d),Pe.debug(`Calling attemptFetch again in ${u} millis`),Ff(e,d,r,i)}}function Ly(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Le.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Dy(e){if(!(e instanceof st)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Uy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fy(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(){if(lf())try{await uf()}catch(e){return Pe.warn(Le.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Pe.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jy(e,t,n,r,i,s,a){var o;const c=My(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Pe.error(m)),t.push(c);const l=By().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([c,l]);Cy(s)||Ay(s,u.measurementId),i("js",new Date);const p=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return p[gy]="firebase",p.update=!0,d!=null&&(p[my]=d),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t){this.app=t}_delete(){return delete lr[this.app.options.appId],Promise.resolve()}}let lr={},Fc=[];const Bc={};let Ts="dataLayer",Vy="gtag",jc,Bf,Hc=!1;function zy(){const e=[];if(cf()&&e.push("This is a browser extension environment."),fv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Le.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function Wy(e,t,n){zy();const r=e.options.appId;if(!r)throw Le.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(lr[r]!=null)throw Le.create("already-exists",{id:r});if(!Hc){Ey(Ts);const{wrappedGtag:s,gtagCore:a}=ky(lr,Fc,Bc,Ts,Vy);Bf=s,jc=a,Hc=!0}return lr[r]=jy(e,Fc,Bc,t,jc,Ts,n),new Hy(e)}function $y(e=mf()){e=It(e);const t=Wn(e,Oi);return t.isInitialized()?t.getImmediate():Gy(e)}function Gy(e,t={}){const n=Wn(e,Oi);if(n.isInitialized()){const i=n.getImmediate();if(Ir(t,n.getOptions()))return i;throw Le.create("already-initialized")}return n.initialize({options:t})}function Ky(e,t,n,r){e=It(e),Fy(Bf,lr[e.app.options.appId],t,n,r).catch(i=>Pe.error(i))}const Vc="@firebase/analytics",zc="0.10.3";function qy(){_t(new it(Oi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Wy(r,i,n)},"PUBLIC")),_t(new it("analytics-internal",e,"PRIVATE")),et(Vc,zc),et(Vc,zc,"esm2017");function e(t){try{const n=t.getProvider(Oi).getImmediate();return{logEvent:(r,i,s)=>Ky(n,r,i,s)}}catch(n){throw Le.create("interop-component-reg-failed",{reason:n})}}}qy();const Yy="/Educrib/assets/logo2-oKvlNTEA.png",Jy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHdSURBVHgBzZiBdYIwEIYPJ3AEnEBHoJPYDeoGpRNgJ9ANOgJ0gtoJoBPgBtc7COp7JSEXEprvvVOfyp+fS0KSS8ARRMzobUvB7zuKtQrmStGo+KaokiSpIDRkak3xStGinJriRJGCb5SxAv1x8maUhF7QLWNT1BR7mAP6zZqOAqRg36UlLkfJbUoMlrg8pa25JbpVRzFl7hnnwZMpR8MMtdA46C5MsZ9ZrpzRYhxZ6LSjOqoBV45giaVeMZY9V2oUzECBbqe5Utfl4E5O6+wV/HMfizhv7O1AgEC35f+vsN+VpOAIZe+iMbLHkSUS7OHFIuMuziAMOdy3X67s2OAWwpDCfLoMphAv29gNrhPhwP0DTZJk7Pu5ujd9qZDOkC3S9riLQzxkfXGN3WDDBi8QLz9s8BPi5RJ7BqtuRqqF2WlZCviYaUh6M2y33iE+Kn4ZMsjZa8GBgBnckHQ3i0FtOGPK4pnN8Yfb3ass1iAciwEy2FA8DQZXDw1xFt/g/8kHc6PQjR9RgEHHBbvTIQpKHwYNKV9gCwqKRwYNCSVKikcPjUx2t+FaW6wP/bqGuF5TBzDIJ74D+AD7ysPZo0HumbknPqPR2sHgUPnyb0xjIOMGDb/zTXxgX+POwJFfGkmAPrcTxfoAAAAASUVORK5CYII=",Xy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgB7ZjLThRBGIVPj4pCVMYQL4kbb6hRoqhxw0YfwKXuNG70PXBnWPEMwAp4CEjY0QkQLmFBCBsWEAiXwHCnOZVqkqHqn9Az1ZOphPqSk6qpqZmcU32r/oFAIBAIXGWiyyYkSdLB5iP1lHpEtVGtVEuqItVM3Sr72TXqrvFX29RJ2ed9ao/aoEppf4tao1aoRWoiiqIZ1AKNf6DipPGMU52VfEaVzLMZg15hH1BHqItHY8r8olKAmM0n+EXMAJ/NQSsAzb9hMws/ecsQc+UDBWHSO/hLhzkgBXgNf3llDkgBnsNf2s0BKcB9+EubOSAFaIUbv6hl1IeiOSAFuAcHeJcYYPOS+gf9dM0Ty5sU4A4cYYgS1c2uuiUPIz/M7YkY4CZygiGWqB/sfqUm4U6TOVDIMskVhhiFfrL/ht6o1UqmADdQBxjilOpj9wX09XGA6rl8cbmVOEkcQEY4tZ0aTKrj2PyfAhpLMxyRAhyijnAVi9R/dqepb6gOy9t1YdIRLr5d5QJNq8X6SfVQD1EbmQLkfgRo/gubXqoTbljepFOolruDCI0/oYbYHYG7eUWmANtwhKZbqG521cvHd+THljkgnUKbcIDG1XmuLtLHyB/LmxRgA270o35Y3qRTaB3+YnmTAizAXyxvUoB5+IvlTQowDX+xyj1WgLTuEsM/YrMmpKi0mfsLXc7zhV3qj/SFGIBJ1dtTFzWOxqM8iHVRRdby+nvqGfQm7AF1G7rwq1pVKWhK++eohTGrG+opelr2eQd6a7CZ9ktpq97YVqHL65M07muZMxAIBAIecAbAxYUV4GZWtwAAAABJRU5ErkJggg==",Qy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK5SURBVHgB7ZlLbhNBEIbLAcYLyAEgzoZYCFYg4B4xIFasERtgAYFcgQAnYA0Sj0RxJMQRAInnCiniscoJYrMgPIq/MmNp1JqZrpoezyTSfNIvu8dd3V1Juaq7TdTS0tLSJB1LZ2aO8HIBWoTOQj3oMIXxE9qCPkJDUafT2aGqweIvQd95+nyDLlJVYLAD0EOunwfQDIXS0OInrFAIHIdNXbyE5qAe9Cr1fEBlgGHE9cT8hF5q7vnU868cJ49MimJMss1xap4+xVkvkyIHFqleHnEcPvPynpRrya0DGGgTLyfIhuTvdWiD4ry+lTyX8JC6MUgUkY1N1IaTJgs4sM02ViFvyKHPArTGNrbJimHwP9BtMgKbJeivdhKywnrMi0/NcVc7CVlRjruaYdeFbkJvoXEieX9DPsvov66ZiKwoxvzFTsxzXIg+F9h8kj6OTT8Zq3YHnjr9u57Fp53oOrbPfUZ56wzZLG047WvQab8ZnYGuesZSE+LAB6d9hfS4fd9TSYoKmS/uZlFcxqn+I7wcIR1j2M6mbMVuVGSA/plrDd9vl+Of0y69jhAHjjntL6TH7XuUShLiwDmn/Zj0PHHa56lq2M8zp383SZGaNBo5ti98RmSF/UjxWXBs5rjYibxCtsMNOCCsZdjJSe469AYaJXqdPIsy+g81E5EV1rNEJYHtsnYSssJ6ZEt8h4xwvBOd6nbaeqCRXWVfMa7EvCpsUuQeaKo+Uv6m+HpQ9jay1UgfKSXtynFSzreHyEbukfJggZEswOqALOxyoip5l/dBUSEb0t4hd7daFELy15SS743rKfMDOpV3Y537H4CBxPMyNc+toOt2jm+Jm+IehYJBZqD7XD8rXMX1esqRAccXrdNG5lBfa1p/YpIv9iSXS16X/K49heUhpzqpF5K2d2tI8v1raWlp2Qf8B832GJJaONrcAAAAAElFTkSuQmCC",Zy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7Zm/S8NAFMffVREUi6iDRRGcFFSsDv4Z/gGCk3+C4CxuLuIf4eYPHEVEcBM6iIuDgy66iUjT4iDo+T3sEMPdtYnJ3ZW+D3xImnfh3utdLm1CxDAMEyxSyml4AiPpHtXnGZyz5ShsyWNzB8fIL++wKoR41gVLlhMPyH/yilG4bwraRiDCpkxhEGEERnQBWwGSAgIFaHMtUZfTT9m5hw9wFi5SaLRZ4rZj7QTckQVjyjPLNfAKJzAlZaytGsk6HKKCyPMa+Ion30J9/iYPZCmggm98M3FsCw6TB/6zjF7DR7gEV6lgTFOI7wO+yVJAU2jQtFvQtKnBc7gGJ+EAnIG78JPyxLIkNzpsP69ps2Hpbz3LfcBpAR30eZm2AOfXAHIZhyuG8CGlxGkBrcSf4C329zRNapQXRUwhHDuNxT9gXyJeDn0KTcX2B2ElEW9SSlwXkFxu/4yA5jdWW3ryRhYUXIBvuADf8P8B33ABvrEV0KBwqJsCtgKuKBwuTAHbKqTejNzQ7/N5n7zBZSxCL7qgcQRwgnpwW4XHMCL3qD6PyJI8wzCMf34AY0pbQGu9u0IAAAAASUVORK5CYII=";/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const kn=typeof document<"u";function e_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function ks(e,t){const n={};for(const r in t){const i=t[r];n[r]=ze(i)?i.map(e):e(i)}return n}const ur=()=>{},ze=Array.isArray,jf=/#/g,t_=/&/g,n_=/\//g,r_=/=/g,i_=/\?/g,Hf=/\+/g,s_=/%5B/g,a_=/%5D/g,Vf=/%5E/g,o_=/%60/g,zf=/%7B/g,c_=/%7C/g,Wf=/%7D/g,l_=/%20/g;function ro(e){return encodeURI(""+e).replace(c_,"|").replace(s_,"[").replace(a_,"]")}function u_(e){return ro(e).replace(zf,"{").replace(Wf,"}").replace(Vf,"^")}function la(e){return ro(e).replace(Hf,"%2B").replace(l_,"+").replace(jf,"%23").replace(t_,"%26").replace(o_,"`").replace(zf,"{").replace(Wf,"}").replace(Vf,"^")}function f_(e){return la(e).replace(r_,"%3D")}function d_(e){return ro(e).replace(jf,"%23").replace(i_,"%3F")}function h_(e){return e==null?"":d_(e).replace(n_,"%2F")}function Tr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const p_=/\/$/,m_=e=>e.replace(p_,"");function Cs(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=y_(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:Tr(a)}}function g_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function v_(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&jn(t.matched[r],n.matched[i])&&$f(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $f(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b_(e[n],t[n]))return!1;return!0}function b_(e,t){return ze(e)?$c(e,t):ze(t)?$c(t,e):e===t}function $c(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function y_(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}var kr;(function(e){e.pop="pop",e.push="push"})(kr||(kr={}));var fr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fr||(fr={}));function __(e){if(!e)if(kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),m_(e)}const w_=/^[^#]+#/;function A_(e,t){return e.replace(w_,"#")+t}function E_(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ts=()=>({left:window.scrollX,top:window.scrollY});function I_(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=E_(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Gc(e,t){return(history.state?history.state.position-t:-1)+e}const ua=new Map;function S_(e,t){ua.set(e,t)}function T_(e){const t=ua.get(e);return ua.delete(e),t}let k_=()=>location.protocol+"//"+location.host;function Gf(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),Wc(c,"")}return Wc(n,e)+r+i}function C_(e,t,n,r){let i=[],s=[],a=null;const o=({state:p})=>{const m=Gf(e,location),I=n.value,P=t.value;let U=0;if(p){if(n.value=m,t.value=p,a&&a===I){a=null;return}U=P?p.position-P.position:0}else r(m);i.forEach(b=>{b(n.value,I,{delta:U,type:kr.pop,direction:U?U>0?fr.forward:fr.back:fr.unknown})})};function c(){a=n.value}function l(p){i.push(p);const m=()=>{const I=i.indexOf(p);I>-1&&i.splice(I,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:ts()}),"")}function d(){for(const p of s)p();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Kc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ts():null}}function R_(e){const{history:t,location:n}=window,r={value:Gf(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:k_()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function a(c,l){const u=Z({},t.state,Kc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=Z({},i.value,t.state,{forward:c,scroll:ts()});s(u.current,u,!0);const d=Z({},Kc(r.value,c,null),{position:u.position+1},l);s(c,d,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function O_(e){e=__(e);const t=R_(e),n=C_(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=Z({location:"",base:e,go:r,createHref:A_.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function P_(e){return typeof e=="string"||e&&typeof e=="object"}function Kf(e){return typeof e=="string"||typeof e=="symbol"}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qf=Symbol("");var qc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qc||(qc={}));function Hn(e,t){return Z(new Error,{type:e,[qf]:!0},t)}function ot(e,t){return e instanceof Error&&qf in e&&(t==null||!!(e.type&t))}const Yc="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},N_=/[.+*?^${}()[\]/\\]/g;function M_(e,t){const n=Z({},x_,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(i+="/"),i+=p.value.replace(N_,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:P,optional:U,regexp:b}=p;s.push({name:I,repeatable:P,optional:U});const _=b||Yc;if(_!==Yc){m+=10;try{new RegExp(`(${_})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${I}" (${_}): `+B.message)}}let C=P?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(C=U&&l.length<2?`(?:/${C})`:"/"+C),U&&(C+="?"),i+=C,m+=20,U&&(m+=-8),P&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",I=s[p-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:P,optional:U}=m,b=I in l?l[I]:"";if(ze(b)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const _=ze(b)?b.join("/"):b;if(!_)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=_}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function L_(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function D_(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=L_(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Jc(r))return 1;if(Jc(i))return-1}return i.length-r.length}function Jc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const U_={type:0,value:""},F_=/[a-zA-Z0-9_]/;function B_(e){if(!e)return[[]];if(e==="/")return[[U_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function d(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),a()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:F_.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),a(),i}function j_(e,t,n){const r=M_(B_(e.path),n),i=Z(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function H_(e,t){const n=[],r=new Map;t=Zc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,d,p){const m=!p,I=V_(u);I.aliasOf=p&&p.record;const P=Zc(t,u),U=[I];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of C)U.push(Z({},I,{components:p?p.record.components:I.components,path:B,aliasOf:p?p.record:I}))}let b,_;for(const C of U){const{path:B}=C;if(d&&B[0]!=="/"){const W=d.record.path,F=W[W.length-1]==="/"?"":"/";C.path=d.record.path+(B&&F+B)}if(b=j_(C,d,P),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),m&&u.name&&!Qc(b)&&a(u.name)),I.children){const W=I.children;for(let F=0;F<W.length;F++)s(W[F],b,p&&p.children[F])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return _?()=>{a(_)}:ur}function a(u){if(Kf(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let d=0;for(;d<n.length&&D_(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Yf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Qc(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},I,P;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Hn(1,{location:u});P=p.record.name,m=Z(Xc(d.params,p.keys.filter(_=>!_.optional).concat(p.parent?p.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&Xc(u.params,p.keys.map(_=>_.name))),I=p.stringify(m)}else if(u.path!=null)I=u.path,p=n.find(_=>_.re.test(I)),p&&(m=p.parse(I),P=p.record.name);else{if(p=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!p)throw Hn(1,{location:u,currentLocation:d});P=p.record.name,m=Z({},d.params,u.params),I=p.stringify(m)}const U=[];let b=p;for(;b;)U.unshift(b.record),b=b.parent;return{name:P,path:I,params:m,matched:U,meta:W_(U)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Xc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function V_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function z_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function W_(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function Zc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yf(e,t){return t.children.some(n=>n===e||Yf(e,n))}function $_(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Hf," "),a=s.indexOf("="),o=Tr(a<0?s:s.slice(0,a)),c=a<0?null:Tr(s.slice(a+1));if(o in t){let l=t[o];ze(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function el(e){let t="";for(let n in e){const r=e[n];if(n=f_(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(s=>s&&la(s)):[r&&la(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function G_(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const K_=Symbol(""),tl=Symbol(""),io=Symbol(""),Jf=Symbol(""),fa=Symbol("");function Yn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const l=p=>{p===!1?c(Hn(4,{from:n,to:t})):p instanceof Error?c(p):P_(p)?c(Hn(2,{from:t,to:p})):(a&&r.enterCallbacks[i]===a&&typeof p=="function"&&a.push(p),o())},u=s(()=>e.call(r&&r.instances[i],t,n,l));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function Rs(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const o in a.components){let c=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(q_(c)){const u=(c.__vccOpts||c)[t];u&&s.push(Mt(u,n,r,a,o,i))}else{let l=c();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const d=e_(u)?u.default:u;a.components[o]=d;const m=(d.__vccOpts||d)[t];return m&&Mt(m,n,r,a,o,i)()}))}}return s}function q_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nl(e){const t=mt(io),n=mt(Jf),r=ye(()=>{const c=be(e.to);return t.resolve(c)}),i=ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(jn.bind(null,u));if(p>-1)return p;const m=rl(c[l-2]);return l>1&&rl(u)===m&&d[d.length-1].path!==m?d.findIndex(jn.bind(null,c[l-2])):p}),s=ye(()=>i.value>-1&&X_(n.params,r.value.params)),a=ye(()=>i.value>-1&&i.value===n.matched.length-1&&$f(n.params,r.value.params));function o(c={}){return J_(c)?t[be(e.replace)?"replace":"push"](be(e.to)).catch(ur):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const Y_=Pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nl,setup(e,{slots:t}){const n=Hi(nl(e)),{options:r}=mt(io),i=ye(()=>({[il(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[il(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:La("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Cn=Y_;function J_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function X_(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!ze(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function rl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const il=(e,t,n)=>e??t??n,Q_=Pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=mt(fa),i=ye(()=>e.route||r.value),s=mt(tl,0),a=ye(()=>{let l=be(s);const{matched:u}=i.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),o=ye(()=>i.value.matched[a.value]);li(tl,ye(()=>a.value+1)),li(K_,o),li(fa,i);const c=_i();return rr(()=>[c.value,o.value,e.name],([l,u,d],[p,m,I])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!jn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,d=o.value,p=d&&d.components[u];if(!p)return sl(n.default,{Component:p,route:l});const m=d.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,U=La(p,Z({},I,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return sl(n.default,{Component:U,route:l})||U}}});function sl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xf=Q_;function Z_(e){const t=H_(e.routes,e),n=e.parseQuery||$_,r=e.stringifyQuery||el,i=e.history,s=Yn(),a=Yn(),o=Yn(),c=gh(Rt);let l=Rt;kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ks.bind(null,y=>""+y),d=ks.bind(null,h_),p=ks.bind(null,Tr);function m(y,N){let R,D;return Kf(y)?(R=t.getRecordMatcher(y),D=N):D=y,t.addRoute(D,R)}function I(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function P(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function b(y,N){if(N=Z({},N||c.value),typeof y=="string"){const h=Cs(n,y,N.path),g=t.resolve({path:h.path},N),w=i.createHref(h.fullPath);return Z(h,g,{params:p(g.params),hash:Tr(h.hash),redirectedFrom:void 0,href:w})}let R;if(y.path!=null)R=Z({},y,{path:Cs(n,y.path,N.path).path});else{const h=Z({},y.params);for(const g in h)h[g]==null&&delete h[g];R=Z({},y,{params:d(h)}),N.params=d(N.params)}const D=t.resolve(R,N),Q=y.hash||"";D.params=u(p(D.params));const ce=g_(r,Z({},y,{hash:u_(Q),path:D.path})),f=i.createHref(ce);return Z({fullPath:ce,hash:Q,query:r===el?G_(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function _(y){return typeof y=="string"?Cs(n,y,c.value.path):Z({},y)}function C(y,N){if(l!==y)return Hn(8,{from:N,to:y})}function B(y){return Y(y)}function W(y){return B(Z(_(y),{replace:!0}))}function F(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=_(D):{path:D},D.params={}),Z({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function Y(y,N){const R=l=b(y),D=c.value,Q=y.state,ce=y.force,f=y.replace===!0,h=F(R);if(h)return Y(Z(_(h),{state:typeof h=="object"?Z({},Q,h.state):Q,force:ce,replace:f}),N||R);const g=R;g.redirectedFrom=N;let w;return!ce&&v_(r,D,R)&&(w=Hn(16,{to:g,from:D}),Ge(D,D,!0,!1)),(w?Promise.resolve(w):Te(g,D)).catch(v=>ot(v)?ot(v,2)?v:Tt(v):J(v,g,D)).then(v=>{if(v){if(ot(v,2))return Y(Z({replace:f},_(v.to),{state:typeof v.to=="object"?Z({},Q,v.to.state):Q,force:ce}),N||g)}else v=Zt(g,D,!0,f,Q);return St(g,D,v),v})}function he(y,N){const R=C(y,N);return R?Promise.reject(R):Promise.resolve()}function fe(y){const N=En.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Te(y,N){let R;const[D,Q,ce]=ew(y,N);R=Rs(D.reverse(),"beforeRouteLeave",y,N);for(const h of D)h.leaveGuards.forEach(g=>{R.push(Mt(g,y,N))});const f=he.bind(null,y,N);return R.push(f),we(R).then(()=>{R=[];for(const h of s.list())R.push(Mt(h,y,N));return R.push(f),we(R)}).then(()=>{R=Rs(Q,"beforeRouteUpdate",y,N);for(const h of Q)h.updateGuards.forEach(g=>{R.push(Mt(g,y,N))});return R.push(f),we(R)}).then(()=>{R=[];for(const h of ce)if(h.beforeEnter)if(ze(h.beforeEnter))for(const g of h.beforeEnter)R.push(Mt(g,y,N));else R.push(Mt(h.beforeEnter,y,N));return R.push(f),we(R)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),R=Rs(ce,"beforeRouteEnter",y,N,fe),R.push(f),we(R))).then(()=>{R=[];for(const h of a.list())R.push(Mt(h,y,N));return R.push(f),we(R)}).catch(h=>ot(h,8)?h:Promise.reject(h))}function St(y,N,R){o.list().forEach(D=>fe(()=>D(y,N,R)))}function Zt(y,N,R,D,Q){const ce=C(y,N);if(ce)return ce;const f=N===Rt,h=kn?history.state:{};R&&(D||f?i.replace(y.fullPath,Z({scroll:f&&h&&h.scroll},Q)):i.push(y.fullPath,Q)),c.value=y,Ge(y,N,R,f),Tt()}let $e;function Gn(){$e||($e=i.listen((y,N,R)=>{if(!zr.listening)return;const D=b(y),Q=F(D);if(Q){Y(Z(Q,{replace:!0}),D).catch(ur);return}l=D;const ce=c.value;kn&&S_(Gc(ce.fullPath,R.delta),ts()),Te(D,ce).catch(f=>ot(f,12)?f:ot(f,2)?(Y(f.to,D).then(h=>{ot(h,20)&&!R.delta&&R.type===kr.pop&&i.go(-1,!1)}).catch(ur),Promise.reject()):(R.delta&&i.go(-R.delta,!1),J(f,D,ce))).then(f=>{f=f||Zt(D,ce,!1),f&&(R.delta&&!ot(f,8)?i.go(-R.delta,!1):R.type===kr.pop&&ot(f,20)&&i.go(-1,!1)),St(D,ce,f)}).catch(ur)}))}let wn=Yn(),pe=Yn(),ee;function J(y,N,R){Tt(y);const D=pe.list();return D.length?D.forEach(Q=>Q(y,N,R)):console.error(y),Promise.reject(y)}function at(){return ee&&c.value!==Rt?Promise.resolve():new Promise((y,N)=>{wn.add([y,N])})}function Tt(y){return ee||(ee=!y,Gn(),wn.list().forEach(([N,R])=>y?R(y):N()),wn.reset()),y}function Ge(y,N,R,D){const{scrollBehavior:Q}=e;if(!kn||!Q)return Promise.resolve();const ce=!R&&T_(Gc(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Xl().then(()=>Q(y,N,ce)).then(f=>f&&I_(f)).catch(f=>J(f,y,N))}const ke=y=>i.go(y);let An;const En=new Set,zr={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,hasRoute:U,getRoutes:P,resolve:b,options:e,push:B,replace:W,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:pe.add,isReady:at,install(y){const N=this;y.component("RouterLink",Cn),y.component("RouterView",Xf),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>be(c)}),kn&&!An&&c.value===Rt&&(An=!0,B(i.location).catch(Q=>{}));const R={};for(const Q in Rt)Object.defineProperty(R,Q,{get:()=>c.value[Q],enumerable:!0});y.provide(io,N),y.provide(Jf,Vl(R)),y.provide(fa,c);const D=y.unmount;En.add(y),y.unmount=function(){En.delete(y),En.size<1&&(l=Rt,$e&&$e(),$e=null,c.value=Rt,An=!1,ee=!1),D()}}};function we(y){return y.reduce((N,R)=>N.then(()=>fe(R)),Promise.resolve())}return zr}function ew(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>jn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>jn(l,c))||i.push(c))}return[n,r,i]}const ve=e=>(nu("data-v-a00df9f1"),e=e(),ru(),e),tw={class:"header"},nw=ve(()=>k("div",{class:"nav-logo"},[k("img",{src:Yy})],-1)),rw={class:"container"},iw={class:"footer-links"},sw={class:"footer-header"},aw={class:"dropdown-content"},ow=ve(()=>k("h3",null,"About Us",-1)),cw=ve(()=>k("li",null,[k("a",{href:"#"},"Our Story")],-1)),lw=ve(()=>k("li",null,[k("a",{href:"#"},"Mission & Vision")],-1)),uw=ve(()=>k("li",null,[k("a",{href:"#"},"Team")],-1)),fw=[cw,lw,uw],dw={class:"footer-header"},hw={class:"dropdown-content"},pw=ve(()=>k("h3",null,"Services",-1)),mw=ve(()=>k("li",null,[k("a",{href:"#"},"Tutoring")],-1)),gw=ve(()=>k("li",null,[k("a",{href:"#"},"Mentorship")],-1)),vw=ve(()=>k("li",null,[k("a",{href:"#"},"Workshops")],-1)),bw=[mw,gw,vw],yw={class:"footer-header"},_w={class:"dropdown-content"},ww=ve(()=>k("h3",null,"Contact Us",-1)),Aw=ve(()=>k("li",null,[k("a",{href:"#"},"Email")],-1)),Ew=ve(()=>k("li",null,[k("a",{href:"#"},"Phone")],-1)),Iw=ve(()=>k("li",null,[k("a",{href:"#"},"Location")],-1)),Sw=[Aw,Ew,Iw],Tw={class:"footer-header"},kw={class:"dropdown-content"},Cw=ve(()=>k("h3",null,"Support",-1)),Rw=ve(()=>k("li",null,[k("a",{href:"#"},"FAQ")],-1)),Ow=ve(()=>k("li",null,[k("a",{href:"#"},"Help Center")],-1)),Pw=ve(()=>k("li",null,[k("a",{href:"#"},"Terms of Service")],-1)),xw=[Rw,Ow,Pw],Nw=xr('<div class="social-media" data-v-a00df9f1><h3 data-v-a00df9f1>Social Media</h3><div class="icons" data-v-a00df9f1><ul data-v-a00df9f1><li data-v-a00df9f1><a class="facebook" href="#" data-v-a00df9f1><img src="'+Jy+'" alt="Facebook" data-v-a00df9f1></a></li><li data-v-a00df9f1><a class="youtube" href="#" data-v-a00df9f1><img src="'+Xy+'" alt="YouTube" data-v-a00df9f1></a></li><li data-v-a00df9f1><a class="insta" href="#" data-v-a00df9f1><img src="'+Qy+'" alt="Instagram" data-v-a00df9f1></a></li><li data-v-a00df9f1><a class="linkdin" href="#" data-v-a00df9f1><img src="'+Zy+'" alt="LinkedIn" data-v-a00df9f1></a></li></ul></div></div>',1),Mw=ve(()=>k("div",{class:"footer-bottom"},[k("p",null,"© 2024 Educrib. All rights reserved.")],-1)),Lw=Pr({__name:"App",setup(e){const t=_i(!1),n=_i(""),r=()=>{t.value=!t.value},i=()=>{t.value=!1},s=a=>{n.value=n.value===a?"":a};return(a,o)=>(xa(),Na(Ye,null,[k("div",tw,[nw,k("div",{class:"nav-toggle",onClick:r},[ne(be(Tn),{icon:t.value?"times":"bars"},null,8,["icon"])]),k("nav",{class:Lt({"nav-open":t.value})},[ne(be(Cn),{class:"anchor-tags",to:"/",onClick:i},{default:ct(()=>[lt("Home")]),_:1}),ne(be(Cn),{class:"anchor-tags",to:"/about",onClick:i},{default:ct(()=>[lt("About Us")]),_:1}),ne(be(Cn),{class:"anchor-tags",to:"/Services",onClick:i},{default:ct(()=>[lt("Services")]),_:1}),ne(be(Cn),{class:"anchor-tags",to:"/Pricing",onClick:i},{default:ct(()=>[lt("Pricing")]),_:1}),ne(be(Cn),{class:"anchor-tags",to:"/Contact",onClick:i},{default:ct(()=>[lt("Contact")]),_:1})],2)]),ne(be(Xf)),k("footer",null,[k("div",rw,[k("div",iw,[k("div",{class:"footer-section",onClick:o[0]||(o[0]=c=>s("about"))},[k("div",sw,[k("div",aw,[ow,ne(be(Tn),{class:"dropdown",icon:n.value==="about"?"chevron-up":"chevron-down"},null,8,["icon"])])]),k("ul",{class:Lt({"dropdown-open":n.value==="about"})},fw,2)]),k("div",{class:"footer-section",onClick:o[1]||(o[1]=c=>s("services"))},[k("div",dw,[k("div",hw,[pw,ne(be(Tn),{class:"dropdown",icon:n.value==="services"?"chevron-up":"chevron-down"},null,8,["icon"])])]),k("ul",{class:Lt({"dropdown-open":n.value==="services"})},bw,2)]),k("div",{class:"footer-section",onClick:o[2]||(o[2]=c=>s("contact"))},[k("div",yw,[k("div",_w,[ww,ne(be(Tn),{class:"dropdown",icon:n.value==="contact"?"chevron-up":"chevron-down"},null,8,["icon"])])]),k("ul",{class:Lt({"dropdown-open":n.value==="contact"})},Sw,2)]),k("div",{class:"footer-section",onClick:o[3]||(o[3]=c=>s("support"))},[k("div",Tw,[k("div",kw,[Cw,ne(be(Tn),{class:"dropdown",icon:n.value==="support"?"chevron-up":"chevron-down"},null,8,["icon"])])]),k("ul",{class:Lt({"dropdown-open":n.value==="support"})},xw,2)])]),Nw]),Mw])],64))}}),Qf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Dw=Qf(Lw,[["__scopeId","data-v-a00df9f1"]]),Uw="modulepreload",Fw=function(e){return"/Educrib/"+e},al={},nn=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(o=>{if(o=Fw(o),o in al)return;al[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Uw,c||(u.as="script",u.crossOrigin=""),u.href=o,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},Bw="/Educrib/assets/tutor-DhvmYU2e.png",jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABFCAYAAAAGscunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYYSURBVHgB7ZzPb9NIFMffjEO31aolnGClVXHgwm0LCDiAIHvjtt07Etm/gKYtB05brtA25S9oKrjT/QtIBRwAgdgjSBC3RQJONSmibVqPec9NojSxE/8aO0nzkaJpnFETfzXvzZs3b8wgYoq5nIpNmhvGGGPsqMnYGL5P1r3q0ZhpatjqpmmuCkUp0LVUNvsWIoSBZFCUZMI0b+JNplGQNDQL4QcdxStwxpZ3GVtB0TSQiBSR6oQZrwgjlYpg+d8nJ5dAAqGKVBHnlgCYgHBGjFc0DpDfY2wpzNEVikgdIE4TKNZMWGIFFqk4N5fBoZ6DDhGnAU1BsYKaoW+RaJZShFiMwucEBX1W3uD8rt9R5UskFCjNTfMxdObocUITQmRT09PL4BEOHlmfn/8XBXoC3SUQoXLOH9PvB494GklrudwiTusZ6HLQ/BZGp6ayrvu77ShLoKHTp2Hk3DkYOH7cer/z9Stsvn4NWx8/gkzIT6FQ/7jq66aTLIGSV67AyIULtp+VXr4E/flzkIlbodr6JBQoJ20EOQhEjFy8CEOnToFMcGbOrM3N5dr1aykSOTkUaAIkQCbWjmEXfYKCQk1grNfyHh1FomkeI+gZkETVBwXtEwYUDBfv3087fm53kQJFnOYXQSLsyJG2ffjAAEQFV5RFWl7ZfmZ70TBmsFHhcEErCFv/1CQSqjkOnN+EQwg5cjuzSzReQDNr6+2dUIaH4di1azB48mRopjKabR3ziXIZdtbXQX/6FHY3NiAoaHZ0/2frrx2Ikyorel++iAT67cYN4IODEAdiexs+P3oExuYmBAUzB5n6zMEBc0OBPK9rqtAIiksggr772NWrEAZGw6xeE4lGEQRw1mRicTOoqhASar1vqomEQyyQs45yuo7iNyic16zKEoniom5InkUJ6VGNm/ZHkhBp6NOMEBlqLJGCmlqvgrr8Ra0lUt/U7KHdZTI5TgtZ6ONEEvb2xjja3Rj0cYZzFGm/YKGPAxgK/MEwM/ckbJ9EaZBfMBc0fP689OxiK8zd3cA5c0w6FpSJ69dnIOztISFgr1SCH+/egYl/D46OQhwwRYHEyAj8euaM9fc2LoQ9/w/GrNlN6v4ZJfRl73y4IUDOPCldJGLzzRvoBHzmzJOed3D9UEa/0An4zZlHIlK3QyLpIJmodj3a4XNE65GIRKFAJ0ChgA90XqlulcbRS5dgKJWCuPn24gVsFYvgFYyTtITB2GrYjskKJk+c2A8mYxTICia/fNkPJn0IRHDOtQRK9RYjpsCpkna7GlGxlvO92WOLIcT/tMCNtHC860B9OCQSJJJ0592tpG7fLvBUNkvV9f3RZAMtbqm1dnBxn+k/dN5piIGtDx+ghMuWagzTCdmDKgnG8lZrveM8DwG2t/2iP3sGpVevDlzb/vTJetGCNHn5MsQJnVuh1pr9KyZXgAixRlCDQPXEnT0gU6vWfddCJJzq7kKElFxkBuLMHlRNjaiJRF4cGw18QtUdXnCzjvK61hI7OxASmmPBhDBN36Npx2PWj6LhdngVfnt1FcJAcSqYIFJTU3lsfIUDVB9E5S9xQd+9sbICIaA1HthpWrYJw/C1vqACKqoP+vH+vecREAT6LvrOzw8fgvH9OwSFzp80XrMtdi/Oz+f5Idz6xqR/HtegTcXv3KE31TVrcLjQMKi29cm2IlHchGbn6txFr0D363QezjGVRCEBznadkf+QDM3qlRDIlrYHcNA/LaCSt6BHEQAPUpOTLY9NuDqlVJydzfMerO1GgZZQoEy7fq7Pu/WaUG4FIlynt1PT0xkamtADeBGI8LQHQLYbZOnSCVhO2oNAhL/T3LOz42h6lH9SoXugsObvVrOYE752k+jYuGDsTxq20AVQbgh/71k/AhFhPWGCCsNV6Dx0XNFPxPaEiXqsZyIJkQlyNiVkdPQ9DzAtvUCrBwhI2E+9qYpFoYIK0ROqOFWkPWSKzJCK6KOoEbfqGhlbrjzlJvQ9xCiexEWjK03V9WE/iQtTGwVZwtQjXaRGivfujaE5qPhKK6ZJ57+SKJ4KzeZJN66bVPqCm6cGY9+suoVyuZC6c0eDCPkJkwyiPanFlR8AAAAASUVORK5CYII=",Hw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABFCAYAAAAGscunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZ8SURBVHgB7ZxPTBRXHMe/bwuL3UK16UooUSAq4p8WFSU9SE1Qo/FPmzZGE+3V5dpDLxDTUw946aEnE5crvcpBDyUxJnUvbbXooYCufxYkiLBN+NdFBJm+3+xjHXZ2lpnZeW+XLZ9kmdm3b9iZ7773e7/35/cYFKO1tQX5YRc0rRaMva8fgYDhZSQuXgn9yNgAHdn168NQCINkuCj04C1cjN0gccxCuIFEG+Si3acjFy0OiUgRySDMQSSFkQ0JdpeLFYEEPBVJF0fTTvLTE/CmxDiFSlRECOZZ6fJEpAIQJxM9XomVs0hcIKpW36JwxDFCxv5GrtXQtUh6K6VpIaixObkSEWK5KlWuROICURP+HQqz9FhBpaqbC/UXHOJYJC7Q11ygb7B26WHh8A0nFzgSSQuFqHq1YO3Ty4XqtpvZtkhFJNAyES5U2E5GWyIVoUDL2BLKt1oGLhA178UoENEini8rWUXSjXTSQSxmTvDnzPqMltVNNPMdkE1Dw0c4enQH6uo+QUVFuZ42MzOL589f4s6dKB49moQKGOvk7sFgxo8yJQpHkQQKQhZ+/3sIhQ6hsXEnv8HMP5amaXj48DHC4T+xsLAEuZAf9QMXKpH+gc/i5sgPkitQe/sx7NvXYCkQQZ/t39/A8x5Haemq9jNHgqJ7ZcL0xbwUNUG2oQ6FmrFlS5Xt/Fu3VuHy5UOQT4tuZtIw/zoWanoG2aDGxno4hUpUff0myCbD868QSe/Ry6xmBBnpbFXMCrqmtXUH5FMjdEixsiSp6JNRK+aWbduqoYI0HVIiKSlFRHl5OdxSUfEB1BA02iZjSVLlVWtwi+b+UhfflSpNukjCL9oNFczO/gu35HKtc3aJCY1USVI3ukietFuePRuFWvTa5TO+UQJ1NTQX9YauoWtVkpwSEyKpqmoE9cWoq+GUBw8GEY1OQS3kDgR8mTxM6VBfbGTEfrV78eIlurruQz1kk2qoJNVANdRZ7ey8jb6+waxVjz7r6xvA1au3FXRwragpQT5EIuihr137g3c1HuueNDmKxqESMtJkg9RXsXR0keQ7kNmIRif56x4KFU3b7KM/WCcbQbJJa2mCMR8E1kVanYDs0b6iYF0kG1DrRgPf6qqcj/8u27dvxJ49laiq2oRg8ENs3FiODRvK+Nh3qZ7nzZsFvH49j6mpWcTj0xgbm0R//ziePp3CknJ3KcH45NxPkO0GBAIlOHx4C5qaavWx7bKyMrhhfn6ee99j3MEcQiQygrm5Rcgnzni3pF1a341KzNmzn/Jx7VqUlJRkzbuwsIBbt37Xz8+c+ZzPjpRmzb+4uMj7gTHcvPm3XsLkMUg37v3K1erqAC5daubedI2t8ezx8X943+w3xGIz+vv+/gk+O3IElZUfW15Dou/du4NX2+148mQI3d33MDqagNcwNkGG29s10a2tW9HR8SV27qy1PeAfjY6kBCLonNLsQN9RX1+HK1e+wsmTdfCeYW9FunBhDy5ebHVsc5qbd3Pj7U+9p3NKc0JpqR/nzh3B+fNem46USLkX0wMHNuPYsYNwg9/v51XrXQtL55TmhuPHD+n34hG0PsCnz30zNoRcOX260dV8GrHE2/VYbDr1ns6XXLb1dA+nTn0Gb9AXUCw7k44XW5qornb/601NTa8YL6JzSnN/L5XwAsbu0mFZpNzDDcgmuCUeNy+vmZhw36y7rapm3pUkUeUGkC9evTILMjGhZl2SNanAHmPfrQf5YnR00laaSkRVI1IiiVVeUkOiLBkaMgsSi+VTpLgx1GLlKABjjhaBe0KyZZsxpVPa27f5GfxP08HUZPMO74/I1+RAYRBn4fD3xgTzeBJjtlfKFyUZnt8kkrBNUiIQC55kfJzJZ/RZZCY182PE8wc9b8YWPqNIwm+yFXdRNPDntYqHsxzj1qvd/8c+9VgtdCeyTgTwC3u5UL+iuOldLf5t1dkSLtQvKF5DHrET97Ye72YDZ5GTbW2XRGj7Wse2QMR6DK4N3EZzN4nwgvwu23EGuTU/Z2vFrMh1XwAqUYVvp5JjZV1K9wUwInaYkBv65Z6E2AsgPztMGBF7IrUUkK1KCP+uN1OQn1O83vVmWawvkJ+S5ak4y0jbZEoE9LQoWSOetDnUe494KU7q30Myqe3JgCYhmDc7cSWF0Yd1ZAhjRLpI6XDRaNQzGfDDGC2ICIjFrenVM4GkGBR0M8zzzIlJVOnbk6XzH1pScX/TdObKAAAAAElFTkSuQmCC",Vw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABFCAYAAAAGscunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfESURBVHgB7ZxNbBvXEcfnvV1+c/Vl64O2VEWWaBRFG8iHNCmaIgHSD0t2YKu2fOipQo+F0rPbHIvkWDS+9KZTe4iSKk5lyQaKAkVzadFEDlC0aExLcb7EyE5kSZRIcblvMkNbimiRFFd8XIu0f4DNFfVEav+amTcz7z0K8JjXhxe6AgCDOYFxKUSUnhoAhCj9s0BgtHC0WBQCkoCYcgCSQhhzhi2TZ671JMBDBNSY10f/EzU3wkOShEEUJ3YLsQ9QpITAOZTqHdsx5i7M9CWhhtREpG1hhHgWEU9AjRFCzKFwro78ZWAWaoBWkVgcfzoyigpGtViMS5Bckv4ws1kFszqtS4tID1ucYpB1TegSq2qRpoYSQyCM8YMizk7YsoRUE9W64b5FukKzlC3hohcxp2rIBW0FE/u1qn2JNDW8MEgPrxxE6ykFWxVZ/Gs/ne59B1ziWqS3Ti+MkfWMQZ3CsersdN+Eq59xM3jq9MJFSuyGoP6ZHLly7FKlgysWqYEEugfFqZHpvlcrGlrJoIYTaIsKhZJ7DZg6NT/ekAIxdF/5+9uDsiJxkKaHUWhsRi+fmi97jyVF4mm+nmcxNyiA8ftpTVGKisSJIgr8NTxC8P1yeVXse0VFygKMUUTvgkcIvl9fOjJe4nuF/Pn0rWcFOq+ABgy/IdoHA02dT4VaA82GX+w5TbhAAWZW0F56b/1u8t9pukIEHaB4aWSm7/rOp8zdg5yXQAOU2ULs+8G2b/6srTfcboSEAZKf0wZJ4tjodAwGDqHzZSL57sYqOFC9UBLYmn5R+NQOuKLX5WaBQ9I3cLblaDRmhqUp9ArECLZUYURivlD8fHN3sNUwQQeI8akXEwUpT4FIKKW22czwS9nU67Og9i1i0RL3t7BgoAlUhTpsi6TTihiKP4ItCDzA8Emp851Yh50pwbaJCsM4iVXGvlC7zxf7Xqgt0mEG/JYm839IkOhsTb/i6/yNcF6U1dA863kufPjYixQfDhkB8GAlppZwM5HzpguT307lRcqicwI02Gu02x/iqR72EGg5kV35/5+Wb4FL+keajrZ/J3QIPIJXfOhhMi+SDldjPvn7xlJLPGg19ZgWRbuSQmXu2JnkvzZWwCW9P7Y6wUN4SQy2RNLVp16aW0/97Zfr7/N1tNsX/OEfup+COgaVirPLyXKF3SMPLcP71iMDEhXG4TElocI3TpkMDuiaiMIxM3BsuKkz3GkGfRFZMgVoOx5sfvrljuPgkrbjgWbwGCFwgESSXaipNux9wTr8jR9ZR/xR6Ss3LtBmBGPPRIJQB6ASXVIhxkATnECaAW+ybM+gOt0UKKK0yAg6uHVt9XOuoawnfBEqaaGl399SbFwujbnUZ3YKXEJFbDBIVggeIhCjps5V2Lvz2cx7v789z9flUoDb72988c/fLn0ALnn65c7jsWfC3ropzXCN5Ro14rFIFWDy1jpdLmeRiw2cbz7a1O0Pm5YoOcNxCvDc7448CS6xuv0R8BrElEnJUoqyJC0ixc+3HOl5PtolzPIWyilAwOMAvF9QiBR1q8QiaMJeU3ZuU+UAQM90eRBAWDSpiEuCpv7z/JXVz3MZpaxeX8QfNYzDTwYPFxuX+dLJLH+Qcd0FaCU39TwFkJgkkURCV3d4PWln//fH5U/5+n4KUFQkFqheUgBEkaDesLgBjykJJds3pB2JJPIz3GOKwguV5oXJjtRbpxduUI1bdeOtYzBsfevnrX0tx/xN5TqTVNx2np3u87TLuB9Ikzl+zE/VKoeuN1sWo/v5SHvzE/6yrdt6wjBFfmtzXqScFdVy3GDtk2w6l1Y2NEgKsJmD/J6AfGPsvsvNVdvrpoWAOyoLTrjDCHLbpOeF6FGoU9jVtvZ9b3cPUcEEOUlVIqVv2/bNt1eW+JpTgHoWacvVmO3y4d52E33ZN4mOmKP/PUDZ6FC+p9HFxeKZt/uubn1VUGNJBFebwMvhZJVauWWndLWGS8Gv/8V/M3f5/UAT0ijUoUCkMzOkntCTXG6uqNxHf11bXF/MrTu0RKxbK349mpVVOumsz0+vfkalTg60UGhFzO4VDQWXKDa9BlXCO88+vLZ6h0qVzc7vhlqDTabGzTEEuVd6OWffvp5ZXno3vco730ADKOSukwJF85mp4ZsXyaIac+92OQTOjkz379r8XrTvY0esSzqDeH0gFm0li8bkoiJx3kTGW9G5i4aB7rfUebiSHUROCYQwqo5N9QCtPU48uON2J2XbrGene9+geXUSGhi+v3Mz/WVTnz1XS87xuTAUNTlK/tBBnD1Xwbm3ys+7DS/QjNdAp5VIoJGZfn3n3bZ489T8uGyEU0suBGJc933eHL45RissdXt6iYP0XjHoQfbVHLt3/kSN059E246UWiNArlGd95tys1jpn90n+W3NoMbqITPn3lAOxKuefi7ATi4PL5xUgjeGHzyrYusRBl56sGB1/zoaYKvKgBo6KLGKxXHQecOJpCd5szpUidaG/ddiyZMPw7J0i/P169YIdkNH4pDQsFS1FxxzpDT+kQ2tXdUpzhY1X/ph66Ju2KAj8AcS5CCCsqBK2GIUqOtSGHO1Eqbw/Tzm8k8+HnB8qgvROZE/OiYgStbGR8hihb8YTdmgUgj80WQqoWiV2aQl502A67X+eLIH+QpSBxaHKdQyJAAAAABJRU5ErkJggg==",zw="/Educrib/assets/teacher-Cec_M31a.png",Ww="/Educrib/assets/graduated-BqGw6-Gi.png",$w="/Educrib/assets/science-C1YtLIz7.png",Gw="/Educrib/assets/maths-DHtOQm-N.png",Kw="/Educrib/assets/social%20science-Dy5QHEym.png",qw="/Educrib/assets/english-CZ5Wip96.png",Yw="/Educrib/assets/computer-BkvADhET.png",Jw="/Educrib/assets/Emily-BMVidpJ7.jpg",Xw="/Educrib/assets/John-5VRemcT7.jpg",Qw="/Educrib/assets/Emma-Cx_qRagK.jpg",Zw="/Educrib/assets/Juliana-BsZ_BSs7.jpg",e0="/Educrib/assets/1-wrH9EeKS.jpg",t0="/Educrib/assets/2-BM_y0OKL.jpg",n0="/Educrib/assets/3-BJ61wzmL.jpg",r0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAcCAYAAACJWipLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYFSURBVHgB7VpLSFxXGP7PufeO48Q7jmnMQ5qHNtDEEEpIssimcSAUml3AdRddFFJwISm1eVAGoZg+oosuAl0U6iIraTbFLlqYujIlBkuDL0hisCUWrDp21Bnn3ntOz68zch3nceY+MrPw23jvmXPOHObn/8/3f58ALsDjA5FUvO8E1BBSt08fT95ob4caAu8618xjHSq4AAUXSKTSrZbJo1BDYCm4qnJ+AWoIa9paS2pprgVcwFWgVMW6xDlvnY3HglAzIO0W5x1QI/ir+816IMpBrmgHwQUcBwrLHhByGJ/fSAfOQQ1g5caZixx4szhXqFbK335jXxP+5ZQ2Ja6fbQKHcByopLG2XfKoCqegBqABfzf3TBnrhBqAFlSO5p5pIOM4q1yUPtqae8LyV21Skbx5splxfjH3zglp5x8dCUEVsfDp23qG83DunSjg+J5yFKjkT72nCfCIfSyTYaehmkiru0rdf0G9A6qIoEGP2d8JoarT8ucoUDxAd5U6QkhV7ymFkPfzx1SFVpX9KdTaFRQtmHkLHKDiQCGJILA7KCLDgtUqf9g7MYAT+eNY/qpFKrB3YqDU7xoXpMJJT0W4oNYJs066bGmMHeYELhXeDeZNoI9AFmpwtinancgf5rHzodXFlYuy2yiBwAX7/bTzSDDCDGMSJNGwsfaYfDe/DrvO1KGu/zsvTQYMDVpUEZRCn3EGr6jBlkECTLcMve/ZAsGX5XgsopmBa0gK4DVAUOiEpik/1kdvviw2J9l1spmq6uciK5rhNUCUlpcWIYP6vcmiQRXkoKXO4m20QKb4AVGllpbY6uTRgb9TxP7B8i+95xROo6K0RcAnMAVGl6gRb43G0jLzRenqJJz7R7U5XxflaFgEaEhqusisdHrxmGWYju4aqe8AbigqfRH6cnIuN0byJ2F2KYYaLXQPuYEgG7OgZn5uiMb+gQqB2SXK2wfFyptTiAoyCaZ5X//22QJUCFQcGmnovNfZhWWxofHQDIn9ZtrHSbEFXmUXB5IWdSUevnJrFFwi2X3qsihRna7LIWYRwA/6wPQIuMRST/sxzWRt4nfSwAUYkBTTlInI3acF7y5SboPkr19ExS6OhFfMIkPNPGyKxhLgETbvLk3rFD/0ZXAABWA4uJoYKkQYnAKzKwJ6G6HOGlpmanN60/7n+VlkR9lAIbbKYeBjpOAgCa6RB+HorWnwCUi7CWOfoK4ntWDrLvqmFFlwCyQb9RY9Izufc2amVRhr/momWW6uVB8VgUaoJEgIDUuenwhkFqSDhKhkrkMcSIUMqBAHQkdSMvOkAoW+E1QIv30quqFVzAQVy/K1+V1V0xWJrigpyfpUUoFC3wkqhP8+Fan4R2eEXAWfgPeUkztK1qcqGyi775QPJAuC848XW+uXT7XtOxU+1GNUI4p85ptPlfOdCgHJgskKKxGyPlVZzQl9J5LHOXKUW89SbkE24qL3+jCfymd9Kte0PB8qZxd43phoihcYpfdzZEFQ+clCVD7rU/WCx0DfSVgaO8YsDkkeUGci9/7cDFIxZaOuLo2BKikpSZQ+uuN+wgxa1DL99r4I6Xf4vTv9GLwdc33wqdB3yqfmSLlDays9dkaHPVKocV+PkLCHd5xJiLde+1RY9uy+06ayoKnPG/unHtn7IsHuXq2w9SfY1NrXm5QeL/cdJQNl951Qn1M1+r0IyMNi8o9+5Xbc1Ix+xqxtWm5uMG/1Q5vvhMqCyJje+v6pwUJ9EYk9WW/4emKQG0YXZtzWIAl57VNhD7X9nUKfS7DV3+vvPn1RaC7qdvrA1AQPBP9gYKW2jlTepypZ+tB32ix6IlMWFXO0NXqnLOXONrcPcsoGUIpEJA4eAX0nISWtCwF1qHFgelhmTVYi6trUDRm7mvWppNZKnUn4ThbQrD43NSezRu8bxzMtpD4724a6YdanGis2v2jDiyRizUxdc6rPIXK6oVDKx0sp5bLAsicy6rpTfW5zj6yyIRjgiBfNL/pOSWrtL6cslAKWzjDR3wmHD4053cMTcI9oupd3i1d7uf3HSr/22sMe9lAK/wOKLpIFZVrN5gAAAABJRU5ErkJggg==",i0={},Jt=e=>(nu("data-v-f9523431"),e=e(),ru(),e),s0=xr('<div class="hero-section" data-v-f9523431><div class="container-1" data-v-f9523431><img src="'+Bw+'" alt="" data-v-f9523431><div class="content-1" data-v-f9523431><h1 data-v-f9523431>Learn Everyday &amp; Any New Skill Online with Top Instructors</h1><p data-v-f9523431> Unlock your learning potential with personalized tutoring and interactive virtual classrooms. </p></div></div><div class="container-2" data-v-f9523431><div class="heading" data-v-f9523431><h1 data-v-f9523431>Great</h1><h1 data-v-f9523431>deals for you →</h1></div><div class="content-2" data-v-f9523431><div class="box-1" data-v-f9523431><img src="'+jw+'" alt="skills" data-v-f9523431><h3 data-v-f9523431>Learn New Skills</h3><p data-v-f9523431> Unlock your potential with a variety of courses designed to enhance your abilities and knowledge. </p></div><div class="box-2" data-v-f9523431><img src="'+Hw+'" alt="trainer" data-v-f9523431><h3 data-v-f9523431>Expert Trainers</h3><p data-v-f9523431> Get guidance from industry professionals who are passionate about teaching and mentoring. </p></div><div class="box-3" data-v-f9523431><img src="'+Vw+'" alt="trail" data-v-f9523431><h3 data-v-f9523431>Free Trial Lesson</h3><p data-v-f9523431> Experience our teaching methods firsthand with a complimentary trial lesson before committing. </p></div></div></div></div>',1),a0={class:"Registration-section"},o0=Jt(()=>k("div",{class:"heading-1"},[k("p",null,"teachers & Students"),k("h1",null,"What are you looking for?")],-1)),c0={class:"main"},l0={class:"teachers"},u0=Jt(()=>k("img",{src:zw,alt:"teacher"},null,-1)),f0=Jt(()=>k("h2",null,"Do you want to teach here?",-1)),d0=Jt(()=>k("p",null," Join our team of dedicated volunteers and share your knowledge with students who are eager to learn. Make a difference by providing valuable support and guidance in their educational journey. ",-1)),h0={class:"students"},p0=Jt(()=>k("img",{src:Ww,alt:"student"},null,-1)),m0=Jt(()=>k("h2",null,"Do you want to learn here?",-1)),g0=Jt(()=>k("p",null," Gain access to a network of passionate tutors ready to help you excel in your studies. Benefit from personalized support tailored to your learning needs and achieve your academic goals. ",-1)),v0=xr('<div data-v-f9523431><div class="heading-2" data-v-f9523431><h1 data-v-f9523431>Explore Our Online Subjects</h1></div><div class="content" data-v-f9523431><div class="subject-1" data-v-f9523431><img src="'+$w+'" alt="" data-v-f9523431><h2 data-v-f9523431>Science</h2></div><div class="subject-2" data-v-f9523431><img src="'+Gw+'" alt="" data-v-f9523431><h2 data-v-f9523431>Maths</h2></div><div class="subject-3" data-v-f9523431><img src="'+Kw+'" alt="" data-v-f9523431><h2 data-v-f9523431>Social Science</h2></div><div class="subject-4" data-v-f9523431><img src="'+qw+'" alt="" data-v-f9523431><h2 data-v-f9523431>English</h2></div><div class="subject-5" data-v-f9523431><img src="'+Yw+'" alt="" data-v-f9523431><h2 data-v-f9523431>Computer</h2></div></div><a href="#" class="button-2" data-v-f9523431>Explore more →</a></div>',1),b0={class:"testimonials"},y0=xr('<div class="Instructors-section" data-v-f9523431><h1 data-v-f9523431>Explore Experienced Instructors →</h1><div class="instructors" data-v-f9523431><div class="box" data-v-f9523431><div class="profile-1" data-v-f9523431><img src="'+Jw+'" alt="" data-v-f9523431><div class="about" data-v-f9523431><a href="#" class="name" data-v-f9523431>Emily</a><p data-v-f9523431>Mathematics</p></div></div><div class="description" data-v-f9523431><p data-v-f9523431> Emily is a passionate educator with over 10 years of teaching experience. She specializes in mathematics and has a knack for making complex concepts easy to understand. </p></div></div><div class="box" data-v-f9523431><div class="profile-1" data-v-f9523431><img src="'+Xw+'" alt="" data-v-f9523431><div class="about" data-v-f9523431><a href="" data-v-f9523431>John</a><p data-v-f9523431>Science</p></div></div><div class="description" data-v-f9523431><p data-v-f9523431> John is a dedicated teacher known for his innovative teaching methods and engaging classroom activities. He has a background in science and loves to inspire curiosity in his students. </p></div></div><div class="box" data-v-f9523431><div class="profile-1" data-v-f9523431><img src="'+Qw+'" alt="" data-v-f9523431><div class="about" data-v-f9523431><a href="" data-v-f9523431>Emma</a><p data-v-f9523431>Art</p></div></div><div class="description" data-v-f9523431><p data-v-f9523431> Emma brings creativity and enthusiasm to her teaching, making learning an enjoyable experience for her students. She specializes in language arts and is passionate about fostering a love for reading and writing. </p></div></div><div class="box" data-v-f9523431><div class="profile-1" data-v-f9523431><img src="'+Zw+'" alt="" data-v-f9523431><div class="about" data-v-f9523431><a href="" data-v-f9523431>Juliana</a><p data-v-f9523431>Social Science</p></div></div><div class="description" data-v-f9523431><p data-v-f9523431> Juliana is a dedicated educator with a background in history and social studies. She believes in making learning relevant and engaging, and she encourages her students to think critically and explore different perspectives. </p></div></div></div></div>',1),_0={class:"review-section"},w0={class:"heading-tag"},A0=Jt(()=>k("h1",null,"What people say About Us",-1)),E0=xr('<div class="instructors" data-v-f9523431><div class="user" data-v-f9523431><div class="profile-2" data-v-f9523431><img src="'+e0+'" alt="" data-v-f9523431><div class="name" data-v-f9523431><h4 data-v-f9523431>Maria</h4><p data-v-f9523431>Parent</p></div></div><div class="review" data-v-f9523431><p data-v-f9523431> &quot; Using the virtual learning app has been a game-changer for my child&#39;s education—accessible resources and dedicated support have truly exceeded my expectations &quot; </p></div></div><div class="user" data-v-f9523431><div class="profile-2" data-v-f9523431><img src="'+t0+'" alt="" data-v-f9523431><div class="name" data-v-f9523431><h4 data-v-f9523431>Olivia</h4><p data-v-f9523431>Student</p></div></div><div class="review" data-v-f9523431><p data-v-f9523431> &quot; This app made studying enjoyable and effective- I&#39;ve never felt more prepared for exams! &quot; </p></div></div><div class="user" data-v-f9523431><div class="profile-2" data-v-f9523431><img src="'+n0+'" alt="" data-v-f9523431><div class="name" data-v-f9523431><h4 data-v-f9523431>Sophia</h4><p data-v-f9523431>Parent</p></div></div><div class="review" data-v-f9523431><p data-v-f9523431> &quot;This app transformed my child&#39;s learning experience with engaging lessons and supportive tutors &quot; </p></div></div></div><div class="stars" data-v-f9523431><img src="'+r0+'" alt="" data-v-f9523431></div>',2);function I0(e,t){const n=Rh("router-link");return xa(),Na("div",null,[s0,k("div",a0,[k("div",null,[o0,k("div",c0,[k("div",l0,[u0,f0,d0,ne(n,{class:"button-2",to:"/SignIn"},{default:ct(()=>[lt("Register Now")]),_:1})]),k("div",h0,[p0,m0,g0,ne(n,{class:"button-2",to:"/SignIn"},{default:ct(()=>[lt("Register Now")]),_:1})])])]),v0]),k("div",b0,[y0,k("div",_0,[k("div",w0,[A0,ne(n,{class:"button-tag",to:""},{default:ct(()=>[lt("Review")]),_:1})]),E0])])])}const S0=Qf(i0,[["render",I0],["__scopeId","data-v-f9523431"]]),T0=Pr({__name:"HomeView",setup(e){return(t,n)=>(xa(),Na("main",null,[ne(S0)]))}});function so(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k0=Zf,ed=new yn("auth","Firebase",Zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Ja("@firebase/auth");function C0(e,...t){Pi.logLevel<=re.WARN&&Pi.warn(`Auth (${Fr}): ${e}`,...t)}function mi(e,...t){Pi.logLevel<=re.ERROR&&Pi.error(`Auth (${Fr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,...t){throw ao(e,...t)}function tt(e,...t){return ao(e,...t)}function td(e,t,n){const r=Object.assign(Object.assign({},k0()),{[t]:n});return new yn("auth","Firebase",r).create(t,{appName:e.name})}function gt(e){return td(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ao(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ed.create(e,...t)}function V(e,t,...n){if(!e)throw ao(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mi(t),new Error(t)}function wt(e,t){e||ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function R0(){return ol()==="http:"||ol()==="https:"}function ol(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R0()||cf()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,n){this.shortDelay=t,this.longDelay=n,wt(n>t,"Short delay should be less than long delay!"),this.isMobile=cv()||lv()}get(){return O0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,t){wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Br(3e4,6e4);function Xt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qt(e,t,n,r,i={}){return rd(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Ur(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),nd.fetch()(id(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function rd(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},x0),t);try{const i=new L0(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw si(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw si(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw si(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw td(e,u,l);We(e,u)}}catch(i){if(i instanceof st)throw i;We(e,"network-request-failed",{message:String(i)})}}async function jr(e,t,n,r,i={}){const s=await Qt(e,t,n,r,i);return"mfaPendingCredential"in s&&We(e,"multi-factor-auth-required",{_serverResponse:s}),s}function id(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?oo(e.config,i):`${e.config.apiScheme}://${i}`}function M0(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class L0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),N0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(e,t,r);return i.customData._tokenResponse=n,i}function cl(e){return e!==void 0&&e.enterprise!==void 0}class D0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return M0(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function U0(e,t){return Qt(e,"GET","/v2/recaptchaConfig",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(e,t){return Qt(e,"POST","/v1/accounts:delete",t)}async function sd(e,t){return Qt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function B0(e,t=!1){const n=It(e),r=await n.getIdToken(t),i=co(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:dr(Os(i.auth_time)),issuedAtTime:dr(Os(i.iat)),expirationTime:dr(Os(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Os(e){return Number(e)*1e3}function co(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=sf(n);return i?JSON.parse(i):(mi("Failed to decode base64 JWT payload"),null)}catch(i){return mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ll(e){const t=co(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof st&&j0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function j0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Cr(e,sd(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ad(s.providerUserInfo):[],o=z0(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ha(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function V0(e){const t=It(e);await xi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function z0(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ad(e){return e.map(t=>{var{providerId:n}=t,r=so(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(e,t){const n=await rd(e,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=id(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",nd.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $0(e,t){return Qt(e,"POST","/v2/accounts:revokeToken",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ll(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=ll(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await W0(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Ln;return r&&(V(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=so(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ha(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Cr(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return B0(this,t)}reload(){return V0(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(gt(this.auth));const t=await this.getIdToken();return await Cr(this,F0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,P=(o=n.tenantId)!==null&&o!==void 0?o:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:B,isAnonymous:W,providerData:F,stsTokenManager:Y}=n;V(C&&Y,t,"internal-error");const he=Ln.fromJSON(this.name,Y);V(typeof C=="string",t,"internal-error"),Ot(d,t.name),Ot(p,t.name),V(typeof B=="boolean",t,"internal-error"),V(typeof W=="boolean",t,"internal-error"),Ot(m,t.name),Ot(I,t.name),Ot(P,t.name),Ot(U,t.name),Ot(b,t.name),Ot(_,t.name);const fe=new dt({uid:C,auth:t,email:p,emailVerified:B,displayName:d,isAnonymous:W,photoURL:I,phoneNumber:m,tenantId:P,stsTokenManager:he,createdAt:b,lastLoginAt:_});return F&&Array.isArray(F)&&(fe.providerData=F.map(Te=>Object.assign({},Te))),U&&(fe._redirectEventId=U),fe}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ln;i.updateFromServerResponse(n);const s=new dt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xi(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ad(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new Ln;o.updateFromIdToken(r);const c=new dt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ha(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;function ht(e){wt(e instanceof Function,"Expected a class definition");let t=ul.get(e);return t?(wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ul.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}od.type="NONE";const fl=od;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e,t,n){return`firebase:${e}:${t}:${n}`}class Dn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,s),this.fullPersistenceKey=gi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?dt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Dn(ht(fl),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ht(fl);const a=gi(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const d=dt._fromJSON(t,u);l!==s&&(o=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Dn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Dn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ud(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dd(t))return"Blackberry";if(hd(t))return"Webos";if(lo(t))return"Safari";if((t.includes("chrome/")||ld(t))&&!t.includes("edge/"))return"Chrome";if(fd(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cd(e=Ie()){return/firefox\//i.test(e)}function lo(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ld(e=Ie()){return/crios\//i.test(e)}function ud(e=Ie()){return/iemobile/i.test(e)}function fd(e=Ie()){return/android/i.test(e)}function dd(e=Ie()){return/blackberry/i.test(e)}function hd(e=Ie()){return/webos/i.test(e)}function ns(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function G0(e=Ie()){var t;return ns(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function K0(){return uv()&&document.documentMode===10}function pd(e=Ie()){return ns(e)||fd(e)||hd(e)||dd(e)||/windows phone/i.test(e)||ud(e)}function q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e,t=[]){let n;switch(e){case"Browser":n=dl(Ie());break;case"Worker":n=`${dl(Ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(e,t={}){return Qt(e,"GET","/v2/passwordPolicy",Xt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=6;class Q0{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:X0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hl(this),this.idTokenSubscription=new hl(this),this.beforeStateQueue=new Y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await sd(this,{idToken:t}),r=await dt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ze(this.app))return Promise.reject(gt(this));const n=t?It(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ze(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await J0(this),n=new Q0(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $0(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&C0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _n(e){return It(e)}class hl{constructor(t){this.auth=t,this.observer=null,this.addObserver=gv(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eA(e){rs=e}function gd(e){return rs.loadJS(e)}function tA(){return rs.recaptchaEnterpriseScript}function nA(){return rs.gapiScript}function rA(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const iA="recaptcha-enterprise",sA="NO_RECAPTCHA";class aA{constructor(t){this.type=iA,this.auth=_n(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{U0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new D0(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;cl(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(sA)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&cl(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=tA();c.length!==0&&(c+=o),gd(c).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function pl(e,t,n,r=!1){const i=new aA(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pa(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pl(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pl(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(e,t){const n=Wn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ir(s,t??{}))return i;We(i,"already-initialized")}return n.initialize({options:t})}function cA(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lA(e,t,n){const r=_n(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=vd(t),{host:a,port:o}=uA(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fA()}function vd(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uA(e){const t=vd(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ml(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ml(a)}}}function ml(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function fA(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}async function dA(e,t){return Qt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(e,t){return jr(e,"POST","/v1/accounts:signInWithPassword",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(e,t){return jr(e,"POST","/v1/accounts:signInWithEmailLink",Xt(e,t))}async function mA(e,t){return jr(e,"POST","/v1/accounts:signInWithEmailLink",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends uo{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Rr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Rr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pa(t,n,"signInWithPassword",hA);case"emailLink":return pA(t,{email:this._email,oobCode:this._password});default:We(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pa(t,r,"signUpPassword",dA);case"emailLink":return mA(t,{idToken:n,email:this._email,oobCode:this._password});default:We(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e,t){return jr(e,"POST","/v1/accounts:signInWithIdp",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="http://localhost";class vn extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new vn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=so(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new vn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Un(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Un(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Un(t,n)}buildRequest(){const t={requestUri:gA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ur(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bA(e){const t=Qn(Zn(e)).link,n=t?Qn(Zn(t)).deep_link_id:null,r=Qn(Zn(e)).deep_link_id;return(r?Qn(Zn(r)).link:null)||r||n||t||e}class fo{constructor(t){var n,r,i,s,a,o;const c=Qn(Zn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=vA((i=c.mode)!==null&&i!==void 0?i:null);V(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=bA(t);try{return new fo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(t,n){return Rr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=fo.parseLink(n);return V(r,"argument-error"),Rr._fromEmailAndCode(t,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Hr{constructor(){super("facebook.com")}static credential(t){return vn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return vn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Hr{constructor(){super("github.com")}static credential(t){return vn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Hr{constructor(){super("twitter.com")}static credential(t,n){return vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(e,t){return jr(e,"POST","/v1/accounts:signUp",Xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await dt._fromIdTokenResponse(t,r,i),a=gl(r);return new bn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=gl(r);return new bn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function gl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends st{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ni(t,n,r,i)}}function yd(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(e,s,t,r):s})}async function _A(e,t,n=!1){const r=await Cr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(e,t,n=!1){const{auth:r}=e;if(Ze(r.app))return Promise.reject(gt(r));const i="reauthenticate";try{const s=await Cr(e,yd(r,i,t,e),n);V(s.idToken,r,"internal-error");const a=co(s.idToken);V(a,r,"internal-error");const{sub:o}=a;return V(e.uid===o,r,"user-mismatch"),bn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&We(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(e,t,n=!1){if(Ze(e.app))return Promise.reject(gt(e));const r="signIn",i=await yd(e,r,t),s=await bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function AA(e,t){return _d(_n(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(e){const t=_n(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function WE(e,t,n){if(Ze(e.app))return Promise.reject(gt(e));const r=_n(e),a=await pa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wd(e),c}),o=await bn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function $E(e,t,n){return Ze(e.app)?Promise.reject(gt(e)):AA(It(e),$n.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wd(e),r})}function EA(e,t,n,r){return It(e).onIdTokenChanged(t,n,r)}function IA(e,t,n){return It(e).beforeAuthStateChanged(t,n)}const Mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(){const e=Ie();return lo(e)||ns(e)}const TA=1e3,kA=10;class Ed extends Ad{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SA()&&q0(),this.fallbackToPolling=pd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);K0()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kA):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ed.type="LOCAL";const CA=Ed;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Ad{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Id.type="SESSION";const Sd=Id;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await RA(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=ho("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function PA(e){nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function xA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NA(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function MA(){return Td()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="firebaseLocalStorageDb",LA=1,Li="firebaseLocalStorage",Cd="fbase_key";class Vr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(e,t){return e.transaction([Li],t?"readwrite":"readonly").objectStore(Li)}function DA(){const e=indexedDB.deleteDatabase(kd);return new Vr(e).toPromise()}function ma(){const e=indexedDB.open(kd,LA);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Li,{keyPath:Cd})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Li)?t(r):(r.close(),await DA(),t(await ma()))})})}async function vl(e,t,n){const r=ss(e,!0).put({[Cd]:t,value:n});return new Vr(r).toPromise()}async function UA(e,t){const n=ss(e,!1).get(t),r=await new Vr(n).toPromise();return r===void 0?null:r.value}function bl(e,t){const n=ss(e,!0).delete(t);return new Vr(n).toPromise()}const FA=800,BA=3;class Rd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>BA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(MA()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await xA(),!this.activeServiceWorker)return;this.sender=new OA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||NA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ma();return await vl(t,Mi,"1"),await bl(t,Mi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>UA(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ss(i,!1).getAll();return new Vr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rd.type="LOCAL";const jA=Rd;new Br(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(e,t){return t?ht(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends uo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Un(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Un(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Un(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function VA(e){return _d(e.auth,new po(e),e.bypassAuthState)}function zA(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),wA(n,new po(e),e.bypassAuthState)}async function WA(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),_A(n,new po(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return VA;case"linkViaPopup":case"linkViaRedirect":return WA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:We(this.auth,"internal-error")}}resolve(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new Br(2e3,1e4);class Pn extends Od{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const t=ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$A.get())};t()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="pendingRedirect",vi=new Map;class KA extends Od{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=vi.get(this.auth._key());if(!t){try{const r=await qA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}vi.set(this.auth._key(),t)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qA(e,t){const n=XA(t),r=JA(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YA(e,t){vi.set(e._key(),t)}function JA(e){return ht(e._redirectPersistence)}function XA(e){return gi(GA,e.config.apiKey,e.name)}async function QA(e,t,n=!1){if(Ze(e.app))return Promise.reject(gt(e));const r=_n(e),i=HA(r,t),a=await new KA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=10*60*1e3;class eE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!tE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Pd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ZA&&this.cachedEventUids.clear(),this.cachedEventUids.has(yl(t))}saveEventToCache(t){this.cachedEventUids.add(yl(t)),this.lastProcessedEventTime=Date.now()}}function yl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Pd({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function tE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pd(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(e,t={}){return Qt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iE=/^https?/;async function sE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nE(e);for(const n of t)try{if(aE(n))return}catch{}We(e,"unauthorized-domain")}function aE(e){const t=da(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!iE.test(n))return!1;if(rE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Br(3e4,6e4);function _l(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cE(e){return new Promise((t,n)=>{var r,i,s;function a(){_l(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_l(),n(tt(e,"network-request-failed"))},timeout:oE.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)a();else{const o=rA("iframefcb");return nt()[o]=()=>{gapi.load?a():n(tt(e,"network-request-failed"))},gd(`${nA()}?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw bi=null,t})}let bi=null;function lE(e){return bi=bi||cE(e),bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Br(5e3,15e3),fE="__/auth/iframe",dE="emulator/auth/iframe",hE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mE(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?oo(t,dE):`https://${e.config.authDomain}/${fE}`,r={apiKey:t.apiKey,appName:e.name,v:Fr},i=pE.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ur(r).slice(1)}`}async function gE(e){const t=await lE(e),n=nt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:mE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=tt(e,"network-request-failed"),o=nt().setTimeout(()=>{s(a)},uE.get());function c(){nt().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,yE=600,_E="_blank",wE="http://localhost";class wl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AE(e,t,n,r=bE,i=yE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},vE),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Ie().toLowerCase();n&&(o=ld(l)?_E:n),cd(l)&&(t=t||wE,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(G0(l)&&o!=="_self")return EE(t||"",o),new wl(null);const d=window.open(t||"",o,u);V(d,e,"popup-blocked");try{d.focus()}catch{}return new wl(d)}function EE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__/auth/handler",SE="emulator/auth/handler",TE=encodeURIComponent("fac");async function Al(e,t,n,r,i,s){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fr,eventId:i};if(t instanceof bd){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",mv(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries({}))a[u]=d}if(t instanceof Hr){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${TE}=${encodeURIComponent(c)}`:"";return`${kE(e)}?${Ur(o).slice(1)}${l}`}function kE({config:e}){return e.emulator?oo(e,SE):`https://${e.authDomain}/${IE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="webStorageSupport";class CE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sd,this._completeRedirectFn=QA,this._overrideRedirectResult=YA}async _openPopup(t,n,r,i){var s;wt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Al(t,n,r,da(),i);return AE(t,a,ho())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Al(t,n,r,da(),i);return PA(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await gE(t),r=new eE(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ps];a!==void 0&&n(!!a),We(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return pd()||lo()||ns()}}const RE=CE;var El="@firebase/auth",Il="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xE(e){_t(new it("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:md(e)},l=new Z0(r,i,s,c);return cA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),_t(new it("auth-internal",t=>{const n=_n(t.getProvider("auth").getImmediate());return(r=>new OE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(El,Il,PE(e)),et(El,Il,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=5*60,ME=of("authIdTokenMaxAge")||NE;let Sl=null;const LE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ME)return;const i=n==null?void 0:n.token;Sl!==i&&(Sl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DE(e=mf()){const t=Wn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=oA(e,{popupRedirectResolver:RE,persistence:[jA,CA,Sd]}),r=of("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=LE(s.toString());IA(n,a,()=>a(n.currentUser)),EA(n,o=>a(o))}}const i=av("auth");return i&&lA(n,`http://${i}`),n}function UE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}eA({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xE("Browser");const FE=[{path:"/",name:"home",component:T0},{path:"/about",name:"about",component:()=>nn(()=>import("./AboutView-BvqiXrT9.js"),__vite__mapDeps([0,1]))},{path:"/SignIn",name:"SignIn",component:()=>nn(()=>import("./SignInView-BIeMgrWb.js"),__vite__mapDeps([2,3]))},{path:"/SignUp",name:"SignUp",component:()=>nn(()=>import("./SignUpView-DK0ZIvCw.js"),__vite__mapDeps([4,5]))},{path:"/DashBoard",name:"DashBoard",component:()=>nn(()=>import("./DashBoard-BbcOx27j.js"),__vite__mapDeps([6,7])),meta:{authRequired:!0}},{path:"/pricing",name:"Pricing",component:()=>nn(()=>import("./pricingView-DA7SHInT.js"),__vite__mapDeps([8,9])),meta:{authRequired:!0}},{path:"/services",name:"Services",component:()=>nn(()=>import("./Services-BozoedPj.js"),__vite__mapDeps([10,11])),meta:{authRequired:!0}},{path:"/contact",name:"contact",component:()=>nn(()=>import("./Contact-osoUi1Ub.js"),__vite__mapDeps([12,13])),meta:{authRequired:!0}}],xd=Z_({history:O_("/Educrib/"),routes:FE});xd.beforeEach((e,t,n)=>{const r=DE();e.matched.some(s=>s.meta.authRequired)?r.currentUser?n():(alert("You must be logged in to see this page"),n("/SignIn")):n()});Fg.add(Qg,Xg);const BE={apiKey:"AIzaSyAePgJRDzG-sjjqrd47xE5loMUzXtXCgYQ",authDomain:"vitrualtutor-f5213.firebaseapp.com",projectId:"vitrualtutor-f5213",storageBucket:"vitrualtutor-f5213.appspot.com",messagingSenderId:"657568830117",appId:"1:657568830117:web:25c4609f3f0d4b0f52f34c",measurementId:"G-PCD9YVDJ4D"},jE=pf(BE);typeof window<"u"&&$y(jE);const as=em(Dw);as.component("font-awesome-icon",Tn);as.use(sm());as.use(xd);as.mount("#app");export{Qf as _,xr as a,k as b,Na as c,HE as d,lt as e,ne as f,DE as g,ct as h,ru as i,WE as j,xa as o,nu as p,Rh as r,$E as s,VE as v,zE as w};

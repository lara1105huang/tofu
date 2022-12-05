import{d as kS,r as Rn,a as AS,c as NS,o as DS,b as zs,e as ye,F as Ah,f as Nh,g as Ks,w as Ac,h as Dh,i as Qs,t as Zr,j as Eg,k as Rh,u as RS}from"./index.f48a776f.js";function gv(n,e){return function(){return n.apply(e,arguments)}}const{toString:yv}=Object.prototype,{getPrototypeOf:kf}=Object,Af=(n=>e=>{const t=yv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Xn=n=>(n=n.toLowerCase(),e=>Af(e)===n),tu=n=>e=>typeof e===n,{isArray:$i}=Array,Xo=tu("undefined");function xS(n){return n!==null&&!Xo(n)&&n.constructor!==null&&!Xo(n.constructor)&&Ir(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const _v=Xn("ArrayBuffer");function OS(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&_v(n.buffer),e}const PS=tu("string"),Ir=tu("function"),vv=tu("number"),Nf=n=>n!==null&&typeof n=="object",MS=n=>n===!0||n===!1,$c=n=>{if(Af(n)!=="object")return!1;const e=kf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},LS=Xn("Date"),FS=Xn("File"),US=Xn("Blob"),VS=Xn("FileList"),BS=n=>Nf(n)&&Ir(n.pipe),WS=n=>{const e="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||yv.call(n)===e||Ir(n.toString)&&n.toString()===e)},qS=Xn("URLSearchParams"),$S=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wa(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let s,r;if(typeof n!="object"&&(n=[n]),$i(n))for(s=0,r=n.length;s<r;s++)e.call(null,n[s],s,n);else{const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,n[a],a,n)}}function wv(n,e){e=e.toLowerCase();const t=Object.keys(n);let s=t.length,r;for(;s-- >0;)if(r=t[s],e===r.toLowerCase())return r;return null}const Iv=typeof self>"u"?typeof global>"u"?globalThis:global:self,Ev=n=>!Xo(n)&&n!==Iv;function fd(){const{caseless:n}=Ev(this)&&this||{},e={},t=(s,r)=>{const i=n&&wv(e,r)||r;$c(e[i])&&$c(s)?e[i]=fd(e[i],s):$c(s)?e[i]=fd({},s):$i(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Wa(arguments[s],t);return e}const jS=(n,e,t,{allOwnKeys:s}={})=>(Wa(e,(r,i)=>{t&&Ir(r)?n[i]=gv(r,t):n[i]=r},{allOwnKeys:s}),n),GS=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),HS=(n,e,t,s)=>{n.prototype=Object.create(e.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},YS=(n,e,t,s)=>{let r,i,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),i=r.length;i-- >0;)o=r[i],(!s||s(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&kf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},zS=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const s=n.indexOf(e,t);return s!==-1&&s===t},KS=n=>{if(!n)return null;if($i(n))return n;let e=n.length;if(!vv(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},QS=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&kf(Uint8Array)),JS=(n,e)=>{const s=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(n,i[0],i[1])}},XS=(n,e)=>{let t;const s=[];for(;(t=n.exec(e))!==null;)s.push(t);return s},ZS=Xn("HTMLFormElement"),eC=n=>n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,s,r){return s.toUpperCase()+r}),Tg=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),tC=Xn("RegExp"),Tv=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),s={};Wa(t,(r,i)=>{e(r,i,n)!==!1&&(s[i]=r)}),Object.defineProperties(n,s)},nC=n=>{Tv(n,(e,t)=>{if(Ir(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const s=n[t];if(!!Ir(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},sC=(n,e)=>{const t={},s=r=>{r.forEach(i=>{t[i]=!0})};return $i(n)?s(n):s(String(n).split(e)),t},rC=()=>{},iC=(n,e)=>(n=+n,Number.isFinite(n)?n:e),oC=n=>{const e=new Array(10),t=(s,r)=>{if(Nf(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=$i(s)?[]:{};return Wa(s,(o,a)=>{const c=t(o,r+1);!Xo(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return t(n,0)},_={isArray:$i,isArrayBuffer:_v,isBuffer:xS,isFormData:WS,isArrayBufferView:OS,isString:PS,isNumber:vv,isBoolean:MS,isObject:Nf,isPlainObject:$c,isUndefined:Xo,isDate:LS,isFile:FS,isBlob:US,isRegExp:tC,isFunction:Ir,isStream:BS,isURLSearchParams:qS,isTypedArray:QS,isFileList:VS,forEach:Wa,merge:fd,extend:jS,trim:$S,stripBOM:GS,inherits:HS,toFlatObject:YS,kindOf:Af,kindOfTest:Xn,endsWith:zS,toArray:KS,forEachEntry:JS,matchAll:XS,isHTMLForm:ZS,hasOwnProperty:Tg,hasOwnProp:Tg,reduceDescriptors:Tv,freezeMethods:nC,toObjectSet:sC,toCamelCase:eC,noop:rC,toFiniteNumber:iC,findKey:wv,global:Iv,isContextDefined:Ev,toJSONObject:oC};function ee(n,e,t,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),r&&(this.response=r)}_.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bv=ee.prototype,Sv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Sv[n]={value:n}});Object.defineProperties(ee,Sv);Object.defineProperty(bv,"isAxiosError",{value:!0});ee.from=(n,e,t,s,r,i)=>{const o=Object.create(bv);return _.toFlatObject(n,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,n.message,e,t,s,r),o.cause=n,o.name=n.name,i&&Object.assign(o,i),o};var aC=typeof self=="object"?self.FormData:window.FormData;const cC=aC;function pd(n){return _.isPlainObject(n)||_.isArray(n)}function Cv(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function bg(n,e,t){return n?n.concat(e).map(function(r,i){return r=Cv(r),!t&&i?"["+r+"]":r}).join(t?".":""):e}function lC(n){return _.isArray(n)&&!n.some(pd)}const uC=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function hC(n){return n&&_.isFunction(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator]}function nu(n,e,t){if(!_.isObject(n))throw new TypeError("target must be an object");e=e||new(cC||FormData),t=_.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,T){return!_.isUndefined(T[g])});const s=t.metaTokens,r=t.visitor||u,i=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&hC(e);if(!_.isFunction(r))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(_.isDate(p))return p.toISOString();if(!c&&_.isBlob(p))throw new ee("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(p)||_.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,g,T){let C=p;if(p&&!T&&typeof p=="object"){if(_.endsWith(g,"{}"))g=s?g:g.slice(0,-2),p=JSON.stringify(p);else if(_.isArray(p)&&lC(p)||_.isFileList(p)||_.endsWith(g,"[]")&&(C=_.toArray(p)))return g=Cv(g),C.forEach(function(B,K){!(_.isUndefined(B)||B===null)&&e.append(o===!0?bg([g],K,i):o===null?g:g+"[]",l(B))}),!1}return pd(p)?!0:(e.append(bg(T,g,i),l(p)),!1)}const h=[],d=Object.assign(uC,{defaultVisitor:u,convertValue:l,isVisitable:pd});function f(p,g){if(!_.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(p),_.forEach(p,function(C,O){(!(_.isUndefined(C)||C===null)&&r.call(e,C,_.isString(O)?O.trim():O,g,d))===!0&&f(C,g?g.concat(O):[O])}),h.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return f(n),e}function Sg(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Df(n,e){this._pairs=[],n&&nu(n,this,e)}const kv=Df.prototype;kv.append=function(e,t){this._pairs.push([e,t])};kv.toString=function(e){const t=e?function(s){return e.call(this,s,Sg)}:Sg;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function dC(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Av(n,e,t){if(!e)return n;const s=t&&t.encode||dC,r=t&&t.serialize;let i;if(r?i=r(e,t):i=_.isURLSearchParams(e)?e.toString():new Df(e,t).toString(s),i){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class fC{constructor(){this.handlers=[]}use(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Cg=fC,Nv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pC=typeof URLSearchParams<"u"?URLSearchParams:Df,mC=FormData,gC=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Bn={isBrowser:!0,classes:{URLSearchParams:pC,FormData:mC,Blob},isStandardBrowserEnv:gC,protocols:["http","https","file","blob","url","data"]};function yC(n,e){return nu(n,new Bn.classes.URLSearchParams,Object.assign({visitor:function(t,s,r,i){return Bn.isNode&&_.isBuffer(t)?(this.append(s,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function _C(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function vC(n){const e={},t=Object.keys(n);let s;const r=t.length;let i;for(s=0;s<r;s++)i=t[s],e[i]=n[i];return e}function Dv(n){function e(t,s,r,i){let o=t[i++];const a=Number.isFinite(+o),c=i>=t.length;return o=!o&&_.isArray(r)?r.length:o,c?(_.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!_.isObject(r[o]))&&(r[o]=[]),e(t,s,r[o],i)&&_.isArray(r[o])&&(r[o]=vC(r[o])),!a)}if(_.isFormData(n)&&_.isFunction(n.entries)){const t={};return _.forEachEntry(n,(s,r)=>{e(_C(s),r,t,0)}),t}return null}const wC={"Content-Type":void 0};function IC(n,e,t){if(_.isString(n))try{return(e||JSON.parse)(n),_.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}const su={transitional:Nv,adapter:["xhr","http"],transformRequest:[function(e,t){const s=t.getContentType()||"",r=s.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return r&&r?JSON.stringify(Dv(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return yC(e,this.formSerializer).toString();if((a=_.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return nu(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),IC(e)):e}],transformResponse:[function(e){const t=this.transitional||su.transitional,s=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&_.isString(e)&&(s&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bn.classes.FormData,Blob:Bn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(e){su.headers[e]={}});_.forEach(["post","put","patch"],function(e){su.headers[e]=_.merge(wC)});const Rf=su,EC=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TC=n=>{const e={};let t,s,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!t||e[t]&&EC[t])&&(t==="set-cookie"?e[t]?e[t].push(s):e[t]=[s]:e[t]=e[t]?e[t]+", "+s:s)}),e},kg=Symbol("internals");function fo(n){return n&&String(n).trim().toLowerCase()}function jc(n){return n===!1||n==null?n:_.isArray(n)?n.map(jc):String(n)}function bC(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(n);)e[s[1]]=s[2];return e}function SC(n){return/^[-_a-zA-Z]+$/.test(n.trim())}function Ag(n,e,t,s){if(_.isFunction(s))return s.call(this,e,t);if(!!_.isString(e)){if(_.isString(s))return e.indexOf(s)!==-1;if(_.isRegExp(s))return s.test(e)}}function CC(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function kC(n,e){const t=_.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+t,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class ru{constructor(e){e&&this.set(e)}set(e,t,s){const r=this;function i(a,c,l){const u=fo(c);if(!u)throw new Error("header name must be a non-empty string");const h=_.findKey(r,u);(!h||r[h]===void 0||l===!0||l===void 0&&r[h]!==!1)&&(r[h||c]=jc(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));return _.isPlainObject(e)||e instanceof this.constructor?o(e,t):_.isString(e)&&(e=e.trim())&&!SC(e)?o(TC(e),t):e!=null&&i(t,e,s),this}get(e,t){if(e=fo(e),e){const s=_.findKey(this,e);if(s){const r=this[s];if(!t)return r;if(t===!0)return bC(r);if(_.isFunction(t))return t.call(this,r,s);if(_.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=fo(e),e){const s=_.findKey(this,e);return!!(s&&(!t||Ag(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let r=!1;function i(o){if(o=fo(o),o){const a=_.findKey(s,o);a&&(!t||Ag(s,s[a],a,t))&&(delete s[a],r=!0)}}return _.isArray(e)?e.forEach(i):i(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,s={};return _.forEach(this,(r,i)=>{const o=_.findKey(s,i);if(o){t[o]=jc(r),delete t[i];return}const a=e?CC(i):String(i).trim();a!==i&&delete t[i],t[a]=jc(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _.forEach(this,(s,r)=>{s!=null&&s!==!1&&(t[r]=e&&_.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const s=new this(e);return t.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[kg]=this[kg]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=fo(o);s[a]||(kC(r,o),s[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}}ru.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);_.freezeMethods(ru.prototype);_.freezeMethods(ru);const Wn=ru;function xh(n,e){const t=this||Rf,s=e||t,r=Wn.from(s.headers);let i=s.data;return _.forEach(n,function(a){i=a.call(t,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Rv(n){return!!(n&&n.__CANCEL__)}function qa(n,e,t){ee.call(this,n==null?"canceled":n,ee.ERR_CANCELED,e,t),this.name="CanceledError"}_.inherits(qa,ee,{__CANCEL__:!0});const AC=null;function NC(n,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?n(t):e(new ee("Request failed with status code "+t.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const DC=Bn.isStandardBrowserEnv?function(){return{write:function(t,s,r,i,o,a){const c=[];c.push(t+"="+encodeURIComponent(s)),_.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),_.isString(i)&&c.push("path="+i),_.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){const s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function RC(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function xC(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function xv(n,e){return n&&!RC(e)?xC(n,e):e}const OC=Bn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let s;function r(i){let o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=r(window.location.href),function(o){const a=_.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function PC(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function MC(n,e){n=n||10;const t=new Array(n),s=new Array(n);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=s[i];o||(o=l),t[r]=c,s[r]=l;let h=i,d=0;for(;h!==r;)d+=t[h++],h=h%n;if(r=(r+1)%n,r===i&&(i=(i+1)%n),l-o<e)return;const f=u&&l-u;return f?Math.round(d*1e3/f):void 0}}function Ng(n,e){let t=0;const s=MC(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-t,c=s(a),l=i<=o;t=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:r};u[e?"download":"upload"]=!0,n(u)}}const LC=typeof XMLHttpRequest<"u",FC=LC&&function(n){return new Promise(function(t,s){let r=n.data;const i=Wn.from(n.headers).normalize(),o=n.responseType;let a;function c(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}_.isFormData(r)&&Bn.isStandardBrowserEnv&&i.setContentType(!1);let l=new XMLHttpRequest;if(n.auth){const f=n.auth.username||"",p=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+p))}const u=xv(n.baseURL,n.url);l.open(n.method.toUpperCase(),Av(u,n.params,n.paramsSerializer),!0),l.timeout=n.timeout;function h(){if(!l)return;const f=Wn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:n,request:l};NC(function(C){t(C),c()},function(C){s(C),c()},g),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(s(new ee("Request aborted",ee.ECONNABORTED,n,l)),l=null)},l.onerror=function(){s(new ee("Network Error",ee.ERR_NETWORK,n,l)),l=null},l.ontimeout=function(){let p=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const g=n.transitional||Nv;n.timeoutErrorMessage&&(p=n.timeoutErrorMessage),s(new ee(p,g.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,n,l)),l=null},Bn.isStandardBrowserEnv){const f=(n.withCredentials||OC(u))&&n.xsrfCookieName&&DC.read(n.xsrfCookieName);f&&i.set(n.xsrfHeaderName,f)}r===void 0&&i.setContentType(null),"setRequestHeader"in l&&_.forEach(i.toJSON(),function(p,g){l.setRequestHeader(g,p)}),_.isUndefined(n.withCredentials)||(l.withCredentials=!!n.withCredentials),o&&o!=="json"&&(l.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&l.addEventListener("progress",Ng(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ng(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=f=>{!l||(s(!f||f.type?new qa(null,n,l):f),l.abort(),l=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const d=PC(u);if(d&&Bn.protocols.indexOf(d)===-1){s(new ee("Unsupported protocol "+d+":",ee.ERR_BAD_REQUEST,n));return}l.send(r||null)})},Gc={http:AC,xhr:FC};_.forEach(Gc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const UC={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:e}=n;let t,s;for(let r=0;r<e&&(t=n[r],!(s=_.isString(t)?Gc[t.toLowerCase()]:t));r++);if(!s)throw s===!1?new ee(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(Gc,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!_.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:Gc};function Oh(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new qa}function Dg(n){return Oh(n),n.headers=Wn.from(n.headers),n.data=xh.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),UC.getAdapter(n.adapter||Rf.adapter)(n).then(function(s){return Oh(n),s.data=xh.call(n,n.transformResponse,s),s.headers=Wn.from(s.headers),s},function(s){return Rv(s)||(Oh(n),s&&s.response&&(s.response.data=xh.call(n,n.transformResponse,s.response),s.response.headers=Wn.from(s.response.headers))),Promise.reject(s)})}const Rg=n=>n instanceof Wn?n.toJSON():n;function Zo(n,e){e=e||{};const t={};function s(l,u,h){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:h},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function r(l,u,h){if(_.isUndefined(u)){if(!_.isUndefined(l))return s(void 0,l,h)}else return s(l,u,h)}function i(l,u){if(!_.isUndefined(u))return s(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return s(void 0,l)}else return s(void 0,u)}function a(l,u,h){if(h in e)return s(l,u);if(h in n)return s(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>r(Rg(l),Rg(u),!0)};return _.forEach(Object.keys(n).concat(Object.keys(e)),function(u){const h=c[u]||r,d=h(n[u],e[u],u);_.isUndefined(d)&&h!==a||(t[u]=d)}),t}const Ov="1.2.0",xf={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{xf[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});const xg={};xf.transitional=function(e,t,s){function r(i,o){return"[Axios v"+Ov+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new ee(r(o," has been removed"+(t?" in "+t:"")),ee.ERR_DEPRECATED);return t&&!xg[o]&&(xg[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,a):!0}};function VC(n,e,t){if(typeof n!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=n[i],c=a===void 0||o(a,i,n);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const md={assertOptions:VC,validators:xf},os=md.validators;class il{constructor(e){this.defaults=e,this.interceptors={request:new Cg,response:new Cg}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Zo(this.defaults,t);const{transitional:s,paramsSerializer:r,headers:i}=t;s!==void 0&&md.assertOptions(s,{silentJSONParsing:os.transitional(os.boolean),forcedJSONParsing:os.transitional(os.boolean),clarifyTimeoutError:os.transitional(os.boolean)},!1),r!==void 0&&md.assertOptions(r,{encode:os.function,serialize:os.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o;o=i&&_.merge(i.common,i[t.method]),o&&_.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),t.headers=Wn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(c=c&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,h=0,d;if(!c){const p=[Dg.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),d=p.length,u=Promise.resolve(t);h<d;)u=u.then(p[h++],p[h++]);return u}d=a.length;let f=t;for(h=0;h<d;){const p=a[h++],g=a[h++];try{f=p(f)}catch(T){g.call(this,T);break}}try{u=Dg.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=Zo(this.defaults,e);const t=xv(e.baseURL,e.url);return Av(t,e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(e){il.prototype[e]=function(t,s){return this.request(Zo(s||{},{method:e,url:t,data:(s||{}).data}))}});_.forEach(["post","put","patch"],function(e){function t(s){return function(i,o,a){return this.request(Zo(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}il.prototype[e]=t(),il.prototype[e+"Form"]=t(!0)});const Hc=il;class Of{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new qa(i,o,a),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Of(function(r){e=r}),cancel:e}}}const BC=Of;function WC(n){return function(t){return n.apply(null,t)}}function qC(n){return _.isObject(n)&&n.isAxiosError===!0}function Pv(n){const e=new Hc(n),t=gv(Hc.prototype.request,e);return _.extend(t,Hc.prototype,e,{allOwnKeys:!0}),_.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Pv(Zo(n,r))},t}const rt=Pv(Rf);rt.Axios=Hc;rt.CanceledError=qa;rt.CancelToken=BC;rt.isCancel=Rv;rt.VERSION=Ov;rt.toFormData=nu;rt.AxiosError=ee;rt.Cancel=rt.CanceledError;rt.all=function(e){return Promise.all(e)};rt.spread=WC;rt.isAxiosError=qC;rt.AxiosHeaders=Wn;rt.formToJSON=n=>Dv(_.isHTMLForm(n)?new FormData(n):n);rt.default=rt;const $C=rt;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Mv;function A(){return Mv.apply(null,arguments)}function jC(n){Mv=n}function rn(n){return n instanceof Array||Object.prototype.toString.call(n)==="[object Array]"}function mr(n){return n!=null&&Object.prototype.toString.call(n)==="[object Object]"}function se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Pf(n){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(n).length===0;var e;for(e in n)if(se(n,e))return!1;return!0}function It(n){return n===void 0}function Hn(n){return typeof n=="number"||Object.prototype.toString.call(n)==="[object Number]"}function $a(n){return n instanceof Date||Object.prototype.toString.call(n)==="[object Date]"}function Lv(n,e){var t=[],s,r=n.length;for(s=0;s<r;++s)t.push(e(n[s],s));return t}function ds(n,e){for(var t in e)se(e,t)&&(n[t]=e[t]);return se(e,"toString")&&(n.toString=e.toString),se(e,"valueOf")&&(n.valueOf=e.valueOf),n}function Nn(n,e,t,s){return ow(n,e,t,s,!0).utc()}function GC(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function j(n){return n._pf==null&&(n._pf=GC()),n._pf}var gd;Array.prototype.some?gd=Array.prototype.some:gd=function(n){var e=Object(this),t=e.length>>>0,s;for(s=0;s<t;s++)if(s in e&&n.call(this,e[s],s,e))return!0;return!1};function Mf(n){if(n._isValid==null){var e=j(n),t=gd.call(e.parsedDateParts,function(r){return r!=null}),s=!isNaN(n._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&t);if(n._strict&&(s=s&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(n))n._isValid=s;else return s}return n._isValid}function iu(n){var e=Nn(NaN);return n!=null?ds(j(e),n):j(e).userInvalidated=!0,e}var Og=A.momentProperties=[],Ph=!1;function Lf(n,e){var t,s,r,i=Og.length;if(It(e._isAMomentObject)||(n._isAMomentObject=e._isAMomentObject),It(e._i)||(n._i=e._i),It(e._f)||(n._f=e._f),It(e._l)||(n._l=e._l),It(e._strict)||(n._strict=e._strict),It(e._tzm)||(n._tzm=e._tzm),It(e._isUTC)||(n._isUTC=e._isUTC),It(e._offset)||(n._offset=e._offset),It(e._pf)||(n._pf=j(e)),It(e._locale)||(n._locale=e._locale),i>0)for(t=0;t<i;t++)s=Og[t],r=e[s],It(r)||(n[s]=r);return n}function ja(n){Lf(this,n),this._d=new Date(n._d!=null?n._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ph===!1&&(Ph=!0,A.updateOffset(this),Ph=!1)}function on(n){return n instanceof ja||n!=null&&n._isAMomentObject!=null}function Fv(n){A.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+n)}function Kt(n,e){var t=!0;return ds(function(){if(A.deprecationHandler!=null&&A.deprecationHandler(null,n),t){var s=[],r,i,o,a=arguments.length;for(i=0;i<a;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(o in arguments[0])se(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];s.push(r)}Fv(n+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),t=!1}return e.apply(this,arguments)},e)}var Pg={};function Uv(n,e){A.deprecationHandler!=null&&A.deprecationHandler(n,e),Pg[n]||(Fv(e),Pg[n]=!0)}A.suppressDeprecationWarnings=!1;A.deprecationHandler=null;function Dn(n){return typeof Function<"u"&&n instanceof Function||Object.prototype.toString.call(n)==="[object Function]"}function HC(n){var e,t;for(t in n)se(n,t)&&(e=n[t],Dn(e)?this[t]=e:this["_"+t]=e);this._config=n,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function yd(n,e){var t=ds({},n),s;for(s in e)se(e,s)&&(mr(n[s])&&mr(e[s])?(t[s]={},ds(t[s],n[s]),ds(t[s],e[s])):e[s]!=null?t[s]=e[s]:delete t[s]);for(s in n)se(n,s)&&!se(e,s)&&mr(n[s])&&(t[s]=ds({},t[s]));return t}function Ff(n){n!=null&&this.set(n)}var _d;Object.keys?_d=Object.keys:_d=function(n){var e,t=[];for(e in n)se(n,e)&&t.push(e);return t};var YC={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function zC(n,e,t){var s=this._calendar[n]||this._calendar.sameElse;return Dn(s)?s.call(e,t):s}function En(n,e,t){var s=""+Math.abs(n),r=e-s.length,i=n>=0;return(i?t?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+s}var Uf=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Nc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Mh={},di={};function P(n,e,t,s){var r=s;typeof s=="string"&&(r=function(){return this[s]()}),n&&(di[n]=r),e&&(di[e[0]]=function(){return En(r.apply(this,arguments),e[1],e[2])}),t&&(di[t]=function(){return this.localeData().ordinal(r.apply(this,arguments),n)})}function KC(n){return n.match(/\[[\s\S]/)?n.replace(/^\[|\]$/g,""):n.replace(/\\/g,"")}function QC(n){var e=n.match(Uf),t,s;for(t=0,s=e.length;t<s;t++)di[e[t]]?e[t]=di[e[t]]:e[t]=KC(e[t]);return function(r){var i="",o;for(o=0;o<s;o++)i+=Dn(e[o])?e[o].call(r,n):e[o];return i}}function Yc(n,e){return n.isValid()?(e=Vv(e,n.localeData()),Mh[e]=Mh[e]||QC(e),Mh[e](n)):n.localeData().invalidDate()}function Vv(n,e){var t=5;function s(r){return e.longDateFormat(r)||r}for(Nc.lastIndex=0;t>=0&&Nc.test(n);)n=n.replace(Nc,s),Nc.lastIndex=0,t-=1;return n}var JC={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function XC(n){var e=this._longDateFormat[n],t=this._longDateFormat[n.toUpperCase()];return e||!t?e:(this._longDateFormat[n]=t.match(Uf).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[n])}var ZC="Invalid date";function ek(){return this._invalidDate}var tk="%d",nk=/\d{1,2}/;function sk(n){return this._ordinal.replace("%d",n)}var rk={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function ik(n,e,t,s){var r=this._relativeTime[t];return Dn(r)?r(n,e,t,s):r.replace(/%d/i,n)}function ok(n,e){var t=this._relativeTime[n>0?"future":"past"];return Dn(t)?t(e):t.replace(/%s/i,e)}var Lo={};function ft(n,e){var t=n.toLowerCase();Lo[t]=Lo[t+"s"]=Lo[e]=n}function Qt(n){return typeof n=="string"?Lo[n]||Lo[n.toLowerCase()]:void 0}function Vf(n){var e={},t,s;for(s in n)se(n,s)&&(t=Qt(s),t&&(e[t]=n[s]));return e}var Bv={};function pt(n,e){Bv[n]=e}function ak(n){var e=[],t;for(t in n)se(n,t)&&e.push({unit:t,priority:Bv[t]});return e.sort(function(s,r){return s.priority-r.priority}),e}function ou(n){return n%4===0&&n%100!==0||n%400===0}function qt(n){return n<0?Math.ceil(n)||0:Math.floor(n)}function z(n){var e=+n,t=0;return e!==0&&isFinite(e)&&(t=qt(e)),t}function ji(n,e){return function(t){return t!=null?(Wv(this,n,t),A.updateOffset(this,e),this):ol(this,n)}}function ol(n,e){return n.isValid()?n._d["get"+(n._isUTC?"UTC":"")+e]():NaN}function Wv(n,e,t){n.isValid()&&!isNaN(t)&&(e==="FullYear"&&ou(n.year())&&n.month()===1&&n.date()===29?(t=z(t),n._d["set"+(n._isUTC?"UTC":"")+e](t,n.month(),du(t,n.month()))):n._d["set"+(n._isUTC?"UTC":"")+e](t))}function ck(n){return n=Qt(n),Dn(this[n])?this[n]():this}function lk(n,e){if(typeof n=="object"){n=Vf(n);var t=ak(n),s,r=t.length;for(s=0;s<r;s++)this[t[s].unit](n[t[s].unit])}else if(n=Qt(n),Dn(this[n]))return this[n](e);return this}var qv=/\d/,Wt=/\d\d/,$v=/\d{3}/,Bf=/\d{4}/,au=/[+-]?\d{6}/,ge=/\d\d?/,jv=/\d\d\d\d?/,Gv=/\d\d\d\d\d\d?/,cu=/\d{1,3}/,Wf=/\d{1,4}/,lu=/[+-]?\d{1,6}/,Gi=/\d+/,uu=/[+-]?\d+/,uk=/Z|[+-]\d\d:?\d\d/gi,hu=/Z|[+-]\d\d(?::?\d\d)?/gi,hk=/[+-]?\d+(\.\d{1,3})?/,Ga=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,al;al={};function D(n,e,t){al[n]=Dn(e)?e:function(s,r){return s&&t?t:e}}function dk(n,e){return se(al,n)?al[n](e._strict,e._locale):new RegExp(fk(n))}function fk(n){return Rt(n.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,s,r,i){return t||s||r||i}))}function Rt(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var vd={};function le(n,e){var t,s=e,r;for(typeof n=="string"&&(n=[n]),Hn(e)&&(s=function(i,o){o[e]=z(i)}),r=n.length,t=0;t<r;t++)vd[n[t]]=s}function Ha(n,e){le(n,function(t,s,r,i){r._w=r._w||{},e(t,r._w,r,i)})}function pk(n,e,t){e!=null&&se(vd,n)&&vd[n](e,t._a,t,n)}var at=0,Pn=1,un=2,Me=3,Zt=4,Mn=5,cr=6,mk=7,gk=8;function yk(n,e){return(n%e+e)%e}var Ne;Array.prototype.indexOf?Ne=Array.prototype.indexOf:Ne=function(n){var e;for(e=0;e<this.length;++e)if(this[e]===n)return e;return-1};function du(n,e){if(isNaN(n)||isNaN(e))return NaN;var t=yk(e,12);return n+=(e-t)/12,t===1?ou(n)?29:28:31-t%7%2}P("M",["MM",2],"Mo",function(){return this.month()+1});P("MMM",0,0,function(n){return this.localeData().monthsShort(this,n)});P("MMMM",0,0,function(n){return this.localeData().months(this,n)});ft("month","M");pt("month",8);D("M",ge);D("MM",ge,Wt);D("MMM",function(n,e){return e.monthsShortRegex(n)});D("MMMM",function(n,e){return e.monthsRegex(n)});le(["M","MM"],function(n,e){e[Pn]=z(n)-1});le(["MMM","MMMM"],function(n,e,t,s){var r=t._locale.monthsParse(n,s,t._strict);r!=null?e[Pn]=r:j(t).invalidMonth=n});var _k="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Hv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,vk=Ga,wk=Ga;function Ik(n,e){return n?rn(this._months)?this._months[n.month()]:this._months[(this._months.isFormat||Yv).test(e)?"format":"standalone"][n.month()]:rn(this._months)?this._months:this._months.standalone}function Ek(n,e){return n?rn(this._monthsShort)?this._monthsShort[n.month()]:this._monthsShort[Yv.test(e)?"format":"standalone"][n.month()]:rn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Tk(n,e,t){var s,r,i,o=n.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)i=Nn([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return t?e==="MMM"?(r=Ne.call(this._shortMonthsParse,o),r!==-1?r:null):(r=Ne.call(this._longMonthsParse,o),r!==-1?r:null):e==="MMM"?(r=Ne.call(this._shortMonthsParse,o),r!==-1?r:(r=Ne.call(this._longMonthsParse,o),r!==-1?r:null)):(r=Ne.call(this._longMonthsParse,o),r!==-1?r:(r=Ne.call(this._shortMonthsParse,o),r!==-1?r:null))}function bk(n,e,t){var s,r,i;if(this._monthsParseExact)return Tk.call(this,n,e,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(r=Nn([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!t&&!this._monthsParse[s]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),t&&e==="MMMM"&&this._longMonthsParse[s].test(n))return s;if(t&&e==="MMM"&&this._shortMonthsParse[s].test(n))return s;if(!t&&this._monthsParse[s].test(n))return s}}function zv(n,e){var t;if(!n.isValid())return n;if(typeof e=="string"){if(/^\d+$/.test(e))e=z(e);else if(e=n.localeData().monthsParse(e),!Hn(e))return n}return t=Math.min(n.date(),du(n.year(),e)),n._d["set"+(n._isUTC?"UTC":"")+"Month"](e,t),n}function Kv(n){return n!=null?(zv(this,n),A.updateOffset(this,!0),this):ol(this,"Month")}function Sk(){return du(this.year(),this.month())}function Ck(n){return this._monthsParseExact?(se(this,"_monthsRegex")||Qv.call(this),n?this._monthsShortStrictRegex:this._monthsShortRegex):(se(this,"_monthsShortRegex")||(this._monthsShortRegex=vk),this._monthsShortStrictRegex&&n?this._monthsShortStrictRegex:this._monthsShortRegex)}function kk(n){return this._monthsParseExact?(se(this,"_monthsRegex")||Qv.call(this),n?this._monthsStrictRegex:this._monthsRegex):(se(this,"_monthsRegex")||(this._monthsRegex=wk),this._monthsStrictRegex&&n?this._monthsStrictRegex:this._monthsRegex)}function Qv(){function n(o,a){return a.length-o.length}var e=[],t=[],s=[],r,i;for(r=0;r<12;r++)i=Nn([2e3,r]),e.push(this.monthsShort(i,"")),t.push(this.months(i,"")),s.push(this.months(i,"")),s.push(this.monthsShort(i,""));for(e.sort(n),t.sort(n),s.sort(n),r=0;r<12;r++)e[r]=Rt(e[r]),t[r]=Rt(t[r]);for(r=0;r<24;r++)s[r]=Rt(s[r]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}P("Y",0,0,function(){var n=this.year();return n<=9999?En(n,4):"+"+n});P(0,["YY",2],0,function(){return this.year()%100});P(0,["YYYY",4],0,"year");P(0,["YYYYY",5],0,"year");P(0,["YYYYYY",6,!0],0,"year");ft("year","y");pt("year",1);D("Y",uu);D("YY",ge,Wt);D("YYYY",Wf,Bf);D("YYYYY",lu,au);D("YYYYYY",lu,au);le(["YYYYY","YYYYYY"],at);le("YYYY",function(n,e){e[at]=n.length===2?A.parseTwoDigitYear(n):z(n)});le("YY",function(n,e){e[at]=A.parseTwoDigitYear(n)});le("Y",function(n,e){e[at]=parseInt(n,10)});function Fo(n){return ou(n)?366:365}A.parseTwoDigitYear=function(n){return z(n)+(z(n)>68?1900:2e3)};var Jv=ji("FullYear",!0);function Ak(){return ou(this.year())}function Nk(n,e,t,s,r,i,o){var a;return n<100&&n>=0?(a=new Date(n+400,e,t,s,r,i,o),isFinite(a.getFullYear())&&a.setFullYear(n)):a=new Date(n,e,t,s,r,i,o),a}function ea(n){var e,t;return n<100&&n>=0?(t=Array.prototype.slice.call(arguments),t[0]=n+400,e=new Date(Date.UTC.apply(null,t)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(n)):e=new Date(Date.UTC.apply(null,arguments)),e}function cl(n,e,t){var s=7+e-t,r=(7+ea(n,0,s).getUTCDay()-e)%7;return-r+s-1}function Xv(n,e,t,s,r){var i=(7+t-s)%7,o=cl(n,s,r),a=1+7*(e-1)+i+o,c,l;return a<=0?(c=n-1,l=Fo(c)+a):a>Fo(n)?(c=n+1,l=a-Fo(n)):(c=n,l=a),{year:c,dayOfYear:l}}function ta(n,e,t){var s=cl(n.year(),e,t),r=Math.floor((n.dayOfYear()-s-1)/7)+1,i,o;return r<1?(o=n.year()-1,i=r+qn(o,e,t)):r>qn(n.year(),e,t)?(i=r-qn(n.year(),e,t),o=n.year()+1):(o=n.year(),i=r),{week:i,year:o}}function qn(n,e,t){var s=cl(n,e,t),r=cl(n+1,e,t);return(Fo(n)-s+r)/7}P("w",["ww",2],"wo","week");P("W",["WW",2],"Wo","isoWeek");ft("week","w");ft("isoWeek","W");pt("week",5);pt("isoWeek",5);D("w",ge);D("ww",ge,Wt);D("W",ge);D("WW",ge,Wt);Ha(["w","ww","W","WW"],function(n,e,t,s){e[s.substr(0,1)]=z(n)});function Dk(n){return ta(n,this._week.dow,this._week.doy).week}var Rk={dow:0,doy:6};function xk(){return this._week.dow}function Ok(){return this._week.doy}function Pk(n){var e=this.localeData().week(this);return n==null?e:this.add((n-e)*7,"d")}function Mk(n){var e=ta(this,1,4).week;return n==null?e:this.add((n-e)*7,"d")}P("d",0,"do","day");P("dd",0,0,function(n){return this.localeData().weekdaysMin(this,n)});P("ddd",0,0,function(n){return this.localeData().weekdaysShort(this,n)});P("dddd",0,0,function(n){return this.localeData().weekdays(this,n)});P("e",0,0,"weekday");P("E",0,0,"isoWeekday");ft("day","d");ft("weekday","e");ft("isoWeekday","E");pt("day",11);pt("weekday",11);pt("isoWeekday",11);D("d",ge);D("e",ge);D("E",ge);D("dd",function(n,e){return e.weekdaysMinRegex(n)});D("ddd",function(n,e){return e.weekdaysShortRegex(n)});D("dddd",function(n,e){return e.weekdaysRegex(n)});Ha(["dd","ddd","dddd"],function(n,e,t,s){var r=t._locale.weekdaysParse(n,s,t._strict);r!=null?e.d=r:j(t).invalidWeekday=n});Ha(["d","e","E"],function(n,e,t,s){e[s]=z(n)});function Lk(n,e){return typeof n!="string"?n:isNaN(n)?(n=e.weekdaysParse(n),typeof n=="number"?n:null):parseInt(n,10)}function Fk(n,e){return typeof n=="string"?e.weekdaysParse(n)%7||7:isNaN(n)?null:n}function qf(n,e){return n.slice(e,7).concat(n.slice(0,e))}var Uk="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Zv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Vk="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Bk=Ga,Wk=Ga,qk=Ga;function $k(n,e){var t=rn(this._weekdays)?this._weekdays:this._weekdays[n&&n!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return n===!0?qf(t,this._week.dow):n?t[n.day()]:t}function jk(n){return n===!0?qf(this._weekdaysShort,this._week.dow):n?this._weekdaysShort[n.day()]:this._weekdaysShort}function Gk(n){return n===!0?qf(this._weekdaysMin,this._week.dow):n?this._weekdaysMin[n.day()]:this._weekdaysMin}function Hk(n,e,t){var s,r,i,o=n.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)i=Nn([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return t?e==="dddd"?(r=Ne.call(this._weekdaysParse,o),r!==-1?r:null):e==="ddd"?(r=Ne.call(this._shortWeekdaysParse,o),r!==-1?r:null):(r=Ne.call(this._minWeekdaysParse,o),r!==-1?r:null):e==="dddd"?(r=Ne.call(this._weekdaysParse,o),r!==-1||(r=Ne.call(this._shortWeekdaysParse,o),r!==-1)?r:(r=Ne.call(this._minWeekdaysParse,o),r!==-1?r:null)):e==="ddd"?(r=Ne.call(this._shortWeekdaysParse,o),r!==-1||(r=Ne.call(this._weekdaysParse,o),r!==-1)?r:(r=Ne.call(this._minWeekdaysParse,o),r!==-1?r:null)):(r=Ne.call(this._minWeekdaysParse,o),r!==-1||(r=Ne.call(this._weekdaysParse,o),r!==-1)?r:(r=Ne.call(this._shortWeekdaysParse,o),r!==-1?r:null))}function Yk(n,e,t){var s,r,i;if(this._weekdaysParseExact)return Hk.call(this,n,e,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(r=Nn([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),t&&e==="dddd"&&this._fullWeekdaysParse[s].test(n))return s;if(t&&e==="ddd"&&this._shortWeekdaysParse[s].test(n))return s;if(t&&e==="dd"&&this._minWeekdaysParse[s].test(n))return s;if(!t&&this._weekdaysParse[s].test(n))return s}}function zk(n){if(!this.isValid())return n!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return n!=null?(n=Lk(n,this.localeData()),this.add(n-e,"d")):e}function Kk(n){if(!this.isValid())return n!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return n==null?e:this.add(n-e,"d")}function Qk(n){if(!this.isValid())return n!=null?this:NaN;if(n!=null){var e=Fk(n,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function Jk(n){return this._weekdaysParseExact?(se(this,"_weekdaysRegex")||$f.call(this),n?this._weekdaysStrictRegex:this._weekdaysRegex):(se(this,"_weekdaysRegex")||(this._weekdaysRegex=Bk),this._weekdaysStrictRegex&&n?this._weekdaysStrictRegex:this._weekdaysRegex)}function Xk(n){return this._weekdaysParseExact?(se(this,"_weekdaysRegex")||$f.call(this),n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(se(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Wk),this._weekdaysShortStrictRegex&&n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Zk(n){return this._weekdaysParseExact?(se(this,"_weekdaysRegex")||$f.call(this),n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(se(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=qk),this._weekdaysMinStrictRegex&&n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function $f(){function n(u,h){return h.length-u.length}var e=[],t=[],s=[],r=[],i,o,a,c,l;for(i=0;i<7;i++)o=Nn([2e3,1]).day(i),a=Rt(this.weekdaysMin(o,"")),c=Rt(this.weekdaysShort(o,"")),l=Rt(this.weekdays(o,"")),e.push(a),t.push(c),s.push(l),r.push(a),r.push(c),r.push(l);e.sort(n),t.sort(n),s.sort(n),r.sort(n),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function jf(){return this.hours()%12||12}function eA(){return this.hours()||24}P("H",["HH",2],0,"hour");P("h",["hh",2],0,jf);P("k",["kk",2],0,eA);P("hmm",0,0,function(){return""+jf.apply(this)+En(this.minutes(),2)});P("hmmss",0,0,function(){return""+jf.apply(this)+En(this.minutes(),2)+En(this.seconds(),2)});P("Hmm",0,0,function(){return""+this.hours()+En(this.minutes(),2)});P("Hmmss",0,0,function(){return""+this.hours()+En(this.minutes(),2)+En(this.seconds(),2)});function ew(n,e){P(n,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}ew("a",!0);ew("A",!1);ft("hour","h");pt("hour",13);function tw(n,e){return e._meridiemParse}D("a",tw);D("A",tw);D("H",ge);D("h",ge);D("k",ge);D("HH",ge,Wt);D("hh",ge,Wt);D("kk",ge,Wt);D("hmm",jv);D("hmmss",Gv);D("Hmm",jv);D("Hmmss",Gv);le(["H","HH"],Me);le(["k","kk"],function(n,e,t){var s=z(n);e[Me]=s===24?0:s});le(["a","A"],function(n,e,t){t._isPm=t._locale.isPM(n),t._meridiem=n});le(["h","hh"],function(n,e,t){e[Me]=z(n),j(t).bigHour=!0});le("hmm",function(n,e,t){var s=n.length-2;e[Me]=z(n.substr(0,s)),e[Zt]=z(n.substr(s)),j(t).bigHour=!0});le("hmmss",function(n,e,t){var s=n.length-4,r=n.length-2;e[Me]=z(n.substr(0,s)),e[Zt]=z(n.substr(s,2)),e[Mn]=z(n.substr(r)),j(t).bigHour=!0});le("Hmm",function(n,e,t){var s=n.length-2;e[Me]=z(n.substr(0,s)),e[Zt]=z(n.substr(s))});le("Hmmss",function(n,e,t){var s=n.length-4,r=n.length-2;e[Me]=z(n.substr(0,s)),e[Zt]=z(n.substr(s,2)),e[Mn]=z(n.substr(r))});function tA(n){return(n+"").toLowerCase().charAt(0)==="p"}var nA=/[ap]\.?m?\.?/i,sA=ji("Hours",!0);function rA(n,e,t){return n>11?t?"pm":"PM":t?"am":"AM"}var nw={calendar:YC,longDateFormat:JC,invalidDate:ZC,ordinal:tk,dayOfMonthOrdinalParse:nk,relativeTime:rk,months:_k,monthsShort:Hv,week:Rk,weekdays:Uk,weekdaysMin:Vk,weekdaysShort:Zv,meridiemParse:nA},_e={},po={},na;function iA(n,e){var t,s=Math.min(n.length,e.length);for(t=0;t<s;t+=1)if(n[t]!==e[t])return t;return s}function Mg(n){return n&&n.toLowerCase().replace("_","-")}function oA(n){for(var e=0,t,s,r,i;e<n.length;){for(i=Mg(n[e]).split("-"),t=i.length,s=Mg(n[e+1]),s=s?s.split("-"):null;t>0;){if(r=fu(i.slice(0,t).join("-")),r)return r;if(s&&s.length>=t&&iA(i,s)>=t-1)break;t--}e++}return na}function aA(n){return n.match("^[^/\\\\]*$")!=null}function fu(n){var e=null,t;if(_e[n]===void 0&&typeof module<"u"&&module&&module.exports&&aA(n))try{e=na._abbr,t=require,t("./locale/"+n),_s(e)}catch{_e[n]=null}return _e[n]}function _s(n,e){var t;return n&&(It(e)?t=Zn(n):t=Gf(n,e),t?na=t:typeof console<"u"&&console.warn&&console.warn("Locale "+n+" not found. Did you forget to load it?")),na._abbr}function Gf(n,e){if(e!==null){var t,s=nw;if(e.abbr=n,_e[n]!=null)Uv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=_e[n]._config;else if(e.parentLocale!=null)if(_e[e.parentLocale]!=null)s=_e[e.parentLocale]._config;else if(t=fu(e.parentLocale),t!=null)s=t._config;else return po[e.parentLocale]||(po[e.parentLocale]=[]),po[e.parentLocale].push({name:n,config:e}),null;return _e[n]=new Ff(yd(s,e)),po[n]&&po[n].forEach(function(r){Gf(r.name,r.config)}),_s(n),_e[n]}else return delete _e[n],null}function cA(n,e){if(e!=null){var t,s,r=nw;_e[n]!=null&&_e[n].parentLocale!=null?_e[n].set(yd(_e[n]._config,e)):(s=fu(n),s!=null&&(r=s._config),e=yd(r,e),s==null&&(e.abbr=n),t=new Ff(e),t.parentLocale=_e[n],_e[n]=t),_s(n)}else _e[n]!=null&&(_e[n].parentLocale!=null?(_e[n]=_e[n].parentLocale,n===_s()&&_s(n)):_e[n]!=null&&delete _e[n]);return _e[n]}function Zn(n){var e;if(n&&n._locale&&n._locale._abbr&&(n=n._locale._abbr),!n)return na;if(!rn(n)){if(e=fu(n),e)return e;n=[n]}return oA(n)}function lA(){return _d(_e)}function Hf(n){var e,t=n._a;return t&&j(n).overflow===-2&&(e=t[Pn]<0||t[Pn]>11?Pn:t[un]<1||t[un]>du(t[at],t[Pn])?un:t[Me]<0||t[Me]>24||t[Me]===24&&(t[Zt]!==0||t[Mn]!==0||t[cr]!==0)?Me:t[Zt]<0||t[Zt]>59?Zt:t[Mn]<0||t[Mn]>59?Mn:t[cr]<0||t[cr]>999?cr:-1,j(n)._overflowDayOfYear&&(e<at||e>un)&&(e=un),j(n)._overflowWeeks&&e===-1&&(e=mk),j(n)._overflowWeekday&&e===-1&&(e=gk),j(n).overflow=e),n}var uA=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,hA=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dA=/Z|[+-]\d\d(?::?\d\d)?/,Dc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Lh=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],fA=/^\/?Date\((-?\d+)/i,pA=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,mA={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function sw(n){var e,t,s=n._i,r=uA.exec(s)||hA.exec(s),i,o,a,c,l=Dc.length,u=Lh.length;if(r){for(j(n).iso=!0,e=0,t=l;e<t;e++)if(Dc[e][1].exec(r[1])){o=Dc[e][0],i=Dc[e][2]!==!1;break}if(o==null){n._isValid=!1;return}if(r[3]){for(e=0,t=u;e<t;e++)if(Lh[e][1].exec(r[3])){a=(r[2]||" ")+Lh[e][0];break}if(a==null){n._isValid=!1;return}}if(!i&&a!=null){n._isValid=!1;return}if(r[4])if(dA.exec(r[4]))c="Z";else{n._isValid=!1;return}n._f=o+(a||"")+(c||""),zf(n)}else n._isValid=!1}function gA(n,e,t,s,r,i){var o=[yA(n),Hv.indexOf(e),parseInt(t,10),parseInt(s,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}function yA(n){var e=parseInt(n,10);return e<=49?2e3+e:e<=999?1900+e:e}function _A(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function vA(n,e,t){if(n){var s=Zv.indexOf(n),r=new Date(e[0],e[1],e[2]).getDay();if(s!==r)return j(t).weekdayMismatch=!0,t._isValid=!1,!1}return!0}function wA(n,e,t){if(n)return mA[n];if(e)return 0;var s=parseInt(t,10),r=s%100,i=(s-r)/100;return i*60+r}function rw(n){var e=pA.exec(_A(n._i)),t;if(e){if(t=gA(e[4],e[3],e[2],e[5],e[6],e[7]),!vA(e[1],t,n))return;n._a=t,n._tzm=wA(e[8],e[9],e[10]),n._d=ea.apply(null,n._a),n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),j(n).rfc2822=!0}else n._isValid=!1}function IA(n){var e=fA.exec(n._i);if(e!==null){n._d=new Date(+e[1]);return}if(sw(n),n._isValid===!1)delete n._isValid;else return;if(rw(n),n._isValid===!1)delete n._isValid;else return;n._strict?n._isValid=!1:A.createFromInputFallback(n)}A.createFromInputFallback=Kt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(n){n._d=new Date(n._i+(n._useUTC?" UTC":""))});function oi(n,e,t){return n!=null?n:e!=null?e:t}function EA(n){var e=new Date(A.now());return n._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Yf(n){var e,t,s=[],r,i,o;if(!n._d){for(r=EA(n),n._w&&n._a[un]==null&&n._a[Pn]==null&&TA(n),n._dayOfYear!=null&&(o=oi(n._a[at],r[at]),(n._dayOfYear>Fo(o)||n._dayOfYear===0)&&(j(n)._overflowDayOfYear=!0),t=ea(o,0,n._dayOfYear),n._a[Pn]=t.getUTCMonth(),n._a[un]=t.getUTCDate()),e=0;e<3&&n._a[e]==null;++e)n._a[e]=s[e]=r[e];for(;e<7;e++)n._a[e]=s[e]=n._a[e]==null?e===2?1:0:n._a[e];n._a[Me]===24&&n._a[Zt]===0&&n._a[Mn]===0&&n._a[cr]===0&&(n._nextDay=!0,n._a[Me]=0),n._d=(n._useUTC?ea:Nk).apply(null,s),i=n._useUTC?n._d.getUTCDay():n._d.getDay(),n._tzm!=null&&n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),n._nextDay&&(n._a[Me]=24),n._w&&typeof n._w.d<"u"&&n._w.d!==i&&(j(n).weekdayMismatch=!0)}}function TA(n){var e,t,s,r,i,o,a,c,l;e=n._w,e.GG!=null||e.W!=null||e.E!=null?(i=1,o=4,t=oi(e.GG,n._a[at],ta(me(),1,4).year),s=oi(e.W,1),r=oi(e.E,1),(r<1||r>7)&&(c=!0)):(i=n._locale._week.dow,o=n._locale._week.doy,l=ta(me(),i,o),t=oi(e.gg,n._a[at],l.year),s=oi(e.w,l.week),e.d!=null?(r=e.d,(r<0||r>6)&&(c=!0)):e.e!=null?(r=e.e+i,(e.e<0||e.e>6)&&(c=!0)):r=i),s<1||s>qn(t,i,o)?j(n)._overflowWeeks=!0:c!=null?j(n)._overflowWeekday=!0:(a=Xv(t,s,r,i,o),n._a[at]=a.year,n._dayOfYear=a.dayOfYear)}A.ISO_8601=function(){};A.RFC_2822=function(){};function zf(n){if(n._f===A.ISO_8601){sw(n);return}if(n._f===A.RFC_2822){rw(n);return}n._a=[],j(n).empty=!0;var e=""+n._i,t,s,r,i,o,a=e.length,c=0,l,u;for(r=Vv(n._f,n._locale).match(Uf)||[],u=r.length,t=0;t<u;t++)i=r[t],s=(e.match(dk(i,n))||[])[0],s&&(o=e.substr(0,e.indexOf(s)),o.length>0&&j(n).unusedInput.push(o),e=e.slice(e.indexOf(s)+s.length),c+=s.length),di[i]?(s?j(n).empty=!1:j(n).unusedTokens.push(i),pk(i,s,n)):n._strict&&!s&&j(n).unusedTokens.push(i);j(n).charsLeftOver=a-c,e.length>0&&j(n).unusedInput.push(e),n._a[Me]<=12&&j(n).bigHour===!0&&n._a[Me]>0&&(j(n).bigHour=void 0),j(n).parsedDateParts=n._a.slice(0),j(n).meridiem=n._meridiem,n._a[Me]=bA(n._locale,n._a[Me],n._meridiem),l=j(n).era,l!==null&&(n._a[at]=n._locale.erasConvertYear(l,n._a[at])),Yf(n),Hf(n)}function bA(n,e,t){var s;return t==null?e:n.meridiemHour!=null?n.meridiemHour(e,t):(n.isPM!=null&&(s=n.isPM(t),s&&e<12&&(e+=12),!s&&e===12&&(e=0)),e)}function SA(n){var e,t,s,r,i,o,a=!1,c=n._f.length;if(c===0){j(n).invalidFormat=!0,n._d=new Date(NaN);return}for(r=0;r<c;r++)i=0,o=!1,e=Lf({},n),n._useUTC!=null&&(e._useUTC=n._useUTC),e._f=n._f[r],zf(e),Mf(e)&&(o=!0),i+=j(e).charsLeftOver,i+=j(e).unusedTokens.length*10,j(e).score=i,a?i<s&&(s=i,t=e):(s==null||i<s||o)&&(s=i,t=e,o&&(a=!0));ds(n,t||e)}function CA(n){if(!n._d){var e=Vf(n._i),t=e.day===void 0?e.date:e.day;n._a=Lv([e.year,e.month,t,e.hour,e.minute,e.second,e.millisecond],function(s){return s&&parseInt(s,10)}),Yf(n)}}function kA(n){var e=new ja(Hf(iw(n)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function iw(n){var e=n._i,t=n._f;return n._locale=n._locale||Zn(n._l),e===null||t===void 0&&e===""?iu({nullInput:!0}):(typeof e=="string"&&(n._i=e=n._locale.preparse(e)),on(e)?new ja(Hf(e)):($a(e)?n._d=e:rn(t)?SA(n):t?zf(n):AA(n),Mf(n)||(n._d=null),n))}function AA(n){var e=n._i;It(e)?n._d=new Date(A.now()):$a(e)?n._d=new Date(e.valueOf()):typeof e=="string"?IA(n):rn(e)?(n._a=Lv(e.slice(0),function(t){return parseInt(t,10)}),Yf(n)):mr(e)?CA(n):Hn(e)?n._d=new Date(e):A.createFromInputFallback(n)}function ow(n,e,t,s,r){var i={};return(e===!0||e===!1)&&(s=e,e=void 0),(t===!0||t===!1)&&(s=t,t=void 0),(mr(n)&&Pf(n)||rn(n)&&n.length===0)&&(n=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=t,i._i=n,i._f=e,i._strict=s,kA(i)}function me(n,e,t,s){return ow(n,e,t,s,!1)}var NA=Kt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=me.apply(null,arguments);return this.isValid()&&n.isValid()?n<this?this:n:iu()}),DA=Kt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=me.apply(null,arguments);return this.isValid()&&n.isValid()?n>this?this:n:iu()});function aw(n,e){var t,s;if(e.length===1&&rn(e[0])&&(e=e[0]),!e.length)return me();for(t=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][n](t))&&(t=e[s]);return t}function RA(){var n=[].slice.call(arguments,0);return aw("isBefore",n)}function xA(){var n=[].slice.call(arguments,0);return aw("isAfter",n)}var OA=function(){return Date.now?Date.now():+new Date},mo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function PA(n){var e,t=!1,s,r=mo.length;for(e in n)if(se(n,e)&&!(Ne.call(mo,e)!==-1&&(n[e]==null||!isNaN(n[e]))))return!1;for(s=0;s<r;++s)if(n[mo[s]]){if(t)return!1;parseFloat(n[mo[s]])!==z(n[mo[s]])&&(t=!0)}return!0}function MA(){return this._isValid}function LA(){return cn(NaN)}function pu(n){var e=Vf(n),t=e.year||0,s=e.quarter||0,r=e.month||0,i=e.week||e.isoWeek||0,o=e.day||0,a=e.hour||0,c=e.minute||0,l=e.second||0,u=e.millisecond||0;this._isValid=PA(e),this._milliseconds=+u+l*1e3+c*6e4+a*1e3*60*60,this._days=+o+i*7,this._months=+r+s*3+t*12,this._data={},this._locale=Zn(),this._bubble()}function zc(n){return n instanceof pu}function wd(n){return n<0?Math.round(-1*n)*-1:Math.round(n)}function FA(n,e,t){var s=Math.min(n.length,e.length),r=Math.abs(n.length-e.length),i=0,o;for(o=0;o<s;o++)(t&&n[o]!==e[o]||!t&&z(n[o])!==z(e[o]))&&i++;return i+r}function cw(n,e){P(n,0,0,function(){var t=this.utcOffset(),s="+";return t<0&&(t=-t,s="-"),s+En(~~(t/60),2)+e+En(~~t%60,2)})}cw("Z",":");cw("ZZ","");D("Z",hu);D("ZZ",hu);le(["Z","ZZ"],function(n,e,t){t._useUTC=!0,t._tzm=Kf(hu,n)});var UA=/([\+\-]|\d\d)/gi;function Kf(n,e){var t=(e||"").match(n),s,r,i;return t===null?null:(s=t[t.length-1]||[],r=(s+"").match(UA)||["-",0,0],i=+(r[1]*60)+z(r[2]),i===0?0:r[0]==="+"?i:-i)}function Qf(n,e){var t,s;return e._isUTC?(t=e.clone(),s=(on(n)||$a(n)?n.valueOf():me(n).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+s),A.updateOffset(t,!1),t):me(n).local()}function Id(n){return-Math.round(n._d.getTimezoneOffset())}A.updateOffset=function(){};function VA(n,e,t){var s=this._offset||0,r;if(!this.isValid())return n!=null?this:NaN;if(n!=null){if(typeof n=="string"){if(n=Kf(hu,n),n===null)return this}else Math.abs(n)<16&&!t&&(n=n*60);return!this._isUTC&&e&&(r=Id(this)),this._offset=n,this._isUTC=!0,r!=null&&this.add(r,"m"),s!==n&&(!e||this._changeInProgress?hw(this,cn(n-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,A.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Id(this)}function BA(n,e){return n!=null?(typeof n!="string"&&(n=-n),this.utcOffset(n,e),this):-this.utcOffset()}function WA(n){return this.utcOffset(0,n)}function qA(n){return this._isUTC&&(this.utcOffset(0,n),this._isUTC=!1,n&&this.subtract(Id(this),"m")),this}function $A(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var n=Kf(uk,this._i);n!=null?this.utcOffset(n):this.utcOffset(0,!0)}return this}function jA(n){return this.isValid()?(n=n?me(n).utcOffset():0,(this.utcOffset()-n)%60===0):!1}function GA(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function HA(){if(!It(this._isDSTShifted))return this._isDSTShifted;var n={},e;return Lf(n,this),n=iw(n),n._a?(e=n._isUTC?Nn(n._a):me(n._a),this._isDSTShifted=this.isValid()&&FA(n._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function YA(){return this.isValid()?!this._isUTC:!1}function zA(){return this.isValid()?this._isUTC:!1}function lw(){return this.isValid()?this._isUTC&&this._offset===0:!1}var KA=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,QA=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function cn(n,e){var t=n,s=null,r,i,o;return zc(n)?t={ms:n._milliseconds,d:n._days,M:n._months}:Hn(n)||!isNaN(+n)?(t={},e?t[e]=+n:t.milliseconds=+n):(s=KA.exec(n))?(r=s[1]==="-"?-1:1,t={y:0,d:z(s[un])*r,h:z(s[Me])*r,m:z(s[Zt])*r,s:z(s[Mn])*r,ms:z(wd(s[cr]*1e3))*r}):(s=QA.exec(n))?(r=s[1]==="-"?-1:1,t={y:Js(s[2],r),M:Js(s[3],r),w:Js(s[4],r),d:Js(s[5],r),h:Js(s[6],r),m:Js(s[7],r),s:Js(s[8],r)}):t==null?t={}:typeof t=="object"&&("from"in t||"to"in t)&&(o=JA(me(t.from),me(t.to)),t={},t.ms=o.milliseconds,t.M=o.months),i=new pu(t),zc(n)&&se(n,"_locale")&&(i._locale=n._locale),zc(n)&&se(n,"_isValid")&&(i._isValid=n._isValid),i}cn.fn=pu.prototype;cn.invalid=LA;function Js(n,e){var t=n&&parseFloat(n.replace(",","."));return(isNaN(t)?0:t)*e}function Lg(n,e){var t={};return t.months=e.month()-n.month()+(e.year()-n.year())*12,n.clone().add(t.months,"M").isAfter(e)&&--t.months,t.milliseconds=+e-+n.clone().add(t.months,"M"),t}function JA(n,e){var t;return n.isValid()&&e.isValid()?(e=Qf(e,n),n.isBefore(e)?t=Lg(n,e):(t=Lg(e,n),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function uw(n,e){return function(t,s){var r,i;return s!==null&&!isNaN(+s)&&(Uv(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=t,t=s,s=i),r=cn(t,s),hw(this,r,n),this}}function hw(n,e,t,s){var r=e._milliseconds,i=wd(e._days),o=wd(e._months);!n.isValid()||(s=s==null?!0:s,o&&zv(n,ol(n,"Month")+o*t),i&&Wv(n,"Date",ol(n,"Date")+i*t),r&&n._d.setTime(n._d.valueOf()+r*t),s&&A.updateOffset(n,i||o))}var XA=uw(1,"add"),ZA=uw(-1,"subtract");function dw(n){return typeof n=="string"||n instanceof String}function eN(n){return on(n)||$a(n)||dw(n)||Hn(n)||nN(n)||tN(n)||n===null||n===void 0}function tN(n){var e=mr(n)&&!Pf(n),t=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,o=s.length;for(r=0;r<o;r+=1)i=s[r],t=t||se(n,i);return e&&t}function nN(n){var e=rn(n),t=!1;return e&&(t=n.filter(function(s){return!Hn(s)&&dw(n)}).length===0),e&&t}function sN(n){var e=mr(n)&&!Pf(n),t=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<s.length;r+=1)i=s[r],t=t||se(n,i);return e&&t}function rN(n,e){var t=n.diff(e,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function iN(n,e){arguments.length===1&&(arguments[0]?eN(arguments[0])?(n=arguments[0],e=void 0):sN(arguments[0])&&(e=arguments[0],n=void 0):(n=void 0,e=void 0));var t=n||me(),s=Qf(t,this).startOf("day"),r=A.calendarFormat(this,s)||"sameElse",i=e&&(Dn(e[r])?e[r].call(this,t):e[r]);return this.format(i||this.localeData().calendar(r,this,me(t)))}function oN(){return new ja(this)}function aN(n,e){var t=on(n)?n:me(n);return this.isValid()&&t.isValid()?(e=Qt(e)||"millisecond",e==="millisecond"?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(e).valueOf()):!1}function cN(n,e){var t=on(n)?n:me(n);return this.isValid()&&t.isValid()?(e=Qt(e)||"millisecond",e==="millisecond"?this.valueOf()<t.valueOf():this.clone().endOf(e).valueOf()<t.valueOf()):!1}function lN(n,e,t,s){var r=on(n)?n:me(n),i=on(e)?e:me(e);return this.isValid()&&r.isValid()&&i.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(r,t):!this.isBefore(r,t))&&(s[1]===")"?this.isBefore(i,t):!this.isAfter(i,t))):!1}function uN(n,e){var t=on(n)?n:me(n),s;return this.isValid()&&t.isValid()?(e=Qt(e)||"millisecond",e==="millisecond"?this.valueOf()===t.valueOf():(s=t.valueOf(),this.clone().startOf(e).valueOf()<=s&&s<=this.clone().endOf(e).valueOf())):!1}function hN(n,e){return this.isSame(n,e)||this.isAfter(n,e)}function dN(n,e){return this.isSame(n,e)||this.isBefore(n,e)}function fN(n,e,t){var s,r,i;if(!this.isValid())return NaN;if(s=Qf(n,this),!s.isValid())return NaN;switch(r=(s.utcOffset()-this.utcOffset())*6e4,e=Qt(e),e){case"year":i=Kc(this,s)/12;break;case"month":i=Kc(this,s);break;case"quarter":i=Kc(this,s)/3;break;case"second":i=(this-s)/1e3;break;case"minute":i=(this-s)/6e4;break;case"hour":i=(this-s)/36e5;break;case"day":i=(this-s-r)/864e5;break;case"week":i=(this-s-r)/6048e5;break;default:i=this-s}return t?i:qt(i)}function Kc(n,e){if(n.date()<e.date())return-Kc(e,n);var t=(e.year()-n.year())*12+(e.month()-n.month()),s=n.clone().add(t,"months"),r,i;return e-s<0?(r=n.clone().add(t-1,"months"),i=(e-s)/(s-r)):(r=n.clone().add(t+1,"months"),i=(e-s)/(r-s)),-(t+i)||0}A.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";A.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function pN(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function mN(n){if(!this.isValid())return null;var e=n!==!0,t=e?this.clone().utc():this;return t.year()<0||t.year()>9999?Yc(t,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Dn(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Yc(t,"Z")):Yc(t,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function gN(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var n="moment",e="",t,s,r,i;return this.isLocal()||(n=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),t="["+n+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=e+'[")]',this.format(t+s+r+i)}function yN(n){n||(n=this.isUtc()?A.defaultFormatUtc:A.defaultFormat);var e=Yc(this,n);return this.localeData().postformat(e)}function _N(n,e){return this.isValid()&&(on(n)&&n.isValid()||me(n).isValid())?cn({to:this,from:n}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function vN(n){return this.from(me(),n)}function wN(n,e){return this.isValid()&&(on(n)&&n.isValid()||me(n).isValid())?cn({from:this,to:n}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function IN(n){return this.to(me(),n)}function fw(n){var e;return n===void 0?this._locale._abbr:(e=Zn(n),e!=null&&(this._locale=e),this)}var pw=Kt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(n){return n===void 0?this.localeData():this.locale(n)});function mw(){return this._locale}var ll=1e3,fi=60*ll,ul=60*fi,gw=(365*400+97)*24*ul;function pi(n,e){return(n%e+e)%e}function yw(n,e,t){return n<100&&n>=0?new Date(n+400,e,t)-gw:new Date(n,e,t).valueOf()}function _w(n,e,t){return n<100&&n>=0?Date.UTC(n+400,e,t)-gw:Date.UTC(n,e,t)}function EN(n){var e,t;if(n=Qt(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?_w:yw,n){case"year":e=t(this.year(),0,1);break;case"quarter":e=t(this.year(),this.month()-this.month()%3,1);break;case"month":e=t(this.year(),this.month(),1);break;case"week":e=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=t(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=pi(e+(this._isUTC?0:this.utcOffset()*fi),ul);break;case"minute":e=this._d.valueOf(),e-=pi(e,fi);break;case"second":e=this._d.valueOf(),e-=pi(e,ll);break}return this._d.setTime(e),A.updateOffset(this,!0),this}function TN(n){var e,t;if(n=Qt(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?_w:yw,n){case"year":e=t(this.year()+1,0,1)-1;break;case"quarter":e=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=t(this.year(),this.month()+1,1)-1;break;case"week":e=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=ul-pi(e+(this._isUTC?0:this.utcOffset()*fi),ul)-1;break;case"minute":e=this._d.valueOf(),e+=fi-pi(e,fi)-1;break;case"second":e=this._d.valueOf(),e+=ll-pi(e,ll)-1;break}return this._d.setTime(e),A.updateOffset(this,!0),this}function bN(){return this._d.valueOf()-(this._offset||0)*6e4}function SN(){return Math.floor(this.valueOf()/1e3)}function CN(){return new Date(this.valueOf())}function kN(){var n=this;return[n.year(),n.month(),n.date(),n.hour(),n.minute(),n.second(),n.millisecond()]}function AN(){var n=this;return{years:n.year(),months:n.month(),date:n.date(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds(),milliseconds:n.milliseconds()}}function NN(){return this.isValid()?this.toISOString():null}function DN(){return Mf(this)}function RN(){return ds({},j(this))}function xN(){return j(this).overflow}function ON(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}P("N",0,0,"eraAbbr");P("NN",0,0,"eraAbbr");P("NNN",0,0,"eraAbbr");P("NNNN",0,0,"eraName");P("NNNNN",0,0,"eraNarrow");P("y",["y",1],"yo","eraYear");P("y",["yy",2],0,"eraYear");P("y",["yyy",3],0,"eraYear");P("y",["yyyy",4],0,"eraYear");D("N",Jf);D("NN",Jf);D("NNN",Jf);D("NNNN",jN);D("NNNNN",GN);le(["N","NN","NNN","NNNN","NNNNN"],function(n,e,t,s){var r=t._locale.erasParse(n,s,t._strict);r?j(t).era=r:j(t).invalidEra=n});D("y",Gi);D("yy",Gi);D("yyy",Gi);D("yyyy",Gi);D("yo",HN);le(["y","yy","yyy","yyyy"],at);le(["yo"],function(n,e,t,s){var r;t._locale._eraYearOrdinalRegex&&(r=n.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?e[at]=t._locale.eraYearOrdinalParse(n,r):e[at]=parseInt(n,10)});function PN(n,e){var t,s,r,i=this._eras||Zn("en")._eras;for(t=0,s=i.length;t<s;++t){switch(typeof i[t].since){case"string":r=A(i[t].since).startOf("day"),i[t].since=r.valueOf();break}switch(typeof i[t].until){case"undefined":i[t].until=1/0;break;case"string":r=A(i[t].until).startOf("day").valueOf(),i[t].until=r.valueOf();break}}return i}function MN(n,e,t){var s,r,i=this.eras(),o,a,c;for(n=n.toUpperCase(),s=0,r=i.length;s<r;++s)if(o=i[s].name.toUpperCase(),a=i[s].abbr.toUpperCase(),c=i[s].narrow.toUpperCase(),t)switch(e){case"N":case"NN":case"NNN":if(a===n)return i[s];break;case"NNNN":if(o===n)return i[s];break;case"NNNNN":if(c===n)return i[s];break}else if([o,a,c].indexOf(n)>=0)return i[s]}function LN(n,e){var t=n.since<=n.until?1:-1;return e===void 0?A(n.since).year():A(n.since).year()+(e-n.offset)*t}function FN(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].name;return""}function UN(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].narrow;return""}function VN(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].abbr;return""}function BN(){var n,e,t,s,r=this.localeData().eras();for(n=0,e=r.length;n<e;++n)if(t=r[n].since<=r[n].until?1:-1,s=this.clone().startOf("day").valueOf(),r[n].since<=s&&s<=r[n].until||r[n].until<=s&&s<=r[n].since)return(this.year()-A(r[n].since).year())*t+r[n].offset;return this.year()}function WN(n){return se(this,"_erasNameRegex")||Xf.call(this),n?this._erasNameRegex:this._erasRegex}function qN(n){return se(this,"_erasAbbrRegex")||Xf.call(this),n?this._erasAbbrRegex:this._erasRegex}function $N(n){return se(this,"_erasNarrowRegex")||Xf.call(this),n?this._erasNarrowRegex:this._erasRegex}function Jf(n,e){return e.erasAbbrRegex(n)}function jN(n,e){return e.erasNameRegex(n)}function GN(n,e){return e.erasNarrowRegex(n)}function HN(n,e){return e._eraYearOrdinalRegex||Gi}function Xf(){var n=[],e=[],t=[],s=[],r,i,o=this.eras();for(r=0,i=o.length;r<i;++r)e.push(Rt(o[r].name)),n.push(Rt(o[r].abbr)),t.push(Rt(o[r].narrow)),s.push(Rt(o[r].name)),s.push(Rt(o[r].abbr)),s.push(Rt(o[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}P(0,["gg",2],0,function(){return this.weekYear()%100});P(0,["GG",2],0,function(){return this.isoWeekYear()%100});function mu(n,e){P(0,[n,n.length],0,e)}mu("gggg","weekYear");mu("ggggg","weekYear");mu("GGGG","isoWeekYear");mu("GGGGG","isoWeekYear");ft("weekYear","gg");ft("isoWeekYear","GG");pt("weekYear",1);pt("isoWeekYear",1);D("G",uu);D("g",uu);D("GG",ge,Wt);D("gg",ge,Wt);D("GGGG",Wf,Bf);D("gggg",Wf,Bf);D("GGGGG",lu,au);D("ggggg",lu,au);Ha(["gggg","ggggg","GGGG","GGGGG"],function(n,e,t,s){e[s.substr(0,2)]=z(n)});Ha(["gg","GG"],function(n,e,t,s){e[s]=A.parseTwoDigitYear(n)});function YN(n){return vw.call(this,n,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zN(n){return vw.call(this,n,this.isoWeek(),this.isoWeekday(),1,4)}function KN(){return qn(this.year(),1,4)}function QN(){return qn(this.isoWeekYear(),1,4)}function JN(){var n=this.localeData()._week;return qn(this.year(),n.dow,n.doy)}function XN(){var n=this.localeData()._week;return qn(this.weekYear(),n.dow,n.doy)}function vw(n,e,t,s,r){var i;return n==null?ta(this,s,r).year:(i=qn(n,s,r),e>i&&(e=i),ZN.call(this,n,e,t,s,r))}function ZN(n,e,t,s,r){var i=Xv(n,e,t,s,r),o=ea(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}P("Q",0,"Qo","quarter");ft("quarter","Q");pt("quarter",7);D("Q",qv);le("Q",function(n,e){e[Pn]=(z(n)-1)*3});function eD(n){return n==null?Math.ceil((this.month()+1)/3):this.month((n-1)*3+this.month()%3)}P("D",["DD",2],"Do","date");ft("date","D");pt("date",9);D("D",ge);D("DD",ge,Wt);D("Do",function(n,e){return n?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});le(["D","DD"],un);le("Do",function(n,e){e[un]=z(n.match(ge)[0])});var ww=ji("Date",!0);P("DDD",["DDDD",3],"DDDo","dayOfYear");ft("dayOfYear","DDD");pt("dayOfYear",4);D("DDD",cu);D("DDDD",$v);le(["DDD","DDDD"],function(n,e,t){t._dayOfYear=z(n)});function tD(n){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return n==null?e:this.add(n-e,"d")}P("m",["mm",2],0,"minute");ft("minute","m");pt("minute",14);D("m",ge);D("mm",ge,Wt);le(["m","mm"],Zt);var nD=ji("Minutes",!1);P("s",["ss",2],0,"second");ft("second","s");pt("second",15);D("s",ge);D("ss",ge,Wt);le(["s","ss"],Mn);var sD=ji("Seconds",!1);P("S",0,0,function(){return~~(this.millisecond()/100)});P(0,["SS",2],0,function(){return~~(this.millisecond()/10)});P(0,["SSS",3],0,"millisecond");P(0,["SSSS",4],0,function(){return this.millisecond()*10});P(0,["SSSSS",5],0,function(){return this.millisecond()*100});P(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});P(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});P(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});P(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});ft("millisecond","ms");pt("millisecond",16);D("S",cu,qv);D("SS",cu,Wt);D("SSS",cu,$v);var fs,Iw;for(fs="SSSS";fs.length<=9;fs+="S")D(fs,Gi);function rD(n,e){e[cr]=z(("0."+n)*1e3)}for(fs="S";fs.length<=9;fs+="S")le(fs,rD);Iw=ji("Milliseconds",!1);P("z",0,0,"zoneAbbr");P("zz",0,0,"zoneName");function iD(){return this._isUTC?"UTC":""}function oD(){return this._isUTC?"Coordinated Universal Time":""}var I=ja.prototype;I.add=XA;I.calendar=iN;I.clone=oN;I.diff=fN;I.endOf=TN;I.format=yN;I.from=_N;I.fromNow=vN;I.to=wN;I.toNow=IN;I.get=ck;I.invalidAt=xN;I.isAfter=aN;I.isBefore=cN;I.isBetween=lN;I.isSame=uN;I.isSameOrAfter=hN;I.isSameOrBefore=dN;I.isValid=DN;I.lang=pw;I.locale=fw;I.localeData=mw;I.max=DA;I.min=NA;I.parsingFlags=RN;I.set=lk;I.startOf=EN;I.subtract=ZA;I.toArray=kN;I.toObject=AN;I.toDate=CN;I.toISOString=mN;I.inspect=gN;typeof Symbol<"u"&&Symbol.for!=null&&(I[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});I.toJSON=NN;I.toString=pN;I.unix=SN;I.valueOf=bN;I.creationData=ON;I.eraName=FN;I.eraNarrow=UN;I.eraAbbr=VN;I.eraYear=BN;I.year=Jv;I.isLeapYear=Ak;I.weekYear=YN;I.isoWeekYear=zN;I.quarter=I.quarters=eD;I.month=Kv;I.daysInMonth=Sk;I.week=I.weeks=Pk;I.isoWeek=I.isoWeeks=Mk;I.weeksInYear=JN;I.weeksInWeekYear=XN;I.isoWeeksInYear=KN;I.isoWeeksInISOWeekYear=QN;I.date=ww;I.day=I.days=zk;I.weekday=Kk;I.isoWeekday=Qk;I.dayOfYear=tD;I.hour=I.hours=sA;I.minute=I.minutes=nD;I.second=I.seconds=sD;I.millisecond=I.milliseconds=Iw;I.utcOffset=VA;I.utc=WA;I.local=qA;I.parseZone=$A;I.hasAlignedHourOffset=jA;I.isDST=GA;I.isLocal=YA;I.isUtcOffset=zA;I.isUtc=lw;I.isUTC=lw;I.zoneAbbr=iD;I.zoneName=oD;I.dates=Kt("dates accessor is deprecated. Use date instead.",ww);I.months=Kt("months accessor is deprecated. Use month instead",Kv);I.years=Kt("years accessor is deprecated. Use year instead",Jv);I.zone=Kt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",BA);I.isDSTShifted=Kt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",HA);function aD(n){return me(n*1e3)}function cD(){return me.apply(null,arguments).parseZone()}function Ew(n){return n}var re=Ff.prototype;re.calendar=zC;re.longDateFormat=XC;re.invalidDate=ek;re.ordinal=sk;re.preparse=Ew;re.postformat=Ew;re.relativeTime=ik;re.pastFuture=ok;re.set=HC;re.eras=PN;re.erasParse=MN;re.erasConvertYear=LN;re.erasAbbrRegex=qN;re.erasNameRegex=WN;re.erasNarrowRegex=$N;re.months=Ik;re.monthsShort=Ek;re.monthsParse=bk;re.monthsRegex=kk;re.monthsShortRegex=Ck;re.week=Dk;re.firstDayOfYear=Ok;re.firstDayOfWeek=xk;re.weekdays=$k;re.weekdaysMin=Gk;re.weekdaysShort=jk;re.weekdaysParse=Yk;re.weekdaysRegex=Jk;re.weekdaysShortRegex=Xk;re.weekdaysMinRegex=Zk;re.isPM=tA;re.meridiem=rA;function hl(n,e,t,s){var r=Zn(),i=Nn().set(s,e);return r[t](i,n)}function Tw(n,e,t){if(Hn(n)&&(e=n,n=void 0),n=n||"",e!=null)return hl(n,e,t,"month");var s,r=[];for(s=0;s<12;s++)r[s]=hl(n,s,t,"month");return r}function Zf(n,e,t,s){typeof n=="boolean"?(Hn(e)&&(t=e,e=void 0),e=e||""):(e=n,t=e,n=!1,Hn(e)&&(t=e,e=void 0),e=e||"");var r=Zn(),i=n?r._week.dow:0,o,a=[];if(t!=null)return hl(e,(t+i)%7,s,"day");for(o=0;o<7;o++)a[o]=hl(e,(o+i)%7,s,"day");return a}function lD(n,e){return Tw(n,e,"months")}function uD(n,e){return Tw(n,e,"monthsShort")}function hD(n,e,t){return Zf(n,e,t,"weekdays")}function dD(n,e,t){return Zf(n,e,t,"weekdaysShort")}function fD(n,e,t){return Zf(n,e,t,"weekdaysMin")}_s("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(n){var e=n%10,t=z(n%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return n+t}});A.lang=Kt("moment.lang is deprecated. Use moment.locale instead.",_s);A.langData=Kt("moment.langData is deprecated. Use moment.localeData instead.",Zn);var xn=Math.abs;function pD(){var n=this._data;return this._milliseconds=xn(this._milliseconds),this._days=xn(this._days),this._months=xn(this._months),n.milliseconds=xn(n.milliseconds),n.seconds=xn(n.seconds),n.minutes=xn(n.minutes),n.hours=xn(n.hours),n.months=xn(n.months),n.years=xn(n.years),this}function bw(n,e,t,s){var r=cn(e,t);return n._milliseconds+=s*r._milliseconds,n._days+=s*r._days,n._months+=s*r._months,n._bubble()}function mD(n,e){return bw(this,n,e,1)}function gD(n,e){return bw(this,n,e,-1)}function Fg(n){return n<0?Math.floor(n):Math.ceil(n)}function yD(){var n=this._milliseconds,e=this._days,t=this._months,s=this._data,r,i,o,a,c;return n>=0&&e>=0&&t>=0||n<=0&&e<=0&&t<=0||(n+=Fg(Ed(t)+e)*864e5,e=0,t=0),s.milliseconds=n%1e3,r=qt(n/1e3),s.seconds=r%60,i=qt(r/60),s.minutes=i%60,o=qt(i/60),s.hours=o%24,e+=qt(o/24),c=qt(Sw(e)),t+=c,e-=Fg(Ed(c)),a=qt(t/12),t%=12,s.days=e,s.months=t,s.years=a,this}function Sw(n){return n*4800/146097}function Ed(n){return n*146097/4800}function _D(n){if(!this.isValid())return NaN;var e,t,s=this._milliseconds;if(n=Qt(n),n==="month"||n==="quarter"||n==="year")switch(e=this._days+s/864e5,t=this._months+Sw(e),n){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(e=this._days+Math.round(Ed(this._months)),n){case"week":return e/7+s/6048e5;case"day":return e+s/864e5;case"hour":return e*24+s/36e5;case"minute":return e*1440+s/6e4;case"second":return e*86400+s/1e3;case"millisecond":return Math.floor(e*864e5)+s;default:throw new Error("Unknown unit "+n)}}function vD(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+z(this._months/12)*31536e6:NaN}function es(n){return function(){return this.as(n)}}var wD=es("ms"),ID=es("s"),ED=es("m"),TD=es("h"),bD=es("d"),SD=es("w"),CD=es("M"),kD=es("Q"),AD=es("y");function ND(){return cn(this)}function DD(n){return n=Qt(n),this.isValid()?this[n+"s"]():NaN}function Br(n){return function(){return this.isValid()?this._data[n]:NaN}}var RD=Br("milliseconds"),xD=Br("seconds"),OD=Br("minutes"),PD=Br("hours"),MD=Br("days"),LD=Br("months"),FD=Br("years");function UD(){return qt(this.days()/7)}var On=Math.round,ci={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function VD(n,e,t,s,r){return r.relativeTime(e||1,!!t,n,s)}function BD(n,e,t,s){var r=cn(n).abs(),i=On(r.as("s")),o=On(r.as("m")),a=On(r.as("h")),c=On(r.as("d")),l=On(r.as("M")),u=On(r.as("w")),h=On(r.as("y")),d=i<=t.ss&&["s",i]||i<t.s&&["ss",i]||o<=1&&["m"]||o<t.m&&["mm",o]||a<=1&&["h"]||a<t.h&&["hh",a]||c<=1&&["d"]||c<t.d&&["dd",c];return t.w!=null&&(d=d||u<=1&&["w"]||u<t.w&&["ww",u]),d=d||l<=1&&["M"]||l<t.M&&["MM",l]||h<=1&&["y"]||["yy",h],d[2]=e,d[3]=+n>0,d[4]=s,VD.apply(null,d)}function WD(n){return n===void 0?On:typeof n=="function"?(On=n,!0):!1}function qD(n,e){return ci[n]===void 0?!1:e===void 0?ci[n]:(ci[n]=e,n==="s"&&(ci.ss=e-1),!0)}function $D(n,e){if(!this.isValid())return this.localeData().invalidDate();var t=!1,s=ci,r,i;return typeof n=="object"&&(e=n,n=!1),typeof n=="boolean"&&(t=n),typeof e=="object"&&(s=Object.assign({},ci,e),e.s!=null&&e.ss==null&&(s.ss=e.s-1)),r=this.localeData(),i=BD(this,!t,s,r),t&&(i=r.pastFuture(+this,i)),r.postformat(i)}var Fh=Math.abs;function ei(n){return(n>0)-(n<0)||+n}function gu(){if(!this.isValid())return this.localeData().invalidDate();var n=Fh(this._milliseconds)/1e3,e=Fh(this._days),t=Fh(this._months),s,r,i,o,a=this.asSeconds(),c,l,u,h;return a?(s=qt(n/60),r=qt(s/60),n%=60,s%=60,i=qt(t/12),t%=12,o=n?n.toFixed(3).replace(/\.?0+$/,""):"",c=a<0?"-":"",l=ei(this._months)!==ei(a)?"-":"",u=ei(this._days)!==ei(a)?"-":"",h=ei(this._milliseconds)!==ei(a)?"-":"",c+"P"+(i?l+i+"Y":"")+(t?l+t+"M":"")+(e?u+e+"D":"")+(r||s||n?"T":"")+(r?h+r+"H":"")+(s?h+s+"M":"")+(n?h+o+"S":"")):"P0D"}var Z=pu.prototype;Z.isValid=MA;Z.abs=pD;Z.add=mD;Z.subtract=gD;Z.as=_D;Z.asMilliseconds=wD;Z.asSeconds=ID;Z.asMinutes=ED;Z.asHours=TD;Z.asDays=bD;Z.asWeeks=SD;Z.asMonths=CD;Z.asQuarters=kD;Z.asYears=AD;Z.valueOf=vD;Z._bubble=yD;Z.clone=ND;Z.get=DD;Z.milliseconds=RD;Z.seconds=xD;Z.minutes=OD;Z.hours=PD;Z.days=MD;Z.weeks=UD;Z.months=LD;Z.years=FD;Z.humanize=$D;Z.toISOString=gu;Z.toString=gu;Z.toJSON=gu;Z.locale=fw;Z.localeData=mw;Z.toIsoString=Kt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",gu);Z.lang=pw;P("X",0,0,"unix");P("x",0,0,"valueOf");D("x",uu);D("X",hk);le("X",function(n,e,t){t._d=new Date(parseFloat(n)*1e3)});le("x",function(n,e,t){t._d=new Date(z(n))});//! moment.js
A.version="2.29.4";jC(me);A.fn=I;A.min=RA;A.max=xA;A.now=OA;A.utc=Nn;A.unix=aD;A.months=lD;A.isDate=$a;A.locale=_s;A.invalid=iu;A.duration=cn;A.isMoment=on;A.weekdays=hD;A.parseZone=cD;A.localeData=Zn;A.isDuration=zc;A.monthsShort=uD;A.weekdaysMin=fD;A.defineLocale=Gf;A.updateLocale=cA;A.locales=lA;A.weekdaysShort=dD;A.normalizeUnits=Qt;A.relativeTimeRounding=WD;A.relativeTimeThreshold=qD;A.calendarFormat=rN;A.prototype=I;A.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};/**
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
 */const Cw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(n,e){if(!n)throw Hi(e)},Hi=function(n){return new Error("Firebase Database ("+Cw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const kw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},jD=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jD(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Aw=function(n){const e=kw(n);return ep.encodeByteArray(e,!0)},dl=function(n){return Aw(n).replace(/\./g,"")},fl=function(n){try{return ep.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GD(n){return sa(void 0,n)}function sa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!HD(t)||(n[t]=sa(n[t],e[t]));return n}function HD(n){return n!=="__proto__"}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function np(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YD(){return typeof self=="object"&&self.self===self}function Nw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rw(){return Cw.NODE_ADMIN===!0}function zD(){return!np()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ra(){return typeof indexedDB=="object"}function KD(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function QD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JD=()=>QD().__FIREBASE_DEFAULTS__,XD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ZD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fl(n[1]);return e&&JSON.parse(e)},xw=()=>{try{return JD()||XD()||ZD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eR=()=>{var n;return(n=xw())===null||n===void 0?void 0:n.config},tR=n=>{var e;return(e=xw())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ow(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[dl(JSON.stringify(t)),dl(JSON.stringify(o)),a].join(".")}/**
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
 */const nR="FirebaseError";class vt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nR,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?sR(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new vt(r,a,s)}}function sR(n,e){return n.replace(rR,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const rR=/\{\$([^}]+)}/g;/**
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
 */function ia(n){return JSON.parse(n)}function Pe(n){return JSON.stringify(n)}/**
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
 */const Pw=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=ia(fl(i[0])||""),t=ia(fl(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},iR=function(n){const e=Pw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},oR=function(n){const e=Pw(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Er(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function pl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ml(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Td(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Ug(i)&&Ug(o)){if(!Td(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Ug(n){return n!==null&&typeof n=="object"}/**
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
 */function qr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function li(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Do(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class aR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):h<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Mw(n,e){const t=new cR(n,e);return t.subscribe.bind(t)}class cR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");lR(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Uh),r.error===void 0&&(r.error=Uh),r.complete===void 0&&(r.complete=Uh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uh(){}/**
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
 */const U=function(n,e,t,s){let r;if(s<e?r="at least "+e:s>t&&(r=t===0?"none":"no more than "+t),r){const i=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(i)}};function At(n,e){return`${n} failed: ${e} argument `}function Be(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(At(n,e)+"must be a valid function.")}function Vg(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(At(n,e)+"must be a valid context object.")}/**
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
 */const uR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,b(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_u=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function N(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class Lw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new bt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(n){return n===er?void 0:n}function dR(n){return n.instantiationMode==="EAGER"}/**
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
 */class Fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const sp=[];var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Uw={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},fR=J.INFO,pR={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},mR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=pR[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=fR,this._logHandler=mR,this._userLogHandler=null,sp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function gR(n){sp.forEach(e=>{e.setLogLevel(n)})}function yR(n,e){for(const t of sp){let s=null;e&&e.level&&(s=Uw[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&n({level:J[i].toLowerCase(),message:a,args:o,type:r.name})}}}const _R=(n,e)=>e.some(t=>n instanceof t);let Bg,Wg;function vR(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vw=new WeakMap,bd=new WeakMap,Bw=new WeakMap,Vh=new WeakMap,rp=new WeakMap;function IR(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(vs(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vw.set(t,n)}).catch(()=>{}),rp.set(e,n),e}function ER(n){if(bd.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});bd.set(n,e)}let Sd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function TR(n){Sd=n(Sd)}function bR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Bh(this),e,...t);return Bw.set(s,e.sort?e.sort():[e]),vs(s)}:wR().includes(n)?function(...e){return n.apply(Bh(this),e),vs(Vw.get(this))}:function(...e){return vs(n.apply(Bh(this),e))}}function SR(n){return typeof n=="function"?bR(n):(n instanceof IDBTransaction&&ER(n),_R(n,vR())?new Proxy(n,Sd):n)}function vs(n){if(n instanceof IDBRequest)return IR(n);if(Vh.has(n))return Vh.get(n);const e=SR(n);return e!==n&&(Vh.set(n,e),rp.set(e,n)),e}const Bh=n=>rp.get(n);function CR(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=vs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vs(o.result),c.oldVersion,c.newVersion,vs(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const kR=["get","getKey","getAll","getAllKeys","count"],AR=["put","add","delete","clear"],Wh=new Map;function qg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=AR.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||kR.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Wh.set(e,i),i}TR(n=>({...n,get:(e,t,s)=>qg(e,t)||n.get(e,t,s),has:(e,t)=>!!qg(e,t)||n.has(e,t)}));/**
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
 */class NR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DR(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function DR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cd="@firebase/app",$g="0.8.4";/**
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
 */const Tr=new Yi("@firebase/app"),RR="@firebase/app-compat",xR="@firebase/analytics-compat",OR="@firebase/analytics",PR="@firebase/app-check-compat",MR="@firebase/app-check",LR="@firebase/auth",FR="@firebase/auth-compat",UR="@firebase/database",VR="@firebase/database-compat",BR="@firebase/functions",WR="@firebase/functions-compat",qR="@firebase/installations",$R="@firebase/installations-compat",jR="@firebase/messaging",GR="@firebase/messaging-compat",HR="@firebase/performance",YR="@firebase/performance-compat",zR="@firebase/remote-config",KR="@firebase/remote-config-compat",QR="@firebase/storage",JR="@firebase/storage-compat",XR="@firebase/firestore",ZR="@firebase/firestore-compat",ex="firebase",tx="9.14.0";/**
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
 */const bs="[DEFAULT]",nx={[Cd]:"fire-core",[RR]:"fire-core-compat",[OR]:"fire-analytics",[xR]:"fire-analytics-compat",[MR]:"fire-app-check",[PR]:"fire-app-check-compat",[LR]:"fire-auth",[FR]:"fire-auth-compat",[UR]:"fire-rtdb",[VR]:"fire-rtdb-compat",[BR]:"fire-fn",[WR]:"fire-fn-compat",[qR]:"fire-iid",[$R]:"fire-iid-compat",[jR]:"fire-fcm",[GR]:"fire-fcm-compat",[HR]:"fire-perf",[YR]:"fire-perf-compat",[zR]:"fire-rc",[KR]:"fire-rc-compat",[QR]:"fire-gcs",[JR]:"fire-gcs-compat",[XR]:"fire-fst",[ZR]:"fire-fst-compat","fire-js":"fire-js",[ex]:"fire-js-all"};/**
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
 */const Ss=new Map,oa=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ww(n,e){n.container.addOrOverwriteComponent(e)}function Yn(n){const e=n.name;if(oa.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,n);for(const t of Ss.values())gl(t,n);return!0}function qw(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sx(n,e,t=bs){qw(n,e).clearInstance(t)}function rx(){oa.clear()}/**
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
 */const ix={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Wr("app","Firebase",ix);/**
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
 */class ox{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=tx;function ip(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw $n.create("bad-app-name",{appName:String(r)});if(t||(t=eR()),!t)throw $n.create("no-options");const i=Ss.get(r);if(i){if(Td(t,i.options)&&Td(s,i.config))return i;throw $n.create("duplicate-app",{appName:r})}const o=new Fw(r);for(const c of oa.values())o.addComponent(c);const a=new ox(t,s,o);return Ss.set(r,a),a}function ax(n=bs){const e=Ss.get(n);if(!e&&n===bs)return ip();if(!e)throw $n.create("no-app",{appName:n});return e}function cx(){return Array.from(Ss.values())}async function $w(n){const e=n.name;Ss.has(e)&&(Ss.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Yt(n,e,t){var s;let r=(s=nx[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}Yn(new Ft(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function jw(n,e){if(n!==null&&typeof n!="function")throw $n.create("invalid-log-argument");yR(n,e)}function Gw(n){gR(n)}/**
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
 */const lx="firebase-heartbeat-database",ux=1,aa="firebase-heartbeat-store";let qh=null;function Hw(){return qh||(qh=CR(lx,ux,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(aa)}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),qh}async function hx(n){var e;try{return(await Hw()).transaction(aa).objectStore(aa).get(Yw(n))}catch(t){if(t instanceof vt)Tr.warn(t.message);else{const s=$n.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Tr.warn(s.message)}}}async function jg(n,e){var t;try{const r=(await Hw()).transaction(aa,"readwrite");return await r.objectStore(aa).put(e,Yw(n)),r.done}catch(s){if(s instanceof vt)Tr.warn(s.message);else{const r=$n.create("idb-set",{originalErrorMessage:(t=s)===null||t===void 0?void 0:t.message});Tr.warn(r.message)}}}function Yw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dx=1024,fx=30*24*60*60*1e3;class px{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=fx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gg(),{heartbeatsToSend:t,unsentEntries:s}=mx(this._heartbeatsCache.heartbeats),r=dl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gg(){return new Date().toISOString().substring(0,10)}function mx(n,e=dx){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Hg(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Hg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ra()?KD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hg(n){return dl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function yx(n){Yn(new Ft("platform-logger",e=>new NR(e),"PRIVATE")),Yn(new Ft("heartbeat",e=>new px(e),"PRIVATE")),Yt(Cd,$g,n),Yt(Cd,$g,"esm2017"),Yt("fire-js","")}yx("");const _x=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Us,_DEFAULT_ENTRY_NAME:bs,_addComponent:gl,_addOrOverwriteComponent:Ww,_apps:Ss,_clearComponents:rx,_components:oa,_getProvider:qw,_registerComponent:Yn,_removeServiceInstance:sx,deleteApp:$w,getApp:ax,getApps:cx,initializeApp:ip,onLog:jw,registerVersion:Yt,setLogLevel:Gw,FirebaseError:vt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class vx{constructor(e,t){this._delegate=e,this.firebase=t,gl(e,new Ft("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$w(this._delegate)))}_getService(e,t=bs){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=bs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){gl(this._delegate,e)}_addOrOverwriteComponent(e){Ww(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const wx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Yg=new Wr("app-compat","Firebase",wx);/**
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
 */function Ix(n){const e={},t={__esModule:!0,initializeApp:i,app:r,registerVersion:Yt,setLogLevel:Gw,onLog:jw,apps:null,SDK_VERSION:Us,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:_x}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function r(l){if(l=l||bs,!Lt(e,l))throw Yg.create("no-app",{appName:l});return e[l]}r.App=n;function i(l,u={}){const h=ip(l,u);if(Lt(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Yn(l)&&l.type==="PUBLIC"){const d=(f=r())=>{if(typeof f[h]!="function")throw Yg.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&sa(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function zw(){const n=Ix(vx);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:zw,extendNamespace:e,createSubscribe:Mw,ErrorFactory:Wr,deepExtend:sa});function e(t){sa(n,t)}return n}const Ex=zw();/**
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
 */const zg=new Yi("@firebase/app-compat"),Tx="@firebase/app-compat",bx="0.1.39";/**
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
 */function Sx(n){Yt(Tx,bx,n)}/**
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
 */if(YD()&&self.firebase!==void 0){zg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&zg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ct=Ex;Sx();var Cx="firebase",kx="9.14.0";/**
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
 */ct.registerVersion(Cx,kx,"app-compat");function op(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}const go={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ti={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Ax(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Kw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nx=Ax,Dx=Kw,Qw=new Wr("auth","Firebase",Kw());/**
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
 */const Kg=new Yi("@firebase/auth");function Qc(n,...e){Kg.logLevel<=J.ERROR&&Kg.error(`Auth (${Us}): ${n}`,...e)}/**
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
 */function it(n,...e){throw ap(n,...e)}function nt(n,...e){return ap(n,...e)}function Jw(n,e,t){const s=Object.assign(Object.assign({},Dx()),{[e]:t});return new Wr("auth","Firebase",s).create(e,{appName:n.name})}function zi(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&it(n,"argument-error"),Jw(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ap(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Qw.create(n,...e)}function E(n,e,...t){if(!n)throw ap(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qc(e),new Error(e)}function an(n,e){n||gn(e)}/**
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
 */const Qg=new Map;function Pt(n){an(n instanceof Function,"Expected a class definition");let e=Qg.get(n);return e?(an(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qg.set(n,e),e)}function Rx(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cp(){return Jg()==="http:"||Jg()==="https:"}function Jg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function xx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Nw()||"connection"in navigator)?navigator.onLine:!0}function Ox(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,an(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||yu()}get(){return xx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lp(n,e){an(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Mx=new Ya(3e4,6e4);function Fe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ke(n,e,t,s,r={}){return Zw(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=qr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Xw.fetch()(eI(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Zw(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Px),e);try{const r=new Lx(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ro(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ro(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jw(n,u,l);it(n,u)}}catch(r){if(r instanceof vt)throw r;it(n,"network-request-failed")}}async function ts(n,e,t,s,r={}){const i=await Ke(n,e,t,s,r);return"mfaPendingCredential"in i&&it(n,"multi-factor-auth-required",{_serverResponse:i}),i}function eI(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?lp(n.config,r):`${n.config.apiScheme}://${r}`}class Lx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),Mx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=nt(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function Fx(n,e){return Ke(n,"POST","/v1/accounts:delete",e)}async function Ux(n,e){return Ke(n,"POST","/v1/accounts:update",e)}async function Vx(n,e){return Ke(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Uo(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bx(n,e=!1){const t=N(n),s=await t.getIdToken(e),r=vu(s);E(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Uo($h(r.auth_time)),issuedAtTime:Uo($h(r.iat)),expirationTime:Uo($h(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $h(n){return Number(n)*1e3}function vu(n){var e;const[t,s,r]=n.split(".");if(t===void 0||s===void 0||r===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const i=fl(s);return i?JSON.parse(i):(Qc("Failed to decode base64 JWT payload"),null)}catch(i){return Qc("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Wx(n){const e=vu(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof vt&&qx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function qx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tI{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(n){var e;const t=n.auth,s=await n.getIdToken(),r=await zn(n,Vx(t,{idToken:s}));E(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hx(i.providerUserInfo):[],a=Gx(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tI(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function jx(n){const e=N(n);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gx(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Hx(n){return n.map(e=>{var{providerId:t}=e,s=op(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Yx(n,e){const t=await Zw(n,{},async()=>{const s=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=eI(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Yx(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new ua;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function as(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tI(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bx(this,e)}reload(){return jx(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await la(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zn(this,Fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=t.createdAt)!==null&&l!==void 0?l:void 0,O=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:K,isAnonymous:ie,providerData:M,stsTokenManager:ae}=t;E(B&&ae,e,"internal-error");const Ys=ua.fromJSON(this.name,ae);E(typeof B=="string",e,"internal-error"),as(h,e.name),as(d,e.name),E(typeof K=="boolean",e,"internal-error"),E(typeof ie=="boolean",e,"internal-error"),as(f,e.name),as(p,e.name),as(g,e.name),as(T,e.name),as(C,e.name),as(O,e.name);const kh=new gr({uid:B,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:ie,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:Ys,createdAt:C,lastLoginAt:O});return M&&Array.isArray(M)&&(kh.providerData=M.map(CS=>Object.assign({},CS))),T&&(kh._redirectEventId=T),kh}static async _fromIdTokenResponse(e,t,s=!1){const r=new ua;r.updateFromServerResponse(t);const i=new gr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await la(i),i}}/**
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
 */class nI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nI.type="NONE";const Ti=nI;/**
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
 */function yr(n,e,t){return`firebase:${n}:${e}:${t}`}class mi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yr(this.userKey,r.apiKey,i),this.fullPersistenceKey=yr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mi(Pt(Ti),e,s);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Pt(Ti);const o=yr(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=gr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new mi(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mi(i,e,s))}}/**
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
 */function Xg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oI(e))return"Blackberry";if(aI(e))return"Webos";if(up(e))return"Safari";if((e.includes("chrome/")||rI(e))&&!e.includes("edge/"))return"Chrome";if(za(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sI(n=be()){return/firefox\//i.test(n)}function up(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rI(n=be()){return/crios\//i.test(n)}function iI(n=be()){return/iemobile/i.test(n)}function za(n=be()){return/android/i.test(n)}function oI(n=be()){return/blackberry/i.test(n)}function aI(n=be()){return/webos/i.test(n)}function Ki(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zx(n=be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Kx(n=be()){var e;return Ki(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qx(){return Dw()&&document.documentMode===10}function cI(n=be()){return Ki(n)||za(n)||aI(n)||oI(n)||/windows phone/i.test(n)||iI(n)}function Jx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lI(n,e=[]){let t;switch(n){case"Browser":t=Xg(be());break;case"Worker":t=`${Xg(be())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Us}/${s}`}/**
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
 */class Xx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=r)===null||t===void 0?void 0:t.message})}}}/**
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
 */class Zx{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new Xx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await la(e)}catch(s){if(((t=s)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ox()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?N(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,s,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function He(n){return N(n)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mw(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eO(n,e,t){const s=He(n);E(s._canInitEmulator,s,"emulator-config-failed"),E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=uI(e),{host:o,port:a}=tO(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||nO()}function uI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tO(n){const e=uI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ey(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ey(o)}}}function ey(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Qi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
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
 */async function hI(n,e){return Ke(n,"POST","/v1/accounts:resetPassword",Fe(n,e))}async function dI(n,e){return Ke(n,"POST","/v1/accounts:update",e)}async function sO(n,e){return Ke(n,"POST","/v1/accounts:update",Fe(n,e))}/**
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
 */async function rO(n,e){return ts(n,"POST","/v1/accounts:signInWithPassword",Fe(n,e))}async function wu(n,e){return Ke(n,"POST","/v1/accounts:sendOobCode",Fe(n,e))}async function iO(n,e){return wu(n,e)}async function oO(n,e){return wu(n,e)}async function aO(n,e){return wu(n,e)}async function cO(n,e){return wu(n,e)}/**
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
 */async function lO(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}async function uO(n,e){return ts(n,"POST","/v1/accounts:signInWithEmailLink",Fe(n,e))}/**
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
 */class ha extends Qi{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ha(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ha(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lO(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uO(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(n,e){return ts(n,"POST","/v1/accounts:signInWithIdp",Fe(n,e))}/**
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
 */const hO="http://localhost";class Tn extends Qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=op(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Tn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,jn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:hO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qr(t)}return e}}/**
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
 */async function dO(n,e){return Ke(n,"POST","/v1/accounts:sendVerificationCode",Fe(n,e))}async function fO(n,e){return ts(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e))}async function pO(n,e){const t=await ts(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,e));if(t.temporaryProof)throw Ro(n,"account-exists-with-different-credential",t);return t}const mO={USER_NOT_FOUND:"user-not-found"};async function gO(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ts(n,"POST","/v1/accounts:signInWithPhoneNumber",Fe(n,t),mO)}/**
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
 */class _r extends Qi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _r({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _r({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return fO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new _r({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
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
 */function yO(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _O(n){const e=li(Do(n)).link,t=e?li(Do(e)).deep_link_id:null,s=li(Do(n)).deep_link_id;return(s?li(Do(s)).link:null)||s||t||e||n}class Iu{constructor(e){var t,s,r,i,o,a;const c=li(Do(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=yO((r=c.mode)!==null&&r!==void 0?r:null);E(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=_O(e);try{return new Iu(t)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,t){return ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Iu.parseLink(t);return E(s,"argument-error"),ha._fromEmailAndCode(e,s.code,s.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ns{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends ns{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class gi extends Ji{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),Tn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),Tn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return gi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return gi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!s&&!r&&!t&&!i||!a)return null;try{return new gi(a)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class hn extends Ji{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return dn.credential(t,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends Ji{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */const vO="http://localhost";class bi extends Qi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,jn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=t;return!s||!r||!i||s!==r?null:new bi(s,i)}static _create(e,t){return new bi(e,t)}buildRequest(){return{requestUri:vO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const wO="saml.";class yl extends ns{constructor(e){E(e.startsWith(wO),"argument-error"),super(e)}static credentialFromResult(e){return yl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bi.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return bi._create(s,t)}catch{return null}}}/**
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
 */class pn extends Ji{constructor(){super("twitter.com")}static credential(e,t){return Tn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pn.credential(t,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function fI(n,e){return ts(n,"POST","/v1/accounts:signUp",Fe(n,e))}/**
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
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await gr._fromIdTokenResponse(e,s,r),o=ty(s);return new zt({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=ty(s);return new zt({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function ty(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function IO(n){var e;const t=He(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new zt({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await fI(t,{returnSecureToken:!0}),r=await zt._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(r.user),r}/**
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
 */class _l extends vt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new _l(e,t,s,r)}}function pI(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(n,i,e,s):i})}/**
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
 */function mI(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function EO(n,e){const t=N(n);await Eu(!0,t,e);const{providerUserInfo:s}=await Ux(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=mI(s||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function hp(n,e,t=!1){const s=await zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zt._forOperation(n,"link",s)}async function Eu(n,e,t){await la(e);const s=mI(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";E(s.has(t)===n,e.auth,r)}/**
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
 */async function gI(n,e,t=!1){var s;const{auth:r}=n,i="reauthenticate";try{const o=await zn(n,pI(r,i,e,n),t);E(o.idToken,r,"internal-error");const a=vu(o.idToken);E(a,r,"internal-error");const{sub:c}=a;return E(n.uid===c,r,"user-mismatch"),zt._forOperation(n,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),o}}/**
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
 */async function yI(n,e,t=!1){const s="signIn",r=await pI(n,s,e),i=await zt._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Tu(n,e){return yI(He(n),e)}async function _I(n,e){const t=N(n);return await Eu(!1,t,e.providerId),hp(t,e)}async function vI(n,e){return gI(N(n),e)}/**
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
 */async function TO(n,e){return ts(n,"POST","/v1/accounts:signInWithCustomToken",Fe(n,e))}/**
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
 */async function bO(n,e){const t=He(n),s=await TO(t,{token:e,returnSecureToken:!0}),r=await zt._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
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
 */class bu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dp._fromServerResponse(e,t):it(e,"internal-error")}}class dp extends bu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dp(t)}}/**
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
 */function Su(n,e,t){var s;E(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),E(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(E(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(E(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function SO(n,e,t){const s=N(n),r={requestType:"PASSWORD_RESET",email:e};t&&Su(s,r,t),await oO(s,r)}async function CO(n,e,t){await hI(N(n),{oobCode:e,newPassword:t})}async function kO(n,e){await sO(N(n),{oobCode:e})}async function wI(n,e){const t=N(n),s=await hI(t,{oobCode:e}),r=s.requestType;switch(E(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(s.mfaInfo,t,"internal-error");default:E(s.email,t,"internal-error")}let i=null;return s.mfaInfo&&(i=bu._fromServerResponse(He(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function AO(n,e){const{data:t}=await wI(N(n),e);return t.email}async function NO(n,e,t){const s=He(n),r=await fI(s,{returnSecureToken:!0,email:e,password:t}),i=await zt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function DO(n,e,t){return Tu(N(n),Vs.credential(e,t))}/**
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
 */async function RO(n,e,t){const s=N(n),r={requestType:"EMAIL_SIGNIN",email:e};E(t.handleCodeInApp,s,"argument-error"),t&&Su(s,r,t),await aO(s,r)}function xO(n,e){const t=Iu.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function OO(n,e,t){const s=N(n),r=Vs.credentialWithLink(e,t||ca());return E(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Tu(s,r)}/**
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
 */async function PO(n,e){return Ke(n,"POST","/v1/accounts:createAuthUri",Fe(n,e))}/**
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
 */async function MO(n,e){const t=cp()?ca():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:r}=await PO(N(n),s);return r||[]}async function LO(n,e){const t=N(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Su(t.auth,r,e);const{email:i}=await iO(t.auth,r);i!==n.email&&await n.reload()}async function FO(n,e,t){const s=N(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Su(s.auth,i,t);const{email:o}=await cO(s.auth,i);o!==n.email&&await n.reload()}/**
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
 */async function UO(n,e){return Ke(n,"POST","/v1/accounts:update",e)}/**
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
 */async function VO(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=N(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await zn(s,UO(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function BO(n,e){return II(N(n),e,null)}function WO(n,e){return II(N(n),null,e)}async function II(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await zn(n,dI(s,i));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function qO(n){var e,t;if(!n)return null;const{providerId:s}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n==null?void 0:n.idToken)){const o=(t=(e=vu(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new yi(i,a)}}if(!s)return null;switch(s){case"facebook.com":return new $O(i,r);case"github.com":return new jO(i,r);case"google.com":return new GO(i,r);case"twitter.com":return new HO(i,r,n.screenName||null);case"custom":case"anonymous":return new yi(i,null);default:return new yi(i,s,r)}}class yi{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class EI extends yi{constructor(e,t,s,r){super(e,t,s),this.username=r}}class $O extends yi{constructor(e,t){super(e,"facebook.com",t)}}class jO extends EI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class GO extends yi{constructor(e,t){super(e,"google.com",t)}}class HO extends EI{constructor(e,t,s){super(e,"twitter.com",t,s)}}function YO(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:qO(t)}class lr{constructor(e,t,s){this.type=e,this.credential=t,this.auth=s}static _fromIdtoken(e,t){return new lr("enroll",e,t)}static _fromMfaPendingCredential(e){return new lr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return lr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return lr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class fp{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=He(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>bu._fromServerResponse(s,a));E(r.mfaPendingCredential,s,"internal-error");const o=lr._fromMfaPendingCredential(r.mfaPendingCredential);return new fp(o,i,async a=>{const c=await a._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await zt._fromIdTokenResponse(s,t.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return E(t.user,s,"internal-error"),zt._forOperation(t.user,t.operationType,l);default:it(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function zO(n,e){var t;const s=N(n),r=e;return E(e.customData.operationType,s,"argument-error"),E((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),fp._fromError(s,r)}/**
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
 */function KO(n,e){return Ke(n,"POST","/v2/accounts/mfaEnrollment:start",Fe(n,e))}function QO(n,e){return Ke(n,"POST","/v2/accounts/mfaEnrollment:finalize",Fe(n,e))}function JO(n,e){return Ke(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Fe(n,e))}class pp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>bu._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new pp(e)}async getSession(){return lr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const s=e,r=await this.getSession(),i=await zn(this.user,s._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const s=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await zn(this.user,JO(this.user.auth,{idToken:r,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==s),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(((t=o)===null||t===void 0?void 0:t.code)!=="auth/user-token-expired")throw o}}}const jh=new WeakMap;function XO(n){const e=N(n);return jh.has(e)||jh.set(e,pp._fromUser(e)),jh.get(e)}const vl="__sak";/**
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
 */class TI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ZO(){const n=be();return up(n)||Ki(n)}const eP=1e3,tP=10;class bI extends TI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZO()&&Jx(),this.fallbackToPolling=cI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Qx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,tP):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bI.type="LOCAL";const mp=bI;/**
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
 */class SI extends TI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}SI.type="SESSION";const br=SI;/**
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
 */function nP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Cu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await nP(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function Ka(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ka("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Oe(){return window}function rP(n){Oe().location.href=n}/**
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
 */function gp(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aP(){return gp()?self:null}/**
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
 */const CI="firebaseLocalStorageDb",cP=1,wl="firebaseLocalStorage",kI="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ku(n,e){return n.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function lP(){const n=indexedDB.deleteDatabase(CI);return new Qa(n).toPromise()}function kd(){const n=indexedDB.open(CI,cP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(wl,{keyPath:kI})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(wl)?e(s):(s.close(),await lP(),e(await kd()))})})}async function ny(n,e,t){const s=ku(n,!0).put({[kI]:e,value:t});return new Qa(s).toPromise()}async function uP(n,e){const t=ku(n,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function sy(n,e){const t=ku(n,!0).delete(e);return new Qa(t).toPromise()}const hP=800,dP=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(aP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new sP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await ny(e,vl,"1"),await sy(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ny(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>uP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ku(r,!1).getAll();return new Qa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const da=AI;/**
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
 */function fP(n,e){return Ke(n,"POST","/v2/accounts/mfaSignIn:start",Fe(n,e))}function pP(n,e){return Ke(n,"POST","/v2/accounts/mfaSignIn:finalize",Fe(n,e))}/**
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
 */async function mP(n){return(await Ke(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function gP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function NI(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",gP().appendChild(s)})}function DI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const yP=500,_P=6e4,Rc=1e12;class vP{constructor(e){this.auth=e,this.counter=Rc,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new wP(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||Rc;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||Rc;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||Rc;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class wP{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=IP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},_P)},yP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function IP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Gh=DI("rcb"),EP=new Ya(3e4,6e4),TP="https://www.google.com/recaptcha/api.js?";class bP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Oe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return E(SP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Oe().grecaptcha):new Promise((s,r)=>{const i=Oe().setTimeout(()=>{r(nt(e,"network-request-failed"))},EP.get());Oe()[Gh]=()=>{Oe().clearTimeout(i),delete Oe()[Gh];const a=Oe().grecaptcha;if(!a){r(nt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,s(a)};const o=`${TP}?${qr({onload:Gh,render:"explicit",hl:t})}`;NI(o).catch(()=>{clearTimeout(i),r(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Oe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function SP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class CP{async load(e){return new vP(e)}clearedOneInstance(){}}/**
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
 */const RI="recaptcha",kP={theme:"light",type:"image"};class AP{constructor(e,t=Object.assign({},kP),s){this.parameters=t,this.type=RI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(s),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new CP:new bP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=o=>{!o||(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Oe()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(cp()&&!gp(),this.auth,"internal-error"),await NP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mP(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function NP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class yp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=_r._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function DP(n,e,t){const s=He(n),r=await Au(s,e,N(t));return new yp(r,i=>Tu(s,i))}async function RP(n,e,t){const s=N(n);await Eu(!1,s,"phone");const r=await Au(s.auth,e,N(t));return new yp(r,i=>_I(s,i))}async function xP(n,e,t){const s=N(n),r=await Au(s.auth,e,N(t));return new yp(r,i=>vI(s,i))}async function Au(n,e,t){var s;const r=await t.verify();try{E(typeof r=="string",n,"argument-error"),E(t.type===RI,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return E(o.type==="enroll",n,"internal-error"),(await KO(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{E(o.type==="signin",n,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return E(a,n,"missing-multi-factor-info"),(await fP(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await dO(n,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{t._reset()}}async function OP(n,e){await hp(N(n),e)}/**
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
 */class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,t){return Au(this.auth,e,N(t))}static credential(e,t){return _r._fromVerification(e,t)}static credentialFromResult(e){const t=e;return nn.credentialFromTaggedObject(t)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?_r._fromTokenResponse(t,s):null}}nn.PROVIDER_ID="phone";nn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function $r(n,e){return e?Pt(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _p extends Qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PP(n){return yI(n.auth,new _p(n),n.bypassAuthState)}function MP(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),gI(t,new _p(n),n.bypassAuthState)}async function LP(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),hp(t,new _p(n),n.bypassAuthState)}/**
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
 */class xI{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PP;case"linkViaPopup":case"linkViaRedirect":return LP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:it(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FP=new Ya(2e3,1e4);async function UP(n,e,t){const s=He(n);zi(n,e,ns);const r=$r(s,t);return new Ln(s,"signInViaPopup",e,r).executeNotNull()}async function VP(n,e,t){const s=N(n);zi(s.auth,e,ns);const r=$r(s.auth,t);return new Ln(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function BP(n,e,t){const s=N(n);zi(s.auth,e,ns);const r=$r(s.auth,t);return new Ln(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class Ln extends xI{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,FP.get())};e()}}Ln.currentPopupAction=null;/**
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
 */const WP="pendingRedirect",Vo=new Map;class qP extends xI{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const s=await $P(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $P(n,e){const t=PI(e),s=OI(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function vp(n,e){return OI(n)._set(PI(e),"true")}function jP(){Vo.clear()}function wp(n,e){Vo.set(n._key(),e)}function OI(n){return Pt(n._redirectPersistence)}function PI(n){return yr(WP,n.config.apiKey,n.name)}/**
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
 */function GP(n,e,t){return HP(n,e,t)}async function HP(n,e,t){const s=He(n);zi(n,e,ns);const r=$r(s,t);return await vp(r,s),r._openRedirect(s,e,"signInViaRedirect")}function YP(n,e,t){return zP(n,e,t)}async function zP(n,e,t){const s=N(n);zi(s.auth,e,ns);const r=$r(s.auth,t);await vp(r,s.auth);const i=await MI(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function KP(n,e,t){return QP(n,e,t)}async function QP(n,e,t){const s=N(n);zi(s.auth,e,ns);const r=$r(s.auth,t);await Eu(!1,s,e.providerId),await vp(r,s.auth);const i=await MI(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function JP(n,e){return await He(n)._initializationPromise,Nu(n,e,!1)}async function Nu(n,e,t=!1){const s=He(n),r=$r(s,e),o=await new qP(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function MI(n){const e=Ka(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const XP=10*60*1e3;class LI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!FI(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ry(e))}saveEventToCache(e){this.cachedEventUids.add(ry(e)),this.lastProcessedEventTime=Date.now()}}function ry(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function FI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FI(n);default:return!1}}/**
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
 */async function UI(n,e={}){return Ke(n,"GET","/v1/projects",e)}/**
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
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UI(n);for(const t of e)try{if(s1(t))return}catch{}it(n,"unauthorized-domain")}function s1(n){const e=ca(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!t1.test(t))return!1;if(e1.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const r1=new Ya(3e4,6e4);function iy(){const n=Oe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function i1(n){return new Promise((e,t)=>{var s,r,i;function o(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),t(nt(n,"network-request-failed"))},timeout:r1.get()})}if(!((r=(s=Oe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Oe().gapi)===null||i===void 0)&&i.load)o();else{const a=DI("iframefcb");return Oe()[a]=()=>{gapi.load?o():t(nt(n,"network-request-failed"))},NI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Jc=null,e})}let Jc=null;function o1(n){return Jc=Jc||i1(n),Jc}/**
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
 */const a1=new Ya(5e3,15e3),c1="__/auth/iframe",l1="emulator/auth/iframe",u1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d1(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lp(e,l1):`https://${n.config.authDomain}/${c1}`,s={apiKey:e.apiKey,appName:n.name,v:Us},r=h1.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${qr(s).slice(1)}`}async function f1(n){const e=await o1(n),t=Oe().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:d1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(n,"network-request-failed"),a=Oe().setTimeout(()=>{i(o)},a1.get());function c(){Oe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,y1="_blank",_1="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v1(n,e,t,s=m1,r=g1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},p1),{width:s.toString(),height:r.toString(),top:i,left:o}),l=be().toLowerCase();t&&(a=rI(l)?y1:t),sI(l)&&(e=e||_1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Kx(l)&&a!=="_self")return w1(e||"",a),new oy(null);const h=window.open(e||"",a,u);E(h,n,"popup-blocked");try{h.focus()}catch{}return new oy(h)}function w1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const I1="__/auth/handler",E1="emulator/auth/handler";function Ad(n,e,t,s,r,i){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Us,eventId:r};if(e instanceof ns){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",pl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ji){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${T1(n)}?${qr(a).slice(1)}`}function T1({config:n}){return n.emulator?lp(n,E1):`https://${n.authDomain}/${I1}`}/**
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
 */const Hh="webStorageSupport";class b1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=br,this._completeRedirectFn=Nu,this._overrideRedirectResult=wp}async _openPopup(e,t,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ad(e,t,s,ca(),r);return v1(e,o,Ka())}async _openRedirect(e,t,s,r){return await this._originValidation(e),rP(Ad(e,t,s,ca(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await f1(e),s=new LI(e);return t.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hh,{type:Hh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Hh];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cI()||up()||Ki()}}const S1=b1;class C1{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return gn("unexpected MultiFactorSessionType")}}}class Ip extends C1{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ip(e)}_finalizeEnroll(e,t,s){return QO(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return pP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class VI{constructor(){}static assertion(e){return Ip._fromCredential(e)}}VI.FACTOR_ID="phone";var ay="@firebase/auth",cy="0.20.11";/**
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
 */class k1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function N1(n){Yn(new Ft("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{E(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),E(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lI(n)},u=new Zx(a,c,l);return Rx(u,t),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new Ft("auth-internal",e=>{const t=He(e.getProvider("auth").getImmediate());return(s=>new k1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(ay,cy,A1(n)),Yt(ay,cy,"esm2017")}/**
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
 */const D1=5*60;tR("authIdTokenMaxAge");N1("Browser");/**
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
 */function Sr(){return window}/**
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
 */const R1=2e3;async function x1(n,e,t){var s;const{BuildInfo:r}=Sr();an(e.sessionId,"AuthEvent did not contain a session ID");const i=await F1(e.sessionId),o={};return Ki()?o.ibi=r.packageName:za()?o.apn=r.packageName:it(n,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=i,Ad(n,t,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function O1(n){const{BuildInfo:e}=Sr(),t={};Ki()?t.iosBundleId=e.packageName:za()?t.androidPackageName=e.packageName:it(n,"operation-not-supported-in-this-environment"),await UI(n,t)}function P1(n){const{cordova:e}=Sr();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let r=null;s?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,zx()?"_blank":"_system","location=yes"),t(r)})})}async function M1(n,e,t){const{cordova:s}=Sr();let r=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(nt(n,"redirect-cancelled-by-user"))},R1))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),za()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function L1(n){var e,t,s,r,i,o,a,c,l,u;const h=Sr();E(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E(typeof((i=(r=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||r===void 0?void 0:r.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function F1(n){const e=U1(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")}function U1(n){if(an(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let s=0;s<n.length;s++)t[s]=n.charCodeAt(s);return t}/**
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
 */const V1=20;class B1 extends LI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function W1(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:j1(),postBody:null,tenantId:n.tenantId,error:nt(n,"no-auth-event")}}function q1(n,e){return Nd()._set(Dd(n),e)}async function ly(n){const e=await Nd()._get(Dd(n));return e&&await Nd()._remove(Dd(n)),e}function $1(n,e){var t,s;const r=H1(e);if(r.includes("/__/auth/callback")){const i=Xc(r),o=i.firebaseError?G1(decodeURIComponent(i.firebaseError)):null,a=(s=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||s===void 0?void 0:s[1],c=a?nt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function j1(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<V1;t++){const s=Math.floor(Math.random()*e.length);n.push(e.charAt(s))}return n.join("")}function Nd(){return Pt(mp)}function Dd(n){return yr("authEvent",n.config.apiKey,n.name)}function G1(n){try{return JSON.parse(n)}catch{return null}}function H1(n){const e=Xc(n),t=e.link?decodeURIComponent(e.link):void 0,s=Xc(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Xc(r).link||r||s||t||n}function Xc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return li(t.join("?"))}/**
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
 */const Y1=500;class z1{constructor(){this._redirectPersistence=br,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nu,this._overrideRedirectResult=wp}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new B1(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){it(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,r){L1(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),jP(),await this._originValidation(e);const o=W1(e,s,r);await q1(e,o);const a=await x1(e,o,t),c=await P1(a);return M1(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=O1(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:r,BuildInfo:i}=Sr(),o=setTimeout(async()=>{await ly(e),t.onEvent(uy())},Y1),a=async u=>{clearTimeout(o);const h=await ly(e);let d=null;h&&(u==null?void 0:u.url)&&(d=$1(h,u.url)),t.onEvent(d||uy())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=r,l=`${i.packageName.toLowerCase()}://`;Sr().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const K1=z1;function uy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nt("no-auth-event")}}/**
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
 */function Q1(n,e){He(n)._logFramework(e)}var J1="@firebase/auth-compat",X1="0.2.24";/**
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
 */const Z1=1e3;function Bo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function eM(){return Bo()==="http:"||Bo()==="https:"}function BI(n=be()){return!!((Bo()==="file:"||Bo()==="ionic:"||Bo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function tM(){return yu()||np()}function nM(){return Dw()&&(document==null?void 0:document.documentMode)===11}function sM(n=be()){return/Edge\/\d+/.test(n)}function rM(n=be()){return nM()||sM(n)}function WI(){try{const n=self.localStorage,e=Ka();if(n)return n.setItem(e,"1"),n.removeItem(e),rM()?ra():!0}catch{return Ep()&&ra()}return!1}function Ep(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Yh(){return(eM()||Nw()||BI())&&!tM()&&WI()&&!Ep()}function qI(){return BI()&&typeof document<"u"}async function iM(){return qI()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},Z1);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function oM(){return typeof window<"u"?window:null}/**
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
 */const xt={LOCAL:"local",NONE:"none",SESSION:"session"},yo=E,$I="persistence";function aM(n,e){if(yo(Object.values(xt).includes(e),n,"invalid-persistence-type"),yu()){yo(e!==xt.SESSION,n,"unsupported-persistence-type");return}if(np()){yo(e===xt.NONE,n,"unsupported-persistence-type");return}if(Ep()){yo(e===xt.NONE||e===xt.LOCAL&&ra(),n,"unsupported-persistence-type");return}yo(e===xt.NONE||WI(),n,"unsupported-persistence-type")}async function Rd(n){await n._initializationPromise;const e=jI(),t=yr($I,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function cM(n,e){const t=jI();if(!t)return[];const s=yr($I,n,e);switch(t.getItem(s)){case xt.NONE:return[Ti];case xt.LOCAL:return[da,br];case xt.SESSION:return[br];default:return[]}}function jI(){var n;try{return((n=oM())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const lM=E;class ps{constructor(){this.browserResolver=Pt(S1),this.cordovaResolver=Pt(K1),this.underlyingResolver=null,this._redirectPersistence=br,this._completeRedirectFn=Nu,this._overrideRedirectResult=wp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,r)}async _openRedirect(e,t,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return lM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function GI(n){return n.unwrap()}function uM(n){return n.wrapped()}/**
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
 */function hM(n){return HI(n)}function dM(n,e){var t,s;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new fM(n,zO(n,e))}else if(r){const i=HI(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function HI(n){const{_tokenResponse:e}=n instanceof vt?n.customData:n;if(!e)return null;if(!(n instanceof vt)&&"temporaryProof"in e&&"phoneNumber"in e)return nn.credentialFromResult(n);const t=e.providerId;if(!t||t===go.PASSWORD)return null;let s;switch(t){case go.GOOGLE:s=dn;break;case go.FACEBOOK:s=hn;break;case go.GITHUB:s=fn;break;case go.TWITTER:s=pn;break;default:const{oauthIdToken:r,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!r&&!a?null:a?t.startsWith("saml.")?bi._create(t,a):Tn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:r,accessToken:i}):new gi(t).credential({idToken:r,accessToken:i,rawNonce:c})}return n instanceof vt?s.credentialFromError(n):s.credentialFromResult(n)}function Et(n,e){return e.catch(t=>{throw t instanceof vt&&dM(n,t),t}).then(t=>{const s=t.operationType,r=t.user;return{operationType:s,credential:hM(t),additionalUserInfo:YO(t),user:Fn.getOrCreate(r)}})}async function xd(n,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Et(n,t.confirm(s))}}class fM{constructor(e,t){this.resolver=t,this.auth=uM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Et(GI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Fn{constructor(e){this._delegate=e,this.multiFactor=XO(e)}static getOrCreate(e){return Fn.USER_MAP.has(e)||Fn.USER_MAP.set(e,new Fn(e)),Fn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Et(this.auth,_I(this._delegate,e))}async linkWithPhoneNumber(e,t){return xd(this.auth,RP(this._delegate,e,t))}async linkWithPopup(e){return Et(this.auth,BP(this._delegate,e,ps))}async linkWithRedirect(e){return await Rd(He(this.auth)),KP(this._delegate,e,ps)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Et(this.auth,vI(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return xd(this.auth,xP(this._delegate,e,t))}reauthenticateWithPopup(e){return Et(this.auth,VP(this._delegate,e,ps))}async reauthenticateWithRedirect(e){return await Rd(He(this.auth)),YP(this._delegate,e,ps)}sendEmailVerification(e){return LO(this._delegate,e)}async unlink(e){return await EO(this._delegate,e),this}updateEmail(e){return BO(this._delegate,e)}updatePassword(e){return WO(this._delegate,e)}updatePhoneNumber(e){return OP(this._delegate,e)}updateProfile(e){return VO(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return FO(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Fn.USER_MAP=new WeakMap;/**
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
 */const _o=E;class Od{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;_o(s,"invalid-api-key",{appName:e.name}),_o(s,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?ps:void 0;this._delegate=t.initialize({options:{persistence:pM(s,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(Nx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Fn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){eO(this._delegate,e,t)}applyActionCode(e){return kO(this._delegate,e)}checkActionCode(e){return wI(this._delegate,e)}confirmPasswordReset(e,t){return CO(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Et(this._delegate,NO(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return MO(this._delegate,e)}isSignInWithEmailLink(e){return xO(this._delegate,e)}async getRedirectResult(){_o(Yh(),this._delegate,"operation-not-supported-in-this-environment");const e=await JP(this._delegate,ps);return e?Et(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Q1(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:r,error:i,complete:o}=hy(e,t,s);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,s){const{next:r,error:i,complete:o}=hy(e,t,s);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return RO(this._delegate,e,t)}sendPasswordResetEmail(e,t){return SO(this._delegate,e,t||void 0)}async setPersistence(e){aM(this._delegate,e);let t;switch(e){case xt.SESSION:t=br;break;case xt.LOCAL:t=await Pt(da)._isAvailable()?da:mp;break;case xt.NONE:t=Ti;break;default:return it("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Et(this._delegate,IO(this._delegate))}signInWithCredential(e){return Et(this._delegate,Tu(this._delegate,e))}signInWithCustomToken(e){return Et(this._delegate,bO(this._delegate,e))}signInWithEmailAndPassword(e,t){return Et(this._delegate,DO(this._delegate,e,t))}signInWithEmailLink(e,t){return Et(this._delegate,OO(this._delegate,e,t))}signInWithPhoneNumber(e,t){return xd(this._delegate,DP(this._delegate,e,t))}async signInWithPopup(e){return _o(Yh(),this._delegate,"operation-not-supported-in-this-environment"),Et(this._delegate,UP(this._delegate,e,ps))}async signInWithRedirect(e){return _o(Yh(),this._delegate,"operation-not-supported-in-this-environment"),await Rd(this._delegate),GP(this._delegate,e,ps)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return AO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Od.Persistence=xt;function hy(n,e,t){let s=n;typeof n!="function"&&({next:s,error:e,complete:t}=n);const r=s;return{next:o=>r(o&&Fn.getOrCreate(o)),error:e,complete:t}}function pM(n,e){const t=cM(n,e);if(typeof self<"u"&&!t.includes(da)&&t.push(da),typeof window<"u")for(const s of[mp,br])t.includes(s)||t.push(s);return t.includes(Ti)||t.push(Ti),t}/**
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
 */class Tp{constructor(){this.providerId="phone",this._delegate=new nn(GI(ct.auth()))}static credential(e,t){return nn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Tp.PHONE_SIGN_IN_METHOD=nn.PHONE_SIGN_IN_METHOD;Tp.PROVIDER_ID=nn.PROVIDER_ID;/**
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
 */const mM=E;class gM{constructor(e,t,s=ct.app()){var r;mM((r=s.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new AP(e,t,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const yM="auth-compat";function _M(n){n.INTERNAL.registerComponent(new Ft(yM,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Od(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ti.EMAIL_SIGNIN,PASSWORD_RESET:ti.PASSWORD_RESET,RECOVER_EMAIL:ti.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ti.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ti.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ti.VERIFY_EMAIL}},EmailAuthProvider:Vs,FacebookAuthProvider:hn,GithubAuthProvider:fn,GoogleAuthProvider:dn,OAuthProvider:gi,SAMLAuthProvider:yl,PhoneAuthProvider:Tp,PhoneMultiFactorGenerator:VI,RecaptchaVerifier:gM,TwitterAuthProvider:pn,Auth:Od,AuthCredential:Qi,Error:vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(J1,X1)}_M(ct);var vM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,bp=bp||{},W=vM||self;function Il(){}function Du(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ja(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function wM(n){return Object.prototype.hasOwnProperty.call(n,zh)&&n[zh]||(n[zh]=++IM)}var zh="closure_uid_"+(1e9*Math.random()>>>0),IM=0;function EM(n,e,t){return n.call.apply(n.bind,arguments)}function TM(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function lt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=EM:lt=TM,lt.apply(null,arguments)}function xc(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function ot(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Bs(){this.s=this.s,this.o=this.o}var bM=0;Bs.prototype.s=!1;Bs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bM!=0)&&wM(this)};Bs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const YI=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Sp(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function dy(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Du(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function ut(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var SM=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{W.addEventListener("test",Il,e),W.removeEventListener("test",Il,e)}catch{}return n}();function El(n){return/^[\s\xa0]*$/.test(n)}var fy=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Kh(n,e){return n<e?-1:n>e?1:0}function Ru(){var n=W.navigator;return n&&(n=n.userAgent)?n:""}function mn(n){return Ru().indexOf(n)!=-1}function Cp(n){return Cp[" "](n),n}Cp[" "]=Il;function CM(n){var e=NM;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var kM=mn("Opera"),Si=mn("Trident")||mn("MSIE"),zI=mn("Edge"),Pd=zI||Si,KI=mn("Gecko")&&!(Ru().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),AM=Ru().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function QI(){var n=W.document;return n?n.documentMode:void 0}var Tl;e:{var Qh="",Jh=function(){var n=Ru();if(KI)return/rv:([^\);]+)(\)|;)/.exec(n);if(zI)return/Edge\/([\d\.]+)/.exec(n);if(Si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(AM)return/WebKit\/(\S+)/.exec(n);if(kM)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Jh&&(Qh=Jh?Jh[1]:""),Si){var Xh=QI();if(Xh!=null&&Xh>parseFloat(Qh)){Tl=String(Xh);break e}}Tl=Qh}var NM={};function DM(){return CM(function(){let n=0;const e=fy(String(Tl)).split("."),t=fy("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Kh(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Kh(r[2].length==0,i[2].length==0)||Kh(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var Md;if(W.document&&Si){var py=QI();Md=py||parseInt(Tl,10)||void 0}else Md=void 0;var RM=Md;function fa(n,e){if(ut.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(KI){e:{try{Cp(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:xM[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&fa.X.h.call(this)}}ot(fa,ut);var xM={2:"touch",3:"pen",4:"mouse"};fa.prototype.h=function(){fa.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Xa="closure_listenable_"+(1e6*Math.random()|0),OM=0;function PM(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++OM,this.ba=this.ea=!1}function xu(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function kp(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function JI(n){const e={};for(const t in n)e[t]=n[t];return e}const my="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function XI(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<my.length;i++)t=my[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Ou(n){this.src=n,this.g={},this.h=0}Ou.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Fd(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new PM(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function Ld(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=YI(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Fd(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var Ap="closure_lm_"+(1e6*Math.random()|0),Zh={};function ZI(n,e,t,s,r){if(s&&s.once)return tE(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ZI(n,e[i],t,s,r);return null}return t=Rp(t),n&&n[Xa]?n.N(e,t,Ja(s)?!!s.capture:!!s,r):eE(n,e,t,!1,s,r)}function eE(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Ja(r)?!!r.capture:!!r,a=Dp(n);if(a||(n[Ap]=a=new Ou(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=MM(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)SM||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(sE(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function MM(){function n(t){return e.call(n.src,n.listener,t)}const e=LM;return n}function tE(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)tE(n,e[i],t,s,r);return null}return t=Rp(t),n&&n[Xa]?n.O(e,t,Ja(s)?!!s.capture:!!s,r):eE(n,e,t,!0,s,r)}function nE(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)nE(n,e[i],t,s,r);else s=Ja(s)?!!s.capture:!!s,t=Rp(t),n&&n[Xa]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Fd(i,t,s,r),-1<t&&(xu(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Dp(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Fd(e,t,s,r)),(t=-1<n?e[n]:null)&&Np(t))}function Np(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Xa])Ld(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(sE(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Dp(e))?(Ld(t,n),t.h==0&&(t.src=null,e[Ap]=null)):xu(n)}}}function sE(n){return n in Zh?Zh[n]:Zh[n]="on"+n}function LM(n,e){if(n.ba)n=!0;else{e=new fa(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&Np(n),n=t.call(s,e)}return n}function Dp(n){return n=n[Ap],n instanceof Ou?n:null}var ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rp(n){return typeof n=="function"?n:(n[ed]||(n[ed]=function(e){return n.handleEvent(e)}),n[ed])}function Ye(){Bs.call(this),this.i=new Ou(this),this.P=this,this.I=null}ot(Ye,Bs);Ye.prototype[Xa]=!0;Ye.prototype.removeEventListener=function(n,e,t,s){nE(this,n,e,t,s)};function st(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new ut(e,n);else if(e instanceof ut)e.target=e.target||n;else{var r=e;e=new ut(s,n),XI(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Oc(o,s,!0,e)&&r}if(o=e.g=n,r=Oc(o,s,!0,e)&&r,r=Oc(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Oc(o,s,!1,e)&&r}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)xu(t[s]);delete n.g[e],n.h--}}this.I=null};Ye.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Ye.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Oc(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Ld(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var xp=W.JSON.stringify;function FM(){var n=oE;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class UM{constructor(){this.h=this.g=null}add(e,t){const s=rE.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var rE=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new VM,n=>n.reset());class VM{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function BM(n){W.setTimeout(()=>{throw n},0)}function iE(n,e){Ud||WM(),Vd||(Ud(),Vd=!0),oE.add(n,e)}var Ud;function WM(){var n=W.Promise.resolve(void 0);Ud=function(){n.then(qM)}}var Vd=!1,oE=new UM;function qM(){for(var n;n=FM();){try{n.h.call(n.g)}catch(t){BM(t)}var e=rE;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Vd=!1}function Pu(n,e){Ye.call(this),this.h=n||1,this.g=e||W,this.j=lt(this.lb,this),this.l=Date.now()}ot(Pu,Ye);x=Pu.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(Op(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Op(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}x.M=function(){Pu.X.M.call(this),Op(this),delete this.g};function Pp(n,e,t){if(typeof n=="function")t&&(n=lt(n,t));else if(n&&typeof n.handleEvent=="function")n=lt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(n,e||0)}function aE(n){n.g=Pp(()=>{n.g=null,n.i&&(n.i=!1,aE(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class $M extends Bs{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:aE(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pa(n){Bs.call(this),this.h=n,this.g={}}ot(pa,Bs);var gy=[];function cE(n,e,t,s){Array.isArray(t)||(t&&(gy[0]=t.toString()),t=gy);for(var r=0;r<t.length;r++){var i=ZI(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function lE(n){kp(n.g,function(e,t){this.g.hasOwnProperty(t)&&Np(e)},n),n.g={}}pa.prototype.M=function(){pa.X.M.call(this),lE(this)};pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mu(){this.g=!0}Mu.prototype.Aa=function(){this.g=!1};function jM(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function GM(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function ui(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+YM(n,t)+(s?" "+s:"")})}function HM(n,e){n.info(function(){return"TIMEOUT: "+e})}Mu.prototype.info=function(){};function YM(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return xp(t)}catch{return e}}var jr={},yy=null;function Lu(){return yy=yy||new Ye}jr.Pa="serverreachability";function uE(n){ut.call(this,jr.Pa,n)}ot(uE,ut);function ma(n){const e=Lu();st(e,new uE(e))}jr.STAT_EVENT="statevent";function hE(n,e){ut.call(this,jr.STAT_EVENT,n),this.stat=e}ot(hE,ut);function yt(n){const e=Lu();st(e,new hE(e,n))}jr.Qa="timingevent";function dE(n,e){ut.call(this,jr.Qa,n),this.size=e}ot(dE,ut);function Za(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){n()},e)}var Fu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Mp(){}Mp.prototype.h=null;function _y(n){return n.h||(n.h=n.i())}function pE(){}var ec={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lp(){ut.call(this,"d")}ot(Lp,ut);function Fp(){ut.call(this,"c")}ot(Fp,ut);var Bd;function Uu(){}ot(Uu,Mp);Uu.prototype.g=function(){return new XMLHttpRequest};Uu.prototype.i=function(){return{}};Bd=new Uu;function tc(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new pa(this),this.O=zM,n=Pd?125:void 0,this.T=new Pu(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mE}function mE(){this.i=null,this.g="",this.h=!1}var zM=45e3,Wd={},bl={};x=tc.prototype;x.setTimeout=function(n){this.O=n};function qd(n,e,t){n.K=1,n.v=Bu(Kn(e)),n.s=t,n.P=!0,gE(n,null)}function gE(n,e){n.F=Date.now(),nc(n),n.A=Kn(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),bE(t.i,"t",s),n.C=0,t=n.l.H,n.h=new mE,n.g=GE(n.l,t?e:null,!n.s),0<n.N&&(n.L=new $M(lt(n.La,n,n.g),n.N)),cE(n.S,n.g,"readystatechange",n.ib),e=n.H?JI(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),ma(),jM(n.j,n.u,n.A,n.m,n.U,n.s)}x.ib=function(n){n=n.target;const e=this.L;e&&Un(n)==3?e.l():this.La(n)};x.La=function(n){try{if(n==this.g)e:{const u=Un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Pd||this.g&&(this.h.h||this.g.fa()||Ey(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ma(3):ma(2)),Vu(this);var t=this.g.aa();this.Y=t;t:if(yE(this)){var s=Ey(this.g);n="";var r=s.length,i=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Wo(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,GM(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!El(a)){var l=a;break t}}l=null}if(t=l)ui(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$d(this,t);else{this.i=!1,this.o=3,yt(12),ur(this),Wo(this);break e}}this.P?(_E(this,u,o),Pd&&this.i&&u==3&&(cE(this.S,this.T,"tick",this.hb),this.T.start())):(ui(this.j,this.m,o,null),$d(this,o)),u==4&&ur(this),this.i&&!this.I&&(u==4?WE(this.l,this):(this.i=!1,nc(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),ur(this),Wo(this)}}}catch{}finally{}};function yE(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function _E(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=KM(n,t),r==bl){e==4&&(n.o=4,yt(14),s=!1),ui(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Wd){n.o=4,yt(15),ui(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ui(n.j,n.m,r,null),$d(n,r);yE(n)&&r!=bl&&r!=Wd&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,yt(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),jp(e),e.K=!0,yt(11))):(ui(n.j,n.m,t,"[Invalid Chunked Response]"),ur(n),Wo(n))}x.hb=function(){if(this.g){var n=Un(this.g),e=this.g.fa();this.C<e.length&&(Vu(this),_E(this,n,e),this.i&&n!=4&&nc(this))}};function KM(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?bl:(t=Number(e.substring(t,s)),isNaN(t)?Wd:(s+=1,s+t>e.length?bl:(e=e.substr(s,t),n.C=s+t,e)))}x.cancel=function(){this.I=!0,ur(this)};function nc(n){n.V=Date.now()+n.O,vE(n,n.O)}function vE(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Za(lt(n.gb,n),e)}function Vu(n){n.B&&(W.clearTimeout(n.B),n.B=null)}x.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(HM(this.j,this.A),this.K!=2&&(ma(),yt(17)),ur(this),this.o=2,Wo(this)):vE(this,this.V-n)};function Wo(n){n.l.G==0||n.I||WE(n.l,n)}function ur(n){Vu(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Op(n.T),lE(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function $d(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||jd(t.h,n))){if(!n.J&&jd(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)kl(t),$u(t);else break e;$p(t),yt(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=Za(lt(t.cb,t),6e3));if(1>=kE(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else hr(t,11)}else if((n.J||t.g==n)&&kl(t),!El(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Up(i,i.h),i.h=null))}if(s.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,ve(s.F,s.D,g))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=jE(s,s.H?s.ka:null,s.V),o.J){AE(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vu(a),nc(a)),s.g=o}else VE(s);0<t.i.length&&ju(t)}else l[0]!="stop"&&l[0]!="close"||hr(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hr(t,7):qp(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}ma(4)}catch{}}function QM(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Du(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function JM(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Du(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function wE(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Du(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=JM(n),s=QM(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var IE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XM(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function vr(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof vr){this.h=e!==void 0?e:n.h,Sl(this,n.j),this.s=n.s,this.g=n.g,Cl(this,n.m),this.l=n.l,e=n.i;var t=new ga;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),vy(this,t),this.o=n.o}else n&&(t=String(n).match(IE))?(this.h=!!e,Sl(this,t[1]||"",!0),this.s=xo(t[2]||""),this.g=xo(t[3]||"",!0),Cl(this,t[4]),this.l=xo(t[5]||"",!0),vy(this,t[6]||"",!0),this.o=xo(t[7]||"")):(this.h=!!e,this.i=new ga(null,this.h))}vr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Oo(e,wy,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Oo(e,wy,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Oo(t,t.charAt(0)=="/"?tL:eL,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Oo(t,sL)),n.join("")};function Kn(n){return new vr(n)}function Sl(n,e,t){n.j=t?xo(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Cl(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function vy(n,e,t){e instanceof ga?(n.i=e,rL(n.i,n.h)):(t||(e=Oo(e,nL)),n.i=new ga(e,n.h))}function ve(n,e,t){n.i.set(e,t)}function Bu(n){return ve(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function xo(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Oo(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ZM),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ZM(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var wy=/[#\/\?@]/g,eL=/[#\?:]/g,tL=/[#\?]/g,nL=/[#\?@]/g,sL=/#/g;function ga(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ws(n){n.g||(n.g=new Map,n.h=0,n.i&&XM(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}x=ga.prototype;x.add=function(n,e){Ws(this),this.i=null,n=Xi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function EE(n,e){Ws(n),e=Xi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function TE(n,e){return Ws(n),e=Xi(n,e),n.g.has(e)}x.forEach=function(n,e){Ws(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};x.oa=function(){Ws(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};x.W=function(n){Ws(this);let e=[];if(typeof n=="string")TE(this,n)&&(e=e.concat(this.g.get(Xi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};x.set=function(n,e){return Ws(this),this.i=null,n=Xi(this,n),TE(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};x.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function bE(n,e,t){EE(n,e),0<t.length&&(n.i=null,n.g.set(Xi(n,e),Sp(t)),n.h+=t.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function Xi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function rL(n,e){e&&!n.j&&(Ws(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(EE(this,s),bE(this,r,t))},n)),n.j=e}var iL=class{constructor(n,e){this.h=n,this.g=e}};function SE(n){this.l=n||oL,W.PerformanceNavigationTiming?(n=W.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oL=10;function CE(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function kE(n){return n.h?1:n.g?n.g.size:0}function jd(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Up(n,e){n.g?n.g.add(e):n.h=e}function AE(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}SE.prototype.cancel=function(){if(this.i=NE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function NE(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Sp(n.i)}function Vp(){}Vp.prototype.stringify=function(n){return W.JSON.stringify(n,void 0)};Vp.prototype.parse=function(n){return W.JSON.parse(n,void 0)};function aL(){this.g=new Vp}function cL(n,e,t){const s=t||"";try{wE(n,function(r,i){let o=r;Ja(r)&&(o=xp(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function lL(n,e){const t=new Mu;if(W.Image){const s=new Image;s.onload=xc(Pc,t,s,"TestLoadImage: loaded",!0,e),s.onerror=xc(Pc,t,s,"TestLoadImage: error",!1,e),s.onabort=xc(Pc,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=xc(Pc,t,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Pc(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function sc(n){this.l=n.ac||null,this.j=n.jb||!1}ot(sc,Mp);sc.prototype.g=function(){return new Wu(this.l,this.j)};sc.prototype.i=function(n){return function(){return n}}({});function Wu(n,e){Ye.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Bp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Wu,Ye);var Bp=0;x=Wu.prototype;x.open=function(n,e){if(this.readyState!=Bp)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ya(this)};x.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=Bp};x.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;DE(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function DE(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}x.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?rc(this):ya(this),this.readyState==3&&DE(this)}};x.Va=function(n){this.g&&(this.response=this.responseText=n,rc(this))};x.Ua=function(n){this.g&&(this.response=n,rc(this))};x.ga=function(){this.g&&rc(this)};function rc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ya(n)}x.setRequestHeader=function(n,e){this.v.append(n,e)};x.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ya(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var uL=W.JSON.parse;function Ce(n){Ye.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=RE,this.K=this.L=!1}ot(Ce,Ye);var RE="",hL=/^https?$/i,dL=["POST","PUT"];x=Ce.prototype;x.Ka=function(n){this.L=n};x.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bd.g(),this.C=this.u?_y(this.u):_y(Bd),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Iy(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&n instanceof W.FormData,!(0<=YI(dL,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{PE(this),0<this.B&&((this.K=fL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=Pp(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Iy(this,i)}};function fL(n){return Si&&DM()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}x.qa=function(){typeof bp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Iy(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,xE(n),qu(n)}function xE(n){n.D||(n.D=!0,st(n,"complete"),st(n,"error"))}x.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,st(this,"complete"),st(this,"abort"),qu(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qu(this,!0)),Ce.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?OE(this):this.fb())};x.fb=function(){OE(this)};function OE(n){if(n.h&&typeof bp<"u"&&(!n.C[1]||Un(n)!=4||n.aa()!=2)){if(n.v&&Un(n)==4)Pp(n.Ha,0,n);else if(st(n,"readystatechange"),Un(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(IE)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!hL.test(r?r.toLowerCase():"")}t=s}if(t)st(n,"complete"),st(n,"success");else{n.m=6;try{var o=2<Un(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",xE(n)}}finally{qu(n)}}}}function qu(n,e){if(n.g){PE(n);const t=n.g,s=n.C[0]?Il:null;n.g=null,n.C=null,e||st(n,"ready");try{t.onreadystatechange=s}catch{}}}function PE(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(W.clearTimeout(n.A),n.A=null)}function Un(n){return n.g?n.g.readyState:0}x.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),uL(e)}};function Ey(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case RE:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ME(n){let e="";return kp(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Wp(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=ME(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ve(n,e,t))}function vo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function LE(n){this.Ca=0,this.i=[],this.j=new Mu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vo("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vo("baseRetryDelayMs",5e3,n),this.bb=vo("retryDelaySeedMs",1e4,n),this.$a=vo("forwardChannelMaxRetries",2,n),this.ta=vo("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new SE(n&&n.concurrentRequestLimit),this.Fa=new aL,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=LE.prototype;x.ma=8;x.G=1;function qp(n){if(FE(n),n.G==3){var e=n.U++,t=Kn(n.F);ve(t,"SID",n.I),ve(t,"RID",e),ve(t,"TYPE","terminate"),ic(n,t),e=new tc(n,n.j,e,void 0),e.K=2,e.v=Bu(Kn(t)),t=!1,W.navigator&&W.navigator.sendBeacon&&(t=W.navigator.sendBeacon(e.v.toString(),"")),!t&&W.Image&&(new Image().src=e.v,t=!0),t||(e.g=GE(e.l,null),e.g.da(e.v)),e.F=Date.now(),nc(e)}$E(n)}function $u(n){n.g&&(jp(n),n.g.cancel(),n.g=null)}function FE(n){$u(n),n.u&&(W.clearTimeout(n.u),n.u=null),kl(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&W.clearTimeout(n.m),n.m=null)}function ju(n){CE(n.h)||n.m||(n.m=!0,iE(n.Ja,n),n.C=0)}function pL(n,e){return kE(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Za(lt(n.Ja,n,e),qE(n,n.C)),n.C++,!0)}x.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new tc(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=JI(i),XI(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=UE(this,r,e),t=Kn(this.F),ve(t,"RID",n),ve(t,"CVER",22),this.D&&ve(t,"X-HTTP-Session-Id",this.D),ic(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(ME(i)))+"&"+e:this.o&&Wp(t,this.o,i)),Up(this.h,r),this.Ya&&ve(t,"TYPE","init"),this.O?(ve(t,"$req",e),ve(t,"SID","null"),r.Z=!0,qd(r,t,null)):qd(r,t,e),this.G=2}}else this.G==3&&(n?Ty(this,n):this.i.length==0||CE(this.h)||Ty(this))};function Ty(n,e){var t;e?t=e.m:t=n.U++;const s=Kn(n.F);ve(s,"SID",n.I),ve(s,"RID",t),ve(s,"AID",n.T),ic(n,s),n.o&&n.s&&Wp(s,n.o,n.s),t=new tc(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=UE(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Up(n.h,t),qd(t,s,e)}function ic(n,e){n.ia&&kp(n.ia,function(t,s){ve(e,s,t)}),n.l&&wE({},function(t,s){ve(e,s,t)})}function UE(n,e,t){t=Math.min(n.i.length,t);var s=n.l?lt(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{cL(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function VE(n){n.g||n.u||(n.Z=1,iE(n.Ia,n),n.A=0)}function $p(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Za(lt(n.Ia,n),qE(n,n.A)),n.A++,!0)}x.Ia=function(){if(this.u=null,BE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Za(lt(this.eb,this),n)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,yt(10),$u(this),BE(this))};function jp(n){n.B!=null&&(W.clearTimeout(n.B),n.B=null)}function BE(n){n.g=new tc(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Kn(n.sa);ve(e,"RID","rpc"),ve(e,"SID",n.I),ve(e,"CI",n.L?"0":"1"),ve(e,"AID",n.T),ve(e,"TYPE","xmlhttp"),ic(n,e),n.o&&n.s&&Wp(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Bu(Kn(e)),t.s=null,t.P=!0,gE(t,n)}x.cb=function(){this.v!=null&&(this.v=null,$u(this),$p(this),yt(19))};function kl(n){n.v!=null&&(W.clearTimeout(n.v),n.v=null)}function WE(n,e){var t=null;if(n.g==e){kl(n),jp(n),n.g=null;var s=2}else if(jd(n.h,e))t=e.D,AE(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=Lu(),st(s,new dE(s,t)),ju(n)}else VE(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&pL(n,e)||s==2&&$p(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:hr(n,5);break;case 4:hr(n,10);break;case 3:hr(n,6);break;default:hr(n,2)}}}function qE(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function hr(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=lt(n.kb,n);t||(t=new vr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Sl(t,"https"),Bu(t)),lL(t.toString(),s)}else yt(2);n.G=0,n.l&&n.l.va(e),$E(n),FE(n)}x.kb=function(n){n?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function $E(n){if(n.G=0,n.la=[],n.l){const e=NE(n.h);(e.length!=0||n.i.length!=0)&&(dy(n.la,e),dy(n.la,n.i),n.h.i.length=0,Sp(n.i),n.i.length=0),n.l.ua()}}function jE(n,e,t){var s=t instanceof vr?Kn(t):new vr(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Cl(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new vr(null,void 0);s&&Sl(i,s),e&&(i.g=e),r&&Cl(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&ve(s,t,e),ve(s,"VER",n.ma),ic(n,s),s}function GE(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ce(new sc({jb:!0})):new Ce(n.ra),e.Ka(n.H),e}function HE(){}x=HE.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function Al(){if(Si&&!(10<=Number(RM)))throw Error("Environmental error: no available transport.")}Al.prototype.g=function(n,e){return new Ut(n,e)};function Ut(n,e){Ye.call(this),this.g=new LE(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!El(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!El(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Zi(this)}ot(Ut,Ye);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;yt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=jE(n,null,n.V),ju(n)};Ut.prototype.close=function(){qp(this.g)};Ut.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=xp(n),n=t);e.i.push(new iL(e.ab++,n)),e.G==3&&ju(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,qp(this.g),delete this.g,Ut.X.M.call(this)};function YE(n){Lp.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ot(YE,Lp);function zE(){Fp.call(this),this.status=1}ot(zE,Fp);function Zi(n){this.g=n}ot(Zi,HE);Zi.prototype.xa=function(){st(this.g,"a")};Zi.prototype.wa=function(n){st(this.g,new YE(n))};Zi.prototype.va=function(n){st(this.g,new zE)};Zi.prototype.ua=function(){st(this.g,"b")};Al.prototype.createWebChannel=Al.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Fu.NO_ERROR=0;Fu.TIMEOUT=8;Fu.HTTP_ERROR=6;fE.COMPLETE="complete";pE.EventType=ec;ec.OPEN="a";ec.CLOSE="b";ec.ERROR="c";ec.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var mL=function(){return new Al},gL=function(){return Lu()},td=Fu,yL=fE,_L=jr,by={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},vL=sc,Mc=pE,wL=Ce;const Sy="@firebase/firestore";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let eo="9.14.0";/**
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
 */const Cs=new Yi("@firebase/firestore");function Gd(){return Cs.logLevel}function IL(n){Cs.setLogLevel(n)}function w(n,...e){if(Cs.logLevel<=J.DEBUG){const t=e.map(Gp);Cs.debug(`Firestore (${eo}): ${n}`,...t)}}function De(n,...e){if(Cs.logLevel<=J.ERROR){const t=e.map(Gp);Cs.error(`Firestore (${eo}): ${n}`,...t)}}function Ci(n,...e){if(Cs.logLevel<=J.WARN){const t=e.map(Gp);Cs.warn(`Firestore (${eo}): ${n}`,...t)}}function Gp(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function R(n="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+n;throw De(e),new Error(e)}function V(n,e){n||R()}function EL(n,e){n||R()}function k(n,e){return n}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class je{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class KE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class bL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class SL{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new je;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new je,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new je)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new KE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return V(e===null||typeof e=="string"),new We(e)}}class CL{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kL{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new CL(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(V(typeof t.token=="string"),this.A=t.token,new AL(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function DL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class QE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=DL(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function q(n,e){return n<e?-1:n>e?1:0}function ki(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function JE(n){return n+"\0"}/**
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
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new v(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new v(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new v(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Ee(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Ee(0,0))}static max(){return new F(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _a{constructor(e,t,s){t===void 0?t=0:t>e.length&&R(),s===void 0?s=e.length-t:s>e.length-t&&R(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return _a.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _a?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class X extends _a{construct(e,t,s){return new X(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new v(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new X(t)}static emptyPath(){return new X([])}}const RL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends _a{construct(e,t,s){return new Re(e,t,s)}static isValidIdentifier(e){return RL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new v(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
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
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(X.fromString(e))}static fromName(e){return new S(X.fromString(e).popFirst(5))}static empty(){return new S(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new X(e.slice()))}}/**
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
 */class XE{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Hd(n){return n.fields.find(e=>e.kind===2)}function tr(n){return n.fields.filter(e=>e.kind!==2)}XE.UNKNOWN_ID=-1;class xL{constructor(e,t){this.fieldPath=e,this.kind=t}}class Nl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Nl(0,Vt.min())}}function ZE(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=F.fromTimestamp(s===1e9?new Ee(t+1,0):new Ee(t,s));return new Vt(r,S.empty(),e)}function eT(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vt(F.min(),S.empty(),-1)}static max(){return new Vt(F.max(),S.empty(),-1)}}function Hp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=S.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qs(n){if(n.code!==y.FAILED_PRECONDITION||n.message!==tT)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,s)=>{t(e)})}static reject(e){return new m((t,s)=>{s(e)})}static waitFor(e){return new m((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=m.resolve(!1);for(const s of e)t=t.next(r=>r?m.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new m((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,t){return new m((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
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
 */class Gu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new je,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new qo(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=Yp(s.target.error);this.P.reject(new qo(e,r))}}static open(e,t,s,r){try{return new Gu(t,e.transaction(r,s))}catch(i){throw new qo(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new PL(t)}}class en{constructor(e,t,s){this.name=e,this.version=t,this.S=s,en.D(be())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),sr(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ra())return!1;if(en.N())return!0;const e=be(),t=en.D(e),s=0<t&&t<10,r=en.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new qo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new v(y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new v(y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new qo(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Gu.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),m.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class OL{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return sr(this.U.delete())}}class qo extends v{constructor(e,t){super(y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $s(n){return n.name==="IndexedDbTransactionError"}class PL{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),sr(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),sr(this.store.add(e))}get(e){return sr(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),sr(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),sr(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new m((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new m((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.H(r,t)}tt(e){const t=this.cursor({});return new m((s,r)=>{t.onerror=i=>{const o=Yp(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new m((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new OL(a),l=t(a.primaryKey,a.value,c);if(l instanceof m){const u=l.catch(h=>(c.done(),m.reject(h)));s.push(u)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>m.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function sr(n){return new m((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Yp(s.target.error);t(r)}})}let Cy=!1;function Yp(n){const e=en.D(be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new v("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cy||(Cy=!0,setTimeout(()=>{throw s},0)),s}}return n}class ML{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){w("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{w("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){$s(t)?w("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await qs(t)}await this.nt(6e4)})}}class LL{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let r=t,i=!0;return m.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return w("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(w("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=eT(i);Hp(o,s)>0&&(s=o)}),new Vt(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class St{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function ky(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */St.at=-1;class ke{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:Ze.RED,this.left=r!=null?r:Ze.EMPTY,this.right=i!=null?i:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Ze(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(n,e,t,s,r){return this}insert(n,e,t){return new Ze(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ni(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Mt([])}unionWith(e){let t=new ce(Re.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */function FL(){return typeof atob<"u"}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const UL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(n){if(V(!!n),typeof n=="string"){let e=0;const t=UL.exec(n);if(V(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cr(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
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
 */function zp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rT(n){const e=n.mapValue.fields.__previous_value__;return zp(e)?rT(e):e}function va(n){const e=ks(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class VL{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class As{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}function oc(n){return n==null}function wa(n){return n===0&&1/n==-1/0}function iT(n){return typeof n=="number"&&Number.isInteger(n)&&!wa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ms={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zc={nullValue:"NULL_VALUE"};function kr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zp(n)?4:oT(n)?9007199254740991:10:R()}function bn(n,e){if(n===e)return!0;const t=kr(n);if(t!==kr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return va(n).isEqual(va(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ks(s.timestampValue),o=ks(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Cr(s.bytesValue).isEqual(Cr(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?wa(i)===wa(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return ki(n.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ky(i)!==ky(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!bn(i[a],o[a])))return!1;return!0}(n,e);default:return R()}}function Ia(n,e){return(n.values||[]).find(t=>bn(t,e))!==void 0}function Ns(n,e){if(n===e)return 0;const t=kr(n),s=kr(e);if(t!==s)return q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ny(n.timestampValue,e.timestampValue);case 4:return Ny(va(n),va(e));case 5:return q(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Cr(r),a=Cr(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=q(o[c],a[c]);if(l!==0)return l}return q(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=q(Se(r.latitude),Se(i.latitude));return o!==0?o:q(Se(r.longitude),Se(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ns(o[c],a[c]);if(l)return l}return q(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ms.mapValue&&i===ms.mapValue)return 0;if(r===ms.mapValue)return 1;if(i===ms.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=q(a[u],l[u]);if(h!==0)return h;const d=Ns(o[a[u]],c[l[u]]);if(d!==0)return d}return q(a.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function Ny(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=ks(n),s=ks(e),r=q(t.seconds,s.seconds);return r!==0?r:q(t.nanos,s.nanos)}function _i(n){return Yd(n)}function Yd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=ks(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Cr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,S.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Yd(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Yd(s.fields[a])}`;return i+"}"}(n.mapValue):R();var e,t}function Ar(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zd(n){return!!n&&"integerValue"in n}function Ea(n){return!!n&&"arrayValue"in n}function Dy(n){return!!n&&"nullValue"in n}function Ry(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function el(n){return!!n&&"mapValue"in n}function $o(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=$o(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$o(n.arrayValue.values[t]);return e}return Object.assign({},n)}function oT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function BL(n){return"nullValue"in n?Zc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ar(As.empty(),S.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function WL(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ar(As.empty(),S.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ms:R()}function xy(n,e){const t=Ns(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Oy(n,e){const t=Ns(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!el(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(t)}setAll(e){let t=Re.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=$o(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());el(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];el(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Gr(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new et($o(this.value))}}function aT(n){const e=[];return Gr(n.fields,(t,s)=>{const r=new Re([t]);if(el(s)){const i=aT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Mt(e)}/**
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
 */class de{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new de(e,0,F.min(),F.min(),et.empty(),0)}static newFoundDocument(e,t,s){return new de(e,1,t,F.min(),s,0)}static newNoDocument(e,t){return new de(e,2,t,F.min(),et.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,F.min(),et.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qL{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Py(n,e=null,t=[],s=[],r=null,i=null,o=null){return new qL(n,e,t,s,r,i,o)}function Nr(n){const e=k(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+_i(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>_i(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>_i(s)).join(",")),e.ht=t}return e.ht}function $L(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${_i(s.value)}`;var s}).join(", ")}]`),oc(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>_i(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>_i(t)).join(",")),`Target(${e})`}function ac(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!JL(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!bn(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uy(n.startAt,e.startAt)&&Uy(n.endAt,e.endAt)}function Dl(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Rl(n,e){return n.filters.filter(t=>t instanceof tt&&t.field.isEqual(e))}function My(n,e,t){let s=Zc,r=!0;for(const i of Rl(n,e)){let o=Zc,a=!0;switch(i.op){case"<":case"<=":o=BL(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Zc}xy({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];xy({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Ly(n,e,t){let s=ms,r=!0;for(const i of Rl(n,e)){let o=ms,a=!0;switch(i.op){case">=":case">":o=WL(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=ms}Oy({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Oy({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}class tt extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,s):new jL(e,t,s):t==="array-contains"?new YL(e,s):t==="in"?new zL(e,s):t==="not-in"?new KL(e,s):t==="array-contains-any"?new QL(e,s):new tt(e,t,s)}static lt(e,t,s){return t==="in"?new GL(e,s):new HL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(Ns(t,this.value)):t!==null&&kr(this.value)===kr(t)&&this.ft(Ns(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jL extends tt{constructor(e,t,s){super(e,t,s),this.key=S.fromName(s.referenceValue)}matches(e){const t=S.comparator(e.key,this.key);return this.ft(t)}}class GL extends tt{constructor(e,t){super(e,"in",t),this.keys=cT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class HL extends tt{constructor(e,t){super(e,"not-in",t),this.keys=cT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>S.fromName(s.referenceValue))}class YL extends tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ea(t)&&Ia(t.arrayValue,this.value)}}class zL extends tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ia(this.value.arrayValue,t)}}class KL extends tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ia(this.value.arrayValue,t)}}class QL extends tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ia(this.value.arrayValue,s))}}class Ds{constructor(e,t){this.position=e,this.inclusive=t}}class vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function JL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Fy(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=S.comparator(S.fromName(o.referenceValue),t.key):s=Ns(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ss{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function lT(n,e,t,s,r,i,o,a){return new ss(n,e,t,s,r,i,o,a)}function to(n){return new ss(n)}function Vy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kp(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Qp(n){for(const e of n.filters)if(e.dt())return e.field;return null}function Jp(n){return n.collectionGroup!==null}function Ai(n){const e=k(n);if(e._t===null){e._t=[];const t=Qp(e),s=Kp(e);if(t!==null&&s===null)t.isKeyField()||e._t.push(new vi(t)),e._t.push(new vi(Re.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new vi(Re.keyField(),i))}}}return e._t}function Nt(n){const e=k(n);if(!e.wt)if(e.limitType==="F")e.wt=Py(e.path,e.collectionGroup,Ai(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ai(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new vi(i.field,o))}const s=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;e.wt=Py(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.wt}function xl(n,e,t){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cc(n,e){return ac(Nt(n),Nt(e))&&n.limitType===e.limitType}function uT(n){return`${Nr(Nt(n))}|lt:${n.limitType}`}function Kd(n){return`Query(target=${$L(Nt(n))}; limitType=${n.limitType})`}function Xp(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):S.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Fy(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Ai(t),s)||t.endAt&&!function(r,i,o){const a=Fy(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Ai(t),s))}(n,e)}function hT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dT(n){return(e,t)=>{let s=!1;for(const r of Ai(n)){const i=XL(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function XL(n,e,t){const s=n.field.isKeyField()?S.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ns(a,c):R()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return R()}}/**
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
 */function fT(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wa(e)?"-0":e}}function pT(n){return{integerValue:""+n}}function mT(n,e){return iT(e)?pT(e):fT(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Hu{constructor(){this._=void 0}}function ZL(n,e,t){return n instanceof Ni?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Dr?yT(n,e):n instanceof Rr?_T(n,e):function(s,r){const i=gT(s,r),o=By(i)+By(s.yt);return zd(i)&&zd(s.yt)?pT(o):fT(s.It,o)}(n,e)}function eF(n,e,t){return n instanceof Dr?yT(n,e):n instanceof Rr?_T(n,e):t}function gT(n,e){return n instanceof Di?zd(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Ni extends Hu{}class Dr extends Hu{constructor(e){super(),this.elements=e}}function yT(n,e){const t=vT(e);for(const s of n.elements)t.some(r=>bn(r,s))||t.push(s);return{arrayValue:{values:t}}}class Rr extends Hu{constructor(e){super(),this.elements=e}}function _T(n,e){let t=vT(e);for(const s of n.elements)t=t.filter(r=>!bn(r,s));return{arrayValue:{values:t}}}class Di extends Hu{constructor(e,t){super(),this.It=e,this.yt=t}}function By(n){return Se(n.integerValue||n.doubleValue)}function vT(n){return Ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class lc{constructor(e,t){this.field=e,this.transform=t}}function tF(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Dr&&s instanceof Dr||t instanceof Rr&&s instanceof Rr?ki(t.elements,s.elements,bn):t instanceof Di&&s instanceof Di?bn(t.yt,s.yt):t instanceof Ni&&s instanceof Ni}(n.transform,e.transform)}class nF{constructor(e,t){this.version=e,this.transformResults=t}}class we{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yu{}function wT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new so(n.key,we.none()):new no(n.key,n.data,we.none());{const t=n.data,s=et.empty();let r=new ce(Re.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rs(n.key,s,new Mt(r.toArray()),we.none())}}function sF(n,e,t){n instanceof no?function(s,r,i){const o=s.value.clone(),a=qy(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof rs?function(s,r,i){if(!tl(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=qy(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(IT(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function jo(n,e,t,s){return n instanceof no?function(r,i,o,a){if(!tl(r.precondition,i))return o;const c=r.value.clone(),l=$y(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof rs?function(r,i,o,a){if(!tl(r.precondition,i))return o;const c=$y(r.fieldTransforms,a,i),l=i.data;return l.setAll(IT(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(r,i,o){return tl(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function rF(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=gT(s.transform,r||null);i!=null&&(t===null&&(t=et.empty()),t.set(s.field,i))}return t||null}function Wy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&ki(t,s,(r,i)=>tF(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class no extends Yu{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rs extends Yu{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function IT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function qy(n,e,t){const s=new Map;V(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,eF(o,a,t[r]))}return s}function $y(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,ZL(i,o,e))}return s}class so extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zp extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iF{constructor(e){this.count=e}}/**
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
 */var xe,Q;function ET(n){switch(n){default:return R();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function TT(n){if(n===void 0)return De("GRPC error has no .code"),y.UNKNOWN;switch(n){case xe.OK:return y.OK;case xe.CANCELLED:return y.CANCELLED;case xe.UNKNOWN:return y.UNKNOWN;case xe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case xe.INTERNAL:return y.INTERNAL;case xe.UNAVAILABLE:return y.UNAVAILABLE;case xe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case xe.NOT_FOUND:return y.NOT_FOUND;case xe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case xe.ABORTED:return y.ABORTED;case xe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case xe.DATA_LOSS:return y.DATA_LOSS;default:return R()}}(Q=xe||(xe={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return sT(this.inner)}size(){return this.innerSize}}/**
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
 */const oF=new ke(S.comparator);function Ct(){return oF}const bT=new ke(S.comparator);function Po(...n){let e=bT;for(const t of n)e=e.insert(t.key,t);return e}function ST(n){let e=bT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function yn(){return Go()}function CT(){return Go()}function Go(){return new js(n=>n.toString(),(n,e)=>n.isEqual(e))}const aF=new ke(S.comparator),cF=new ce(S.comparator);function $(...n){let e=cF;for(const t of n)e=e.add(t);return e}const lF=new ce(q);function zu(){return lF}/**
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
 */class uc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,hc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new uc(F.min(),r,zu(),Ct(),$())}}class hc{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hc(s,t,$(),$(),$())}}/**
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
 */class nl{constructor(e,t,s,r){this.Tt=e,this.removedTargetIds=t,this.key=s,this.Et=r}}class kT{constructor(e,t){this.targetId=e,this.At=t}}class AT{constructor(e,t,s=Le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class jy{constructor(){this.Rt=0,this.bt=Hy(),this.Pt=Le.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=$(),t=$(),s=$();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:R()}}),new hc(this.Pt,this.vt,e,t,s)}Nt(){this.Vt=!1,this.bt=Hy()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class uF{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ct(),this.qt=Gy(),this.Kt=new ce(q)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const s=this.zt(t);switch(e.state){case 0:this.Ht(t)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),s.Ct(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((s,r)=>{this.Ht(r)&&t(r)})}Yt(e){const t=e.targetId,s=e.At.count,r=this.Xt(t);if(r){const i=r.target;if(Dl(i))if(s===0){const o=new S(i.path);this.jt(t,o,de.newNoDocument(o,F.min()))}else V(s===1);else this.Zt(t)!==s&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Dl(a.target)){const c=new S(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,de.newNoDocument(c,e))}i.Dt&&(t.set(o,i.xt()),i.Nt())}});let s=$();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new uc(e,t,this.Kt,this.Ut,s);return this.Ut=Ct(),this.qt=Gy(),this.Kt=new ce(q),r}Qt(e,t){if(!this.Ht(e))return;const s=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new jy,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new ce(q),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new jy),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Gy(){return new ke(S.comparator)}function Hy(){return new ke(S.comparator)}/**
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
 */const hF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fF{constructor(e,t){this.databaseId=e,this.gt=t}}function Ta(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(n,e){return n.gt?e.toBase64():e.toUint8Array()}function pF(n,e){return Ta(n,e.toTimestamp())}function Ge(n){return V(!!n),F.fromTimestamp(function(e){const t=ks(e);return new Ee(t.seconds,t.nanos)}(n))}function em(n,e){return function(t){return new X(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function DT(n){const e=X.fromString(n);return V(UT(e)),e}function ba(n,e){return em(n.databaseId,e.path)}function vn(n,e){const t=DT(e);if(t.get(1)!==n.databaseId.projectId)throw new v(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new v(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new S(xT(t))}function Qd(n,e){return em(n.databaseId,e)}function RT(n){const e=DT(n);return e.length===4?X.emptyPath():xT(e)}function Sa(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xT(n){return V(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yy(n,e,t){return{name:ba(n,e),fields:t.value.mapValue.fields}}function OT(n,e,t){const s=vn(n,e.name),r=Ge(e.updateTime),i=new et({mapValue:{fields:e.fields}}),o=de.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function mF(n,e){return"found"in e?function(t,s){V(!!s.found),s.found.name,s.found.updateTime;const r=vn(t,s.found.name),i=Ge(s.found.updateTime),o=new et({mapValue:{fields:s.found.fields}});return de.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){V(!!s.missing),V(!!s.readTime);const r=vn(t,s.missing),i=Ge(s.readTime);return de.newNoDocument(r,i)}(n,e):R()}function gF(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(V(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(V(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:TT(c.code);return new v(l,c.message||"")}(o);t=new AT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=vn(n,s.document.name),i=Ge(s.document.updateTime),o=new et({mapValue:{fields:s.document.fields}}),a=de.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];t=new nl(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=vn(n,s.document),i=s.readTime?Ge(s.readTime):F.min(),o=de.newNoDocument(r,i),a=s.removedTargetIds||[];t=new nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=vn(n,s.document),i=s.removedTargetIds||[];t=new nl([],i,r,null)}else{if(!("filter"in e))return R();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new iF(r),o=s.targetId;t=new kT(o,i)}}return t}function Ca(n,e){let t;if(e instanceof no)t={update:Yy(n,e.key,e.value)};else if(e instanceof so)t={delete:ba(n,e.key)};else if(e instanceof rs)t={update:Yy(n,e.key,e.data),updateMask:TF(e.fieldMask)};else{if(!(e instanceof Zp))return R();t={verify:ba(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ni)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Rr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw R()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:pF(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:R()}(n,e.precondition)),t}function Jd(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?we.updateTime(Ge(r.updateTime)):r.exists!==void 0?we.exists(r.exists):we.none()}(e.currentDocument):we.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)V(o.setToServerValue==="REQUEST_TIME"),a=new Ni;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Dr(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Rr(l)}else"increment"in o?a=new Di(i,o.increment):R();const c=Re.fromServerFormat(o.fieldPath);return new lc(c,a)}(n,r)):[];if(e.update){e.update.name;const r=vn(n,e.update.name),i=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Mt(c.map(l=>Re.fromServerFormat(l)))}(e.updateMask);return new rs(r,i,o,t,s)}return new no(r,i,t,s)}if(e.delete){const r=vn(n,e.delete);return new so(r,t)}if(e.verify){const r=vn(n,e.verify);return new Zp(r,t)}return R()}function yF(n,e){return n&&n.length>0?(V(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?Ge(s.updateTime):Ge(r);return i.isEqual(F.min())&&(i=Ge(r)),new nF(i,s.transformResults||[])}(t,e))):[]}function PT(n,e){return{documents:[Qd(n,e.path)]}}function MT(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Qd(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Qd(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ry(h.value))return{unaryFilter:{field:si(h.field),op:"IS_NAN"}};if(Dy(h.value))return{unaryFilter:{field:si(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ry(h.value))return{unaryFilter:{field:si(h.field),op:"IS_NOT_NAN"}};if(Dy(h.value))return{unaryFilter:{field:si(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(h.field),op:wF(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:si(u.field),direction:vF(u.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||oc(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function LT(n){let e=RT(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){V(s===1);const u=t.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];t.where&&(i=FT(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new vi(hi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,oc(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ds(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ds(d,h)}(t.endAt)),lT(e,r,o,i,a,"F",c,l)}function _F(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return R()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function FT(n){return n?n.unaryFilter!==void 0?[EF(n)]:n.fieldFilter!==void 0?[IF(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>FT(e)).reduce((e,t)=>e.concat(t)):R():[]}function vF(n){return hF[n]}function wF(n){return dF[n]}function si(n){return{fieldPath:n.canonicalString()}}function hi(n){return Re.fromServerFormat(n.fieldPath)}function IF(n){return tt.create(hi(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(n.fieldFilter.op),n.fieldFilter.value)}function EF(n){switch(n.unaryFilter.op){case"IS_NAN":const e=hi(n.unaryFilter.field);return tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=hi(n.unaryFilter.field);return tt.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(n.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=hi(n.unaryFilter.field);return tt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return R()}}function TF(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function UT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function wt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zy(e)),e=bF(n.get(t),e);return zy(e)}function bF(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function zy(n){return n+""}function _n(n){const e=n.length;if(V(e>=2),e===2)return V(n.charAt(0)===""&&n.charAt(1)===""),X.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:R()}i=o+2}return new X(s)}/**
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
 */const Ky=["userId","batchId"];/**
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
 */function sl(n,e){return[n,wt(e)]}function VT(n,e,t){return[n,wt(e),t]}const SF={},CF=["prefixPath","collectionGroup","readTime","documentId"],kF=["prefixPath","collectionGroup","documentId"],AF=["collectionGroup","readTime","prefixPath","documentId"],NF=["canonicalId","targetId"],DF=["targetId","path"],RF=["path","targetId"],xF=["collectionId","parent"],OF=["indexId","uid"],PF=["uid","sequenceNumber"],MF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],LF=["indexId","uid","orderedDocumentKey"],FF=["userId","collectionPath","documentId"],UF=["userId","collectionPath","largestBatchId"],VF=["userId","collectionGroup","largestBatchId"],BT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],BF=[...BT,"documentOverlays"],WT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qT=WT,WF=[...qT,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Xd extends nT{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function Qe(n,e){const t=k(n);return en.M(t.ie,e)}/**
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
 */class tm{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sF(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=jo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=jo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=CT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=wT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(t,s)=>Wy(t,s))&&ki(this.baseMutations,e.baseMutations,(t,s)=>Wy(t,s))}}class nm{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){V(e.mutations.length===s.length);let r=aF;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new nm(e,t,s,r)}}/**
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
 */class sm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ws{constructor(e,t,s,r,i=F.min(),o=F.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class $T{constructor(e){this.re=e}}function qF(n,e){let t;if(e.document)t=OT(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=S.fromSegments(e.noDocument.path),r=Or(e.noDocument.readTime);t=de.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const s=S.fromSegments(e.unknownDocument.path),r=Or(e.unknownDocument.version);t=de.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new Ee(s[0],s[1]);return F.fromTimestamp(r)}(e.readTime)),t}function Qy(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ol(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:ba(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Ta(r,i.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:xr(e.version)};else{if(!e.isUnknownDocument())return R();s.unknownDocument={path:t.path.toArray(),version:xr(e.version)}}return s}function Ol(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function xr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Or(n){const e=new Ee(n.seconds,n.nanoseconds);return F.fromTimestamp(e)}function rr(n,e){const t=(e.baseMutations||[]).map(i=>Jd(n.re,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Jd(n.re,i)),r=Ee.fromMillis(e.localWriteTimeMs);return new tm(e.batchId,r,t,s)}function Mo(n){const e=Or(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Or(n.lastLimboFreeSnapshotVersion):F.min();let s;var r;return n.query.documents!==void 0?(V((r=n.query).documents.length===1),s=Nt(to(RT(r.documents[0])))):s=function(i){return Nt(LT(i))}(n.query),new ws(s,n.targetId,0,n.lastListenSequenceNumber,e,t,Le.fromBase64String(n.resumeToken))}function jT(n,e){const t=xr(e.snapshotVersion),s=xr(e.lastLimboFreeSnapshotVersion);let r;r=Dl(e.target)?PT(n.re,e.target):MT(n.re,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Nr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function rm(n){const e=LT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xl(e,e.limit,"L"):e}function nd(n,e){return new sm(e.largestBatchId,Jd(n.re,e.overlayMutation))}function Jy(n,e){const t=e.path.lastSegment();return[n,wt(e.path.popLast()),t]}function Xy(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:xr(s.readTime),documentKey:wt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class $F{getBundleMetadata(e,t){return Zy(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Or(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return Zy(e).put({bundleId:(s=t).id,createTime:xr(Ge(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return e_(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:rm(r.bundledQuery),readTime:Or(r.readTime)};var r})}saveNamedQuery(e,t){return e_(e).put(function(s){return{name:s.name,readTime:xr(Ge(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Zy(n){return Qe(n,"bundles")}function e_(n){return Qe(n,"namedQueries")}/**
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
 */class Ku{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const s=t.uid||"";return new Ku(e,s)}getOverlay(e,t){return wo(e).get(Jy(this.userId,t)).next(s=>s?nd(this.It,s):null)}getOverlays(e,t){const s=yn();return m.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new sm(t,o);r.push(this.ue(e,a))}),m.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(wt(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(wo(e).Y("collectionPathOverlayIndex",a))}),m.waitFor(i)}getOverlaysForCollection(e,t,s){const r=yn(),i=wt(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return wo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=nd(this.It,c);r.set(l.getKey(),l)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=yn();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=nd(this.It,l);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}ue(e,t){return wo(e).put(function(s,r,i){const[o,a,c]=Jy(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Ca(s.re,i.mutation)}}(this.It,this.userId,t))}}function wo(n){return Qe(n,"documentOverlays")}/**
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
 */class ir{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Se(e.integerValue));else if("doubleValue"in e){const s=Se(e.doubleValue);isNaN(s)?this.le(t,13):(this.le(t,15),wa(s)?t.fe(0):t.fe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.le(t,20),typeof s=="string"?t.de(s):(t.de(`${s.seconds||""}`),t.fe(s.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Cr(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?oT(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):R()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const s=e.fields||{};this.le(t,55);for(const r of Object.keys(s))this._e(r,t),this.ae(s[r],t)}pe(e,t){const s=e.values||[];this.le(t,50);for(const r of s)this.ae(r,t)}ge(e,t){this.le(t,37),S.fromName(e).path.forEach(s=>{this.le(t,60),this.Ie(s,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}ir.Te=new ir;function jF(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function t_(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=jF(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class GF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Pe(s.value),s=t.next();this.ve()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}Se(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Pe(s);else if(s<2048)this.Pe(960|s>>>6),this.Pe(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s);else{const r=t.codePointAt(0);this.Pe(240|r>>>18),this.Pe(128|63&r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r)}}this.ve()}De(e){const t=this.Ce(e),s=t_(t);this.xe(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){const t=this.Ce(e),s=t_(t);this.xe(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class HF{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class YF{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class Io{constructor(){this.Be=new GF,this.Le=new HF(this.Be),this.Ue=new YF(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class or{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new or(this.indexId,this.documentKey,this.arrayValue,s)}}function Xs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=n_(n.arrayValue,e.arrayValue),t!==0?t:(t=n_(n.directionalValue,e.directionalValue),t!==0?t:S.comparator(n.documentKey,e.documentKey)))}function n_(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class zF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const s=t;s.dt()?this.je=s:this.Qe.push(s)}}We(e){const t=Hd(e);if(t!==void 0&&!this.ze(t))return!1;const s=tr(e);let r=0,i=0;for(;r<s.length&&this.ze(s[r]);++r);if(r===s.length)return!0;if(this.je!==void 0){const o=s[r];if(!this.He(this.je,o)||!this.Je(this.Ge[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class KF{constructor(){this.Ye=new im}addToCollectionParentIndex(e,t){return this.Ye.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Vt.min())}updateCollectionGroup(e,t,s){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class im{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ce(X.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ce(X.comparator)).toArray()}}/**
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
 */const Fc=new Uint8Array(0);class QF{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new im,this.Ze=new js(s=>Nr(s),(s,r)=>ac(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const i={collectionId:s,parent:wt(r)};return s_(e).put(i)}return m.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[JE(t),""],!1,!0);return s_(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(_n(o.parent))}return s})}addFieldIndex(e,t){const s=Uc(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=To(e);return i.next(a=>{o.put(Xy(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=Uc(e),r=To(e),i=Eo(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=Eo(e);let r=!0;const i=new Map;return m.forEach(this.tn(t),o=>this.en(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=$();const a=[];return m.forEach(i,(c,l)=>{var u;w("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`} to execute ${Nr(t)}`);const h=function(B,K){const ie=Hd(K);if(ie===void 0)return null;for(const M of Rl(B,ie.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(l,c),d=function(B,K){const ie=new Map;for(const M of tr(K))for(const ae of Rl(B,M.fieldPath))switch(ae.op){case"==":case"in":ie.set(M.fieldPath.canonicalString(),ae.value);break;case"not-in":case"!=":return ie.set(M.fieldPath.canonicalString(),ae.value),Array.from(ie.values())}return null}(l,c),f=function(B,K){const ie=[];let M=!0;for(const ae of tr(K)){const Ys=ae.kind===0?My(B,ae.fieldPath,B.startAt):Ly(B,ae.fieldPath,B.startAt);ie.push(Ys.value),M&&(M=Ys.inclusive)}return new Ds(ie,M)}(l,c),p=function(B,K){const ie=[];let M=!0;for(const ae of tr(K)){const Ys=ae.kind===0?Ly(B,ae.fieldPath,B.endAt):My(B,ae.fieldPath,B.endAt);ie.push(Ys.value),M&&(M=Ys.inclusive)}return new Ds(ie,M)}(l,c),g=this.nn(c,l,f),T=this.nn(c,l,p),C=this.sn(c,l,d),O=this.rn(c.indexId,h,g,f.inclusive,T,p.inclusive,C);return m.forEach(O,B=>s.J(B,t.limit).next(K=>{K.forEach(ie=>{const M=S.fromSegments(ie.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return m.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,s,r,i,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,i.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.on(t[h/l]):Fc,f=this.un(e,d,s[h%l],r),p=this.cn(e,d,i[h%l],o),g=a.map(T=>this.un(e,d,T,!0));u.push(...this.createRange(f,p,g))}return u}un(e,t,s,r){const i=new or(e,S.empty(),t,s);return r?i:i.Ke()}cn(e,t,s,r){const i=new or(e,S.empty(),t,s);return r?i.Ke():i}en(e,t){const s=new zF(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return m.forEach(this.tn(t),r=>this.en(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new ce(Re.comparator),c=!1;for(const l of o.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?c=!0:a=a.add(u.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(c?1:0)}(r)&&(s=1):s=0})).next(()=>s)}an(e,t){const s=new Io;for(const r of tr(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.qe(r.kind);ir.Te.ce(i,o)}return s.$e()}on(e){const t=new Io;return ir.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const s=new Io;return ir.Te.ce(Ar(this.databaseId,t),s.qe(function(r){const i=tr(r);return i.length===0?0:i[i.length-1].kind}(e))),s.$e()}sn(e,t,s){if(s===null)return[];let r=[];r.push(new Io);let i=0;for(const o of tr(e)){const a=s[i++];for(const c of r)if(this.ln(t,o.fieldPath)&&Ea(a))r=this.fn(r,o,a);else{const l=c.qe(o.kind);ir.Te.ce(a,l)}}return this.dn(r)}nn(e,t,s){return this.sn(e,t,s.position)}dn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].$e();return t}fn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new Io;c.seed(a.$e()),ir.Te.ce(o,c.qe(t.kind)),i.push(c)}return i}ln(e,t){return!!e.filters.find(s=>s instanceof tt&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Uc(e),r=To(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(i=>{const o=[];return m.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Nl(u.sequenceNumber,new Vt(Or(u.readTime),new S(_n(u.documentKey)),u.largestBatchId)):Nl.empty(),d=l.fields.map(([f,p])=>new xL(Re.fromServerFormat(f),p));return new XE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:q(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Uc(e),i=To(e);return this._n(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>i.put(Xy(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return m.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),m.forEach(a,c=>this.wn(e,r,c).next(l=>{const u=this.mn(i,c);return l.isEqual(u)?m.resolve():this.gn(e,i,c,l,u)}))))})}yn(e,t,s,r){return Eo(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(s,t.key),documentKey:t.key.path.toArray()})}pn(e,t,s,r){return Eo(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(s,t.key),t.key.path.toArray()])}wn(e,t,s){const r=Eo(e);let i=new ce(Xs);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.hn(s,t)])},(o,a)=>{i=i.add(new or(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}mn(e,t){let s=new ce(Xs);const r=this.an(t,e);if(r==null)return s;const i=Hd(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ea(o))for(const a of o.arrayValue.values||[])s=s.add(new or(t.indexId,e.key,this.on(a),r))}else s=s.add(new or(t.indexId,e.key,Fc,r));return s}gn(e,t,s,r,i){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let p=ni(d),g=ni(f);for(;p||g;){let T=!1,C=!1;if(p&&g){const O=l(p,g);O<0?C=!0:O>0&&(T=!0)}else p!=null?C=!0:T=!0;T?(u(g),g=ni(f)):C?(h(p),p=ni(d)):(p=ni(d),g=ni(f))}}(r,i,Xs,a=>{o.push(this.yn(e,t,s,a))},a=>{o.push(this.pn(e,t,s,a))}),m.waitFor(o)}_n(e){let t=1;return To(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>Xs(o,a)).filter((o,a,c)=>!a||Xs(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=Xs(o,e),c=Xs(o,t);if(a===0)r[0]=e.Ke();else if(a>0&&c<0)r.push(o),r.push(o.Ke());else if(c>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Fc,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Fc,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(r_)}getMinOffset(e,t){return m.mapArray(this.tn(t),s=>this.en(e,s).next(r=>r||R())).next(r_)}}function s_(n){return Qe(n,"collectionParents")}function Eo(n){return Qe(n,"indexEntries")}function Uc(n){return Qe(n,"indexConfiguration")}function To(n){return Qe(n,"indexState")}function r_(n){V(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;Hp(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Vt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const i_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function GT(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{V(a===1)}));const l=[];for(const u of t.mutations){const h=VT(e,u.key.path,t.batchId);i.push(r.delete(h)),l.push(u.key)}return m.waitFor(i).next(()=>l)}function Pl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class Qu{constructor(e,t,s,r){this.userId=e,this.It=t,this.indexManager=s,this.referenceDelegate=r,this.In={}}static oe(e,t,s,r){V(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Qu(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cs(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=ai(e),o=cs(e);return o.add({}).next(a=>{V(typeof a=="number");const c=new tm(a,t,s,r),l=function(d,f,p){const g=p.baseMutations.map(C=>Ca(d.re,C)),T=p.mutations.map(C=>Ca(d.re,C));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:g,mutations:T}}(this.It,this.userId,c),u=[];let h=new ce((d,f)=>q(d.canonicalString(),f.canonicalString()));for(const d of r){const f=VT(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,SF))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),m.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return cs(e).get(t).next(s=>s?(V(s.userId===this.userId),rr(this.It,s)):null)}Tn(e,t){return this.In[t]?m.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.In[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return cs(e).Z({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(V(a.batchId>=s),i=rr(this.It,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return cs(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cs(e).W("userMutationsIndex",t).next(s=>s.map(r=>rr(this.It,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=sl(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return ai(e).Z({range:r},(o,a,c)=>{const[l,u,h]=o,d=_n(u);if(l===this.userId&&t.path.isEqual(d))return cs(e).get(h).next(f=>{if(!f)throw R();V(f.userId===this.userId),i.push(rr(this.It,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ce(q);const r=[];return t.forEach(i=>{const o=sl(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=ai(e).Z({range:a},(l,u,h)=>{const[d,f,p]=l,g=_n(f);d===this.userId&&i.path.isEqual(g)?s=s.add(p):h.done()});r.push(c)}),m.waitFor(r).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=sl(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new ce(q);return ai(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,p=_n(d);h===this.userId&&s.isPrefixOf(p)?p.length===r&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],r=[];return t.forEach(i=>{r.push(cs(e).get(i).next(o=>{if(o===null)throw R();V(o.userId===this.userId),s.push(rr(this.It,o))}))}),m.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return GT(e.ie,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),m.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return ai(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=_n(i[1]);r.push(c)}else a.done()}).next(()=>{V(r.length===0)})})}containsKey(e,t){return HT(e,this.userId,t)}Rn(e){return YT(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function HT(n,e,t){const s=sl(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return ai(n).Z({range:i,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===r&&(o=!0),l.done()}).next(()=>o)}function cs(n){return Qe(n,"mutations")}function ai(n){return Qe(n,"documentMutations")}function YT(n){return Qe(n,"mutationQueues")}/**
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
 */class Pr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Pr(0)}static vn(){return new Pr(-1)}}/**
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
 */class JF{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new Pr(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>F.fromTimestamp(new Ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ri(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(V(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return ri(e).Z((o,a)=>{const c=Mo(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ri(e).Z((s,r)=>{const i=Mo(r);t(i)})}Vn(e){return o_(e).get("targetGlobalKey").next(t=>(V(t!==null),t))}Sn(e,t){return o_(e).put("targetGlobalKey",t)}Dn(e,t){return ri(e).put(jT(this.It,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Nr(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return ri(e).Z({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const l=Mo(a);ac(t,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=us(e);return t.forEach(o=>{const a=wt(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),m.waitFor(r)}removeMatchingKeys(e,t,s){const r=us(e);return m.forEach(t,i=>{const o=wt(i.path);return m.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=us(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=us(e);let i=$();return r.Z({range:s,X:!0},(o,a,c)=>{const l=_n(o[1]),u=new S(l);i=i.add(u)}).next(()=>i)}containsKey(e,t){const s=wt(t.path),r=IDBKeyRange.bound([s],[JE(s)],!1,!0);let i=0;return us(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}se(e,t){return ri(e).get(t).next(s=>s?Mo(s):null)}}function ri(n){return Qe(n,"targets")}function o_(n){return Qe(n,"targetGlobal")}function us(n){return Qe(n,"targetDocuments")}/**
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
 */function a_([n,e],[t,s]){const r=q(n,t);return r===0?q(e,s):r}class XF{constructor(e){this.xn=e,this.buffer=new ce(a_),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();a_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZF{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){w("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$s(t)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await qs(t)}await this.Fn(3e5)})}}class eU{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return m.resolve(St.at);const s=new XF(t);return this.$n.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(i_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i_):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let s,r,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),Gd()<=J.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class tU{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new eU(s,r)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}qn(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,r)=>t(r))}addReference(e,t,s){return Vc(e,s)}removeReference(e,t,s){return Vc(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Vc(e,t)}Gn(e,t){return function(s,r){let i=!1;return YT(s).tt(o=>HT(s,o,r).next(a=>(a&&(i=!0),m.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,F.min()),us(e).delete([0,wt(o.path)])))});r.push(c)}}).next(()=>m.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Vc(e,t)}Kn(e,t){const s=us(e);let r,i=St.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==St.at&&t(new S(_n(r)),i),i=l,r=c):i=St.at}).next(()=>{i!==St.at&&t(new S(_n(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vc(n,e){return us(n).put(function(t,s){return{targetId:0,path:wt(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class zT{constructor(){this.changes=new js(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?m.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nU{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return Zs(e).put(s)}removeEntry(e,t,s){return Zs(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ol(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=de.newInvalidDocument(t);return Zs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(bo(t))},(r,i)=>{s=this.jn(t,i)}).next(()=>s)}Wn(e,t){let s={size:0,document:de.newInvalidDocument(t)};return Zs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(bo(t))},(r,i)=>{s={document:this.jn(t,i),size:Pl(i)}}).next(()=>s)}getEntries(e,t){let s=Ct();return this.zn(e,t,(r,i)=>{const o=this.jn(r,i);s=s.insert(r,o)}).next(()=>s)}Hn(e,t){let s=Ct(),r=new ke(S.comparator);return this.zn(e,t,(i,o)=>{const a=this.jn(i,o);s=s.insert(i,a),r=r.insert(i,Pl(o))}).next(()=>({documents:s,Jn:r}))}zn(e,t,s){if(t.isEmpty())return m.resolve();let r=new ce(u_);t.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(bo(r.first()),bo(r.last())),o=r.getIterator();let a=o.getNext();return Zs(e).Z({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=S.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&u_(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(bo(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),Ol(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Zs(e).W(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=Ct();for(const c of o){const l=this.jn(S.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=Ct();const o=l_(t,s),a=l_(t,Vt.max());return Zs(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(S.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===r&&u.done()}).next(()=>i)}newChangeBuffer(e){return new sU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return c_(e).get("remoteDocumentGlobalKey").next(t=>(V(!!t),t))}Qn(e,t){return c_(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=qF(this.It,t);if(!(s.isNoDocument()&&s.version.isEqual(F.min())))return s}return de.newInvalidDocument(e)}}function KT(n){return new nU(n)}class sU extends zT{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new js(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new ce((i,o)=>q(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Qy(this.Yn.It,o);r=r.add(i.path.popLast());const l=Pl(c);s+=l-a.size,t.push(this.Yn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=Qy(this.Yn.It,o.convertToNoDocument(F.min()));t.push(this.Yn.addEntry(e,i,c))}}),r.forEach(i=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Yn.updateMetadata(e,s)),m.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:r})=>(r.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function c_(n){return Qe(n,"remoteDocumentGlobal")}function Zs(n){return Qe(n,"remoteDocumentsV14")}function bo(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function l_(n,e){const t=e.documentKey.path.toArray();return[n,Ol(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function u_(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=q(t[i],s[i]),r)return r;return r=q(t.length,s.length),r||(r=q(t[t.length-2],s[s.length-2]),r||q(t[t.length-1],s[s.length-1]))}/**
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
 *//**
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
 */class rU{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class QT{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.getBaseDocument(e,t,s))).next(r=>(s!==null&&jo(s.mutation,r,Mt.empty(),Ee.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,$()).next(()=>s))}getLocalViewOfDocuments(e,t,s=$()){const r=yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=Po();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=yn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,$()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Ct();const o=Go(),a=Go();return t.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof rs)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),jo(u.mutation,l,u.mutation.getFieldMask(),Ee.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new rU(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Go();let r=new ke((o,a)=>o-a),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Mt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||$()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=CT();u.forEach(d=>{if(!i.has(d)){const f=wT(t.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return S.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):m.resolve(yn());let a=-1,c=i;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?m.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,$())).next(u=>({batchId:a,changes:ST(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new S(t)).next(s=>{let r=Po();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=Po();return this.indexManager.getCollectionParents(e,r).next(o=>m.forEach(o,a=>{const c=function(l,u){return new ss(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,de.newInvalidDocument(l)))});let o=Po();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&jo(l.mutation,c,Mt.empty(),Ee.now()),Xp(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):m.resolve(de.newInvalidDocument(t))}}/**
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
 */class iU{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return m.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:Ge(s.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:rm(s.bundledQuery),readTime:Ge(s.readTime)}}(t)),m.resolve()}}/**
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
 */class oU{constructor(){this.overlays=new ke(S.comparator),this.es=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const s=yn();return m.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.ue(e,t,i)}),m.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(e,t,s){const r=yn(),i=t.length+1,o=new S(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return m.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return m.resolve(a)}ue(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sm(t,s));let i=this.es.get(t);i===void 0&&(i=$(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
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
 */class om{constructor(){this.ns=new ce(Ve.ss),this.rs=new ce(Ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new Ve(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new Ve(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new S(new X([])),s=new Ve(t,e),r=new Ve(t,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new S(new X([])),s=new Ve(t,e),r=new Ve(t,e+1);let i=$();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ve(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return S.comparator(e.key,t.key)||q(e._s,t._s)}static os(e,t){return q(e._s,t._s)||S.comparator(e.key,t.key)}}/**
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
 */class aU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ce(Ve.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tm(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ps(s),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ve(t,0),r=new Ve(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ce(q);return t.forEach(r=>{const i=new Ve(r,0),o=new Ve(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;S.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new S(i),0);let a=new ce(q);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){V(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(t.mutations,r=>{const i=new Ve(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new Ve(t,0),r=this.gs.firstAfterOrEqual(s);return m.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cU{constructor(e){this.Es=e,this.docs=new ke(S.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return m.resolve(s?s.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let s=Ct();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():de.newInvalidDocument(r))}),m.resolve(s)}getAllFromCollection(e,t,s){let r=Ct();const i=new S(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Hp(eT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(e,t,s,r){R()}As(e,t){return m.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new lU(this)}getSize(e){return m.resolve(this.size)}}class lU extends zT{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),m.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class uU{constructor(e){this.persistence=e,this.Rs=new js(t=>Nr(t),ac),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new om,this.targetCount=0,this.vs=Pr.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,r)=>t(r)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),m.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Pr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Dn(t),m.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return m.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),m.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),m.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return m.resolve(s)}containsKey(e,t){return m.resolve(this.Ps.containsKey(t))}}/**
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
 */class JT{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new St(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new uU(this),this.indexManager=new KF,this.remoteDocumentCache=function(s){return new cU(s)}(s=>this.referenceDelegate.xs(s)),this.It=new $T(t),this.Ns=new iU(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new aU(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new hU(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,t){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class hU extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Fs=new om,this.$s=null}static Bs(e){return new Ju(e)}get Ls(){if(this.$s)return this.$s;throw R()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),m.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),m.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const r=S.fromPath(s);return this.Us(e,r).next(i=>{i||t.removeEntry(r,F.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return m.or([()=>m.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class dU{constructor(e){this.It=e}$(e,t,s,r){const i=new Gu("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ky,{unique:!0}),a.createObjectStore("documentMutations")}(e),h_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),h_(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ky,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return m.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.qs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),s<7&&r>=7&&(o=o.next(()=>this.Gs(i))),s<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.js(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:FF});c.createIndex("collectionPathOverlayIndex",UF,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",VF,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:CF});c.createIndex("documentKeyIndex",kF),c.createIndex("collectionGroupIndex",AF)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:OF}).createIndex("sequenceNumberIndex",PF,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:MF}).createIndex("documentKeyIndex",LF,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,r)=>{t+=Pl(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}qs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(r=>m.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{V(c.userId===i.userId);const l=rr(this.It,c);return GT(e,i.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const c=new X(o),l=function(u){return[0,wt(u)]}(c);i.push(t.get(l).next(u=>u?m.resolve():(h=>t.put({targetId:0,path:wt(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(i))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:xF});const s=t.store("collectionParents"),r=new im,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:wt(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new X(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=_n(a);return i(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,r)=>{const i=Mo(r),o=jT(this.It,i);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new S(X.fromString(l.document.name).popFirst(5)):l.noDocument?S.fromSegments(l.noDocument.path):l.unknownDocument?S.fromSegments(l.unknownDocument.path):R()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(u))}).next(()=>m.waitFor(r))}zs(e,t){const s=t.store("mutations"),r=KT(this.It),i=new JT(Ju.Bs,this.It.re);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:$();rr(this.It,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),m.forEach(a,(c,l)=>{const u=new We(l),h=Ku.oe(this.It,u),d=i.getIndexManager(u),f=Qu.oe(u,this.It,d,i.referenceDelegate);return new QT(r,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Xd(t,St.at),c).next()})})}}function h_(n){n.createObjectStore("targetDocuments",{keyPath:DF}).createIndex("documentTargetsIndex",RF,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",NF,{unique:!0}),n.createObjectStore("targetGlobal")}const sd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class am{constructor(e,t,s,r,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=i,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!am.C())throw new v(y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tU(this,r),this.ii=t+"main",this.It=new $T(c),this.ri=new en(this.ii,this.Xs,new dU(this.It)),this.Cs=new JF(this.referenceDelegate,this.It),this.remoteDocumentCache=KT(this.It),this.Ns=new $F,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new v(y.FAILED_PRECONDITION,sd);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new St(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if($s(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return So(e).get("owner").next(t=>m.resolve(this.mi(t)))}gi(e){return Bc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=Qe(t,"clientMetadata");return s.W().next(r=>{const i=this.Ii(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return m.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?m.resolve(!0):So(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new v(y.FAILED_PRECONDITION,sd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bc(e).W().next(s=>this.Ii(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Xd(e,St.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Bc(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Qu.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new QF(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Ku.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?WF:o===14?qT:o===13?WT:o===12?BF:o===11?BT:void R();var o;let a;return this.ri.runTransaction(e,r,i,c=>(a=new Xd(c,this.Ss?this.Ss.next():St.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new v(y.FAILED_PRECONDITION,tT);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return So(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new v(y.FAILED_PRECONDITION,sd)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return So(e).put("owner",t)}static C(){return en.C()}_i(e){const t=So(e);return t.get("owner").next(s=>this.mi(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(De(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),zD()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return De("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function So(n){return Qe(n,"owner")}function Bc(n){return Qe(n,"clientMetadata")}function cm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class lm{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=r}static Ci(e,t){let s=$(),r=$();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lm(e,t.fromCache,s,r)}}/**
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
 */class XT{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,s)).next(i=>i||this.Mi(e,t))}ki(e,t){if(Vy(t))return m.resolve(null);let s=Nt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=xl(t,null,"F"),s=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=$(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,xl(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,r){return Vy(t)||r.isEqual(F.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,s,r)?this.Mi(e,t):(Gd()<=J.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kd(t)),this.Bi(e,o,t,ZE(r,-1)))})}Fi(e,t){let s=new ce(dT(e));return t.forEach((r,i)=>{Xp(e,i)&&(s=s.add(i))}),s}$i(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Gd()<=J.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Kd(t)),this.Ni.getDocumentsMatchingQuery(e,t,Vt.min())}Bi(e,t,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class fU{constructor(e,t,s,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new ke(q),this.qi=new js(i=>Nr(i),ac),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function ZT(n,e,t,s){return new fU(n,e,t,s)}async function eb(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=$();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function pU(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const g=c.docVersions.get(f);V(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function tb(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function mU(n,e){const t=k(n),s=e.snapshotVersion;let r=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});r=t.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Le.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(p,g,T){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(i,f))});let c=Ct(),l=$();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(nb(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(F.min())){const u=t.Cs.getLastRemoteSnapshotVersion(i).next(h=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.Ui=r,i))}function nb(n,e,t){let s=$(),r=$();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Ct();return t.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(F.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function gU(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ri(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Cs.getTargetData(s,e).next(i=>i?(r=i,m.resolve(r)):t.Cs.allocateTargetId(s).next(o=>(r=new ws(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function xi(n,e,t){const s=k(n),r=s.Ui.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$s(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Ml(n,e,t){const s=k(n);let r=F.min(),i=$();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=k(a),h=u.qi.get(l);return h!==void 0?m.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,Nt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?r:F.min(),t?i:$())).next(a=>(ib(s,hT(e),a),{documents:a,Hi:i})))}function sb(n,e){const t=k(n),s=k(t.Cs),r=t.Ui.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.se(i,e).next(o=>o?o.target:null))}function rb(n,e){const t=k(n),s=t.Ki.get(e)||F.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Gi.getAllFromCollectionGroup(r,e,ZE(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(ib(t,e,r),r))}function ib(n,e,t){let s=n.Ki.get(e)||F.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ki.set(e,s)}async function yU(n,e,t,s){const r=k(n);let i=$(),o=Ct();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(i=i.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),c=await Ri(r,function(l){return Nt(to(X.fromString(`__bundle__/docs/${l}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",l=>nb(l,a,o).next(u=>(a.apply(l),u)).next(u=>r.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>r.Cs.addMatchingKeys(l,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function _U(n,e,t=$()){const s=await Ri(n,Nt(rm(e.bundledQuery))),r=k(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ge(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ns.saveNamedQuery(i,e);const a=s.withResumeToken(Le.EMPTY_BYTE_STRING,o);return r.Ui=r.Ui.insert(a.targetId,a),r.Cs.updateTargetData(i,a).next(()=>r.Cs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Cs.addMatchingKeys(i,t,s.targetId)).next(()=>r.Ns.saveNamedQuery(i,e))})}function d_(n,e){return`firestore_clients_${n}_${e}`}function f_(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function rd(n,e){return`firestore_targets_${n}_${e}`}class Ll{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Zi(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new v(r.error.code,r.error.message))),o?new Ll(e,t,r.state,i):(De("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ho{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new v(s.error.code,s.error.message))),i?new Ho(e,s.state,r):(De("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=zu();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=iT(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new Fl(e,i):(De("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class um{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new um(t.clientId,t.onlineState):(De("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zd{constructor(){this.activeTargetIds=zu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class id{constructor(e,t,s,r,i){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ke(q),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=d_(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Zd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const r=this.getItem(d_(this.persistenceKey,s));if(r){const i=Fl.Zi(s,r);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(rd(this.persistenceKey,e));if(s){const r=Ho.Zi(e,s);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rd(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Er(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void De("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(r){let i=St.at;if(r!=null)try{const o=JSON.parse(r);V(typeof o=="number"),i=o}catch(o){De("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==St.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Mr(r)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const r=new Ll(this.currentUser,e,t,s),i=f_(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=f_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const r=rd(this.persistenceKey,e),i=new Ho(e,t,s);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return Fl.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Ll.Zi(new We(i),r,t)}Nr(e,t){const s=this._r.exec(e),r=Number(s[1]);return Ho.Zi(r,t)}yr(e){return um.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=zu();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class ob{constructor(){this.Lr=new Zd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,s){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Zd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vU{qr(e){}shutdown(){}}/**
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
 */class p_{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const wU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IU{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class EU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,r,i){const o=this.ho(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw Ci("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,r,i,o){return this.ao(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+eo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=wU[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new wL;a.setWithCredentials(!0),a.listenOnce(yL.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case td.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case td.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new v(y.DEADLINE_EXCEEDED,"Request time out"));break;case td.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(l=d)===null||l===void 0?void 0:l.error;if(f&&f.status&&f.message){const p=function(g){const T=g.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(T)>=0?T:y.UNKNOWN}(f.status);o(new v(p,f.message))}else o(new v(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(y.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}wo(e,t,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=mL(),o=gL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new vL({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new IU({Hr:p=>{h?w("Connection","Not sending because WebChannel is closed:",p):(u||(w("Connection","Opening WebChannel transport."),l.open(),u=!0),w("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,g,T)=>{p.listen(g,C=>{try{T(C)}catch(O){setTimeout(()=>{throw O},0)}})};return f(l,Mc.EventType.OPEN,()=>{h||w("Connection","WebChannel transport opened.")}),f(l,Mc.EventType.CLOSE,()=>{h||(h=!0,w("Connection","WebChannel transport closed"),d.io())}),f(l,Mc.EventType.ERROR,p=>{h||(h=!0,Ci("Connection","WebChannel transport errored:",p),d.io(new v(y.UNAVAILABLE,"The operation could not be completed")))}),f(l,Mc.EventType.MESSAGE,p=>{var g;if(!h){const T=p.data[0];V(!!T);const C=T,O=C.error||((g=C[0])===null||g===void 0?void 0:g.error);if(O){w("Connection","WebChannel received error:",O);const B=O.status;let K=function(M){const ae=xe[M];if(ae!==void 0)return TT(ae)}(B),ie=O.message;K===void 0&&(K=y.INTERNAL,ie="Unknown error status: "+B+" with message "+O.message),h=!0,d.io(new v(K,ie)),l.close()}else w("Connection","WebChannel received:",T),d.ro(T)}}),f(o,_L.STAT_EVENT,p=>{p.stat===by.PROXY?w("Connection","Detected buffering proxy"):p.stat===by.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 *//**
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
 */function ab(){return typeof window<"u"?window:null}function rl(){return typeof document<"u"?document:null}/**
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
 */function dc(n){return new fF(n,!0)}class hm{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class cb{constructor(e,t,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new hm(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===y.RESOURCE_EXHAUSTED?(De(t.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===t&&this.Go(s,r)},s=>{e(()=>{const r=new v(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TU extends cb{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=gF(this.It,e),s=function(r){if(!("targetChange"in r))return F.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?F.min():i.readTime?Ge(i.readTime):F.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=Sa(this.It),t.addTarget=function(r,i){let o;const a=i.target;return o=Dl(a)?{documents:PT(r,a)}:{query:MT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=NT(r,i.resumeToken):i.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Ta(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=_F(this.It,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=Sa(this.It),t.removeTarget=e,this.Bo(t)}}class bU extends cb{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(V(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=yF(e.writeResults,e.commitTime),s=Ge(e.commitTime);return this.listener.Zo(s,t)}return V(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Sa(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ca(this.It,s))};this.Bo(t)}}/**
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
 */class SU extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new v(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(y.UNKNOWN,r.toString())})}_o(e,t,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class CU{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(De(t),this.ou=!1):w("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class kU{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Gs(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c._u.add(4),await ro(c),c.gu.set("Unknown"),c._u.delete(4),await fc(c)}(this))})}),this.gu=new CU(s,r)}}async function fc(n){if(Gs(n))for(const e of n.wu)await e(!0)}async function ro(n){for(const e of n.wu)await e(!1)}function Xu(n,e){const t=k(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),pm(t)?fm(t):oo(t).ko()&&dm(t,e))}function ka(n,e){const t=k(n),s=oo(t);t.du.delete(e),s.ko()&&lb(t,e),t.du.size===0&&(s.ko()?s.Fo():Gs(t)&&t.gu.set("Unknown"))}function dm(n,e){n.yu.Mt(e.targetId),oo(n).zo(e)}function lb(n,e){n.yu.Mt(e),oo(n).Ho(e)}function fm(n){n.yu=new uF({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),oo(n).start(),n.gu.uu()}function pm(n){return Gs(n)&&!oo(n).No()&&n.du.size>0}function Gs(n){return k(n)._u.size===0}function ub(n){n.yu=void 0}async function AU(n){n.du.forEach((e,t)=>{dm(n,e)})}async function NU(n,e){ub(n),pm(n)?(n.gu.hu(e),fm(n)):n.gu.set("Unknown")}async function DU(n,e,t){if(n.gu.set("Online"),e instanceof AT&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ul(n,s)}else if(e instanceof nl?n.yu.Gt(e):e instanceof kT?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(F.min()))try{const s=await tb(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),lb(r,a);const l=new ws(c.target,a,1,c.sequenceNumber);dm(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Ul(n,s)}}async function Ul(n,e,t){if(!$s(e))throw e;n._u.add(1),await ro(n),n.gu.set("Offline"),t||(t=()=>tb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await fc(n)})}function hb(n,e){return e().catch(t=>Ul(n,t,e))}async function io(n){const e=k(n),t=Rs(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;RU(e);)try{const r=await gU(e.localStore,s);if(r===null){e.fu.length===0&&t.Fo();break}s=r.batchId,xU(e,r)}catch(r){await Ul(e,r)}db(e)&&fb(e)}function RU(n){return Gs(n)&&n.fu.length<10}function xU(n,e){n.fu.push(e);const t=Rs(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function db(n){return Gs(n)&&!Rs(n).No()&&n.fu.length>0}function fb(n){Rs(n).start()}async function OU(n){Rs(n).eu()}async function PU(n){const e=Rs(n);for(const t of n.fu)e.Xo(t.mutations)}async function MU(n,e,t){const s=n.fu.shift(),r=nm.from(s,e,t);await hb(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await io(n)}async function LU(n,e){e&&Rs(n).Yo&&await async function(t,s){if(r=s.code,ET(r)&&r!==y.ABORTED){const i=t.fu.shift();Rs(t).Mo(),await hb(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await io(t)}var r}(n,e),db(n)&&fb(n)}async function m_(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Gs(t);t._u.add(3),await ro(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await fc(t)}async function ef(n,e){const t=k(n);e?(t._u.delete(2),await fc(t)):e||(t._u.add(2),await ro(t),t.gu.set("Unknown"))}function oo(n){return n.pu||(n.pu=function(e,t,s){const r=k(e);return r.su(),new TU(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:AU.bind(null,n),Zr:NU.bind(null,n),Wo:DU.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),pm(n)?fm(n):n.gu.set("Unknown")):(await n.pu.stop(),ub(n))})),n.pu}function Rs(n){return n.Iu||(n.Iu=function(e,t,s){const r=k(e);return r.su(),new bU(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:OU.bind(null,n),Zr:LU.bind(null,n),tu:PU.bind(null,n),Zo:MU.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await io(n)):(await n.Iu.stop(),n.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class mm{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new mm(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(n,e){if(De("AsyncQueue",`${e}: ${n}`),$s(n))return new v(y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wi{constructor(e){this.comparator=e?(t,s)=>e(t,s)||S.comparator(t.key,s.key):(t,s)=>S.comparator(t.key,s.key),this.keyedMap=Po(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new wi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class g_{constructor(){this.Tu=new ke(S.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):R():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class Oi{constructor(e,t,s,r,i,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Oi(e,t,wi.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class FU{constructor(){this.Au=void 0,this.listeners=[]}}class UU{constructor(){this.queries=new js(e=>uT(e),cc),this.onlineState="Unknown",this.Ru=new Set}}async function gm(n,e){const t=k(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new FU),r)try{i.Au=await t.onListen(s)}catch(o){const a=ao(o,`Initialization of query '${Kd(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&_m(t)}async function ym(n,e){const t=k(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function VU(n,e){const t=k(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&_m(t)}function BU(n,e,t){const s=k(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function _m(n){n.Ru.forEach(e=>{e.next()})}class vm{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Oi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class WU{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class y_{constructor(e){this.It=e}Ji(e){return vn(this.It,e)}Yi(e){return e.metadata.exists?OT(this.It,e.document,!1):de.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ge(e)}}class qU{constructor(e,t,s){this.Mu=e,this.localStore=t,this.It=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=pb(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=X.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new y_(this.It);for(const r of e)if(r.metadata.queries){const i=s.Ji(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||$()).add(i);t.set(o,a)}}return t}async complete(){const e=await yU(this.localStore,new y_(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await _U(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function pb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class mb{constructor(e){this.key=e}}class gb{constructor(e){this.key=e}}class yb{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=$(),this.mutatedKeys=$(),this.Gu=dT(e),this.Qu=new wi(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new g_,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Xp(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(s.track({type:3,doc:f}),T=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),T=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),T=!0):d&&!f&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(f?(o=o.add(f),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Oi(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new g_,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=$(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new gb(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new mb(s))}),t}tc(e){this.Uu=e.Hi,this.Ku=$();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Oi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class $U{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jU{constructor(e){this.key=e,this.nc=!1}}class GU{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new js(a=>uT(a),cc),this.rc=new Map,this.oc=new Set,this.uc=new ke(S.comparator),this.cc=new Map,this.ac=new om,this.hc={},this.lc=new Map,this.fc=Pr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function HU(n,e){const t=bm(n);let s,r;const i=t.ic.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Ri(t.localStore,Nt(e));t.isPrimaryClient&&Xu(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await wm(t,e,s,a==="current",o.resumeToken)}return r}async function wm(n,e,t,s,r){n._c=(h,d,f)=>async function(p,g,T,C){let O=g.view.Wu(T);O.$i&&(O=await Ml(p.localStore,g.query,!1).then(({documents:ie})=>g.view.Wu(ie,O)));const B=C&&C.targetChanges.get(g.targetId),K=g.view.applyChanges(O,p.isPrimaryClient,B);return tf(p,g.targetId,K.Xu),K.snapshot}(n,h,d,f);const i=await Ml(n.localStore,e,!0),o=new yb(e,i.Hi),a=o.Wu(i.documents),c=hc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);tf(n,t,l.Xu);const u=new $U(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function YU(n,e){const t=k(n),s=t.ic.get(e),r=t.rc.get(s.targetId);if(r.length>1)return t.rc.set(s.targetId,r.filter(i=>!cc(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await xi(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ka(t.remoteStore,s.targetId),Pi(t,s.targetId)}).catch(qs)):(Pi(t,s.targetId),await xi(t.localStore,s.targetId,!0))}async function zU(n,e,t){const s=Sm(n);try{const r=await function(i,o){const a=k(i),c=Ee.now(),l=o.reduce((d,f)=>d.add(f.key),$());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ct(),p=$();return a.Gi.getEntries(d,l).next(g=>{f=g,f.forEach((T,C)=>{C.isValidDocument()||(p=p.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const T=[];for(const C of o){const O=rF(C,u.get(C.key).overlayedDocument);O!=null&&T.push(new rs(C.key,O,aT(O.value.mapValue),we.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(g=>{h=g;const T=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,g.batchId,T)})}).then(()=>({batchId:h.batchId,changes:ST(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new ke(q)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,t),await is(s,r.changes),await io(s.remoteStore)}catch(r){const i=ao(r,"Failed to persist write");t.reject(i)}}async function _b(n,e){const t=k(n);try{const s=await mU(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.cc.get(i);o&&(V(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?V(o.nc):r.removedDocuments.size>0&&(V(o.nc),o.nc=!1))}),await is(t,s,e)}catch(s){await qs(s)}}function __(n,e,t){const s=k(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=k(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&_m(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KU(n,e,t){const s=k(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new ke(S.comparator);o=o.insert(i,de.newNoDocument(i,F.min()));const a=$().add(i),c=new uc(F.min(),new Map,new ce(q),o,a);await _b(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Tm(s)}else await xi(s.localStore,e,!1).then(()=>Pi(s,e,t)).catch(qs)}async function QU(n,e){const t=k(n),s=e.batch.batchId;try{const r=await pU(t.localStore,e);Em(t,s,null),Im(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await is(t,r)}catch(r){await qs(r)}}async function JU(n,e,t){const s=k(n);try{const r=await function(i,o){const a=k(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(V(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Em(s,e,t),Im(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await is(s,r)}catch(r){await qs(r)}}async function XU(n,e){const t=k(n);Gs(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=k(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.lc.get(s)||[];r.push(e),t.lc.set(s,r)}catch(s){const r=ao(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function Im(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function Em(n,e,t){const s=k(n);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Pi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||vb(n,s)})}function vb(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(ka(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Tm(n))}function tf(n,e,t){for(const s of t)s instanceof mb?(n.ac.addReference(s.key,e),ZU(n,s)):s instanceof gb?(w("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||vb(n,s.key)):R()}function ZU(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.oc.add(s),Tm(n))}function Tm(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new S(X.fromString(e)),s=n.fc.next();n.cc.set(s,new jU(t)),n.uc=n.uc.insert(t,s),Xu(n.remoteStore,new ws(Nt(to(t.path)),s,2,St.at))}}async function is(n,e,t){const s=k(n),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=lm.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=k(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>m.forEach(c,h=>m.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>m.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!$s(u))throw u;w("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,p)}}}(s.localStore,i))}async function eV(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await eb(t.localStore,e);t.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(y.CANCELLED,i))})}),r.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await is(t,s.ji)}}function tV(n,e){const t=k(n),s=t.cc.get(e);if(s&&s.nc)return $().add(s.key);{let r=$();const i=t.rc.get(e);if(!i)return r;for(const o of i){const a=t.ic.get(o);r=r.unionWith(a.view.ju)}return r}}async function nV(n,e){const t=k(n),s=await Ml(t.localStore,e.query,!0),r=e.view.tc(s);return t.isPrimaryClient&&tf(t,e.targetId,r.Xu),r}async function sV(n,e){const t=k(n);return rb(t.localStore,e).then(s=>is(t,s))}async function rV(n,e,t,s){const r=k(n),i=await function(o,a){const c=k(o),l=k(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):m.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await io(r.remoteStore):t==="acknowledged"||t==="rejected"?(Em(r,e,s||null),Im(r,e),function(o,a){k(k(o).mutationQueue).An(a)}(r.localStore,e)):R(),await is(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function iV(n,e){const t=k(n);if(bm(t),Sm(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await v_(t,s.toArray());t.dc=!0,await ef(t.remoteStore,!0);for(const i of r)Xu(t.remoteStore,i)}else if(e===!1&&t.dc!==!1){const s=[];let r=Promise.resolve();t.rc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Pi(t,o),xi(t.localStore,o,!0))),ka(t.remoteStore,o)}),await r,await v_(t,s),function(i){const o=k(i);o.cc.forEach((a,c)=>{ka(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new ke(S.comparator)}(t),t.dc=!1,await ef(t.remoteStore,!1)}}async function v_(n,e,t){const s=k(n),r=[],i=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await Ri(s.localStore,Nt(c[0]));for(const l of c){const u=s.ic.get(l),h=await nV(s,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await sb(s.localStore,o);a=await Ri(s.localStore,l),await wm(s,wb(l),o,!1,a.resumeToken)}r.push(a)}return s.sc.Wo(i),r}function wb(n){return lT(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function oV(n){const e=k(n);return k(k(e.localStore).persistence).vi()}async function aV(n,e,t,s){const r=k(n);if(r.dc)return void w("SyncEngine","Ignoring unexpected query state notification.");const i=r.rc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await rb(r.localStore,hT(i[0])),a=uc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Le.EMPTY_BYTE_STRING);await is(r,o,a);break}case"rejected":await xi(r.localStore,e,!0),Pi(r,e,s);break;default:R()}}async function cV(n,e,t){const s=bm(n);if(s.dc){for(const r of e){if(s.rc.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await sb(s.localStore,r),o=await Ri(s.localStore,i);await wm(s,wb(i),o.targetId,!1,o.resumeToken),Xu(s.remoteStore,o)}for(const r of t)s.rc.has(r)&&await xi(s.localStore,r,!1).then(()=>{ka(s.remoteStore,r),Pi(s,r)}).catch(qs)}}function bm(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_b.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KU.bind(null,e),e.sc.Wo=VU.bind(null,e.eventManager),e.sc.wc=BU.bind(null,e.eventManager),e}function Sm(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JU.bind(null,e),e}function lV(n,e,t){const s=k(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=k(h),p=Ge(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.Ns.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(p)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(pb(a));const c=new qU(a,r.localStore,i.It);let l=await i.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await i.mc()}const u=await c.complete();return await is(r,u.Lu,void 0),await function(h,d){const f=k(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(r.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return Ci("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class Ib{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=dc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return ZT(this.persistence,new XT,e.initialUser,this.It)}yc(e){return new JT(Ju.Bs,this.It)}gc(e){return new ob}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eb extends Ib{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Sm(this.Ac.syncEngine),await io(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return ZT(this.persistence,new XT,e.initialUser,this.It)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new ZF(s,e.asyncQueue,t)}Ec(e,t){const s=new LL(t,this.persistence);return new ML(e.asyncQueue,s)}yc(e){const t=cm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new am(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,ab(),rl(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new ob}}class uV extends Eb{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof id&&(this.sharedClientState.syncEngine={Fr:rV.bind(null,t),$r:aV.bind(null,t),Br:cV.bind(null,t),vi:oV.bind(null,t),Mr:sV.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await iV(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=ab();if(!id.C(t))throw new v(y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=cm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new id(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Cm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>__(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eV.bind(null,this.syncEngine),await ef(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new UU}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new EU(r));var r;return function(i,o,a,c){return new SU(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>__(this.syncEngine,a,0),o=p_.C()?new p_:new vU,new kU(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,l){const u=new GU(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=k(e);w("RemoteStore","RemoteStore shutting down."),t._u.add(5),await ro(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function km(n,e,t){if(!t)throw new v(y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tb(n,e,t,s){if(e===!0&&s===!0)throw new v(y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function w_(n){if(!S.isDocumentKey(n))throw new v(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function I_(n){if(S.isDocumentKey(n))throw new v(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function te(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new v(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zu(n);throw new v(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function bb(n,e){if(e<=0)throw new v(y.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const E_=new Map;class T_{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new v(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class pc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T_(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new TL;switch(t.type){case"gapi":const s=t.client;return new kL(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new v(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=E_.get(e);t&&(w("ComponentProvider","Removing Datastore"),E_.delete(e),t.terminate())}(this),Promise.resolve()}}function hV(n,e,t,s={}){var r;const i=(n=te(n,pc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ci("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=We.MOCK_USER;else{o=Ow(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(c)}n._authCredentials=new bL(new KE(o,a))}}/**
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
 */class pe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}}class dt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dt(this.firestore,e,this._query)}}class wn extends dt{constructor(e,t,s){super(e,t,to(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new S(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function Sb(n,e,...t){if(n=N(n),km("collection","path",e),n instanceof pc){const s=X.fromString(e,...t);return I_(s),new wn(n,null,s)}{if(!(n instanceof pe||n instanceof wn))throw new v(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(e,...t));return I_(s),new wn(n.firestore,null,s)}}function dV(n,e){if(n=te(n,pc),km("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new v(y.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dt(n,null,function(t){return new ss(X.emptyPath(),t)}(e))}function Vl(n,e,...t){if(n=N(n),arguments.length===1&&(e=QE.R()),km("doc","path",e),n instanceof pc){const s=X.fromString(e,...t);return w_(s),new pe(n,null,new S(s))}{if(!(n instanceof pe||n instanceof wn))throw new v(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(e,...t));return w_(s),new pe(n.firestore,n instanceof wn?n.converter:null,new S(s))}}function Cb(n,e){return n=N(n),e=N(e),(n instanceof pe||n instanceof wn)&&(e instanceof pe||e instanceof wn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function kb(n,e){return n=N(n),e=N(e),n instanceof dt&&e instanceof dt&&n.firestore===e.firestore&&cc(n._query,e._query)&&n.converter===e.converter}/**
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
 */function b_(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 *//**
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
 */class eh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):De("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fV{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new je,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(s);return new WU(JSON.parse(r),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class pV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new v(y.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=k(s),o=Sa(i.It)+"/documents",a={documents:r.map(h=>ba(i.It,h))},c=await i._o("BatchGetDocuments",o,a,r.length),l=new Map;c.forEach(h=>{const d=mF(i.It,h);l.set(d.key.toString(),d)});const u=[];return r.forEach(h=>{const d=l.get(h.toString());V(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new so(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=S.fromPath(s);this.mutations.push(new Zp(r,this.precondition(r)))}),await async function(t,s){const r=k(t),i=Sa(r.It)+"/documents",o={writes:s.map(a=>Ca(r.It,a))};await r.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=F.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new v(y.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(F.min())?we.exists(!1):we.updateTime(t):we.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(F.min()))throw new v(y.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return we.updateTime(t)}return we.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class mV{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.kc=s.maxAttempts,this.xo=new hm(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new pV(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Fc(r)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!oc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ET(t)}return!1}}/**
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
 */class gV{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=QE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ao(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ab(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await eb(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Nb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Am(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>m_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>m_(e.remoteStore,i)),n.onlineComponents=e}async function Am(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Ab(n,new Ib)),n.offlineComponents}async function th(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Nb(n,new Cm)),n.onlineComponents}function Db(n){return Am(n).then(e=>e.persistence)}function Nm(n){return Am(n).then(e=>e.localStore)}function Rb(n){return th(n).then(e=>e.remoteStore)}function Dm(n){return th(n).then(e=>e.syncEngine)}function yV(n){return th(n).then(e=>e.datastore)}async function Mi(n){const e=await th(n),t=e.eventManager;return t.onListen=HU.bind(null,e.syncEngine),t.onUnlisten=YU.bind(null,e.syncEngine),t}function _V(n){return n.asyncQueue.enqueue(async()=>{const e=await Db(n),t=await Rb(n);return e.setNetworkEnabled(!0),function(s){const r=k(s);return r._u.delete(0),fc(r)}(t)})}function vV(n){return n.asyncQueue.enqueue(async()=>{const e=await Db(n),t=await Rb(n);return e.setNetworkEnabled(!1),async function(s){const r=k(s);r._u.add(0),await ro(r),r.gu.set("Offline")}(t)})}function wV(n,e){const t=new je;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const l=k(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new v(y.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ao(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await Nm(n),e,t)),t.promise}function xb(n,e,t={}){const s=new je;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new eh({next:h=>{i.enqueueAndForget(()=>ym(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new v(y.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new v(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vm(to(o.path),l,{includeMetadataChanges:!0,Nu:!0});return gm(r,u)}(await Mi(n),n.asyncQueue,e,t,s)),s.promise}function IV(n,e){const t=new je;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Ml(s,r,!0),a=new yb(r,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=ao(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await Nm(n),e,t)),t.promise}function Ob(n,e,t={}){const s=new je;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new eh({next:h=>{i.enqueueAndForget(()=>ym(r,u)),h.fromCache&&a.source==="server"?c.reject(new v(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vm(o,l,{includeMetadataChanges:!0,Nu:!0});return gm(r,u)}(await Mi(n),n.asyncQueue,e,t,s)),s.promise}function EV(n,e){const t=new eh(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){k(s).Ru.add(r),r.next()}(await Mi(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){k(s).Ru.delete(r)}(await Mi(n),t))}}function TV(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,l){return new fV(c,l)}(function(c,l){if(c instanceof Uint8Array)return b_(c,l);if(c instanceof ArrayBuffer)return b_(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,dc(e));n.asyncQueue.enqueueAndForget(async()=>{lV(await Dm(n),r,s)})}function bV(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=k(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ns.getNamedQuery(i,s))}(await Nm(n),e))}class SV{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new hm(this,"async_queue_retry"),this.Wc=()=>{const t=rl();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=rl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new je;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$s(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw De("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=mm.createAndSchedule(this,e,t,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&R()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function nf(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class CV{constructor(){this._progressObserver={},this._taskCompletionResolver=new je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const kV=-1;class Ae extends pc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new SV,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pb(this),this._firestoreClient.terminate()}}function Je(n){return n._firestoreClient||Pb(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Pb(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new VL(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new gV(n._authCredentials,n._appCheckCredentials,n._queue,s)}function AV(n,e){Lb(n=te(n,Ae));const t=Je(n),s=n._freezeSettings(),r=new Cm;return Mb(t,r,new Eb(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function NV(n){Lb(n=te(n,Ae));const e=Je(n),t=n._freezeSettings(),s=new Cm;return Mb(e,s,new uV(s,t.cacheSizeBytes))}function Mb(n,e,t){const s=new je;return n.asyncQueue.enqueue(async()=>{try{await Ab(n,t),await Nb(n,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===y.FAILED_PRECONDITION||o.code===y.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Ci("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function DV(n){if(n._initialized&&!n._terminated)throw new v(y.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new je;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!en.C())return Promise.resolve();const s=t+"main";await en.delete(s)}(cm(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function RV(n){return function(e){const t=new je;return e.asyncQueue.enqueueAndForget(async()=>XU(await Dm(e),t)),t.promise}(Je(n=te(n,Ae)))}function xV(n){return _V(Je(n=te(n,Ae)))}function OV(n){return vV(Je(n=te(n,Ae)))}function PV(n,e){const t=Je(n=te(n,Ae)),s=new CV;return TV(t,n._databaseId,e,s),s}function MV(n,e){return bV(Je(n=te(n,Ae)),e).then(t=>t?new dt(n,null,t.query):null)}function Lb(n){if(n._initialized||n._terminated)throw new v(y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 *//**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Le.fromBase64String(e))}catch(t){throw new v(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new v(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hr{constructor(e){this._methodName=e}}/**
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
 */class nh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new v(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new v(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */const LV=/^__.*__$/;class FV{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new no(e,this.data,t,this.fieldTransforms)}}class Fb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new rs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ub(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class sh{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ub(this.sa)&&LV.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class UV{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=s||dc(e)}da(e,t,s,r=!1){return new sh({sa:e,methodName:t,fa:s,path:Re.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Yr(n){const e=n._freezeSettings(),t=dc(n._databaseId);return new UV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rh(n,e,t,s,r,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,r);Pm("Data must be an object, but it was:",o,s);const a=Wb(s,o);let c,l;if(i.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=sf(e,h,t);if(!o.contains(d))throw new v(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$b(u,d)||u.push(d)}c=new Mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new FV(new et(a),c,l)}class mc extends Hr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function Vb(n,e,t){return new sh({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Rm extends Hr{_toFieldTransform(e){return new lc(e.path,new Ni)}isEqual(e){return e instanceof Rm}}class VV extends Hr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Vb(this,e,!0),s=this._a.map(i=>zr(i,t)),r=new Dr(s);return new lc(e.path,r)}isEqual(e){return this===e}}class BV extends Hr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Vb(this,e,!0),s=this._a.map(i=>zr(i,t)),r=new Rr(s);return new lc(e.path,r)}isEqual(e){return this===e}}class WV extends Hr{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Di(e.It,mT(e.It,this.wa));return new lc(e.path,t)}isEqual(e){return this===e}}function xm(n,e,t,s){const r=n.da(1,e,t);Pm("Data must be an object, but it was:",r,s);const i=[],o=et.empty();Gr(s,(c,l)=>{const u=Mm(e,c,t);l=N(l);const h=r.ca(u);if(l instanceof mc)i.push(u);else{const d=zr(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Mt(i);return new Fb(o,a,r.fieldTransforms)}function Om(n,e,t,s,r,i){const o=n.da(1,e,t),a=[sf(e,s,t)],c=[r];if(i.length%2!=0)throw new v(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(sf(e,i[d])),c.push(i[d+1]);const l=[],u=et.empty();for(let d=a.length-1;d>=0;--d)if(!$b(l,a[d])){const f=a[d];let p=c[d];p=N(p);const g=o.ca(f);if(p instanceof mc)l.push(f);else{const T=zr(p,g);T!=null&&(l.push(f),u.set(f,T))}}const h=new Mt(l);return new Fb(u,h,o.fieldTransforms)}function Bb(n,e,t,s=!1){return zr(t,n.da(s?4:3,e))}function zr(n,e){if(qb(n=N(n)))return Pm("Unsupported field value:",e,n),Wb(n,e);if(n instanceof Hr)return function(t,s){if(!Ub(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=zr(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=N(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return mT(s.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=Ee.fromDate(t);return{timestampValue:Ta(s.It,r)}}if(t instanceof Ee){const r=new Ee(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ta(s.It,r)}}if(t instanceof nh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sn)return{bytesValue:NT(s.It,t._byteString)};if(t instanceof pe){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:em(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Zu(t)}`)}(n,e)}function Wb(n,e){const t={};return sT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(n,(s,r)=>{const i=zr(r,e.ra(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function qb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof nh||n instanceof Sn||n instanceof pe||n instanceof Hr)}function Pm(n,e,t){if(!qb(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Zu(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function sf(n,e,t){if((e=N(e))instanceof xs)return e._internalPath;if(typeof e=="string")return Mm(n,e);throw Bl("Field path arguments must be of type string or ",n,!1,void 0,t)}const qV=new RegExp("[~\\*/\\[\\]]");function Mm(n,e,t){if(e.search(qV)>=0)throw Bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xs(...e.split("."))._internalPath}catch{throw Bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bl(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new v(y.INVALID_ARGUMENT,a+n+c)}function $b(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Aa{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $V(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ih("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $V extends Aa{data(){return super.data()}}function ih(n,e){return typeof e=="string"?Mm(n,e):e instanceof xs?e._internalPath:e._delegate._internalPath}/**
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
 */function jb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new v(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gc{}function ls(n,...e){for(const t of e)n=t._apply(n);return n}class jV extends gc{constructor(e,t,s){super(),this.ma=e,this.ga=t,this.ya=s,this.type="where"}_apply(e){const t=Yr(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new v(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){C_(u,l);const f=[];for(const p of u)f.push(S_(a,r,p));h={arrayValue:{values:f}}}else h=S_(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||C_(u,l),h=Bb(o,i,u,l==="in"||l==="not-in");const d=tt.create(c,l,h);return function(f,p){if(p.dt()){const T=Qp(f);if(T!==null&&!T.isEqual(p.field))throw new v(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${p.field.toString()}'`);const C=Kp(f);C!==null&&Kb(f,p.field,C)}const g=function(T,C){for(const O of T.filters)if(C.indexOf(O.op)>=0)return O.op;return null}(f,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(g!==null)throw g===p.op?new v(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new v(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${g.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new dt(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new ss(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function GV(n,e,t){const s=e,r=ih("where",n);return new jV(r,s,t)}class HV extends gc{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new v(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new v(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vi(r,i);return function(a,c){if(Kp(a)===null){const l=Qp(a);l!==null&&Kb(a,l,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new dt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ss(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function YV(n,e="asc"){const t=e,s=ih("orderBy",n);return new HV(s,t)}class Gb extends gc{constructor(e,t,s){super(),this.type=e,this.Ia=t,this.Ta=s}_apply(e){return new dt(e.firestore,e.converter,xl(e._query,this.Ia,this.Ta))}}function zV(n){return bb("limit",n),new Gb("limit",n,"F")}function KV(n){return bb("limitToLast",n),new Gb("limitToLast",n,"L")}class Hb extends gc{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=zb(e,this.type,this.Ea,this.Aa);return new dt(e.firestore,e.converter,function(s,r){return new ss(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function QV(...n){return new Hb("startAt",n,!0)}function JV(...n){return new Hb("startAfter",n,!1)}class Yb extends gc{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=zb(e,this.type,this.Ea,this.Aa);return new dt(e.firestore,e.converter,function(s,r){return new ss(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function XV(...n){return new Yb("endBefore",n,!1)}function ZV(...n){return new Yb("endAt",n,!0)}function zb(n,e,t,s){if(t[0]=N(t[0]),t[0]instanceof Aa)return function(r,i,o,a,c){if(!a)throw new v(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Ai(r))if(u.field.isKeyField())l.push(Ar(i,a.key));else{const h=a.data.field(u.field);if(zp(h))throw new v(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new v(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ds(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=Yr(n.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new v(y.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new v(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Jp(i)&&p.indexOf("/")!==-1)throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const g=i.path.child(X.fromString(p));if(!S.isDocumentKey(g))throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const T=new S(g);d.push(Ar(o,T))}else{const g=Bb(a,c,p);d.push(g)}}return new Ds(d,u)}(n._query,n.firestore._databaseId,r,e,t,s)}}function S_(n,e,t){if(typeof(t=N(t))=="string"){if(t==="")throw new v(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jp(e)&&t.indexOf("/")!==-1)throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(X.fromString(t));if(!S.isDocumentKey(s))throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ar(n,new S(s))}if(t instanceof pe)return Ar(n,t._key);throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(t)}.`)}function C_(n,e){if(!Array.isArray(n)||n.length===0)throw new v(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new v(y.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Kb(n,e,t){if(!t.isEqual(e))throw new v(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class Lm{convertValue(e,t="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){const s={};return Gr(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new nh(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=rT(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const t=ks(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=X.fromString(e);V(UT(s));const r=new As(s.get(1),s.get(3)),i=new S(s.popFirst(5));return r.isEqual(t)||De(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function oh(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class eB extends Lm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}/**
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
 */class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qn extends Aa{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ih("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Yo extends Qn{data(e={}){return super.data(e)}}class Os{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new dr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Yo(this._firestore,this._userDataWriter,s.key,s,new dr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new v(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Yo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new dr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Yo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new dr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:tB(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function tB(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function Qb(n,e){return n instanceof Qn&&e instanceof Qn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Os&&e instanceof Os&&n._firestore===e._firestore&&kb(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function nB(n){n=te(n,pe);const e=te(n.firestore,Ae);return xb(Je(e),n._key).then(t=>Fm(e,n,t))}class Kr extends Lm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function sB(n){n=te(n,pe);const e=te(n.firestore,Ae),t=Je(e),s=new Kr(e);return wV(t,n._key).then(r=>new Qn(e,s,n._key,r,new dr(r!==null&&r.hasLocalMutations,!0),n.converter))}function rB(n){n=te(n,pe);const e=te(n.firestore,Ae);return xb(Je(e),n._key,{source:"server"}).then(t=>Fm(e,n,t))}function iB(n){n=te(n,dt);const e=te(n.firestore,Ae),t=Je(e),s=new Kr(e);return jb(n._query),Ob(t,n._query).then(r=>new Os(e,s,n,r))}function oB(n){n=te(n,dt);const e=te(n.firestore,Ae),t=Je(e),s=new Kr(e);return IV(t,n._query).then(r=>new Os(e,s,n,r))}function aB(n){n=te(n,dt);const e=te(n.firestore,Ae),t=Je(e),s=new Kr(e);return Ob(t,n._query,{source:"server"}).then(r=>new Os(e,s,n,r))}function k_(n,e,t){n=te(n,pe);const s=te(n.firestore,Ae),r=oh(n.converter,e,t);return yc(s,[rh(Yr(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,we.none())])}function A_(n,e,t,...s){n=te(n,pe);const r=te(n.firestore,Ae),i=Yr(r);let o;return o=typeof(e=N(e))=="string"||e instanceof xs?Om(i,"updateDoc",n._key,e,t,s):xm(i,"updateDoc",n._key,e),yc(r,[o.toMutation(n._key,we.exists(!0))])}function cB(n){return yc(te(n.firestore,Ae),[new so(n._key,we.none())])}function lB(n,e){const t=te(n.firestore,Ae),s=Vl(n),r=oh(n.converter,e);return yc(t,[rh(Yr(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,we.exists(!1))]).then(()=>s)}function Jb(n,...e){var t,s,r;n=N(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||nf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(nf(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(n instanceof pe)l=te(n.firestore,Ae),u=to(n._key.path),c={next:h=>{e[o]&&e[o](Fm(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=te(n,dt);l=te(h.firestore,Ae),u=h._query;const d=new Kr(l);c={next:f=>{e[o]&&e[o](new Os(l,d,h,f))},error:e[o+1],complete:e[o+2]},jb(n._query)}return function(h,d,f,p){const g=new eh(p),T=new vm(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>gm(await Mi(h),T)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>ym(await Mi(h),T))}}(Je(l),u,a,c)}function uB(n,e){return EV(Je(n=te(n,Ae)),nf(e)?e:{next:e})}function yc(n,e){return function(t,s){const r=new je;return t.asyncQueue.enqueueAndForget(async()=>zU(await Dm(t),s,r)),r.promise}(Je(n),e)}function Fm(n,e,t){const s=t.docs.get(e._key),r=new Kr(n);return new Qn(n,r,e._key,s,new dr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const hB={maxAttempts:5};/**
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
 */class dB{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yr(e)}set(e,t,s){this._verifyNotCommitted();const r=hs(e,this._firestore),i=oh(r.converter,t,s),o=rh(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,we.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=hs(e,this._firestore);let o;return o=typeof(t=N(t))=="string"||t instanceof xs?Om(this._dataReader,"WriteBatch.update",i._key,t,s,r):xm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,we.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=hs(e,this._firestore);return this._mutations=this._mutations.concat(new so(t._key,we.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new v(y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hs(n,e){if((n=N(n)).firestore!==e)throw new v(y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */class fB extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Yr(e)}get(e){const t=hs(e,this._firestore),s=new eB(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return R();const i=r[0];if(i.isFoundDocument())return new Aa(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new Aa(this._firestore,s,t._key,null,t.converter);throw R()})}set(e,t,s){const r=hs(e,this._firestore),i=oh(r.converter,t,s),o=rh(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=hs(e,this._firestore);let o;return o=typeof(t=N(t))=="string"||t instanceof xs?Om(this._dataReader,"Transaction.update",i._key,t,s,r):xm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=hs(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=hs(e,this._firestore),s=new Kr(this._firestore);return super.get(e).then(r=>new Qn(this._firestore,s,t._key,r._document,new dr(!1,!1),t.converter))}}function pB(n,e,t){n=te(n,Ae);const s=Object.assign(Object.assign({},hB),t);return function(r){if(r.maxAttempts<1)throw new v(y.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new je;return r.asyncQueue.enqueueAndForget(async()=>{const c=await yV(r);new mV(r.asyncQueue,c,o,i,a).run()}),a.promise}(Je(n),r=>e(new fB(n,r)),s)}/**
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
 */function mB(){return new mc("deleteField")}function gB(){return new Rm("serverTimestamp")}function yB(...n){return new VV("arrayUnion",n)}function _B(...n){return new BV("arrayRemove",n)}function vB(n){return new WV("increment",n)}(function(n,e=!0){(function(t){eo=t})(Us),Yn(new Ft("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new Ae(new SL(t.getProvider("auth-internal")),new NL(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Yt(Sy,"3.7.3",n),Yt(Sy,"3.7.3","esm2017")})();const wB="@firebase/firestore-compat",IB="0.2.3";/**
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
 */function Um(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new v("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function N_(){if(typeof Uint8Array>"u")throw new v("unimplemented","Uint8Arrays are not available in this environment.")}function D_(){if(!FL())throw new v("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Na{constructor(e){this._delegate=e}static fromBase64String(e){return D_(),new Na(Sn.fromBase64String(e))}static fromUint8Array(e){return N_(),new Na(Sn.fromUint8Array(e))}toBase64(){return D_(),this._delegate.toBase64()}toUint8Array(){return N_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function rf(n){return EB(n,["next","error","complete"])}function EB(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class TB{enableIndexedDbPersistence(e,t){return AV(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return NV(e._delegate)}clearIndexedDbPersistence(e){return DV(e._delegate)}}class Xb{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof As||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ci("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){hV(this._delegate,e,t,s)}enableNetwork(){return xV(this._delegate)}disableNetwork(){return OV(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,Tb("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return RV(this._delegate)}onSnapshotsInSync(e){return uB(this._delegate,e)}get app(){if(!this._appCompat)throw new v("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Li(this,Sb(this._delegate,e))}catch(t){throw gt(t,"collection()","Firestore.collection()")}}doc(e){try{return new jt(this,Vl(this._delegate,e))}catch(t){throw gt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new mt(this,dV(this._delegate,e))}catch(t){throw gt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return pB(this._delegate,t=>e(new Zb(this,t)))}batch(){return Je(this._delegate),new e0(new dB(this._delegate,e=>yc(this._delegate,e)))}loadBundle(e){return PV(this._delegate,e)}namedQuery(e){return MV(this._delegate,e).then(t=>t?new mt(this,t):null)}}class ah extends Lm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Na(new Sn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return jt.forKey(t,this.firestore,null)}}function bB(n){IL(n)}class Zb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ah(e)}get(e){const t=fr(e);return this._delegate.get(t).then(s=>new Da(this._firestore,new Qn(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const r=fr(e);return s?(Um("Transaction.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=fr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=fr(e);return this._delegate.delete(t),this}}class e0{constructor(e){this._delegate=e}set(e,t,s){const r=fr(e);return s?(Um("WriteBatch.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=fr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=fr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Mr{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new Yo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ra(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=Mr.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(t);return i||(i=new Mr(e,new ah(e),t),r.set(t,i)),i}}Mr.INSTANCES=new WeakMap;class jt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ah(e)}static forPath(e,t,s){if(e.length%2!==0)throw new v("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new jt(t,new pe(t._delegate,s,new S(e)))}static forKey(e,t,s){return new jt(t,new pe(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Li(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Li(this.firestore,Sb(this._delegate,e))}catch(t){throw gt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=N(e),e instanceof pe?Cb(this._delegate,e):!1}set(e,t){t=Um("DocumentReference.set",t);try{return t?k_(this._delegate,e,t):k_(this._delegate,e)}catch(s){throw gt(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?A_(this._delegate,e):A_(this._delegate,e,t,...s)}catch(r){throw gt(r,"updateDoc()","DocumentReference.update()")}}delete(){return cB(this._delegate)}onSnapshot(...e){const t=t0(e),s=n0(e,r=>new Da(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Jb(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=sB(this._delegate):(e==null?void 0:e.source)==="server"?t=rB(this._delegate):t=nB(this._delegate),t.then(s=>new Da(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(Mr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gt(n,e,t){return n.message=n.message.replace(e,t),n}function t0(n){for(const e of n)if(typeof e=="object"&&!rf(e))return e;return{}}function n0(n,e){var t,s;let r;return rf(n[0])?r=n[0]:rf(n[1])?r=n[1]:typeof n[0]=="function"?r={next:n[0],error:n[1],complete:n[2]}:r={next:n[1],error:n[2],complete:n[3]},{next:i=>{r.next&&r.next(e(i))},error:(t=r.error)===null||t===void 0?void 0:t.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class Da{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new jt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Qb(this._delegate,e._delegate)}}class Ra extends Da{data(e){const t=this._delegate.data(e);return EL(t!==void 0),t}}class mt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ah(e)}where(e,t,s){try{return new mt(this.firestore,ls(this._delegate,GV(e,t,s)))}catch(r){throw gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new mt(this.firestore,ls(this._delegate,YV(e,t)))}catch(s){throw gt(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new mt(this.firestore,ls(this._delegate,zV(e)))}catch(t){throw gt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new mt(this.firestore,ls(this._delegate,KV(e)))}catch(t){throw gt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new mt(this.firestore,ls(this._delegate,QV(...e)))}catch(t){throw gt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new mt(this.firestore,ls(this._delegate,JV(...e)))}catch(t){throw gt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new mt(this.firestore,ls(this._delegate,XV(...e)))}catch(t){throw gt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new mt(this.firestore,ls(this._delegate,ZV(...e)))}catch(t){throw gt(t,"endAt()","Query.endAt()")}}isEqual(e){return kb(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=oB(this._delegate):(e==null?void 0:e.source)==="server"?t=aB(this._delegate):t=iB(this._delegate),t.then(s=>new of(this.firestore,new Os(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=t0(e),s=n0(e,r=>new of(this.firestore,new Os(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Jb(this._delegate,t,s)}withConverter(e){return new mt(this.firestore,e?this._delegate.withConverter(Mr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class SB{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ra(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class of{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new mt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ra(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new SB(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new Ra(this._firestore,s))})}isEqual(e){return Qb(this._delegate,e._delegate)}}class Li extends mt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new jt(this.firestore,e):null}doc(e){try{return e===void 0?new jt(this.firestore,Vl(this._delegate)):new jt(this.firestore,Vl(this._delegate,e))}catch(t){throw gt(t,"doc()","CollectionReference.doc()")}}add(e){return lB(this._delegate,e).then(t=>new jt(this.firestore,t))}isEqual(e){return Cb(this._delegate,e._delegate)}withConverter(e){return new Li(this.firestore,e?this._delegate.withConverter(Mr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fr(n){return te(n,pe)}/**
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
 */class Vm{constructor(...e){this._delegate=new xs(...e)}static documentId(){return new Vm(Re.keyField().canonicalString())}isEqual(e){return e=N(e),e instanceof xs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ar{constructor(e){this._delegate=e}static serverTimestamp(){const e=gB();return e._methodName="FieldValue.serverTimestamp",new ar(e)}static delete(){const e=mB();return e._methodName="FieldValue.delete",new ar(e)}static arrayUnion(...e){const t=yB(...e);return t._methodName="FieldValue.arrayUnion",new ar(t)}static arrayRemove(...e){const t=_B(...e);return t._methodName="FieldValue.arrayRemove",new ar(t)}static increment(e){const t=vB(e);return t._methodName="FieldValue.increment",new ar(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const CB={Firestore:Xb,GeoPoint:nh,Timestamp:Ee,Blob:Na,Transaction:Zb,WriteBatch:e0,DocumentReference:jt,DocumentSnapshot:Da,Query:mt,QueryDocumentSnapshot:Ra,QuerySnapshot:of,CollectionReference:Li,FieldPath:Vm,FieldValue:ar,setLogLevel:bB,CACHE_SIZE_UNLIMITED:kV};function kB(n,e){n.INTERNAL.registerComponent(new Ft("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},CB)))}/**
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
 */function AB(n){kB(n,(e,t)=>new Xb(e,t,new TB)),n.registerVersion(wB,IB)}AB(ct);const R_="@firebase/database",x_="0.13.10";/**
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
 */let s0="";function r0(n){s0=n}/**
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
 */class NB{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ia(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class DB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const i0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NB(e)}}catch{}return new DB},pr=i0("localStorage"),af=i0("sessionStorage");/**
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
 */const Ii=new Yi("@firebase/database"),o0=function(){let n=1;return function(){return n++}}(),a0=function(n){const e=uR(n),t=new aR;t.update(e);const s=t.digest();return ep.encodeByteArray(s)},_c=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_c.apply(null,s):typeof s=="object"?e+=Pe(s):e+=s,e+=" "}return e};let wr=null,O_=!0;const c0=function(n,e){b(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ii.logLevel=J.VERBOSE,wr=Ii.log.bind(Ii),e&&af.set("logging_enabled",!0)):typeof n=="function"?wr=n:(wr=null,af.remove("logging_enabled"))},$e=function(...n){if(O_===!0&&(O_=!1,wr===null&&af.get("logging_enabled")===!0&&c0(!0)),wr){const e=_c.apply(null,n);wr(e)}},vc=function(n){return function(...e){$e(n,...e)}},cf=function(...n){const e="FIREBASE INTERNAL ERROR: "+_c(...n);Ii.error(e)},Cn=function(...n){const e=`FIREBASE FATAL ERROR: ${_c(...n)}`;throw Ii.error(e),new Error(e)},ht=function(...n){const e="FIREBASE WARNING: "+_c(...n);Ii.warn(e)},RB=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ch=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xB=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Jn="[MIN_NAME]",kn="[MAX_NAME]",Qr=function(n,e){if(n===e)return 0;if(n===Jn||e===kn)return-1;if(e===Jn||n===kn)return 1;{const t=Wl(n),s=Wl(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},OB=function(n,e){return n===e?0:n<e?-1:1},Co=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pe(e))},Bm=function(n){if(typeof n!="object"||n===null)return Pe(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Pe(e[s]),t+=":",t+=Bm(n[e[s]]);return t+="}",t},l0=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const u0=function(n){b(!ch(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},PB=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MB=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LB(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const FB=new RegExp("^-?(0*)\\d{1,10}$"),h0=-2147483648,Wm=2147483647,Wl=function(n){if(FB.test(n)){const e=Number(n);if(e>=h0&&e<=Wm)return e}return null},co=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ht("Exception was thrown by user callback.",t),e},Math.floor(0))}},UB=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class VB{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class BB{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ei.OWNER="owner";/**
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
 */const qm="5",d0="v",f0="s",p0="r",m0="f",g0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,y0="ls",_0="p",lf="ac",v0="websocket",w0="long_polling";/**
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
 */class I0{constructor(e,t,s,r,i=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function WB(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function E0(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let s;if(e===v0)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===w0)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WB(n)&&(t.ns=n.namespace);const r=[];return ze(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class qB{constructor(){this.counters_={}}incrementCounter(e,t=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return GD(this.counters_)}}/**
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
 */const od={},ad={};function $m(n){const e=n.toString();return od[e]||(od[e]=new qB),od[e]}function $B(n,e){const t=n.toString();return ad[t]||(ad[t]=e()),ad[t]}/**
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
 */class jB{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&co(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const P_="start",GB="close",HB="pLPCommand",YB="pRTLPCB",T0="id",b0="pw",S0="ser",zB="cb",KB="seg",QB="ts",JB="d",XB="dframe",C0=1870,k0=30,ZB=C0-k0,eW=25e3,tW=3e4;class gs{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vc(e),this.stats_=$m(t),this.urlFn=c=>(this.appCheckToken&&(c[lf]=this.appCheckToken),E0(t,w0,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new jB(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tW)),xB(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jm((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===P_)this.id=a,this.password=c;else if(o===GB)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[P_]="t",s[S0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zB]=this.scriptTagHolder.uniqueCallbackIdentifier),s[d0]=qm,this.transportSessionId&&(s[f0]=this.transportSessionId),this.lastSessionId&&(s[y0]=this.lastSessionId),this.applicationId&&(s[_0]=this.applicationId),this.appCheckToken&&(s[lf]=this.appCheckToken),typeof location<"u"&&location.hostname&&g0.test(location.hostname)&&(s[p0]=m0);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PB()&&!MB()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Aw(t),r=l0(s,ZB);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[XB]="t",s[T0]=e,s[b0]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jm{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=o0(),window[HB+this.uniqueCallbackIdentifier]=e,window[YB+this.uniqueCallbackIdentifier]=t,this.myIFrame=jm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[T0]=this.myID,e[b0]=this.myPW,e[S0]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+k0+s.length<=C0;){const o=this.pendingSegs.shift();s=s+"&"+KB+r+"="+o.seg+"&"+QB+r+"="+o.ts+"&"+JB+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(eW)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const nW=16384,sW=45e3;let ql=null;typeof MozWebSocket<"u"?ql=MozWebSocket:typeof WebSocket<"u"&&(ql=WebSocket);class $t{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vc(this.connId),this.stats_=$m(t),this.connURL=$t.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[d0]=qm,typeof location<"u"&&location.hostname&&g0.test(location.hostname)&&(o[p0]=m0),t&&(o[f0]=t),s&&(o[y0]=s),r&&(o[lf]=r),i&&(o[_0]=i),E0(e,v0,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let s;Rw(),this.mySock=new ql(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ql!==null&&!$t.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ia(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=l0(t,nW);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sW))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$t&&$t.isAvailable();let s=t&&!$t.previouslyFailed();if(e.webSocketOnly&&(t||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const r=this.transports_=[];for(const i of Fi.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fi.globalTransportInitialized_=!1;/**
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
 */const rW=6e4,iW=5e3,oW=10*1024,aW=100*1024,cd="t",M_="d",cW="s",L_="r",lW="e",F_="o",U_="a",V_="n",B_="p",uW="h";class hW{constructor(e,t,s,r,i,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vc("c:"+this.id+":"),this.transportManager_=new Fi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aW?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oW?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cd in e){const t=e[cd];t===U_?this.upgradeIfSecondaryHealthy_():t===L_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===F_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Co("t",e),s=Co("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:B_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:U_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:V_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Co("t",e),s=Co("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Co(cd,e);if(M_ in e){const s=e[M_];if(t===uW)this.onHandshake_(s);else if(t===V_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cW?this.onConnectionShutdown_(s):t===L_?this.onReset_(s):t===lW?cf("Server Error: "+s):t===F_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cf("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qm!==s&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rW))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iW))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:B_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class A0{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class N0{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class $l extends N0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $l}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const W_=32,q_=768;class oe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ne(){return new oe("")}function G(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ps(n){return n.pieces_.length-n.pieceNum_}function ue(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new oe(n.pieces_,e)}function Gm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dW(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xa(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function D0(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new oe(e,0)}function Ie(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new oe(t,0)}function H(n){return n.pieceNum_>=n.pieces_.length}function _t(n,e){const t=G(n),s=G(e);if(t===null)return e;if(t===s)return _t(ue(n),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function fW(n,e){const t=xa(n,0),s=xa(e,0);for(let r=0;r<t.length&&r<s.length;r++){const i=Qr(t[r],s[r]);if(i!==0)return i}return t.length===s.length?0:t.length<s.length?-1:1}function Hm(n,e){if(Ps(n)!==Ps(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Gt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ps(n)>Ps(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class pW{constructor(e,t){this.errorPrefix_=t,this.parts_=xa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_u(this.parts_[s]);R0(this)}}function mW(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_u(e),R0(n)}function gW(n){const e=n.parts_.pop();n.byteLength_-=_u(e),n.parts_.length>0&&(n.byteLength_-=1)}function R0(n){if(n.byteLength_>q_)throw new Error(n.errorPrefix_+"has a key path longer than "+q_+" bytes ("+n.byteLength_+").");if(n.parts_.length>W_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+W_+") or object contains a cycle "+nr(n))}function nr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ym extends N0{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ym}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ko=1e3,yW=60*5*1e3,$_=30*1e3,_W=1.3,vW=3e4,wW="server_kill",j_=3;class Gn extends A0{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Gn.nextPersistentConnectionId_++,this.log_=vc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ko,this.maxReconnectDelay_=yW,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Rw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ym.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(Pe(i)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new bt,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;Gn.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lt(e,"w")){const s=Er(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=iR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cf("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ko,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ko,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vW&&(this.reconnectDelay_=ko),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_W)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Gn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new hW(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ht(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(wW)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ht(h),c())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pl(this.interruptReasons_)&&(this.reconnectDelay_=ko,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>Bm(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new oe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){$e("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=j_&&(this.reconnectDelay_=$_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$e("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=j_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+s0.replace(/\./g,"-")]=1,tp()?e["framework.cordova"]=1:yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$l.getInstance().currentlyOnline();return pl(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
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
 */class Y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Y(e,t)}}/**
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
 */class lh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Y(Jn,e),r=new Y(Jn,t);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
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
 */let Wc;class x0 extends lh{static get __EMPTY_NODE(){return Wc}static set __EMPTY_NODE(e){Wc=e}compare(e,t){return Qr(e.name,t.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(kn,Wc)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Wc)}toString(){return".key"}}const In=new x0;/**
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
 */class qc{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:qe.RED,this.left=r!=null?r:kt.EMPTY_NODE,this.right=i!=null?i:kt.EMPTY_NODE}copy(e,t,s,r,i){return new qe(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class IW{copy(e,t,s,r,i){return this}insert(e,t,s){return new qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,t=kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qc(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new IW;/**
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
 */function EW(n,e){return Qr(n.name,e.name)}function zm(n,e){return Qr(n,e)}/**
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
 */let uf;function TW(n){uf=n}const O0=function(n){return typeof n=="number"?"number:"+u0(n):"string:"+n},P0=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else b(n===uf||n.isEmpty(),"priority of unexpected type.");b(n===uf||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let G_;class Ue{constructor(e,t=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),P0(this.priorityNode_)}static set __childrenNodeConstructor(e){G_=e}static get __childrenNodeConstructor(){return G_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:G(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=G(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+O0(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=u0(this.value_):e+=this.value_,this.lazyHash_=a0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=Ue.VALUE_TYPE_ORDER.indexOf(t),i=Ue.VALUE_TYPE_ORDER.indexOf(s);return b(r>=0,"Unknown leaf type: "+t),b(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let M0,L0;function bW(n){M0=n}function SW(n){L0=n}class CW extends lh{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Qr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(kn,new Ue("[PRIORITY-POST]",L0))}makePost(e,t){const s=M0(e);return new Y(t,new Ue("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new CW;/**
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
 */const kW=Math.log(2);class AW{constructor(e){const t=i=>parseInt(Math.log(i)/kW,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jl=function(n,e,t,s){n.sort(e);const r=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new qe(d,h.node,qe.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=r(c,f),g=r(f+1,l);return h=n[f],d=t?t(h):h,new qe(d,h.node,qe.BLACK,p,g)}},i=function(c){let l=null,u=null,h=n.length;const d=function(p,g){const T=h-p,C=h;h-=p;const O=r(T+1,C),B=n[T],K=t?t(B):B;f(new qe(K,B.node,g,null,O))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),T=Math.pow(2,c.count-(p+1));g?d(T,qe.BLACK):(d(T,qe.BLACK),d(T,qe.RED))}return u},o=new AW(n.length),a=i(o);return new kt(s||e,a)};/**
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
 */let ld;const ii={};class Vn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(ii&&fe,"ChildrenNode.ts has not been loaded"),ld=ld||new Vn({".priority":ii},{".priority":fe}),ld}get(e){const t=Er(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kt?t:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,t){b(e!==In,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=jl(s,e.getCompare()):a=ii;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Vn(u,l)}addToIndexes(e,t){const s=ml(this.indexes_,(r,i)=>{const o=Er(this.indexSet_,i);if(b(o,"Missing index implementation for "+i),r===ii)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Y.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),jl(a,o.getCompare())}else return ii;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Y(e.name,a))),c.insert(e,e.node)}});return new Vn(s,this.indexSet_)}removeFromIndexes(e,t){const s=ml(this.indexes_,r=>{if(r===ii)return r;{const i=t.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new Vn(s,this.indexSet_)}}/**
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
 */let Ao;class L{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&P0(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ao||(Ao=new L(new kt(zm),null,Vn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ao}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ao:t}}getChild(e){const t=G(e);return t===null?this:this.getImmediateChild(t).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Y(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ao:this.priorityNode_;return new L(r,o,i)}}updateChild(e,t){const s=G(e);if(s===null)return t;{b(G(e)!==".priority"||Ps(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ue(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(fe,(o,a)=>{t[o]=a.val(e),s++,i&&L.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+O0(this.getPriority().val())+":"),this.forEachChild(fe,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":a0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wc?-1:0}withIndex(e){if(e===In||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===In||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fe),r=t.getIterator(fe);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===In?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NW extends L{constructor(){super(new kt(zm),L.EMPTY_NODE,Vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const wc=new NW;Object.defineProperties(Y,{MIN:{value:new Y(Jn,L.EMPTY_NODE)},MAX:{value:new Y(kn,wc)}});x0.__EMPTY_NODE=L.EMPTY_NODE;Ue.__childrenNodeConstructor=L;TW(wc);SW(wc);/**
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
 */const DW=!0;function Te(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ue(t,Te(e))}if(!(n instanceof Array)&&DW){const t=[];let s=!1;if(ze(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Te(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Y(o,c)))}}),t.length===0)return L.EMPTY_NODE;const i=jl(t,EW,o=>o.name,zm);if(s){const o=jl(t,fe.getCompare());return new L(i,Te(e),new Vn({".priority":o},{".priority":fe}))}else return new L(i,Te(e),Vn.Default)}else{let t=L.EMPTY_NODE;return ze(n,(s,r)=>{if(Lt(n,s)&&s.substring(0,1)!=="."){const i=Te(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(Te(e))}}bW(Te);/**
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
 */class Km extends lh{constructor(e){super(),this.indexPath_=e,b(!H(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Qr(e.name,t.name):i}makePost(e,t){const s=Te(e),r=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(t,r)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,wc);return new Y(kn,e)}toString(){return xa(this.indexPath_,0).join("/")}}/**
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
 */class RW extends lh{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Qr(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const s=Te(e);return new Y(t,s)}toString(){return".value"}}const Qm=new RW;/**
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
 */const Ui="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hf="-",F0="z",U0=786,xW=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=Ui.charAt(t%64),t=Math.floor(t/64);b(t===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Ui.charAt(e[r]);return b(o.length===20,"nextPushId: Length should be 20."),o}}(),H_=function(n){if(n===""+Wm)return hf;const e=Wl(n);if(e!=null)return""+(e+1);const t=new Array(n.length);for(let o=0;o<t.length;o++)t[o]=n.charAt(o);if(t.length<U0)return t.push(hf),t.join("");let s=t.length-1;for(;s>=0&&t[s]===F0;)s--;if(s===-1)return kn;const r=t[s],i=Ui.charAt(Ui.indexOf(r)+1);return t[s]=i,t.slice(0,s+1).join("")},Y_=function(n){if(n===""+h0)return Jn;const e=Wl(n);if(e!=null)return""+(e-1);const t=new Array(n.length);for(let s=0;s<t.length;s++)t[s]=n.charAt(s);return t[t.length-1]===hf?t.length===1?""+Wm:(delete t[t.length-1],t.join("")):(t[t.length-1]=Ui.charAt(Ui.indexOf(t[t.length-1])-1),t.join("")+F0.repeat(U0-t.length))};/**
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
 */function V0(n){return{type:"value",snapshotNode:n}}function Vi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Oa(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Pa(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function OW(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Jm{constructor(e){this.index_=e}updateChild(e,t,s,r,i,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Oa(t,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vi(t,s)):o.trackChildChange(Pa(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(r,i)=>{t.hasChild(r)||s.trackChildChange(Oa(r,i))}),t.isLeafNode()||t.forEachChild(fe,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Pa(r,i,o))}else s.trackChildChange(Vi(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ma{constructor(e){this.indexedFilter_=new Jm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ma.getStartPost_(e),this.endPost_=Ma.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,s,r,i,o){return this.matches(new Y(t,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,r,i,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=L.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(L.EMPTY_NODE);const i=this;return t.forEachChild(fe,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class PW{constructor(e){this.rangedFilter_=new Ma(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,s,r,i,o){return this.rangedFilter_.matches(new Y(t,s))||(s=L.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,r,i,o):this.fullLimitUpdateChild_(e,t,s,i,o)}updateFullNode(e,t,s){let r;if(t.isLeafNode()||t.isEmpty())r=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=L.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(L.EMPTY_NODE);let i,o,a,c;if(this.reverse_){c=r.getReverseIterator(this.index_),i=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=r.getIterator(this.index_),i=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(i,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:r=r.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const c=new Y(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return i!=null&&i.trackChildChange(Pa(t,s,h)),a.updateImmediateChild(t,s);{i!=null&&i.trackChildChange(Oa(t,h));const g=a.updateImmediateChild(t,L.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Vi(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(l,c)>=0?(i!=null&&(i.trackChildChange(Oa(l.name,l.node)),i.trackChildChange(Vi(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,L.EMPTY_NODE)):e}}/**
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
 */class uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new uh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MW(n){return n.loadsAllData()?new Jm(n.getIndex()):n.hasLimit()?new PW(n):new Ma(n)}function LW(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function FW(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function df(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function UW(n,e,t){let s;if(n.index_===In)typeof e=="string"&&(e=H_(e)),s=df(n,e,t);else{let r;t==null?r=kn:r=H_(t),s=df(n,e,r)}return s.startAfterSet_=!0,s}function ff(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function VW(n,e,t){let s,r;return n.index_===In?(typeof e=="string"&&(e=Y_(e)),r=ff(n,e,t)):(t==null?s=Jn:s=Y_(t),r=ff(n,e,s)),r.endBeforeSet_=!0,r}function hh(n,e){const t=n.copy();return t.index_=e,t}function z_(n){const e={};if(n.isDefault())return e;let t;return n.index_===fe?t="$priority":n.index_===Qm?t="$value":n.index_===In?t="$key":(b(n.index_ instanceof Km,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pe(t),n.startSet_&&(e.startAt=Pe(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+Pe(n.indexStartName_))),n.endSet_&&(e.endAt=Pe(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+Pe(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function K_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fe&&(e.i=n.index_.toString()),e}/**
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
 */class Gl extends A0{constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=vc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Gl.getListenId_(e,s),a={};this.listens_[o]=a;const c=z_(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(i,h,!1,s),Er(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",r(d,null)}})}unlisten(e,t){const s=Gl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=z_(e._queryParams),s=e._path.toString(),r=new bt;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ia(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class BW{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Hl(){return{value:null,children:new Map}}function lo(n,e,t){if(H(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=G(e);n.children.has(s)||n.children.set(s,Hl());const r=n.children.get(s);e=ue(e),lo(r,e,t)}}function pf(n,e){if(H(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(fe,(s,r)=>{lo(n,new oe(s),r)}),pf(n,e)}}else if(n.children.size>0){const t=G(e);return e=ue(e),n.children.has(t)&&pf(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function mf(n,e,t){n.value!==null?t(e,n.value):WW(n,(s,r)=>{const i=new oe(e.toString()+"/"+s);mf(r,i,t)})}function WW(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class qW{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ze(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
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
 */const Q_=10*1e3,$W=30*1e3,jW=5*60*1e3;class GW{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qW(e);const s=Q_+($W-Q_)*Math.random();zo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ze(e,(r,i)=>{i>0&&Lt(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*jW))}}/**
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
 */var tn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function Xm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eg(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Yl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=tn.ACK_USER_WRITE,this.source=Xm()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new oe(e));return new Yl(ne(),t,this.revert)}}else return b(G(this.path)===e,"operationForChild called for unrelated child."),new Yl(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class La{constructor(e,t){this.source=e,this.path=t,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new La(this.source,ne()):new La(this.source,ue(this.path))}}/**
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
 */class Lr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=tn.OVERWRITE}operationForChild(e){return H(this.path)?new Lr(this.source,ne(),this.snap.getImmediateChild(e)):new Lr(this.source,ue(this.path),this.snap)}}/**
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
 */class Bi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=tn.MERGE}operationForChild(e){if(H(this.path)){const t=this.children.subtree(new oe(e));return t.isEmpty()?null:t.value?new Lr(this.source,ne(),t.value):new Bi(this.source,ne(),t)}else return b(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ms{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const t=G(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class HW{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function YW(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(OW(o.childName,o.snapshotNode))}),No(n,r,"child_removed",e,s,t),No(n,r,"child_added",e,s,t),No(n,r,"child_moved",i,s,t),No(n,r,"child_changed",e,s,t),No(n,r,"value",e,s,t),r}function No(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>KW(n,a,c)),o.forEach(a=>{const c=zW(n,a,i);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function zW(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function KW(n,e,t){if(e.childName==null||t.childName==null)throw Hi("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
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
 */function dh(n,e){return{eventCache:n,serverCache:e}}function Ko(n,e,t,s){return dh(new Ms(e,t,s),n.serverCache)}function B0(n,e,t,s){return dh(n.eventCache,new Ms(e,t,s))}function zl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Fr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ud;const QW=()=>(ud||(ud=new kt(OB)),ud);class he{constructor(e,t=QW()){this.value=e,this.children=t}static fromObject(e){let t=new he(null);return ze(e,(s,r)=>{t=t.set(new oe(s),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ne(),value:this.value};if(H(e))return null;{const s=G(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ue(e),t);return i!=null?{path:Ie(new oe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const t=G(e),s=this.children.get(t);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,t){if(H(e))return new he(t,this.children);{const s=G(e),i=(this.children.get(s)||new he(null)).set(ue(e),t),o=this.children.insert(s,i);return new he(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const t=G(e),s=this.children.get(t);if(s){const r=s.remove(ue(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new he(null):new he(this.value,i)}else return this}}get(e){if(H(e))return this.value;{const t=G(e),s=this.children.get(t);return s?s.get(ue(e)):null}}setTree(e,t){if(H(e))return t;{const s=G(e),i=(this.children.get(s)||new he(null)).setTree(ue(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new he(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ie(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ne(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(H(e))return null;{const i=G(e),o=this.children.get(i);return o?o.findOnPath_(ue(e),Ie(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ne(),t)}foreachOnPath_(e,t,s){if(H(e))return this;{this.value&&s(t,this.value);const r=G(e),i=this.children.get(r);return i?i.foreachOnPath_(ue(e),Ie(t,r),s):new he(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(Ie(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new he(null))}}function Qo(n,e,t){if(H(e))return new sn(new he(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=_t(r,e);return i=i.updateChild(o,t),new sn(n.writeTree_.set(r,i))}else{const r=new he(t),i=n.writeTree_.setTree(e,r);return new sn(i)}}}function gf(n,e,t){let s=n;return ze(t,(r,i)=>{s=Qo(s,Ie(e,r),i)}),s}function J_(n,e){if(H(e))return sn.empty();{const t=n.writeTree_.setTree(e,new he(null));return new sn(t)}}function yf(n,e){return Jr(n,e)!=null}function Jr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(_t(t.path,e)):null}function X_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fe,(s,r)=>{e.push(new Y(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function Is(n,e){if(H(e))return n;{const t=Jr(n,e);return t!=null?new sn(new he(t)):new sn(n.writeTree_.subtree(e))}}function _f(n){return n.writeTree_.isEmpty()}function Wi(n,e){return W0(ne(),n.writeTree_,e)}function W0(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(b(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=W0(Ie(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ie(n,".priority"),s)),t}}/**
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
 */function fh(n,e){return G0(e,n)}function JW(n,e,t,s,r){b(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=Qo(n.visibleWrites,e,t)),n.lastWriteId=s}function XW(n,e,t,s){b(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=gf(n.visibleWrites,e,t),n.lastWriteId=s}function ZW(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function eq(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tq(a,s.path)?r=!1:Gt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return nq(n),!0;if(s.snap)n.visibleWrites=J_(n.visibleWrites,s.path);else{const a=s.children;ze(a,c=>{n.visibleWrites=J_(n.visibleWrites,Ie(s.path,c))})}return!0}else return!1}function tq(n,e){if(n.snap)return Gt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Gt(Ie(n.path,t),e))return!0;return!1}function nq(n){n.visibleWrites=q0(n.allWrites,sq,ne()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sq(n){return n.visible}function q0(n,e,t){let s=sn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)Gt(t,o)?(a=_t(t,o),s=Qo(s,a,i.snap)):Gt(o,t)&&(a=_t(o,t),s=Qo(s,ne(),i.snap.getChild(a)));else if(i.children){if(Gt(t,o))a=_t(t,o),s=gf(s,a,i.children);else if(Gt(o,t))if(a=_t(o,t),H(a))s=gf(s,ne(),i.children);else{const c=Er(i.children,G(a));if(c){const l=c.getChild(ue(a));s=Qo(s,ne(),l)}}}else throw Hi("WriteRecord should have .snap or .children")}}return s}function $0(n,e,t,s,r){if(!s&&!r){const i=Jr(n.visibleWrites,e);if(i!=null)return i;{const o=Is(n.visibleWrites,e);if(_f(o))return t;if(t==null&&!yf(o,ne()))return null;{const a=t||L.EMPTY_NODE;return Wi(o,a)}}}else{const i=Is(n.visibleWrites,e);if(!r&&_f(i))return t;if(!r&&t==null&&!yf(i,ne()))return null;{const o=function(l){return(l.visible||r)&&(!s||!~s.indexOf(l.writeId))&&(Gt(l.path,e)||Gt(e,l.path))},a=q0(n.allWrites,o,e),c=t||L.EMPTY_NODE;return Wi(a,c)}}}function rq(n,e,t){let s=L.EMPTY_NODE;const r=Jr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(fe,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Is(n.visibleWrites,e);return t.forEachChild(fe,(o,a)=>{const c=Wi(Is(i,new oe(o)),a);s=s.updateImmediateChild(o,c)}),X_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Is(n.visibleWrites,e);return X_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iq(n,e,t,s,r){b(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ie(e,t);if(yf(n.visibleWrites,i))return null;{const o=Is(n.visibleWrites,i);return _f(o)?r.getChild(t):Wi(o,r.getChild(t))}}function oq(n,e,t,s){const r=Ie(e,t),i=Jr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Is(n.visibleWrites,r);return Wi(o,s.getNode().getImmediateChild(t))}else return null}function aq(n,e){return Jr(n.visibleWrites,e)}function cq(n,e,t,s,r,i,o){let a;const c=Is(n.visibleWrites,e),l=Jr(c,ne());if(l!=null)a=l;else if(t!=null)a=Wi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<r;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function lq(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Kl(n,e,t,s){return $0(n.writeTree,n.treePath,e,t,s)}function tg(n,e){return rq(n.writeTree,n.treePath,e)}function Z_(n,e,t,s){return iq(n.writeTree,n.treePath,e,t,s)}function Ql(n,e){return aq(n.writeTree,Ie(n.treePath,e))}function uq(n,e,t,s,r,i){return cq(n.writeTree,n.treePath,e,t,s,r,i)}function ng(n,e,t){return oq(n.writeTree,n.treePath,e,t)}function j0(n,e){return G0(Ie(n.treePath,e),n.writeTree)}function G0(n,e){return{treePath:n,writeTree:e}}/**
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
 */class hq{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Pa(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,Oa(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,Vi(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Pa(s,e.snapshotNode,r.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class dq{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const H0=new dq;class sg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ms(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ng(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fr(this.viewCache_),i=uq(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function fq(n){return{filter:n}}function pq(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mq(n,e,t,s,r){const i=new hq;let o,a;if(t.type===tn.OVERWRITE){const l=t;l.source.fromUser?o=vf(n,e,l.path,l.snap,s,r,i):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!H(l.path),o=Jl(n,e,l.path,l.snap,s,r,a,i))}else if(t.type===tn.MERGE){const l=t;l.source.fromUser?o=yq(n,e,l.path,l.children,s,r,i):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=wf(n,e,l.path,l.children,s,r,a,i))}else if(t.type===tn.ACK_USER_WRITE){const l=t;l.revert?o=wq(n,e,l.path,s,r,i):o=_q(n,e,l.path,l.affectedTree,s,r,i)}else if(t.type===tn.LISTEN_COMPLETE)o=vq(n,e,t.path,s,i);else throw Hi("Unknown operation type: "+t.type);const c=i.getChanges();return gq(e,o,c),{viewCache:o,changes:c}}function gq(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=zl(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(V0(zl(e)))}}function Y0(n,e,t,s,r,i){const o=e.eventCache;if(Ql(s,t)!=null)return e;{let a,c;if(H(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Fr(e),u=l instanceof L?l:L.EMPTY_NODE,h=tg(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const l=Kl(s,Fr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=G(t);if(l===".priority"){b(Ps(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Z_(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Z_(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=ng(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,r,i):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||H(t),n.filter.filtersNodes())}}function Jl(n,e,t,s,r,i,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(H(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=G(t);if(!c.isCompleteForPath(t)&&Ps(t)>1)return e;const p=ue(t),T=c.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?l=u.updatePriority(c.getNode(),T):l=u.updateChild(c.getNode(),f,T,p,H0,null)}const h=B0(e,l,c.isFullyInitialized()||H(t),u.filtersNodes()),d=new sg(r,h,i);return Y0(n,h,t,r,d,a)}function vf(n,e,t,s,r,i,o){const a=e.eventCache;let c,l;const u=new sg(r,e,i);if(H(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ko(e,l,!0,n.filter.filtersNodes());else{const h=G(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Ko(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=ue(t),f=a.getNode().getImmediateChild(h);let p;if(H(d))p=s;else{const g=u.getCompleteChild(h);g!=null?Gm(d)===".priority"&&g.getChild(D0(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=L.EMPTY_NODE}if(f.equals(p))c=e;else{const g=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=Ko(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function ev(n,e){return n.eventCache.isCompleteForChild(e)}function yq(n,e,t,s,r,i,o){let a=e;return s.foreach((c,l)=>{const u=Ie(t,c);ev(e,G(u))&&(a=vf(n,a,u,l,r,i,o))}),s.foreach((c,l)=>{const u=Ie(t,c);ev(e,G(u))||(a=vf(n,a,u,l,r,i,o))}),a}function tv(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function wf(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;H(t)?l=s:l=new he(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=tv(n,f,d);c=Jl(n,c,new oe(h),p,r,i,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=tv(n,p,d);c=Jl(n,c,new oe(h),g,r,i,o,a)}}),c}function _q(n,e,t,s,r,i,o){if(Ql(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(H(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Jl(n,e,t,c.getNode().getChild(t),r,i,a,o);if(H(t)){let l=new he(null);return c.getNode().forEachChild(In,(u,h)=>{l=l.set(new oe(u),h)}),wf(n,e,t,l,r,i,a,o)}else return e}else{let l=new he(null);return s.foreach((u,h)=>{const d=Ie(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),wf(n,e,t,l,r,i,a,o)}}function vq(n,e,t,s,r){const i=e.serverCache,o=B0(e,i.getNode(),i.isFullyInitialized()||H(t),i.isFiltered());return Y0(n,o,t,s,H0,r)}function wq(n,e,t,s,r,i){let o;if(Ql(s,t)!=null)return e;{const a=new sg(s,e,r),c=e.eventCache.getNode();let l;if(H(t)||G(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Kl(s,Fr(e));else{const h=e.serverCache.getNode();b(h instanceof L,"serverChildren would be complete if leaf node"),u=tg(s,h)}u=u,l=n.filter.updateFullNode(c,u,i)}else{const u=G(t);let h=ng(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,ue(t),a,i):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,L.EMPTY_NODE,ue(t),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kl(s,Fr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||Ql(s,ne())!=null,Ko(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Iq{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new Jm(s.getIndex()),i=MW(s);this.processor_=fq(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(L.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new Ms(c,o.isFullyInitialized(),r.filtersNodes()),h=new Ms(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=dh(h,u),this.eventGenerator_=new HW(this.query_)}get query(){return this.query_}}function Eq(n){return n.viewCache_.serverCache.getNode()}function Tq(n){return zl(n.viewCache_)}function bq(n,e){const t=Fr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!H(e)&&!t.getImmediateChild(G(e)).isEmpty())?t.getChild(e):null}function nv(n){return n.eventRegistrations_.length===0}function Sq(n,e){n.eventRegistrations_.push(e)}function sv(n,e,t){const s=[];if(t){b(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return s}function rv(n,e,t,s){e.type===tn.MERGE&&e.source.queryId!==null&&(b(Fr(n.viewCache_),"We should always have a full cache before handling merges"),b(zl(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=mq(n.processor_,r,e,t,s);return pq(n.processor_,i.viewCache),b(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,z0(n,i.changes,i.viewCache.eventCache.getNode(),null)}function Cq(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(fe,(i,o)=>{s.push(Vi(i,o))}),t.isFullyInitialized()&&s.push(V0(t.getNode())),z0(n,s,t.getNode(),e)}function z0(n,e,t,s){const r=s?[s]:n.eventRegistrations_;return YW(n.eventGenerator_,e,t,r)}/**
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
 */let Xl;class K0{constructor(){this.views=new Map}}function kq(n){b(!Xl,"__referenceConstructor has already been defined"),Xl=n}function Aq(){return b(Xl,"Reference.ts has not been loaded"),Xl}function Nq(n){return n.views.size===0}function rg(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return b(i!=null,"SyncTree gave us an op for an invalid query."),rv(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(rv(o,e,t,s));return i}}function Q0(n,e,t,s,r){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=Kl(t,r?s:null),c=!1;a?c=!0:s instanceof L?(a=tg(t,s),c=!1):(a=L.EMPTY_NODE,c=!1);const l=dh(new Ms(a,c,!1),new Ms(s,r,!1));return new Iq(e,l)}return o}function Dq(n,e,t,s,r,i){const o=Q0(n,e,s,r,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Sq(o,t),Cq(o,t)}function Rq(n,e,t,s){const r=e._queryIdentifier,i=[];let o=[];const a=Ls(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(sv(l,t,s)),nv(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||i.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(sv(c,t,s)),nv(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!Ls(n)&&i.push(new(Aq())(e._repo,e._path)),{removed:i,events:o}}function J0(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Es(n,e){let t=null;for(const s of n.views.values())t=t||bq(s,e);return t}function X0(n,e){if(e._queryParams.loadsAllData())return ph(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Z0(n,e){return X0(n,e)!=null}function Ls(n){return ph(n)!=null}function ph(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zl;function xq(n){b(!Zl,"__referenceConstructor has already been defined"),Zl=n}function Oq(){return b(Zl,"Reference.ts has not been loaded"),Zl}let Pq=1;class iv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=lq(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ig(n,e,t,s,r){return JW(n.pendingWriteTree_,e,t,s,r),r?uo(n,new Lr(Xm(),e,t)):[]}function Mq(n,e,t,s){XW(n.pendingWriteTree_,e,t,s);const r=he.fromObject(t);return uo(n,new Bi(Xm(),e,r))}function ys(n,e,t=!1){const s=ZW(n.pendingWriteTree_,e);if(eq(n.pendingWriteTree_,e)){let i=new he(null);return s.snap!=null?i=i.set(ne(),!0):ze(s.children,o=>{i=i.set(new oe(o),!0)}),uo(n,new Yl(s.path,i,t))}else return[]}function Ic(n,e,t){return uo(n,new Lr(Zm(),e,t))}function Lq(n,e,t){const s=he.fromObject(t);return uo(n,new Bi(Zm(),e,s))}function Fq(n,e){return uo(n,new La(Zm(),e))}function Uq(n,e,t){const s=og(n,t);if(s){const r=ag(s),i=r.path,o=r.queryId,a=_t(i,e),c=new La(eg(o),a);return cg(n,i,c)}else return[]}function eu(n,e,t,s,r=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Z0(o,e))){const c=Rq(o,e,t,s);Nq(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const l=c.removed;if(a=c.events,!r){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(i,(d,f)=>Ls(f));if(u&&!h){const d=n.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=Wq(d);for(let p=0;p<f.length;++p){const g=f[p],T=g.query,C=sS(n,g);n.listenProvider_.startListening(Jo(T),Fa(n,T),C.hashFn,C.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(Jo(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(gh(d));n.listenProvider_.stopListening(Jo(d),f)}))}qq(n,l)}return a}function eS(n,e,t,s){const r=og(n,s);if(r!=null){const i=ag(r),o=i.path,a=i.queryId,c=_t(o,e),l=new Lr(eg(a),c,t);return cg(n,o,l)}else return[]}function Vq(n,e,t,s){const r=og(n,s);if(r){const i=ag(r),o=i.path,a=i.queryId,c=_t(o,e),l=he.fromObject(t),u=new Bi(eg(a),c,l);return cg(n,o,u)}else return[]}function If(n,e,t,s=!1){const r=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,f)=>{const p=_t(d,r);i=i||Es(f,p),o=o||Ls(f)});let a=n.syncPointTree_.get(r);a?(o=o||Ls(a),i=i||Es(a,ne())):(a=new K0,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=L.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,p)=>{const g=Es(p,ne());g&&(i=i.updateImmediateChild(f,g))}));const l=Z0(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=gh(e);b(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=$q();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=fh(n.pendingWriteTree_,r);let h=Dq(a,e,t,u,i,c);if(!l&&!o&&!s){const d=X0(a,e);h=h.concat(jq(n,e,d))}return h}function mh(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=_t(o,e),l=Es(a,c);if(l)return l});return $0(r,e,i,t,!0)}function Bq(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=_t(l,t);s=s||Es(u,h)});let r=n.syncPointTree_.get(t);r?s=s||Es(r,ne()):(r=new K0,n.syncPointTree_=n.syncPointTree_.set(t,r));const i=s!=null,o=i?new Ms(s,!0,!1):null,a=fh(n.pendingWriteTree_,e._path),c=Q0(r,e,a,i?o.getNode():L.EMPTY_NODE,i);return Tq(c)}function uo(n,e){return tS(e,n.syncPointTree_,null,fh(n.pendingWriteTree_,ne()))}function tS(n,e,t,s){if(H(n.path))return nS(n,e,t,s);{const r=e.get(ne());t==null&&r!=null&&(t=Es(r,ne()));let i=[];const o=G(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=j0(s,o);i=i.concat(tS(a,c,l,u))}return r&&(i=i.concat(rg(r,n,s,t))),i}}function nS(n,e,t,s){const r=e.get(ne());t==null&&r!=null&&(t=Es(r,ne()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=j0(s,o),u=n.operationForChild(o);u&&(i=i.concat(nS(u,a,c,l)))}),r&&(i=i.concat(rg(r,n,s,t))),i}function sS(n,e){const t=e.query,s=Fa(n,t);return{hashFn:()=>(Eq(e)||L.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?Uq(n,t._path,s):Fq(n,t._path);{const i=LB(r,t);return eu(n,t,null,i)}}}}function Fa(n,e){const t=gh(e);return n.queryToTagMap.get(t)}function gh(n){return n._path.toString()+"$"+n._queryIdentifier}function og(n,e){return n.tagToQueryMap.get(e)}function ag(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new oe(n.substr(0,e))}}function cg(n,e,t){const s=n.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const r=fh(n.pendingWriteTree_,e);return rg(s,t,r,null)}function Wq(n){return n.fold((e,t,s)=>{if(t&&Ls(t))return[ph(t)];{let r=[];return t&&(r=J0(t)),ze(s,(i,o)=>{r=r.concat(o)}),r}})}function Jo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Oq())(n._repo,n._path):n}function qq(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const r=gh(s),i=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(i)}}}function $q(){return Pq++}function jq(n,e,t){const s=e._path,r=Fa(n,e),i=sS(n,t),o=n.listenProvider_.startListening(Jo(e),r,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(s);if(r)b(!Ls(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!H(l)&&u&&Ls(u))return[ph(u).query];{let d=[];return u&&(d=d.concat(J0(u).map(f=>f.query))),ze(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Jo(u),Fa(n,u))}}return o}/**
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
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lg(t)}node(){return this.node_}}class ug{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ie(this.path_,e);return new ug(this.syncTree_,t)}node(){return mh(this.syncTree_,this.path_)}}const Gq=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ov=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Hq(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yq(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Hq=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},Yq=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const r=e.node();if(b(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},rS=function(n,e,t,s){return dg(e,new ug(t,n),s)},hg=function(n,e,t){return dg(n,new lg(e),t)};function dg(n,e,t){const s=n.getPriority().val(),r=ov(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=ov(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Ue(a,Te(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ue(r))),o.forEachChild(fe,(a,c)=>{const l=dg(c,e.getImmediateChild(a),t);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
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
 */class fg{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function yh(n,e){let t=e instanceof oe?e:new oe(e),s=n,r=G(t);for(;r!==null;){const i=Er(s.node.children,r)||{children:{},childCount:0};s=new fg(r,s,i),t=ue(t),r=G(t)}return s}function Xr(n){return n.node.value}function pg(n,e){n.node.value=e,Ef(n)}function iS(n){return n.node.childCount>0}function zq(n){return Xr(n)===void 0&&!iS(n)}function _h(n,e){ze(n.node.children,(t,s)=>{e(new fg(t,n,s))})}function oS(n,e,t,s){t&&!s&&e(n),_h(n,r=>{oS(r,e,!0,s)}),t&&s&&e(n)}function Kq(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ec(n){return new oe(n.parent===null?n.name:Ec(n.parent)+"/"+n.name)}function Ef(n){n.parent!==null&&Qq(n.parent,n.name,n)}function Qq(n,e,t){const s=zq(t),r=Lt(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,Ef(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Ef(n))}/**
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
 */const Jq=/[\[\].#$\/\u0000-\u001F\u007F]/,Xq=/[\[\].#$\u0000-\u001F\u007F]/,hd=10*1024*1024,vh=function(n){return typeof n=="string"&&n.length!==0&&!Jq.test(n)},aS=function(n){return typeof n=="string"&&n.length!==0&&!Xq.test(n)},Zq=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aS(n)},Ua=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ch(n)||n&&typeof n=="object"&&Lt(n,".sv")},An=function(n,e,t,s){s&&e===void 0||Tc(At(n,"value"),e,t)},Tc=function(n,e,t){const s=t instanceof oe?new pW(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nr(s));if(typeof e=="function")throw new Error(n+"contains a function "+nr(s)+" with contents = "+e.toString());if(ch(e))throw new Error(n+"contains "+e.toString()+" "+nr(s));if(typeof e=="string"&&e.length>hd/3&&_u(e)>hd)throw new Error(n+"contains a string greater than "+hd+" utf8 bytes "+nr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(ze(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!vh(o)))throw new Error(n+" contains an invalid key ("+o+") "+nr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mW(s,o),Tc(n,a,s),gW(s)}),r&&i)throw new Error(n+' contains ".value" child '+nr(s)+" in addition to actual children.")}},e$=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const i=xa(s);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!vh(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fW);let r=null;for(t=0;t<e.length;t++){if(s=e[t],r!==null&&Gt(r,s))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}},cS=function(n,e,t,s){if(s&&e===void 0)return;const r=At(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];ze(e,(o,a)=>{const c=new oe(o);if(Tc(r,a,Ie(t,c)),Gm(c)===".priority"&&!Ua(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),e$(r,i)},mg=function(n,e,t){if(!(t&&e===void 0)){if(ch(e))throw new Error(At(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ua(e))throw new Error(At(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},bc=function(n,e,t,s){if(!(s&&t===void 0)&&!vh(t))throw new Error(At(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Va=function(n,e,t,s){if(!(s&&t===void 0)&&!aS(t))throw new Error(At(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},t$=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Va(n,e,t,s)},Ht=function(n,e){if(G(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},lS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zq(t))throw new Error(At(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class n${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wh(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!Hm(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function uS(n,e,t){wh(n,t),hS(n,s=>Hm(s,e))}function Bt(n,e,t){wh(n,t),hS(n,s=>Gt(s,e)||Gt(e,s))}function hS(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(s$(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function s$(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();wr&&$e("event: "+t.toString()),co(s)}}}/**
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
 */const dS="repo_interrupt",r$=25;class i${constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new n$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hl(),this.transactionQueueTree_=new fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o$(n,e,t){if(n.stats_=$m(n.repoInfo_),n.forceRestClient_||UB())n.server_=new Gl(n.repoInfo_,(s,r,i,o)=>{av(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cv(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Gn(n.repoInfo_,e,(s,r,i,o)=>{av(n,s,r,i,o)},s=>{cv(n,s)},s=>{a$(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=$B(n.repoInfo_,()=>new GW(n.stats_,n.server_)),n.infoData_=new BW,n.infoSyncTree_=new iv({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Ic(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gg(n,"connected",!1),n.serverSyncTree_=new iv({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const l=o(a,c);Bt(n.eventQueue_,s._path,l)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function fS(n){const t=n.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Sc(n){return Gq({timestamp:fS(n)})}function av(n,e,t,s,r){n.dataUpdateCount++;const i=new oe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=ml(t,l=>Te(l));o=Vq(n.serverSyncTree_,i,c,r)}else{const c=Te(t);o=eS(n.serverSyncTree_,i,c,r)}else if(s){const c=ml(t,l=>Te(l));o=Lq(n.serverSyncTree_,i,c)}else{const c=Te(t);o=Ic(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=qi(n,i)),Bt(n.eventQueue_,a,o)}function cv(n,e){gg(n,"connected",e),e===!1&&u$(n)}function a$(n,e){ze(e,(t,s)=>{gg(n,t,s)})}function gg(n,e,t){const s=new oe("/.info/"+e),r=Te(t);n.infoData_.updateSnapshot(s,r);const i=Ic(n.infoSyncTree_,s,r);Bt(n.eventQueue_,s,i)}function Ih(n){return n.nextWriteId_++}function c$(n,e,t){const s=Bq(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(r=>{const i=Te(r).withIndex(e._queryParams.getIndex());If(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ic(n.serverSyncTree_,e._path,i);else{const a=Fa(n.serverSyncTree_,e);o=eS(n.serverSyncTree_,e._path,i,a)}return Bt(n.eventQueue_,e._path,o),eu(n.serverSyncTree_,e,t,null,!0),i},r=>(ho(n,"get for query "+Pe(e)+" failed: "+r),Promise.reject(new Error(r))))}function yg(n,e,t,s,r){ho(n,"set",{path:e.toString(),value:t,priority:s});const i=Sc(n),o=Te(t,s),a=mh(n.serverSyncTree_,e),c=hg(o,a,i),l=Ih(n),u=ig(n.serverSyncTree_,e,c,l,!0);wh(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ht("set at "+e+" failed: "+d);const g=ys(n.serverSyncTree_,l,!p);Bt(n.eventQueue_,e,g),Fs(n,r,d,f)});const h=vg(n,e);qi(n,h),Bt(n.eventQueue_,h,[])}function l$(n,e,t,s){ho(n,"update",{path:e.toString(),value:t});let r=!0;const i=Sc(n),o={};if(ze(t,(a,c)=>{r=!1,o[a]=rS(Ie(e,a),Te(c),n.serverSyncTree_,i)}),r)$e("update() called with empty data.  Don't do anything."),Fs(n,s,"ok",void 0);else{const a=Ih(n),c=Mq(n.serverSyncTree_,e,o,a);wh(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||ht("update at "+e+" failed: "+l);const d=ys(n.serverSyncTree_,a,!h),f=d.length>0?qi(n,e):e;Bt(n.eventQueue_,f,d),Fs(n,s,l,u)}),ze(t,l=>{const u=vg(n,Ie(e,l));qi(n,u)}),Bt(n.eventQueue_,e,[])}}function u$(n){ho(n,"onDisconnectEvents");const e=Sc(n),t=Hl();mf(n.onDisconnect_,ne(),(r,i)=>{const o=rS(r,i,n.serverSyncTree_,e);lo(t,r,o)});let s=[];mf(t,ne(),(r,i)=>{s=s.concat(Ic(n.serverSyncTree_,r,i));const o=vg(n,r);qi(n,o)}),n.onDisconnect_=Hl(),Bt(n.eventQueue_,ne(),s)}function h$(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,r)=>{s==="ok"&&pf(n.onDisconnect_,e),Fs(n,t,s,r)})}function lv(n,e,t,s){const r=Te(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(i,o)=>{i==="ok"&&lo(n.onDisconnect_,e,r),Fs(n,s,i,o)})}function d$(n,e,t,s,r){const i=Te(t,s);n.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&lo(n.onDisconnect_,e,i),Fs(n,r,o,a)})}function f$(n,e,t,s){if(pl(t)){$e("onDisconnect().update() called with empty data.  Don't do anything."),Fs(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,i)=>{r==="ok"&&ze(t,(o,a)=>{const c=Te(a);lo(n.onDisconnect_,Ie(e,o),c)}),Fs(n,s,r,i)})}function p$(n,e,t){let s;G(e._path)===".info"?s=If(n.infoSyncTree_,e,t):s=If(n.serverSyncTree_,e,t),uS(n.eventQueue_,e._path,s)}function Tf(n,e,t){let s;G(e._path)===".info"?s=eu(n.infoSyncTree_,e,t):s=eu(n.serverSyncTree_,e,t),uS(n.eventQueue_,e._path,s)}function pS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(dS)}function m$(n){n.persistentConnection_&&n.persistentConnection_.resume(dS)}function ho(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$e(t,...e)}function Fs(n,e,t,s){e&&co(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function g$(n,e,t,s,r,i){ho(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:o0(),applyLocally:i,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_g(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Tc("transaction failed: Data returned ",c,o.path),o.status=0;const l=yh(n.transactionQueueTree_,e),u=Xr(l)||[];u.push(o),pg(l,u);let h;typeof c=="object"&&c!==null&&Lt(c,".priority")?(h=Er(c,".priority"),b(Ua(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(mh(n.serverSyncTree_,e)||L.EMPTY_NODE).getPriority().val();const d=Sc(n),f=Te(c,h),p=hg(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=Ih(n);const g=ig(n.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);Bt(n.eventQueue_,e,g),Eh(n,n.transactionQueueTree_)}}function _g(n,e,t){return mh(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function Eh(n,e=n.transactionQueueTree_){if(e||Th(n,e),Xr(e)){const t=gS(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&y$(n,Ec(e),t)}else iS(e)&&_h(e,t=>{Eh(n,t)})}function y$(n,e,t){const s=t.map(l=>l.currentWriteId),r=_g(n,e,s);let i=r;const o=r.hash();for(let l=0;l<t.length;l++){const u=t[l];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=_t(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,l=>{ho(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ys(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Th(n,yh(n.transactionQueueTree_,e)),Eh(n,n.transactionQueueTree_),Bt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)co(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ht("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}qi(n,e)}},o)}function qi(n,e){const t=mS(n,e),s=Ec(t),r=gS(n,t);return _$(n,r,s),s}function _$(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=_t(t,c.path);let u=!1,h;if(b(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(ys(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=r$)u=!0,h="maxretry",r=r.concat(ys(n.serverSyncTree_,c.currentWriteId,!0));else{const d=_g(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Tc("transaction failed: Data returned ",f,c.path);let p=Te(f);typeof f=="object"&&f!=null&&Lt(f,".priority")||(p=p.updatePriority(d.getPriority()));const T=c.currentWriteId,C=Sc(n),O=hg(p,d,C);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=O,c.currentWriteId=Ih(n),o.splice(o.indexOf(T),1),r=r.concat(ig(n.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),r=r.concat(ys(n.serverSyncTree_,T,!0))}else u=!0,h="nodata",r=r.concat(ys(n.serverSyncTree_,c.currentWriteId,!0))}Bt(n.eventQueue_,t,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Th(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)co(s[a]);Eh(n,n.transactionQueueTree_)}function mS(n,e){let t,s=n.transactionQueueTree_;for(t=G(e);t!==null&&Xr(s)===void 0;)s=yh(s,t),e=ue(e),t=G(e);return s}function gS(n,e){const t=[];return yS(n,e,t),t.sort((s,r)=>s.order-r.order),t}function yS(n,e,t){const s=Xr(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);_h(e,r=>{yS(n,r,t)})}function Th(n,e){const t=Xr(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,pg(e,t.length>0?t:void 0)}_h(e,s=>{Th(n,s)})}function vg(n,e){const t=Ec(mS(n,e)),s=yh(n.transactionQueueTree_,e);return Kq(s,r=>{dd(n,r)}),dd(n,s),oS(s,r=>{dd(n,r)}),t}function dd(n,e){const t=Xr(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(b(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(b(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(ys(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?pg(e,void 0):t.length=i+1,Bt(n.eventQueue_,Ec(e),r);for(let o=0;o<s.length;o++)co(s[o])}}/**
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
 */function v$(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function w$(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ht(`Invalid query segment '${t}' in query '${n}'`)}return e}const bf=function(n,e){const t=I$(n),s=t.namespace;t.domain==="firebase.com"&&Cn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||RB();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new I0(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new oe(t.pathString)}},I$=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(r=v$(n.substring(u,h)));const d=w$(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class _S{constructor(e,t,s,r){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class vS{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class wg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class E${constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new bt;return h$(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ht("OnDisconnect.remove",this._path);const e=new bt;return lv(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ht("OnDisconnect.set",this._path),An("OnDisconnect.set",e,this._path,!1);const t=new bt;return lv(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ht("OnDisconnect.setWithPriority",this._path),An("OnDisconnect.setWithPriority",e,this._path,!1),mg("OnDisconnect.setWithPriority",t,!1);const s=new bt;return d$(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ht("OnDisconnect.update",this._path),cS("OnDisconnect.update",e,this._path,!1);const t=new bt;return f$(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Dt{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return H(this._path)?null:Gm(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=K_(this._queryParams),t=Bm(e);return t==="{}"?"default":t}get _queryObject(){return K_(this._queryParams)}isEqual(e){if(e=N(e),!(e instanceof Dt))return!1;const t=this._repo===e._repo,s=Hm(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+dW(this._path)}}function bh(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Hs(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===In){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Jn)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(n.hasEnd()){if(n.getIndexEndName()!==kn)throw new Error(s);if(typeof t!="string")throw new Error(r)}}else if(n.getIndex()===fe){if(e!=null&&!Ua(e)||t!=null&&!Ua(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(n.getIndex()instanceof Km||n.getIndex()===Qm,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Sh(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Jt extends Dt{constructor(e,t){super(e,t,new uh,!1)}get parent(){const e=D0(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ur{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new oe(e),s=Vr(this.ref,e);return new Ur(this._node.getChild(t),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Ur(r,Vr(this.ref,s),fe)))}hasChild(e){const t=new oe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wS(n,e){return n=N(n),n._checkNotDeleted("ref"),e!==void 0?Vr(n._root,e):n._root}function uv(n,e){n=N(n),n._checkNotDeleted("refFromURL");const t=bf(e,n._repo.repoInfo_.nodeAdmin);lS("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&Cn("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),wS(n,t.path.toString())}function Vr(n,e){return n=N(n),G(n._path)===null?t$("child","path",e,!1):Va("child","path",e,!1),new Jt(n._repo,Ie(n._path,e))}function T$(n,e){n=N(n),Ht("push",n._path),An("push",e,n._path,!0);const t=fS(n._repo),s=xW(t),r=Vr(n,s),i=Vr(n,s);let o;return e!=null?o=Ig(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function b$(n){return Ht("remove",n._path),Ig(n,null)}function Ig(n,e){n=N(n),Ht("set",n._path),An("set",e,n._path,!1);const t=new bt;return yg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function S$(n,e){n=N(n),Ht("setPriority",n._path),mg("setPriority",e,!1);const t=new bt;return yg(n._repo,Ie(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function C$(n,e,t){if(Ht("setWithPriority",n._path),An("setWithPriority",e,n._path,!1),mg("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new bt;return yg(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function k$(n,e){cS("update",e,n._path,!1);const t=new bt;return l$(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function A$(n){n=N(n);const e=new wg(()=>{}),t=new Cc(e);return c$(n._repo,n,t).then(s=>new Ur(s,new Jt(n._repo,n._path),n._queryParams.getIndex()))}class Cc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new _S("value",this,new Ur(e.snapshotNode,new Jt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vS(this,e,t):null}matches(e){return e instanceof Cc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ch{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vS(this,e,t):null}createEvent(e,t){b(e.childName!=null,"Child events should have a childName.");const s=Vr(new Jt(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new _S(e.type,this,new Ur(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ch?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function kc(n,e,t,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const c=t,l=(u,h)=>{Tf(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new wg(t,i||void 0),a=e==="value"?new Cc(o):new Ch(e,o);return p$(n._repo,n,a),()=>Tf(n._repo,n,a)}function Sf(n,e,t,s){return kc(n,"value",e,t,s)}function hv(n,e,t,s){return kc(n,"child_added",e,t,s)}function dv(n,e,t,s){return kc(n,"child_changed",e,t,s)}function fv(n,e,t,s){return kc(n,"child_moved",e,t,s)}function pv(n,e,t,s){return kc(n,"child_removed",e,t,s)}function mv(n,e,t){let s=null;const r=t?new wg(t):null;e==="value"?s=new Cc(r):e&&(s=new Ch(e,r)),Tf(n._repo,n,s)}class ln{}class IS extends ln{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){An("endAt",this._value,e._path,!0);const t=ff(e._queryParams,this._value,this._key);if(Sh(t),Hs(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dt(e._repo,e._path,t,e._orderByCalled)}}function N$(n,e){return bc("endAt","key",e,!0),new IS(n,e)}class D$ extends ln{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){An("endBefore",this._value,e._path,!1);const t=VW(e._queryParams,this._value,this._key);if(Sh(t),Hs(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dt(e._repo,e._path,t,e._orderByCalled)}}function R$(n,e){return bc("endBefore","key",e,!0),new D$(n,e)}class ES extends ln{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){An("startAt",this._value,e._path,!0);const t=df(e._queryParams,this._value,this._key);if(Sh(t),Hs(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Dt(e._repo,e._path,t,e._orderByCalled)}}function x$(n=null,e){return bc("startAt","key",e,!0),new ES(n,e)}class O$ extends ln{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){An("startAfter",this._value,e._path,!1);const t=UW(e._queryParams,this._value,this._key);if(Sh(t),Hs(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Dt(e._repo,e._path,t,e._orderByCalled)}}function P$(n,e){return bc("startAfter","key",e,!0),new O$(n,e)}class M$ extends ln{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dt(e._repo,e._path,LW(e._queryParams,this._limit),e._orderByCalled)}}function L$(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new M$(n)}class F$ extends ln{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dt(e._repo,e._path,FW(e._queryParams,this._limit),e._orderByCalled)}}function U$(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new F$(n)}class V$ extends ln{constructor(e){super(),this._path=e}_apply(e){bh(e,"orderByChild");const t=new oe(this._path);if(H(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Km(t),r=hh(e._queryParams,s);return Hs(r),new Dt(e._repo,e._path,r,!0)}}function B$(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Va("orderByChild","path",n,!1),new V$(n)}class W$ extends ln{_apply(e){bh(e,"orderByKey");const t=hh(e._queryParams,In);return Hs(t),new Dt(e._repo,e._path,t,!0)}}function q$(){return new W$}class $$ extends ln{_apply(e){bh(e,"orderByPriority");const t=hh(e._queryParams,fe);return Hs(t),new Dt(e._repo,e._path,t,!0)}}function j$(){return new $$}class G$ extends ln{_apply(e){bh(e,"orderByValue");const t=hh(e._queryParams,Qm);return Hs(t),new Dt(e._repo,e._path,t,!0)}}function H$(){return new G$}class Y$ extends ln{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(An("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new IS(this._value,this._key)._apply(new ES(this._value,this._key)._apply(e))}}function z$(n,e){return bc("equalTo","key",e,!0),new Y$(n,e)}function Xt(n,...e){let t=N(n);for(const s of e)t=s._apply(t);return t}kq(Jt);xq(Jt);/**
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
 */const K$="FIREBASE_DATABASE_EMULATOR_HOST",Cf={};let Q$=!1;function J$(n,e,t,s){n.repoInfo_=new I0(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),s&&(n.authTokenProvider_=s)}function TS(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=bf(i,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[K$]),l?(c=!0,i=`http://${l}?ns=${a.namespace}`,o=bf(i,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new Ei(Ei.OWNER):new BB(n.name,n.options,e);lS("Invalid Firebase Database URL",o),H(o.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Z$(a,n,u,new VB(n.name,t));return new ej(h,n)}function X$(n,e){const t=Cf[e];(!t||t[n.key]!==n)&&Cn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),pS(n),delete t[n.key]}function Z$(n,e,t,s){let r=Cf[e.name];r||(r={},Cf[e.name]=r);let i=r[n.toURLString()];return i&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new i$(n,Q$,t,s),r[n.toURLString()]=i,i}class ej{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function bS(){Fi.IS_TRANSPORT_INITIALIZED&&ht("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function tj(){bS(),gs.forceDisallow()}function nj(){bS(),$t.forceDisallow(),gs.forceAllow()}function sj(n,e,t,s={}){n=N(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ei(Ei.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ow(s.mockUserToken,n.app.options.projectId);i=new Ei(o)}J$(r,e,t,i)}function rj(n){n=N(n),n._checkNotDeleted("goOffline"),pS(n._repo)}function ij(n){n=N(n),n._checkNotDeleted("goOnline"),m$(n._repo)}function oj(n,e){c0(n,e)}/**
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
 */function aj(n){r0(Us),Yn(new Ft("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return TS(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Yt(R_,x_,n),Yt(R_,x_,"esm2017")}/**
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
 */const cj={".sv":"timestamp"};function lj(){return cj}function uj(n){return{".sv":{increment:n}}}/**
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
 */class hj{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function dj(n,e,t){var s;if(n=N(n),Ht("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const r=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,i=new bt,o=(c,l,u)=>{let h=null;c?i.reject(c):(h=new Ur(u,new Jt(n._repo,n._path),fe),i.resolve(new hj(l,h)))},a=Sf(n,()=>{});return g$(n._repo,n._path,e,o,a,r),i.promise}Gn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Gn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};aj();const fj="@firebase/database-compat",pj="0.2.10";/**
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
 */const mj=new Yi("@firebase/database-compat"),SS=function(n){const e="FIREBASE WARNING: "+n;mj.warn(e)};/**
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
 */const gj=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(At(n,e)+"must be a boolean.")},yj=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(At(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class _j{constructor(e){this._delegate=e}cancel(e){U("OnDisconnect.cancel",0,1,arguments.length),Be("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){U("OnDisconnect.remove",0,1,arguments.length),Be("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){U("OnDisconnect.set",1,2,arguments.length),Be("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),r=>t(r)),s}setWithPriority(e,t,s){U("OnDisconnect.setWithPriority",2,3,arguments.length),Be("OnDisconnect.setWithPriority","onComplete",s,!0);const r=this._delegate.setWithPriority(e,t);return s&&r.then(()=>s(null),i=>s(i)),r}update(e,t){if(U("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let i=0;i<e.length;++i)r[""+i]=e[i];e=r,SS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Be("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),r=>t(r)),s}}/**
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
 */class vj{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return U("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Ts{constructor(e,t){this._database=e,this._delegate=t}val(){return U("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return U("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return U("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return U("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return U("DataSnapshot.child",0,1,arguments.length),e=String(e),Va("DataSnapshot.child","path",e,!1),new Ts(this._database,this._delegate.child(e))}hasChild(e){return U("DataSnapshot.hasChild",1,1,arguments.length),Va("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return U("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return U("DataSnapshot.forEach",1,1,arguments.length),Be("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Ts(this._database,t)))}hasChildren(){return U("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return U("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return U("DataSnapshot.ref",0,0,arguments.length),new Ot(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Xe{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,r){var i;U("Query.on",2,4,arguments.length),Be("Query.on","callback",t,!1);const o=Xe.getCancelAndContextArgs_("Query.on",s,r),a=(l,u)=>{t.call(o.context,new Ts(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(i=o.cancel)===null||i===void 0?void 0:i.bind(o.context);switch(e){case"value":return Sf(this._delegate,a,c),t;case"child_added":return hv(this._delegate,a,c),t;case"child_removed":return pv(this._delegate,a,c),t;case"child_changed":return dv(this._delegate,a,c),t;case"child_moved":return fv(this._delegate,a,c),t;default:throw new Error(At("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(U("Query.off",0,3,arguments.length),yj("Query.off",e,!0),Be("Query.off","callback",t,!0),Vg("Query.off","context",s,!0),t){const r=()=>{};r.userCallback=t,r.context=s,mv(this._delegate,e,r)}else mv(this._delegate,e)}get(){return A$(this._delegate).then(e=>new Ts(this.database,e))}once(e,t,s,r){U("Query.once",1,4,arguments.length),Be("Query.once","callback",t,!0);const i=Xe.getCancelAndContextArgs_("Query.once",s,r),o=new bt,a=(l,u)=>{const h=new Ts(this.database,l);t&&t.call(i.context,h,u),o.resolve(h)};a.userCallback=t,a.context=i.context;const c=l=>{i.cancel&&i.cancel.call(i.context,l),o.reject(l)};switch(e){case"value":Sf(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":hv(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":pv(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":dv(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":fv(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(At("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return U("Query.limitToFirst",1,1,arguments.length),new Xe(this.database,Xt(this._delegate,L$(e)))}limitToLast(e){return U("Query.limitToLast",1,1,arguments.length),new Xe(this.database,Xt(this._delegate,U$(e)))}orderByChild(e){return U("Query.orderByChild",1,1,arguments.length),new Xe(this.database,Xt(this._delegate,B$(e)))}orderByKey(){return U("Query.orderByKey",0,0,arguments.length),new Xe(this.database,Xt(this._delegate,q$()))}orderByPriority(){return U("Query.orderByPriority",0,0,arguments.length),new Xe(this.database,Xt(this._delegate,j$()))}orderByValue(){return U("Query.orderByValue",0,0,arguments.length),new Xe(this.database,Xt(this._delegate,H$()))}startAt(e=null,t){return U("Query.startAt",0,2,arguments.length),new Xe(this.database,Xt(this._delegate,x$(e,t)))}startAfter(e=null,t){return U("Query.startAfter",0,2,arguments.length),new Xe(this.database,Xt(this._delegate,P$(e,t)))}endAt(e=null,t){return U("Query.endAt",0,2,arguments.length),new Xe(this.database,Xt(this._delegate,N$(e,t)))}endBefore(e=null,t){return U("Query.endBefore",0,2,arguments.length),new Xe(this.database,Xt(this._delegate,R$(e,t)))}equalTo(e,t){return U("Query.equalTo",1,2,arguments.length),new Xe(this.database,Xt(this._delegate,z$(e,t)))}toString(){return U("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return U("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(U("Query.isEqual",1,1,arguments.length),!(e instanceof Xe)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const r={cancel:void 0,context:void 0};if(t&&s)r.cancel=t,Be(e,"cancel",r.cancel,!0),r.context=s,Vg(e,"context",r.context,!0);else if(t)if(typeof t=="object"&&t!==null)r.context=t;else if(typeof t=="function")r.cancel=t;else throw new Error(At(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Ot(this.database,new Jt(this._delegate._repo,this._delegate._path))}}class Ot extends Xe{constructor(e,t){super(e,new Dt(t._repo,t._path,new uh,!1)),this.database=e,this._delegate=t}getKey(){return U("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return U("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Ot(this.database,Vr(this._delegate,e))}getParent(){U("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Ot(this.database,e):null}getRoot(){return U("Reference.root",0,0,arguments.length),new Ot(this.database,this._delegate.root)}set(e,t){U("Reference.set",1,2,arguments.length),Be("Reference.set","onComplete",t,!0);const s=Ig(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}update(e,t){if(U("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let i=0;i<e.length;++i)r[""+i]=e[i];e=r,SS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ht("Reference.update",this._delegate._path),Be("Reference.update","onComplete",t,!0);const s=k$(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}setWithPriority(e,t,s){U("Reference.setWithPriority",2,3,arguments.length),Be("Reference.setWithPriority","onComplete",s,!0);const r=C$(this._delegate,e,t);return s&&r.then(()=>s(null),i=>s(i)),r}remove(e){U("Reference.remove",0,1,arguments.length),Be("Reference.remove","onComplete",e,!0);const t=b$(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){U("Reference.transaction",1,3,arguments.length),Be("Reference.transaction","transactionUpdate",e,!1),Be("Reference.transaction","onComplete",t,!0),gj("Reference.transaction","applyLocally",s,!0);const r=dj(this._delegate,e,{applyLocally:s}).then(i=>new vj(i.committed,new Ts(this.database,i.snapshot)));return t&&r.then(i=>t(null,i.committed,i.snapshot),i=>t(i,!1,null)),r}setPriority(e,t){U("Reference.setPriority",1,2,arguments.length),Be("Reference.setPriority","onComplete",t,!0);const s=S$(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}push(e,t){U("Reference.push",0,2,arguments.length),Be("Reference.push","onComplete",t,!0);const s=T$(this._delegate,e),r=s.then(o=>new Ot(this.database,o));t&&r.then(()=>t(null),o=>t(o));const i=new Ot(this.database,s);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Ht("Reference.onDisconnect",this._delegate._path),new _j(new E$(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Ba{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:tj,forceLongPolling:nj}}useEmulator(e,t,s={}){sj(this._delegate,e,t,s)}ref(e){if(U("database.ref",0,1,arguments.length),e instanceof Ot){const t=uv(this._delegate,e.toString());return new Ot(this,t)}else{const t=wS(this._delegate,e);return new Ot(this,t)}}refFromURL(e){U("database.refFromURL",1,1,arguments.length);const s=uv(this._delegate,e);return new Ot(this,s)}goOffline(){return U("database.goOffline",0,0,arguments.length),rj(this._delegate)}goOnline(){return U("database.goOnline",0,0,arguments.length),ij(this._delegate)}}Ba.ServerValue={TIMESTAMP:lj(),increment:n=>uj(n)};/**
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
 */function wj({app:n,url:e,version:t,customAuthImpl:s,namespace:r,nodeAdmin:i=!1}){r0(t);const o=new Lw("auth-internal",new Fw("database-standalone"));return o.setComponent(new Ft("auth-internal",()=>s,"PRIVATE")),{instance:new Ba(TS(n,o,void 0,e,i),n),namespace:r}}var Ij=Object.freeze({__proto__:null,initStandalone:wj});/**
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
 */const Ej=Ba.ServerValue;function Tj(n){n.INTERNAL.registerComponent(new Ft("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Ba(r,s)},"PUBLIC").setServiceProps({Reference:Ot,Query:Xe,Database:Ba,DataSnapshot:Ts,enableLogging:oj,INTERNAL:Ij,ServerValue:Ej}).setMultipleInstances(!0)),n.registerVersion(fj,pj)}Tj(ct);const bj={apiKey:"AIzaSyANYFUMwHMxHVoIDNLJsFzDSiL1_4qB4YA",authDomain:"game-7955e.firebaseapp.com",databaseURL:"https://game-7955e-default-rtdb.firebaseio.com",projectId:"game-7955e",storageBucket:"game-7955e.appspot.com",messagingSenderId:"364405624537",appId:"1:364405624537:web:551896aa29b2a81409f8c8"};ct.initializeApp(bj);ct.apps.length||ct.initializeApp(firebaseConfig);ct.database().ref();ct.auth;ct.database();ct.firestore();const Sj={class:"tofu-area"},Cj=ye("div",{class:"title"},"\u81ED\u51B0\u5E97\u83DC\u55AE",-1),kj={class:"menu"},Aj=["onClick"],Nj=ye("i",{class:"fa-solid fa-circle-plus"},null,-1),Dj=ye("h4",null,"\u8CFC\u7269\u8ECA",-1),Rj={class:"menu_shop"},xj={class:"cart-item"},Oj={class:"cart-title"},Pj={class:"price"},Mj={class:"count"},Lj={class:"count"},Fj={class:"handler"},Uj=["onClick"],Vj=ye("i",{class:"fa-solid fa-circle-plus"},null,-1),Bj=[Vj],Wj=["onClick"],qj=ye("i",{class:"fa-solid fa-circle-minus ml-2"},null,-1),$j=[qj],jj=["onClick"],Gj=ye("i",{class:"fa-solid fa-trash"},null,-1),Hj=[Gj],Yj=["onClick"],zj={class:"countAllTotal"},Kj={class:"form-area"},Jj=kS({__name:"Home",setup(n){const e=Rn(),t=Rn([]);Rn();const s=A(new Date).format("YYYY-MM-DD-HHmm");Rn(0);const r=Rn({name:"",phone:"",add:""}),i=AS({name:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",trigger:"blur"}],phone:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u884C\u52D5\u96FB\u8A71",trigger:"blur"}],add:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u5730\u5740",trigger:"blur"}]});var o=ct.database().ref("orders/");const a=Rn({}),c=()=>{o.once("value",C=>{a.value=C.val()})};Rn({id:"",productName:"",price:"",count:"",total:""});const l=async(C,O)=>{if(!!O){var B=ct.database().ref("user/"),K=ct.database().ref("orders/");console.log(T.value," countAllTotal"),await O.validate((ie,M)=>{ie?(B.push({orderUser:r.value}),K.push({orderNo:s,orderUser:r.value,time:A(new Date).format("YYYY-MM-DD HH:mm"),countTotal:T.value,list:{id:C[0],productName:C[1],price:C[2],count:C[3],total:C[2]*C[3]}})):console.log("error submit!",M)})}},u=Rn(),h=async()=>{const B="https://sheets.googleapis.com/v4/spreadsheets/19YWnM9PrXXEUOcT9zWkQYpiZ1W3o6i-UToEGsUPcFcU/values/\u5546\u54C1\u5217\u8868?alt=json&key=AIzaSyAieT4Folrx3Tsx-iZqzu_HyNBt349BMaw";await $C.get(B).then(K=>{u.value=K.data.values,console.log(K.data);for(var ie=0;ie<=u.value.length;ie++)for(var M=u.value[0],ae=0;ae<=M.length;ae++)M[ae]})},d=C=>{var O=[];O[0]=C[0],O[1]=C[1],O[2]=C[2];var B=1;for(var K in t.value)if(t.value[K][1]===C[1]){B=t.value[K][3]+1;var ie=t.value.indexOf(t.value[K]);t.value.splice(ie,1)}O[3]=B,t.value.push(O)},f=C=>{C[3]++};Rn([]);const p=C=>{console.log("removeOne",C),C[3]--,C[3]<=0&&t.value.splice(C,1)},g=C=>{t.value.splice(C,1)},T=NS(()=>{var C=0;for(var O in t.value)C+=t.value[O][3]*t.value[O][2];return C});return DS(()=>{h(),c()}),(C,O)=>{const B=Dh("el-input"),K=Dh("el-form-item"),ie=Dh("el-form");return Qs(),zs("div",Sj,[Cj,ye("ul",kj,[(Qs(!0),zs(Ah,null,Nh(u.value,M=>(Qs(),zs("li",{key:M},[ye("a",{onClick:ae=>d(M)},[(Qs(!0),zs(Ah,null,Nh(M,ae=>(Qs(),zs("div",{key:ae},[ye("span",null,Zr(ae),1)]))),128)),Nj],8,Aj)]))),128))]),Dj,ye("div",Rj,[Ks(ie,{ref_key:"ruleFormRef",ref:e,model:r.value,rules:i,"status-icon":""},{default:Ac(()=>[(Qs(!0),zs(Ah,null,Nh(t.value,M=>(Qs(),zs("div",{class:"cart",key:M},[ye("div",xj,[ye("div",Oj,Zr(M[1]),1),ye("div",null,[ye("span",Pj,Zr("$"+M[2]),1),Eg(" x "),ye("span",Mj,Zr(M[3]),1),ye("span",Lj,Zr("$"+M[2]*M[3]),1)]),ye("div",Fj,[ye("a",{href:"#",class:"cart-btn plus",onClick:Rh(ae=>f(M),["prevent"])},Bj,8,Uj),ye("a",{href:"#",class:"cart-btn minus",onClick:Rh(ae=>p(M),["prevent"])},$j,8,Wj),ye("a",{href:"#",class:"cart-btn minus",onClick:Rh(ae=>g(M),["prevent"])},Hj,8,jj)])]),ye("a",{class:"btn",onClick:ae=>l(M,e.value)},"\u9001\u51FA\u8CFC\u7269\u8ECA",8,Yj)]))),128)),ye("p",zj,[Eg("\u7E3D\u8A08\uFF1A "),ye("span",null,Zr("$"+RS(T)),1)]),ye("div",Kj,[Ks(K,{label:"\u59D3\u540D",prop:"name"},{default:Ac(()=>[Ks(B,{modelValue:r.value.name,"onUpdate:modelValue":O[0]||(O[0]=M=>r.value.name=M)},null,8,["modelValue"])]),_:1}),Ks(K,{label:"\u96FB\u8A71",prop:"phone"},{default:Ac(()=>[Ks(B,{modelValue:r.value.phone,"onUpdate:modelValue":O[1]||(O[1]=M=>r.value.phone=M)},null,8,["modelValue"])]),_:1}),Ks(K,{label:"\u5730\u5740",prop:"add"},{default:Ac(()=>[Ks(B,{modelValue:r.value.add,"onUpdate:modelValue":O[2]||(O[2]=M=>r.value.add=M)},null,8,["modelValue"])]),_:1})])]),_:1},8,["model","rules"])])])}}});export{Jj as default};

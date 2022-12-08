function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:pe}=Object.prototype,{getPrototypeOf:v}=Object,Q=(e=>t=>{const n=pe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Q(t)===e),I=e=>t=>typeof t===e,{isArray:g}=Array,_=I("undefined");function je(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const me=A("ArrayBuffer");function Ue(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&me(e.buffer),t}const ke=I("string"),x=I("function"),ye=I("number"),Y=e=>e!==null&&typeof e=="object",He=e=>e===!0||e===!1,j=e=>{if(Q(e)!=="object")return!1;const t=v(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Me=A("Date"),Ie=A("File"),qe=A("Blob"),Je=A("FileList"),ze=e=>Y(e)&&x(e.pipe),Ve=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||pe.call(e)===t||x(e.toString)&&e.toString()===t)},$e=A("URLSearchParams"),Ke=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),g(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const we=typeof self>"u"?typeof global>"u"?globalThis:global:self,be=e=>!_(e)&&e!==we;function K(){const{caseless:e}=be(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ee(t,s)||s;j(t[i])&&j(r)?t[i]=K(t[i],r):j(r)?t[i]=K({},r):g(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const We=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,i)=>{n&&x(s)?e[i]=he(s,n):e[i]=s},{allOwnKeys:r}),e),Xe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ve=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qe=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&v(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ye=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ze=e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!ye(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ge=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&v(Uint8Array)),et=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},tt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nt=A("HTMLFormElement"),rt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ne=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),st=A("RegExp"),Oe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},ot=e=>{Oe(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},it=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return g(e)?r(e):r(String(e).split(t)),n},at=()=>{},ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ut=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=g(r)?[]:{};return D(r,(o,c)=>{const d=n(o,s+1);!_(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:g,isArrayBuffer:me,isBuffer:je,isFormData:Ve,isArrayBufferView:Ue,isString:ke,isNumber:ye,isBoolean:He,isObject:Y,isPlainObject:j,isUndefined:_,isDate:Me,isFile:Ie,isBlob:qe,isRegExp:st,isFunction:x,isStream:ze,isURLSearchParams:$e,isTypedArray:Ge,isFileList:Je,forEach:D,merge:K,extend:We,trim:Ke,stripBOM:Xe,inherits:ve,toFlatObject:Qe,kindOf:Q,kindOfTest:A,endsWith:Ye,toArray:Ze,forEachEntry:et,matchAll:tt,isHTMLForm:nt,hasOwnProperty:ne,hasOwnProp:ne,reduceDescriptors:Oe,freezeMethods:ot,toObjectSet:it,toCamelCase:rt,noop:at,toFiniteNumber:ct,findKey:Ee,global:we,isContextDefined:be,toJSONObject:ut};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Se=m.prototype,Re={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Re[e]={value:e}});Object.defineProperties(m,Re);Object.defineProperty(Se,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Se);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var lt=typeof self=="object"?self.FormData:window.FormData;const ft=lt;function W(e){return a.isPlainObject(e)||a.isArray(e)}function Ae(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ae(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function dt(e){return a.isArray(e)&&!e.some(W)}const ht=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function pt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ft||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,O){return!a.isUndefined(O[p])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&pt(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,p,O){let b=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&dt(f)||a.isFileList(f)||a.endsWith(p,"[]")&&(b=a.toArray(f)))return p=Ae(p),b.forEach(function(L,Le){!(a.isUndefined(L)||L===null)&&t.append(o===!0?re([p],Le,i):o===null?p:p+"[]",u(L))}),!1}return W(f)?!0:(t.append(re(O,p,i),u(f)),!1)}const h=[],E=Object.assign(ht,{defaultVisitor:l,convertValue:u,isVisitable:W});function y(f,p){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),a.forEach(f,function(b,N){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(N)?N.trim():N,p,E))===!0&&y(b,p?p.concat(N):[N])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Z(e,t){this._pairs=[],e&&q(e,this,t)}const Te=Z.prototype;Te.append=function(t,n){this._pairs.push([t,n])};Te.toString=function(t){const n=t?function(r){return t.call(this,r,se)}:se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,n){if(!t)return e;const r=n&&n.encode||mt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new Z(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class yt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const oe=yt,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Et=typeof URLSearchParams<"u"?URLSearchParams:Z,wt=FormData,bt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),S={isBrowser:!0,classes:{URLSearchParams:Et,FormData:wt,Blob},isStandardBrowserEnv:bt,protocols:["http","https","file","blob","url","data"]};function Ot(e,t){return q(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function St(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ge(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Rt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(St(r),s,n,0)}),n}return null}const At={"Content-Type":void 0};function Tt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ot(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return q(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Tt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(At)});const G=J,xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Nt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ie=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function gt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Pt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ae(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function _t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ct(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,u){const l=P(d);if(!l)throw new Error("header name must be a non-empty string");const h=a.findKey(s,l);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||d]=U(c))}const o=(c,d)=>a.forEach(c,(u,l)=>i(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Pt(t)?o(Nt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return gt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&(!n||ae(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=P(o),o){const c=a.findKey(r,o);c&&(!n||ae(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=U(s),delete n[i];return}const c=t?_t(i):String(i).trim();c!==i&&delete n[i],n[c]=U(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ie]=this[ie]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=P(o);r[c]||(Ct(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const R=z;function V(e,t){const n=this||G,r=t||n,s=R.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Pe(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});const Ft=null;function Dt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Bt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Lt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function _e(e,t){return e&&!Lt(t)?jt(e,t):t}const Ut=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[i];o||(o=u),n[s]=d,r[s]=u;let h=i,E=0;for(;h!==s;)E+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const y=l&&u-l;return y?Math.round(E*1e3/y):void 0}}function ce(e,t){let n=0;const r=Ht(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Mt=typeof XMLHttpRequest<"u",It=Mt&&function(e){return new Promise(function(n,r){let s=e.data;const i=R.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&S.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=_e(e.baseURL,e.url);u.open(e.method.toUpperCase(),xe(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function h(){if(!u)return;const y=R.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};Dt(function(b){n(b),d()},function(b){r(b),d()},p),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){!u||(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ne;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},S.isStandardBrowserEnv){const y=(e.withCredentials||Ut(l))&&e.xsrfCookieName&&Bt.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(f,p){u.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{!u||(r(!y||y.type?new B(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const E=kt(l);if(E&&S.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},k={http:Ft,xhr:It};a.forEach(k,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const qt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?k[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(k,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:k};function $(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B}function ue(e){return $(e),e.headers=R.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),qt.getAdapter(e.adapter||G.adapter)(e).then(function(r){return $(e),r.data=V.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Pe(r)||($(e),r&&r.response&&(r.response.data=V.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const le=e=>e instanceof R?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(u,l,h){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:h},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,h){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,h)}else return r(u,l,h)}function i(u,l){if(!a.isUndefined(l))return r(void 0,l)}function o(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,h){if(h in t)return r(u,l);if(h in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,l)=>s(le(u),le(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const h=d[l]||s,E=h(e[l],t[l],l);a.isUndefined(E)&&h!==c||(n[l]=E)}),n}const Ce="1.2.0",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const fe={};ee.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ce+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!fe[o]&&(fe[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Jt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const X={assertOptions:Jt,validators:ee},T=X.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new oe,response:new oe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&X.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=R.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});let l,h=0,E;if(!d){const f=[ue.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),E=f.length,l=Promise.resolve(n);h<E;)l=l.then(f[h++],f[h++]);return l}E=c.length;let y=n;for(h=0;h<E;){const f=c[h++],p=c[h++];try{y=f(y)}catch(O){p.call(this,O);break}}try{l=ue.call(this,y)}catch(f){return Promise.reject(f)}for(h=0,E=u.length;h<E;)l=l.then(u[h++],u[h++]);return l}getUri(t){t=C(this.defaults,t);const n=_e(t.baseURL,t.url);return xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class te{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new B(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new te(function(s){t=s}),cancel:t}}}const zt=te;function Vt(e){return function(n){return e.apply(null,n)}}function $t(e){return a.isObject(e)&&e.isAxiosError===!0}function Fe(e){const t=new H(e),n=he(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Fe(C(e,s))},n}const w=Fe(G);w.Axios=H;w.CanceledError=B;w.CancelToken=zt;w.isCancel=Pe;w.VERSION=Ce;w.toFormData=q;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Vt;w.isAxiosError=$t;w.AxiosHeaders=R;w.formToJSON=e=>ge(a.isHTMLForm(e)?new FormData(e):e);w.default=w;const Qt=w,F={_origin:"https://api.emailjs.com"},Kt=(e,t="https://api.emailjs.com")=>{F._userID=e,F._origin=t},De=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class de{constructor(t){this.status=t.status,this.text=t.responseText}}const Be=(e,t,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const c=new de(o);c.status===200||c.text==="OK"?r(c):s(c)}),i.addEventListener("error",({target:o})=>{s(new de(o))}),i.open("POST",F._origin+e,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(t)}),Wt=(e,t,n,r)=>{const s=r||F._userID;De(s,e,t);const i={lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:n};return Be("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},Xt=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},vt=(e,t,n,r)=>{const s=r||F._userID,i=Xt(n);De(s,e,t);const o=new FormData(i);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",s),Be("/api/v1.0/email/send-form",o)},Yt={init:Kt,send:Wt,sendForm:vt};export{Qt as a,Yt as e};

function rv(n,e){return function(){return n.apply(e,arguments)}}const{toString:iv}=Object.prototype,{getPrototypeOf:gf}=Object,yf=(n=>e=>{const t=iv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Qn=n=>(n=n.toLowerCase(),e=>yf(e)===n),zl=n=>e=>typeof e===n,{isArray:Fi}=Array,Ho=zl("undefined");function p0(n){return n!==null&&!Ho(n)&&n.constructor!==null&&!Ho(n.constructor)&&gr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const ov=Qn("ArrayBuffer");function g0(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&ov(n.buffer),e}const y0=zl("string"),gr=zl("function"),av=zl("number"),_f=n=>n!==null&&typeof n=="object",_0=n=>n===!0||n===!1,Lc=n=>{if(yf(n)!=="object")return!1;const e=gf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},v0=Qn("Date"),w0=Qn("File"),I0=Qn("Blob"),E0=Qn("FileList"),T0=n=>_f(n)&&gr(n.pipe),b0=n=>{const e="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||iv.call(n)===e||gr(n.toString)&&n.toString()===e)},S0=Qn("URLSearchParams"),C0=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ma(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let s,r;if(typeof n!="object"&&(n=[n]),Fi(n))for(s=0,r=n.length;s<r;s++)e.call(null,n[s],s,n);else{const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,n[a],a,n)}}function cv(n,e){e=e.toLowerCase();const t=Object.keys(n);let s=t.length,r;for(;s-- >0;)if(r=t[s],e===r.toLowerCase())return r;return null}const lv=typeof self>"u"?typeof global>"u"?globalThis:global:self,uv=n=>!Ho(n)&&n!==lv;function nd(){const{caseless:n}=uv(this)&&this||{},e={},t=(s,r)=>{const i=n&&cv(e,r)||r;Lc(e[i])&&Lc(s)?e[i]=nd(e[i],s):Lc(s)?e[i]=nd({},s):Fi(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Ma(arguments[s],t);return e}const k0=(n,e,t,{allOwnKeys:s}={})=>(Ma(e,(r,i)=>{t&&gr(r)?n[i]=rv(r,t):n[i]=r},{allOwnKeys:s}),n),N0=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),A0=(n,e,t,s)=>{n.prototype=Object.create(e.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},D0=(n,e,t,s)=>{let r,i,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),i=r.length;i-- >0;)o=r[i],(!s||s(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&gf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},R0=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const s=n.indexOf(e,t);return s!==-1&&s===t},x0=n=>{if(!n)return null;if(Fi(n))return n;let e=n.length;if(!av(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},O0=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&gf(Uint8Array)),P0=(n,e)=>{const s=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(n,i[0],i[1])}},M0=(n,e)=>{let t;const s=[];for(;(t=n.exec(e))!==null;)s.push(t);return s},L0=Qn("HTMLFormElement"),F0=n=>n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,s,r){return s.toUpperCase()+r}),hg=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),U0=Qn("RegExp"),hv=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),s={};Ma(t,(r,i)=>{e(r,i,n)!==!1&&(s[i]=r)}),Object.defineProperties(n,s)},V0=n=>{hv(n,(e,t)=>{if(gr(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const s=n[t];if(!!gr(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},B0=(n,e)=>{const t={},s=r=>{r.forEach(i=>{t[i]=!0})};return Fi(n)?s(n):s(String(n).split(e)),t},W0=()=>{},q0=(n,e)=>(n=+n,Number.isFinite(n)?n:e),$0=n=>{const e=new Array(10),t=(s,r)=>{if(_f(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Fi(s)?[]:{};return Ma(s,(o,a)=>{const c=t(o,r+1);!Ho(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return t(n,0)},_={isArray:Fi,isArrayBuffer:ov,isBuffer:p0,isFormData:b0,isArrayBufferView:g0,isString:y0,isNumber:av,isBoolean:_0,isObject:_f,isPlainObject:Lc,isUndefined:Ho,isDate:v0,isFile:w0,isBlob:I0,isRegExp:U0,isFunction:gr,isStream:T0,isURLSearchParams:S0,isTypedArray:O0,isFileList:E0,forEach:Ma,merge:nd,extend:k0,trim:C0,stripBOM:N0,inherits:A0,toFlatObject:D0,kindOf:yf,kindOfTest:Qn,endsWith:R0,toArray:x0,forEachEntry:P0,matchAll:M0,isHTMLForm:L0,hasOwnProperty:hg,hasOwnProp:hg,reduceDescriptors:hv,freezeMethods:V0,toObjectSet:B0,toCamelCase:F0,noop:W0,toFiniteNumber:q0,findKey:cv,global:lv,isContextDefined:uv,toJSONObject:$0};function X(n,e,t,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),r&&(this.response=r)}_.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dv=X.prototype,fv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{fv[n]={value:n}});Object.defineProperties(X,fv);Object.defineProperty(dv,"isAxiosError",{value:!0});X.from=(n,e,t,s,r,i)=>{const o=Object.create(dv);return _.toFlatObject(n,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),X.call(o,n.message,e,t,s,r),o.cause=n,o.name=n.name,i&&Object.assign(o,i),o};var j0=typeof self=="object"?self.FormData:window.FormData;const G0=j0;function sd(n){return _.isPlainObject(n)||_.isArray(n)}function mv(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function dg(n,e,t){return n?n.concat(e).map(function(r,i){return r=mv(r),!t&&i?"["+r+"]":r}).join(t?".":""):e}function H0(n){return _.isArray(n)&&!n.some(sd)}const Y0=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function z0(n){return n&&_.isFunction(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator]}function Kl(n,e,t){if(!_.isObject(n))throw new TypeError("target must be an object");e=e||new(G0||FormData),t=_.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,b){return!_.isUndefined(b[g])});const s=t.metaTokens,r=t.visitor||u,i=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&z0(e);if(!_.isFunction(r))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(_.isDate(m))return m.toISOString();if(!c&&_.isBlob(m))throw new X("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(m)||_.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,g,b){let O=m;if(m&&!b&&typeof m=="object"){if(_.endsWith(g,"{}"))g=s?g:g.slice(0,-2),m=JSON.stringify(m);else if(_.isArray(m)&&H0(m)||_.isFileList(m)||_.endsWith(g,"[]")&&(O=_.toArray(m)))return g=mv(g),O.forEach(function(Y,ve){!(_.isUndefined(Y)||Y===null)&&e.append(o===!0?dg([g],ve,i):o===null?g:g+"[]",l(Y))}),!1}return sd(m)?!0:(e.append(dg(b,g,i),l(m)),!1)}const h=[],d=Object.assign(Y0,{defaultVisitor:u,convertValue:l,isVisitable:sd});function f(m,g){if(!_.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(m),_.forEach(m,function(O,q){(!(_.isUndefined(O)||O===null)&&r.call(e,O,_.isString(q)?q.trim():q,g,d))===!0&&f(O,g?g.concat(q):[q])}),h.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return f(n),e}function fg(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function vf(n,e){this._pairs=[],n&&Kl(n,this,e)}const pv=vf.prototype;pv.append=function(e,t){this._pairs.push([e,t])};pv.toString=function(e){const t=e?function(s){return e.call(this,s,fg)}:fg;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function K0(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gv(n,e,t){if(!e)return n;const s=t&&t.encode||K0,r=t&&t.serialize;let i;if(r?i=r(e,t):i=_.isURLSearchParams(e)?e.toString():new vf(e,t).toString(s),i){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class Q0{constructor(){this.handlers=[]}use(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(s){s!==null&&e(s)})}}const mg=Q0,yv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},J0=typeof URLSearchParams<"u"?URLSearchParams:vf,X0=FormData,Z0=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Un={isBrowser:!0,classes:{URLSearchParams:J0,FormData:X0,Blob},isStandardBrowserEnv:Z0,protocols:["http","https","file","blob","url","data"]};function eC(n,e){return Kl(n,new Un.classes.URLSearchParams,Object.assign({visitor:function(t,s,r,i){return Un.isNode&&_.isBuffer(t)?(this.append(s,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function tC(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function nC(n){const e={},t=Object.keys(n);let s;const r=t.length;let i;for(s=0;s<r;s++)i=t[s],e[i]=n[i];return e}function _v(n){function e(t,s,r,i){let o=t[i++];const a=Number.isFinite(+o),c=i>=t.length;return o=!o&&_.isArray(r)?r.length:o,c?(_.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!_.isObject(r[o]))&&(r[o]=[]),e(t,s,r[o],i)&&_.isArray(r[o])&&(r[o]=nC(r[o])),!a)}if(_.isFormData(n)&&_.isFunction(n.entries)){const t={};return _.forEachEntry(n,(s,r)=>{e(tC(s),r,t,0)}),t}return null}const sC={"Content-Type":void 0};function rC(n,e,t){if(_.isString(n))try{return(e||JSON.parse)(n),_.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}const Ql={transitional:yv,adapter:["xhr","http"],transformRequest:[function(e,t){const s=t.getContentType()||"",r=s.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return r&&r?JSON.stringify(_v(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return eC(e,this.formSerializer).toString();if((a=_.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Kl(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),rC(e)):e}],transformResponse:[function(e){const t=this.transitional||Ql.transitional,s=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&_.isString(e)&&(s&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?X.from(a,X.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Un.classes.FormData,Blob:Un.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(e){Ql.headers[e]={}});_.forEach(["post","put","patch"],function(e){Ql.headers[e]=_.merge(sC)});const wf=Ql,iC=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oC=n=>{const e={};let t,s,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!t||e[t]&&iC[t])&&(t==="set-cookie"?e[t]?e[t].push(s):e[t]=[s]:e[t]=e[t]?e[t]+", "+s:s)}),e},pg=Symbol("internals");function oo(n){return n&&String(n).trim().toLowerCase()}function Fc(n){return n===!1||n==null?n:_.isArray(n)?n.map(Fc):String(n)}function aC(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(n);)e[s[1]]=s[2];return e}function cC(n){return/^[-_a-zA-Z]+$/.test(n.trim())}function gg(n,e,t,s){if(_.isFunction(s))return s.call(this,e,t);if(!!_.isString(e)){if(_.isString(s))return e.indexOf(s)!==-1;if(_.isRegExp(s))return s.test(e)}}function lC(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function uC(n,e){const t=_.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+t,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Jl{constructor(e){e&&this.set(e)}set(e,t,s){const r=this;function i(a,c,l){const u=oo(c);if(!u)throw new Error("header name must be a non-empty string");const h=_.findKey(r,u);(!h||r[h]===void 0||l===!0||l===void 0&&r[h]!==!1)&&(r[h||c]=Fc(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));return _.isPlainObject(e)||e instanceof this.constructor?o(e,t):_.isString(e)&&(e=e.trim())&&!cC(e)?o(oC(e),t):e!=null&&i(t,e,s),this}get(e,t){if(e=oo(e),e){const s=_.findKey(this,e);if(s){const r=this[s];if(!t)return r;if(t===!0)return aC(r);if(_.isFunction(t))return t.call(this,r,s);if(_.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=oo(e),e){const s=_.findKey(this,e);return!!(s&&(!t||gg(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let r=!1;function i(o){if(o=oo(o),o){const a=_.findKey(s,o);a&&(!t||gg(s,s[a],a,t))&&(delete s[a],r=!0)}}return _.isArray(e)?e.forEach(i):i(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,s={};return _.forEach(this,(r,i)=>{const o=_.findKey(s,i);if(o){t[o]=Fc(r),delete t[i];return}const a=e?lC(i):String(i).trim();a!==i&&delete t[i],t[a]=Fc(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _.forEach(this,(s,r)=>{s!=null&&s!==!1&&(t[r]=e&&_.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const s=new this(e);return t.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[pg]=this[pg]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=oo(o);s[a]||(uC(r,o),s[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}}Jl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);_.freezeMethods(Jl.prototype);_.freezeMethods(Jl);const Vn=Jl;function Ih(n,e){const t=this||wf,s=e||t,r=Vn.from(s.headers);let i=s.data;return _.forEach(n,function(a){i=a.call(t,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function vv(n){return!!(n&&n.__CANCEL__)}function La(n,e,t){X.call(this,n==null?"canceled":n,X.ERR_CANCELED,e,t),this.name="CanceledError"}_.inherits(La,X,{__CANCEL__:!0});const hC=null;function dC(n,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?n(t):e(new X("Request failed with status code "+t.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const fC=Un.isStandardBrowserEnv?function(){return{write:function(t,s,r,i,o,a){const c=[];c.push(t+"="+encodeURIComponent(s)),_.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),_.isString(i)&&c.push("path="+i),_.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){const s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mC(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function pC(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function wv(n,e){return n&&!mC(e)?pC(n,e):e}const gC=Un.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let s;function r(i){let o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=r(window.location.href),function(o){const a=_.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function yC(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function _C(n,e){n=n||10;const t=new Array(n),s=new Array(n);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=s[i];o||(o=l),t[r]=c,s[r]=l;let h=i,d=0;for(;h!==r;)d+=t[h++],h=h%n;if(r=(r+1)%n,r===i&&(i=(i+1)%n),l-o<e)return;const f=u&&l-u;return f?Math.round(d*1e3/f):void 0}}function yg(n,e){let t=0;const s=_C(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-t,c=s(a),l=i<=o;t=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:r};u[e?"download":"upload"]=!0,n(u)}}const vC=typeof XMLHttpRequest<"u",wC=vC&&function(n){return new Promise(function(t,s){let r=n.data;const i=Vn.from(n.headers).normalize(),o=n.responseType;let a;function c(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}_.isFormData(r)&&Un.isStandardBrowserEnv&&i.setContentType(!1);let l=new XMLHttpRequest;if(n.auth){const f=n.auth.username||"",m=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+m))}const u=wv(n.baseURL,n.url);l.open(n.method.toUpperCase(),gv(u,n.params,n.paramsSerializer),!0),l.timeout=n.timeout;function h(){if(!l)return;const f=Vn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:n,request:l};dC(function(O){t(O),c()},function(O){s(O),c()},g),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(s(new X("Request aborted",X.ECONNABORTED,n,l)),l=null)},l.onerror=function(){s(new X("Network Error",X.ERR_NETWORK,n,l)),l=null},l.ontimeout=function(){let m=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const g=n.transitional||yv;n.timeoutErrorMessage&&(m=n.timeoutErrorMessage),s(new X(m,g.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,n,l)),l=null},Un.isStandardBrowserEnv){const f=(n.withCredentials||gC(u))&&n.xsrfCookieName&&fC.read(n.xsrfCookieName);f&&i.set(n.xsrfHeaderName,f)}r===void 0&&i.setContentType(null),"setRequestHeader"in l&&_.forEach(i.toJSON(),function(m,g){l.setRequestHeader(g,m)}),_.isUndefined(n.withCredentials)||(l.withCredentials=!!n.withCredentials),o&&o!=="json"&&(l.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&l.addEventListener("progress",yg(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",yg(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=f=>{!l||(s(!f||f.type?new La(null,n,l):f),l.abort(),l=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const d=yC(u);if(d&&Un.protocols.indexOf(d)===-1){s(new X("Unsupported protocol "+d+":",X.ERR_BAD_REQUEST,n));return}l.send(r||null)})},Uc={http:hC,xhr:wC};_.forEach(Uc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const IC={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:e}=n;let t,s;for(let r=0;r<e&&(t=n[r],!(s=_.isString(t)?Uc[t.toLowerCase()]:t));r++);if(!s)throw s===!1?new X(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(Uc,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!_.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:Uc};function Eh(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new La}function _g(n){return Eh(n),n.headers=Vn.from(n.headers),n.data=Ih.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),IC.getAdapter(n.adapter||wf.adapter)(n).then(function(s){return Eh(n),s.data=Ih.call(n,n.transformResponse,s),s.headers=Vn.from(s.headers),s},function(s){return vv(s)||(Eh(n),s&&s.response&&(s.response.data=Ih.call(n,n.transformResponse,s.response),s.response.headers=Vn.from(s.response.headers))),Promise.reject(s)})}const vg=n=>n instanceof Vn?n.toJSON():n;function Yo(n,e){e=e||{};const t={};function s(l,u,h){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:h},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function r(l,u,h){if(_.isUndefined(u)){if(!_.isUndefined(l))return s(void 0,l,h)}else return s(l,u,h)}function i(l,u){if(!_.isUndefined(u))return s(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return s(void 0,l)}else return s(void 0,u)}function a(l,u,h){if(h in e)return s(l,u);if(h in n)return s(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>r(vg(l),vg(u),!0)};return _.forEach(Object.keys(n).concat(Object.keys(e)),function(u){const h=c[u]||r,d=h(n[u],e[u],u);_.isUndefined(d)&&h!==a||(t[u]=d)}),t}const Iv="1.2.0",If={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{If[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});const wg={};If.transitional=function(e,t,s){function r(i,o){return"[Axios v"+Iv+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new X(r(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!wg[o]&&(wg[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,a):!0}};function EC(n,e,t){if(typeof n!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=n[i],c=a===void 0||o(a,i,n);if(c!==!0)throw new X("option "+i+" must be "+c,X.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}}const rd={assertOptions:EC,validators:If},rs=rd.validators;class Xc{constructor(e){this.defaults=e,this.interceptors={request:new mg,response:new mg}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Yo(this.defaults,t);const{transitional:s,paramsSerializer:r,headers:i}=t;s!==void 0&&rd.assertOptions(s,{silentJSONParsing:rs.transitional(rs.boolean),forcedJSONParsing:rs.transitional(rs.boolean),clarifyTimeoutError:rs.transitional(rs.boolean)},!1),r!==void 0&&rd.assertOptions(r,{encode:rs.function,serialize:rs.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o;o=i&&_.merge(i.common,i[t.method]),o&&_.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),t.headers=Vn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(c=c&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,h=0,d;if(!c){const m=[_g.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),d=m.length,u=Promise.resolve(t);h<d;)u=u.then(m[h++],m[h++]);return u}d=a.length;let f=t;for(h=0;h<d;){const m=a[h++],g=a[h++];try{f=m(f)}catch(b){g.call(this,b);break}}try{u=_g.call(this,f)}catch(m){return Promise.reject(m)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=Yo(this.defaults,e);const t=wv(e.baseURL,e.url);return gv(t,e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(e){Xc.prototype[e]=function(t,s){return this.request(Yo(s||{},{method:e,url:t,data:(s||{}).data}))}});_.forEach(["post","put","patch"],function(e){function t(s){return function(i,o,a){return this.request(Yo(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Xc.prototype[e]=t(),Xc.prototype[e+"Form"]=t(!0)});const Vc=Xc;class Ef{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new La(i,o,a),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ef(function(r){e=r}),cancel:e}}}const TC=Ef;function bC(n){return function(t){return n.apply(null,t)}}function SC(n){return _.isObject(n)&&n.isAxiosError===!0}function Ev(n){const e=new Vc(n),t=rv(Vc.prototype.request,e);return _.extend(t,Vc.prototype,e,{allOwnKeys:!0}),_.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Ev(Yo(n,r))},t}const st=Ev(wf);st.Axios=Vc;st.CanceledError=La;st.CancelToken=TC;st.isCancel=vv;st.VERSION=Iv;st.toFormData=Kl;st.AxiosError=X;st.Cancel=st.CanceledError;st.all=function(e){return Promise.all(e)};st.spread=bC;st.isAxiosError=SC;st.AxiosHeaders=Vn;st.formToJSON=n=>_v(_.isHTMLForm(n)?new FormData(n):n);st.default=st;const aj=st;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Tv;function k(){return Tv.apply(null,arguments)}function CC(n){Tv=n}function sn(n){return n instanceof Array||Object.prototype.toString.call(n)==="[object Array]"}function ur(n){return n!=null&&Object.prototype.toString.call(n)==="[object Object]"}function te(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Tf(n){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(n).length===0;var e;for(e in n)if(te(n,e))return!1;return!0}function vt(n){return n===void 0}function jn(n){return typeof n=="number"||Object.prototype.toString.call(n)==="[object Number]"}function Fa(n){return n instanceof Date||Object.prototype.toString.call(n)==="[object Date]"}function bv(n,e){var t=[],s,r=n.length;for(s=0;s<r;++s)t.push(e(n[s],s));return t}function us(n,e){for(var t in e)te(e,t)&&(n[t]=e[t]);return te(e,"toString")&&(n.toString=e.toString),te(e,"valueOf")&&(n.valueOf=e.valueOf),n}function Nn(n,e,t,s){return zv(n,e,t,s,!0).utc()}function kC(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W(n){return n._pf==null&&(n._pf=kC()),n._pf}var id;Array.prototype.some?id=Array.prototype.some:id=function(n){var e=Object(this),t=e.length>>>0,s;for(s=0;s<t;s++)if(s in e&&n.call(this,e[s],s,e))return!0;return!1};function bf(n){if(n._isValid==null){var e=W(n),t=id.call(e.parsedDateParts,function(r){return r!=null}),s=!isNaN(n._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&t);if(n._strict&&(s=s&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(n))n._isValid=s;else return s}return n._isValid}function Xl(n){var e=Nn(NaN);return n!=null?us(W(e),n):W(e).userInvalidated=!0,e}var Ig=k.momentProperties=[],Th=!1;function Sf(n,e){var t,s,r,i=Ig.length;if(vt(e._isAMomentObject)||(n._isAMomentObject=e._isAMomentObject),vt(e._i)||(n._i=e._i),vt(e._f)||(n._f=e._f),vt(e._l)||(n._l=e._l),vt(e._strict)||(n._strict=e._strict),vt(e._tzm)||(n._tzm=e._tzm),vt(e._isUTC)||(n._isUTC=e._isUTC),vt(e._offset)||(n._offset=e._offset),vt(e._pf)||(n._pf=W(e)),vt(e._locale)||(n._locale=e._locale),i>0)for(t=0;t<i;t++)s=Ig[t],r=e[s],vt(r)||(n[s]=r);return n}function Ua(n){Sf(this,n),this._d=new Date(n._d!=null?n._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Th===!1&&(Th=!0,k.updateOffset(this),Th=!1)}function rn(n){return n instanceof Ua||n!=null&&n._isAMomentObject!=null}function Sv(n){k.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+n)}function zt(n,e){var t=!0;return us(function(){if(k.deprecationHandler!=null&&k.deprecationHandler(null,n),t){var s=[],r,i,o,a=arguments.length;for(i=0;i<a;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(o in arguments[0])te(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];s.push(r)}Sv(n+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),t=!1}return e.apply(this,arguments)},e)}var Eg={};function Cv(n,e){k.deprecationHandler!=null&&k.deprecationHandler(n,e),Eg[n]||(Sv(e),Eg[n]=!0)}k.suppressDeprecationWarnings=!1;k.deprecationHandler=null;function An(n){return typeof Function<"u"&&n instanceof Function||Object.prototype.toString.call(n)==="[object Function]"}function NC(n){var e,t;for(t in n)te(n,t)&&(e=n[t],An(e)?this[t]=e:this["_"+t]=e);this._config=n,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function od(n,e){var t=us({},n),s;for(s in e)te(e,s)&&(ur(n[s])&&ur(e[s])?(t[s]={},us(t[s],n[s]),us(t[s],e[s])):e[s]!=null?t[s]=e[s]:delete t[s]);for(s in n)te(n,s)&&!te(e,s)&&ur(n[s])&&(t[s]=us({},t[s]));return t}function Cf(n){n!=null&&this.set(n)}var ad;Object.keys?ad=Object.keys:ad=function(n){var e,t=[];for(e in n)te(n,e)&&t.push(e);return t};var AC={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function DC(n,e,t){var s=this._calendar[n]||this._calendar.sameElse;return An(s)?s.call(e,t):s}function In(n,e,t){var s=""+Math.abs(n),r=e-s.length,i=n>=0;return(i?t?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+s}var kf=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ec=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,bh={},oi={};function x(n,e,t,s){var r=s;typeof s=="string"&&(r=function(){return this[s]()}),n&&(oi[n]=r),e&&(oi[e[0]]=function(){return In(r.apply(this,arguments),e[1],e[2])}),t&&(oi[t]=function(){return this.localeData().ordinal(r.apply(this,arguments),n)})}function RC(n){return n.match(/\[[\s\S]/)?n.replace(/^\[|\]$/g,""):n.replace(/\\/g,"")}function xC(n){var e=n.match(kf),t,s;for(t=0,s=e.length;t<s;t++)oi[e[t]]?e[t]=oi[e[t]]:e[t]=RC(e[t]);return function(r){var i="",o;for(o=0;o<s;o++)i+=An(e[o])?e[o].call(r,n):e[o];return i}}function Bc(n,e){return n.isValid()?(e=kv(e,n.localeData()),bh[e]=bh[e]||xC(e),bh[e](n)):n.localeData().invalidDate()}function kv(n,e){var t=5;function s(r){return e.longDateFormat(r)||r}for(Ec.lastIndex=0;t>=0&&Ec.test(n);)n=n.replace(Ec,s),Ec.lastIndex=0,t-=1;return n}var OC={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function PC(n){var e=this._longDateFormat[n],t=this._longDateFormat[n.toUpperCase()];return e||!t?e:(this._longDateFormat[n]=t.match(kf).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[n])}var MC="Invalid date";function LC(){return this._invalidDate}var FC="%d",UC=/\d{1,2}/;function VC(n){return this._ordinal.replace("%d",n)}var BC={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function WC(n,e,t,s){var r=this._relativeTime[t];return An(r)?r(n,e,t,s):r.replace(/%d/i,n)}function qC(n,e){var t=this._relativeTime[n>0?"future":"past"];return An(t)?t(e):t.replace(/%s/i,e)}var Do={};function ht(n,e){var t=n.toLowerCase();Do[t]=Do[t+"s"]=Do[e]=n}function Kt(n){return typeof n=="string"?Do[n]||Do[n.toLowerCase()]:void 0}function Nf(n){var e={},t,s;for(s in n)te(n,s)&&(t=Kt(s),t&&(e[t]=n[s]));return e}var Nv={};function dt(n,e){Nv[n]=e}function $C(n){var e=[],t;for(t in n)te(n,t)&&e.push({unit:t,priority:Nv[t]});return e.sort(function(s,r){return s.priority-r.priority}),e}function Zl(n){return n%4===0&&n%100!==0||n%400===0}function Wt(n){return n<0?Math.ceil(n)||0:Math.floor(n)}function H(n){var e=+n,t=0;return e!==0&&isFinite(e)&&(t=Wt(e)),t}function Ui(n,e){return function(t){return t!=null?(Av(this,n,t),k.updateOffset(this,e),this):Zc(this,n)}}function Zc(n,e){return n.isValid()?n._d["get"+(n._isUTC?"UTC":"")+e]():NaN}function Av(n,e,t){n.isValid()&&!isNaN(t)&&(e==="FullYear"&&Zl(n.year())&&n.month()===1&&n.date()===29?(t=H(t),n._d["set"+(n._isUTC?"UTC":"")+e](t,n.month(),iu(t,n.month()))):n._d["set"+(n._isUTC?"UTC":"")+e](t))}function jC(n){return n=Kt(n),An(this[n])?this[n]():this}function GC(n,e){if(typeof n=="object"){n=Nf(n);var t=$C(n),s,r=t.length;for(s=0;s<r;s++)this[t[s].unit](n[t[s].unit])}else if(n=Kt(n),An(this[n]))return this[n](e);return this}var Dv=/\d/,Bt=/\d\d/,Rv=/\d{3}/,Af=/\d{4}/,eu=/[+-]?\d{6}/,fe=/\d\d?/,xv=/\d\d\d\d?/,Ov=/\d\d\d\d\d\d?/,tu=/\d{1,3}/,Df=/\d{1,4}/,nu=/[+-]?\d{1,6}/,Vi=/\d+/,su=/[+-]?\d+/,HC=/Z|[+-]\d\d:?\d\d/gi,ru=/Z|[+-]\d\d(?::?\d\d)?/gi,YC=/[+-]?\d+(\.\d{1,3})?/,Va=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,el;el={};function A(n,e,t){el[n]=An(e)?e:function(s,r){return s&&t?t:e}}function zC(n,e){return te(el,n)?el[n](e._strict,e._locale):new RegExp(KC(n))}function KC(n){return At(n.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,s,r,i){return t||s||r||i}))}function At(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var cd={};function ie(n,e){var t,s=e,r;for(typeof n=="string"&&(n=[n]),jn(e)&&(s=function(i,o){o[e]=H(i)}),r=n.length,t=0;t<r;t++)cd[n[t]]=s}function Ba(n,e){ie(n,function(t,s,r,i){r._w=r._w||{},e(t,r._w,r,i)})}function QC(n,e,t){e!=null&&te(cd,n)&&cd[n](e,t._a,t,n)}var ot=0,xn=1,ln=2,Oe=3,Xt=4,On=5,sr=6,JC=7,XC=8;function ZC(n,e){return(n%e+e)%e}var ke;Array.prototype.indexOf?ke=Array.prototype.indexOf:ke=function(n){var e;for(e=0;e<this.length;++e)if(this[e]===n)return e;return-1};function iu(n,e){if(isNaN(n)||isNaN(e))return NaN;var t=ZC(e,12);return n+=(e-t)/12,t===1?Zl(n)?29:28:31-t%7%2}x("M",["MM",2],"Mo",function(){return this.month()+1});x("MMM",0,0,function(n){return this.localeData().monthsShort(this,n)});x("MMMM",0,0,function(n){return this.localeData().months(this,n)});ht("month","M");dt("month",8);A("M",fe);A("MM",fe,Bt);A("MMM",function(n,e){return e.monthsShortRegex(n)});A("MMMM",function(n,e){return e.monthsRegex(n)});ie(["M","MM"],function(n,e){e[xn]=H(n)-1});ie(["MMM","MMMM"],function(n,e,t,s){var r=t._locale.monthsParse(n,s,t._strict);r!=null?e[xn]=r:W(t).invalidMonth=n});var ek="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Pv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Mv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,tk=Va,nk=Va;function sk(n,e){return n?sn(this._months)?this._months[n.month()]:this._months[(this._months.isFormat||Mv).test(e)?"format":"standalone"][n.month()]:sn(this._months)?this._months:this._months.standalone}function rk(n,e){return n?sn(this._monthsShort)?this._monthsShort[n.month()]:this._monthsShort[Mv.test(e)?"format":"standalone"][n.month()]:sn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ik(n,e,t){var s,r,i,o=n.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)i=Nn([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return t?e==="MMM"?(r=ke.call(this._shortMonthsParse,o),r!==-1?r:null):(r=ke.call(this._longMonthsParse,o),r!==-1?r:null):e==="MMM"?(r=ke.call(this._shortMonthsParse,o),r!==-1?r:(r=ke.call(this._longMonthsParse,o),r!==-1?r:null)):(r=ke.call(this._longMonthsParse,o),r!==-1?r:(r=ke.call(this._shortMonthsParse,o),r!==-1?r:null))}function ok(n,e,t){var s,r,i;if(this._monthsParseExact)return ik.call(this,n,e,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(r=Nn([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!t&&!this._monthsParse[s]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),t&&e==="MMMM"&&this._longMonthsParse[s].test(n))return s;if(t&&e==="MMM"&&this._shortMonthsParse[s].test(n))return s;if(!t&&this._monthsParse[s].test(n))return s}}function Lv(n,e){var t;if(!n.isValid())return n;if(typeof e=="string"){if(/^\d+$/.test(e))e=H(e);else if(e=n.localeData().monthsParse(e),!jn(e))return n}return t=Math.min(n.date(),iu(n.year(),e)),n._d["set"+(n._isUTC?"UTC":"")+"Month"](e,t),n}function Fv(n){return n!=null?(Lv(this,n),k.updateOffset(this,!0),this):Zc(this,"Month")}function ak(){return iu(this.year(),this.month())}function ck(n){return this._monthsParseExact?(te(this,"_monthsRegex")||Uv.call(this),n?this._monthsShortStrictRegex:this._monthsShortRegex):(te(this,"_monthsShortRegex")||(this._monthsShortRegex=tk),this._monthsShortStrictRegex&&n?this._monthsShortStrictRegex:this._monthsShortRegex)}function lk(n){return this._monthsParseExact?(te(this,"_monthsRegex")||Uv.call(this),n?this._monthsStrictRegex:this._monthsRegex):(te(this,"_monthsRegex")||(this._monthsRegex=nk),this._monthsStrictRegex&&n?this._monthsStrictRegex:this._monthsRegex)}function Uv(){function n(o,a){return a.length-o.length}var e=[],t=[],s=[],r,i;for(r=0;r<12;r++)i=Nn([2e3,r]),e.push(this.monthsShort(i,"")),t.push(this.months(i,"")),s.push(this.months(i,"")),s.push(this.monthsShort(i,""));for(e.sort(n),t.sort(n),s.sort(n),r=0;r<12;r++)e[r]=At(e[r]),t[r]=At(t[r]);for(r=0;r<24;r++)s[r]=At(s[r]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}x("Y",0,0,function(){var n=this.year();return n<=9999?In(n,4):"+"+n});x(0,["YY",2],0,function(){return this.year()%100});x(0,["YYYY",4],0,"year");x(0,["YYYYY",5],0,"year");x(0,["YYYYYY",6,!0],0,"year");ht("year","y");dt("year",1);A("Y",su);A("YY",fe,Bt);A("YYYY",Df,Af);A("YYYYY",nu,eu);A("YYYYYY",nu,eu);ie(["YYYYY","YYYYYY"],ot);ie("YYYY",function(n,e){e[ot]=n.length===2?k.parseTwoDigitYear(n):H(n)});ie("YY",function(n,e){e[ot]=k.parseTwoDigitYear(n)});ie("Y",function(n,e){e[ot]=parseInt(n,10)});function Ro(n){return Zl(n)?366:365}k.parseTwoDigitYear=function(n){return H(n)+(H(n)>68?1900:2e3)};var Vv=Ui("FullYear",!0);function uk(){return Zl(this.year())}function hk(n,e,t,s,r,i,o){var a;return n<100&&n>=0?(a=new Date(n+400,e,t,s,r,i,o),isFinite(a.getFullYear())&&a.setFullYear(n)):a=new Date(n,e,t,s,r,i,o),a}function zo(n){var e,t;return n<100&&n>=0?(t=Array.prototype.slice.call(arguments),t[0]=n+400,e=new Date(Date.UTC.apply(null,t)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(n)):e=new Date(Date.UTC.apply(null,arguments)),e}function tl(n,e,t){var s=7+e-t,r=(7+zo(n,0,s).getUTCDay()-e)%7;return-r+s-1}function Bv(n,e,t,s,r){var i=(7+t-s)%7,o=tl(n,s,r),a=1+7*(e-1)+i+o,c,l;return a<=0?(c=n-1,l=Ro(c)+a):a>Ro(n)?(c=n+1,l=a-Ro(n)):(c=n,l=a),{year:c,dayOfYear:l}}function Ko(n,e,t){var s=tl(n.year(),e,t),r=Math.floor((n.dayOfYear()-s-1)/7)+1,i,o;return r<1?(o=n.year()-1,i=r+Bn(o,e,t)):r>Bn(n.year(),e,t)?(i=r-Bn(n.year(),e,t),o=n.year()+1):(o=n.year(),i=r),{week:i,year:o}}function Bn(n,e,t){var s=tl(n,e,t),r=tl(n+1,e,t);return(Ro(n)-s+r)/7}x("w",["ww",2],"wo","week");x("W",["WW",2],"Wo","isoWeek");ht("week","w");ht("isoWeek","W");dt("week",5);dt("isoWeek",5);A("w",fe);A("ww",fe,Bt);A("W",fe);A("WW",fe,Bt);Ba(["w","ww","W","WW"],function(n,e,t,s){e[s.substr(0,1)]=H(n)});function dk(n){return Ko(n,this._week.dow,this._week.doy).week}var fk={dow:0,doy:6};function mk(){return this._week.dow}function pk(){return this._week.doy}function gk(n){var e=this.localeData().week(this);return n==null?e:this.add((n-e)*7,"d")}function yk(n){var e=Ko(this,1,4).week;return n==null?e:this.add((n-e)*7,"d")}x("d",0,"do","day");x("dd",0,0,function(n){return this.localeData().weekdaysMin(this,n)});x("ddd",0,0,function(n){return this.localeData().weekdaysShort(this,n)});x("dddd",0,0,function(n){return this.localeData().weekdays(this,n)});x("e",0,0,"weekday");x("E",0,0,"isoWeekday");ht("day","d");ht("weekday","e");ht("isoWeekday","E");dt("day",11);dt("weekday",11);dt("isoWeekday",11);A("d",fe);A("e",fe);A("E",fe);A("dd",function(n,e){return e.weekdaysMinRegex(n)});A("ddd",function(n,e){return e.weekdaysShortRegex(n)});A("dddd",function(n,e){return e.weekdaysRegex(n)});Ba(["dd","ddd","dddd"],function(n,e,t,s){var r=t._locale.weekdaysParse(n,s,t._strict);r!=null?e.d=r:W(t).invalidWeekday=n});Ba(["d","e","E"],function(n,e,t,s){e[s]=H(n)});function _k(n,e){return typeof n!="string"?n:isNaN(n)?(n=e.weekdaysParse(n),typeof n=="number"?n:null):parseInt(n,10)}function vk(n,e){return typeof n=="string"?e.weekdaysParse(n)%7||7:isNaN(n)?null:n}function Rf(n,e){return n.slice(e,7).concat(n.slice(0,e))}var wk="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Wv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ik="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ek=Va,Tk=Va,bk=Va;function Sk(n,e){var t=sn(this._weekdays)?this._weekdays:this._weekdays[n&&n!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return n===!0?Rf(t,this._week.dow):n?t[n.day()]:t}function Ck(n){return n===!0?Rf(this._weekdaysShort,this._week.dow):n?this._weekdaysShort[n.day()]:this._weekdaysShort}function kk(n){return n===!0?Rf(this._weekdaysMin,this._week.dow):n?this._weekdaysMin[n.day()]:this._weekdaysMin}function Nk(n,e,t){var s,r,i,o=n.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)i=Nn([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return t?e==="dddd"?(r=ke.call(this._weekdaysParse,o),r!==-1?r:null):e==="ddd"?(r=ke.call(this._shortWeekdaysParse,o),r!==-1?r:null):(r=ke.call(this._minWeekdaysParse,o),r!==-1?r:null):e==="dddd"?(r=ke.call(this._weekdaysParse,o),r!==-1||(r=ke.call(this._shortWeekdaysParse,o),r!==-1)?r:(r=ke.call(this._minWeekdaysParse,o),r!==-1?r:null)):e==="ddd"?(r=ke.call(this._shortWeekdaysParse,o),r!==-1||(r=ke.call(this._weekdaysParse,o),r!==-1)?r:(r=ke.call(this._minWeekdaysParse,o),r!==-1?r:null)):(r=ke.call(this._minWeekdaysParse,o),r!==-1||(r=ke.call(this._weekdaysParse,o),r!==-1)?r:(r=ke.call(this._shortWeekdaysParse,o),r!==-1?r:null))}function Ak(n,e,t){var s,r,i;if(this._weekdaysParseExact)return Nk.call(this,n,e,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(r=Nn([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),t&&e==="dddd"&&this._fullWeekdaysParse[s].test(n))return s;if(t&&e==="ddd"&&this._shortWeekdaysParse[s].test(n))return s;if(t&&e==="dd"&&this._minWeekdaysParse[s].test(n))return s;if(!t&&this._weekdaysParse[s].test(n))return s}}function Dk(n){if(!this.isValid())return n!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return n!=null?(n=_k(n,this.localeData()),this.add(n-e,"d")):e}function Rk(n){if(!this.isValid())return n!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return n==null?e:this.add(n-e,"d")}function xk(n){if(!this.isValid())return n!=null?this:NaN;if(n!=null){var e=vk(n,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function Ok(n){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||xf.call(this),n?this._weekdaysStrictRegex:this._weekdaysRegex):(te(this,"_weekdaysRegex")||(this._weekdaysRegex=Ek),this._weekdaysStrictRegex&&n?this._weekdaysStrictRegex:this._weekdaysRegex)}function Pk(n){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||xf.call(this),n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(te(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Tk),this._weekdaysShortStrictRegex&&n?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Mk(n){return this._weekdaysParseExact?(te(this,"_weekdaysRegex")||xf.call(this),n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(te(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=bk),this._weekdaysMinStrictRegex&&n?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function xf(){function n(u,h){return h.length-u.length}var e=[],t=[],s=[],r=[],i,o,a,c,l;for(i=0;i<7;i++)o=Nn([2e3,1]).day(i),a=At(this.weekdaysMin(o,"")),c=At(this.weekdaysShort(o,"")),l=At(this.weekdays(o,"")),e.push(a),t.push(c),s.push(l),r.push(a),r.push(c),r.push(l);e.sort(n),t.sort(n),s.sort(n),r.sort(n),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Of(){return this.hours()%12||12}function Lk(){return this.hours()||24}x("H",["HH",2],0,"hour");x("h",["hh",2],0,Of);x("k",["kk",2],0,Lk);x("hmm",0,0,function(){return""+Of.apply(this)+In(this.minutes(),2)});x("hmmss",0,0,function(){return""+Of.apply(this)+In(this.minutes(),2)+In(this.seconds(),2)});x("Hmm",0,0,function(){return""+this.hours()+In(this.minutes(),2)});x("Hmmss",0,0,function(){return""+this.hours()+In(this.minutes(),2)+In(this.seconds(),2)});function qv(n,e){x(n,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}qv("a",!0);qv("A",!1);ht("hour","h");dt("hour",13);function $v(n,e){return e._meridiemParse}A("a",$v);A("A",$v);A("H",fe);A("h",fe);A("k",fe);A("HH",fe,Bt);A("hh",fe,Bt);A("kk",fe,Bt);A("hmm",xv);A("hmmss",Ov);A("Hmm",xv);A("Hmmss",Ov);ie(["H","HH"],Oe);ie(["k","kk"],function(n,e,t){var s=H(n);e[Oe]=s===24?0:s});ie(["a","A"],function(n,e,t){t._isPm=t._locale.isPM(n),t._meridiem=n});ie(["h","hh"],function(n,e,t){e[Oe]=H(n),W(t).bigHour=!0});ie("hmm",function(n,e,t){var s=n.length-2;e[Oe]=H(n.substr(0,s)),e[Xt]=H(n.substr(s)),W(t).bigHour=!0});ie("hmmss",function(n,e,t){var s=n.length-4,r=n.length-2;e[Oe]=H(n.substr(0,s)),e[Xt]=H(n.substr(s,2)),e[On]=H(n.substr(r)),W(t).bigHour=!0});ie("Hmm",function(n,e,t){var s=n.length-2;e[Oe]=H(n.substr(0,s)),e[Xt]=H(n.substr(s))});ie("Hmmss",function(n,e,t){var s=n.length-4,r=n.length-2;e[Oe]=H(n.substr(0,s)),e[Xt]=H(n.substr(s,2)),e[On]=H(n.substr(r))});function Fk(n){return(n+"").toLowerCase().charAt(0)==="p"}var Uk=/[ap]\.?m?\.?/i,Vk=Ui("Hours",!0);function Bk(n,e,t){return n>11?t?"pm":"PM":t?"am":"AM"}var jv={calendar:AC,longDateFormat:OC,invalidDate:MC,ordinal:FC,dayOfMonthOrdinalParse:UC,relativeTime:BC,months:ek,monthsShort:Pv,week:fk,weekdays:wk,weekdaysMin:Ik,weekdaysShort:Wv,meridiemParse:Uk},me={},ao={},Qo;function Wk(n,e){var t,s=Math.min(n.length,e.length);for(t=0;t<s;t+=1)if(n[t]!==e[t])return t;return s}function Tg(n){return n&&n.toLowerCase().replace("_","-")}function qk(n){for(var e=0,t,s,r,i;e<n.length;){for(i=Tg(n[e]).split("-"),t=i.length,s=Tg(n[e+1]),s=s?s.split("-"):null;t>0;){if(r=ou(i.slice(0,t).join("-")),r)return r;if(s&&s.length>=t&&Wk(i,s)>=t-1)break;t--}e++}return Qo}function $k(n){return n.match("^[^/\\\\]*$")!=null}function ou(n){var e=null,t;if(me[n]===void 0&&typeof module<"u"&&module&&module.exports&&$k(n))try{e=Qo._abbr,t=require,t("./locale/"+n),gs(e)}catch{me[n]=null}return me[n]}function gs(n,e){var t;return n&&(vt(e)?t=Jn(n):t=Pf(n,e),t?Qo=t:typeof console<"u"&&console.warn&&console.warn("Locale "+n+" not found. Did you forget to load it?")),Qo._abbr}function Pf(n,e){if(e!==null){var t,s=jv;if(e.abbr=n,me[n]!=null)Cv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=me[n]._config;else if(e.parentLocale!=null)if(me[e.parentLocale]!=null)s=me[e.parentLocale]._config;else if(t=ou(e.parentLocale),t!=null)s=t._config;else return ao[e.parentLocale]||(ao[e.parentLocale]=[]),ao[e.parentLocale].push({name:n,config:e}),null;return me[n]=new Cf(od(s,e)),ao[n]&&ao[n].forEach(function(r){Pf(r.name,r.config)}),gs(n),me[n]}else return delete me[n],null}function jk(n,e){if(e!=null){var t,s,r=jv;me[n]!=null&&me[n].parentLocale!=null?me[n].set(od(me[n]._config,e)):(s=ou(n),s!=null&&(r=s._config),e=od(r,e),s==null&&(e.abbr=n),t=new Cf(e),t.parentLocale=me[n],me[n]=t),gs(n)}else me[n]!=null&&(me[n].parentLocale!=null?(me[n]=me[n].parentLocale,n===gs()&&gs(n)):me[n]!=null&&delete me[n]);return me[n]}function Jn(n){var e;if(n&&n._locale&&n._locale._abbr&&(n=n._locale._abbr),!n)return Qo;if(!sn(n)){if(e=ou(n),e)return e;n=[n]}return qk(n)}function Gk(){return ad(me)}function Mf(n){var e,t=n._a;return t&&W(n).overflow===-2&&(e=t[xn]<0||t[xn]>11?xn:t[ln]<1||t[ln]>iu(t[ot],t[xn])?ln:t[Oe]<0||t[Oe]>24||t[Oe]===24&&(t[Xt]!==0||t[On]!==0||t[sr]!==0)?Oe:t[Xt]<0||t[Xt]>59?Xt:t[On]<0||t[On]>59?On:t[sr]<0||t[sr]>999?sr:-1,W(n)._overflowDayOfYear&&(e<ot||e>ln)&&(e=ln),W(n)._overflowWeeks&&e===-1&&(e=JC),W(n)._overflowWeekday&&e===-1&&(e=XC),W(n).overflow=e),n}var Hk=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yk=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,zk=/Z|[+-]\d\d(?::?\d\d)?/,Tc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Sh=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Kk=/^\/?Date\((-?\d+)/i,Qk=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Jk={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Gv(n){var e,t,s=n._i,r=Hk.exec(s)||Yk.exec(s),i,o,a,c,l=Tc.length,u=Sh.length;if(r){for(W(n).iso=!0,e=0,t=l;e<t;e++)if(Tc[e][1].exec(r[1])){o=Tc[e][0],i=Tc[e][2]!==!1;break}if(o==null){n._isValid=!1;return}if(r[3]){for(e=0,t=u;e<t;e++)if(Sh[e][1].exec(r[3])){a=(r[2]||" ")+Sh[e][0];break}if(a==null){n._isValid=!1;return}}if(!i&&a!=null){n._isValid=!1;return}if(r[4])if(zk.exec(r[4]))c="Z";else{n._isValid=!1;return}n._f=o+(a||"")+(c||""),Ff(n)}else n._isValid=!1}function Xk(n,e,t,s,r,i){var o=[Zk(n),Pv.indexOf(e),parseInt(t,10),parseInt(s,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}function Zk(n){var e=parseInt(n,10);return e<=49?2e3+e:e<=999?1900+e:e}function eN(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function tN(n,e,t){if(n){var s=Wv.indexOf(n),r=new Date(e[0],e[1],e[2]).getDay();if(s!==r)return W(t).weekdayMismatch=!0,t._isValid=!1,!1}return!0}function nN(n,e,t){if(n)return Jk[n];if(e)return 0;var s=parseInt(t,10),r=s%100,i=(s-r)/100;return i*60+r}function Hv(n){var e=Qk.exec(eN(n._i)),t;if(e){if(t=Xk(e[4],e[3],e[2],e[5],e[6],e[7]),!tN(e[1],t,n))return;n._a=t,n._tzm=nN(e[8],e[9],e[10]),n._d=zo.apply(null,n._a),n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),W(n).rfc2822=!0}else n._isValid=!1}function sN(n){var e=Kk.exec(n._i);if(e!==null){n._d=new Date(+e[1]);return}if(Gv(n),n._isValid===!1)delete n._isValid;else return;if(Hv(n),n._isValid===!1)delete n._isValid;else return;n._strict?n._isValid=!1:k.createFromInputFallback(n)}k.createFromInputFallback=zt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(n){n._d=new Date(n._i+(n._useUTC?" UTC":""))});function ei(n,e,t){return n!=null?n:e!=null?e:t}function rN(n){var e=new Date(k.now());return n._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Lf(n){var e,t,s=[],r,i,o;if(!n._d){for(r=rN(n),n._w&&n._a[ln]==null&&n._a[xn]==null&&iN(n),n._dayOfYear!=null&&(o=ei(n._a[ot],r[ot]),(n._dayOfYear>Ro(o)||n._dayOfYear===0)&&(W(n)._overflowDayOfYear=!0),t=zo(o,0,n._dayOfYear),n._a[xn]=t.getUTCMonth(),n._a[ln]=t.getUTCDate()),e=0;e<3&&n._a[e]==null;++e)n._a[e]=s[e]=r[e];for(;e<7;e++)n._a[e]=s[e]=n._a[e]==null?e===2?1:0:n._a[e];n._a[Oe]===24&&n._a[Xt]===0&&n._a[On]===0&&n._a[sr]===0&&(n._nextDay=!0,n._a[Oe]=0),n._d=(n._useUTC?zo:hk).apply(null,s),i=n._useUTC?n._d.getUTCDay():n._d.getDay(),n._tzm!=null&&n._d.setUTCMinutes(n._d.getUTCMinutes()-n._tzm),n._nextDay&&(n._a[Oe]=24),n._w&&typeof n._w.d<"u"&&n._w.d!==i&&(W(n).weekdayMismatch=!0)}}function iN(n){var e,t,s,r,i,o,a,c,l;e=n._w,e.GG!=null||e.W!=null||e.E!=null?(i=1,o=4,t=ei(e.GG,n._a[ot],Ko(de(),1,4).year),s=ei(e.W,1),r=ei(e.E,1),(r<1||r>7)&&(c=!0)):(i=n._locale._week.dow,o=n._locale._week.doy,l=Ko(de(),i,o),t=ei(e.gg,n._a[ot],l.year),s=ei(e.w,l.week),e.d!=null?(r=e.d,(r<0||r>6)&&(c=!0)):e.e!=null?(r=e.e+i,(e.e<0||e.e>6)&&(c=!0)):r=i),s<1||s>Bn(t,i,o)?W(n)._overflowWeeks=!0:c!=null?W(n)._overflowWeekday=!0:(a=Bv(t,s,r,i,o),n._a[ot]=a.year,n._dayOfYear=a.dayOfYear)}k.ISO_8601=function(){};k.RFC_2822=function(){};function Ff(n){if(n._f===k.ISO_8601){Gv(n);return}if(n._f===k.RFC_2822){Hv(n);return}n._a=[],W(n).empty=!0;var e=""+n._i,t,s,r,i,o,a=e.length,c=0,l,u;for(r=kv(n._f,n._locale).match(kf)||[],u=r.length,t=0;t<u;t++)i=r[t],s=(e.match(zC(i,n))||[])[0],s&&(o=e.substr(0,e.indexOf(s)),o.length>0&&W(n).unusedInput.push(o),e=e.slice(e.indexOf(s)+s.length),c+=s.length),oi[i]?(s?W(n).empty=!1:W(n).unusedTokens.push(i),QC(i,s,n)):n._strict&&!s&&W(n).unusedTokens.push(i);W(n).charsLeftOver=a-c,e.length>0&&W(n).unusedInput.push(e),n._a[Oe]<=12&&W(n).bigHour===!0&&n._a[Oe]>0&&(W(n).bigHour=void 0),W(n).parsedDateParts=n._a.slice(0),W(n).meridiem=n._meridiem,n._a[Oe]=oN(n._locale,n._a[Oe],n._meridiem),l=W(n).era,l!==null&&(n._a[ot]=n._locale.erasConvertYear(l,n._a[ot])),Lf(n),Mf(n)}function oN(n,e,t){var s;return t==null?e:n.meridiemHour!=null?n.meridiemHour(e,t):(n.isPM!=null&&(s=n.isPM(t),s&&e<12&&(e+=12),!s&&e===12&&(e=0)),e)}function aN(n){var e,t,s,r,i,o,a=!1,c=n._f.length;if(c===0){W(n).invalidFormat=!0,n._d=new Date(NaN);return}for(r=0;r<c;r++)i=0,o=!1,e=Sf({},n),n._useUTC!=null&&(e._useUTC=n._useUTC),e._f=n._f[r],Ff(e),bf(e)&&(o=!0),i+=W(e).charsLeftOver,i+=W(e).unusedTokens.length*10,W(e).score=i,a?i<s&&(s=i,t=e):(s==null||i<s||o)&&(s=i,t=e,o&&(a=!0));us(n,t||e)}function cN(n){if(!n._d){var e=Nf(n._i),t=e.day===void 0?e.date:e.day;n._a=bv([e.year,e.month,t,e.hour,e.minute,e.second,e.millisecond],function(s){return s&&parseInt(s,10)}),Lf(n)}}function lN(n){var e=new Ua(Mf(Yv(n)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Yv(n){var e=n._i,t=n._f;return n._locale=n._locale||Jn(n._l),e===null||t===void 0&&e===""?Xl({nullInput:!0}):(typeof e=="string"&&(n._i=e=n._locale.preparse(e)),rn(e)?new Ua(Mf(e)):(Fa(e)?n._d=e:sn(t)?aN(n):t?Ff(n):uN(n),bf(n)||(n._d=null),n))}function uN(n){var e=n._i;vt(e)?n._d=new Date(k.now()):Fa(e)?n._d=new Date(e.valueOf()):typeof e=="string"?sN(n):sn(e)?(n._a=bv(e.slice(0),function(t){return parseInt(t,10)}),Lf(n)):ur(e)?cN(n):jn(e)?n._d=new Date(e):k.createFromInputFallback(n)}function zv(n,e,t,s,r){var i={};return(e===!0||e===!1)&&(s=e,e=void 0),(t===!0||t===!1)&&(s=t,t=void 0),(ur(n)&&Tf(n)||sn(n)&&n.length===0)&&(n=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=t,i._i=n,i._f=e,i._strict=s,lN(i)}function de(n,e,t,s){return zv(n,e,t,s,!1)}var hN=zt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=de.apply(null,arguments);return this.isValid()&&n.isValid()?n<this?this:n:Xl()}),dN=zt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var n=de.apply(null,arguments);return this.isValid()&&n.isValid()?n>this?this:n:Xl()});function Kv(n,e){var t,s;if(e.length===1&&sn(e[0])&&(e=e[0]),!e.length)return de();for(t=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][n](t))&&(t=e[s]);return t}function fN(){var n=[].slice.call(arguments,0);return Kv("isBefore",n)}function mN(){var n=[].slice.call(arguments,0);return Kv("isAfter",n)}var pN=function(){return Date.now?Date.now():+new Date},co=["year","quarter","month","week","day","hour","minute","second","millisecond"];function gN(n){var e,t=!1,s,r=co.length;for(e in n)if(te(n,e)&&!(ke.call(co,e)!==-1&&(n[e]==null||!isNaN(n[e]))))return!1;for(s=0;s<r;++s)if(n[co[s]]){if(t)return!1;parseFloat(n[co[s]])!==H(n[co[s]])&&(t=!0)}return!0}function yN(){return this._isValid}function _N(){return an(NaN)}function au(n){var e=Nf(n),t=e.year||0,s=e.quarter||0,r=e.month||0,i=e.week||e.isoWeek||0,o=e.day||0,a=e.hour||0,c=e.minute||0,l=e.second||0,u=e.millisecond||0;this._isValid=gN(e),this._milliseconds=+u+l*1e3+c*6e4+a*1e3*60*60,this._days=+o+i*7,this._months=+r+s*3+t*12,this._data={},this._locale=Jn(),this._bubble()}function Wc(n){return n instanceof au}function ld(n){return n<0?Math.round(-1*n)*-1:Math.round(n)}function vN(n,e,t){var s=Math.min(n.length,e.length),r=Math.abs(n.length-e.length),i=0,o;for(o=0;o<s;o++)(t&&n[o]!==e[o]||!t&&H(n[o])!==H(e[o]))&&i++;return i+r}function Qv(n,e){x(n,0,0,function(){var t=this.utcOffset(),s="+";return t<0&&(t=-t,s="-"),s+In(~~(t/60),2)+e+In(~~t%60,2)})}Qv("Z",":");Qv("ZZ","");A("Z",ru);A("ZZ",ru);ie(["Z","ZZ"],function(n,e,t){t._useUTC=!0,t._tzm=Uf(ru,n)});var wN=/([\+\-]|\d\d)/gi;function Uf(n,e){var t=(e||"").match(n),s,r,i;return t===null?null:(s=t[t.length-1]||[],r=(s+"").match(wN)||["-",0,0],i=+(r[1]*60)+H(r[2]),i===0?0:r[0]==="+"?i:-i)}function Vf(n,e){var t,s;return e._isUTC?(t=e.clone(),s=(rn(n)||Fa(n)?n.valueOf():de(n).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+s),k.updateOffset(t,!1),t):de(n).local()}function ud(n){return-Math.round(n._d.getTimezoneOffset())}k.updateOffset=function(){};function IN(n,e,t){var s=this._offset||0,r;if(!this.isValid())return n!=null?this:NaN;if(n!=null){if(typeof n=="string"){if(n=Uf(ru,n),n===null)return this}else Math.abs(n)<16&&!t&&(n=n*60);return!this._isUTC&&e&&(r=ud(this)),this._offset=n,this._isUTC=!0,r!=null&&this.add(r,"m"),s!==n&&(!e||this._changeInProgress?Zv(this,an(n-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,k.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:ud(this)}function EN(n,e){return n!=null?(typeof n!="string"&&(n=-n),this.utcOffset(n,e),this):-this.utcOffset()}function TN(n){return this.utcOffset(0,n)}function bN(n){return this._isUTC&&(this.utcOffset(0,n),this._isUTC=!1,n&&this.subtract(ud(this),"m")),this}function SN(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var n=Uf(HC,this._i);n!=null?this.utcOffset(n):this.utcOffset(0,!0)}return this}function CN(n){return this.isValid()?(n=n?de(n).utcOffset():0,(this.utcOffset()-n)%60===0):!1}function kN(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function NN(){if(!vt(this._isDSTShifted))return this._isDSTShifted;var n={},e;return Sf(n,this),n=Yv(n),n._a?(e=n._isUTC?Nn(n._a):de(n._a),this._isDSTShifted=this.isValid()&&vN(n._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function AN(){return this.isValid()?!this._isUTC:!1}function DN(){return this.isValid()?this._isUTC:!1}function Jv(){return this.isValid()?this._isUTC&&this._offset===0:!1}var RN=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,xN=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function an(n,e){var t=n,s=null,r,i,o;return Wc(n)?t={ms:n._milliseconds,d:n._days,M:n._months}:jn(n)||!isNaN(+n)?(t={},e?t[e]=+n:t.milliseconds=+n):(s=RN.exec(n))?(r=s[1]==="-"?-1:1,t={y:0,d:H(s[ln])*r,h:H(s[Oe])*r,m:H(s[Xt])*r,s:H(s[On])*r,ms:H(ld(s[sr]*1e3))*r}):(s=xN.exec(n))?(r=s[1]==="-"?-1:1,t={y:Hs(s[2],r),M:Hs(s[3],r),w:Hs(s[4],r),d:Hs(s[5],r),h:Hs(s[6],r),m:Hs(s[7],r),s:Hs(s[8],r)}):t==null?t={}:typeof t=="object"&&("from"in t||"to"in t)&&(o=ON(de(t.from),de(t.to)),t={},t.ms=o.milliseconds,t.M=o.months),i=new au(t),Wc(n)&&te(n,"_locale")&&(i._locale=n._locale),Wc(n)&&te(n,"_isValid")&&(i._isValid=n._isValid),i}an.fn=au.prototype;an.invalid=_N;function Hs(n,e){var t=n&&parseFloat(n.replace(",","."));return(isNaN(t)?0:t)*e}function bg(n,e){var t={};return t.months=e.month()-n.month()+(e.year()-n.year())*12,n.clone().add(t.months,"M").isAfter(e)&&--t.months,t.milliseconds=+e-+n.clone().add(t.months,"M"),t}function ON(n,e){var t;return n.isValid()&&e.isValid()?(e=Vf(e,n),n.isBefore(e)?t=bg(n,e):(t=bg(e,n),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function Xv(n,e){return function(t,s){var r,i;return s!==null&&!isNaN(+s)&&(Cv(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=t,t=s,s=i),r=an(t,s),Zv(this,r,n),this}}function Zv(n,e,t,s){var r=e._milliseconds,i=ld(e._days),o=ld(e._months);!n.isValid()||(s=s==null?!0:s,o&&Lv(n,Zc(n,"Month")+o*t),i&&Av(n,"Date",Zc(n,"Date")+i*t),r&&n._d.setTime(n._d.valueOf()+r*t),s&&k.updateOffset(n,i||o))}var PN=Xv(1,"add"),MN=Xv(-1,"subtract");function ew(n){return typeof n=="string"||n instanceof String}function LN(n){return rn(n)||Fa(n)||ew(n)||jn(n)||UN(n)||FN(n)||n===null||n===void 0}function FN(n){var e=ur(n)&&!Tf(n),t=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,o=s.length;for(r=0;r<o;r+=1)i=s[r],t=t||te(n,i);return e&&t}function UN(n){var e=sn(n),t=!1;return e&&(t=n.filter(function(s){return!jn(s)&&ew(n)}).length===0),e&&t}function VN(n){var e=ur(n)&&!Tf(n),t=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<s.length;r+=1)i=s[r],t=t||te(n,i);return e&&t}function BN(n,e){var t=n.diff(e,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function WN(n,e){arguments.length===1&&(arguments[0]?LN(arguments[0])?(n=arguments[0],e=void 0):VN(arguments[0])&&(e=arguments[0],n=void 0):(n=void 0,e=void 0));var t=n||de(),s=Vf(t,this).startOf("day"),r=k.calendarFormat(this,s)||"sameElse",i=e&&(An(e[r])?e[r].call(this,t):e[r]);return this.format(i||this.localeData().calendar(r,this,de(t)))}function qN(){return new Ua(this)}function $N(n,e){var t=rn(n)?n:de(n);return this.isValid()&&t.isValid()?(e=Kt(e)||"millisecond",e==="millisecond"?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(e).valueOf()):!1}function jN(n,e){var t=rn(n)?n:de(n);return this.isValid()&&t.isValid()?(e=Kt(e)||"millisecond",e==="millisecond"?this.valueOf()<t.valueOf():this.clone().endOf(e).valueOf()<t.valueOf()):!1}function GN(n,e,t,s){var r=rn(n)?n:de(n),i=rn(e)?e:de(e);return this.isValid()&&r.isValid()&&i.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(r,t):!this.isBefore(r,t))&&(s[1]===")"?this.isBefore(i,t):!this.isAfter(i,t))):!1}function HN(n,e){var t=rn(n)?n:de(n),s;return this.isValid()&&t.isValid()?(e=Kt(e)||"millisecond",e==="millisecond"?this.valueOf()===t.valueOf():(s=t.valueOf(),this.clone().startOf(e).valueOf()<=s&&s<=this.clone().endOf(e).valueOf())):!1}function YN(n,e){return this.isSame(n,e)||this.isAfter(n,e)}function zN(n,e){return this.isSame(n,e)||this.isBefore(n,e)}function KN(n,e,t){var s,r,i;if(!this.isValid())return NaN;if(s=Vf(n,this),!s.isValid())return NaN;switch(r=(s.utcOffset()-this.utcOffset())*6e4,e=Kt(e),e){case"year":i=qc(this,s)/12;break;case"month":i=qc(this,s);break;case"quarter":i=qc(this,s)/3;break;case"second":i=(this-s)/1e3;break;case"minute":i=(this-s)/6e4;break;case"hour":i=(this-s)/36e5;break;case"day":i=(this-s-r)/864e5;break;case"week":i=(this-s-r)/6048e5;break;default:i=this-s}return t?i:Wt(i)}function qc(n,e){if(n.date()<e.date())return-qc(e,n);var t=(e.year()-n.year())*12+(e.month()-n.month()),s=n.clone().add(t,"months"),r,i;return e-s<0?(r=n.clone().add(t-1,"months"),i=(e-s)/(s-r)):(r=n.clone().add(t+1,"months"),i=(e-s)/(r-s)),-(t+i)||0}k.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";k.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function QN(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function JN(n){if(!this.isValid())return null;var e=n!==!0,t=e?this.clone().utc():this;return t.year()<0||t.year()>9999?Bc(t,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):An(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Bc(t,"Z")):Bc(t,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function XN(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var n="moment",e="",t,s,r,i;return this.isLocal()||(n=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),t="["+n+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=e+'[")]',this.format(t+s+r+i)}function ZN(n){n||(n=this.isUtc()?k.defaultFormatUtc:k.defaultFormat);var e=Bc(this,n);return this.localeData().postformat(e)}function eA(n,e){return this.isValid()&&(rn(n)&&n.isValid()||de(n).isValid())?an({to:this,from:n}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function tA(n){return this.from(de(),n)}function nA(n,e){return this.isValid()&&(rn(n)&&n.isValid()||de(n).isValid())?an({from:this,to:n}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function sA(n){return this.to(de(),n)}function tw(n){var e;return n===void 0?this._locale._abbr:(e=Jn(n),e!=null&&(this._locale=e),this)}var nw=zt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(n){return n===void 0?this.localeData():this.locale(n)});function sw(){return this._locale}var nl=1e3,ai=60*nl,sl=60*ai,rw=(365*400+97)*24*sl;function ci(n,e){return(n%e+e)%e}function iw(n,e,t){return n<100&&n>=0?new Date(n+400,e,t)-rw:new Date(n,e,t).valueOf()}function ow(n,e,t){return n<100&&n>=0?Date.UTC(n+400,e,t)-rw:Date.UTC(n,e,t)}function rA(n){var e,t;if(n=Kt(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?ow:iw,n){case"year":e=t(this.year(),0,1);break;case"quarter":e=t(this.year(),this.month()-this.month()%3,1);break;case"month":e=t(this.year(),this.month(),1);break;case"week":e=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=t(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=ci(e+(this._isUTC?0:this.utcOffset()*ai),sl);break;case"minute":e=this._d.valueOf(),e-=ci(e,ai);break;case"second":e=this._d.valueOf(),e-=ci(e,nl);break}return this._d.setTime(e),k.updateOffset(this,!0),this}function iA(n){var e,t;if(n=Kt(n),n===void 0||n==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?ow:iw,n){case"year":e=t(this.year()+1,0,1)-1;break;case"quarter":e=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=t(this.year(),this.month()+1,1)-1;break;case"week":e=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=sl-ci(e+(this._isUTC?0:this.utcOffset()*ai),sl)-1;break;case"minute":e=this._d.valueOf(),e+=ai-ci(e,ai)-1;break;case"second":e=this._d.valueOf(),e+=nl-ci(e,nl)-1;break}return this._d.setTime(e),k.updateOffset(this,!0),this}function oA(){return this._d.valueOf()-(this._offset||0)*6e4}function aA(){return Math.floor(this.valueOf()/1e3)}function cA(){return new Date(this.valueOf())}function lA(){var n=this;return[n.year(),n.month(),n.date(),n.hour(),n.minute(),n.second(),n.millisecond()]}function uA(){var n=this;return{years:n.year(),months:n.month(),date:n.date(),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds(),milliseconds:n.milliseconds()}}function hA(){return this.isValid()?this.toISOString():null}function dA(){return bf(this)}function fA(){return us({},W(this))}function mA(){return W(this).overflow}function pA(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}x("N",0,0,"eraAbbr");x("NN",0,0,"eraAbbr");x("NNN",0,0,"eraAbbr");x("NNNN",0,0,"eraName");x("NNNNN",0,0,"eraNarrow");x("y",["y",1],"yo","eraYear");x("y",["yy",2],0,"eraYear");x("y",["yyy",3],0,"eraYear");x("y",["yyyy",4],0,"eraYear");A("N",Bf);A("NN",Bf);A("NNN",Bf);A("NNNN",CA);A("NNNNN",kA);ie(["N","NN","NNN","NNNN","NNNNN"],function(n,e,t,s){var r=t._locale.erasParse(n,s,t._strict);r?W(t).era=r:W(t).invalidEra=n});A("y",Vi);A("yy",Vi);A("yyy",Vi);A("yyyy",Vi);A("yo",NA);ie(["y","yy","yyy","yyyy"],ot);ie(["yo"],function(n,e,t,s){var r;t._locale._eraYearOrdinalRegex&&(r=n.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?e[ot]=t._locale.eraYearOrdinalParse(n,r):e[ot]=parseInt(n,10)});function gA(n,e){var t,s,r,i=this._eras||Jn("en")._eras;for(t=0,s=i.length;t<s;++t){switch(typeof i[t].since){case"string":r=k(i[t].since).startOf("day"),i[t].since=r.valueOf();break}switch(typeof i[t].until){case"undefined":i[t].until=1/0;break;case"string":r=k(i[t].until).startOf("day").valueOf(),i[t].until=r.valueOf();break}}return i}function yA(n,e,t){var s,r,i=this.eras(),o,a,c;for(n=n.toUpperCase(),s=0,r=i.length;s<r;++s)if(o=i[s].name.toUpperCase(),a=i[s].abbr.toUpperCase(),c=i[s].narrow.toUpperCase(),t)switch(e){case"N":case"NN":case"NNN":if(a===n)return i[s];break;case"NNNN":if(o===n)return i[s];break;case"NNNNN":if(c===n)return i[s];break}else if([o,a,c].indexOf(n)>=0)return i[s]}function _A(n,e){var t=n.since<=n.until?1:-1;return e===void 0?k(n.since).year():k(n.since).year()+(e-n.offset)*t}function vA(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].name;return""}function wA(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].narrow;return""}function IA(){var n,e,t,s=this.localeData().eras();for(n=0,e=s.length;n<e;++n)if(t=this.clone().startOf("day").valueOf(),s[n].since<=t&&t<=s[n].until||s[n].until<=t&&t<=s[n].since)return s[n].abbr;return""}function EA(){var n,e,t,s,r=this.localeData().eras();for(n=0,e=r.length;n<e;++n)if(t=r[n].since<=r[n].until?1:-1,s=this.clone().startOf("day").valueOf(),r[n].since<=s&&s<=r[n].until||r[n].until<=s&&s<=r[n].since)return(this.year()-k(r[n].since).year())*t+r[n].offset;return this.year()}function TA(n){return te(this,"_erasNameRegex")||Wf.call(this),n?this._erasNameRegex:this._erasRegex}function bA(n){return te(this,"_erasAbbrRegex")||Wf.call(this),n?this._erasAbbrRegex:this._erasRegex}function SA(n){return te(this,"_erasNarrowRegex")||Wf.call(this),n?this._erasNarrowRegex:this._erasRegex}function Bf(n,e){return e.erasAbbrRegex(n)}function CA(n,e){return e.erasNameRegex(n)}function kA(n,e){return e.erasNarrowRegex(n)}function NA(n,e){return e._eraYearOrdinalRegex||Vi}function Wf(){var n=[],e=[],t=[],s=[],r,i,o=this.eras();for(r=0,i=o.length;r<i;++r)e.push(At(o[r].name)),n.push(At(o[r].abbr)),t.push(At(o[r].narrow)),s.push(At(o[r].name)),s.push(At(o[r].abbr)),s.push(At(o[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}x(0,["gg",2],0,function(){return this.weekYear()%100});x(0,["GG",2],0,function(){return this.isoWeekYear()%100});function cu(n,e){x(0,[n,n.length],0,e)}cu("gggg","weekYear");cu("ggggg","weekYear");cu("GGGG","isoWeekYear");cu("GGGGG","isoWeekYear");ht("weekYear","gg");ht("isoWeekYear","GG");dt("weekYear",1);dt("isoWeekYear",1);A("G",su);A("g",su);A("GG",fe,Bt);A("gg",fe,Bt);A("GGGG",Df,Af);A("gggg",Df,Af);A("GGGGG",nu,eu);A("ggggg",nu,eu);Ba(["gggg","ggggg","GGGG","GGGGG"],function(n,e,t,s){e[s.substr(0,2)]=H(n)});Ba(["gg","GG"],function(n,e,t,s){e[s]=k.parseTwoDigitYear(n)});function AA(n){return aw.call(this,n,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function DA(n){return aw.call(this,n,this.isoWeek(),this.isoWeekday(),1,4)}function RA(){return Bn(this.year(),1,4)}function xA(){return Bn(this.isoWeekYear(),1,4)}function OA(){var n=this.localeData()._week;return Bn(this.year(),n.dow,n.doy)}function PA(){var n=this.localeData()._week;return Bn(this.weekYear(),n.dow,n.doy)}function aw(n,e,t,s,r){var i;return n==null?Ko(this,s,r).year:(i=Bn(n,s,r),e>i&&(e=i),MA.call(this,n,e,t,s,r))}function MA(n,e,t,s,r){var i=Bv(n,e,t,s,r),o=zo(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}x("Q",0,"Qo","quarter");ht("quarter","Q");dt("quarter",7);A("Q",Dv);ie("Q",function(n,e){e[xn]=(H(n)-1)*3});function LA(n){return n==null?Math.ceil((this.month()+1)/3):this.month((n-1)*3+this.month()%3)}x("D",["DD",2],"Do","date");ht("date","D");dt("date",9);A("D",fe);A("DD",fe,Bt);A("Do",function(n,e){return n?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});ie(["D","DD"],ln);ie("Do",function(n,e){e[ln]=H(n.match(fe)[0])});var cw=Ui("Date",!0);x("DDD",["DDDD",3],"DDDo","dayOfYear");ht("dayOfYear","DDD");dt("dayOfYear",4);A("DDD",tu);A("DDDD",Rv);ie(["DDD","DDDD"],function(n,e,t){t._dayOfYear=H(n)});function FA(n){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return n==null?e:this.add(n-e,"d")}x("m",["mm",2],0,"minute");ht("minute","m");dt("minute",14);A("m",fe);A("mm",fe,Bt);ie(["m","mm"],Xt);var UA=Ui("Minutes",!1);x("s",["ss",2],0,"second");ht("second","s");dt("second",15);A("s",fe);A("ss",fe,Bt);ie(["s","ss"],On);var VA=Ui("Seconds",!1);x("S",0,0,function(){return~~(this.millisecond()/100)});x(0,["SS",2],0,function(){return~~(this.millisecond()/10)});x(0,["SSS",3],0,"millisecond");x(0,["SSSS",4],0,function(){return this.millisecond()*10});x(0,["SSSSS",5],0,function(){return this.millisecond()*100});x(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});x(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});x(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});x(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});ht("millisecond","ms");dt("millisecond",16);A("S",tu,Dv);A("SS",tu,Bt);A("SSS",tu,Rv);var hs,lw;for(hs="SSSS";hs.length<=9;hs+="S")A(hs,Vi);function BA(n,e){e[sr]=H(("0."+n)*1e3)}for(hs="S";hs.length<=9;hs+="S")ie(hs,BA);lw=Ui("Milliseconds",!1);x("z",0,0,"zoneAbbr");x("zz",0,0,"zoneName");function WA(){return this._isUTC?"UTC":""}function qA(){return this._isUTC?"Coordinated Universal Time":""}var I=Ua.prototype;I.add=PN;I.calendar=WN;I.clone=qN;I.diff=KN;I.endOf=iA;I.format=ZN;I.from=eA;I.fromNow=tA;I.to=nA;I.toNow=sA;I.get=jC;I.invalidAt=mA;I.isAfter=$N;I.isBefore=jN;I.isBetween=GN;I.isSame=HN;I.isSameOrAfter=YN;I.isSameOrBefore=zN;I.isValid=dA;I.lang=nw;I.locale=tw;I.localeData=sw;I.max=dN;I.min=hN;I.parsingFlags=fA;I.set=GC;I.startOf=rA;I.subtract=MN;I.toArray=lA;I.toObject=uA;I.toDate=cA;I.toISOString=JN;I.inspect=XN;typeof Symbol<"u"&&Symbol.for!=null&&(I[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});I.toJSON=hA;I.toString=QN;I.unix=aA;I.valueOf=oA;I.creationData=pA;I.eraName=vA;I.eraNarrow=wA;I.eraAbbr=IA;I.eraYear=EA;I.year=Vv;I.isLeapYear=uk;I.weekYear=AA;I.isoWeekYear=DA;I.quarter=I.quarters=LA;I.month=Fv;I.daysInMonth=ak;I.week=I.weeks=gk;I.isoWeek=I.isoWeeks=yk;I.weeksInYear=OA;I.weeksInWeekYear=PA;I.isoWeeksInYear=RA;I.isoWeeksInISOWeekYear=xA;I.date=cw;I.day=I.days=Dk;I.weekday=Rk;I.isoWeekday=xk;I.dayOfYear=FA;I.hour=I.hours=Vk;I.minute=I.minutes=UA;I.second=I.seconds=VA;I.millisecond=I.milliseconds=lw;I.utcOffset=IN;I.utc=TN;I.local=bN;I.parseZone=SN;I.hasAlignedHourOffset=CN;I.isDST=kN;I.isLocal=AN;I.isUtcOffset=DN;I.isUtc=Jv;I.isUTC=Jv;I.zoneAbbr=WA;I.zoneName=qA;I.dates=zt("dates accessor is deprecated. Use date instead.",cw);I.months=zt("months accessor is deprecated. Use month instead",Fv);I.years=zt("years accessor is deprecated. Use year instead",Vv);I.zone=zt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",EN);I.isDSTShifted=zt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",NN);function $A(n){return de(n*1e3)}function jA(){return de.apply(null,arguments).parseZone()}function uw(n){return n}var ne=Cf.prototype;ne.calendar=DC;ne.longDateFormat=PC;ne.invalidDate=LC;ne.ordinal=VC;ne.preparse=uw;ne.postformat=uw;ne.relativeTime=WC;ne.pastFuture=qC;ne.set=NC;ne.eras=gA;ne.erasParse=yA;ne.erasConvertYear=_A;ne.erasAbbrRegex=bA;ne.erasNameRegex=TA;ne.erasNarrowRegex=SA;ne.months=sk;ne.monthsShort=rk;ne.monthsParse=ok;ne.monthsRegex=lk;ne.monthsShortRegex=ck;ne.week=dk;ne.firstDayOfYear=pk;ne.firstDayOfWeek=mk;ne.weekdays=Sk;ne.weekdaysMin=kk;ne.weekdaysShort=Ck;ne.weekdaysParse=Ak;ne.weekdaysRegex=Ok;ne.weekdaysShortRegex=Pk;ne.weekdaysMinRegex=Mk;ne.isPM=Fk;ne.meridiem=Bk;function rl(n,e,t,s){var r=Jn(),i=Nn().set(s,e);return r[t](i,n)}function hw(n,e,t){if(jn(n)&&(e=n,n=void 0),n=n||"",e!=null)return rl(n,e,t,"month");var s,r=[];for(s=0;s<12;s++)r[s]=rl(n,s,t,"month");return r}function qf(n,e,t,s){typeof n=="boolean"?(jn(e)&&(t=e,e=void 0),e=e||""):(e=n,t=e,n=!1,jn(e)&&(t=e,e=void 0),e=e||"");var r=Jn(),i=n?r._week.dow:0,o,a=[];if(t!=null)return rl(e,(t+i)%7,s,"day");for(o=0;o<7;o++)a[o]=rl(e,(o+i)%7,s,"day");return a}function GA(n,e){return hw(n,e,"months")}function HA(n,e){return hw(n,e,"monthsShort")}function YA(n,e,t){return qf(n,e,t,"weekdays")}function zA(n,e,t){return qf(n,e,t,"weekdaysShort")}function KA(n,e,t){return qf(n,e,t,"weekdaysMin")}gs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(n){var e=n%10,t=H(n%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return n+t}});k.lang=zt("moment.lang is deprecated. Use moment.locale instead.",gs);k.langData=zt("moment.langData is deprecated. Use moment.localeData instead.",Jn);var Dn=Math.abs;function QA(){var n=this._data;return this._milliseconds=Dn(this._milliseconds),this._days=Dn(this._days),this._months=Dn(this._months),n.milliseconds=Dn(n.milliseconds),n.seconds=Dn(n.seconds),n.minutes=Dn(n.minutes),n.hours=Dn(n.hours),n.months=Dn(n.months),n.years=Dn(n.years),this}function dw(n,e,t,s){var r=an(e,t);return n._milliseconds+=s*r._milliseconds,n._days+=s*r._days,n._months+=s*r._months,n._bubble()}function JA(n,e){return dw(this,n,e,1)}function XA(n,e){return dw(this,n,e,-1)}function Sg(n){return n<0?Math.floor(n):Math.ceil(n)}function ZA(){var n=this._milliseconds,e=this._days,t=this._months,s=this._data,r,i,o,a,c;return n>=0&&e>=0&&t>=0||n<=0&&e<=0&&t<=0||(n+=Sg(hd(t)+e)*864e5,e=0,t=0),s.milliseconds=n%1e3,r=Wt(n/1e3),s.seconds=r%60,i=Wt(r/60),s.minutes=i%60,o=Wt(i/60),s.hours=o%24,e+=Wt(o/24),c=Wt(fw(e)),t+=c,e-=Sg(hd(c)),a=Wt(t/12),t%=12,s.days=e,s.months=t,s.years=a,this}function fw(n){return n*4800/146097}function hd(n){return n*146097/4800}function eD(n){if(!this.isValid())return NaN;var e,t,s=this._milliseconds;if(n=Kt(n),n==="month"||n==="quarter"||n==="year")switch(e=this._days+s/864e5,t=this._months+fw(e),n){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(e=this._days+Math.round(hd(this._months)),n){case"week":return e/7+s/6048e5;case"day":return e+s/864e5;case"hour":return e*24+s/36e5;case"minute":return e*1440+s/6e4;case"second":return e*86400+s/1e3;case"millisecond":return Math.floor(e*864e5)+s;default:throw new Error("Unknown unit "+n)}}function tD(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+H(this._months/12)*31536e6:NaN}function Xn(n){return function(){return this.as(n)}}var nD=Xn("ms"),sD=Xn("s"),rD=Xn("m"),iD=Xn("h"),oD=Xn("d"),aD=Xn("w"),cD=Xn("M"),lD=Xn("Q"),uD=Xn("y");function hD(){return an(this)}function dD(n){return n=Kt(n),this.isValid()?this[n+"s"]():NaN}function Mr(n){return function(){return this.isValid()?this._data[n]:NaN}}var fD=Mr("milliseconds"),mD=Mr("seconds"),pD=Mr("minutes"),gD=Mr("hours"),yD=Mr("days"),_D=Mr("months"),vD=Mr("years");function wD(){return Wt(this.days()/7)}var Rn=Math.round,ni={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ID(n,e,t,s,r){return r.relativeTime(e||1,!!t,n,s)}function ED(n,e,t,s){var r=an(n).abs(),i=Rn(r.as("s")),o=Rn(r.as("m")),a=Rn(r.as("h")),c=Rn(r.as("d")),l=Rn(r.as("M")),u=Rn(r.as("w")),h=Rn(r.as("y")),d=i<=t.ss&&["s",i]||i<t.s&&["ss",i]||o<=1&&["m"]||o<t.m&&["mm",o]||a<=1&&["h"]||a<t.h&&["hh",a]||c<=1&&["d"]||c<t.d&&["dd",c];return t.w!=null&&(d=d||u<=1&&["w"]||u<t.w&&["ww",u]),d=d||l<=1&&["M"]||l<t.M&&["MM",l]||h<=1&&["y"]||["yy",h],d[2]=e,d[3]=+n>0,d[4]=s,ID.apply(null,d)}function TD(n){return n===void 0?Rn:typeof n=="function"?(Rn=n,!0):!1}function bD(n,e){return ni[n]===void 0?!1:e===void 0?ni[n]:(ni[n]=e,n==="s"&&(ni.ss=e-1),!0)}function SD(n,e){if(!this.isValid())return this.localeData().invalidDate();var t=!1,s=ni,r,i;return typeof n=="object"&&(e=n,n=!1),typeof n=="boolean"&&(t=n),typeof e=="object"&&(s=Object.assign({},ni,e),e.s!=null&&e.ss==null&&(s.ss=e.s-1)),r=this.localeData(),i=ED(this,!t,s,r),t&&(i=r.pastFuture(+this,i)),r.postformat(i)}var Ch=Math.abs;function zr(n){return(n>0)-(n<0)||+n}function lu(){if(!this.isValid())return this.localeData().invalidDate();var n=Ch(this._milliseconds)/1e3,e=Ch(this._days),t=Ch(this._months),s,r,i,o,a=this.asSeconds(),c,l,u,h;return a?(s=Wt(n/60),r=Wt(s/60),n%=60,s%=60,i=Wt(t/12),t%=12,o=n?n.toFixed(3).replace(/\.?0+$/,""):"",c=a<0?"-":"",l=zr(this._months)!==zr(a)?"-":"",u=zr(this._days)!==zr(a)?"-":"",h=zr(this._milliseconds)!==zr(a)?"-":"",c+"P"+(i?l+i+"Y":"")+(t?l+t+"M":"")+(e?u+e+"D":"")+(r||s||n?"T":"")+(r?h+r+"H":"")+(s?h+s+"M":"")+(n?h+o+"S":"")):"P0D"}var J=au.prototype;J.isValid=yN;J.abs=QA;J.add=JA;J.subtract=XA;J.as=eD;J.asMilliseconds=nD;J.asSeconds=sD;J.asMinutes=rD;J.asHours=iD;J.asDays=oD;J.asWeeks=aD;J.asMonths=cD;J.asQuarters=lD;J.asYears=uD;J.valueOf=tD;J._bubble=ZA;J.clone=hD;J.get=dD;J.milliseconds=fD;J.seconds=mD;J.minutes=pD;J.hours=gD;J.days=yD;J.weeks=wD;J.months=_D;J.years=vD;J.humanize=SD;J.toISOString=lu;J.toString=lu;J.toJSON=lu;J.locale=tw;J.localeData=sw;J.toIsoString=zt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",lu);J.lang=nw;x("X",0,0,"unix");x("x",0,0,"valueOf");A("x",su);A("X",YC);ie("X",function(n,e,t){t._d=new Date(parseFloat(n)*1e3)});ie("x",function(n,e,t){t._d=new Date(H(n))});//! moment.js
k.version="2.29.4";CC(de);k.fn=I;k.min=fN;k.max=mN;k.now=pN;k.utc=Nn;k.unix=$A;k.months=GA;k.isDate=Fa;k.locale=gs;k.invalid=Xl;k.duration=an;k.isMoment=rn;k.weekdays=YA;k.parseZone=jA;k.localeData=Jn;k.isDuration=Wc;k.monthsShort=HA;k.weekdaysMin=KA;k.defineLocale=Pf;k.updateLocale=jk;k.locales=Gk;k.weekdaysShort=zA;k.normalizeUnits=Kt;k.relativeTimeRounding=TD;k.relativeTimeThreshold=bD;k.calendarFormat=BN;k.prototype=I;k.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};/**
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
 */const mw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(n,e){if(!n)throw Bi(e)},Bi=function(n){return new Error("Firebase Database ("+mw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const pw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},CD=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):CD(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},gw=function(n){const e=pw(n);return $f.encodeByteArray(e,!0)},il=function(n){return gw(n).replace(/\./g,"")},ol=function(n){try{return $f.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kD(n){return Jo(void 0,n)}function Jo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ND(t)||(n[t]=Jo(n[t],e[t]));return n}function ND(n){return n!=="__proto__"}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Gf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AD(){return typeof self=="object"&&self.self===self}function yw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vw(){return mw.NODE_ADMIN===!0}function DD(){return!Gf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xo(){return typeof indexedDB=="object"}function RD(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function xD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OD=()=>xD().__FIREBASE_DEFAULTS__,PD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},MD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ol(n[1]);return e&&JSON.parse(e)},ww=()=>{try{return OD()||PD()||MD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},LD=()=>{var n;return(n=ww())===null||n===void 0?void 0:n.config},FD=n=>{var e;return(e=ww())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Iw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[il(JSON.stringify(t)),il(JSON.stringify(o)),a].join(".")}/**
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
 */const UD="FirebaseError";class yt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=UD,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?VD(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yt(r,a,s)}}function VD(n,e){return n.replace(BD,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const BD=/\{\$([^}]+)}/g;/**
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
 */function Zo(n){return JSON.parse(n)}function xe(n){return JSON.stringify(n)}/**
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
 */const Ew=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=Zo(ol(i[0])||""),t=Zo(ol(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},WD=function(n){const e=Ew(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qD=function(n){const e=Ew(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function al(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function dd(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Cg(i)&&Cg(o)){if(!dd(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Cg(n){return n!==null&&typeof n=="object"}/**
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
 */function Fr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function si(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function bo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class $D{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):h<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Tw(n,e){const t=new jD(n,e);return t.subscribe.bind(t)}class jD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");GD(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=kh),r.error===void 0&&(r.error=kh),r.complete===void 0&&(r.complete=kh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GD(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kh(){}/**
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
 */const L=function(n,e,t,s){let r;if(s<e?r="at least "+e:s>t&&(r=t===0?"none":"no more than "+t),r){const i=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(i)}};function Ct(n,e){return`${n} failed: ${e} argument `}function Ue(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(Ct(n,e)+"must be a valid function.")}function kg(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(Ct(n,e)+"must be a valid context object.")}/**
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
 */const HD=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,T(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},hu=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function N(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class bw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Et;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zD(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:YD(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YD(n){return n===Ks?void 0:n}function zD(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Hf=[];var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Cw={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},KD=K.INFO,QD={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},JD=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=QD[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wi{constructor(e){this.name=e,this._logLevel=KD,this._logHandler=JD,this._userLogHandler=null,Hf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function XD(n){Hf.forEach(e=>{e.setLogLevel(n)})}function ZD(n,e){for(const t of Hf){let s=null;e&&e.level&&(s=Cw[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&n({level:K[i].toLowerCase(),message:a,args:o,type:r.name})}}}const eR=(n,e)=>e.some(t=>n instanceof t);let Ng,Ag;function tR(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nR(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,fd=new WeakMap,Nw=new WeakMap,Nh=new WeakMap,Yf=new WeakMap;function sR(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ys(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kw.set(t,n)}).catch(()=>{}),Yf.set(e,n),e}function rR(n){if(fd.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});fd.set(n,e)}let md={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ys(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iR(n){md=n(md)}function oR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ah(this),e,...t);return Nw.set(s,e.sort?e.sort():[e]),ys(s)}:nR().includes(n)?function(...e){return n.apply(Ah(this),e),ys(kw.get(this))}:function(...e){return ys(n.apply(Ah(this),e))}}function aR(n){return typeof n=="function"?oR(n):(n instanceof IDBTransaction&&rR(n),eR(n,tR())?new Proxy(n,md):n)}function ys(n){if(n instanceof IDBRequest)return sR(n);if(Nh.has(n))return Nh.get(n);const e=aR(n);return e!==n&&(Nh.set(n,e),Yf.set(e,n)),e}const Ah=n=>Yf.get(n);function cR(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=ys(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ys(o.result),c.oldVersion,c.newVersion,ys(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const lR=["get","getKey","getAll","getAllKeys","count"],uR=["put","add","delete","clear"],Dh=new Map;function Dg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=uR.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lR.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Dh.set(e,i),i}iR(n=>({...n,get:(e,t,s)=>Dg(e,t)||n.get(e,t,s),has:(e,t)=>!!Dg(e,t)||n.has(e,t)}));/**
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
 */class hR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dR(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",Rg="0.8.4";/**
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
 */const _r=new Wi("@firebase/app"),fR="@firebase/app-compat",mR="@firebase/analytics-compat",pR="@firebase/analytics",gR="@firebase/app-check-compat",yR="@firebase/app-check",_R="@firebase/auth",vR="@firebase/auth-compat",wR="@firebase/database",IR="@firebase/database-compat",ER="@firebase/functions",TR="@firebase/functions-compat",bR="@firebase/installations",SR="@firebase/installations-compat",CR="@firebase/messaging",kR="@firebase/messaging-compat",NR="@firebase/performance",AR="@firebase/performance-compat",DR="@firebase/remote-config",RR="@firebase/remote-config-compat",xR="@firebase/storage",OR="@firebase/storage-compat",PR="@firebase/firestore",MR="@firebase/firestore-compat",LR="firebase",FR="9.14.0";/**
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
 */const Es="[DEFAULT]",UR={[pd]:"fire-core",[fR]:"fire-core-compat",[pR]:"fire-analytics",[mR]:"fire-analytics-compat",[yR]:"fire-app-check",[gR]:"fire-app-check-compat",[_R]:"fire-auth",[vR]:"fire-auth-compat",[wR]:"fire-rtdb",[IR]:"fire-rtdb-compat",[ER]:"fire-fn",[TR]:"fire-fn-compat",[bR]:"fire-iid",[SR]:"fire-iid-compat",[CR]:"fire-fcm",[kR]:"fire-fcm-compat",[NR]:"fire-perf",[AR]:"fire-perf-compat",[DR]:"fire-rc",[RR]:"fire-rc-compat",[xR]:"fire-gcs",[OR]:"fire-gcs-compat",[PR]:"fire-fst",[MR]:"fire-fst-compat","fire-js":"fire-js",[LR]:"fire-js-all"};/**
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
 */const Ts=new Map,ea=new Map;function ll(n,e){try{n.container.addComponent(e)}catch(t){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Aw(n,e){n.container.addOrOverwriteComponent(e)}function Gn(n){const e=n.name;if(ea.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,n);for(const t of Ts.values())ll(t,n);return!0}function Dw(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function VR(n,e,t=Es){Dw(n,e).clearInstance(t)}function BR(){ea.clear()}/**
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
 */const WR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new Lr("app","Firebase",WR);/**
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
 */class qR{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=FR;function zf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Es,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(t||(t=LD()),!t)throw Wn.create("no-options");const i=Ts.get(r);if(i){if(dd(t,i.options)&&dd(s,i.config))return i;throw Wn.create("duplicate-app",{appName:r})}const o=new Sw(r);for(const c of ea.values())o.addComponent(c);const a=new qR(t,s,o);return Ts.set(r,a),a}function $R(n=Es){const e=Ts.get(n);if(!e&&n===Es)return zf();if(!e)throw Wn.create("no-app",{appName:n});return e}function jR(){return Array.from(Ts.values())}async function Rw(n){const e=n.name;Ts.has(e)&&(Ts.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ht(n,e,t){var s;let r=(s=UR[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}Gn(new Mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function xw(n,e){if(n!==null&&typeof n!="function")throw Wn.create("invalid-log-argument");ZD(n,e)}function Ow(n){XD(n)}/**
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
 */const GR="firebase-heartbeat-database",HR=1,ta="firebase-heartbeat-store";let Rh=null;function Pw(){return Rh||(Rh=cR(GR,HR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ta)}}}).catch(n=>{throw Wn.create("idb-open",{originalErrorMessage:n.message})})),Rh}async function YR(n){var e;try{return(await Pw()).transaction(ta).objectStore(ta).get(Mw(n))}catch(t){if(t instanceof yt)_r.warn(t.message);else{const s=Wn.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});_r.warn(s.message)}}}async function xg(n,e){var t;try{const r=(await Pw()).transaction(ta,"readwrite");return await r.objectStore(ta).put(e,Mw(n)),r.done}catch(s){if(s instanceof yt)_r.warn(s.message);else{const r=Wn.create("idb-set",{originalErrorMessage:(t=s)===null||t===void 0?void 0:t.message});_r.warn(r.message)}}}function Mw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zR=1024,KR=30*24*60*60*1e3;class QR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XR(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Og();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=KR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Og(),{heartbeatsToSend:t,unsentEntries:s}=JR(this._heartbeatsCache.heartbeats),r=il(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Og(){return new Date().toISOString().substring(0,10)}function JR(n,e=zR){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pg(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Pg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xo()?RD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pg(n){return il(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ZR(n){Gn(new Mt("platform-logger",e=>new hR(e),"PRIVATE")),Gn(new Mt("heartbeat",e=>new QR(e),"PRIVATE")),Ht(pd,Rg,n),Ht(pd,Rg,"esm2017"),Ht("fire-js","")}ZR("");const ex=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ls,_DEFAULT_ENTRY_NAME:Es,_addComponent:ll,_addOrOverwriteComponent:Aw,_apps:Ts,_clearComponents:BR,_components:ea,_getProvider:Dw,_registerComponent:Gn,_removeServiceInstance:VR,deleteApp:Rw,getApp:$R,getApps:jR,initializeApp:zf,onLog:xw,registerVersion:Ht,setLogLevel:Ow,FirebaseError:yt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class tx{constructor(e,t){this._delegate=e,this.firebase=t,ll(e,new Mt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Rw(this._delegate)))}_getService(e,t=Es){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Es){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ll(this._delegate,e)}_addOrOverwriteComponent(e){Aw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const nx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Mg=new Lr("app-compat","Firebase",nx);/**
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
 */function sx(n){const e={},t={__esModule:!0,initializeApp:i,app:r,registerVersion:Ht,setLogLevel:Ow,onLog:xw,apps:null,SDK_VERSION:Ls,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:ex}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function r(l){if(l=l||Es,!Pt(e,l))throw Mg.create("no-app",{appName:l});return e[l]}r.App=n;function i(l,u={}){const h=zf(l,u);if(Pt(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Gn(l)&&l.type==="PUBLIC"){const d=(f=r())=>{if(typeof f[h]!="function")throw Mg.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Jo(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function Lw(){const n=sx(tx);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Lw,extendNamespace:e,createSubscribe:Tw,ErrorFactory:Lr,deepExtend:Jo});function e(t){Jo(n,t)}return n}const rx=Lw();/**
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
 */const Lg=new Wi("@firebase/app-compat"),ix="@firebase/app-compat",ox="0.1.39";/**
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
 */function ax(n){Ht(ix,ox,n)}/**
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
 */if(AD()&&self.firebase!==void 0){Lg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Lg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Lt=rx;ax();var cx="firebase",lx="9.14.0";/**
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
 */Lt.registerVersion(cx,lx,"app-compat");function Kf(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}const lo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Kr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function ux(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Fw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hx=ux,dx=Fw,Uw=new Lr("auth","Firebase",Fw());/**
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
 */const Fg=new Wi("@firebase/auth");function $c(n,...e){Fg.logLevel<=K.ERROR&&Fg.error(`Auth (${Ls}): ${n}`,...e)}/**
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
 */function rt(n,...e){throw Qf(n,...e)}function tt(n,...e){return Qf(n,...e)}function Vw(n,e,t){const s=Object.assign(Object.assign({},dx()),{[e]:t});return new Lr("auth","Firebase",s).create(e,{appName:n.name})}function qi(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&rt(n,"argument-error"),Vw(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qf(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Uw.create(n,...e)}function E(n,e,...t){if(!n)throw Qf(e,...t)}function pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $c(e),new Error(e)}function on(n,e){n||pn(e)}/**
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
 */const Ug=new Map;function xt(n){on(n instanceof Function,"Expected a class definition");let e=Ug.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ug.set(n,e),e)}function fx(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function na(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jf(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jf()||yw()||"connection"in navigator)?navigator.onLine:!0}function px(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wa{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=jf()||uu()}get(){return mx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xf(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Bw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const yx=new Wa(3e4,6e4);function Me(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ye(n,e,t,s,r={}){return Ww(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Bw.fetch()(qw(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ww(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},gx),e);try{const r=new _x(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw So(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw So(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vw(n,u,l);rt(n,u)}}catch(r){if(r instanceof yt)throw r;rt(n,"network-request-failed")}}async function Zn(n,e,t,s,r={}){const i=await Ye(n,e,t,s,r);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function qw(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?Xf(n.config,r):`${n.config.apiScheme}://${r}`}class _x{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),yx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=tt(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function vx(n,e){return Ye(n,"POST","/v1/accounts:delete",e)}async function wx(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function Ix(n,e){return Ye(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(n,e=!1){const t=N(n),s=await t.getIdToken(e),r=du(s);E(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xo(xh(r.auth_time)),issuedAtTime:xo(xh(r.iat)),expirationTime:xo(xh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xh(n){return Number(n)*1e3}function du(n){var e;const[t,s,r]=n.split(".");if(t===void 0||s===void 0||r===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const i=ol(s);return i?JSON.parse(i):($c("Failed to decode base64 JWT payload"),null)}catch(i){return $c("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Tx(n){const e=du(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yt&&bx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function bx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $w{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Hn(n,Ix(t,{idToken:s}));E(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nx(i.providerUserInfo):[],a=kx(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $w(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Cx(n){const e=N(n);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kx(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Nx(n){return n.map(e=>{var{providerId:t}=e,s=Kf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ax(n,e){const t=await Ww(n,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=qw(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ax(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new ra;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function is(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Kf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $w(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ex(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await sa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=t.createdAt)!==null&&l!==void 0?l:void 0,q=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Y,emailVerified:ve,isAnonymous:Ee,providerData:ue,stsTokenManager:Qe}=t;E(Y&&Qe,e,"internal-error");const Gs=ra.fromJSON(this.name,Qe);E(typeof Y=="string",e,"internal-error"),is(h,e.name),is(d,e.name),E(typeof ve=="boolean",e,"internal-error"),E(typeof Ee=="boolean",e,"internal-error"),is(f,e.name),is(m,e.name),is(g,e.name),is(b,e.name),is(O,e.name),is(q,e.name);const wh=new hr({uid:Y,auth:e,email:d,emailVerified:ve,displayName:h,isAnonymous:Ee,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:Gs,createdAt:O,lastLoginAt:q});return ue&&Array.isArray(ue)&&(wh.providerData=ue.map(m0=>Object.assign({},m0))),b&&(wh._redirectEventId=b),wh}static async _fromIdTokenResponse(e,t,s=!1){const r=new ra;r.updateFromServerResponse(t);const i=new hr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await sa(i),i}}/**
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
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jw.type="NONE";const yi=jw;/**
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
 */function dr(n,e,t){return`firebase:${n}:${e}:${t}`}class li{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new li(xt(yi),e,s);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||xt(yi);const o=dr(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=hr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new li(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new li(i,e,s))}}/**
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
 */function Bg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zw(e))return"Blackberry";if(Kw(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||Hw(e))&&!e.includes("edge/"))return"Chrome";if(qa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gw(n=Ie()){return/firefox\//i.test(n)}function Zf(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hw(n=Ie()){return/crios\//i.test(n)}function Yw(n=Ie()){return/iemobile/i.test(n)}function qa(n=Ie()){return/android/i.test(n)}function zw(n=Ie()){return/blackberry/i.test(n)}function Kw(n=Ie()){return/webos/i.test(n)}function $i(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dx(n=Ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Rx(n=Ie()){var e;return $i(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xx(){return _w()&&document.documentMode===10}function Qw(n=Ie()){return $i(n)||qa(n)||Kw(n)||zw(n)||/windows phone/i.test(n)||Yw(n)}function Ox(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jw(n,e=[]){let t;switch(n){case"Browser":t=Bg(Ie());break;case"Worker":t=`${Bg(Ie())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ls}/${s}`}/**
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
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=r)===null||t===void 0?void 0:t.message})}}}/**
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
 */class Mx{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await sa(e)}catch(s){if(((t=s)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=px()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?N(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,s,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function je(n){return N(n)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tw(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lx(n,e,t){const s=je(n);E(s._canInitEmulator,s,"emulator-config-failed"),E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=Xw(e),{host:o,port:a}=Fx(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ux()}function Xw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Fx(n){const e=Xw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:qg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:qg(o)}}}function qg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ux(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ji{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,t){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
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
 */async function Zw(n,e){return Ye(n,"POST","/v1/accounts:resetPassword",Me(n,e))}async function eI(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function Vx(n,e){return Ye(n,"POST","/v1/accounts:update",Me(n,e))}/**
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
 */async function Bx(n,e){return Zn(n,"POST","/v1/accounts:signInWithPassword",Me(n,e))}async function fu(n,e){return Ye(n,"POST","/v1/accounts:sendOobCode",Me(n,e))}async function Wx(n,e){return fu(n,e)}async function qx(n,e){return fu(n,e)}async function $x(n,e){return fu(n,e)}async function jx(n,e){return fu(n,e)}/**
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
 */async function Gx(n,e){return Zn(n,"POST","/v1/accounts:signInWithEmailLink",Me(n,e))}async function Hx(n,e){return Zn(n,"POST","/v1/accounts:signInWithEmailLink",Me(n,e))}/**
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
 */class ia extends ji{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ia(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ia(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Bx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gx(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hx(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qn(n,e){return Zn(n,"POST","/v1/accounts:signInWithIdp",Me(n,e))}/**
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
 */const Yx="http://localhost";class En extends ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Kf(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new En(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,qn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}buildRequest(){const e={requestUri:Yx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fr(t)}return e}}/**
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
 */async function zx(n,e){return Ye(n,"POST","/v1/accounts:sendVerificationCode",Me(n,e))}async function Kx(n,e){return Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Me(n,e))}async function Qx(n,e){const t=await Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Me(n,e));if(t.temporaryProof)throw So(n,"account-exists-with-different-credential",t);return t}const Jx={USER_NOT_FOUND:"user-not-found"};async function Xx(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Me(n,t),Jx)}/**
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
 */class fr extends ji{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new fr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new fr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Kx(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Qx(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Xx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new fr({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
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
 */function Zx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(n){const e=si(bo(n)).link,t=e?si(bo(e)).deep_link_id:null,s=si(bo(n)).deep_link_id;return(s?si(bo(s)).link:null)||s||t||e||n}class mu{constructor(e){var t,s,r,i,o,a;const c=si(bo(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Zx((r=c.mode)!==null&&r!==void 0?r:null);E(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=eO(e);try{return new mu(t)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,t){return ia._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=mu.parseLink(t);return E(s,"argument-error"),ia._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends es{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ui extends Gi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),En._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),En._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ui.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ui.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!s&&!r&&!t&&!i||!a)return null;try{return new ui(a)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class un extends Gi{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class hn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hn.credential(t,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class dn extends Gi{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */const tO="http://localhost";class _i extends ji{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,qn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=t;return!s||!r||!i||s!==r?null:new _i(s,i)}static _create(e,t){return new _i(e,t)}buildRequest(){return{requestUri:tO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const nO="saml.";class ul extends es{constructor(e){E(e.startsWith(nO),"argument-error"),super(e)}static credentialFromResult(e){return ul.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ul.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=_i.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return _i._create(s,t)}catch{return null}}}/**
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
 */class fn extends Gi{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fn.credential(t,s)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */async function tI(n,e){return Zn(n,"POST","/v1/accounts:signUp",Me(n,e))}/**
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
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await hr._fromIdTokenResponse(e,s,r),o=$g(s);return new Yt({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=$g(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function $g(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function sO(n){var e;const t=je(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Yt({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await tI(t,{returnSecureToken:!0}),r=await Yt._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(r.user),r}/**
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
 */class hl extends yt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new hl(e,t,s,r)}}function nI(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(n,i,e,s):i})}/**
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
 */function sI(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function rO(n,e){const t=N(n);await pu(!0,t,e);const{providerUserInfo:s}=await wx(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=sI(s||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function em(n,e,t=!1){const s=await Hn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",s)}async function pu(n,e,t){await sa(e);const s=sI(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";E(s.has(t)===n,e.auth,r)}/**
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
 */async function rI(n,e,t=!1){var s;const{auth:r}=n,i="reauthenticate";try{const o=await Hn(n,nI(r,i,e,n),t);E(o.idToken,r,"internal-error");const a=du(o.idToken);E(a,r,"internal-error");const{sub:c}=a;return E(n.uid===c,r,"user-mismatch"),Yt._forOperation(n,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),o}}/**
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
 */async function iI(n,e,t=!1){const s="signIn",r=await nI(n,s,e),i=await Yt._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function gu(n,e){return iI(je(n),e)}async function oI(n,e){const t=N(n);return await pu(!1,t,e.providerId),em(t,e)}async function aI(n,e){return rI(N(n),e)}/**
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
 */async function iO(n,e){return Zn(n,"POST","/v1/accounts:signInWithCustomToken",Me(n,e))}/**
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
 */async function oO(n,e){const t=je(n),s=await iO(t,{token:e,returnSecureToken:!0}),r=await Yt._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
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
 */class yu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tm._fromServerResponse(e,t):rt(e,"internal-error")}}class tm extends yu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tm(t)}}/**
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
 */function _u(n,e,t){var s;E(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),E(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(E(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(E(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function aO(n,e,t){const s=N(n),r={requestType:"PASSWORD_RESET",email:e};t&&_u(s,r,t),await qx(s,r)}async function cO(n,e,t){await Zw(N(n),{oobCode:e,newPassword:t})}async function lO(n,e){await Vx(N(n),{oobCode:e})}async function cI(n,e){const t=N(n),s=await Zw(t,{oobCode:e}),r=s.requestType;switch(E(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(s.mfaInfo,t,"internal-error");default:E(s.email,t,"internal-error")}let i=null;return s.mfaInfo&&(i=yu._fromServerResponse(je(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function uO(n,e){const{data:t}=await cI(N(n),e);return t.email}async function hO(n,e,t){const s=je(n),r=await tI(s,{returnSecureToken:!0,email:e,password:t}),i=await Yt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function dO(n,e,t){return gu(N(n),Fs.credential(e,t))}/**
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
 */async function fO(n,e,t){const s=N(n),r={requestType:"EMAIL_SIGNIN",email:e};E(t.handleCodeInApp,s,"argument-error"),t&&_u(s,r,t),await $x(s,r)}function mO(n,e){const t=mu.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function pO(n,e,t){const s=N(n),r=Fs.credentialWithLink(e,t||na());return E(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),gu(s,r)}/**
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
 */async function gO(n,e){return Ye(n,"POST","/v1/accounts:createAuthUri",Me(n,e))}/**
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
 */async function yO(n,e){const t=Jf()?na():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:r}=await gO(N(n),s);return r||[]}async function _O(n,e){const t=N(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&_u(t.auth,r,e);const{email:i}=await Wx(t.auth,r);i!==n.email&&await n.reload()}async function vO(n,e,t){const s=N(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&_u(s.auth,i,t);const{email:o}=await jx(s.auth,i);o!==n.email&&await n.reload()}/**
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
 */async function wO(n,e){return Ye(n,"POST","/v1/accounts:update",e)}/**
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
 */async function IO(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=N(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Hn(s,wO(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function EO(n,e){return lI(N(n),e,null)}function TO(n,e){return lI(N(n),null,e)}async function lI(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await Hn(n,eI(s,i));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function bO(n){var e,t;if(!n)return null;const{providerId:s}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n==null?void 0:n.idToken)){const o=(t=(e=du(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hi(i,a)}}if(!s)return null;switch(s){case"facebook.com":return new SO(i,r);case"github.com":return new CO(i,r);case"google.com":return new kO(i,r);case"twitter.com":return new NO(i,r,n.screenName||null);case"custom":case"anonymous":return new hi(i,null);default:return new hi(i,s,r)}}class hi{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class uI extends hi{constructor(e,t,s,r){super(e,t,s),this.username=r}}class SO extends hi{constructor(e,t){super(e,"facebook.com",t)}}class CO extends uI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class kO extends hi{constructor(e,t){super(e,"google.com",t)}}class NO extends uI{constructor(e,t,s){super(e,"twitter.com",t,s)}}function AO(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:bO(t)}class rr{constructor(e,t,s){this.type=e,this.credential=t,this.auth=s}static _fromIdtoken(e,t){return new rr("enroll",e,t)}static _fromMfaPendingCredential(e){return new rr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return rr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return rr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class nm{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=je(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>yu._fromServerResponse(s,a));E(r.mfaPendingCredential,s,"internal-error");const o=rr._fromMfaPendingCredential(r.mfaPendingCredential);return new nm(o,i,async a=>{const c=await a._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Yt._fromIdTokenResponse(s,t.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return E(t.user,s,"internal-error"),Yt._forOperation(t.user,t.operationType,l);default:rt(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function DO(n,e){var t;const s=N(n),r=e;return E(e.customData.operationType,s,"argument-error"),E((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),nm._fromError(s,r)}/**
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
 */function RO(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:start",Me(n,e))}function xO(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:finalize",Me(n,e))}function OO(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Me(n,e))}class sm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>yu._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new sm(e)}async getSession(){return rr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const s=e,r=await this.getSession(),i=await Hn(this.user,s._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const s=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Hn(this.user,OO(this.user.auth,{idToken:r,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==s),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(((t=o)===null||t===void 0?void 0:t.code)!=="auth/user-token-expired")throw o}}}const Oh=new WeakMap;function PO(n){const e=N(n);return Oh.has(e)||Oh.set(e,sm._fromUser(e)),Oh.get(e)}const dl="__sak";/**
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
 */class hI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MO(){const n=Ie();return Zf(n)||$i(n)}const LO=1e3,FO=10;class dI extends hI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MO()&&Ox(),this.fallbackToPolling=Qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);xx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,FO):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},LO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dI.type="LOCAL";const rm=dI;/**
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
 */class fI extends hI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fI.type="SESSION";const vr=fI;/**
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
 */function UO(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new vu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await UO(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function $a(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class VO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$a("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Re(){return window}function BO(n){Re().location.href=n}/**
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
 */function im(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function WO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qO(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $O(){return im()?self:null}/**
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
 */const mI="firebaseLocalStorageDb",jO=1,fl="firebaseLocalStorage",pI="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wu(n,e){return n.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function GO(){const n=indexedDB.deleteDatabase(mI);return new ja(n).toPromise()}function gd(){const n=indexedDB.open(mI,jO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(fl,{keyPath:pI})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(fl)?e(s):(s.close(),await GO(),e(await gd()))})})}async function jg(n,e,t){const s=wu(n,!0).put({[pI]:e,value:t});return new ja(s).toPromise()}async function HO(n,e){const t=wu(n,!1).get(e),s=await new ja(t).toPromise();return s===void 0?null:s.value}function Gg(n,e){const t=wu(n,!0).delete(e);return new ja(t).toPromise()}const YO=800,zO=3;class gI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>zO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance($O()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await WO(),!this.activeServiceWorker)return;this.sender=new VO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await jg(e,dl,"1"),await Gg(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>HO(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=wu(r,!1).getAll();return new ja(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gI.type="LOCAL";const oa=gI;/**
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
 */function KO(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:start",Me(n,e))}function QO(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:finalize",Me(n,e))}/**
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
 */async function JO(n){return(await Ye(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function XO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function yI(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",XO().appendChild(s)})}function _I(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const ZO=500,eP=6e4,bc=1e12;class tP{constructor(e){this.auth=e,this.counter=bc,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new nP(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||bc;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||bc;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||bc;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class nP{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},eP)},ZO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Ph=_I("rcb"),rP=new Wa(3e4,6e4),iP="https://www.google.com/recaptcha/api.js?";class oP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Re().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return E(aP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Re().grecaptcha):new Promise((s,r)=>{const i=Re().setTimeout(()=>{r(tt(e,"network-request-failed"))},rP.get());Re()[Ph]=()=>{Re().clearTimeout(i),delete Re()[Ph];const a=Re().grecaptcha;if(!a){r(tt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,s(a)};const o=`${iP}?${Fr({onload:Ph,render:"explicit",hl:t})}`;yI(o).catch(()=>{clearTimeout(i),r(tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Re().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function aP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class cP{async load(e){return new tP(e)}clearedOneInstance(){}}/**
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
 */const vI="recaptcha",lP={theme:"light",type:"image"};class uP{constructor(e,t=Object.assign({},lP),s){this.parameters=t,this.type=vI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(s),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new cP:new oP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=o=>{!o||(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Re()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(Jf()&&!im(),this.auth,"internal-error"),await hP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await JO(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function hP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class om{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=fr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function dP(n,e,t){const s=je(n),r=await Iu(s,e,N(t));return new om(r,i=>gu(s,i))}async function fP(n,e,t){const s=N(n);await pu(!1,s,"phone");const r=await Iu(s.auth,e,N(t));return new om(r,i=>oI(s,i))}async function mP(n,e,t){const s=N(n),r=await Iu(s.auth,e,N(t));return new om(r,i=>aI(s,i))}async function Iu(n,e,t){var s;const r=await t.verify();try{E(typeof r=="string",n,"argument-error"),E(t.type===vI,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return E(o.type==="enroll",n,"internal-error"),(await RO(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{E(o.type==="signin",n,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return E(a,n,"missing-multi-factor-info"),(await KO(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await zx(n,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{t._reset()}}async function pP(n,e){await em(N(n),e)}/**
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
 */class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return Iu(this.auth,e,N(t))}static credential(e,t){return fr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?fr._fromTokenResponse(t,s):null}}tn.PROVIDER_ID="phone";tn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ur(n,e){return e?xt(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class am extends ji{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gP(n){return iI(n.auth,new am(n),n.bypassAuthState)}function yP(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),rI(t,new am(n),n.bypassAuthState)}async function _P(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),em(t,new am(n),n.bypassAuthState)}/**
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
 */class wI{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gP;case"linkViaPopup":case"linkViaRedirect":return _P;case"reauthViaPopup":case"reauthViaRedirect":return yP;default:rt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vP=new Wa(2e3,1e4);async function wP(n,e,t){const s=je(n);qi(n,e,es);const r=Ur(s,t);return new Pn(s,"signInViaPopup",e,r).executeNotNull()}async function IP(n,e,t){const s=N(n);qi(s.auth,e,es);const r=Ur(s.auth,t);return new Pn(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function EP(n,e,t){const s=N(n);qi(s.auth,e,es);const r=Ur(s.auth,t);return new Pn(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class Pn extends wI{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=$a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,vP.get())};e()}}Pn.currentPopupAction=null;/**
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
 */const TP="pendingRedirect",Oo=new Map;class bP extends wI{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const s=await SP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SP(n,e){const t=EI(e),s=II(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function cm(n,e){return II(n)._set(EI(e),"true")}function CP(){Oo.clear()}function lm(n,e){Oo.set(n._key(),e)}function II(n){return xt(n._redirectPersistence)}function EI(n){return dr(TP,n.config.apiKey,n.name)}/**
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
 */function kP(n,e,t){return NP(n,e,t)}async function NP(n,e,t){const s=je(n);qi(n,e,es);const r=Ur(s,t);return await cm(r,s),r._openRedirect(s,e,"signInViaRedirect")}function AP(n,e,t){return DP(n,e,t)}async function DP(n,e,t){const s=N(n);qi(s.auth,e,es);const r=Ur(s.auth,t);await cm(r,s.auth);const i=await TI(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function RP(n,e,t){return xP(n,e,t)}async function xP(n,e,t){const s=N(n);qi(s.auth,e,es);const r=Ur(s.auth,t);await pu(!1,s,e.providerId),await cm(r,s.auth);const i=await TI(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function OP(n,e){return await je(n)._initializationPromise,Eu(n,e,!1)}async function Eu(n,e,t=!1){const s=je(n),r=Ur(s,e),o=await new bP(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function TI(n){const e=$a(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const PP=10*60*1e3;class bI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!SI(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function SI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SI(n);default:return!1}}/**
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
 */async function CI(n,e={}){return Ye(n,"GET","/v1/projects",e)}/**
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
 */const LP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FP=/^https?/;async function UP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await CI(n);for(const t of e)try{if(VP(t))return}catch{}rt(n,"unauthorized-domain")}function VP(n){const e=na(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!FP.test(t))return!1;if(LP.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const BP=new Wa(3e4,6e4);function Yg(){const n=Re().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WP(n){return new Promise((e,t)=>{var s,r,i;function o(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),t(tt(n,"network-request-failed"))},timeout:BP.get()})}if(!((r=(s=Re().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Re().gapi)===null||i===void 0)&&i.load)o();else{const a=_I("iframefcb");return Re()[a]=()=>{gapi.load?o():t(tt(n,"network-request-failed"))},yI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw jc=null,e})}let jc=null;function qP(n){return jc=jc||WP(n),jc}/**
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
 */const $P=new Wa(5e3,15e3),jP="__/auth/iframe",GP="emulator/auth/iframe",HP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xf(e,GP):`https://${n.config.authDomain}/${jP}`,s={apiKey:e.apiKey,appName:n.name,v:Ls},r=YP.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Fr(s).slice(1)}`}async function KP(n){const e=await qP(n),t=Re().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:zP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tt(n,"network-request-failed"),a=Re().setTimeout(()=>{i(o)},$P.get());function c(){Re().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const QP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JP=500,XP=600,ZP="_blank",eM="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tM(n,e,t,s=JP,r=XP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},QP),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ie().toLowerCase();t&&(a=Hw(l)?ZP:t),Gw(l)&&(e=e||eM,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Rx(l)&&a!=="_self")return nM(e||"",a),new zg(null);const h=window.open(e||"",a,u);E(h,n,"popup-blocked");try{h.focus()}catch{}return new zg(h)}function nM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sM="__/auth/handler",rM="emulator/auth/handler";function yd(n,e,t,s,r,i){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ls,eventId:r};if(e instanceof es){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",al(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Gi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${iM(n)}?${Fr(a).slice(1)}`}function iM({config:n}){return n.emulator?Xf(n,rM):`https://${n.authDomain}/${sM}`}/**
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
 */const Mh="webStorageSupport";class oM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vr,this._completeRedirectFn=Eu,this._overrideRedirectResult=lm}async _openPopup(e,t,s,r){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=yd(e,t,s,na(),r);return tM(e,o,$a())}async _openRedirect(e,t,s,r){return await this._originValidation(e),BO(yd(e,t,s,na(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(on(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await KP(e),s=new bI(e);return t.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mh,{type:Mh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Mh];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qw()||Zf()||$i()}}const aM=oM;class cM{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return pn("unexpected MultiFactorSessionType")}}}class um extends cM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new um(e)}_finalizeEnroll(e,t,s){return xO(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return QO(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kI{constructor(){}static assertion(e){return um._fromCredential(e)}}kI.FACTOR_ID="phone";var Kg="@firebase/auth",Qg="0.20.11";/**
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
 */class lM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hM(n){Gn(new Mt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{E(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),E(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jw(n)},u=new Mx(a,c,l);return fx(u,t),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Gn(new Mt("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(s=>new lM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Kg,Qg,uM(n)),Ht(Kg,Qg,"esm2017")}/**
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
 */const dM=5*60;FD("authIdTokenMaxAge");hM("Browser");/**
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
 */function wr(){return window}/**
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
 */const fM=2e3;async function mM(n,e,t){var s;const{BuildInfo:r}=wr();on(e.sessionId,"AuthEvent did not contain a session ID");const i=await vM(e.sessionId),o={};return $i()?o.ibi=r.packageName:qa()?o.apn=r.packageName:rt(n,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=i,yd(n,t,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function pM(n){const{BuildInfo:e}=wr(),t={};$i()?t.iosBundleId=e.packageName:qa()?t.androidPackageName=e.packageName:rt(n,"operation-not-supported-in-this-environment"),await CI(n,t)}function gM(n){const{cordova:e}=wr();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let r=null;s?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,Dx()?"_blank":"_system","location=yes"),t(r)})})}async function yM(n,e,t){const{cordova:s}=wr();let r=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(tt(n,"redirect-cancelled-by-user"))},fM))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),qa()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function _M(n){var e,t,s,r,i,o,a,c,l,u;const h=wr();E(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E(typeof((i=(r=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||r===void 0?void 0:r.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function vM(n){const e=wM(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")}function wM(n){if(on(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let s=0;s<n.length;s++)t[s]=n.charCodeAt(s);return t}/**
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
 */const IM=20;class EM extends bI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function TM(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:CM(),postBody:null,tenantId:n.tenantId,error:tt(n,"no-auth-event")}}function bM(n,e){return _d()._set(vd(n),e)}async function Jg(n){const e=await _d()._get(vd(n));return e&&await _d()._remove(vd(n)),e}function SM(n,e){var t,s;const r=NM(e);if(r.includes("/__/auth/callback")){const i=Gc(r),o=i.firebaseError?kM(decodeURIComponent(i.firebaseError)):null,a=(s=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||s===void 0?void 0:s[1],c=a?tt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function CM(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<IM;t++){const s=Math.floor(Math.random()*e.length);n.push(e.charAt(s))}return n.join("")}function _d(){return xt(rm)}function vd(n){return dr("authEvent",n.config.apiKey,n.name)}function kM(n){try{return JSON.parse(n)}catch{return null}}function NM(n){const e=Gc(n),t=e.link?decodeURIComponent(e.link):void 0,s=Gc(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gc(r).link||r||s||t||n}function Gc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return si(t.join("?"))}/**
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
 */const AM=500;class DM{constructor(){this._redirectPersistence=vr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Eu,this._overrideRedirectResult=lm}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new EM(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,r){_M(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),CP(),await this._originValidation(e);const o=TM(e,s,r);await bM(e,o);const a=await mM(e,o,t),c=await gM(a);return yM(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pM(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:r,BuildInfo:i}=wr(),o=setTimeout(async()=>{await Jg(e),t.onEvent(Xg())},AM),a=async u=>{clearTimeout(o);const h=await Jg(e);let d=null;h&&(u==null?void 0:u.url)&&(d=SM(h,u.url)),t.onEvent(d||Xg())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=r,l=`${i.packageName.toLowerCase()}://`;wr().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const RM=DM;function Xg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:tt("no-auth-event")}}/**
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
 */function xM(n,e){je(n)._logFramework(e)}var OM="@firebase/auth-compat",PM="0.2.24";/**
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
 */const MM=1e3;function Po(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function LM(){return Po()==="http:"||Po()==="https:"}function NI(n=Ie()){return!!((Po()==="file:"||Po()==="ionic:"||Po()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function FM(){return uu()||Gf()}function UM(){return _w()&&(document==null?void 0:document.documentMode)===11}function VM(n=Ie()){return/Edge\/\d+/.test(n)}function BM(n=Ie()){return UM()||VM(n)}function AI(){try{const n=self.localStorage,e=$a();if(n)return n.setItem(e,"1"),n.removeItem(e),BM()?Xo():!0}catch{return hm()&&Xo()}return!1}function hm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Lh(){return(LM()||yw()||NI())&&!FM()&&AI()&&!hm()}function DI(){return NI()&&typeof document<"u"}async function WM(){return DI()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},MM);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function qM(){return typeof window<"u"?window:null}/**
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
 */const Dt={LOCAL:"local",NONE:"none",SESSION:"session"},uo=E,RI="persistence";function $M(n,e){if(uo(Object.values(Dt).includes(e),n,"invalid-persistence-type"),uu()){uo(e!==Dt.SESSION,n,"unsupported-persistence-type");return}if(Gf()){uo(e===Dt.NONE,n,"unsupported-persistence-type");return}if(hm()){uo(e===Dt.NONE||e===Dt.LOCAL&&Xo(),n,"unsupported-persistence-type");return}uo(e===Dt.NONE||AI(),n,"unsupported-persistence-type")}async function wd(n){await n._initializationPromise;const e=xI(),t=dr(RI,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function jM(n,e){const t=xI();if(!t)return[];const s=dr(RI,n,e);switch(t.getItem(s)){case Dt.NONE:return[yi];case Dt.LOCAL:return[oa,vr];case Dt.SESSION:return[vr];default:return[]}}function xI(){var n;try{return((n=qM())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const GM=E;class ds{constructor(){this.browserResolver=xt(aM),this.cordovaResolver=xt(RM),this.underlyingResolver=null,this._redirectPersistence=vr,this._completeRedirectFn=Eu,this._overrideRedirectResult=lm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,r)}async _openRedirect(e,t,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return DI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return GM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await WM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function OI(n){return n.unwrap()}function HM(n){return n.wrapped()}/**
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
 */function YM(n){return PI(n)}function zM(n,e){var t,s;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new KM(n,DO(n,e))}else if(r){const i=PI(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function PI(n){const{_tokenResponse:e}=n instanceof yt?n.customData:n;if(!e)return null;if(!(n instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return tn.credentialFromResult(n);const t=e.providerId;if(!t||t===lo.PASSWORD)return null;let s;switch(t){case lo.GOOGLE:s=hn;break;case lo.FACEBOOK:s=un;break;case lo.GITHUB:s=dn;break;case lo.TWITTER:s=fn;break;default:const{oauthIdToken:r,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!r&&!a?null:a?t.startsWith("saml.")?_i._create(t,a):En._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:r,accessToken:i}):new ui(t).credential({idToken:r,accessToken:i,rawNonce:c})}return n instanceof yt?s.credentialFromError(n):s.credentialFromResult(n)}function wt(n,e){return e.catch(t=>{throw t instanceof yt&&zM(n,t),t}).then(t=>{const s=t.operationType,r=t.user;return{operationType:s,credential:YM(t),additionalUserInfo:AO(t),user:Mn.getOrCreate(r)}})}async function Id(n,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>wt(n,t.confirm(s))}}class KM{constructor(e,t){this.resolver=t,this.auth=HM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(OI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Mn{constructor(e){this._delegate=e,this.multiFactor=PO(e)}static getOrCreate(e){return Mn.USER_MAP.has(e)||Mn.USER_MAP.set(e,new Mn(e)),Mn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,oI(this._delegate,e))}async linkWithPhoneNumber(e,t){return Id(this.auth,fP(this._delegate,e,t))}async linkWithPopup(e){return wt(this.auth,EP(this._delegate,e,ds))}async linkWithRedirect(e){return await wd(je(this.auth)),RP(this._delegate,e,ds)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,aI(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Id(this.auth,mP(this._delegate,e,t))}reauthenticateWithPopup(e){return wt(this.auth,IP(this._delegate,e,ds))}async reauthenticateWithRedirect(e){return await wd(je(this.auth)),AP(this._delegate,e,ds)}sendEmailVerification(e){return _O(this._delegate,e)}async unlink(e){return await rO(this._delegate,e),this}updateEmail(e){return EO(this._delegate,e)}updatePassword(e){return TO(this._delegate,e)}updatePhoneNumber(e){return pP(this._delegate,e)}updateProfile(e){return IO(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return vO(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Mn.USER_MAP=new WeakMap;/**
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
 */const ho=E;class Ed{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;ho(s,"invalid-api-key",{appName:e.name}),ho(s,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?ds:void 0;this._delegate=t.initialize({options:{persistence:QM(s,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(hx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Mn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Lx(this._delegate,e,t)}applyActionCode(e){return lO(this._delegate,e)}checkActionCode(e){return cI(this._delegate,e)}confirmPasswordReset(e,t){return cO(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return wt(this._delegate,hO(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return yO(this._delegate,e)}isSignInWithEmailLink(e){return mO(this._delegate,e)}async getRedirectResult(){ho(Lh(),this._delegate,"operation-not-supported-in-this-environment");const e=await OP(this._delegate,ds);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){xM(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:r,error:i,complete:o}=Zg(e,t,s);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,s){const{next:r,error:i,complete:o}=Zg(e,t,s);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return fO(this._delegate,e,t)}sendPasswordResetEmail(e,t){return aO(this._delegate,e,t||void 0)}async setPersistence(e){$M(this._delegate,e);let t;switch(e){case Dt.SESSION:t=vr;break;case Dt.LOCAL:t=await xt(oa)._isAvailable()?oa:rm;break;case Dt.NONE:t=yi;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,sO(this._delegate))}signInWithCredential(e){return wt(this._delegate,gu(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,oO(this._delegate,e))}signInWithEmailAndPassword(e,t){return wt(this._delegate,dO(this._delegate,e,t))}signInWithEmailLink(e,t){return wt(this._delegate,pO(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Id(this._delegate,dP(this._delegate,e,t))}async signInWithPopup(e){return ho(Lh(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,wP(this._delegate,e,ds))}async signInWithRedirect(e){return ho(Lh(),this._delegate,"operation-not-supported-in-this-environment"),await wd(this._delegate),kP(this._delegate,e,ds)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return uO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ed.Persistence=Dt;function Zg(n,e,t){let s=n;typeof n!="function"&&({next:s,error:e,complete:t}=n);const r=s;return{next:o=>r(o&&Mn.getOrCreate(o)),error:e,complete:t}}function QM(n,e){const t=jM(n,e);if(typeof self<"u"&&!t.includes(oa)&&t.push(oa),typeof window<"u")for(const s of[rm,vr])t.includes(s)||t.push(s);return t.includes(yi)||t.push(yi),t}/**
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
 */class dm{constructor(){this.providerId="phone",this._delegate=new tn(OI(Lt.auth()))}static credential(e,t){return tn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}dm.PHONE_SIGN_IN_METHOD=tn.PHONE_SIGN_IN_METHOD;dm.PROVIDER_ID=tn.PROVIDER_ID;/**
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
 */const JM=E;class XM{constructor(e,t,s=Lt.app()){var r;JM((r=s.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new uP(e,t,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const ZM="auth-compat";function e1(n){n.INTERNAL.registerComponent(new Mt(ZM,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Ed(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Kr.EMAIL_SIGNIN,PASSWORD_RESET:Kr.PASSWORD_RESET,RECOVER_EMAIL:Kr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Kr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Kr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Kr.VERIFY_EMAIL}},EmailAuthProvider:Fs,FacebookAuthProvider:un,GithubAuthProvider:dn,GoogleAuthProvider:hn,OAuthProvider:ui,SAMLAuthProvider:ul,PhoneAuthProvider:dm,PhoneMultiFactorGenerator:kI,RecaptchaVerifier:XM,TwitterAuthProvider:fn,Auth:Ed,AuthCredential:ji,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(OM,PM)}e1(Lt);var t1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,fm=fm||{},U=t1||self;function ml(){}function Tu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ga(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function n1(n){return Object.prototype.hasOwnProperty.call(n,Fh)&&n[Fh]||(n[Fh]=++s1)}var Fh="closure_uid_"+(1e9*Math.random()>>>0),s1=0;function r1(n,e,t){return n.call.apply(n.bind,arguments)}function i1(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function at(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=r1:at=i1,at.apply(null,arguments)}function Sc(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function it(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Us(){this.s=this.s,this.o=this.o}var o1=0;Us.prototype.s=!1;Us.prototype.na=function(){!this.s&&(this.s=!0,this.M(),o1!=0)&&n1(this)};Us.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const MI=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function mm(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function ey(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Tu(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function ct(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var a1=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{U.addEventListener("test",ml,e),U.removeEventListener("test",ml,e)}catch{}return n}();function pl(n){return/^[\s\xa0]*$/.test(n)}var ty=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Uh(n,e){return n<e?-1:n>e?1:0}function bu(){var n=U.navigator;return n&&(n=n.userAgent)?n:""}function mn(n){return bu().indexOf(n)!=-1}function pm(n){return pm[" "](n),n}pm[" "]=ml;function c1(n){var e=h1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var l1=mn("Opera"),vi=mn("Trident")||mn("MSIE"),LI=mn("Edge"),Td=LI||vi,FI=mn("Gecko")&&!(bu().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),u1=bu().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function UI(){var n=U.document;return n?n.documentMode:void 0}var gl;e:{var Vh="",Bh=function(){var n=bu();if(FI)return/rv:([^\);]+)(\)|;)/.exec(n);if(LI)return/Edge\/([\d\.]+)/.exec(n);if(vi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(u1)return/WebKit\/(\S+)/.exec(n);if(l1)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Bh&&(Vh=Bh?Bh[1]:""),vi){var Wh=UI();if(Wh!=null&&Wh>parseFloat(Vh)){gl=String(Wh);break e}}gl=Vh}var h1={};function d1(){return c1(function(){let n=0;const e=ty(String(gl)).split("."),t=ty("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Uh(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Uh(r[2].length==0,i[2].length==0)||Uh(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var bd;if(U.document&&vi){var ny=UI();bd=ny||parseInt(gl,10)||void 0}else bd=void 0;var f1=bd;function aa(n,e){if(ct.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(FI){e:{try{pm(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:m1[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&aa.X.h.call(this)}}it(aa,ct);var m1={2:"touch",3:"pen",4:"mouse"};aa.prototype.h=function(){aa.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ha="closure_listenable_"+(1e6*Math.random()|0),p1=0;function g1(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++p1,this.ba=this.ea=!1}function Su(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function gm(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function VI(n){const e={};for(const t in n)e[t]=n[t];return e}const sy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function BI(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<sy.length;i++)t=sy[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Cu(n){this.src=n,this.g={},this.h=0}Cu.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Cd(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new g1(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function Sd(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=MI(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Su(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Cd(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var ym="closure_lm_"+(1e6*Math.random()|0),qh={};function WI(n,e,t,s,r){if(s&&s.once)return $I(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)WI(n,e[i],t,s,r);return null}return t=wm(t),n&&n[Ha]?n.N(e,t,Ga(s)?!!s.capture:!!s,r):qI(n,e,t,!1,s,r)}function qI(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Ga(r)?!!r.capture:!!r,a=vm(n);if(a||(n[ym]=a=new Cu(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=y1(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)a1||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(GI(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function y1(){function n(t){return e.call(n.src,n.listener,t)}const e=_1;return n}function $I(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$I(n,e[i],t,s,r);return null}return t=wm(t),n&&n[Ha]?n.O(e,t,Ga(s)?!!s.capture:!!s,r):qI(n,e,t,!0,s,r)}function jI(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)jI(n,e[i],t,s,r);else s=Ga(s)?!!s.capture:!!s,t=wm(t),n&&n[Ha]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Cd(i,t,s,r),-1<t&&(Su(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=vm(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Cd(e,t,s,r)),(t=-1<n?e[n]:null)&&_m(t))}function _m(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Ha])Sd(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(GI(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=vm(e))?(Sd(t,n),t.h==0&&(t.src=null,e[ym]=null)):Su(n)}}}function GI(n){return n in qh?qh[n]:qh[n]="on"+n}function _1(n,e){if(n.ba)n=!0;else{e=new aa(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&_m(n),n=t.call(s,e)}return n}function vm(n){return n=n[ym],n instanceof Cu?n:null}var $h="__closure_events_fn_"+(1e9*Math.random()>>>0);function wm(n){return typeof n=="function"?n:(n[$h]||(n[$h]=function(e){return n.handleEvent(e)}),n[$h])}function Ge(){Us.call(this),this.i=new Cu(this),this.P=this,this.I=null}it(Ge,Us);Ge.prototype[Ha]=!0;Ge.prototype.removeEventListener=function(n,e,t,s){jI(this,n,e,t,s)};function nt(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new ct(e,n);else if(e instanceof ct)e.target=e.target||n;else{var r=e;e=new ct(s,n),BI(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Cc(o,s,!0,e)&&r}if(o=e.g=n,r=Cc(o,s,!0,e)&&r,r=Cc(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Cc(o,s,!1,e)&&r}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Su(t[s]);delete n.g[e],n.h--}}this.I=null};Ge.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Ge.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Cc(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Sd(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Im=U.JSON.stringify;function v1(){var n=zI;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class w1{constructor(){this.h=this.g=null}add(e,t){const s=HI.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var HI=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new I1,n=>n.reset());class I1{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function E1(n){U.setTimeout(()=>{throw n},0)}function YI(n,e){kd||T1(),Nd||(kd(),Nd=!0),zI.add(n,e)}var kd;function T1(){var n=U.Promise.resolve(void 0);kd=function(){n.then(b1)}}var Nd=!1,zI=new w1;function b1(){for(var n;n=v1();){try{n.h.call(n.g)}catch(t){E1(t)}var e=HI;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Nd=!1}function ku(n,e){Ge.call(this),this.h=n||1,this.g=e||U,this.j=at(this.lb,this),this.l=Date.now()}it(ku,Ge);R=ku.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nt(this,"tick"),this.ca&&(Em(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Em(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}R.M=function(){ku.X.M.call(this),Em(this),delete this.g};function Tm(n,e,t){if(typeof n=="function")t&&(n=at(n,t));else if(n&&typeof n.handleEvent=="function")n=at(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(n,e||0)}function KI(n){n.g=Tm(()=>{n.g=null,n.i&&(n.i=!1,KI(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class S1 extends Us{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KI(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ca(n){Us.call(this),this.h=n,this.g={}}it(ca,Us);var ry=[];function QI(n,e,t,s){Array.isArray(t)||(t&&(ry[0]=t.toString()),t=ry);for(var r=0;r<t.length;r++){var i=WI(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function JI(n){gm(n.g,function(e,t){this.g.hasOwnProperty(t)&&_m(e)},n),n.g={}}ca.prototype.M=function(){ca.X.M.call(this),JI(this)};ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nu(){this.g=!0}Nu.prototype.Aa=function(){this.g=!1};function C1(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function k1(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function ri(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+A1(n,t)+(s?" "+s:"")})}function N1(n,e){n.info(function(){return"TIMEOUT: "+e})}Nu.prototype.info=function(){};function A1(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Im(t)}catch{return e}}var Vr={},iy=null;function Au(){return iy=iy||new Ge}Vr.Pa="serverreachability";function XI(n){ct.call(this,Vr.Pa,n)}it(XI,ct);function la(n){const e=Au();nt(e,new XI(e))}Vr.STAT_EVENT="statevent";function ZI(n,e){ct.call(this,Vr.STAT_EVENT,n),this.stat=e}it(ZI,ct);function pt(n){const e=Au();nt(e,new ZI(e,n))}Vr.Qa="timingevent";function eE(n,e){ct.call(this,Vr.Qa,n),this.size=e}it(eE,ct);function Ya(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){n()},e)}var Du={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bm(){}bm.prototype.h=null;function oy(n){return n.h||(n.h=n.i())}function nE(){}var za={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sm(){ct.call(this,"d")}it(Sm,ct);function Cm(){ct.call(this,"c")}it(Cm,ct);var Ad;function Ru(){}it(Ru,bm);Ru.prototype.g=function(){return new XMLHttpRequest};Ru.prototype.i=function(){return{}};Ad=new Ru;function Ka(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new ca(this),this.O=D1,n=Td?125:void 0,this.T=new ku(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sE}function sE(){this.i=null,this.g="",this.h=!1}var D1=45e3,Dd={},yl={};R=Ka.prototype;R.setTimeout=function(n){this.O=n};function Rd(n,e,t){n.K=1,n.v=Ou(Yn(e)),n.s=t,n.P=!0,rE(n,null)}function rE(n,e){n.F=Date.now(),Qa(n),n.A=Yn(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),dE(t.i,"t",s),n.C=0,t=n.l.H,n.h=new sE,n.g=OE(n.l,t?e:null,!n.s),0<n.N&&(n.L=new S1(at(n.La,n,n.g),n.N)),QI(n.S,n.g,"readystatechange",n.ib),e=n.H?VI(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),la(),C1(n.j,n.u,n.A,n.m,n.U,n.s)}R.ib=function(n){n=n.target;const e=this.L;e&&Ln(n)==3?e.l():this.La(n)};R.La=function(n){try{if(n==this.g)e:{const u=Ln(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Td||this.g&&(this.h.h||this.g.fa()||uy(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?la(3):la(2)),xu(this);var t=this.g.aa();this.Y=t;t:if(iE(this)){var s=uy(this.g);n="";var r=s.length,i=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Mo(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,k1(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pl(a)){var l=a;break t}}l=null}if(t=l)ri(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xd(this,t);else{this.i=!1,this.o=3,pt(12),ir(this),Mo(this);break e}}this.P?(oE(this,u,o),Td&&this.i&&u==3&&(QI(this.S,this.T,"tick",this.hb),this.T.start())):(ri(this.j,this.m,o,null),xd(this,o)),u==4&&ir(this),this.i&&!this.I&&(u==4?AE(this.l,this):(this.i=!1,Qa(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),ir(this),Mo(this)}}}catch{}finally{}};function iE(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function oE(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=R1(n,t),r==yl){e==4&&(n.o=4,pt(14),s=!1),ri(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Dd){n.o=4,pt(15),ri(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ri(n.j,n.m,r,null),xd(n,r);iE(n)&&r!=yl&&r!=Dd&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,pt(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Om(e),e.K=!0,pt(11))):(ri(n.j,n.m,t,"[Invalid Chunked Response]"),ir(n),Mo(n))}R.hb=function(){if(this.g){var n=Ln(this.g),e=this.g.fa();this.C<e.length&&(xu(this),oE(this,n,e),this.i&&n!=4&&Qa(this))}};function R1(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?yl:(t=Number(e.substring(t,s)),isNaN(t)?Dd:(s+=1,s+t>e.length?yl:(e=e.substr(s,t),n.C=s+t,e)))}R.cancel=function(){this.I=!0,ir(this)};function Qa(n){n.V=Date.now()+n.O,aE(n,n.O)}function aE(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ya(at(n.gb,n),e)}function xu(n){n.B&&(U.clearTimeout(n.B),n.B=null)}R.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(N1(this.j,this.A),this.K!=2&&(la(),pt(17)),ir(this),this.o=2,Mo(this)):aE(this,this.V-n)};function Mo(n){n.l.G==0||n.I||AE(n.l,n)}function ir(n){xu(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Em(n.T),JI(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function xd(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Od(t.h,n))){if(!n.J&&Od(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)wl(t),Lu(t);else break e;xm(t),pt(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ya(at(t.cb,t),6e3));if(1>=pE(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else or(t,11)}else if((n.J||t.g==n)&&wl(t),!pl(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(km(i,i.h),i.h=null))}if(s.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,pe(s.F,s.D,g))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=xE(s,s.H?s.ka:null,s.V),o.J){gE(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(xu(a),Qa(a)),s.g=o}else kE(s);0<t.i.length&&Fu(t)}else l[0]!="stop"&&l[0]!="close"||or(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?or(t,7):Rm(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}la(4)}catch{}}function x1(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Tu(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function O1(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Tu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function cE(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Tu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=O1(n),s=x1(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var lE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P1(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function mr(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof mr){this.h=e!==void 0?e:n.h,_l(this,n.j),this.s=n.s,this.g=n.g,vl(this,n.m),this.l=n.l,e=n.i;var t=new ua;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ay(this,t),this.o=n.o}else n&&(t=String(n).match(lE))?(this.h=!!e,_l(this,t[1]||"",!0),this.s=Co(t[2]||""),this.g=Co(t[3]||"",!0),vl(this,t[4]),this.l=Co(t[5]||"",!0),ay(this,t[6]||"",!0),this.o=Co(t[7]||"")):(this.h=!!e,this.i=new ua(null,this.h))}mr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ko(e,cy,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ko(e,cy,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ko(t,t.charAt(0)=="/"?F1:L1,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ko(t,V1)),n.join("")};function Yn(n){return new mr(n)}function _l(n,e,t){n.j=t?Co(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function vl(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ay(n,e,t){e instanceof ua?(n.i=e,B1(n.i,n.h)):(t||(e=ko(e,U1)),n.i=new ua(e,n.h))}function pe(n,e,t){n.i.set(e,t)}function Ou(n){return pe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Co(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ko(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,M1),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function M1(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var cy=/[#\/\?@]/g,L1=/[#\?:]/g,F1=/[#\?]/g,U1=/[#\?@]/g,V1=/#/g;function ua(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Vs(n){n.g||(n.g=new Map,n.h=0,n.i&&P1(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}R=ua.prototype;R.add=function(n,e){Vs(this),this.i=null,n=Hi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function uE(n,e){Vs(n),e=Hi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function hE(n,e){return Vs(n),e=Hi(n,e),n.g.has(e)}R.forEach=function(n,e){Vs(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};R.oa=function(){Vs(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};R.W=function(n){Vs(this);let e=[];if(typeof n=="string")hE(this,n)&&(e=e.concat(this.g.get(Hi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};R.set=function(n,e){return Vs(this),this.i=null,n=Hi(this,n),hE(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};R.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function dE(n,e,t){uE(n,e),0<t.length&&(n.i=null,n.g.set(Hi(n,e),mm(t)),n.h+=t.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function Hi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function B1(n,e){e&&!n.j&&(Vs(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(uE(this,s),dE(this,r,t))},n)),n.j=e}var W1=class{constructor(n,e){this.h=n,this.g=e}};function fE(n){this.l=n||q1,U.PerformanceNavigationTiming?(n=U.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var q1=10;function mE(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function pE(n){return n.h?1:n.g?n.g.size:0}function Od(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function km(n,e){n.g?n.g.add(e):n.h=e}function gE(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}fE.prototype.cancel=function(){if(this.i=yE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yE(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return mm(n.i)}function Nm(){}Nm.prototype.stringify=function(n){return U.JSON.stringify(n,void 0)};Nm.prototype.parse=function(n){return U.JSON.parse(n,void 0)};function $1(){this.g=new Nm}function j1(n,e,t){const s=t||"";try{cE(n,function(r,i){let o=r;Ga(r)&&(o=Im(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function G1(n,e){const t=new Nu;if(U.Image){const s=new Image;s.onload=Sc(kc,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Sc(kc,t,s,"TestLoadImage: error",!1,e),s.onabort=Sc(kc,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Sc(kc,t,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function kc(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ja(n){this.l=n.ac||null,this.j=n.jb||!1}it(Ja,bm);Ja.prototype.g=function(){return new Pu(this.l,this.j)};Ja.prototype.i=function(n){return function(){return n}}({});function Pu(n,e){Ge.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Pu,Ge);var Am=0;R=Pu.prototype;R.open=function(n,e){if(this.readyState!=Am)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ha(this)};R.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xa(this)),this.readyState=Am};R.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_E(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function _E(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}R.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Xa(this):ha(this),this.readyState==3&&_E(this)}};R.Va=function(n){this.g&&(this.response=this.responseText=n,Xa(this))};R.Ua=function(n){this.g&&(this.response=n,Xa(this))};R.ga=function(){this.g&&Xa(this)};function Xa(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ha(n)}R.setRequestHeader=function(n,e){this.v.append(n,e)};R.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ha(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Pu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var H1=U.JSON.parse;function be(n){Ge.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vE,this.K=this.L=!1}it(be,Ge);var vE="",Y1=/^https?$/i,z1=["POST","PUT"];R=be.prototype;R.Ka=function(n){this.L=n};R.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ad.g(),this.C=this.u?oy(this.u):oy(Ad),this.g.onreadystatechange=at(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){ly(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=U.FormData&&n instanceof U.FormData,!(0<=MI(z1,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{EE(this),0<this.B&&((this.K=K1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.qa,this)):this.A=Tm(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){ly(this,i)}};function K1(n){return vi&&d1()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}R.qa=function(){typeof fm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function ly(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,wE(n),Mu(n)}function wE(n){n.D||(n.D=!0,nt(n,"complete"),nt(n,"error"))}R.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,nt(this,"complete"),nt(this,"abort"),Mu(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mu(this,!0)),be.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?IE(this):this.fb())};R.fb=function(){IE(this)};function IE(n){if(n.h&&typeof fm<"u"&&(!n.C[1]||Ln(n)!=4||n.aa()!=2)){if(n.v&&Ln(n)==4)Tm(n.Ha,0,n);else if(nt(n,"readystatechange"),Ln(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(lE)[1]||null;if(!r&&U.self&&U.self.location){var i=U.self.location.protocol;r=i.substr(0,i.length-1)}s=!Y1.test(r?r.toLowerCase():"")}t=s}if(t)nt(n,"complete"),nt(n,"success");else{n.m=6;try{var o=2<Ln(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",wE(n)}}finally{Mu(n)}}}}function Mu(n,e){if(n.g){EE(n);const t=n.g,s=n.C[0]?ml:null;n.g=null,n.C=null,e||nt(n,"ready");try{t.onreadystatechange=s}catch{}}}function EE(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(U.clearTimeout(n.A),n.A=null)}function Ln(n){return n.g?n.g.readyState:0}R.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),H1(e)}};function uy(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case vE:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TE(n){let e="";return gm(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Dm(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=TE(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):pe(n,e,t))}function fo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function bE(n){this.Ca=0,this.i=[],this.j=new Nu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fo("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fo("baseRetryDelayMs",5e3,n),this.bb=fo("retryDelaySeedMs",1e4,n),this.$a=fo("forwardChannelMaxRetries",2,n),this.ta=fo("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new fE(n&&n.concurrentRequestLimit),this.Fa=new $1,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=bE.prototype;R.ma=8;R.G=1;function Rm(n){if(SE(n),n.G==3){var e=n.U++,t=Yn(n.F);pe(t,"SID",n.I),pe(t,"RID",e),pe(t,"TYPE","terminate"),Za(n,t),e=new Ka(n,n.j,e,void 0),e.K=2,e.v=Ou(Yn(t)),t=!1,U.navigator&&U.navigator.sendBeacon&&(t=U.navigator.sendBeacon(e.v.toString(),"")),!t&&U.Image&&(new Image().src=e.v,t=!0),t||(e.g=OE(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qa(e)}RE(n)}function Lu(n){n.g&&(Om(n),n.g.cancel(),n.g=null)}function SE(n){Lu(n),n.u&&(U.clearTimeout(n.u),n.u=null),wl(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&U.clearTimeout(n.m),n.m=null)}function Fu(n){mE(n.h)||n.m||(n.m=!0,YI(n.Ja,n),n.C=0)}function Q1(n,e){return pE(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ya(at(n.Ja,n,e),DE(n,n.C)),n.C++,!0)}R.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new Ka(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=VI(i),BI(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=CE(this,r,e),t=Yn(this.F),pe(t,"RID",n),pe(t,"CVER",22),this.D&&pe(t,"X-HTTP-Session-Id",this.D),Za(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(TE(i)))+"&"+e:this.o&&Dm(t,this.o,i)),km(this.h,r),this.Ya&&pe(t,"TYPE","init"),this.O?(pe(t,"$req",e),pe(t,"SID","null"),r.Z=!0,Rd(r,t,null)):Rd(r,t,e),this.G=2}}else this.G==3&&(n?hy(this,n):this.i.length==0||mE(this.h)||hy(this))};function hy(n,e){var t;e?t=e.m:t=n.U++;const s=Yn(n.F);pe(s,"SID",n.I),pe(s,"RID",t),pe(s,"AID",n.T),Za(n,s),n.o&&n.s&&Dm(s,n.o,n.s),t=new Ka(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=CE(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),km(n.h,t),Rd(t,s,e)}function Za(n,e){n.ia&&gm(n.ia,function(t,s){pe(e,s,t)}),n.l&&cE({},function(t,s){pe(e,s,t)})}function CE(n,e,t){t=Math.min(n.i.length,t);var s=n.l?at(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{j1(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function kE(n){n.g||n.u||(n.Z=1,YI(n.Ia,n),n.A=0)}function xm(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ya(at(n.Ia,n),DE(n,n.A)),n.A++,!0)}R.Ia=function(){if(this.u=null,NE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ya(at(this.eb,this),n)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),Lu(this),NE(this))};function Om(n){n.B!=null&&(U.clearTimeout(n.B),n.B=null)}function NE(n){n.g=new Ka(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Yn(n.sa);pe(e,"RID","rpc"),pe(e,"SID",n.I),pe(e,"CI",n.L?"0":"1"),pe(e,"AID",n.T),pe(e,"TYPE","xmlhttp"),Za(n,e),n.o&&n.s&&Dm(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Ou(Yn(e)),t.s=null,t.P=!0,rE(t,n)}R.cb=function(){this.v!=null&&(this.v=null,Lu(this),xm(this),pt(19))};function wl(n){n.v!=null&&(U.clearTimeout(n.v),n.v=null)}function AE(n,e){var t=null;if(n.g==e){wl(n),Om(n),n.g=null;var s=2}else if(Od(n.h,e))t=e.D,gE(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=Au(),nt(s,new eE(s,t)),Fu(n)}else kE(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&Q1(n,e)||s==2&&xm(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:or(n,5);break;case 4:or(n,10);break;case 3:or(n,6);break;default:or(n,2)}}}function DE(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function or(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=at(n.kb,n);t||(t=new mr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||_l(t,"https"),Ou(t)),G1(t.toString(),s)}else pt(2);n.G=0,n.l&&n.l.va(e),RE(n),SE(n)}R.kb=function(n){n?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function RE(n){if(n.G=0,n.la=[],n.l){const e=yE(n.h);(e.length!=0||n.i.length!=0)&&(ey(n.la,e),ey(n.la,n.i),n.h.i.length=0,mm(n.i),n.i.length=0),n.l.ua()}}function xE(n,e,t){var s=t instanceof mr?Yn(t):new mr(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),vl(s,s.m);else{var r=U.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new mr(null,void 0);s&&_l(i,s),e&&(i.g=e),r&&vl(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&pe(s,t,e),pe(s,"VER",n.ma),Za(n,s),s}function OE(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new be(new Ja({jb:!0})):new be(n.ra),e.Ka(n.H),e}function PE(){}R=PE.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function Il(){if(vi&&!(10<=Number(f1)))throw Error("Environmental error: no available transport.")}Il.prototype.g=function(n,e){return new Ft(n,e)};function Ft(n,e){Ge.call(this),this.g=new bE(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!pl(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pl(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Yi(this)}it(Ft,Ge);Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;pt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=xE(n,null,n.V),Fu(n)};Ft.prototype.close=function(){Rm(this.g)};Ft.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Im(n),n=t);e.i.push(new W1(e.ab++,n)),e.G==3&&Fu(e)};Ft.prototype.M=function(){this.g.l=null,delete this.j,Rm(this.g),delete this.g,Ft.X.M.call(this)};function ME(n){Sm.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}it(ME,Sm);function LE(){Cm.call(this),this.status=1}it(LE,Cm);function Yi(n){this.g=n}it(Yi,PE);Yi.prototype.xa=function(){nt(this.g,"a")};Yi.prototype.wa=function(n){nt(this.g,new ME(n))};Yi.prototype.va=function(n){nt(this.g,new LE)};Yi.prototype.ua=function(){nt(this.g,"b")};Il.prototype.createWebChannel=Il.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;Du.NO_ERROR=0;Du.TIMEOUT=8;Du.HTTP_ERROR=6;tE.COMPLETE="complete";nE.EventType=za;za.OPEN="a";za.CLOSE="b";za.ERROR="c";za.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var J1=function(){return new Il},X1=function(){return Au()},jh=Du,Z1=tE,eL=Vr,dy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tL=Ja,Nc=nE,nL=be;const fy="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let zi="9.14.0";/**
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
 */const bs=new Wi("@firebase/firestore");function Pd(){return bs.logLevel}function sL(n){bs.setLogLevel(n)}function w(n,...e){if(bs.logLevel<=K.DEBUG){const t=e.map(Pm);bs.debug(`Firestore (${zi}): ${n}`,...t)}}function Ne(n,...e){if(bs.logLevel<=K.ERROR){const t=e.map(Pm);bs.error(`Firestore (${zi}): ${n}`,...t)}}function wi(n,...e){if(bs.logLevel<=K.WARN){const t=e.map(Pm);bs.warn(`Firestore (${zi}): ${n}`,...t)}}function Pm(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function D(n="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+n;throw Ne(e),new Error(e)}function F(n,e){n||D()}function rL(n,e){n||D()}function C(n,e){return n}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class FE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class oL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aL{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(F(typeof s.accessToken=="string"),new FE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Ve(e)}}class cL{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(F(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class lL{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new cL(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.A=t.token,new uL(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class UE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=dL(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function V(n,e){return n<e?-1:n>e?1:0}function Ii(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function VE(n){return n+"\0"}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new v(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new v(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new v(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new _e(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new _e(0,0))}static max(){return new M(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class da{constructor(e,t,s){t===void 0?t=0:t>e.length&&D(),s===void 0?s=e.length-t:s>e.length-t&&D(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Q extends da{construct(e,t,s){return new Q(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new v(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const fL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends da{construct(e,t,s){return new Ae(e,t,s)}static isValidIdentifier(e){return fL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new v(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(Q.fromString(e))}static fromName(e){return new S(Q.fromString(e).popFirst(5))}static empty(){return new S(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new Q(e.slice()))}}/**
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
 */class BE{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Md(n){return n.fields.find(e=>e.kind===2)}function Qs(n){return n.fields.filter(e=>e.kind!==2)}BE.UNKNOWN_ID=-1;class mL{constructor(e,t){this.fieldPath=e,this.kind=t}}class El{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new El(0,Ut.min())}}function WE(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=M.fromTimestamp(s===1e9?new _e(t+1,0):new _e(t,s));return new Ut(r,S.empty(),e)}function qE(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ut(M.min(),S.empty(),-1)}static max(){return new Ut(M.max(),S.empty(),-1)}}function Mm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=S.comparator(n.documentKey,e.documentKey),t!==0?t:V(n.largestBatchId,e.largestBatchId))}/**
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
 */const $E="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bs(n){if(n.code!==y.FAILED_PRECONDITION||n.message!==$E)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(r=>r?p.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new p((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,t){return new p((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
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
 */class Uu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new qe,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Lo(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=Lm(s.target.error);this.P.reject(new Lo(e,r))}}static open(e,t,s,r){try{return new Uu(t,e.transaction(r,s))}catch(i){throw new Lo(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new gL(t)}}class Zt{constructor(e,t,s){this.name=e,this.version=t,this.S=s,Zt.D(Ie())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),Xs(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Xo())return!1;if(Zt.N())return!0;const e=Ie(),t=Zt.D(e),s=0<t&&t<10,r=Zt.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new Lo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new v(y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new v(y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Lo(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Uu.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),p.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class pL{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Xs(this.U.delete())}}class Lo extends v{constructor(e,t){super(y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ws(n){return n.name==="IndexedDbTransactionError"}class gL{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Xs(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),Xs(this.store.add(e))}get(e){return Xs(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),Xs(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),Xs(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new p((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new p((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.H(r,t)}tt(e){const t=this.cursor({});return new p((s,r)=>{t.onerror=i=>{const o=Lm(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new p((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new pL(a),l=t(a.primaryKey,a.value,c);if(l instanceof p){const u=l.catch(h=>(c.done(),p.reject(h)));s.push(u)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>p.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xs(n){return new p((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Lm(s.target.error);t(r)}})}let my=!1;function Lm(n){const e=Zt.D(Ie());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new v("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return my||(my=!0,setTimeout(()=>{throw s},0)),s}}return n}class yL{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){w("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{w("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Ws(t)?w("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Bs(t)}await this.nt(6e4)})}}class _L{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let r=t,i=!0;return p.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return w("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(w("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=qE(i);Mm(o,s)>0&&(s=o)}),new Ut(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Tt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function py(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function GE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */Tt.at=-1;class Se{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ac(this.root,e,this.comparator,!0)}}class Ac{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:Xe.RED,this.left=r!=null?r:Xe.EMPTY,this.right=i!=null?i:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Xe(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(n,e,t,s,r){return this}insert(n,e,t){return new Xe(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class re{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gy(this.data.getIterator())}getIteratorFrom(e){return new gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new re(Ae.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */function vL(){return typeof atob<"u"}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const wL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(n){if(F(!!n),typeof n=="string"){let e=0;const t=wL.exec(n);if(F(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ir(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */function Fm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function HE(n){const e=n.mapValue.fields.__previous_value__;return Fm(e)?HE(e):e}function fa(n){const e=Ss(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class IL{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Cs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}function ec(n){return n==null}function ma(n){return n===0&&1/n==-1/0}function YE(n){return typeof n=="number"&&Number.isInteger(n)&&!ma(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Hc={nullValue:"NULL_VALUE"};function Er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fm(n)?4:zE(n)?9007199254740991:10:D()}function Tn(n,e){if(n===e)return!0;const t=Er(n);if(t!==Er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fa(n).isEqual(fa(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ss(s.timestampValue),o=Ss(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Ir(s.bytesValue).isEqual(Ir(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?ma(i)===ma(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Ii(n.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(py(i)!==py(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Tn(i[a],o[a])))return!1;return!0}(n,e);default:return D()}}function pa(n,e){return(n.values||[]).find(t=>Tn(t,e))!==void 0}function ks(n,e){if(n===e)return 0;const t=Er(n),s=Er(e);if(t!==s)return V(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return yy(n.timestampValue,e.timestampValue);case 4:return yy(fa(n),fa(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Ir(r),a=Ir(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=V(o[c],a[c]);if(l!==0)return l}return V(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=V(Te(r.latitude),Te(i.latitude));return o!==0?o:V(Te(r.longitude),Te(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ks(o[c],a[c]);if(l)return l}return V(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===fs.mapValue&&i===fs.mapValue)return 0;if(r===fs.mapValue)return 1;if(i===fs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=V(a[u],l[u]);if(h!==0)return h;const d=ks(o[a[u]],c[l[u]]);if(d!==0)return d}return V(a.length,l.length)}(n.mapValue,e.mapValue);default:throw D()}}function yy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=Ss(n),s=Ss(e),r=V(t.seconds,s.seconds);return r!==0?r:V(t.nanos,s.nanos)}function di(n){return Ld(n)}function Ld(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ss(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ir(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,S.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ld(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ld(s.fields[a])}`;return i+"}"}(n.mapValue):D();var e,t}function Tr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fd(n){return!!n&&"integerValue"in n}function ga(n){return!!n&&"arrayValue"in n}function _y(n){return!!n&&"nullValue"in n}function vy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yc(n){return!!n&&"mapValue"in n}function Fo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Br(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Fo(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function EL(n){return"nullValue"in n?Hc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Tr(Cs.empty(),S.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:D()}function TL(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Tr(Cs.empty(),S.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?fs:D()}function wy(n,e){const t=ks(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Iy(n,e){const t=ks(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(t)}setAll(e){let t=Ae.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=Fo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Yc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Br(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ze(Fo(this.value))}}function KE(n){const e=[];return Br(n.fields,(t,s)=>{const r=new Ae([t]);if(Yc(s)){const i=KE(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ot(e)}/**
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
 */class ce{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ce(e,0,M.min(),M.min(),Ze.empty(),0)}static newFoundDocument(e,t,s){return new ce(e,1,t,M.min(),s,0)}static newNoDocument(e,t){return new ce(e,2,t,M.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,M.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bL{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Ey(n,e=null,t=[],s=[],r=null,i=null,o=null){return new bL(n,e,t,s,r,i,o)}function br(n){const e=C(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+di(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>di(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>di(s)).join(",")),e.ht=t}return e.ht}function SL(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${di(s.value)}`;var s}).join(", ")}]`),ec(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>di(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>di(t)).join(",")),`Target(${e})`}function tc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!OL(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!Tn(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cy(n.startAt,e.startAt)&&Cy(n.endAt,e.endAt)}function Tl(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bl(n,e){return n.filters.filter(t=>t instanceof et&&t.field.isEqual(e))}function Ty(n,e,t){let s=Hc,r=!0;for(const i of bl(n,e)){let o=Hc,a=!0;switch(i.op){case"<":case"<=":o=EL(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Hc}wy({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];wy({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function by(n,e,t){let s=fs,r=!0;for(const i of bl(n,e)){let o=fs,a=!0;switch(i.op){case">=":case">":o=TL(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=fs}Iy({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Iy({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}class et extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,s):new CL(e,t,s):t==="array-contains"?new AL(e,s):t==="in"?new DL(e,s):t==="not-in"?new RL(e,s):t==="array-contains-any"?new xL(e,s):new et(e,t,s)}static lt(e,t,s){return t==="in"?new kL(e,s):new NL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(ks(t,this.value)):t!==null&&Er(this.value)===Er(t)&&this.ft(ks(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class CL extends et{constructor(e,t,s){super(e,t,s),this.key=S.fromName(s.referenceValue)}matches(e){const t=S.comparator(e.key,this.key);return this.ft(t)}}class kL extends et{constructor(e,t){super(e,"in",t),this.keys=QE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class NL extends et{constructor(e,t){super(e,"not-in",t),this.keys=QE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function QE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>S.fromName(s.referenceValue))}class AL extends et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ga(t)&&pa(t.arrayValue,this.value)}}class DL extends et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pa(this.value.arrayValue,t)}}class RL extends et{constructor(e,t){super(e,"not-in",t)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pa(this.value.arrayValue,t)}}class xL extends et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ga(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>pa(this.value.arrayValue,s))}}class Ns{constructor(e,t){this.position=e,this.inclusive=t}}class fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function OL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Sy(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=S.comparator(S.fromName(o.referenceValue),t.key):s=ks(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ts{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function JE(n,e,t,s,r,i,o,a){return new ts(n,e,t,s,r,i,o,a)}function Ki(n){return new ts(n)}function ky(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Um(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Vm(n){for(const e of n.filters)if(e.dt())return e.field;return null}function Bm(n){return n.collectionGroup!==null}function Ei(n){const e=C(n);if(e._t===null){e._t=[];const t=Vm(e),s=Um(e);if(t!==null&&s===null)t.isKeyField()||e._t.push(new fi(t)),e._t.push(new fi(Ae.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new fi(Ae.keyField(),i))}}}return e._t}function kt(n){const e=C(n);if(!e.wt)if(e.limitType==="F")e.wt=Ey(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ei(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new fi(i.field,o))}const s=e.endAt?new Ns(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ns(e.startAt.position,e.startAt.inclusive):null;e.wt=Ey(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.wt}function Sl(n,e,t){return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nc(n,e){return tc(kt(n),kt(e))&&n.limitType===e.limitType}function XE(n){return`${br(kt(n))}|lt:${n.limitType}`}function Ud(n){return`Query(target=${SL(kt(n))}; limitType=${n.limitType})`}function Wm(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):S.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Sy(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Ei(t),s)||t.endAt&&!function(r,i,o){const a=Sy(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Ei(t),s))}(n,e)}function ZE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eT(n){return(e,t)=>{let s=!1;for(const r of Ei(n)){const i=PL(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function PL(n,e,t){const s=n.field.isKeyField()?S.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):D()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}/**
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
 */function tT(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function nT(n){return{integerValue:""+n}}function sT(n,e){return YE(e)?nT(e):tT(n,e)}/**
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
 */class Vu{constructor(){this._=void 0}}function ML(n,e,t){return n instanceof Ti?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Sr?iT(n,e):n instanceof Cr?oT(n,e):function(s,r){const i=rT(s,r),o=Ny(i)+Ny(s.yt);return Fd(i)&&Fd(s.yt)?nT(o):tT(s.It,o)}(n,e)}function LL(n,e,t){return n instanceof Sr?iT(n,e):n instanceof Cr?oT(n,e):t}function rT(n,e){return n instanceof bi?Fd(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Ti extends Vu{}class Sr extends Vu{constructor(e){super(),this.elements=e}}function iT(n,e){const t=aT(e);for(const s of n.elements)t.some(r=>Tn(r,s))||t.push(s);return{arrayValue:{values:t}}}class Cr extends Vu{constructor(e){super(),this.elements=e}}function oT(n,e){let t=aT(e);for(const s of n.elements)t=t.filter(r=>!Tn(r,s));return{arrayValue:{values:t}}}class bi extends Vu{constructor(e,t){super(),this.It=e,this.yt=t}}function Ny(n){return Te(n.integerValue||n.doubleValue)}function aT(n){return ga(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class sc{constructor(e,t){this.field=e,this.transform=t}}function FL(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Sr&&s instanceof Sr||t instanceof Cr&&s instanceof Cr?Ii(t.elements,s.elements,Tn):t instanceof bi&&s instanceof bi?Tn(t.yt,s.yt):t instanceof Ti&&s instanceof Ti}(n.transform,e.transform)}class UL{constructor(e,t){this.version=e,this.transformResults=t}}class ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ge}static exists(e){return new ge(void 0,e)}static updateTime(e){return new ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bu{}function cT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ji(n.key,ge.none()):new Qi(n.key,n.data,ge.none());{const t=n.data,s=Ze.empty();let r=new re(Ae.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ns(n.key,s,new Ot(r.toArray()),ge.none())}}function VL(n,e,t){n instanceof Qi?function(s,r,i){const o=s.value.clone(),a=Dy(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof ns?function(s,r,i){if(!zc(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Dy(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(lT(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Uo(n,e,t,s){return n instanceof Qi?function(r,i,o,a){if(!zc(r.precondition,i))return o;const c=r.value.clone(),l=Ry(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof ns?function(r,i,o,a){if(!zc(r.precondition,i))return o;const c=Ry(r.fieldTransforms,a,i),l=i.data;return l.setAll(lT(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(r,i,o){return zc(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function BL(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=rT(s.transform,r||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(s.field,i))}return t||null}function Ay(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Ii(t,s,(r,i)=>FL(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qi extends Bu{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ns extends Bu{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Dy(n,e,t){const s=new Map;F(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,LL(o,a,t[r]))}return s}function Ry(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,ML(i,o,e))}return s}class Ji extends Bu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qm extends Bu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WL{constructor(e){this.count=e}}/**
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
 */var De,z;function uT(n){switch(n){default:return D();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function hT(n){if(n===void 0)return Ne("GRPC error has no .code"),y.UNKNOWN;switch(n){case De.OK:return y.OK;case De.CANCELLED:return y.CANCELLED;case De.UNKNOWN:return y.UNKNOWN;case De.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case De.INTERNAL:return y.INTERNAL;case De.UNAVAILABLE:return y.UNAVAILABLE;case De.UNAUTHENTICATED:return y.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case De.NOT_FOUND:return y.NOT_FOUND;case De.ALREADY_EXISTS:return y.ALREADY_EXISTS;case De.PERMISSION_DENIED:return y.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case De.ABORTED:return y.ABORTED;case De.OUT_OF_RANGE:return y.OUT_OF_RANGE;case De.UNIMPLEMENTED:return y.UNIMPLEMENTED;case De.DATA_LOSS:return y.DATA_LOSS;default:return D()}}(z=De||(De={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return GE(this.inner)}size(){return this.innerSize}}/**
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
 */const qL=new Se(S.comparator);function bt(){return qL}const dT=new Se(S.comparator);function No(...n){let e=dT;for(const t of n)e=e.insert(t.key,t);return e}function fT(n){let e=dT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function gn(){return Vo()}function mT(){return Vo()}function Vo(){return new qs(n=>n.toString(),(n,e)=>n.isEqual(e))}const $L=new Se(S.comparator),jL=new re(S.comparator);function B(...n){let e=jL;for(const t of n)e=e.add(t);return e}const GL=new re(V);function Wu(){return GL}/**
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
 */class rc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rc(M.min(),r,Wu(),bt(),B())}}class ic{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ic(s,t,B(),B(),B())}}/**
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
 */class Kc{constructor(e,t,s,r){this.Tt=e,this.removedTargetIds=t,this.key=s,this.Et=r}}class pT{constructor(e,t){this.targetId=e,this.At=t}}class gT{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class xy{constructor(){this.Rt=0,this.bt=Py(),this.Pt=Pe.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=B(),t=B(),s=B();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:D()}}),new ic(this.Pt,this.vt,e,t,s)}Nt(){this.Vt=!1,this.bt=Py()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class HL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=bt(),this.qt=Oy(),this.Kt=new re(V)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const s=this.zt(t);switch(e.state){case 0:this.Ht(t)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),s.Ct(e.resumeToken));break;default:D()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((s,r)=>{this.Ht(r)&&t(r)})}Yt(e){const t=e.targetId,s=e.At.count,r=this.Xt(t);if(r){const i=r.target;if(Tl(i))if(s===0){const o=new S(i.path);this.jt(t,o,ce.newNoDocument(o,M.min()))}else F(s===1);else this.Zt(t)!==s&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Tl(a.target)){const c=new S(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,ce.newNoDocument(c,e))}i.Dt&&(t.set(o,i.xt()),i.Nt())}});let s=B();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new rc(e,t,this.Kt,this.Ut,s);return this.Ut=bt(),this.qt=Oy(),this.Kt=new re(V),r}Qt(e,t){if(!this.Ht(e))return;const s=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new xy,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new re(V),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new xy),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Oy(){return new Se(S.comparator)}function Py(){return new Se(S.comparator)}/**
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
 */const YL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class KL{constructor(e,t){this.databaseId=e,this.gt=t}}function ya(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yT(n,e){return n.gt?e.toBase64():e.toUint8Array()}function QL(n,e){return ya(n,e.toTimestamp())}function $e(n){return F(!!n),M.fromTimestamp(function(e){const t=Ss(e);return new _e(t.seconds,t.nanos)}(n))}function $m(n,e){return function(t){return new Q(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function _T(n){const e=Q.fromString(n);return F(CT(e)),e}function _a(n,e){return $m(n.databaseId,e.path)}function _n(n,e){const t=_T(e);if(t.get(1)!==n.databaseId.projectId)throw new v(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new v(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new S(wT(t))}function Vd(n,e){return $m(n.databaseId,e)}function vT(n){const e=_T(n);return e.length===4?Q.emptyPath():wT(e)}function va(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wT(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function My(n,e,t){return{name:_a(n,e),fields:t.value.mapValue.fields}}function IT(n,e,t){const s=_n(n,e.name),r=$e(e.updateTime),i=new Ze({mapValue:{fields:e.fields}}),o=ce.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function JL(n,e){return"found"in e?function(t,s){F(!!s.found),s.found.name,s.found.updateTime;const r=_n(t,s.found.name),i=$e(s.found.updateTime),o=new Ze({mapValue:{fields:s.found.fields}});return ce.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){F(!!s.missing),F(!!s.readTime);const r=_n(t,s.missing),i=$e(s.readTime);return ce.newNoDocument(r,i)}(n,e):D()}function XL(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(F(l===void 0||typeof l=="string"),Pe.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Pe.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:hT(c.code);return new v(l,c.message||"")}(o);t=new gT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=_n(n,s.document.name),i=$e(s.document.updateTime),o=new Ze({mapValue:{fields:s.document.fields}}),a=ce.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Kc(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=_n(n,s.document),i=s.readTime?$e(s.readTime):M.min(),o=ce.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Kc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=_n(n,s.document),i=s.removedTargetIds||[];t=new Kc([],i,r,null)}else{if(!("filter"in e))return D();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new WL(r),o=s.targetId;t=new pT(o,i)}}return t}function wa(n,e){let t;if(e instanceof Qi)t={update:My(n,e.key,e.value)};else if(e instanceof Ji)t={delete:_a(n,e.key)};else if(e instanceof ns)t={update:My(n,e.key,e.data),updateMask:iF(e.fieldMask)};else{if(!(e instanceof qm))return D();t={verify:_a(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Sr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bi)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw D()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:QL(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:D()}(n,e.precondition)),t}function Bd(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?ge.updateTime($e(r.updateTime)):r.exists!==void 0?ge.exists(r.exists):ge.none()}(e.currentDocument):ge.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new Ti;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Sr(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Cr(l)}else"increment"in o?a=new bi(i,o.increment):D();const c=Ae.fromServerFormat(o.fieldPath);return new sc(c,a)}(n,r)):[];if(e.update){e.update.name;const r=_n(n,e.update.name),i=new Ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ot(c.map(l=>Ae.fromServerFormat(l)))}(e.updateMask);return new ns(r,i,o,t,s)}return new Qi(r,i,t,s)}if(e.delete){const r=_n(n,e.delete);return new Ji(r,t)}if(e.verify){const r=_n(n,e.verify);return new qm(r,t)}return D()}function ZL(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?$e(s.updateTime):$e(r);return i.isEqual(M.min())&&(i=$e(r)),new UL(i,s.transformResults||[])}(t,e))):[]}function ET(n,e){return{documents:[Vd(n,e.path)]}}function TT(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Vd(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Vd(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(vy(h.value))return{unaryFilter:{field:Jr(h.field),op:"IS_NAN"}};if(_y(h.value))return{unaryFilter:{field:Jr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(vy(h.value))return{unaryFilter:{field:Jr(h.field),op:"IS_NOT_NAN"}};if(_y(h.value))return{unaryFilter:{field:Jr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(h.field),op:nF(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Jr(u.field),direction:tF(u.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ec(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function bT(n){let e=vT(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){F(s===1);const u=t.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];t.where&&(i=ST(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new fi(ii(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ec(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ns(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ns(d,h)}(t.endAt)),JE(e,r,o,i,a,"F",c,l)}function eF(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return D()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function ST(n){return n?n.unaryFilter!==void 0?[rF(n)]:n.fieldFilter!==void 0?[sF(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>ST(e)).reduce((e,t)=>e.concat(t)):D():[]}function tF(n){return YL[n]}function nF(n){return zL[n]}function Jr(n){return{fieldPath:n.canonicalString()}}function ii(n){return Ae.fromServerFormat(n.fieldPath)}function sF(n){return et.create(ii(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(n.fieldFilter.op),n.fieldFilter.value)}function rF(n){switch(n.unaryFilter.op){case"IS_NAN":const e=ii(n.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=ii(n.unaryFilter.field);return et.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ii(n.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return D()}}function iF(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function CT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function _t(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ly(e)),e=oF(n.get(t),e);return Ly(e)}function oF(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ly(n){return n+""}function yn(n){const e=n.length;if(F(e>=2),e===2)return F(n.charAt(0)===""&&n.charAt(1)===""),Q.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&D(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:D()}i=o+2}return new Q(s)}/**
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
 */const Fy=["userId","batchId"];/**
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
 */function Qc(n,e){return[n,_t(e)]}function kT(n,e,t){return[n,_t(e),t]}const aF={},cF=["prefixPath","collectionGroup","readTime","documentId"],lF=["prefixPath","collectionGroup","documentId"],uF=["collectionGroup","readTime","prefixPath","documentId"],hF=["canonicalId","targetId"],dF=["targetId","path"],fF=["path","targetId"],mF=["collectionId","parent"],pF=["indexId","uid"],gF=["uid","sequenceNumber"],yF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_F=["indexId","uid","orderedDocumentKey"],vF=["userId","collectionPath","documentId"],wF=["userId","collectionPath","largestBatchId"],IF=["userId","collectionGroup","largestBatchId"],NT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],EF=[...NT,"documentOverlays"],AT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],DT=AT,TF=[...DT,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Wd extends jE{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function ze(n,e){const t=C(n);return Zt.M(t.ie,e)}/**
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
 */class jm{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&VL(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Uo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Uo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=cT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(M.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,(t,s)=>Ay(t,s))&&Ii(this.baseMutations,e.baseMutations,(t,s)=>Ay(t,s))}}class Gm{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){F(e.mutations.length===s.length);let r=$L;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Gm(e,t,s,r)}}/**
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
 */class Hm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _s{constructor(e,t,s,r,i=M.min(),o=M.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class RT{constructor(e){this.re=e}}function bF(n,e){let t;if(e.document)t=IT(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=S.fromSegments(e.noDocument.path),r=Nr(e.noDocument.readTime);t=ce.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return D();{const s=S.fromSegments(e.unknownDocument.path),r=Nr(e.unknownDocument.version);t=ce.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new _e(s[0],s[1]);return M.fromTimestamp(r)}(e.readTime)),t}function Uy(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Cl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:_a(r,i.key),fields:i.data.value.mapValue.fields,updateTime:ya(r,i.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:kr(e.version)};else{if(!e.isUnknownDocument())return D();s.unknownDocument={path:t.path.toArray(),version:kr(e.version)}}return s}function Cl(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function kr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Nr(n){const e=new _e(n.seconds,n.nanoseconds);return M.fromTimestamp(e)}function Zs(n,e){const t=(e.baseMutations||[]).map(i=>Bd(n.re,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Bd(n.re,i)),r=_e.fromMillis(e.localWriteTimeMs);return new jm(e.batchId,r,t,s)}function Ao(n){const e=Nr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Nr(n.lastLimboFreeSnapshotVersion):M.min();let s;var r;return n.query.documents!==void 0?(F((r=n.query).documents.length===1),s=kt(Ki(vT(r.documents[0])))):s=function(i){return kt(bT(i))}(n.query),new _s(s,n.targetId,0,n.lastListenSequenceNumber,e,t,Pe.fromBase64String(n.resumeToken))}function xT(n,e){const t=kr(e.snapshotVersion),s=kr(e.lastLimboFreeSnapshotVersion);let r;r=Tl(e.target)?ET(n.re,e.target):TT(n.re,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:br(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Ym(n){const e=bT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sl(e,e.limit,"L"):e}function Gh(n,e){return new Hm(e.largestBatchId,Bd(n.re,e.overlayMutation))}function Vy(n,e){const t=e.path.lastSegment();return[n,_t(e.path.popLast()),t]}function By(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:kr(s.readTime),documentKey:_t(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class SF{getBundleMetadata(e,t){return Wy(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Nr(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return Wy(e).put({bundleId:(s=t).id,createTime:kr($e(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return qy(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:Ym(r.bundledQuery),readTime:Nr(r.readTime)};var r})}saveNamedQuery(e,t){return qy(e).put(function(s){return{name:s.name,readTime:kr($e(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Wy(n){return ze(n,"bundles")}function qy(n){return ze(n,"namedQueries")}/**
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
 */class qu{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const s=t.uid||"";return new qu(e,s)}getOverlay(e,t){return mo(e).get(Vy(this.userId,t)).next(s=>s?Gh(this.It,s):null)}getOverlays(e,t){const s=gn();return p.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new Hm(t,o);r.push(this.ue(e,a))}),p.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(_t(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(mo(e).Y("collectionPathOverlayIndex",a))}),p.waitFor(i)}getOverlaysForCollection(e,t,s){const r=gn(),i=_t(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return mo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Gh(this.It,c);r.set(l.getKey(),l)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=gn();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return mo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Gh(this.It,l);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}ue(e,t){return mo(e).put(function(s,r,i){const[o,a,c]=Vy(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:wa(s.re,i.mutation)}}(this.It,this.userId,t))}}function mo(n){return ze(n,"documentOverlays")}/**
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
 */class er{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Te(e.integerValue));else if("doubleValue"in e){const s=Te(e.doubleValue);isNaN(s)?this.le(t,13):(this.le(t,15),ma(s)?t.fe(0):t.fe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.le(t,20),typeof s=="string"?t.de(s):(t.de(`${s.seconds||""}`),t.fe(s.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Ir(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?zE(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):D()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const s=e.fields||{};this.le(t,55);for(const r of Object.keys(s))this._e(r,t),this.ae(s[r],t)}pe(e,t){const s=e.values||[];this.le(t,50);for(const r of s)this.ae(r,t)}ge(e,t){this.le(t,37),S.fromName(e).path.forEach(s=>{this.le(t,60),this.Ie(s,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}er.Te=new er;function CF(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function $y(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=CF(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class kF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Pe(s.value),s=t.next();this.ve()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}Se(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Pe(s);else if(s<2048)this.Pe(960|s>>>6),this.Pe(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s);else{const r=t.codePointAt(0);this.Pe(240|r>>>18),this.Pe(128|63&r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r)}}this.ve()}De(e){const t=this.Ce(e),s=$y(t);this.xe(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){const t=this.Ce(e),s=$y(t);this.xe(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class NF{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class AF{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class po{constructor(){this.Be=new kF,this.Le=new NF(this.Be),this.Ue=new AF(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class tr{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new tr(this.indexId,this.documentKey,this.arrayValue,s)}}function Ys(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=jy(n.arrayValue,e.arrayValue),t!==0?t:(t=jy(n.directionalValue,e.directionalValue),t!==0?t:S.comparator(n.documentKey,e.documentKey)))}function jy(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class DF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const s=t;s.dt()?this.je=s:this.Qe.push(s)}}We(e){const t=Md(e);if(t!==void 0&&!this.ze(t))return!1;const s=Qs(e);let r=0,i=0;for(;r<s.length&&this.ze(s[r]);++r);if(r===s.length)return!0;if(this.je!==void 0){const o=s[r];if(!this.He(this.je,o)||!this.Je(this.Ge[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class RF{constructor(){this.Ye=new zm}addToCollectionParentIndex(e,t){return this.Ye.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Ut.min())}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class zm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new re(Q.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new re(Q.comparator)).toArray()}}/**
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
 */const Dc=new Uint8Array(0);class xF{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new zm,this.Ze=new qs(s=>br(s),(s,r)=>tc(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const i={collectionId:s,parent:_t(r)};return Gy(e).put(i)}return p.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[VE(t),""],!1,!0);return Gy(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(yn(o.parent))}return s})}addFieldIndex(e,t){const s=Rc(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=yo(e);return i.next(a=>{o.put(By(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=Rc(e),r=yo(e),i=go(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=go(e);let r=!0;const i=new Map;return p.forEach(this.tn(t),o=>this.en(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=B();const a=[];return p.forEach(i,(c,l)=>{var u;w("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`} to execute ${br(t)}`);const h=function(Y,ve){const Ee=Md(ve);if(Ee===void 0)return null;for(const ue of bl(Y,Ee.fieldPath))switch(ue.op){case"array-contains-any":return ue.value.arrayValue.values||[];case"array-contains":return[ue.value]}return null}(l,c),d=function(Y,ve){const Ee=new Map;for(const ue of Qs(ve))for(const Qe of bl(Y,ue.fieldPath))switch(Qe.op){case"==":case"in":Ee.set(ue.fieldPath.canonicalString(),Qe.value);break;case"not-in":case"!=":return Ee.set(ue.fieldPath.canonicalString(),Qe.value),Array.from(Ee.values())}return null}(l,c),f=function(Y,ve){const Ee=[];let ue=!0;for(const Qe of Qs(ve)){const Gs=Qe.kind===0?Ty(Y,Qe.fieldPath,Y.startAt):by(Y,Qe.fieldPath,Y.startAt);Ee.push(Gs.value),ue&&(ue=Gs.inclusive)}return new Ns(Ee,ue)}(l,c),m=function(Y,ve){const Ee=[];let ue=!0;for(const Qe of Qs(ve)){const Gs=Qe.kind===0?by(Y,Qe.fieldPath,Y.endAt):Ty(Y,Qe.fieldPath,Y.endAt);Ee.push(Gs.value),ue&&(ue=Gs.inclusive)}return new Ns(Ee,ue)}(l,c),g=this.nn(c,l,f),b=this.nn(c,l,m),O=this.sn(c,l,d),q=this.rn(c.indexId,h,g,f.inclusive,b,m.inclusive,O);return p.forEach(q,Y=>s.J(Y,t.limit).next(ve=>{ve.forEach(Ee=>{const ue=S.fromSegments(Ee.documentKey);o.has(ue)||(o=o.add(ue),a.push(ue))})}))}).next(()=>a)}return p.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,s,r,i,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,i.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.on(t[h/l]):Dc,f=this.un(e,d,s[h%l],r),m=this.cn(e,d,i[h%l],o),g=a.map(b=>this.un(e,d,b,!0));u.push(...this.createRange(f,m,g))}return u}un(e,t,s,r){const i=new tr(e,S.empty(),t,s);return r?i:i.Ke()}cn(e,t,s,r){const i=new tr(e,S.empty(),t,s);return r?i.Ke():i}en(e,t){const s=new DF(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return p.forEach(this.tn(t),r=>this.en(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new re(Ae.comparator),c=!1;for(const l of o.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?c=!0:a=a.add(u.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(c?1:0)}(r)&&(s=1):s=0})).next(()=>s)}an(e,t){const s=new po;for(const r of Qs(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.qe(r.kind);er.Te.ce(i,o)}return s.$e()}on(e){const t=new po;return er.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const s=new po;return er.Te.ce(Tr(this.databaseId,t),s.qe(function(r){const i=Qs(r);return i.length===0?0:i[i.length-1].kind}(e))),s.$e()}sn(e,t,s){if(s===null)return[];let r=[];r.push(new po);let i=0;for(const o of Qs(e)){const a=s[i++];for(const c of r)if(this.ln(t,o.fieldPath)&&ga(a))r=this.fn(r,o,a);else{const l=c.qe(o.kind);er.Te.ce(a,l)}}return this.dn(r)}nn(e,t,s){return this.sn(e,t,s.position)}dn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].$e();return t}fn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new po;c.seed(a.$e()),er.Te.ce(o,c.qe(t.kind)),i.push(c)}return i}ln(e,t){return!!e.filters.find(s=>s instanceof et&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Rc(e),r=yo(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(i=>{const o=[];return p.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new El(u.sequenceNumber,new Ut(Nr(u.readTime),new S(yn(u.documentKey)),u.largestBatchId)):El.empty(),d=l.fields.map(([f,m])=>new mL(Ae.fromServerFormat(f),m));return new BE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:V(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Rc(e),i=yo(e);return this._n(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>i.put(By(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return p.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),p.forEach(a,c=>this.wn(e,r,c).next(l=>{const u=this.mn(i,c);return l.isEqual(u)?p.resolve():this.gn(e,i,c,l,u)}))))})}yn(e,t,s,r){return go(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(s,t.key),documentKey:t.key.path.toArray()})}pn(e,t,s,r){return go(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(s,t.key),t.key.path.toArray()])}wn(e,t,s){const r=go(e);let i=new re(Ys);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.hn(s,t)])},(o,a)=>{i=i.add(new tr(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}mn(e,t){let s=new re(Ys);const r=this.an(t,e);if(r==null)return s;const i=Md(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ga(o))for(const a of o.arrayValue.values||[])s=s.add(new tr(t.indexId,e.key,this.on(a),r))}else s=s.add(new tr(t.indexId,e.key,Dc,r));return s}gn(e,t,s,r,i){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Qr(d),g=Qr(f);for(;m||g;){let b=!1,O=!1;if(m&&g){const q=l(m,g);q<0?O=!0:q>0&&(b=!0)}else m!=null?O=!0:b=!0;b?(u(g),g=Qr(f)):O?(h(m),m=Qr(d)):(m=Qr(d),g=Qr(f))}}(r,i,Ys,a=>{o.push(this.yn(e,t,s,a))},a=>{o.push(this.pn(e,t,s,a))}),p.waitFor(o)}_n(e){let t=1;return yo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>Ys(o,a)).filter((o,a,c)=>!a||Ys(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=Ys(o,e),c=Ys(o,t);if(a===0)r[0]=e.Ke();else if(a>0&&c<0)r.push(o),r.push(o.Ke());else if(c>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Dc,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Dc,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Hy)}getMinOffset(e,t){return p.mapArray(this.tn(t),s=>this.en(e,s).next(r=>r||D())).next(Hy)}}function Gy(n){return ze(n,"collectionParents")}function go(n){return ze(n,"indexEntries")}function Rc(n){return ze(n,"indexConfiguration")}function yo(n){return ze(n,"indexState")}function Hy(n){F(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;Mm(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Ut(e.readTime,e.documentKey,t)}/**
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
 */const Yy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function OT(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{F(a===1)}));const l=[];for(const u of t.mutations){const h=kT(e,u.key.path,t.batchId);i.push(r.delete(h)),l.push(u.key)}return p.waitFor(i).next(()=>l)}function kl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw D();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class $u{constructor(e,t,s,r){this.userId=e,this.It=t,this.indexManager=s,this.referenceDelegate=r,this.In={}}static oe(e,t,s,r){F(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new $u(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return os(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=ti(e),o=os(e);return o.add({}).next(a=>{F(typeof a=="number");const c=new jm(a,t,s,r),l=function(d,f,m){const g=m.baseMutations.map(O=>wa(d.re,O)),b=m.mutations.map(O=>wa(d.re,O));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:g,mutations:b}}(this.It,this.userId,c),u=[];let h=new re((d,f)=>V(d.canonicalString(),f.canonicalString()));for(const d of r){const f=kT(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,aF))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),p.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return os(e).get(t).next(s=>s?(F(s.userId===this.userId),Zs(this.It,s)):null)}Tn(e,t){return this.In[t]?p.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.In[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return os(e).Z({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(F(a.batchId>=s),i=Zs(this.It,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return os(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return os(e).W("userMutationsIndex",t).next(s=>s.map(r=>Zs(this.It,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Qc(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return ti(e).Z({range:r},(o,a,c)=>{const[l,u,h]=o,d=yn(u);if(l===this.userId&&t.path.isEqual(d))return os(e).get(h).next(f=>{if(!f)throw D();F(f.userId===this.userId),i.push(Zs(this.It,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new re(V);const r=[];return t.forEach(i=>{const o=Qc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=ti(e).Z({range:a},(l,u,h)=>{const[d,f,m]=l,g=yn(f);d===this.userId&&i.path.isEqual(g)?s=s.add(m):h.done()});r.push(c)}),p.waitFor(r).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=Qc(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new re(V);return ti(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,m=yn(d);h===this.userId&&s.isPrefixOf(m)?m.length===r&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],r=[];return t.forEach(i=>{r.push(os(e).get(i).next(o=>{if(o===null)throw D();F(o.userId===this.userId),s.push(Zs(this.It,o))}))}),p.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return OT(e.ie,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),p.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return ti(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=yn(i[1]);r.push(c)}else a.done()}).next(()=>{F(r.length===0)})})}containsKey(e,t){return PT(e,this.userId,t)}Rn(e){return MT(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function PT(n,e,t){const s=Qc(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return ti(n).Z({range:i,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===r&&(o=!0),l.done()}).next(()=>o)}function os(n){return ze(n,"mutations")}function ti(n){return ze(n,"documentMutations")}function MT(n){return ze(n,"mutationQueues")}/**
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
 */class Ar{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ar(0)}static vn(){return new Ar(-1)}}/**
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
 */class OF{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new Ar(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>M.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Xr(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(F(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return Xr(e).Z((o,a)=>{const c=Ao(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Xr(e).Z((s,r)=>{const i=Ao(r);t(i)})}Vn(e){return zy(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}Sn(e,t){return zy(e).put("targetGlobalKey",t)}Dn(e,t){return Xr(e).put(xT(this.It,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=br(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Xr(e).Z({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const l=Ao(a);tc(t,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=cs(e);return t.forEach(o=>{const a=_t(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),p.waitFor(r)}removeMatchingKeys(e,t,s){const r=cs(e);return p.forEach(t,i=>{const o=_t(i.path);return p.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=cs(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=cs(e);let i=B();return r.Z({range:s,X:!0},(o,a,c)=>{const l=yn(o[1]),u=new S(l);i=i.add(u)}).next(()=>i)}containsKey(e,t){const s=_t(t.path),r=IDBKeyRange.bound([s],[VE(s)],!1,!0);let i=0;return cs(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}se(e,t){return Xr(e).get(t).next(s=>s?Ao(s):null)}}function Xr(n){return ze(n,"targets")}function zy(n){return ze(n,"targetGlobal")}function cs(n){return ze(n,"targetDocuments")}/**
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
 */function Ky([n,e],[t,s]){const r=V(n,t);return r===0?V(e,s):r}class PF{constructor(e){this.xn=e,this.buffer=new re(Ky),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ky(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MF{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){w("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ws(t)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Bs(t)}await this.Fn(3e5)})}}class LF{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return p.resolve(Tt.at);const s=new PF(t);return this.$n.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(Yy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yy):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let s,r,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),Pd()<=K.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class FF{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new LF(s,r)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}qn(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,r)=>t(r))}addReference(e,t,s){return xc(e,s)}removeReference(e,t,s){return xc(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return xc(e,t)}Gn(e,t){return function(s,r){let i=!1;return MT(s).tt(o=>PT(s,o,r).next(a=>(a&&(i=!0),p.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,M.min()),cs(e).delete([0,_t(o.path)])))});r.push(c)}}).next(()=>p.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return xc(e,t)}Kn(e,t){const s=cs(e);let r,i=Tt.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Tt.at&&t(new S(yn(r)),i),i=l,r=c):i=Tt.at}).next(()=>{i!==Tt.at&&t(new S(yn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xc(n,e){return cs(n).put(function(t,s){return{targetId:0,path:_t(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class LT{constructor(){this.changes=new qs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class UF{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return zs(e).put(s)}removeEntry(e,t,s){return zs(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Cl(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=ce.newInvalidDocument(t);return zs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_o(t))},(r,i)=>{s=this.jn(t,i)}).next(()=>s)}Wn(e,t){let s={size:0,document:ce.newInvalidDocument(t)};return zs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_o(t))},(r,i)=>{s={document:this.jn(t,i),size:kl(i)}}).next(()=>s)}getEntries(e,t){let s=bt();return this.zn(e,t,(r,i)=>{const o=this.jn(r,i);s=s.insert(r,o)}).next(()=>s)}Hn(e,t){let s=bt(),r=new Se(S.comparator);return this.zn(e,t,(i,o)=>{const a=this.jn(i,o);s=s.insert(i,a),r=r.insert(i,kl(o))}).next(()=>({documents:s,Jn:r}))}zn(e,t,s){if(t.isEmpty())return p.resolve();let r=new re(Xy);t.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(_o(r.first()),_o(r.last())),o=r.getIterator();let a=o.getNext();return zs(e).Z({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=S.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Xy(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(_o(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),Cl(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zs(e).W(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=bt();for(const c of o){const l=this.jn(S.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=bt();const o=Jy(t,s),a=Jy(t,Ut.max());return zs(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(S.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===r&&u.done()}).next(()=>i)}newChangeBuffer(e){return new VF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Qy(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}Qn(e,t){return Qy(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=bF(this.It,t);if(!(s.isNoDocument()&&s.version.isEqual(M.min())))return s}return ce.newInvalidDocument(e)}}function FT(n){return new UF(n)}class VF extends LT{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new qs(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new re((i,o)=>V(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Uy(this.Yn.It,o);r=r.add(i.path.popLast());const l=kl(c);s+=l-a.size,t.push(this.Yn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=Uy(this.Yn.It,o.convertToNoDocument(M.min()));t.push(this.Yn.addEntry(e,i,c))}}),r.forEach(i=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Yn.updateMetadata(e,s)),p.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:r})=>(r.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Qy(n){return ze(n,"remoteDocumentGlobal")}function zs(n){return ze(n,"remoteDocumentsV14")}function _o(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Jy(n,e){const t=e.documentKey.path.toArray();return[n,Cl(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Xy(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=V(t[i],s[i]),r)return r;return r=V(t.length,s.length),r||(r=V(t[t.length-2],s[s.length-2]),r||V(t[t.length-1],s[s.length-1]))}/**
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
 */class BF{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class UT{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.getBaseDocument(e,t,s))).next(r=>(s!==null&&Uo(s.mutation,r,Ot.empty(),_e.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,B()).next(()=>s))}getLocalViewOfDocuments(e,t,s=B()){const r=gn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=No();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=gn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,B()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=bt();const o=Vo(),a=Vo();return t.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ns)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Uo(u.mutation,l,u.mutation.getFieldMask(),_e.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new BF(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Vo();let r=new Se((o,a)=>o-a),i=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Ot.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||B()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=mT();u.forEach(d=>{if(!i.has(d)){const f=cT(t.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return S.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):p.resolve(gn());let a=-1,c=i;return o.next(l=>p.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?p.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,B())).next(u=>({batchId:a,changes:fT(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new S(t)).next(s=>{let r=No();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=No();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(l,u){return new ts(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ce.newInvalidDocument(l)))});let o=No();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Uo(l.mutation,c,Ot.empty(),_e.now()),Wm(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):p.resolve(ce.newInvalidDocument(t))}}/**
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
 */class WF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return p.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:$e(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:Ym(s.bundledQuery),readTime:$e(s.readTime)}}(t)),p.resolve()}}/**
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
 */class qF{constructor(){this.overlays=new Se(S.comparator),this.es=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const s=gn();return p.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.ue(e,t,i)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const r=gn(),i=t.length+1,o=new S(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=gn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return p.resolve(a)}ue(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Hm(t,s));let i=this.es.get(t);i===void 0&&(i=B(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
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
 */class Km{constructor(){this.ns=new re(Fe.ss),this.rs=new re(Fe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new Fe(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new Fe(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new S(new Q([])),s=new Fe(t,e),r=new Fe(t,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new S(new Q([])),s=new Fe(t,e),r=new Fe(t,e+1);let i=B();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Fe(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Fe{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return S.comparator(e.key,t.key)||V(e._s,t._s)}static os(e,t){return V(e._s,t._s)||S.comparator(e.key,t.key)}}/**
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
 */class $F{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new re(Fe.ss)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jm(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ps(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Fe(t,0),r=new Fe(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new re(V);return t.forEach(r=>{const i=new Fe(r,0),o=new Fe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;S.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new S(i),0);let a=new re(V);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),p.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){F(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(t.mutations,r=>{const i=new Fe(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new Fe(t,0),r=this.gs.firstAfterOrEqual(s);return p.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jF{constructor(e){this.Es=e,this.docs=new Se(S.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let s=bt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ce.newInvalidDocument(r))}),p.resolve(s)}getAllFromCollection(e,t,s){let r=bt();const i=new S(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Mm(qE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,t,s,r){D()}As(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new GF(this)}getSize(e){return p.resolve(this.size)}}class GF extends LT{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class HF{constructor(e){this.persistence=e,this.Rs=new qs(t=>br(t),tc),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Km,this.targetCount=0,this.vs=Ar.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,r)=>t(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),p.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ar(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Dn(t),p.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.Ps.containsKey(t))}}/**
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
 */class VT{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Tt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new HF(this),this.indexManager=new RF,this.remoteDocumentCache=function(s){return new jF(s)}(s=>this.referenceDelegate.xs(s)),this.It=new RT(t),this.Ns=new WF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new $F(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new YF(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,t){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class YF extends jE{constructor(e){super(),this.currentSequenceNumber=e}}class ju{constructor(e){this.persistence=e,this.Fs=new Km,this.$s=null}static Bs(e){return new ju(e)}get Ls(){if(this.$s)return this.$s;throw D()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),p.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const r=S.fromPath(s);return this.Us(e,r).next(i=>{i||t.removeEntry(r,M.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return p.or([()=>p.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class zF{constructor(e){this.It=e}$(e,t,s,r){const i=new Uu("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fy,{unique:!0}),a.createObjectStore("documentMutations")}(e),Zy(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Zy(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:M.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fy,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return p.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.qs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),s<7&&r>=7&&(o=o.next(()=>this.Gs(i))),s<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.js(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:vF});c.createIndex("collectionPathOverlayIndex",wF,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",IF,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:cF});c.createIndex("documentKeyIndex",lF),c.createIndex("collectionGroupIndex",uF)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:pF}).createIndex("sequenceNumberIndex",gF,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:yF}).createIndex("documentKeyIndex",_F,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,r)=>{t+=kl(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}qs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(r=>p.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>p.forEach(a,c=>{F(c.userId===i.userId);const l=Zs(this.It,c);return OT(e,i.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const c=new Q(o),l=function(u){return[0,_t(u)]}(c);i.push(t.get(l).next(u=>u?p.resolve():(h=>t.put({targetId:0,path:_t(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(i))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:mF});const s=t.store("collectionParents"),r=new zm,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:_t(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new Q(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=yn(a);return i(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,r)=>{const i=Ao(r),o=xT(this.It,i);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new S(Q.fromString(l.document.name).popFirst(5)):l.noDocument?S.fromSegments(l.noDocument.path):l.unknownDocument?S.fromSegments(l.unknownDocument.path):D()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(u))}).next(()=>p.waitFor(r))}zs(e,t){const s=t.store("mutations"),r=FT(this.It),i=new VT(ju.Bs,this.It.re);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:B();Zs(this.It,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),p.forEach(a,(c,l)=>{const u=new Ve(l),h=qu.oe(this.It,u),d=i.getIndexManager(u),f=$u.oe(u,this.It,d,i.referenceDelegate);return new UT(r,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Wd(t,Tt.at),c).next()})})}}function Zy(n){n.createObjectStore("targetDocuments",{keyPath:dF}).createIndex("documentTargetsIndex",fF,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hF,{unique:!0}),n.createObjectStore("targetGlobal")}const Hh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Qm{constructor(e,t,s,r,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=i,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Qm.C())throw new v(y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new FF(this,r),this.ii=t+"main",this.It=new RT(c),this.ri=new Zt(this.ii,this.Xs,new zF(this.It)),this.Cs=new OF(this.referenceDelegate,this.It),this.remoteDocumentCache=FT(this.It),this.Ns=new SF,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new v(y.FAILED_PRECONDITION,Hh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Tt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Oc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Ws(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return vo(e).get("owner").next(t=>p.resolve(this.mi(t)))}gi(e){return Oc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=ze(t,"clientMetadata");return s.W().next(r=>{const i=this.Ii(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return p.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?p.resolve(!0):vo(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new v(y.FAILED_PRECONDITION,Hh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Oc(e).W().next(s=>this.Ii(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Wd(e,Tt.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Oc(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return $u.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xF(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return qu.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?TF:o===14?DT:o===13?AT:o===12?EF:o===11?NT:void D();var o;let a;return this.ri.runTransaction(e,r,i,c=>(a=new Wd(c,this.Ss?this.Ss.next():Tt.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new v(y.FAILED_PRECONDITION,$E);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return vo(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new v(y.FAILED_PRECONDITION,Hh)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return vo(e).put("owner",t)}static C(){return Zt.C()}_i(e){const t=vo(e);return t.get("owner").next(s=>this.mi(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(Ne(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),DD()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Ne("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function vo(n){return ze(n,"owner")}function Oc(n){return ze(n,"clientMetadata")}function Jm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Xm{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=r}static Ci(e,t){let s=B(),r=B();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xm(e,t.fromCache,s,r)}}/**
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
 */class BT{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,s)).next(i=>i||this.Mi(e,t))}ki(e,t){if(ky(t))return p.resolve(null);let s=kt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Sl(t,null,"F"),s=kt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=B(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Sl(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,r){return ky(t)||r.isEqual(M.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,s,r)?this.Mi(e,t):(Pd()<=K.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ud(t)),this.Bi(e,o,t,WE(r,-1)))})}Fi(e,t){let s=new re(eT(e));return t.forEach((r,i)=>{Wm(e,i)&&(s=s.add(i))}),s}$i(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Pd()<=K.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Ud(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ut.min())}Bi(e,t,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class KF{constructor(e,t,s,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new Se(V),this.qi=new qs(i=>br(i),tc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function WT(n,e,t,s){return new KF(n,e,t,s)}async function qT(n,e){const t=C(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=B();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function QF(n,e){const t=C(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=p.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const g=c.docVersions.get(f);F(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=B();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function $T(n){const e=C(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function JF(n,e){const t=C(n),s=e.snapshotVersion;let r=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});r=t.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Pe.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(m,g,b){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(i,f))});let c=bt(),l=B();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(jT(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(M.min())){const u=t.Cs.getLastRemoteSnapshotVersion(i).next(h=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.Ui=r,i))}function jT(n,e,t){let s=B(),r=B();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=bt();return t.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(M.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function XF(n,e){const t=C(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Si(n,e){const t=C(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Cs.getTargetData(s,e).next(i=>i?(r=i,p.resolve(r)):t.Cs.allocateTargetId(s).next(o=>(r=new _s(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function Ci(n,e,t){const s=C(n),r=s.Ui.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ws(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Nl(n,e,t){const s=C(n);let r=M.min(),i=B();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=C(a),h=u.qi.get(l);return h!==void 0?p.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,kt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?r:M.min(),t?i:B())).next(a=>(YT(s,ZE(e),a),{documents:a,Hi:i})))}function GT(n,e){const t=C(n),s=C(t.Cs),r=t.Ui.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.se(i,e).next(o=>o?o.target:null))}function HT(n,e){const t=C(n),s=t.Ki.get(e)||M.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Gi.getAllFromCollectionGroup(r,e,WE(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(YT(t,e,r),r))}function YT(n,e,t){let s=n.Ki.get(e)||M.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ki.set(e,s)}async function ZF(n,e,t,s){const r=C(n);let i=B(),o=bt();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(i=i.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),c=await Si(r,function(l){return kt(Ki(Q.fromString(`__bundle__/docs/${l}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",l=>jT(l,a,o).next(u=>(a.apply(l),u)).next(u=>r.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>r.Cs.addMatchingKeys(l,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function eU(n,e,t=B()){const s=await Si(n,kt(Ym(e.bundledQuery))),r=C(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=$e(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ns.saveNamedQuery(i,e);const a=s.withResumeToken(Pe.EMPTY_BYTE_STRING,o);return r.Ui=r.Ui.insert(a.targetId,a),r.Cs.updateTargetData(i,a).next(()=>r.Cs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Cs.addMatchingKeys(i,t,s.targetId)).next(()=>r.Ns.saveNamedQuery(i,e))})}function e_(n,e){return`firestore_clients_${n}_${e}`}function t_(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Yh(n,e){return`firestore_targets_${n}_${e}`}class Al{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Zi(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new v(r.error.code,r.error.message))),o?new Al(e,t,r.state,i):(Ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bo{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new v(s.error.code,s.error.message))),i?new Bo(e,s.state,r):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Wu();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=YE(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new Dl(e,i):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zm{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Zm(t.clientId,t.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class qd{constructor(){this.activeTargetIds=Wu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zh{constructor(e,t,s,r,i){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Se(V),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=e_(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new qd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const r=this.getItem(e_(this.persistenceKey,s));if(r){const i=Dl.Zi(s,r);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Yh(this.persistenceKey,e));if(s){const r=Bo.Zi(e,s);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Yh(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Er(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(r){let i=Tt.at;if(r!=null)try{const o=JSON.parse(r);F(typeof o=="number"),i=o}catch(o){Ne("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Tt.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Mr(r)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const r=new Al(this.currentUser,e,t,s),i=t_(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=t_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const r=Yh(this.persistenceKey,e),i=new Bo(e,t,s);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return Dl.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Al.Zi(new Ve(i),r,t)}Nr(e,t){const s=this._r.exec(e),r=Number(s[1]);return Bo.Zi(r,t)}yr(e){return Zm.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Wu();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class zT{constructor(){this.Lr=new qd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,s){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new qd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tU{qr(e){}shutdown(){}}/**
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
 */class n_{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const nU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sU{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class rU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,r,i){const o=this.ho(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw wi("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,r,i,o){return this.ao(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=nU[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new nL;a.setWithCredentials(!0),a.listenOnce(Z1.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case jh.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case jh.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new v(y.DEADLINE_EXCEEDED,"Request time out"));break;case jh.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(l=d)===null||l===void 0?void 0:l.error;if(f&&f.status&&f.message){const m=function(g){const b=g.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(f.status);o(new v(m,f.message))}else o(new v(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(y.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}wo(e,t,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=J1(),o=X1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new tL({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new sU({Hr:m=>{h?w("Connection","Not sending because WebChannel is closed:",m):(u||(w("Connection","Opening WebChannel transport."),l.open(),u=!0),w("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),f=(m,g,b)=>{m.listen(g,O=>{try{b(O)}catch(q){setTimeout(()=>{throw q},0)}})};return f(l,Nc.EventType.OPEN,()=>{h||w("Connection","WebChannel transport opened.")}),f(l,Nc.EventType.CLOSE,()=>{h||(h=!0,w("Connection","WebChannel transport closed"),d.io())}),f(l,Nc.EventType.ERROR,m=>{h||(h=!0,wi("Connection","WebChannel transport errored:",m),d.io(new v(y.UNAVAILABLE,"The operation could not be completed")))}),f(l,Nc.EventType.MESSAGE,m=>{var g;if(!h){const b=m.data[0];F(!!b);const O=b,q=O.error||((g=O[0])===null||g===void 0?void 0:g.error);if(q){w("Connection","WebChannel received error:",q);const Y=q.status;let ve=function(ue){const Qe=De[ue];if(Qe!==void 0)return hT(Qe)}(Y),Ee=q.message;ve===void 0&&(ve=y.INTERNAL,Ee="Unknown error status: "+Y+" with message "+q.message),h=!0,d.io(new v(ve,Ee)),l.close()}else w("Connection","WebChannel received:",b),d.ro(b)}}),f(o,eL.STAT_EVENT,m=>{m.stat===dy.PROXY?w("Connection","Detected buffering proxy"):m.stat===dy.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function KT(){return typeof window<"u"?window:null}function Jc(){return typeof document<"u"?document:null}/**
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
 */function oc(n){return new KL(n,!0)}class ep{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class QT{constructor(e,t,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ep(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===y.RESOURCE_EXHAUSTED?(Ne(t.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===t&&this.Go(s,r)},s=>{e(()=>{const r=new v(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iU extends QT{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=XL(this.It,e),s=function(r){if(!("targetChange"in r))return M.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?M.min():i.readTime?$e(i.readTime):M.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=va(this.It),t.addTarget=function(r,i){let o;const a=i.target;return o=Tl(a)?{documents:ET(r,a)}:{query:TT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=yT(r,i.resumeToken):i.snapshotVersion.compareTo(M.min())>0&&(o.readTime=ya(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=eF(this.It,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=va(this.It),t.removeTarget=e,this.Bo(t)}}class oU extends QT{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=ZL(e.writeResults,e.commitTime),s=$e(e.commitTime);return this.listener.Zo(s,t)}return F(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=va(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>wa(this.It,s))};this.Bo(t)}}/**
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
 */class aU extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new v(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(y.UNKNOWN,r.toString())})}_o(e,t,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class cU{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ne(t),this.ou=!1):w("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class lU{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{$s(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c._u.add(4),await Xi(c),c.gu.set("Unknown"),c._u.delete(4),await ac(c)}(this))})}),this.gu=new cU(s,r)}}async function ac(n){if($s(n))for(const e of n.wu)await e(!0)}async function Xi(n){for(const e of n.wu)await e(!1)}function Gu(n,e){const t=C(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),sp(t)?np(t):eo(t).ko()&&tp(t,e))}function Ia(n,e){const t=C(n),s=eo(t);t.du.delete(e),s.ko()&&JT(t,e),t.du.size===0&&(s.ko()?s.Fo():$s(t)&&t.gu.set("Unknown"))}function tp(n,e){n.yu.Mt(e.targetId),eo(n).zo(e)}function JT(n,e){n.yu.Mt(e),eo(n).Ho(e)}function np(n){n.yu=new HL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),eo(n).start(),n.gu.uu()}function sp(n){return $s(n)&&!eo(n).No()&&n.du.size>0}function $s(n){return C(n)._u.size===0}function XT(n){n.yu=void 0}async function uU(n){n.du.forEach((e,t)=>{tp(n,e)})}async function hU(n,e){XT(n),sp(n)?(n.gu.hu(e),np(n)):n.gu.set("Unknown")}async function dU(n,e,t){if(n.gu.set("Online"),e instanceof gT&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rl(n,s)}else if(e instanceof Kc?n.yu.Gt(e):e instanceof pT?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(M.min()))try{const s=await $T(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Pe.EMPTY_BYTE_STRING,c.snapshotVersion)),JT(r,a);const l=new _s(c.target,a,1,c.sequenceNumber);tp(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Rl(n,s)}}async function Rl(n,e,t){if(!Ws(e))throw e;n._u.add(1),await Xi(n),n.gu.set("Offline"),t||(t=()=>$T(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await ac(n)})}function ZT(n,e){return e().catch(t=>Rl(n,t,e))}async function Zi(n){const e=C(n),t=As(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;fU(e);)try{const r=await XF(e.localStore,s);if(r===null){e.fu.length===0&&t.Fo();break}s=r.batchId,mU(e,r)}catch(r){await Rl(e,r)}eb(e)&&tb(e)}function fU(n){return $s(n)&&n.fu.length<10}function mU(n,e){n.fu.push(e);const t=As(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function eb(n){return $s(n)&&!As(n).No()&&n.fu.length>0}function tb(n){As(n).start()}async function pU(n){As(n).eu()}async function gU(n){const e=As(n);for(const t of n.fu)e.Xo(t.mutations)}async function yU(n,e,t){const s=n.fu.shift(),r=Gm.from(s,e,t);await ZT(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Zi(n)}async function _U(n,e){e&&As(n).Yo&&await async function(t,s){if(r=s.code,uT(r)&&r!==y.ABORTED){const i=t.fu.shift();As(t).Mo(),await ZT(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zi(t)}var r}(n,e),eb(n)&&tb(n)}async function s_(n,e){const t=C(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=$s(t);t._u.add(3),await Xi(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await ac(t)}async function $d(n,e){const t=C(n);e?(t._u.delete(2),await ac(t)):e||(t._u.add(2),await Xi(t),t.gu.set("Unknown"))}function eo(n){return n.pu||(n.pu=function(e,t,s){const r=C(e);return r.su(),new iU(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:uU.bind(null,n),Zr:hU.bind(null,n),Wo:dU.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),sp(n)?np(n):n.gu.set("Unknown")):(await n.pu.stop(),XT(n))})),n.pu}function As(n){return n.Iu||(n.Iu=function(e,t,s){const r=C(e);return r.su(),new oU(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:pU.bind(null,n),Zr:_U.bind(null,n),tu:gU.bind(null,n),Zo:yU.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Zi(n)):(await n.Iu.stop(),n.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class rp{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new rp(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function to(n,e){if(Ne("AsyncQueue",`${e}: ${n}`),Ws(n))return new v(y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class mi{constructor(e){this.comparator=e?(t,s)=>e(t,s)||S.comparator(t.key,s.key):(t,s)=>S.comparator(t.key,s.key),this.keyedMap=No(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class r_{constructor(){this.Tu=new Se(S.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):D():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class ki{constructor(e,t,s,r,i,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,t,mi.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class vU{constructor(){this.Au=void 0,this.listeners=[]}}class wU{constructor(){this.queries=new qs(e=>XE(e),nc),this.onlineState="Unknown",this.Ru=new Set}}async function ip(n,e){const t=C(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new vU),r)try{i.Au=await t.onListen(s)}catch(o){const a=to(o,`Initialization of query '${Ud(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&ap(t)}async function op(n,e){const t=C(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function IU(n,e){const t=C(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&ap(t)}function EU(n,e,t){const s=C(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function ap(n){n.Ru.forEach(e=>{e.next()})}class cp{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class TU{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class i_{constructor(e){this.It=e}Ji(e){return _n(this.It,e)}Yi(e){return e.metadata.exists?IT(this.It,e.document,!1):ce.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return $e(e)}}class bU{constructor(e,t,s){this.Mu=e,this.localStore=t,this.It=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=nb(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=Q.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new i_(this.It);for(const r of e)if(r.metadata.queries){const i=s.Ji(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||B()).add(i);t.set(o,a)}}return t}async complete(){const e=await ZF(this.localStore,new i_(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await eU(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function nb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class sb{constructor(e){this.key=e}}class rb{constructor(e){this.key=e}}class ib{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=B(),this.mutatedKeys=B(),this.Gu=eT(e),this.Qu=new mi(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new r_,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Wm(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(s.track({type:3,doc:f}),b=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),b=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),b=!0):d&&!f&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(f?(o=o.add(f),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ki(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new r_,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=B(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new rb(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new sb(s))}),t}tc(e){this.Uu=e.Hi,this.Ku=B();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class SU{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class CU{constructor(e){this.key=e,this.nc=!1}}class kU{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new qs(a=>XE(a),nc),this.rc=new Map,this.oc=new Set,this.uc=new Se(S.comparator),this.cc=new Map,this.ac=new Km,this.hc={},this.lc=new Map,this.fc=Ar.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function NU(n,e){const t=fp(n);let s,r;const i=t.ic.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Si(t.localStore,kt(e));t.isPrimaryClient&&Gu(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lp(t,e,s,a==="current",o.resumeToken)}return r}async function lp(n,e,t,s,r){n._c=(h,d,f)=>async function(m,g,b,O){let q=g.view.Wu(b);q.$i&&(q=await Nl(m.localStore,g.query,!1).then(({documents:Ee})=>g.view.Wu(Ee,q)));const Y=O&&O.targetChanges.get(g.targetId),ve=g.view.applyChanges(q,m.isPrimaryClient,Y);return jd(m,g.targetId,ve.Xu),ve.snapshot}(n,h,d,f);const i=await Nl(n.localStore,e,!0),o=new ib(e,i.Hi),a=o.Wu(i.documents),c=ic.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);jd(n,t,l.Xu);const u=new SU(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function AU(n,e){const t=C(n),s=t.ic.get(e),r=t.rc.get(s.targetId);if(r.length>1)return t.rc.set(s.targetId,r.filter(i=>!nc(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Ci(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Ia(t.remoteStore,s.targetId),Ni(t,s.targetId)}).catch(Bs)):(Ni(t,s.targetId),await Ci(t.localStore,s.targetId,!0))}async function DU(n,e,t){const s=mp(n);try{const r=await function(i,o){const a=C(i),c=_e.now(),l=o.reduce((d,f)=>d.add(f.key),B());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=bt(),m=B();return a.Gi.getEntries(d,l).next(g=>{f=g,f.forEach((b,O)=>{O.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const b=[];for(const O of o){const q=BL(O,u.get(O.key).overlayedDocument);q!=null&&b.push(new ns(O.key,q,KE(q.value.mapValue),ge.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(g=>{h=g;const b=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,b)})}).then(()=>({batchId:h.batchId,changes:fT(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Se(V)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,t),await ss(s,r.changes),await Zi(s.remoteStore)}catch(r){const i=to(r,"Failed to persist write");t.reject(i)}}async function ob(n,e){const t=C(n);try{const s=await JF(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.cc.get(i);o&&(F(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?F(o.nc):r.removedDocuments.size>0&&(F(o.nc),o.nc=!1))}),await ss(t,s,e)}catch(s){await Bs(s)}}function o_(n,e,t){const s=C(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&ap(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function RU(n,e,t){const s=C(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Se(S.comparator);o=o.insert(i,ce.newNoDocument(i,M.min()));const a=B().add(i),c=new rc(M.min(),new Map,new re(V),o,a);await ob(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),dp(s)}else await Ci(s.localStore,e,!1).then(()=>Ni(s,e,t)).catch(Bs)}async function xU(n,e){const t=C(n),s=e.batch.batchId;try{const r=await QF(t.localStore,e);hp(t,s,null),up(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ss(t,r)}catch(r){await Bs(r)}}async function OU(n,e,t){const s=C(n);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(F(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);hp(s,e,t),up(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ss(s,r)}catch(r){await Bs(r)}}async function PU(n,e){const t=C(n);$s(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=C(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.lc.get(s)||[];r.push(e),t.lc.set(s,r)}catch(s){const r=to(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function up(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function hp(n,e,t){const s=C(n);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Ni(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||ab(n,s)})}function ab(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Ia(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),dp(n))}function jd(n,e,t){for(const s of t)s instanceof sb?(n.ac.addReference(s.key,e),MU(n,s)):s instanceof rb?(w("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||ab(n,s.key)):D()}function MU(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.oc.add(s),dp(n))}function dp(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new S(Q.fromString(e)),s=n.fc.next();n.cc.set(s,new CU(t)),n.uc=n.uc.insert(t,s),Gu(n.remoteStore,new _s(kt(Ki(t.path)),s,2,Tt.at))}}async function ss(n,e,t){const s=C(n),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Xm.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=C(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,h=>p.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>p.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ws(u))throw u;w("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function LU(n,e){const t=C(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await qT(t.localStore,e);t.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(y.CANCELLED,i))})}),r.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ss(t,s.ji)}}function FU(n,e){const t=C(n),s=t.cc.get(e);if(s&&s.nc)return B().add(s.key);{let r=B();const i=t.rc.get(e);if(!i)return r;for(const o of i){const a=t.ic.get(o);r=r.unionWith(a.view.ju)}return r}}async function UU(n,e){const t=C(n),s=await Nl(t.localStore,e.query,!0),r=e.view.tc(s);return t.isPrimaryClient&&jd(t,e.targetId,r.Xu),r}async function VU(n,e){const t=C(n);return HT(t.localStore,e).then(s=>ss(t,s))}async function BU(n,e,t,s){const r=C(n),i=await function(o,a){const c=C(o),l=C(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):p.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await Zi(r.remoteStore):t==="acknowledged"||t==="rejected"?(hp(r,e,s||null),up(r,e),function(o,a){C(C(o).mutationQueue).An(a)}(r.localStore,e)):D(),await ss(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function WU(n,e){const t=C(n);if(fp(t),mp(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await a_(t,s.toArray());t.dc=!0,await $d(t.remoteStore,!0);for(const i of r)Gu(t.remoteStore,i)}else if(e===!1&&t.dc!==!1){const s=[];let r=Promise.resolve();t.rc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Ni(t,o),Ci(t.localStore,o,!0))),Ia(t.remoteStore,o)}),await r,await a_(t,s),function(i){const o=C(i);o.cc.forEach((a,c)=>{Ia(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Se(S.comparator)}(t),t.dc=!1,await $d(t.remoteStore,!1)}}async function a_(n,e,t){const s=C(n),r=[],i=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await Si(s.localStore,kt(c[0]));for(const l of c){const u=s.ic.get(l),h=await UU(s,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await GT(s.localStore,o);a=await Si(s.localStore,l),await lp(s,cb(l),o,!1,a.resumeToken)}r.push(a)}return s.sc.Wo(i),r}function cb(n){return JE(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function qU(n){const e=C(n);return C(C(e.localStore).persistence).vi()}async function $U(n,e,t,s){const r=C(n);if(r.dc)return void w("SyncEngine","Ignoring unexpected query state notification.");const i=r.rc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await HT(r.localStore,ZE(i[0])),a=rc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Pe.EMPTY_BYTE_STRING);await ss(r,o,a);break}case"rejected":await Ci(r.localStore,e,!0),Ni(r,e,s);break;default:D()}}async function jU(n,e,t){const s=fp(n);if(s.dc){for(const r of e){if(s.rc.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await GT(s.localStore,r),o=await Si(s.localStore,i);await lp(s,cb(i),o.targetId,!1,o.resumeToken),Gu(s.remoteStore,o)}for(const r of t)s.rc.has(r)&&await Ci(s.localStore,r,!1).then(()=>{Ia(s.remoteStore,r),Ni(s,r)}).catch(Bs)}}function fp(n){const e=C(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RU.bind(null,e),e.sc.Wo=IU.bind(null,e.eventManager),e.sc.wc=EU.bind(null,e.eventManager),e}function mp(n){const e=C(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OU.bind(null,e),e}function GU(n,e,t){const s=C(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=C(h),m=$e(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.Ns.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(m)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(nb(a));const c=new bU(a,r.localStore,i.It);let l=await i.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await i.mc()}const u=await c.complete();return await ss(r,u.Lu,void 0),await function(h,d){const f=C(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.Ns.saveBundleMetadata(m,d))}(r.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return wi("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class lb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=oc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return WT(this.persistence,new BT,e.initialUser,this.It)}yc(e){return new VT(ju.Bs,this.It)}gc(e){return new zT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ub extends lb{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await mp(this.Ac.syncEngine),await Zi(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return WT(this.persistence,new BT,e.initialUser,this.It)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new MF(s,e.asyncQueue,t)}Ec(e,t){const s=new _L(t,this.persistence);return new yL(e.asyncQueue,s)}yc(e){const t=Jm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Qm(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,KT(),Jc(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new zT}}class HU extends ub{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof zh&&(this.sharedClientState.syncEngine={Fr:BU.bind(null,t),$r:$U.bind(null,t),Br:jU.bind(null,t),vi:qU.bind(null,t),Mr:VU.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await WU(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=KT();if(!zh.C(t))throw new v(y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Jm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zh(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class pp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>o_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LU.bind(null,this.syncEngine),await $d(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wU}createDatastore(e){const t=oc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new rU(r));var r;return function(i,o,a,c){return new aU(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>o_(this.syncEngine,a,0),o=n_.C()?new n_:new tU,new lU(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,l){const u=new kU(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=C(e);w("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Xi(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function gp(n,e,t){if(!t)throw new v(y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hb(n,e,t,s){if(e===!0&&s===!0)throw new v(y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function c_(n){if(!S.isDocumentKey(n))throw new v(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function l_(n){if(S.isDocumentKey(n))throw new v(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":D()}function Z(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new v(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hu(n);throw new v(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function db(n,e){if(e<=0)throw new v(y.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const u_=new Map;class h_{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new v(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class cc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h_(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new iL;switch(t.type){case"gapi":const s=t.client;return new lL(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new v(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=u_.get(e);t&&(w("ComponentProvider","Removing Datastore"),u_.delete(e),t.terminate())}(this),Promise.resolve()}}function YU(n,e,t,s={}){var r;const i=(n=Z(n,cc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&wi("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ve.MOCK_USER;else{o=Iw(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(c)}n._authCredentials=new oL(new FE(o,a))}}/**
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
 */class he{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class ut{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class vn extends ut{constructor(e,t,s){super(e,t,Ki(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new S(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}function fb(n,e,...t){if(n=N(n),gp("collection","path",e),n instanceof cc){const s=Q.fromString(e,...t);return l_(s),new vn(n,null,s)}{if(!(n instanceof he||n instanceof vn))throw new v(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Q.fromString(e,...t));return l_(s),new vn(n.firestore,null,s)}}function zU(n,e){if(n=Z(n,cc),gp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new v(y.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ut(n,null,function(t){return new ts(Q.emptyPath(),t)}(e))}function xl(n,e,...t){if(n=N(n),arguments.length===1&&(e=UE.R()),gp("doc","path",e),n instanceof cc){const s=Q.fromString(e,...t);return c_(s),new he(n,null,new S(s))}{if(!(n instanceof he||n instanceof vn))throw new v(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Q.fromString(e,...t));return c_(s),new he(n.firestore,n instanceof vn?n.converter:null,new S(s))}}function mb(n,e){return n=N(n),e=N(e),(n instanceof he||n instanceof vn)&&(e instanceof he||e instanceof vn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function pb(n,e){return n=N(n),e=N(e),n instanceof ut&&e instanceof ut&&n.firestore===e.firestore&&nc(n._query,e._query)&&n.converter===e.converter}/**
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
 */function d_(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Yu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class KU{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new qe,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(s);return new TU(JSON.parse(r),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class QU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new v(y.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=C(s),o=va(i.It)+"/documents",a={documents:r.map(h=>_a(i.It,h))},c=await i._o("BatchGetDocuments",o,a,r.length),l=new Map;c.forEach(h=>{const d=JL(i.It,h);l.set(d.key.toString(),d)});const u=[];return r.forEach(h=>{const d=l.get(h.toString());F(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ji(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=S.fromPath(s);this.mutations.push(new qm(r,this.precondition(r)))}),await async function(t,s){const r=C(t),i=va(r.It)+"/documents",o={writes:s.map(a=>wa(r.It,a))};await r.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw D();t=M.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new v(y.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(M.min())?ge.exists(!1):ge.updateTime(t):ge.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(M.min()))throw new v(y.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ge.updateTime(t)}return ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class JU{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.kc=s.maxAttempts,this.xo=new ep(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new QU(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Fc(r)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!ec(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!uT(t)}return!1}}/**
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
 */class XU{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ve.UNAUTHENTICATED,this.clientId=UE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=to(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gb(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function yb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yp(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>s_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>s_(e.remoteStore,i)),n.onlineComponents=e}async function yp(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await gb(n,new lb)),n.offlineComponents}async function zu(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await yb(n,new pp)),n.onlineComponents}function _b(n){return yp(n).then(e=>e.persistence)}function _p(n){return yp(n).then(e=>e.localStore)}function vb(n){return zu(n).then(e=>e.remoteStore)}function vp(n){return zu(n).then(e=>e.syncEngine)}function ZU(n){return zu(n).then(e=>e.datastore)}async function Ai(n){const e=await zu(n),t=e.eventManager;return t.onListen=NU.bind(null,e.syncEngine),t.onUnlisten=AU.bind(null,e.syncEngine),t}function eV(n){return n.asyncQueue.enqueue(async()=>{const e=await _b(n),t=await vb(n);return e.setNetworkEnabled(!0),function(s){const r=C(s);return r._u.delete(0),ac(r)}(t)})}function tV(n){return n.asyncQueue.enqueue(async()=>{const e=await _b(n),t=await vb(n);return e.setNetworkEnabled(!1),async function(s){const r=C(s);r._u.add(0),await Xi(r),r.gu.set("Offline")}(t)})}function nV(n,e){const t=new qe;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const l=C(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new v(y.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=to(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await _p(n),e,t)),t.promise}function wb(n,e,t={}){const s=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Yu({next:h=>{i.enqueueAndForget(()=>op(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new v(y.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new v(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cp(Ki(o.path),l,{includeMetadataChanges:!0,Nu:!0});return ip(r,u)}(await Ai(n),n.asyncQueue,e,t,s)),s.promise}function sV(n,e){const t=new qe;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Nl(s,r,!0),a=new ib(r,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=to(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await _p(n),e,t)),t.promise}function Ib(n,e,t={}){const s=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Yu({next:h=>{i.enqueueAndForget(()=>op(r,u)),h.fromCache&&a.source==="server"?c.reject(new v(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cp(o,l,{includeMetadataChanges:!0,Nu:!0});return ip(r,u)}(await Ai(n),n.asyncQueue,e,t,s)),s.promise}function rV(n,e){const t=new Yu(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){C(s).Ru.add(r),r.next()}(await Ai(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){C(s).Ru.delete(r)}(await Ai(n),t))}}function iV(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,l){return new KU(c,l)}(function(c,l){if(c instanceof Uint8Array)return d_(c,l);if(c instanceof ArrayBuffer)return d_(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,oc(e));n.asyncQueue.enqueueAndForget(async()=>{GU(await vp(n),r,s)})}function oV(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=C(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ns.getNamedQuery(i,s))}(await _p(n),e))}class aV{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ep(this,"async_queue_retry"),this.Wc=()=>{const t=Jc();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=Jc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new qe;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ws(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ne("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=rp.createAndSchedule(this,e,t,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&D()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function Gd(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class cV{constructor(){this._progressObserver={},this._taskCompletionResolver=new qe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lV=-1;class Ce extends cc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new aV,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eb(this),this._firestoreClient.terminate()}}function Ke(n){return n._firestoreClient||Eb(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Eb(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new IL(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new XU(n._authCredentials,n._appCheckCredentials,n._queue,s)}function uV(n,e){bb(n=Z(n,Ce));const t=Ke(n),s=n._freezeSettings(),r=new pp;return Tb(t,r,new ub(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function hV(n){bb(n=Z(n,Ce));const e=Ke(n),t=n._freezeSettings(),s=new pp;return Tb(e,s,new HU(s,t.cacheSizeBytes))}function Tb(n,e,t){const s=new qe;return n.asyncQueue.enqueue(async()=>{try{await gb(n,t),await yb(n,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===y.FAILED_PRECONDITION||o.code===y.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;wi("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function dV(n){if(n._initialized&&!n._terminated)throw new v(y.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new qe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Zt.C())return Promise.resolve();const s=t+"main";await Zt.delete(s)}(Jm(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function fV(n){return function(e){const t=new qe;return e.asyncQueue.enqueueAndForget(async()=>PU(await vp(e),t)),t.promise}(Ke(n=Z(n,Ce)))}function mV(n){return eV(Ke(n=Z(n,Ce)))}function pV(n){return tV(Ke(n=Z(n,Ce)))}function gV(n,e){const t=Ke(n=Z(n,Ce)),s=new cV;return iV(t,n._databaseId,e,s),s}function yV(n,e){return oV(Ke(n=Z(n,Ce)),e).then(t=>t?new ut(n,null,t.query):null)}function bb(n){if(n._initialized||n._terminated)throw new v(y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Pe.fromBase64String(e))}catch(t){throw new v(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ds{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new v(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wr{constructor(e){this._methodName=e}}/**
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
 */class Ku{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new v(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new v(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */const _V=/^__.*__$/;class vV{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qi(e,this.data,t,this.fieldTransforms)}}class Sb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ns(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class Qu{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ol(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Cb(this.sa)&&_V.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class wV{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=s||oc(e)}da(e,t,s,r=!1){return new Qu({sa:e,methodName:t,fa:s,path:Ae.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function qr(n){const e=n._freezeSettings(),t=oc(n._databaseId);return new wV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ju(n,e,t,s,r,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,r);Tp("Data must be an object, but it was:",o,s);const a=Ab(s,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Hd(e,h,t);if(!o.contains(d))throw new v(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rb(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new vV(new Ze(a),c,l)}class lc extends Wr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function kb(n,e,t){return new Qu({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class wp extends Wr{_toFieldTransform(e){return new sc(e.path,new Ti)}isEqual(e){return e instanceof wp}}class IV extends Wr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=kb(this,e,!0),s=this._a.map(i=>$r(i,t)),r=new Sr(s);return new sc(e.path,r)}isEqual(e){return this===e}}class EV extends Wr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=kb(this,e,!0),s=this._a.map(i=>$r(i,t)),r=new Cr(s);return new sc(e.path,r)}isEqual(e){return this===e}}class TV extends Wr{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new bi(e.It,sT(e.It,this.wa));return new sc(e.path,t)}isEqual(e){return this===e}}function Ip(n,e,t,s){const r=n.da(1,e,t);Tp("Data must be an object, but it was:",r,s);const i=[],o=Ze.empty();Br(s,(c,l)=>{const u=bp(e,c,t);l=N(l);const h=r.ca(u);if(l instanceof lc)i.push(u);else{const d=$r(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new Sb(o,a,r.fieldTransforms)}function Ep(n,e,t,s,r,i){const o=n.da(1,e,t),a=[Hd(e,s,t)],c=[r];if(i.length%2!=0)throw new v(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Hd(e,i[d])),c.push(i[d+1]);const l=[],u=Ze.empty();for(let d=a.length-1;d>=0;--d)if(!Rb(l,a[d])){const f=a[d];let m=c[d];m=N(m);const g=o.ca(f);if(m instanceof lc)l.push(f);else{const b=$r(m,g);b!=null&&(l.push(f),u.set(f,b))}}const h=new Ot(l);return new Sb(u,h,o.fieldTransforms)}function Nb(n,e,t,s=!1){return $r(t,n.da(s?4:3,e))}function $r(n,e){if(Db(n=N(n)))return Tp("Unsupported field value:",e,n),Ab(n,e);if(n instanceof Wr)return function(t,s){if(!Cb(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=$r(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=N(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return sT(s.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=_e.fromDate(t);return{timestampValue:ya(s.It,r)}}if(t instanceof _e){const r=new _e(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ya(s.It,r)}}if(t instanceof Ku)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bn)return{bytesValue:yT(s.It,t._byteString)};if(t instanceof he){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$m(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Hu(t)}`)}(n,e)}function Ab(n,e){const t={};return GE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(n,(s,r)=>{const i=$r(r,e.ra(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Db(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Ku||n instanceof bn||n instanceof he||n instanceof Wr)}function Tp(n,e,t){if(!Db(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Hu(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function Hd(n,e,t){if((e=N(e))instanceof Ds)return e._internalPath;if(typeof e=="string")return bp(n,e);throw Ol("Field path arguments must be of type string or ",n,!1,void 0,t)}const bV=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(bV)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ds(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ol(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new v(y.INVALID_ARGUMENT,a+n+c)}function Rb(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ea{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SV extends Ea{data(){return super.data()}}function Xu(n,e){return typeof e=="string"?bp(n,e):e instanceof Ds?e._internalPath:e._delegate._internalPath}/**
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
 */function xb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new v(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uc{}function as(n,...e){for(const t of e)n=t._apply(n);return n}class CV extends uc{constructor(e,t,s){super(),this.ma=e,this.ga=t,this.ya=s,this.type="where"}_apply(e){const t=qr(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new v(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){m_(u,l);const f=[];for(const m of u)f.push(f_(a,r,m));h={arrayValue:{values:f}}}else h=f_(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||m_(u,l),h=Nb(o,i,u,l==="in"||l==="not-in");const d=et.create(c,l,h);return function(f,m){if(m.dt()){const b=Vm(f);if(b!==null&&!b.isEqual(m.field))throw new v(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${m.field.toString()}'`);const O=Um(f);O!==null&&Fb(f,m.field,O)}const g=function(b,O){for(const q of b.filters)if(O.indexOf(q.op)>=0)return q.op;return null}(f,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(g!==null)throw g===m.op?new v(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new v(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${g.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new ut(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new ts(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function kV(n,e,t){const s=e,r=Xu("where",n);return new CV(r,s,t)}class NV extends uc{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new v(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new v(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new fi(r,i);return function(a,c){if(Um(a)===null){const l=Vm(a);l!==null&&Fb(a,l,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new ut(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ts(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function AV(n,e="asc"){const t=e,s=Xu("orderBy",n);return new NV(s,t)}class Ob extends uc{constructor(e,t,s){super(),this.type=e,this.Ia=t,this.Ta=s}_apply(e){return new ut(e.firestore,e.converter,Sl(e._query,this.Ia,this.Ta))}}function DV(n){return db("limit",n),new Ob("limit",n,"F")}function RV(n){return db("limitToLast",n),new Ob("limitToLast",n,"L")}class Pb extends uc{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Lb(e,this.type,this.Ea,this.Aa);return new ut(e.firestore,e.converter,function(s,r){return new ts(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function xV(...n){return new Pb("startAt",n,!0)}function OV(...n){return new Pb("startAfter",n,!1)}class Mb extends uc{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Lb(e,this.type,this.Ea,this.Aa);return new ut(e.firestore,e.converter,function(s,r){return new ts(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function PV(...n){return new Mb("endBefore",n,!1)}function MV(...n){return new Mb("endAt",n,!0)}function Lb(n,e,t,s){if(t[0]=N(t[0]),t[0]instanceof Ea)return function(r,i,o,a,c){if(!a)throw new v(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Ei(r))if(u.field.isKeyField())l.push(Tr(i,a.key));else{const h=a.data.field(u.field);if(Fm(h))throw new v(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new v(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ns(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=qr(n.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new v(y.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new v(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Bm(i)&&m.indexOf("/")!==-1)throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const g=i.path.child(Q.fromString(m));if(!S.isDocumentKey(g))throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const b=new S(g);d.push(Tr(o,b))}else{const g=Nb(a,c,m);d.push(g)}}return new Ns(d,u)}(n._query,n.firestore._databaseId,r,e,t,s)}}function f_(n,e,t){if(typeof(t=N(t))=="string"){if(t==="")throw new v(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bm(e)&&t.indexOf("/")!==-1)throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Q.fromString(t));if(!S.isDocumentKey(s))throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Tr(n,new S(s))}if(t instanceof he)return Tr(n,t._key);throw new v(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(t)}.`)}function m_(n,e){if(!Array.isArray(n)||n.length===0)throw new v(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new v(y.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Fb(n,e,t){if(!t.isEqual(e))throw new v(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class Sp{convertValue(e,t="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw D()}}convertObject(e,t){const s={};return Br(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Ku(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=HE(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const t=Ss(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Q.fromString(e);F(CT(s));const r=new Cs(s.get(1),s.get(3)),i=new S(s.popFirst(5));return r.isEqual(t)||Ne(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Zu(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class LV extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}/**
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
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zn extends Ea{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Xu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Wo extends zn{data(e={}){return super.data(e)}}class Rs{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ar(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Wo(this._firestore,this._userDataWriter,s.key,s,new ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new v(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:FV(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}function Ub(n,e){return n instanceof zn&&e instanceof zn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Rs&&e instanceof Rs&&n._firestore===e._firestore&&pb(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function UV(n){n=Z(n,he);const e=Z(n.firestore,Ce);return wb(Ke(e),n._key).then(t=>Cp(e,n,t))}class jr extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}function VV(n){n=Z(n,he);const e=Z(n.firestore,Ce),t=Ke(e),s=new jr(e);return nV(t,n._key).then(r=>new zn(e,s,n._key,r,new ar(r!==null&&r.hasLocalMutations,!0),n.converter))}function BV(n){n=Z(n,he);const e=Z(n.firestore,Ce);return wb(Ke(e),n._key,{source:"server"}).then(t=>Cp(e,n,t))}function WV(n){n=Z(n,ut);const e=Z(n.firestore,Ce),t=Ke(e),s=new jr(e);return xb(n._query),Ib(t,n._query).then(r=>new Rs(e,s,n,r))}function qV(n){n=Z(n,ut);const e=Z(n.firestore,Ce),t=Ke(e),s=new jr(e);return sV(t,n._query).then(r=>new Rs(e,s,n,r))}function $V(n){n=Z(n,ut);const e=Z(n.firestore,Ce),t=Ke(e),s=new jr(e);return Ib(t,n._query,{source:"server"}).then(r=>new Rs(e,s,n,r))}function p_(n,e,t){n=Z(n,he);const s=Z(n.firestore,Ce),r=Zu(n.converter,e,t);return hc(s,[Ju(qr(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,ge.none())])}function g_(n,e,t,...s){n=Z(n,he);const r=Z(n.firestore,Ce),i=qr(r);let o;return o=typeof(e=N(e))=="string"||e instanceof Ds?Ep(i,"updateDoc",n._key,e,t,s):Ip(i,"updateDoc",n._key,e),hc(r,[o.toMutation(n._key,ge.exists(!0))])}function jV(n){return hc(Z(n.firestore,Ce),[new Ji(n._key,ge.none())])}function GV(n,e){const t=Z(n.firestore,Ce),s=xl(n),r=Zu(n.converter,e);return hc(t,[Ju(qr(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,ge.exists(!1))]).then(()=>s)}function Vb(n,...e){var t,s,r;n=N(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gd(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(n instanceof he)l=Z(n.firestore,Ce),u=Ki(n._key.path),c={next:h=>{e[o]&&e[o](Cp(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Z(n,ut);l=Z(h.firestore,Ce),u=h._query;const d=new jr(l);c={next:f=>{e[o]&&e[o](new Rs(l,d,h,f))},error:e[o+1],complete:e[o+2]},xb(n._query)}return function(h,d,f,m){const g=new Yu(m),b=new cp(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>ip(await Ai(h),b)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>op(await Ai(h),b))}}(Ke(l),u,a,c)}function HV(n,e){return rV(Ke(n=Z(n,Ce)),Gd(e)?e:{next:e})}function hc(n,e){return function(t,s){const r=new qe;return t.asyncQueue.enqueueAndForget(async()=>DU(await vp(t),s,r)),r.promise}(Ke(n),e)}function Cp(n,e,t){const s=t.docs.get(e._key),r=new jr(n);return new zn(n,r,e._key,s,new ar(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const YV={maxAttempts:5};/**
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
 */class zV{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qr(e)}set(e,t,s){this._verifyNotCommitted();const r=ls(e,this._firestore),i=Zu(r.converter,t,s),o=Ju(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,ge.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=ls(e,this._firestore);let o;return o=typeof(t=N(t))=="string"||t instanceof Ds?Ep(this._dataReader,"WriteBatch.update",i._key,t,s,r):Ip(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ls(e,this._firestore);return this._mutations=this._mutations.concat(new Ji(t._key,ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new v(y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ls(n,e){if((n=N(n)).firestore!==e)throw new v(y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class KV extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=qr(e)}get(e){const t=ls(e,this._firestore),s=new LV(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return D();const i=r[0];if(i.isFoundDocument())return new Ea(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new Ea(this._firestore,s,t._key,null,t.converter);throw D()})}set(e,t,s){const r=ls(e,this._firestore),i=Zu(r.converter,t,s),o=Ju(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=ls(e,this._firestore);let o;return o=typeof(t=N(t))=="string"||t instanceof Ds?Ep(this._dataReader,"Transaction.update",i._key,t,s,r):Ip(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=ls(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ls(e,this._firestore),s=new jr(this._firestore);return super.get(e).then(r=>new zn(this._firestore,s,t._key,r._document,new ar(!1,!1),t.converter))}}function QV(n,e,t){n=Z(n,Ce);const s=Object.assign(Object.assign({},YV),t);return function(r){if(r.maxAttempts<1)throw new v(y.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new qe;return r.asyncQueue.enqueueAndForget(async()=>{const c=await ZU(r);new JU(r.asyncQueue,c,o,i,a).run()}),a.promise}(Ke(n),r=>e(new KV(n,r)),s)}/**
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
 */function JV(){return new lc("deleteField")}function XV(){return new wp("serverTimestamp")}function ZV(...n){return new IV("arrayUnion",n)}function eB(...n){return new EV("arrayRemove",n)}function tB(n){return new TV("increment",n)}(function(n,e=!0){(function(t){zi=t})(Ls),Gn(new Mt("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new Ce(new aL(t.getProvider("auth-internal")),new hL(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ht(fy,"3.7.3",n),Ht(fy,"3.7.3","esm2017")})();const nB="@firebase/firestore-compat",sB="0.2.3";/**
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
 */function kp(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new v("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function y_(){if(typeof Uint8Array>"u")throw new v("unimplemented","Uint8Arrays are not available in this environment.")}function __(){if(!vL())throw new v("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ta{constructor(e){this._delegate=e}static fromBase64String(e){return __(),new Ta(bn.fromBase64String(e))}static fromUint8Array(e){return y_(),new Ta(bn.fromUint8Array(e))}toBase64(){return __(),this._delegate.toBase64()}toUint8Array(){return y_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Yd(n){return rB(n,["next","error","complete"])}function rB(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class iB{enableIndexedDbPersistence(e,t){return uV(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hV(e._delegate)}clearIndexedDbPersistence(e){return dV(e._delegate)}}class Bb{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Cs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&wi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){YU(this._delegate,e,t,s)}enableNetwork(){return mV(this._delegate)}disableNetwork(){return pV(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,hb("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fV(this._delegate)}onSnapshotsInSync(e){return HV(this._delegate,e)}get app(){if(!this._appCompat)throw new v("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Di(this,fb(this._delegate,e))}catch(t){throw mt(t,"collection()","Firestore.collection()")}}doc(e){try{return new $t(this,xl(this._delegate,e))}catch(t){throw mt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ft(this,zU(this._delegate,e))}catch(t){throw mt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return QV(this._delegate,t=>e(new Wb(this,t)))}batch(){return Ke(this._delegate),new qb(new zV(this._delegate,e=>hc(this._delegate,e)))}loadBundle(e){return gV(this._delegate,e)}namedQuery(e){return yV(this._delegate,e).then(t=>t?new ft(this,t):null)}}class eh extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ta(new bn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return $t.forKey(t,this.firestore,null)}}function oB(n){sL(n)}class Wb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new eh(e)}get(e){const t=cr(e);return this._delegate.get(t).then(s=>new ba(this._firestore,new zn(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const r=cr(e);return s?(kp("Transaction.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=cr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=cr(e);return this._delegate.delete(t),this}}class qb{constructor(e){this._delegate=e}set(e,t,s){const r=cr(e);return s?(kp("WriteBatch.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=cr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=cr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Dr{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new Wo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Sa(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=Dr.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(t);return i||(i=new Dr(e,new eh(e),t),r.set(t,i)),i}}Dr.INSTANCES=new WeakMap;class $t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eh(e)}static forPath(e,t,s){if(e.length%2!==0)throw new v("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $t(t,new he(t._delegate,s,new S(e)))}static forKey(e,t,s){return new $t(t,new he(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Di(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Di(this.firestore,fb(this._delegate,e))}catch(t){throw mt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=N(e),e instanceof he?mb(this._delegate,e):!1}set(e,t){t=kp("DocumentReference.set",t);try{return t?p_(this._delegate,e,t):p_(this._delegate,e)}catch(s){throw mt(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?g_(this._delegate,e):g_(this._delegate,e,t,...s)}catch(r){throw mt(r,"updateDoc()","DocumentReference.update()")}}delete(){return jV(this._delegate)}onSnapshot(...e){const t=$b(e),s=jb(e,r=>new ba(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Vb(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=VV(this._delegate):(e==null?void 0:e.source)==="server"?t=BV(this._delegate):t=UV(this._delegate),t.then(s=>new ba(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new $t(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mt(n,e,t){return n.message=n.message.replace(e,t),n}function $b(n){for(const e of n)if(typeof e=="object"&&!Yd(e))return e;return{}}function jb(n,e){var t,s;let r;return Yd(n[0])?r=n[0]:Yd(n[1])?r=n[1]:typeof n[0]=="function"?r={next:n[0],error:n[1],complete:n[2]}:r={next:n[1],error:n[2],complete:n[3]},{next:i=>{r.next&&r.next(e(i))},error:(t=r.error)===null||t===void 0?void 0:t.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class ba{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new $t(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Ub(this._delegate,e._delegate)}}class Sa extends ba{data(e){const t=this._delegate.data(e);return rL(t!==void 0),t}}class ft{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eh(e)}where(e,t,s){try{return new ft(this.firestore,as(this._delegate,kV(e,t,s)))}catch(r){throw mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ft(this.firestore,as(this._delegate,AV(e,t)))}catch(s){throw mt(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ft(this.firestore,as(this._delegate,DV(e)))}catch(t){throw mt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ft(this.firestore,as(this._delegate,RV(e)))}catch(t){throw mt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ft(this.firestore,as(this._delegate,xV(...e)))}catch(t){throw mt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ft(this.firestore,as(this._delegate,OV(...e)))}catch(t){throw mt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ft(this.firestore,as(this._delegate,PV(...e)))}catch(t){throw mt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ft(this.firestore,as(this._delegate,MV(...e)))}catch(t){throw mt(t,"endAt()","Query.endAt()")}}isEqual(e){return pb(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=qV(this._delegate):(e==null?void 0:e.source)==="server"?t=$V(this._delegate):t=WV(this._delegate),t.then(s=>new zd(this.firestore,new Rs(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=$b(e),s=jb(e,r=>new zd(this.firestore,new Rs(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Vb(this._delegate,t,s)}withConverter(e){return new ft(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class aB{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Sa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class zd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Sa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new aB(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new Sa(this._firestore,s))})}isEqual(e){return Ub(this._delegate,e._delegate)}}class Di extends ft{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $t(this.firestore,e):null}doc(e){try{return e===void 0?new $t(this.firestore,xl(this._delegate)):new $t(this.firestore,xl(this._delegate,e))}catch(t){throw mt(t,"doc()","CollectionReference.doc()")}}add(e){return GV(this._delegate,e).then(t=>new $t(this.firestore,t))}isEqual(e){return mb(this._delegate,e._delegate)}withConverter(e){return new Di(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function cr(n){return Z(n,he)}/**
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
 */class Np{constructor(...e){this._delegate=new Ds(...e)}static documentId(){return new Np(Ae.keyField().canonicalString())}isEqual(e){return e=N(e),e instanceof Ds?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class nr{constructor(e){this._delegate=e}static serverTimestamp(){const e=XV();return e._methodName="FieldValue.serverTimestamp",new nr(e)}static delete(){const e=JV();return e._methodName="FieldValue.delete",new nr(e)}static arrayUnion(...e){const t=ZV(...e);return t._methodName="FieldValue.arrayUnion",new nr(t)}static arrayRemove(...e){const t=eB(...e);return t._methodName="FieldValue.arrayRemove",new nr(t)}static increment(e){const t=tB(e);return t._methodName="FieldValue.increment",new nr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const cB={Firestore:Bb,GeoPoint:Ku,Timestamp:_e,Blob:Ta,Transaction:Wb,WriteBatch:qb,DocumentReference:$t,DocumentSnapshot:ba,Query:ft,QueryDocumentSnapshot:Sa,QuerySnapshot:zd,CollectionReference:Di,FieldPath:Np,FieldValue:nr,setLogLevel:oB,CACHE_SIZE_UNLIMITED:lV};function lB(n,e){n.INTERNAL.registerComponent(new Mt("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},cB)))}/**
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
 */function uB(n){lB(n,(e,t)=>new Bb(e,t,new iB)),n.registerVersion(nB,sB)}uB(Lt);const v_="@firebase/database",w_="0.13.10";/**
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
 */let Gb="";function Hb(n){Gb=n}/**
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
 */class hB{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Zo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yb=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hB(e)}}catch{}return new dB},lr=Yb("localStorage"),Kd=Yb("sessionStorage");/**
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
 */const pi=new Wi("@firebase/database"),zb=function(){let n=1;return function(){return n++}}(),Kb=function(n){const e=HD(n),t=new $D;t.update(e);const s=t.digest();return $f.encodeByteArray(s)},dc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=dc.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let pr=null,I_=!0;const Qb=function(n,e){T(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(pi.logLevel=K.VERBOSE,pr=pi.log.bind(pi),e&&Kd.set("logging_enabled",!0)):typeof n=="function"?pr=n:(pr=null,Kd.remove("logging_enabled"))},We=function(...n){if(I_===!0&&(I_=!1,pr===null&&Kd.get("logging_enabled")===!0&&Qb(!0)),pr){const e=dc.apply(null,n);pr(e)}},fc=function(n){return function(...e){We(n,...e)}},Qd=function(...n){const e="FIREBASE INTERNAL ERROR: "+dc(...n);pi.error(e)},Sn=function(...n){const e=`FIREBASE FATAL ERROR: ${dc(...n)}`;throw pi.error(e),new Error(e)},lt=function(...n){const e="FIREBASE WARNING: "+dc(...n);pi.warn(e)},fB=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},th=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},mB=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Kn="[MIN_NAME]",Cn="[MAX_NAME]",Gr=function(n,e){if(n===e)return 0;if(n===Kn||e===Cn)return-1;if(e===Kn||n===Cn)return 1;{const t=Pl(n),s=Pl(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},pB=function(n,e){return n===e?0:n<e?-1:1},wo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+xe(e))},Ap=function(n){if(typeof n!="object"||n===null)return xe(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=xe(e[s]),t+=":",t+=Ap(n[e[s]]);return t+="}",t},Jb=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function He(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Xb=function(n){T(!th(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gB=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yB=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _B(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const vB=new RegExp("^-?(0*)\\d{1,10}$"),Zb=-2147483648,Dp=2147483647,Pl=function(n){if(vB.test(n)){const e=Number(n);if(e>=Zb&&e<=Dp)return e}return null},no=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw lt("Exception was thrown by user callback.",t),e},Math.floor(0))}},wB=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class IB{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class EB{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class gi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gi.OWNER="owner";/**
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
 */const Rp="5",eS="v",tS="s",nS="r",sS="f",rS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iS="ls",oS="p",Jd="ac",aS="websocket",cS="long_polling";/**
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
 */class lS{constructor(e,t,s,r,i=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function TB(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function uS(n,e,t){T(typeof e=="string","typeof type must == string"),T(typeof t=="object","typeof params must == object");let s;if(e===aS)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cS)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TB(n)&&(t.ns=n.namespace);const r=[];return He(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class bB{constructor(){this.counters_={}}incrementCounter(e,t=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kD(this.counters_)}}/**
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
 */const Kh={},Qh={};function xp(n){const e=n.toString();return Kh[e]||(Kh[e]=new bB),Kh[e]}function SB(n,e){const t=n.toString();return Qh[t]||(Qh[t]=e()),Qh[t]}/**
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
 */class CB{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&no(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const E_="start",kB="close",NB="pLPCommand",AB="pRTLPCB",hS="id",dS="pw",fS="ser",DB="cb",RB="seg",xB="ts",OB="d",PB="dframe",mS=1870,pS=30,MB=mS-pS,LB=25e3,FB=3e4;class ms{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=xp(t),this.urlFn=c=>(this.appCheckToken&&(c[Jd]=this.appCheckToken),uS(t,cS,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new CB(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FB)),mB(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Op((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===E_)this.id=a,this.password=c;else if(o===kB)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[E_]="t",s[fS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[DB]=this.scriptTagHolder.uniqueCallbackIdentifier),s[eS]=Rp,this.transportSessionId&&(s[tS]=this.transportSessionId),this.lastSessionId&&(s[iS]=this.lastSessionId),this.applicationId&&(s[oS]=this.applicationId),this.appCheckToken&&(s[Jd]=this.appCheckToken),typeof location<"u"&&location.hostname&&rS.test(location.hostname)&&(s[nS]=sS);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ms.forceAllow_=!0}static forceDisallow(){ms.forceDisallow_=!0}static isAvailable(){return ms.forceAllow_?!0:!ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gB()&&!yB()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=xe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=gw(t),r=Jb(s,MB);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[PB]="t",s[hS]=e,s[dS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=xe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Op{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zb(),window[NB+this.uniqueCallbackIdentifier]=e,window[AB+this.uniqueCallbackIdentifier]=t,this.myIFrame=Op.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hS]=this.myID,e[dS]=this.myPW,e[fS]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pS+s.length<=mS;){const o=this.pendingSegs.shift();s=s+"&"+RB+r+"="+o.seg+"&"+xB+r+"="+o.ts+"&"+OB+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(LB)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const UB=16384,VB=45e3;let Ml=null;typeof MozWebSocket<"u"?Ml=MozWebSocket:typeof WebSocket<"u"&&(Ml=WebSocket);class qt{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=xp(t),this.connURL=qt.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[eS]=Rp,typeof location<"u"&&location.hostname&&rS.test(location.hostname)&&(o[nS]=sS),t&&(o[tS]=t),s&&(o[iS]=s),r&&(o[Jd]=r),i&&(o[oS]=i),uS(e,aS,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lr.set("previous_websocket_failure",!0);try{let s;vw(),this.mySock=new Ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ml!==null&&!qt.forceDisallow_}static previouslyFailed(){return lr.isInMemoryStorage||lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Zo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=xe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Jb(t,UB);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VB))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
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
 */class Ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ms,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qt&&qt.isAvailable();let s=t&&!qt.previouslyFailed();if(e.webSocketOnly&&(t||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qt];else{const r=this.transports_=[];for(const i of Ri.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ri.globalTransportInitialized_=!1;/**
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
 */const BB=6e4,WB=5e3,qB=10*1024,$B=100*1024,Jh="t",T_="d",jB="s",b_="r",GB="e",S_="o",C_="a",k_="n",N_="p",HB="h";class YB{constructor(e,t,s,r,i,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new Ri(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=qo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$B?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qB?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jh in e){const t=e[Jh];t===C_?this.upgradeIfSecondaryHealthy_():t===b_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===S_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wo("t",e),s=wo("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:N_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:C_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:k_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wo("t",e),s=wo("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wo(Jh,e);if(T_ in e){const s=e[T_];if(t===HB)this.onHandshake_(s);else if(t===k_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jB?this.onConnectionShutdown_(s):t===b_?this.onReset_(s):t===GB?Qd("Server Error: "+s):t===S_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Rp!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),qo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:N_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class gS{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class yS{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ll extends yS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ll}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const A_=32,D_=768;class se{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new se("")}function $(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xs(n){return n.pieces_.length-n.pieceNum_}function oe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new se(n.pieces_,e)}function Pp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zB(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ca(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _S(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new se(e,0)}function ye(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new se(t,0)}function j(n){return n.pieceNum_>=n.pieces_.length}function gt(n,e){const t=$(n),s=$(e);if(t===null)return e;if(t===s)return gt(oe(n),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function KB(n,e){const t=Ca(n,0),s=Ca(e,0);for(let r=0;r<t.length&&r<s.length;r++){const i=Gr(t[r],s[r]);if(i!==0)return i}return t.length===s.length?0:t.length<s.length?-1:1}function Mp(n,e){if(xs(n)!==xs(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function jt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xs(n)>xs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class QB{constructor(e,t){this.errorPrefix_=t,this.parts_=Ca(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hu(this.parts_[s]);vS(this)}}function JB(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hu(e),vS(n)}function XB(n){const e=n.parts_.pop();n.byteLength_-=hu(e),n.parts_.length>0&&(n.byteLength_-=1)}function vS(n){if(n.byteLength_>D_)throw new Error(n.errorPrefix_+"has a key path longer than "+D_+" bytes ("+n.byteLength_+").");if(n.parts_.length>A_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+A_+") or object contains a cycle "+Js(n))}function Js(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Lp extends yS{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Lp}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Io=1e3,ZB=60*5*1e3,R_=30*1e3,eW=1.3,tW=3e4,nW="server_kill",x_=3;class $n extends gS{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=$n.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Io,this.maxReconnectDelay_=ZB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!vw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(xe(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new Et,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;$n.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pt(e,"w")){const s=yr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=R_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=WD(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qd("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tW&&(this.reconnectDelay_=Io),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eW)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$n.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new YB(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{lt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(nW)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&lt(h),c())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],al(this.interruptReasons_)&&(this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>Ap(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new se(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){We("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=x_&&(this.reconnectDelay_=R_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){We("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=x_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Gb.replace(/\./g,"-")]=1,jf()?e["framework.cordova"]=1:uu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ll.getInstance().currentlyOnline();return al(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class G{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new G(e,t)}}/**
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
 */class nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new G(Kn,e),r=new G(Kn,t);return this.compare(s,r)!==0}minPost(){return G.MIN}}/**
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
 */let Pc;class wS extends nh{static get __EMPTY_NODE(){return Pc}static set __EMPTY_NODE(e){Pc=e}compare(e,t){return Gr(e.name,t.name)}isDefinedOn(e){throw Bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return G.MIN}maxPost(){return new G(Cn,Pc)}makePost(e,t){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Pc)}toString(){return".key"}}const wn=new wS;/**
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
 */class Mc{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:Be.RED,this.left=r!=null?r:St.EMPTY_NODE,this.right=i!=null?i:St.EMPTY_NODE}copy(e,t,s,r,i){return new Be(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return St.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class sW{copy(e,t,s,r,i){return this}insert(e,t,s){return new Be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,t=St.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new St(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Mc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Mc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Mc(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new sW;/**
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
 */function rW(n,e){return Gr(n.name,e.name)}function Fp(n,e){return Gr(n,e)}/**
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
 */let Xd;function iW(n){Xd=n}const IS=function(n){return typeof n=="number"?"number:"+Xb(n):"string:"+n},ES=function(n){if(n.isLeafNode()){const e=n.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else T(n===Xd||n.isEmpty(),"priority of unexpected type.");T(n===Xd||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let O_;class Le{constructor(e,t=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ES(this.priorityNode_)}static set __childrenNodeConstructor(e){O_=e}static get __childrenNodeConstructor(){return O_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:$(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=$(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+IS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Xb(this.value_):e+=this.value_,this.lazyHash_=Kb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=Le.VALUE_TYPE_ORDER.indexOf(t),i=Le.VALUE_TYPE_ORDER.indexOf(s);return T(r>=0,"Unknown leaf type: "+t),T(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let TS,bS;function oW(n){TS=n}function aW(n){bS=n}class cW extends nh{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Gr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Cn,new Le("[PRIORITY-POST]",bS))}makePost(e,t){const s=TS(e);return new G(t,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new cW;/**
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
 */const lW=Math.log(2);class uW{constructor(e){const t=i=>parseInt(Math.log(i)/lW,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fl=function(n,e,t,s){n.sort(e);const r=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Be(d,h.node,Be.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=r(c,f),g=r(f+1,l);return h=n[f],d=t?t(h):h,new Be(d,h.node,Be.BLACK,m,g)}},i=function(c){let l=null,u=null,h=n.length;const d=function(m,g){const b=h-m,O=h;h-=m;const q=r(b+1,O),Y=n[b],ve=t?t(Y):Y;f(new Be(ve,Y.node,g,null,q))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const g=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));g?d(b,Be.BLACK):(d(b,Be.BLACK),d(b,Be.RED))}return u},o=new uW(n.length),a=i(o);return new St(s||e,a)};/**
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
 */let Xh;const Zr={};class Fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return T(Zr&&le,"ChildrenNode.ts has not been loaded"),Xh=Xh||new Fn({".priority":Zr},{".priority":le}),Xh}get(e){const t=yr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof St?t:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,t){T(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(G.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Fl(s,e.getCompare()):a=Zr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fn(u,l)}addToIndexes(e,t){const s=cl(this.indexes_,(r,i)=>{const o=yr(this.indexSet_,i);if(T(o,"Missing index implementation for "+i),r===Zr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(G.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Fl(a,o.getCompare())}else return Zr;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new G(e.name,a))),c.insert(e,e.node)}});return new Fn(s,this.indexSet_)}removeFromIndexes(e,t){const s=cl(this.indexes_,r=>{if(r===Zr)return r;{const i=t.get(e.name);return i?r.remove(new G(e.name,i)):r}});return new Fn(s,this.indexSet_)}}/**
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
 */let Eo;class P{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ES(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Eo||(Eo=new P(new St(Fp),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eo}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Eo:t}}getChild(e){const t=$(e);return t===null?this:this.getImmediateChild(t).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(T(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new G(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Eo:this.priorityNode_;return new P(r,o,i)}}updateChild(e,t){const s=$(e);if(s===null)return t;{T($(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(oe(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(le,(o,a)=>{t[o]=a.val(e),s++,i&&P.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+IS(this.getPriority().val())+":"),this.forEachChild(le,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Kb(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new G(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new G(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new G(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,G.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mc?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(le),r=t.getIterator(le);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hW extends P{constructor(){super(new St(Fp),P.EMPTY_NODE,Fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const mc=new hW;Object.defineProperties(G,{MIN:{value:new G(Kn,P.EMPTY_NODE)},MAX:{value:new G(Cn,mc)}});wS.__EMPTY_NODE=P.EMPTY_NODE;Le.__childrenNodeConstructor=P;iW(mc);aW(mc);/**
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
 */const dW=!0;function we(n,e=null){if(n===null)return P.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Le(t,we(e))}if(!(n instanceof Array)&&dW){const t=[];let s=!1;if(He(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=we(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new G(o,c)))}}),t.length===0)return P.EMPTY_NODE;const i=Fl(t,rW,o=>o.name,Fp);if(s){const o=Fl(t,le.getCompare());return new P(i,we(e),new Fn({".priority":o},{".priority":le}))}else return new P(i,we(e),Fn.Default)}else{let t=P.EMPTY_NODE;return He(n,(s,r)=>{if(Pt(n,s)&&s.substring(0,1)!=="."){const i=we(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(we(e))}}oW(we);/**
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
 */class Up extends nh{constructor(e){super(),this.indexPath_=e,T(!j(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Gr(e.name,t.name):i}makePost(e,t){const s=we(e),r=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(t,r)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,mc);return new G(Cn,e)}toString(){return Ca(this.indexPath_,0).join("/")}}/**
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
 */class fW extends nh{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Gr(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,t){const s=we(e);return new G(t,s)}toString(){return".value"}}const Vp=new fW;/**
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
 */const xi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Zd="-",SS="z",CS=786,mW=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=xi.charAt(t%64),t=Math.floor(t/64);T(t===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=xi.charAt(e[r]);return T(o.length===20,"nextPushId: Length should be 20."),o}}(),P_=function(n){if(n===""+Dp)return Zd;const e=Pl(n);if(e!=null)return""+(e+1);const t=new Array(n.length);for(let o=0;o<t.length;o++)t[o]=n.charAt(o);if(t.length<CS)return t.push(Zd),t.join("");let s=t.length-1;for(;s>=0&&t[s]===SS;)s--;if(s===-1)return Cn;const r=t[s],i=xi.charAt(xi.indexOf(r)+1);return t[s]=i,t.slice(0,s+1).join("")},M_=function(n){if(n===""+Zb)return Kn;const e=Pl(n);if(e!=null)return""+(e-1);const t=new Array(n.length);for(let s=0;s<t.length;s++)t[s]=n.charAt(s);return t[t.length-1]===Zd?t.length===1?""+Dp:(delete t[t.length-1],t.join("")):(t[t.length-1]=xi.charAt(xi.indexOf(t[t.length-1])-1),t.join("")+SS.repeat(CS-t.length))};/**
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
 */function kS(n){return{type:"value",snapshotNode:n}}function Oi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ka(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Na(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function pW(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Bp{constructor(e){this.index_=e}updateChild(e,t,s,r,i,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ka(t,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Oi(t,s)):o.trackChildChange(Na(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(r,i)=>{t.hasChild(r)||s.trackChildChange(ka(r,i))}),t.isLeafNode()||t.forEachChild(le,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Na(r,i,o))}else s.trackChildChange(Oi(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Aa{constructor(e){this.indexedFilter_=new Bp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Aa.getStartPost_(e),this.endPost_=Aa.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,s,r,i,o){return this.matches(new G(t,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,r,i,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=P.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(P.EMPTY_NODE);const i=this;return t.forEachChild(le,(o,a)=>{i.matches(new G(o,a))||(r=r.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gW{constructor(e){this.rangedFilter_=new Aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,s,r,i,o){return this.rangedFilter_.matches(new G(t,s))||(s=P.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,r,i,o):this.fullLimitUpdateChild_(e,t,s,i,o)}updateFullNode(e,t,s){let r;if(t.isLeafNode()||t.isEmpty())r=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=P.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(P.EMPTY_NODE);let i,o,a,c;if(this.reverse_){c=r.getReverseIterator(this.index_),i=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=r.getIterator(this.index_),i=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(i,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:r=r.updateImmediateChild(h.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const c=new G(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return i!=null&&i.trackChildChange(Na(t,s,h)),a.updateImmediateChild(t,s);{i!=null&&i.trackChildChange(ka(t,h));const g=a.updateImmediateChild(t,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Oi(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(l,c)>=0?(i!=null&&(i.trackChildChange(ka(l.name,l.node)),i.trackChildChange(Oi(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,P.EMPTY_NODE)):e}}/**
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
 */class sh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new sh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yW(n){return n.loadsAllData()?new Bp(n.getIndex()):n.hasLimit()?new gW(n):new Aa(n)}function _W(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function vW(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function ef(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function wW(n,e,t){let s;if(n.index_===wn)typeof e=="string"&&(e=P_(e)),s=ef(n,e,t);else{let r;t==null?r=Cn:r=P_(t),s=ef(n,e,r)}return s.startAfterSet_=!0,s}function tf(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function IW(n,e,t){let s,r;return n.index_===wn?(typeof e=="string"&&(e=M_(e)),r=tf(n,e,t)):(t==null?s=Kn:s=M_(t),r=tf(n,e,s)),r.endBeforeSet_=!0,r}function rh(n,e){const t=n.copy();return t.index_=e,t}function L_(n){const e={};if(n.isDefault())return e;let t;return n.index_===le?t="$priority":n.index_===Vp?t="$value":n.index_===wn?t="$key":(T(n.index_ instanceof Up,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=xe(t),n.startSet_&&(e.startAt=xe(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+xe(n.indexStartName_))),n.endSet_&&(e.endAt=xe(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+xe(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function F_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==le&&(e.i=n.index_.toString()),e}/**
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
 */class Ul extends gS{constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=fc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ul.getListenId_(e,s),a={};this.listens_[o]=a;const c=L_(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(i,h,!1,s),yr(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",r(d,null)}})}unlisten(e,t){const s=Ul.getListenId_(e,t);delete this.listens_[s]}get(e){const t=L_(e._queryParams),s=e._path.toString(),r=new Et;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Zo(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class EW{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Vl(){return{value:null,children:new Map}}function so(n,e,t){if(j(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=$(e);n.children.has(s)||n.children.set(s,Vl());const r=n.children.get(s);e=oe(e),so(r,e,t)}}function nf(n,e){if(j(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(le,(s,r)=>{so(n,new se(s),r)}),nf(n,e)}}else if(n.children.size>0){const t=$(e);return e=oe(e),n.children.has(t)&&nf(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function sf(n,e,t){n.value!==null?t(e,n.value):TW(n,(s,r)=>{const i=new se(e.toString()+"/"+s);sf(r,i,t)})}function TW(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class bW{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&He(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
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
 */const U_=10*1e3,SW=30*1e3,CW=5*60*1e3;class kW{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new bW(e);const s=U_+(SW-U_)*Math.random();qo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;He(e,(r,i)=>{i>0&&Pt(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),qo(this.reportStats_.bind(this),Math.floor(Math.random()*2*CW))}}/**
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
 */var en;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function Wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $p(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Bl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=en.ACK_USER_WRITE,this.source=Wp()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new se(e));return new Bl(ee(),t,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new Bl(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Da{constructor(e,t){this.source=e,this.path=t,this.type=en.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Da(this.source,ee()):new Da(this.source,oe(this.path))}}/**
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
 */class Rr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=en.OVERWRITE}operationForChild(e){return j(this.path)?new Rr(this.source,ee(),this.snap.getImmediateChild(e)):new Rr(this.source,oe(this.path),this.snap)}}/**
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
 */class Pi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=en.MERGE}operationForChild(e){if(j(this.path)){const t=this.children.subtree(new se(e));return t.isEmpty()?null:t.value?new Rr(this.source,ee(),t.value):new Pi(this.source,ee(),t)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pi(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Os{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const t=$(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class NW{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AW(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(pW(o.childName,o.snapshotNode))}),To(n,r,"child_removed",e,s,t),To(n,r,"child_added",e,s,t),To(n,r,"child_moved",i,s,t),To(n,r,"child_changed",e,s,t),To(n,r,"value",e,s,t),r}function To(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>RW(n,a,c)),o.forEach(a=>{const c=DW(n,a,i);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function DW(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function RW(n,e,t){if(e.childName==null||t.childName==null)throw Bi("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),r=new G(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
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
 */function ih(n,e){return{eventCache:n,serverCache:e}}function $o(n,e,t,s){return ih(new Os(e,t,s),n.serverCache)}function NS(n,e,t,s){return ih(n.eventCache,new Os(e,t,s))}function Wl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Zh;const xW=()=>(Zh||(Zh=new St(pB)),Zh);class ae{constructor(e,t=xW()){this.value=e,this.children=t}static fromObject(e){let t=new ae(null);return He(e,(s,r)=>{t=t.set(new se(s),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(j(e))return null;{const s=$(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(oe(e),t);return i!=null?{path:ye(new se(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const t=$(e),s=this.children.get(t);return s!==null?s.subtree(oe(e)):new ae(null)}}set(e,t){if(j(e))return new ae(t,this.children);{const s=$(e),i=(this.children.get(s)||new ae(null)).set(oe(e),t),o=this.children.insert(s,i);return new ae(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const t=$(e),s=this.children.get(t);if(s){const r=s.remove(oe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new ae(null):new ae(this.value,i)}else return this}}get(e){if(j(e))return this.value;{const t=$(e),s=this.children.get(t);return s?s.get(oe(e)):null}}setTree(e,t){if(j(e))return t;{const s=$(e),i=(this.children.get(s)||new ae(null)).setTree(oe(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new ae(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ye(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(j(e))return null;{const i=$(e),o=this.children.get(i);return o?o.findOnPath_(oe(e),ye(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,s){if(j(e))return this;{this.value&&s(t,this.value);const r=$(e),i=this.children.get(r);return i?i.foreachOnPath_(oe(e),ye(t,r),s):new ae(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(ye(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new ae(null))}}function jo(n,e,t){if(j(e))return new nn(new ae(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=gt(r,e);return i=i.updateChild(o,t),new nn(n.writeTree_.set(r,i))}else{const r=new ae(t),i=n.writeTree_.setTree(e,r);return new nn(i)}}}function rf(n,e,t){let s=n;return He(t,(r,i)=>{s=jo(s,ye(e,r),i)}),s}function V_(n,e){if(j(e))return nn.empty();{const t=n.writeTree_.setTree(e,new ae(null));return new nn(t)}}function of(n,e){return Hr(n,e)!=null}function Hr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(gt(t.path,e)):null}function B_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(le,(s,r)=>{e.push(new G(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new G(s,r.value))}),e}function vs(n,e){if(j(e))return n;{const t=Hr(n,e);return t!=null?new nn(new ae(t)):new nn(n.writeTree_.subtree(e))}}function af(n){return n.writeTree_.isEmpty()}function Mi(n,e){return AS(ee(),n.writeTree_,e)}function AS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=AS(ye(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ye(n,".priority"),s)),t}}/**
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
 */function oh(n,e){return OS(e,n)}function OW(n,e,t,s,r){T(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=jo(n.visibleWrites,e,t)),n.lastWriteId=s}function PW(n,e,t,s){T(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=rf(n.visibleWrites,e,t),n.lastWriteId=s}function MW(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function LW(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);T(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&FW(a,s.path)?r=!1:jt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return UW(n),!0;if(s.snap)n.visibleWrites=V_(n.visibleWrites,s.path);else{const a=s.children;He(a,c=>{n.visibleWrites=V_(n.visibleWrites,ye(s.path,c))})}return!0}else return!1}function FW(n,e){if(n.snap)return jt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&jt(ye(n.path,t),e))return!0;return!1}function UW(n){n.visibleWrites=DS(n.allWrites,VW,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function VW(n){return n.visible}function DS(n,e,t){let s=nn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)jt(t,o)?(a=gt(t,o),s=jo(s,a,i.snap)):jt(o,t)&&(a=gt(o,t),s=jo(s,ee(),i.snap.getChild(a)));else if(i.children){if(jt(t,o))a=gt(t,o),s=rf(s,a,i.children);else if(jt(o,t))if(a=gt(o,t),j(a))s=rf(s,ee(),i.children);else{const c=yr(i.children,$(a));if(c){const l=c.getChild(oe(a));s=jo(s,ee(),l)}}}else throw Bi("WriteRecord should have .snap or .children")}}return s}function RS(n,e,t,s,r){if(!s&&!r){const i=Hr(n.visibleWrites,e);if(i!=null)return i;{const o=vs(n.visibleWrites,e);if(af(o))return t;if(t==null&&!of(o,ee()))return null;{const a=t||P.EMPTY_NODE;return Mi(o,a)}}}else{const i=vs(n.visibleWrites,e);if(!r&&af(i))return t;if(!r&&t==null&&!of(i,ee()))return null;{const o=function(l){return(l.visible||r)&&(!s||!~s.indexOf(l.writeId))&&(jt(l.path,e)||jt(e,l.path))},a=DS(n.allWrites,o,e),c=t||P.EMPTY_NODE;return Mi(a,c)}}}function BW(n,e,t){let s=P.EMPTY_NODE;const r=Hr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(le,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=vs(n.visibleWrites,e);return t.forEachChild(le,(o,a)=>{const c=Mi(vs(i,new se(o)),a);s=s.updateImmediateChild(o,c)}),B_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=vs(n.visibleWrites,e);return B_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function WW(n,e,t,s,r){T(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ye(e,t);if(of(n.visibleWrites,i))return null;{const o=vs(n.visibleWrites,i);return af(o)?r.getChild(t):Mi(o,r.getChild(t))}}function qW(n,e,t,s){const r=ye(e,t),i=Hr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=vs(n.visibleWrites,r);return Mi(o,s.getNode().getImmediateChild(t))}else return null}function $W(n,e){return Hr(n.visibleWrites,e)}function jW(n,e,t,s,r,i,o){let a;const c=vs(n.visibleWrites,e),l=Hr(c,ee());if(l!=null)a=l;else if(t!=null)a=Mi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<r;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function GW(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function ql(n,e,t,s){return RS(n.writeTree,n.treePath,e,t,s)}function jp(n,e){return BW(n.writeTree,n.treePath,e)}function W_(n,e,t,s){return WW(n.writeTree,n.treePath,e,t,s)}function $l(n,e){return $W(n.writeTree,ye(n.treePath,e))}function HW(n,e,t,s,r,i){return jW(n.writeTree,n.treePath,e,t,s,r,i)}function Gp(n,e,t){return qW(n.writeTree,n.treePath,e,t)}function xS(n,e){return OS(ye(n.treePath,e),n.writeTree)}function OS(n,e){return{treePath:n,writeTree:e}}/**
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
 */class YW{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;T(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Na(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,ka(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,Oi(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Na(s,e.snapshotNode,r.oldSnap));else throw Bi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zW{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const PS=new zW;class Hp{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Os(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gp(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=HW(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function KW(n){return{filter:n}}function QW(n,e){T(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function JW(n,e,t,s,r){const i=new YW;let o,a;if(t.type===en.OVERWRITE){const l=t;l.source.fromUser?o=cf(n,e,l.path,l.snap,s,r,i):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!j(l.path),o=jl(n,e,l.path,l.snap,s,r,a,i))}else if(t.type===en.MERGE){const l=t;l.source.fromUser?o=ZW(n,e,l.path,l.children,s,r,i):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=lf(n,e,l.path,l.children,s,r,a,i))}else if(t.type===en.ACK_USER_WRITE){const l=t;l.revert?o=nq(n,e,l.path,s,r,i):o=eq(n,e,l.path,l.affectedTree,s,r,i)}else if(t.type===en.LISTEN_COMPLETE)o=tq(n,e,t.path,s,i);else throw Bi("Unknown operation type: "+t.type);const c=i.getChanges();return XW(e,o,c),{viewCache:o,changes:c}}function XW(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Wl(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(kS(Wl(e)))}}function MS(n,e,t,s,r,i){const o=e.eventCache;if($l(s,t)!=null)return e;{let a,c;if(j(t))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=xr(e),u=l instanceof P?l:P.EMPTY_NODE,h=jp(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const l=ql(s,xr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=$(t);if(l===".priority"){T(xs(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=W_(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=oe(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=W_(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Gp(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,r,i):a=o.getNode()}}return $o(e,a,o.isFullyInitialized()||j(t),n.filter.filtersNodes())}}function jl(n,e,t,s,r,i,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(j(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=$(t);if(!c.isCompleteForPath(t)&&xs(t)>1)return e;const m=oe(t),b=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),f,b,m,PS,null)}const h=NS(e,l,c.isFullyInitialized()||j(t),u.filtersNodes()),d=new Hp(r,h,i);return MS(n,h,t,r,d,a)}function cf(n,e,t,s,r,i,o){const a=e.eventCache;let c,l;const u=new Hp(r,e,i);if(j(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=$o(e,l,!0,n.filter.filtersNodes());else{const h=$(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=$o(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=oe(t),f=a.getNode().getImmediateChild(h);let m;if(j(d))m=s;else{const g=u.getCompleteChild(h);g!=null?Pp(d)===".priority"&&g.getChild(_S(d)).isEmpty()?m=g:m=g.updateChild(d,s):m=P.EMPTY_NODE}if(f.equals(m))c=e;else{const g=n.filter.updateChild(a.getNode(),h,m,d,u,o);c=$o(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function q_(n,e){return n.eventCache.isCompleteForChild(e)}function ZW(n,e,t,s,r,i,o){let a=e;return s.foreach((c,l)=>{const u=ye(t,c);q_(e,$(u))&&(a=cf(n,a,u,l,r,i,o))}),s.foreach((c,l)=>{const u=ye(t,c);q_(e,$(u))||(a=cf(n,a,u,l,r,i,o))}),a}function $_(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function lf(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;j(t)?l=s:l=new ae(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=$_(n,f,d);c=jl(n,c,new se(h),m,r,i,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),g=$_(n,m,d);c=jl(n,c,new se(h),g,r,i,o,a)}}),c}function eq(n,e,t,s,r,i,o){if($l(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(j(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return jl(n,e,t,c.getNode().getChild(t),r,i,a,o);if(j(t)){let l=new ae(null);return c.getNode().forEachChild(wn,(u,h)=>{l=l.set(new se(u),h)}),lf(n,e,t,l,r,i,a,o)}else return e}else{let l=new ae(null);return s.foreach((u,h)=>{const d=ye(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),lf(n,e,t,l,r,i,a,o)}}function tq(n,e,t,s,r){const i=e.serverCache,o=NS(e,i.getNode(),i.isFullyInitialized()||j(t),i.isFiltered());return MS(n,o,t,s,PS,r)}function nq(n,e,t,s,r,i){let o;if($l(s,t)!=null)return e;{const a=new Hp(s,e,r),c=e.eventCache.getNode();let l;if(j(t)||$(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ql(s,xr(e));else{const h=e.serverCache.getNode();T(h instanceof P,"serverChildren would be complete if leaf node"),u=jp(s,h)}u=u,l=n.filter.updateFullNode(c,u,i)}else{const u=$(t);let h=Gp(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,oe(t),a,i):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,P.EMPTY_NODE,oe(t),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ql(s,xr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||$l(s,ee())!=null,$o(e,l,o,n.filter.filtersNodes())}}/**
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
 */class sq{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new Bp(s.getIndex()),i=yW(s);this.processor_=KW(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(P.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new Os(c,o.isFullyInitialized(),r.filtersNodes()),h=new Os(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ih(h,u),this.eventGenerator_=new NW(this.query_)}get query(){return this.query_}}function rq(n){return n.viewCache_.serverCache.getNode()}function iq(n){return Wl(n.viewCache_)}function oq(n,e){const t=xr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!j(e)&&!t.getImmediateChild($(e)).isEmpty())?t.getChild(e):null}function j_(n){return n.eventRegistrations_.length===0}function aq(n,e){n.eventRegistrations_.push(e)}function G_(n,e,t){const s=[];if(t){T(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return s}function H_(n,e,t,s){e.type===en.MERGE&&e.source.queryId!==null&&(T(xr(n.viewCache_),"We should always have a full cache before handling merges"),T(Wl(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=JW(n.processor_,r,e,t,s);return QW(n.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,LS(n,i.changes,i.viewCache.eventCache.getNode(),null)}function cq(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(le,(i,o)=>{s.push(Oi(i,o))}),t.isFullyInitialized()&&s.push(kS(t.getNode())),LS(n,s,t.getNode(),e)}function LS(n,e,t,s){const r=s?[s]:n.eventRegistrations_;return AW(n.eventGenerator_,e,t,r)}/**
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
 */let Gl;class FS{constructor(){this.views=new Map}}function lq(n){T(!Gl,"__referenceConstructor has already been defined"),Gl=n}function uq(){return T(Gl,"Reference.ts has not been loaded"),Gl}function hq(n){return n.views.size===0}function Yp(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return T(i!=null,"SyncTree gave us an op for an invalid query."),H_(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(H_(o,e,t,s));return i}}function US(n,e,t,s,r){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=ql(t,r?s:null),c=!1;a?c=!0:s instanceof P?(a=jp(t,s),c=!1):(a=P.EMPTY_NODE,c=!1);const l=ih(new Os(a,c,!1),new Os(s,r,!1));return new sq(e,l)}return o}function dq(n,e,t,s,r,i){const o=US(n,e,s,r,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),aq(o,t),cq(o,t)}function fq(n,e,t,s){const r=e._queryIdentifier,i=[];let o=[];const a=Ps(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(G_(l,t,s)),j_(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||i.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(G_(c,t,s)),j_(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!Ps(n)&&i.push(new(uq())(e._repo,e._path)),{removed:i,events:o}}function VS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ws(n,e){let t=null;for(const s of n.views.values())t=t||oq(s,e);return t}function BS(n,e){if(e._queryParams.loadsAllData())return ah(n);{const s=e._queryIdentifier;return n.views.get(s)}}function WS(n,e){return BS(n,e)!=null}function Ps(n){return ah(n)!=null}function ah(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hl;function mq(n){T(!Hl,"__referenceConstructor has already been defined"),Hl=n}function pq(){return T(Hl,"Reference.ts has not been loaded"),Hl}let gq=1;class Y_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=GW(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zp(n,e,t,s,r){return OW(n.pendingWriteTree_,e,t,s,r),r?ro(n,new Rr(Wp(),e,t)):[]}function yq(n,e,t,s){PW(n.pendingWriteTree_,e,t,s);const r=ae.fromObject(t);return ro(n,new Pi(Wp(),e,r))}function ps(n,e,t=!1){const s=MW(n.pendingWriteTree_,e);if(LW(n.pendingWriteTree_,e)){let i=new ae(null);return s.snap!=null?i=i.set(ee(),!0):He(s.children,o=>{i=i.set(new se(o),!0)}),ro(n,new Bl(s.path,i,t))}else return[]}function pc(n,e,t){return ro(n,new Rr(qp(),e,t))}function _q(n,e,t){const s=ae.fromObject(t);return ro(n,new Pi(qp(),e,s))}function vq(n,e){return ro(n,new Da(qp(),e))}function wq(n,e,t){const s=Kp(n,t);if(s){const r=Qp(s),i=r.path,o=r.queryId,a=gt(i,e),c=new Da($p(o),a);return Jp(n,i,c)}else return[]}function Yl(n,e,t,s,r=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||WS(o,e))){const c=fq(o,e,t,s);hq(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const l=c.removed;if(a=c.events,!r){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(i,(d,f)=>Ps(f));if(u&&!h){const d=n.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=Tq(d);for(let m=0;m<f.length;++m){const g=f[m],b=g.query,O=GS(n,g);n.listenProvider_.startListening(Go(b),Ra(n,b),O.hashFn,O.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(Go(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(lh(d));n.listenProvider_.stopListening(Go(d),f)}))}bq(n,l)}return a}function qS(n,e,t,s){const r=Kp(n,s);if(r!=null){const i=Qp(r),o=i.path,a=i.queryId,c=gt(o,e),l=new Rr($p(a),c,t);return Jp(n,o,l)}else return[]}function Iq(n,e,t,s){const r=Kp(n,s);if(r){const i=Qp(r),o=i.path,a=i.queryId,c=gt(o,e),l=ae.fromObject(t),u=new Pi($p(a),c,l);return Jp(n,o,u)}else return[]}function uf(n,e,t,s=!1){const r=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,f)=>{const m=gt(d,r);i=i||ws(f,m),o=o||Ps(f)});let a=n.syncPointTree_.get(r);a?(o=o||Ps(a),i=i||ws(a,ee())):(a=new FS,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=P.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,m)=>{const g=ws(m,ee());g&&(i=i.updateImmediateChild(f,g))}));const l=WS(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=lh(e);T(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Sq();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=oh(n.pendingWriteTree_,r);let h=dq(a,e,t,u,i,c);if(!l&&!o&&!s){const d=BS(a,e);h=h.concat(Cq(n,e,d))}return h}function ch(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=gt(o,e),l=ws(a,c);if(l)return l});return RS(r,e,i,t,!0)}function Eq(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=gt(l,t);s=s||ws(u,h)});let r=n.syncPointTree_.get(t);r?s=s||ws(r,ee()):(r=new FS,n.syncPointTree_=n.syncPointTree_.set(t,r));const i=s!=null,o=i?new Os(s,!0,!1):null,a=oh(n.pendingWriteTree_,e._path),c=US(r,e,a,i?o.getNode():P.EMPTY_NODE,i);return iq(c)}function ro(n,e){return $S(e,n.syncPointTree_,null,oh(n.pendingWriteTree_,ee()))}function $S(n,e,t,s){if(j(n.path))return jS(n,e,t,s);{const r=e.get(ee());t==null&&r!=null&&(t=ws(r,ee()));let i=[];const o=$(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=xS(s,o);i=i.concat($S(a,c,l,u))}return r&&(i=i.concat(Yp(r,n,s,t))),i}}function jS(n,e,t,s){const r=e.get(ee());t==null&&r!=null&&(t=ws(r,ee()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=xS(s,o),u=n.operationForChild(o);u&&(i=i.concat(jS(u,a,c,l)))}),r&&(i=i.concat(Yp(r,n,s,t))),i}function GS(n,e){const t=e.query,s=Ra(n,t);return{hashFn:()=>(rq(e)||P.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?wq(n,t._path,s):vq(n,t._path);{const i=_B(r,t);return Yl(n,t,null,i)}}}}function Ra(n,e){const t=lh(e);return n.queryToTagMap.get(t)}function lh(n){return n._path.toString()+"$"+n._queryIdentifier}function Kp(n,e){return n.tagToQueryMap.get(e)}function Qp(n){const e=n.indexOf("$");return T(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new se(n.substr(0,e))}}function Jp(n,e,t){const s=n.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const r=oh(n.pendingWriteTree_,e);return Yp(s,t,r,null)}function Tq(n){return n.fold((e,t,s)=>{if(t&&Ps(t))return[ah(t)];{let r=[];return t&&(r=VS(t)),He(s,(i,o)=>{r=r.concat(o)}),r}})}function Go(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pq())(n._repo,n._path):n}function bq(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const r=lh(s),i=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(i)}}}function Sq(){return gq++}function Cq(n,e,t){const s=e._path,r=Ra(n,e),i=GS(n,t),o=n.listenProvider_.startListening(Go(e),r,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(s);if(r)T(!Ps(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!j(l)&&u&&Ps(u))return[ah(u).query];{let d=[];return u&&(d=d.concat(VS(u).map(f=>f.query))),He(h,(f,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Go(u),Ra(n,u))}}return o}/**
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
 */class Xp{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xp(t)}node(){return this.node_}}class Zp{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ye(this.path_,e);return new Zp(this.syncTree_,t)}node(){return ch(this.syncTree_,this.path_)}}const kq=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},z_=function(n,e,t){if(!n||typeof n!="object")return n;if(T(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Nq(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Aq(n[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Nq=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:T(!1,"Unexpected server value: "+n)}},Aq=function(n,e,t){n.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},HS=function(n,e,t,s){return tg(e,new Zp(t,n),s)},eg=function(n,e,t){return tg(n,new Xp(e),t)};function tg(n,e,t){const s=n.getPriority().val(),r=z_(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=z_(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Le(a,we(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Le(r))),o.forEachChild(le,(a,c)=>{const l=tg(c,e.getImmediateChild(a),t);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
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
 */class ng{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function uh(n,e){let t=e instanceof se?e:new se(e),s=n,r=$(t);for(;r!==null;){const i=yr(s.node.children,r)||{children:{},childCount:0};s=new ng(r,s,i),t=oe(t),r=$(t)}return s}function Yr(n){return n.node.value}function sg(n,e){n.node.value=e,hf(n)}function YS(n){return n.node.childCount>0}function Dq(n){return Yr(n)===void 0&&!YS(n)}function hh(n,e){He(n.node.children,(t,s)=>{e(new ng(t,n,s))})}function zS(n,e,t,s){t&&!s&&e(n),hh(n,r=>{zS(r,e,!0,s)}),t&&s&&e(n)}function Rq(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function gc(n){return new se(n.parent===null?n.name:gc(n.parent)+"/"+n.name)}function hf(n){n.parent!==null&&xq(n.parent,n.name,n)}function xq(n,e,t){const s=Dq(t),r=Pt(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,hf(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,hf(n))}/**
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
 */const Oq=/[\[\].#$\/\u0000-\u001F\u007F]/,Pq=/[\[\].#$\u0000-\u001F\u007F]/,ed=10*1024*1024,dh=function(n){return typeof n=="string"&&n.length!==0&&!Oq.test(n)},KS=function(n){return typeof n=="string"&&n.length!==0&&!Pq.test(n)},Mq=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KS(n)},xa=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!th(n)||n&&typeof n=="object"&&Pt(n,".sv")},kn=function(n,e,t,s){s&&e===void 0||yc(Ct(n,"value"),e,t)},yc=function(n,e,t){const s=t instanceof se?new QB(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Js(s));if(typeof e=="function")throw new Error(n+"contains a function "+Js(s)+" with contents = "+e.toString());if(th(e))throw new Error(n+"contains "+e.toString()+" "+Js(s));if(typeof e=="string"&&e.length>ed/3&&hu(e)>ed)throw new Error(n+"contains a string greater than "+ed+" utf8 bytes "+Js(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(He(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!dh(o)))throw new Error(n+" contains an invalid key ("+o+") "+Js(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JB(s,o),yc(n,a,s),XB(s)}),r&&i)throw new Error(n+' contains ".value" child '+Js(s)+" in addition to actual children.")}},Lq=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const i=Ca(s);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!dh(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(KB);let r=null;for(t=0;t<e.length;t++){if(s=e[t],r!==null&&jt(r,s))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}},QS=function(n,e,t,s){if(s&&e===void 0)return;const r=Ct(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];He(e,(o,a)=>{const c=new se(o);if(yc(r,a,ye(t,c)),Pp(c)===".priority"&&!xa(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),Lq(r,i)},rg=function(n,e,t){if(!(t&&e===void 0)){if(th(e))throw new Error(Ct(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xa(e))throw new Error(Ct(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},_c=function(n,e,t,s){if(!(s&&t===void 0)&&!dh(t))throw new Error(Ct(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Oa=function(n,e,t,s){if(!(s&&t===void 0)&&!KS(t))throw new Error(Ct(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fq=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oa(n,e,t,s)},Gt=function(n,e){if($(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},JS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Mq(t))throw new Error(Ct(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Uq{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fh(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!Mp(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function XS(n,e,t){fh(n,t),ZS(n,s=>Mp(s,e))}function Vt(n,e,t){fh(n,t),ZS(n,s=>jt(s,e)||jt(e,s))}function ZS(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(Vq(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Vq(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();pr&&We("event: "+t.toString()),no(s)}}}/**
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
 */const e0="repo_interrupt",Bq=25;class Wq{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Uq,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vl(),this.transactionQueueTree_=new ng,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qq(n,e,t){if(n.stats_=xp(n.repoInfo_),n.forceRestClient_||wB())n.server_=new Ul(n.repoInfo_,(s,r,i,o)=>{K_(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Q_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new $n(n.repoInfo_,e,(s,r,i,o)=>{K_(n,s,r,i,o)},s=>{Q_(n,s)},s=>{$q(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=SB(n.repoInfo_,()=>new kW(n.stats_,n.server_)),n.infoData_=new EW,n.infoSyncTree_=new Y_({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=pc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ig(n,"connected",!1),n.serverSyncTree_=new Y_({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const l=o(a,c);Vt(n.eventQueue_,s._path,l)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function t0(n){const t=n.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vc(n){return kq({timestamp:t0(n)})}function K_(n,e,t,s,r){n.dataUpdateCount++;const i=new se(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=cl(t,l=>we(l));o=Iq(n.serverSyncTree_,i,c,r)}else{const c=we(t);o=qS(n.serverSyncTree_,i,c,r)}else if(s){const c=cl(t,l=>we(l));o=_q(n.serverSyncTree_,i,c)}else{const c=we(t);o=pc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Li(n,i)),Vt(n.eventQueue_,a,o)}function Q_(n,e){ig(n,"connected",e),e===!1&&Hq(n)}function $q(n,e){He(e,(t,s)=>{ig(n,t,s)})}function ig(n,e,t){const s=new se("/.info/"+e),r=we(t);n.infoData_.updateSnapshot(s,r);const i=pc(n.infoSyncTree_,s,r);Vt(n.eventQueue_,s,i)}function mh(n){return n.nextWriteId_++}function jq(n,e,t){const s=Eq(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(r=>{const i=we(r).withIndex(e._queryParams.getIndex());uf(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=pc(n.serverSyncTree_,e._path,i);else{const a=Ra(n.serverSyncTree_,e);o=qS(n.serverSyncTree_,e._path,i,a)}return Vt(n.eventQueue_,e._path,o),Yl(n.serverSyncTree_,e,t,null,!0),i},r=>(io(n,"get for query "+xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function og(n,e,t,s,r){io(n,"set",{path:e.toString(),value:t,priority:s});const i=vc(n),o=we(t,s),a=ch(n.serverSyncTree_,e),c=eg(o,a,i),l=mh(n),u=zp(n.serverSyncTree_,e,c,l,!0);fh(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||lt("set at "+e+" failed: "+d);const g=ps(n.serverSyncTree_,l,!m);Vt(n.eventQueue_,e,g),Ms(n,r,d,f)});const h=cg(n,e);Li(n,h),Vt(n.eventQueue_,h,[])}function Gq(n,e,t,s){io(n,"update",{path:e.toString(),value:t});let r=!0;const i=vc(n),o={};if(He(t,(a,c)=>{r=!1,o[a]=HS(ye(e,a),we(c),n.serverSyncTree_,i)}),r)We("update() called with empty data.  Don't do anything."),Ms(n,s,"ok",void 0);else{const a=mh(n),c=yq(n.serverSyncTree_,e,o,a);fh(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||lt("update at "+e+" failed: "+l);const d=ps(n.serverSyncTree_,a,!h),f=d.length>0?Li(n,e):e;Vt(n.eventQueue_,f,d),Ms(n,s,l,u)}),He(t,l=>{const u=cg(n,ye(e,l));Li(n,u)}),Vt(n.eventQueue_,e,[])}}function Hq(n){io(n,"onDisconnectEvents");const e=vc(n),t=Vl();sf(n.onDisconnect_,ee(),(r,i)=>{const o=HS(r,i,n.serverSyncTree_,e);so(t,r,o)});let s=[];sf(t,ee(),(r,i)=>{s=s.concat(pc(n.serverSyncTree_,r,i));const o=cg(n,r);Li(n,o)}),n.onDisconnect_=Vl(),Vt(n.eventQueue_,ee(),s)}function Yq(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,r)=>{s==="ok"&&nf(n.onDisconnect_,e),Ms(n,t,s,r)})}function J_(n,e,t,s){const r=we(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(i,o)=>{i==="ok"&&so(n.onDisconnect_,e,r),Ms(n,s,i,o)})}function zq(n,e,t,s,r){const i=we(t,s);n.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&so(n.onDisconnect_,e,i),Ms(n,r,o,a)})}function Kq(n,e,t,s){if(al(t)){We("onDisconnect().update() called with empty data.  Don't do anything."),Ms(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,i)=>{r==="ok"&&He(t,(o,a)=>{const c=we(a);so(n.onDisconnect_,ye(e,o),c)}),Ms(n,s,r,i)})}function Qq(n,e,t){let s;$(e._path)===".info"?s=uf(n.infoSyncTree_,e,t):s=uf(n.serverSyncTree_,e,t),XS(n.eventQueue_,e._path,s)}function df(n,e,t){let s;$(e._path)===".info"?s=Yl(n.infoSyncTree_,e,t):s=Yl(n.serverSyncTree_,e,t),XS(n.eventQueue_,e._path,s)}function n0(n){n.persistentConnection_&&n.persistentConnection_.interrupt(e0)}function Jq(n){n.persistentConnection_&&n.persistentConnection_.resume(e0)}function io(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),We(t,...e)}function Ms(n,e,t,s){e&&no(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function Xq(n,e,t,s,r,i){io(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:zb(),applyLocally:i,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ag(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{yc("transaction failed: Data returned ",c,o.path),o.status=0;const l=uh(n.transactionQueueTree_,e),u=Yr(l)||[];u.push(o),sg(l,u);let h;typeof c=="object"&&c!==null&&Pt(c,".priority")?(h=yr(c,".priority"),T(xa(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(ch(n.serverSyncTree_,e)||P.EMPTY_NODE).getPriority().val();const d=vc(n),f=we(c,h),m=eg(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=mh(n);const g=zp(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);Vt(n.eventQueue_,e,g),ph(n,n.transactionQueueTree_)}}function ag(n,e,t){return ch(n.serverSyncTree_,e,t)||P.EMPTY_NODE}function ph(n,e=n.transactionQueueTree_){if(e||gh(n,e),Yr(e)){const t=r0(n,e);T(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Zq(n,gc(e),t)}else YS(e)&&hh(e,t=>{ph(n,t)})}function Zq(n,e,t){const s=t.map(l=>l.currentWriteId),r=ag(n,e,s);let i=r;const o=r.hash();for(let l=0;l<t.length;l++){const u=t[l];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=gt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,l=>{io(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ps(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();gh(n,uh(n.transactionQueueTree_,e)),ph(n,n.transactionQueueTree_),Vt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)no(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{lt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Li(n,e)}},o)}function Li(n,e){const t=s0(n,e),s=gc(t),r=r0(n,t);return e$(n,r,s),s}function e$(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=gt(t,c.path);let u=!1,h;if(T(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(ps(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Bq)u=!0,h="maxretry",r=r.concat(ps(n.serverSyncTree_,c.currentWriteId,!0));else{const d=ag(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){yc("transaction failed: Data returned ",f,c.path);let m=we(f);typeof f=="object"&&f!=null&&Pt(f,".priority")||(m=m.updatePriority(d.getPriority()));const b=c.currentWriteId,O=vc(n),q=eg(m,d,O);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=q,c.currentWriteId=mh(n),o.splice(o.indexOf(b),1),r=r.concat(zp(n.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),r=r.concat(ps(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(ps(n.serverSyncTree_,c.currentWriteId,!0))}Vt(n.eventQueue_,t,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}gh(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)no(s[a]);ph(n,n.transactionQueueTree_)}function s0(n,e){let t,s=n.transactionQueueTree_;for(t=$(e);t!==null&&Yr(s)===void 0;)s=uh(s,t),e=oe(e),t=$(e);return s}function r0(n,e){const t=[];return i0(n,e,t),t.sort((s,r)=>s.order-r.order),t}function i0(n,e,t){const s=Yr(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);hh(e,r=>{i0(n,r,t)})}function gh(n,e){const t=Yr(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,sg(e,t.length>0?t:void 0)}hh(e,s=>{gh(n,s)})}function cg(n,e){const t=gc(s0(n,e)),s=uh(n.transactionQueueTree_,e);return Rq(s,r=>{td(n,r)}),td(n,s),zS(s,r=>{td(n,r)}),t}function td(n,e){const t=Yr(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(T(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(T(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(ps(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?sg(e,void 0):t.length=i+1,Vt(n.eventQueue_,gc(e),r);for(let o=0;o<s.length;o++)no(s[o])}}/**
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
 */function t$(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function n$(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${t}' in query '${n}'`)}return e}const ff=function(n,e){const t=s$(n),s=t.namespace;t.domain==="firebase.com"&&Sn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fB();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lS(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new se(t.pathString)}},s$=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(r=t$(n.substring(u,h)));const d=n$(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class o0{constructor(e,t,s,r){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class a0{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class lg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class r${constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Et;return Yq(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Gt("OnDisconnect.remove",this._path);const e=new Et;return J_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Gt("OnDisconnect.set",this._path),kn("OnDisconnect.set",e,this._path,!1);const t=new Et;return J_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Gt("OnDisconnect.setWithPriority",this._path),kn("OnDisconnect.setWithPriority",e,this._path,!1),rg("OnDisconnect.setWithPriority",t,!1);const s=new Et;return zq(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Gt("OnDisconnect.update",this._path),QS("OnDisconnect.update",e,this._path,!1);const t=new Et;return Kq(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Nt{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return j(this._path)?null:Pp(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=F_(this._queryParams),t=Ap(e);return t==="{}"?"default":t}get _queryObject(){return F_(this._queryParams)}isEqual(e){if(e=N(e),!(e instanceof Nt))return!1;const t=this._repo===e._repo,s=Mp(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+zB(this._path)}}function yh(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function js(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===wn){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Kn)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(n.hasEnd()){if(n.getIndexEndName()!==Cn)throw new Error(s);if(typeof t!="string")throw new Error(r)}}else if(n.getIndex()===le){if(e!=null&&!xa(e)||t!=null&&!xa(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(n.getIndex()instanceof Up||n.getIndex()===Vp,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _h(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Qt extends Nt{constructor(e,t){super(e,t,new sh,!1)}get parent(){const e=_S(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Or{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new se(e),s=Pr(this.ref,e);return new Or(this._node.getChild(t),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Or(r,Pr(this.ref,s),le)))}hasChild(e){const t=new se(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function c0(n,e){return n=N(n),n._checkNotDeleted("ref"),e!==void 0?Pr(n._root,e):n._root}function X_(n,e){n=N(n),n._checkNotDeleted("refFromURL");const t=ff(e,n._repo.repoInfo_.nodeAdmin);JS("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&Sn("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),c0(n,t.path.toString())}function Pr(n,e){return n=N(n),$(n._path)===null?Fq("child","path",e,!1):Oa("child","path",e,!1),new Qt(n._repo,ye(n._path,e))}function i$(n,e){n=N(n),Gt("push",n._path),kn("push",e,n._path,!0);const t=t0(n._repo),s=mW(t),r=Pr(n,s),i=Pr(n,s);let o;return e!=null?o=ug(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function o$(n){return Gt("remove",n._path),ug(n,null)}function ug(n,e){n=N(n),Gt("set",n._path),kn("set",e,n._path,!1);const t=new Et;return og(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function a$(n,e){n=N(n),Gt("setPriority",n._path),rg("setPriority",e,!1);const t=new Et;return og(n._repo,ye(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function c$(n,e,t){if(Gt("setWithPriority",n._path),kn("setWithPriority",e,n._path,!1),rg("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new Et;return og(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function l$(n,e){QS("update",e,n._path,!1);const t=new Et;return Gq(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function u$(n){n=N(n);const e=new lg(()=>{}),t=new wc(e);return jq(n._repo,n,t).then(s=>new Or(s,new Qt(n._repo,n._path),n._queryParams.getIndex()))}class wc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new o0("value",this,new Or(e.snapshotNode,new Qt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new a0(this,e,t):null}matches(e){return e instanceof wc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new a0(this,e,t):null}createEvent(e,t){T(e.childName!=null,"Child events should have a childName.");const s=Pr(new Qt(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new o0(e.type,this,new Or(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ic(n,e,t,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const c=t,l=(u,h)=>{df(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new lg(t,i||void 0),a=e==="value"?new wc(o):new vh(e,o);return Qq(n._repo,n,a),()=>df(n._repo,n,a)}function mf(n,e,t,s){return Ic(n,"value",e,t,s)}function Z_(n,e,t,s){return Ic(n,"child_added",e,t,s)}function ev(n,e,t,s){return Ic(n,"child_changed",e,t,s)}function tv(n,e,t,s){return Ic(n,"child_moved",e,t,s)}function nv(n,e,t,s){return Ic(n,"child_removed",e,t,s)}function sv(n,e,t){let s=null;const r=t?new lg(t):null;e==="value"?s=new wc(r):e&&(s=new vh(e,r)),df(n._repo,n,s)}class cn{}class l0 extends cn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){kn("endAt",this._value,e._path,!0);const t=tf(e._queryParams,this._value,this._key);if(_h(t),js(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Nt(e._repo,e._path,t,e._orderByCalled)}}function h$(n,e){return _c("endAt","key",e,!0),new l0(n,e)}class d$ extends cn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){kn("endBefore",this._value,e._path,!1);const t=IW(e._queryParams,this._value,this._key);if(_h(t),js(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Nt(e._repo,e._path,t,e._orderByCalled)}}function f$(n,e){return _c("endBefore","key",e,!0),new d$(n,e)}class u0 extends cn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){kn("startAt",this._value,e._path,!0);const t=ef(e._queryParams,this._value,this._key);if(_h(t),js(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Nt(e._repo,e._path,t,e._orderByCalled)}}function m$(n=null,e){return _c("startAt","key",e,!0),new u0(n,e)}class p$ extends cn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){kn("startAfter",this._value,e._path,!1);const t=wW(e._queryParams,this._value,this._key);if(_h(t),js(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Nt(e._repo,e._path,t,e._orderByCalled)}}function g$(n,e){return _c("startAfter","key",e,!0),new p$(n,e)}class y$ extends cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Nt(e._repo,e._path,_W(e._queryParams,this._limit),e._orderByCalled)}}function _$(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new y$(n)}class v$ extends cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Nt(e._repo,e._path,vW(e._queryParams,this._limit),e._orderByCalled)}}function w$(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new v$(n)}class I$ extends cn{constructor(e){super(),this._path=e}_apply(e){yh(e,"orderByChild");const t=new se(this._path);if(j(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Up(t),r=rh(e._queryParams,s);return js(r),new Nt(e._repo,e._path,r,!0)}}function E$(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Oa("orderByChild","path",n,!1),new I$(n)}class T$ extends cn{_apply(e){yh(e,"orderByKey");const t=rh(e._queryParams,wn);return js(t),new Nt(e._repo,e._path,t,!0)}}function b$(){return new T$}class S$ extends cn{_apply(e){yh(e,"orderByPriority");const t=rh(e._queryParams,le);return js(t),new Nt(e._repo,e._path,t,!0)}}function C$(){return new S$}class k$ extends cn{_apply(e){yh(e,"orderByValue");const t=rh(e._queryParams,Vp);return js(t),new Nt(e._repo,e._path,t,!0)}}function N$(){return new k$}class A$ extends cn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(kn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new l0(this._value,this._key)._apply(new u0(this._value,this._key)._apply(e))}}function D$(n,e){return _c("equalTo","key",e,!0),new A$(n,e)}function Jt(n,...e){let t=N(n);for(const s of e)t=s._apply(t);return t}lq(Qt);mq(Qt);/**
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
 */const R$="FIREBASE_DATABASE_EMULATOR_HOST",pf={};let x$=!1;function O$(n,e,t,s){n.repoInfo_=new lS(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),s&&(n.authTokenProvider_=s)}function h0(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ff(i,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[R$]),l?(c=!0,i=`http://${l}?ns=${a.namespace}`,o=ff(i,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new gi(gi.OWNER):new EB(n.name,n.options,e);JS("Invalid Firebase Database URL",o),j(o.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=M$(a,n,u,new IB(n.name,t));return new L$(h,n)}function P$(n,e){const t=pf[e];(!t||t[n.key]!==n)&&Sn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),n0(n),delete t[n.key]}function M$(n,e,t,s){let r=pf[e.name];r||(r={},pf[e.name]=r);let i=r[n.toURLString()];return i&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Wq(n,x$,t,s),r[n.toURLString()]=i,i}class L${constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qq(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(P$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function d0(){Ri.IS_TRANSPORT_INITIALIZED&&lt("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function F$(){d0(),ms.forceDisallow()}function U$(){d0(),qt.forceDisallow(),ms.forceAllow()}function V$(n,e,t,s={}){n=N(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new gi(gi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Iw(s.mockUserToken,n.app.options.projectId);i=new gi(o)}O$(r,e,t,i)}function B$(n){n=N(n),n._checkNotDeleted("goOffline"),n0(n._repo)}function W$(n){n=N(n),n._checkNotDeleted("goOnline"),Jq(n._repo)}function q$(n,e){Qb(n,e)}/**
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
 */function $$(n){Hb(Ls),Gn(new Mt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return h0(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Ht(v_,w_,n),Ht(v_,w_,"esm2017")}/**
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
 */const j$={".sv":"timestamp"};function G$(){return j$}function H$(n){return{".sv":{increment:n}}}/**
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
 */class Y${constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function z$(n,e,t){var s;if(n=N(n),Gt("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const r=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,i=new Et,o=(c,l,u)=>{let h=null;c?i.reject(c):(h=new Or(u,new Qt(n._repo,n._path),le),i.resolve(new Y$(l,h)))},a=mf(n,()=>{});return Xq(n._repo,n._path,e,o,a,r),i.promise}$n.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$n.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};$$();const K$="@firebase/database-compat",Q$="0.2.10";/**
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
 */const J$=new Wi("@firebase/database-compat"),f0=function(n){const e="FIREBASE WARNING: "+n;J$.warn(e)};/**
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
 */const X$=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(Ct(n,e)+"must be a boolean.")},Z$=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Ct(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class ej{constructor(e){this._delegate=e}cancel(e){L("OnDisconnect.cancel",0,1,arguments.length),Ue("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){L("OnDisconnect.remove",0,1,arguments.length),Ue("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){L("OnDisconnect.set",1,2,arguments.length),Ue("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),r=>t(r)),s}setWithPriority(e,t,s){L("OnDisconnect.setWithPriority",2,3,arguments.length),Ue("OnDisconnect.setWithPriority","onComplete",s,!0);const r=this._delegate.setWithPriority(e,t);return s&&r.then(()=>s(null),i=>s(i)),r}update(e,t){if(L("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let i=0;i<e.length;++i)r[""+i]=e[i];e=r,f0("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ue("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),r=>t(r)),s}}/**
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
 */class tj{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return L("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Is{constructor(e,t){this._database=e,this._delegate=t}val(){return L("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return L("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return L("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return L("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return L("DataSnapshot.child",0,1,arguments.length),e=String(e),Oa("DataSnapshot.child","path",e,!1),new Is(this._database,this._delegate.child(e))}hasChild(e){return L("DataSnapshot.hasChild",1,1,arguments.length),Oa("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return L("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return L("DataSnapshot.forEach",1,1,arguments.length),Ue("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Is(this._database,t)))}hasChildren(){return L("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return L("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return L("DataSnapshot.ref",0,0,arguments.length),new Rt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Je{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,r){var i;L("Query.on",2,4,arguments.length),Ue("Query.on","callback",t,!1);const o=Je.getCancelAndContextArgs_("Query.on",s,r),a=(l,u)=>{t.call(o.context,new Is(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(i=o.cancel)===null||i===void 0?void 0:i.bind(o.context);switch(e){case"value":return mf(this._delegate,a,c),t;case"child_added":return Z_(this._delegate,a,c),t;case"child_removed":return nv(this._delegate,a,c),t;case"child_changed":return ev(this._delegate,a,c),t;case"child_moved":return tv(this._delegate,a,c),t;default:throw new Error(Ct("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(L("Query.off",0,3,arguments.length),Z$("Query.off",e,!0),Ue("Query.off","callback",t,!0),kg("Query.off","context",s,!0),t){const r=()=>{};r.userCallback=t,r.context=s,sv(this._delegate,e,r)}else sv(this._delegate,e)}get(){return u$(this._delegate).then(e=>new Is(this.database,e))}once(e,t,s,r){L("Query.once",1,4,arguments.length),Ue("Query.once","callback",t,!0);const i=Je.getCancelAndContextArgs_("Query.once",s,r),o=new Et,a=(l,u)=>{const h=new Is(this.database,l);t&&t.call(i.context,h,u),o.resolve(h)};a.userCallback=t,a.context=i.context;const c=l=>{i.cancel&&i.cancel.call(i.context,l),o.reject(l)};switch(e){case"value":mf(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Z_(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":nv(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":ev(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":tv(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(Ct("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return L("Query.limitToFirst",1,1,arguments.length),new Je(this.database,Jt(this._delegate,_$(e)))}limitToLast(e){return L("Query.limitToLast",1,1,arguments.length),new Je(this.database,Jt(this._delegate,w$(e)))}orderByChild(e){return L("Query.orderByChild",1,1,arguments.length),new Je(this.database,Jt(this._delegate,E$(e)))}orderByKey(){return L("Query.orderByKey",0,0,arguments.length),new Je(this.database,Jt(this._delegate,b$()))}orderByPriority(){return L("Query.orderByPriority",0,0,arguments.length),new Je(this.database,Jt(this._delegate,C$()))}orderByValue(){return L("Query.orderByValue",0,0,arguments.length),new Je(this.database,Jt(this._delegate,N$()))}startAt(e=null,t){return L("Query.startAt",0,2,arguments.length),new Je(this.database,Jt(this._delegate,m$(e,t)))}startAfter(e=null,t){return L("Query.startAfter",0,2,arguments.length),new Je(this.database,Jt(this._delegate,g$(e,t)))}endAt(e=null,t){return L("Query.endAt",0,2,arguments.length),new Je(this.database,Jt(this._delegate,h$(e,t)))}endBefore(e=null,t){return L("Query.endBefore",0,2,arguments.length),new Je(this.database,Jt(this._delegate,f$(e,t)))}equalTo(e,t){return L("Query.equalTo",1,2,arguments.length),new Je(this.database,Jt(this._delegate,D$(e,t)))}toString(){return L("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return L("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(L("Query.isEqual",1,1,arguments.length),!(e instanceof Je)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const r={cancel:void 0,context:void 0};if(t&&s)r.cancel=t,Ue(e,"cancel",r.cancel,!0),r.context=s,kg(e,"context",r.context,!0);else if(t)if(typeof t=="object"&&t!==null)r.context=t;else if(typeof t=="function")r.cancel=t;else throw new Error(Ct(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Rt(this.database,new Qt(this._delegate._repo,this._delegate._path))}}class Rt extends Je{constructor(e,t){super(e,new Nt(t._repo,t._path,new sh,!1)),this.database=e,this._delegate=t}getKey(){return L("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return L("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Rt(this.database,Pr(this._delegate,e))}getParent(){L("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Rt(this.database,e):null}getRoot(){return L("Reference.root",0,0,arguments.length),new Rt(this.database,this._delegate.root)}set(e,t){L("Reference.set",1,2,arguments.length),Ue("Reference.set","onComplete",t,!0);const s=ug(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}update(e,t){if(L("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let i=0;i<e.length;++i)r[""+i]=e[i];e=r,f0("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Gt("Reference.update",this._delegate._path),Ue("Reference.update","onComplete",t,!0);const s=l$(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}setWithPriority(e,t,s){L("Reference.setWithPriority",2,3,arguments.length),Ue("Reference.setWithPriority","onComplete",s,!0);const r=c$(this._delegate,e,t);return s&&r.then(()=>s(null),i=>s(i)),r}remove(e){L("Reference.remove",0,1,arguments.length),Ue("Reference.remove","onComplete",e,!0);const t=o$(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){L("Reference.transaction",1,3,arguments.length),Ue("Reference.transaction","transactionUpdate",e,!1),Ue("Reference.transaction","onComplete",t,!0),X$("Reference.transaction","applyLocally",s,!0);const r=z$(this._delegate,e,{applyLocally:s}).then(i=>new tj(i.committed,new Is(this.database,i.snapshot)));return t&&r.then(i=>t(null,i.committed,i.snapshot),i=>t(i,!1,null)),r}setPriority(e,t){L("Reference.setPriority",1,2,arguments.length),Ue("Reference.setPriority","onComplete",t,!0);const s=a$(this._delegate,e);return t&&s.then(()=>t(null),r=>t(r)),s}push(e,t){L("Reference.push",0,2,arguments.length),Ue("Reference.push","onComplete",t,!0);const s=i$(this._delegate,e),r=s.then(o=>new Rt(this.database,o));t&&r.then(()=>t(null),o=>t(o));const i=new Rt(this.database,s);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Gt("Reference.onDisconnect",this._delegate._path),new ej(new r$(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Pa{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:F$,forceLongPolling:U$}}useEmulator(e,t,s={}){V$(this._delegate,e,t,s)}ref(e){if(L("database.ref",0,1,arguments.length),e instanceof Rt){const t=X_(this._delegate,e.toString());return new Rt(this,t)}else{const t=c0(this._delegate,e);return new Rt(this,t)}}refFromURL(e){L("database.refFromURL",1,1,arguments.length);const s=X_(this._delegate,e);return new Rt(this,s)}goOffline(){return L("database.goOffline",0,0,arguments.length),B$(this._delegate)}goOnline(){return L("database.goOnline",0,0,arguments.length),W$(this._delegate)}}Pa.ServerValue={TIMESTAMP:G$(),increment:n=>H$(n)};/**
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
 */function nj({app:n,url:e,version:t,customAuthImpl:s,namespace:r,nodeAdmin:i=!1}){Hb(t);const o=new bw("auth-internal",new Sw("database-standalone"));return o.setComponent(new Mt("auth-internal",()=>s,"PRIVATE")),{instance:new Pa(h0(n,o,void 0,e,i),n),namespace:r}}var sj=Object.freeze({__proto__:null,initStandalone:nj});/**
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
 */const rj=Pa.ServerValue;function ij(n){n.INTERNAL.registerComponent(new Mt("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Pa(r,s)},"PUBLIC").setServiceProps({Reference:Rt,Query:Je,Database:Pa,DataSnapshot:Is,enableLogging:q$,INTERNAL:sj,ServerValue:rj}).setMultipleInstances(!0)),n.registerVersion(K$,Q$)}ij(Lt);const oj={apiKey:"AIzaSyANYFUMwHMxHVoIDNLJsFzDSiL1_4qB4YA",authDomain:"game-7955e.firebaseapp.com",databaseURL:"https://game-7955e-default-rtdb.firebaseio.com",projectId:"game-7955e",storageBucket:"game-7955e.appspot.com",messagingSenderId:"364405624537",appId:"1:364405624537:web:551896aa29b2a81409f8c8"};Lt.initializeApp(oj);Lt.apps.length||Lt.initializeApp(firebaseConfig);Lt.database().ref();Lt.auth;Lt.database();Lt.firestore();export{aj as a,Lt as f,k as h};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(n,e){if(!n)throw Rs(e)},Rs=function(n){return new Error("Firebase Database ("+Ym.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},XI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):XI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const p=l<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Jm=function(n){const e=Xm(n);return Qu.encodeByteArray(e,!0)},ya=function(n){return Jm(n).replace(/\./g,"")},_a=function(n){try{return Qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(n){return Rr(void 0,n)}function Rr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ZI(t)||(n[t]=Rr(n[t],e[t]));return n}function ZI(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function Xu(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eE(){return typeof self=="object"&&self.self===self}function Zm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eg(){const n=re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tg(){return Ym.NODE_ADMIN===!0}function tE(){return!Xu()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dr(){return typeof indexedDB=="object"}function nE(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function iE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sE=()=>iE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_a(n[1]);return e&&JSON.parse(e)},ng=()=>{try{return sE()||rE()||oE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aE=()=>{var n;return(n=ng())===null||n===void 0?void 0:n.config},cE=n=>{var e;return(e=ng())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ig(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ya(JSON.stringify(t)),ya(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="FirebaseError";class Ye extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lE,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?uE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ye(s,a,i)}}function uE(n,e){return n.replace(hE,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const hE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){return JSON.parse(n)}function ge(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=xr(_a(r[0])||""),t=xr(_a(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},dE=function(n){const e=sg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fE=function(n){const e=sg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function va(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wa(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Kl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(_f(r)&&_f(o)){if(!Kl(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function _f(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ur(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function rg(n,e){const t=new mE(n,e);return t.subscribe.bind(t)}class mE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");gE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yl(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(n,e,t,i){let s;if(i<e?s="at least "+e:i>t&&(s=t===0?"none":"no more than "+t),s){const r=n+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+s+".";throw new Error(r)}};function st(n,e){return`${n} failed: ${e} argument `}function Ie(n,e,t,i){if(!(i&&!t)&&typeof t!="function")throw new Error(st(n,e)+"must be a valid function.")}function vf(n,e,t,i){if(!(i&&!t)&&(typeof t!="object"||t===null))throw new Error(st(n,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ac=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function S(n){return n&&n._delegate?n._delegate:n}class dt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class og{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new et;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_E(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _E(n){return n===Jn?void 0:n}function vE(n){return n.instantiationMode==="EAGER"}/**
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
 */class ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new og(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=[];var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const cg={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},wE=B.INFO,IE={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},EE=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=IE[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ds{constructor(e){this.name=e,this._logLevel=wE,this._logHandler=EE,this._userLogHandler=null,Ju.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}function TE(n){Ju.forEach(e=>{e.setLogLevel(n)})}function bE(n,e){for(const t of Ju){let i=null;e&&e.level&&(i=cg[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,r,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(i!=null?i:s.logLevel)&&n({level:B[r].toLowerCase(),message:a,args:o,type:s.name})}}}const SE=(n,e)=>e.some(t=>n instanceof t);let wf,If;function CE(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kE(){return If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,Hl=new WeakMap,ug=new WeakMap,_l=new WeakMap,Zu=new WeakMap;function AE(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(In(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lg.set(t,n)}).catch(()=>{}),Zu.set(e,n),e}function NE(n){if(Hl.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Hl.set(n,e)}let zl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ug.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return In(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function RE(n){zl=n(zl)}function DE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vl(this),e,...t);return ug.set(i,e.sort?e.sort():[e]),In(i)}:kE().includes(n)?function(...e){return n.apply(vl(this),e),In(lg.get(this))}:function(...e){return In(n.apply(vl(this),e))}}function xE(n){return typeof n=="function"?DE(n):(n instanceof IDBTransaction&&NE(n),SE(n,CE())?new Proxy(n,zl):n)}function In(n){if(n instanceof IDBRequest)return AE(n);if(_l.has(n))return _l.get(n);const e=xE(n);return e!==n&&(_l.set(n,e),Zu.set(e,n)),e}const vl=n=>Zu.get(n);function PE(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=In(o);return i&&o.addEventListener("upgradeneeded",c=>{i(In(o.result),c.oldVersion,c.newVersion,In(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const OE=["get","getKey","getAll","getAllKeys","count"],LE=["put","add","delete","clear"],wl=new Map;function Ef(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=LE.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||OE.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return wl.set(e,r),r}RE(n=>({...n,get:(e,t,i)=>Ef(e,t)||n.get(e,t,i),has:(e,t)=>!!Ef(e,t)||n.has(e,t)}));/**
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
 */class ME{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FE(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function FE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ql="@firebase/app",Tf="0.8.4";/**
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
 */const _i=new Ds("@firebase/app"),UE="@firebase/app-compat",VE="@firebase/analytics-compat",BE="@firebase/analytics",qE="@firebase/app-check-compat",$E="@firebase/app-check",WE="@firebase/auth",GE="@firebase/auth-compat",jE="@firebase/database",KE="@firebase/database-compat",HE="@firebase/functions",zE="@firebase/functions-compat",QE="@firebase/installations",YE="@firebase/installations-compat",XE="@firebase/messaging",JE="@firebase/messaging-compat",ZE="@firebase/performance",eT="@firebase/performance-compat",tT="@firebase/remote-config",nT="@firebase/remote-config-compat",iT="@firebase/storage",sT="@firebase/storage-compat",rT="@firebase/firestore",oT="@firebase/firestore-compat",aT="firebase",cT="9.14.0";/**
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
 */const Cn="[DEFAULT]",lT={[Ql]:"fire-core",[UE]:"fire-core-compat",[BE]:"fire-analytics",[VE]:"fire-analytics-compat",[$E]:"fire-app-check",[qE]:"fire-app-check-compat",[WE]:"fire-auth",[GE]:"fire-auth-compat",[jE]:"fire-rtdb",[KE]:"fire-rtdb-compat",[HE]:"fire-fn",[zE]:"fire-fn-compat",[QE]:"fire-iid",[YE]:"fire-iid-compat",[XE]:"fire-fcm",[JE]:"fire-fcm-compat",[ZE]:"fire-perf",[eT]:"fire-perf-compat",[tT]:"fire-rc",[nT]:"fire-rc-compat",[iT]:"fire-gcs",[sT]:"fire-gcs-compat",[rT]:"fire-fst",[oT]:"fire-fst-compat","fire-js":"fire-js",[aT]:"fire-js-all"};/**
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
 */const kn=new Map,Pr=new Map;function Ia(n,e){try{n.container.addComponent(e)}catch(t){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hg(n,e){n.container.addOrOverwriteComponent(e)}function tn(n){const e=n.name;if(Pr.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;Pr.set(e,n);for(const t of kn.values())Ia(t,n);return!0}function dg(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function uT(n,e,t=Cn){dg(n,e).clearInstance(t)}function hT(){Pr.clear()}/**
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
 */const dT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jt=new Li("app","Firebase",dT);/**
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
 */class fT{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Bn=cT;function eh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(t||(t=aE()),!t)throw Jt.create("no-options");const r=kn.get(s);if(r){if(Kl(t,r.options)&&Kl(i,r.config))return r;throw Jt.create("duplicate-app",{appName:s})}const o=new ag(s);for(const c of Pr.values())o.addComponent(c);const a=new fT(t,i,o);return kn.set(s,a),a}function pT(n=Cn){const e=kn.get(n);if(!e&&n===Cn)return eh();if(!e)throw Jt.create("no-app",{appName:n});return e}function mT(){return Array.from(kn.values())}async function fg(n){const e=n.name;kn.has(e)&&(kn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function It(n,e,t){var i;let s=(i=lT[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(a.join(" "));return}tn(new dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function pg(n,e){if(n!==null&&typeof n!="function")throw Jt.create("invalid-log-argument");bE(n,e)}function mg(n){TE(n)}/**
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
 */const gT="firebase-heartbeat-database",yT=1,Or="firebase-heartbeat-store";let Il=null;function gg(){return Il||(Il=PE(gT,yT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Or)}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),Il}async function _T(n){var e;try{return(await gg()).transaction(Or).objectStore(Or).get(yg(n))}catch(t){if(t instanceof Ye)_i.warn(t.message);else{const i=Jt.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});_i.warn(i.message)}}}async function bf(n,e){var t;try{const s=(await gg()).transaction(Or,"readwrite");return await s.objectStore(Or).put(e,yg(n)),s.done}catch(i){if(i instanceof Ye)_i.warn(i.message);else{const s=Jt.create("idb-set",{originalErrorMessage:(t=i)===null||t===void 0?void 0:t.message});_i.warn(s.message)}}}function yg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vT=1024,wT=30*24*60*60*1e3;class IT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TT(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=wT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sf(),{heartbeatsToSend:t,unsentEntries:i}=ET(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sf(){return new Date().toISOString().substring(0,10)}function ET(n,e=vT){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Cf(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Cf(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dr()?nE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _T(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cf(n){return ya(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bT(n){tn(new dt("platform-logger",e=>new ME(e),"PRIVATE")),tn(new dt("heartbeat",e=>new IT(e),"PRIVATE")),It(Ql,Tf,n),It(Ql,Tf,"esm2017"),It("fire-js","")}bT("");const ST=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Bn,_DEFAULT_ENTRY_NAME:Cn,_addComponent:Ia,_addOrOverwriteComponent:hg,_apps:kn,_clearComponents:hT,_components:Pr,_getProvider:dg,_registerComponent:tn,_removeServiceInstance:uT,deleteApp:fg,getApp:pT,getApps:mT,initializeApp:eh,onLog:pg,registerVersion:It,setLogLevel:mg,FirebaseError:Ye},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t){this._delegate=e,this.firebase=t,Ia(e,new dt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),fg(this._delegate)))}_getService(e,t=Cn){var i;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((i=s.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=Cn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ia(this._delegate,e)}_addOrOverwriteComponent(e){hg(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const kT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},kf=new Li("app-compat","Firebase",kT);/**
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
 */function AT(n){const e={},t={__esModule:!0,initializeApp:r,app:s,registerVersion:It,setLogLevel:mg,onLog:pg,apps:null,SDK_VERSION:Bn,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:ST}};t.default=t,Object.defineProperty(t,"apps",{get:o});function i(l){delete e[l]}function s(l){if(l=l||Cn,!ht(e,l))throw kf.create("no-app",{appName:l});return e[l]}s.App=n;function r(l,u={}){const h=eh(l,u);if(ht(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(tn(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw kf.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Rr(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function _g(){const n=AT(CT);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:_g,extendNamespace:e,createSubscribe:rg,ErrorFactory:Li,deepExtend:Rr});function e(t){Rr(n,t)}return n}const NT=_g();/**
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
 */const Af=new Ds("@firebase/app-compat"),RT="@firebase/app-compat",DT="0.1.39";/**
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
 */function xT(n){It(RT,DT,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(eE()&&self.firebase!==void 0){Af.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Af.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ft=NT;xT();var PT="firebase",OT="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.registerVersion(PT,OT,"app-compat");function th(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}const Ys={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function vg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MT=LT,FT=vg,wg=new Li("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Ds("@firebase/auth");function ca(n,...e){Nf.logLevel<=B.ERROR&&Nf.error(`Auth (${Bn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw nh(n,...e)}function Ue(n,...e){return nh(n,...e)}function Ig(n,e,t){const i=Object.assign(Object.assign({},FT()),{[e]:t});return new Li("auth","Firebase",i).create(e,{appName:n.name})}function xs(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Be(n,"argument-error"),Ig(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return wg.create(n,...e)}function w(n,e,...t){if(!n)throw nh(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ca(e),new Error(e)}function Nt(n,e){n||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function lt(n){Nt(n instanceof Function,"Expected a class definition");let e=Rf.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rf.set(n,e),e)}function UT(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ih(){return Df()==="http:"||Df()==="https:"}function Df(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ih()||Zm()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Yu()||oc()}get(){return VT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=new mo(3e4,6e4);function _e(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Re(n,e,t,i,s={}){return Tg(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Mi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Eg.fetch()(bg(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Tg(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},qT),e);try{const s=new WT(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw hr(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ig(n,u,l);Be(n,u)}}catch(s){if(s instanceof Ye)throw s;Be(n,"network-request-failed")}}async function an(n,e,t,i,s={}){const r=await Re(n,e,t,i,s);return"mfaPendingCredential"in r&&Be(n,"multi-factor-auth-required",{_serverResponse:r}),r}function bg(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?sh(n.config,s):`${n.config.apiScheme}://${s}`}class WT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ue(this.auth,"network-request-failed")),$T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ue(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,e){return Re(n,"POST","/v1/accounts:delete",e)}async function jT(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function KT(n,e){return Re(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HT(n,e=!1){const t=S(n),i=await t.getIdToken(e),s=cc(i);w(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:gr(El(s.auth_time)),issuedAtTime:gr(El(s.iat)),expirationTime:gr(El(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(n){return Number(n)*1e3}function cc(n){var e;const[t,i,s]=n.split(".");if(t===void 0||i===void 0||s===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const r=_a(i);return r?JSON.parse(r):(ca("Failed to decode base64 JWT payload"),null)}catch(r){return ca("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function zT(n){const e=cc(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ye&&QT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function QT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await nn(n,KT(t,{idToken:i}));w(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ZT(r.providerUserInfo):[],a=JT(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function XT(n){const e=S(n);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ZT(n){return n.map(e=>{var{providerId:t}=e,i=th(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(n,e){const t=await Tg(n,{},async()=>{const i=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=bg(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await eb(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Fr;return i&&(w(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(w(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class di{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await nn(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return HT(this,e)}reload(){return XT(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Mr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nn(this,GT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(l=t.createdAt)!==null&&l!==void 0?l:void 0,W=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:he,isAnonymous:oe,providerData:J,stsTokenManager:Pe}=t;w(j&&Pe,e,"internal-error");const Qn=Fr.fromJSON(this.name,Pe);w(typeof j=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),w(typeof he=="boolean",e,"internal-error"),w(typeof oe=="boolean",e,"internal-error"),dn(f,e.name),dn(p,e.name),dn(y,e.name),dn(T,e.name),dn(F,e.name),dn(W,e.name);const gl=new di({uid:j,auth:e,email:d,emailVerified:he,displayName:h,isAnonymous:oe,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:Qn,createdAt:F,lastLoginAt:W});return J&&Array.isArray(J)&&(gl.providerData=J.map(YI=>Object.assign({},YI))),T&&(gl._redirectEventId=T),gl}static async _fromIdTokenResponse(e,t,i=!1){const s=new Fr;s.updateFromServerResponse(t);const r=new di({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Mr(r),r}}/**
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
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cg.type="NONE";const us=Cg;/**
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
 */function fi(n,e,t){return`firebase:${n}:${e}:${t}`}class ns{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=fi(this.userKey,s.apiKey,r),this.fullPersistenceKey=fi("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ns(lt(us),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||lt(us);const o=fi(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=di._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ns(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ns(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rg(e))return"Blackberry";if(Dg(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(go(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function kg(n=re()){return/firefox\//i.test(n)}function rh(n=re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(n=re()){return/crios\//i.test(n)}function Ng(n=re()){return/iemobile/i.test(n)}function go(n=re()){return/android/i.test(n)}function Rg(n=re()){return/blackberry/i.test(n)}function Dg(n=re()){return/webos/i.test(n)}function Ps(n=re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tb(n=re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function nb(n=re()){var e;return Ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ib(){return eg()&&document.documentMode===10}function xg(n=re()){return Ps(n)||go(n)||Dg(n)||Rg(n)||/windows phone/i.test(n)||Ng(n)}function sb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n,e=[]){let t;switch(n){case"Browser":t=xf(re());break;case"Worker":t=`${xf(re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bn}/${i}`}/**
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
 */class rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Mr(e)}catch(i){if(((t=i)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function ke(n){return S(n)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=rg(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ab(n,e,t){const i=ke(n);w(i._canInitEmulator,i,"emulator-config-failed"),w(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Og(e),{host:o,port:a}=cb(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lb()}function Og(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cb(n){const e=Og(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Of(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Of(o)}}}function Of(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(n,e){return Re(n,"POST","/v1/accounts:resetPassword",_e(n,e))}async function Mg(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function ub(n,e){return Re(n,"POST","/v1/accounts:update",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(n,e){return an(n,"POST","/v1/accounts:signInWithPassword",_e(n,e))}async function lc(n,e){return Re(n,"POST","/v1/accounts:sendOobCode",_e(n,e))}async function db(n,e){return lc(n,e)}async function fb(n,e){return lc(n,e)}async function pb(n,e){return lc(n,e)}async function mb(n,e){return lc(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,e))}async function yb(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Os{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ur(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ur(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gb(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Mg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yb(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(n,e){return an(n,"POST","/v1/accounts:signInWithIdp",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="http://localhost";class $t extends Os{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=th(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new $t(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Zt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zt(e,t)}buildRequest(){const e={requestUri:_b,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(n,e){return Re(n,"POST","/v1/accounts:sendVerificationCode",_e(n,e))}async function wb(n,e){return an(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,e))}async function Ib(n,e){const t=await an(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,e));if(t.temporaryProof)throw hr(n,"account-exists-with-different-credential",t);return t}const Eb={USER_NOT_FOUND:"user-not-found"};async function Tb(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return an(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,t),Eb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Os{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return wb(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ib(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Tb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new pi({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sb(n){const e=Zi(ur(n)).link,t=e?Zi(ur(e)).deep_link_id:null,i=Zi(ur(n)).deep_link_id;return(i?Zi(ur(i)).link:null)||i||t||e||n}class uc{constructor(e){var t,i,s,r,o,a;const c=Zi(ur(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=bb((s=c.mode)!==null&&s!==void 0?s:null);w(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Sb(e);try{return new uc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return Ur._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=uc.parseLink(t);return w(i,"argument-error"),Ur._fromEmailAndCode(e,i.code,i.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class is extends Ls{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),$t._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),$t._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return is.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return is.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=e;if(!i&&!s&&!t&&!r||!a)return null;try{return new is(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Ls{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xt.credential(t,i)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Ls{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="http://localhost";class hs extends Os{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Zt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Zt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:r}=t;return!i||!s||!r||i!==s?null:new hs(i,r)}static _create(e,t){return new hs(e,t)}buildRequest(){return{requestUri:Cb,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="saml.";class Ea extends cn{constructor(e){w(e.startsWith(kb),"argument-error"),super(e)}static credentialFromResult(e){return Ea.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ea.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=hs.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return hs._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ls{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ot.credential(t,i)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e){return an(n,"POST","/v1/accounts:signUp",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await di._fromIdTokenResponse(e,i,s),o=Lf(i);return new Et({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Lf(i);return new Et({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Lf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(n){var e;const t=ke(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Et({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Fg(t,{returnSecureToken:!0}),s=await Et._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Ye{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ta(e,t,i,s)}}function Ug(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(n,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Nb(n,e){const t=S(n);await hc(!0,t,e);const{providerUserInfo:i}=await jT(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=Vg(i||[]);return t.providerData=t.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function oh(n,e,t=!1){const i=await nn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Et._forOperation(n,"link",i)}async function hc(n,e,t){await Mr(e);const i=Vg(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";w(i.has(t)===n,e.auth,s)}/**
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
 */async function Bg(n,e,t=!1){var i;const{auth:s}=n,r="reauthenticate";try{const o=await nn(n,Ug(s,r,e,n),t);w(o.idToken,s,"internal-error");const a=cc(o.idToken);w(a,s,"internal-error");const{sub:c}=a;return w(n.uid===c,s,"user-mismatch"),Et._forOperation(n,r,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&Be(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(n,e,t=!1){const i="signIn",s=await Ug(n,i,e),r=await Et._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function dc(n,e){return qg(ke(n),e)}async function $g(n,e){const t=S(n);return await hc(!1,t,e.providerId),oh(t,e)}async function Wg(n,e){return Bg(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(n,e){return an(n,"POST","/v1/accounts:signInWithCustomToken",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(n,e){const t=ke(n),i=await Rb(t,{token:e,returnSecureToken:!0}),s=await Et._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ah._fromServerResponse(e,t):Be(e,"internal-error")}}class ah extends fc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ah(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e,t){var i;w(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(n,e,t){const i=S(n),s={requestType:"PASSWORD_RESET",email:e};t&&pc(i,s,t),await fb(i,s)}async function Pb(n,e,t){await Lg(S(n),{oobCode:e,newPassword:t})}async function Ob(n,e){await ub(S(n),{oobCode:e})}async function Gg(n,e){const t=S(n),i=await Lg(t,{oobCode:e}),s=i.requestType;switch(w(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(i.mfaInfo,t,"internal-error");default:w(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=fc._fromServerResponse(ke(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function Lb(n,e){const{data:t}=await Gg(S(n),e);return t.email}async function Mb(n,e,t){const i=ke(n),s=await Fg(i,{returnSecureToken:!0,email:e,password:t}),r=await Et._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Fb(n,e,t){return dc(S(n),qn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(n,e,t){const i=S(n),s={requestType:"EMAIL_SIGNIN",email:e};w(t.handleCodeInApp,i,"argument-error"),t&&pc(i,s,t),await pb(i,s)}function Vb(n,e){const t=uc.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Bb(n,e,t){const i=S(n),s=qn.credentialWithLink(e,t||Lr());return w(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),dc(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(n,e){return Re(n,"POST","/v1/accounts:createAuthUri",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(n,e){const t=ih()?Lr():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:s}=await qb(S(n),i);return s||[]}async function Wb(n,e){const t=S(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&pc(t.auth,s,e);const{email:r}=await db(t.auth,s);r!==n.email&&await n.reload()}async function Gb(n,e,t){const i=S(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&pc(i.auth,r,t);const{email:o}=await mb(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n,e){return Re(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=S(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await nn(i,jb(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Hb(n,e){return jg(S(n),e,null)}function zb(n,e){return jg(S(n),null,e)}async function jg(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await nn(n,Mg(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function Qb(n){var e,t;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n==null?void 0:n.idToken)){const o=(t=(e=cc(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ss(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new Yb(r,s);case"github.com":return new Xb(r,s);case"google.com":return new Jb(r,s);case"twitter.com":return new Zb(r,s,n.screenName||null);case"custom":case"anonymous":return new ss(r,null);default:return new ss(r,i,s)}}class ss{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Kg extends ss{constructor(e,t,i,s){super(e,t,i),this.username=s}}class Yb extends ss{constructor(e,t){super(e,"facebook.com",t)}}class Xb extends Kg{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Jb extends ss{constructor(e,t){super(e,"google.com",t)}}class Zb extends Kg{constructor(e,t,i){super(e,"twitter.com",t,i)}}function eS(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Qb(t)}class oi{constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}static _fromIdtoken(e,t){return new oi("enroll",e,t)}static _fromMfaPendingCredential(e){return new oi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return oi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return oi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=ke(e),s=t.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>fc._fromServerResponse(i,a));w(s.mfaPendingCredential,i,"internal-error");const o=oi._fromMfaPendingCredential(s.mfaPendingCredential);return new ch(o,r,async a=>{const c=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Et._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return w(t.user,i,"internal-error"),Et._forOperation(t.user,t.operationType,l);default:Be(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function tS(n,e){var t;const i=S(n),s=e;return w(e.customData.operationType,i,"argument-error"),w((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),ch._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",_e(n,e))}function iS(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",_e(n,e))}function sS(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:withdraw",_e(n,e))}class lh{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>fc._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new lh(e)}async getSession(){return oi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const i=e,s=await this.getSession(),r=await nn(this.user,i._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const i=typeof e=="string"?e:e.uid,s=await this.user.getIdToken(),r=await nn(this.user,sS(this.user.auth,{idToken:s,mfaEnrollmentId:i}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==i),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(o){if(((t=o)===null||t===void 0?void 0:t.code)!=="auth/user-token-expired")throw o}}}const Tl=new WeakMap;function rS(n){const e=S(n);return Tl.has(e)||Tl.set(e,lh._fromUser(e)),Tl.get(e)}const ba="__sak";/**
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
 */class Hg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){const n=re();return rh(n)||Ps(n)}const aS=1e3,cS=10;class zg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oS()&&sb(),this.fallbackToPolling=xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ib()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cS):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const uh=zg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qg.type="SESSION";const vi=Qg;/**
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
 */function lS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new mc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await lS(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class uS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=yo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function hS(n){me().location.href=n}/**
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
 */function hh(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function dS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pS(){return hh()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",mS=1,Sa="firebaseLocalStorage",Xg="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gc(n,e){return n.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function gS(){const n=indexedDB.deleteDatabase(Yg);return new _o(n).toPromise()}function Yl(){const n=indexedDB.open(Yg,mS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sa,{keyPath:Xg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sa)?e(i):(i.close(),await gS(),e(await Yl()))})})}async function Mf(n,e,t){const i=gc(n,!0).put({[Xg]:e,value:t});return new _o(i).toPromise()}async function yS(n,e){const t=gc(n,!1).get(e),i=await new _o(t).toPromise();return i===void 0?null:i.value}function Ff(n,e){const t=gc(n,!0).delete(e);return new _o(t).toPromise()}const _S=800,vS=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>vS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(pS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dS(),!this.activeServiceWorker)return;this.sender=new uS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yl();return await Mf(e,ba,"1"),await Ff(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mf(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>yS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ff(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=gc(s,!1).getAll();return new _o(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const Vr=Jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:start",_e(n,e))}function IS(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(n){return(await Re(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Zg(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ue("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",TS().appendChild(i)})}function ey(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=500,SS=6e4,Yo=1e12;class CS{constructor(e){this.auth=e,this.counter=Yo,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new kS(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Yo;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Yo;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Yo;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class kS{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;w(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AS(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},SS)},bS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AS(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=ey("rcb"),NS=new mo(3e4,6e4),RS="https://www.google.com/recaptcha/api.js?";class DS{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=me().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(xS(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(me().grecaptcha):new Promise((i,s)=>{const r=me().setTimeout(()=>{s(Ue(e,"network-request-failed"))},NS.get());me()[bl]=()=>{me().clearTimeout(r),delete me()[bl];const a=me().grecaptcha;if(!a){s(Ue(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,i(a)};const o=`${RS}?${Mi({onload:bl,render:"explicit",hl:t})}`;Zg(o).catch(()=>{clearTimeout(r),s(Ue(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=me().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function xS(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class PS{async load(e){return new CS(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="recaptcha",OS={theme:"light",type:"image"};class LS{constructor(e,t=Object.assign({},OS),i){this.parameters=t,this.type=ty,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ke(i),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;w(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PS:new DS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=me()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(ih()&&!hh(),this.auth,"internal-error"),await MS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ES(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function MS(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=pi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function FS(n,e,t){const i=ke(n),s=await yc(i,e,S(t));return new dh(s,r=>dc(i,r))}async function US(n,e,t){const i=S(n);await hc(!1,i,"phone");const s=await yc(i.auth,e,S(t));return new dh(s,r=>$g(i,r))}async function VS(n,e,t){const i=S(n),s=await yc(i.auth,e,S(t));return new dh(s,r=>Wg(i,r))}async function yc(n,e,t){var i;const s=await t.verify();try{w(typeof s=="string",n,"argument-error"),w(t.type===ty,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return w(o.type==="enroll",n,"internal-error"),(await nS(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await wS(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await vb(n,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function BS(n,e){await oh(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.providerId=kt.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return yc(this.auth,e,S(t))}static credential(e,t){return pi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return kt.credentialFromTaggedObject(t)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?pi._fromTokenResponse(t,i):null}}kt.PROVIDER_ID="phone";kt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Fi(n,e){return e?lt(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class fh extends Os{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qS(n){return qg(n.auth,new fh(n),n.bypassAuthState)}function $S(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Bg(t,new fh(n),n.bypassAuthState)}async function WS(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),oh(t,new fh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qS;case"linkViaPopup":case"linkViaRedirect":return WS;case"reauthViaPopup":case"reauthViaRedirect":return $S;default:Be(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new mo(2e3,1e4);async function jS(n,e,t){const i=ke(n);xs(n,e,cn);const s=Fi(i,t);return new zt(i,"signInViaPopup",e,s).executeNotNull()}async function KS(n,e,t){const i=S(n);xs(i.auth,e,cn);const s=Fi(i.auth,t);return new zt(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function HS(n,e,t){const i=S(n);xs(i.auth,e,cn);const s=Fi(i.auth,t);return new zt(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class zt extends ny{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,GS.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="pendingRedirect",yr=new Map;class QS extends ny{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=yr.get(this.auth._key());if(!e){try{const i=await YS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}yr.set(this.auth._key(),e)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YS(n,e){const t=sy(e),i=iy(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function ph(n,e){return iy(n)._set(sy(e),"true")}function XS(){yr.clear()}function mh(n,e){yr.set(n._key(),e)}function iy(n){return lt(n._redirectPersistence)}function sy(n){return fi(zS,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n,e,t){return ZS(n,e,t)}async function ZS(n,e,t){const i=ke(n);xs(n,e,cn);const s=Fi(i,t);return await ph(s,i),s._openRedirect(i,e,"signInViaRedirect")}function eC(n,e,t){return tC(n,e,t)}async function tC(n,e,t){const i=S(n);xs(i.auth,e,cn);const s=Fi(i.auth,t);await ph(s,i.auth);const r=await ry(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",r)}function nC(n,e,t){return iC(n,e,t)}async function iC(n,e,t){const i=S(n);xs(i.auth,e,cn);const s=Fi(i.auth,t);await hc(!1,i,e.providerId),await ph(s,i.auth);const r=await ry(i);return s._openRedirect(i.auth,e,"linkViaRedirect",r)}async function sC(n,e){return await ke(n)._initializationPromise,_c(n,e,!1)}async function _c(n,e,t=!1){const i=ke(n),s=Fi(i,e),o=await new QS(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function ry(n){const e=yo(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=10*60*1e3;class oy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ay(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ay({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ay(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e={}){return Re(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cC=/^https?/;async function lC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cy(n);for(const t of e)try{if(uC(t))return}catch{}Be(n,"unauthorized-domain")}function uC(n){const e=Lr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!cC.test(t))return!1;if(aC.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hC=new mo(3e4,6e4);function Vf(){const n=me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dC(n){return new Promise((e,t)=>{var i,s,r;function o(){Vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vf(),t(Ue(n,"network-request-failed"))},timeout:hC.get()})}if(!((s=(i=me().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=me().gapi)===null||r===void 0)&&r.load)o();else{const a=ey("iframefcb");return me()[a]=()=>{gapi.load?o():t(Ue(n,"network-request-failed"))},Zg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw la=null,e})}let la=null;function fC(n){return la=la||dC(n),la}/**
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
 */const pC=new mo(5e3,15e3),mC="__/auth/iframe",gC="emulator/auth/iframe",yC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vC(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sh(e,gC):`https://${n.config.authDomain}/${mC}`,i={apiKey:e.apiKey,appName:n.name,v:Bn},s=_C.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Mi(i).slice(1)}`}async function wC(n){const e=await fC(n),t=me().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:vC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yC,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=me().setTimeout(()=>{r(o)},pC.get());function c(){me().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EC=500,TC=600,bC="_blank",SC="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CC(n,e,t,i=EC,s=TC){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},IC),{width:i.toString(),height:s.toString(),top:r,left:o}),l=re().toLowerCase();t&&(a=Ag(l)?bC:t),kg(l)&&(e=e||SC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(nb(l)&&a!=="_self")return kC(e||"",a),new Bf(null);const h=window.open(e||"",a,u);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Bf(h)}function kC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const AC="__/auth/handler",NC="emulator/auth/handler";function Xl(n,e,t,i,s,r){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Bn,eventId:s};if(e instanceof cn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",va(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof Ls){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RC(n)}?${Mi(a).slice(1)}`}function RC({config:n}){return n.emulator?sh(n,NC):`https://${n.authDomain}/${AC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="webStorageSupport";class DC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vi,this._completeRedirectFn=_c,this._overrideRedirectResult=mh}async _openPopup(e,t,i,s){var r;Nt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Xl(e,t,i,Lr(),s);return CC(e,o,yo())}async _openRedirect(e,t,i,s){return await this._originValidation(e),hS(Xl(e,t,i,Lr(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await wC(e),i=new oy(e);return t.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sl,{type:Sl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Sl];o!==void 0&&t(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xg()||rh()||Ps()}}const xC=DC;class PC{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Mt("unexpected MultiFactorSessionType")}}}class gh extends PC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gh(e)}_finalizeEnroll(e,t,i){return iS(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return IS(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ly{constructor(){}static assertion(e){return gh._fromCredential(e)}}ly.FACTOR_ID="phone";var qf="@firebase/auth",$f="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MC(n){tn(new dt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,c)=>{w(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),w(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(n)},u=new ob(a,c,l);return UT(u,t),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),tn(new dt("auth-internal",e=>{const t=ke(e.getProvider("auth").getImmediate());return(i=>new OC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(qf,$f,LC(n)),It(qf,$f,"esm2017")}/**
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
 */const FC=5*60;cE("authIdTokenMaxAge");MC("Browser");/**
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
 */function wi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=2e3;async function VC(n,e,t){var i;const{BuildInfo:s}=wi();Nt(e.sessionId,"AuthEvent did not contain a session ID");const r=await GC(e.sessionId),o={};return Ps()?o.ibi=s.packageName:go()?o.apn=s.packageName:Be(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=r,Xl(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function BC(n){const{BuildInfo:e}=wi(),t={};Ps()?t.iosBundleId=e.packageName:go()?t.androidPackageName=e.packageName:Be(n,"operation-not-supported-in-this-environment"),await cy(n,t)}function qC(n){const{cordova:e}=wi();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let s=null;i?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,tb()?"_blank":"_system","location=yes"),t(s)})})}async function $C(n,e,t){const{cordova:i}=wi();let s=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var h;r();const d=(h=i.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(Ue(n,"redirect-cancelled-by-user"))},UC))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),go()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function WC(n){var e,t,i,s,r,o,a,c,l,u;const h=wi();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((r=(s=(i=h==null?void 0:h.cordova)===null||i===void 0?void 0:i.plugins)===null||s===void 0?void 0:s.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function GC(n){const e=jC(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function jC(n){if(Nt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=20;class HC extends oy{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function zC(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:XC(),postBody:null,tenantId:n.tenantId,error:Ue(n,"no-auth-event")}}function QC(n,e){return Jl()._set(Zl(n),e)}async function Wf(n){const e=await Jl()._get(Zl(n));return e&&await Jl()._remove(Zl(n)),e}function YC(n,e){var t,i;const s=ZC(e);if(s.includes("/__/auth/callback")){const r=ua(s),o=r.firebaseError?JC(decodeURIComponent(r.firebaseError)):null,a=(i=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],c=a?Ue(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function XC(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<KC;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Jl(){return lt(uh)}function Zl(n){return fi("authEvent",n.config.apiKey,n.name)}function JC(n){try{return JSON.parse(n)}catch{return null}}function ZC(n){const e=ua(n),t=e.link?decodeURIComponent(e.link):void 0,i=ua(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ua(s).link||s||i||t||n}function ua(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Zi(t.join("?"))}/**
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
 */const e0=500;class t0{constructor(){this._redirectPersistence=vi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_c,this._overrideRedirectResult=mh}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new HC(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Be(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,s){WC(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),XS(),await this._originValidation(e);const o=zC(e,i,s);await QC(e,o);const a=await VC(e,o,t),c=await qC(a);return $C(e,r,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BC(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:s,BuildInfo:r}=wi(),o=setTimeout(async()=>{await Wf(e),t.onEvent(Gf())},e0),a=async u=>{clearTimeout(o);const h=await Wf(e);let d=null;h&&(u==null?void 0:u.url)&&(d=YC(h,u.url)),t.onEvent(d||Gf())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const c=s,l=`${r.packageName.toLowerCase()}://`;wi().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const n0=t0;function Gf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ue("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n,e){ke(n)._logFramework(e)}var s0="@firebase/auth-compat",r0="0.2.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e3;function _r(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function a0(){return _r()==="http:"||_r()==="https:"}function uy(n=re()){return!!((_r()==="file:"||_r()==="ionic:"||_r()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function c0(){return oc()||Xu()}function l0(){return eg()&&(document==null?void 0:document.documentMode)===11}function u0(n=re()){return/Edge\/\d+/.test(n)}function h0(n=re()){return l0()||u0(n)}function hy(){try{const n=self.localStorage,e=yo();if(n)return n.setItem(e,"1"),n.removeItem(e),h0()?Dr():!0}catch{return yh()&&Dr()}return!1}function yh(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Cl(){return(a0()||Zm()||uy())&&!c0()&&hy()&&!yh()}function dy(){return uy()&&typeof document<"u"}async function d0(){return dy()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},o0);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function f0(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={LOCAL:"local",NONE:"none",SESSION:"session"},Xs=w,fy="persistence";function p0(n,e){if(Xs(Object.values(at).includes(e),n,"invalid-persistence-type"),oc()){Xs(e!==at.SESSION,n,"unsupported-persistence-type");return}if(Xu()){Xs(e===at.NONE,n,"unsupported-persistence-type");return}if(yh()){Xs(e===at.NONE||e===at.LOCAL&&Dr(),n,"unsupported-persistence-type");return}Xs(e===at.NONE||hy(),n,"unsupported-persistence-type")}async function eu(n){await n._initializationPromise;const e=py(),t=fi(fy,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function m0(n,e){const t=py();if(!t)return[];const i=fi(fy,n,e);switch(t.getItem(i)){case at.NONE:return[us];case at.LOCAL:return[Vr,vi];case at.SESSION:return[vi];default:return[]}}function py(){var n;try{return((n=f0())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=w;class yn{constructor(){this.browserResolver=lt(xC),this.cordovaResolver=lt(n0),this.underlyingResolver=null,this._redirectPersistence=vi,this._completeRedirectFn=_c,this._overrideRedirectResult=mh}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,s)}async _openRedirect(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return dy()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return g0(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await d0();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){return n.unwrap()}function y0(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n){return gy(n)}function v0(n,e){var t,i;const s=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(((i=e)===null||i===void 0?void 0:i.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new w0(n,tS(n,e))}else if(s){const r=gy(e),o=e;r&&(o.credential=r,o.tenantId=s.tenantId||void 0,o.email=s.email||void 0,o.phoneNumber=s.phoneNumber||void 0)}}function gy(n){const{_tokenResponse:e}=n instanceof Ye?n.customData:n;if(!e)return null;if(!(n instanceof Ye)&&"temporaryProof"in e&&"phoneNumber"in e)return kt.credentialFromResult(n);const t=e.providerId;if(!t||t===Ys.PASSWORD)return null;let i;switch(t){case Ys.GOOGLE:i=xt;break;case Ys.FACEBOOK:i=Dt;break;case Ys.GITHUB:i=Pt;break;case Ys.TWITTER:i=Ot;break;default:const{oauthIdToken:s,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!r&&!o&&!s&&!a?null:a?t.startsWith("saml.")?hs._create(t,a):$t._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:r}):new is(t).credential({idToken:s,accessToken:r,rawNonce:c})}return n instanceof Ye?i.credentialFromError(n):i.credentialFromResult(n)}function Je(n,e){return e.catch(t=>{throw t instanceof Ye&&v0(n,t),t}).then(t=>{const i=t.operationType,s=t.user;return{operationType:i,credential:_0(t),additionalUserInfo:eS(t),user:Qt.getOrCreate(s)}})}async function tu(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Je(n,t.confirm(i))}}class w0{constructor(e,t){this.resolver=t,this.auth=y0(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Je(my(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._delegate=e,this.multiFactor=rS(e)}static getOrCreate(e){return Qt.USER_MAP.has(e)||Qt.USER_MAP.set(e,new Qt(e)),Qt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Je(this.auth,$g(this._delegate,e))}async linkWithPhoneNumber(e,t){return tu(this.auth,US(this._delegate,e,t))}async linkWithPopup(e){return Je(this.auth,HS(this._delegate,e,yn))}async linkWithRedirect(e){return await eu(ke(this.auth)),nC(this._delegate,e,yn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Je(this.auth,Wg(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return tu(this.auth,VS(this._delegate,e,t))}reauthenticateWithPopup(e){return Je(this.auth,KS(this._delegate,e,yn))}async reauthenticateWithRedirect(e){return await eu(ke(this.auth)),eC(this._delegate,e,yn)}sendEmailVerification(e){return Wb(this._delegate,e)}async unlink(e){return await Nb(this._delegate,e),this}updateEmail(e){return Hb(this._delegate,e)}updatePassword(e){return zb(this._delegate,e)}updatePhoneNumber(e){return BS(this._delegate,e)}updateProfile(e){return Kb(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Gb(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Qt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=w;class nu{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Js(i,"invalid-api-key",{appName:e.name}),Js(i,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?yn:void 0;this._delegate=t.initialize({options:{persistence:I0(i,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(MT),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Qt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){ab(this._delegate,e,t)}applyActionCode(e){return Ob(this._delegate,e)}checkActionCode(e){return Gg(this._delegate,e)}confirmPasswordReset(e,t){return Pb(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Je(this._delegate,Mb(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return $b(this._delegate,e)}isSignInWithEmailLink(e){return Vb(this._delegate,e)}async getRedirectResult(){Js(Cl(),this._delegate,"operation-not-supported-in-this-environment");const e=await sC(this._delegate,yn);return e?Je(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i0(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:s,error:r,complete:o}=jf(e,t,i);return this._delegate.onAuthStateChanged(s,r,o)}onIdTokenChanged(e,t,i){const{next:s,error:r,complete:o}=jf(e,t,i);return this._delegate.onIdTokenChanged(s,r,o)}sendSignInLinkToEmail(e,t){return Ub(this._delegate,e,t)}sendPasswordResetEmail(e,t){return xb(this._delegate,e,t||void 0)}async setPersistence(e){p0(this._delegate,e);let t;switch(e){case at.SESSION:t=vi;break;case at.LOCAL:t=await lt(Vr)._isAvailable()?Vr:uh;break;case at.NONE:t=us;break;default:return Be("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Je(this._delegate,Ab(this._delegate))}signInWithCredential(e){return Je(this._delegate,dc(this._delegate,e))}signInWithCustomToken(e){return Je(this._delegate,Db(this._delegate,e))}signInWithEmailAndPassword(e,t){return Je(this._delegate,Fb(this._delegate,e,t))}signInWithEmailLink(e,t){return Je(this._delegate,Bb(this._delegate,e,t))}signInWithPhoneNumber(e,t){return tu(this._delegate,FS(this._delegate,e,t))}async signInWithPopup(e){return Js(Cl(),this._delegate,"operation-not-supported-in-this-environment"),Je(this._delegate,jS(this._delegate,e,yn))}async signInWithRedirect(e){return Js(Cl(),this._delegate,"operation-not-supported-in-this-environment"),await eu(this._delegate),JS(this._delegate,e,yn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Lb(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}nu.Persistence=at;function jf(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const s=i;return{next:o=>s(o&&Qt.getOrCreate(o)),error:e,complete:t}}function I0(n,e){const t=m0(n,e);if(typeof self<"u"&&!t.includes(Vr)&&t.push(Vr),typeof window<"u")for(const i of[uh,vi])t.includes(i)||t.push(i);return t.includes(us)||t.push(us),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.providerId="phone",this._delegate=new kt(my(ft.auth()))}static credential(e,t){return kt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}_h.PHONE_SIGN_IN_METHOD=kt.PHONE_SIGN_IN_METHOD;_h.PROVIDER_ID=kt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=w;class T0{constructor(e,t,i=ft.app()){var s;E0((s=i.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new LS(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="auth-compat";function S0(n){n.INTERNAL.registerComponent(new dt(b0,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new nu(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hi.EMAIL_SIGNIN,PASSWORD_RESET:Hi.PASSWORD_RESET,RECOVER_EMAIL:Hi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hi.VERIFY_EMAIL}},EmailAuthProvider:qn,FacebookAuthProvider:Dt,GithubAuthProvider:Pt,GoogleAuthProvider:xt,OAuthProvider:is,SAMLAuthProvider:Ea,PhoneAuthProvider:_h,PhoneMultiFactorGenerator:ly,RecaptchaVerifier:T0,TwitterAuthProvider:Ot,Auth:nu,AuthCredential:Os,Error:Ye}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(s0,r0)}S0(ft);var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,vh=vh||{},x=C0||self;function Ca(){}function vc(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function vo(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function k0(n){return Object.prototype.hasOwnProperty.call(n,kl)&&n[kl]||(n[kl]=++A0)}var kl="closure_uid_"+(1e9*Math.random()>>>0),A0=0;function N0(n,e,t){return n.call.apply(n.bind,arguments)}function R0(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function $e(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=N0:$e=R0,$e.apply(null,arguments)}function Xo(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function qe(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function $n(){this.s=this.s,this.o=this.o}var D0=0;$n.prototype.s=!1;$n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),D0!=0)&&k0(this)};$n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yy=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function wh(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Kf(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(vc(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function We(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var x0=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",Ca,e),x.removeEventListener("test",Ca,e)}catch{}return n}();function ka(n){return/^[\s\xa0]*$/.test(n)}var Hf=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Al(n,e){return n<e?-1:n>e?1:0}function wc(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function Lt(n){return wc().indexOf(n)!=-1}function Ih(n){return Ih[" "](n),n}Ih[" "]=Ca;function P0(n){var e=M0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var O0=Lt("Opera"),ds=Lt("Trident")||Lt("MSIE"),_y=Lt("Edge"),iu=_y||ds,vy=Lt("Gecko")&&!(wc().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),L0=wc().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function wy(){var n=x.document;return n?n.documentMode:void 0}var Aa;e:{var Nl="",Rl=function(){var n=wc();if(vy)return/rv:([^\);]+)(\)|;)/.exec(n);if(_y)return/Edge\/([\d\.]+)/.exec(n);if(ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(L0)return/WebKit\/(\S+)/.exec(n);if(O0)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Rl&&(Nl=Rl?Rl[1]:""),ds){var Dl=wy();if(Dl!=null&&Dl>parseFloat(Nl)){Aa=String(Dl);break e}}Aa=Nl}var M0={};function F0(){return P0(function(){let n=0;const e=Hf(String(Aa)).split("."),t=Hf("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var s=e[o]||"",r=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=Al(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Al(s[2].length==0,r[2].length==0)||Al(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var su;if(x.document&&ds){var zf=wy();su=zf||parseInt(Aa,10)||void 0}else su=void 0;var U0=su;function Br(n,e){if(We.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(vy){e:{try{Ih(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:V0[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Br.X.h.call(this)}}qe(Br,We);var V0={2:"touch",3:"pen",4:"mouse"};Br.prototype.h=function(){Br.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wo="closure_listenable_"+(1e6*Math.random()|0),B0=0;function q0(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ha=s,this.key=++B0,this.ba=this.ea=!1}function Ic(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Eh(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Iy(n){const e={};for(const t in n)e[t]=n[t];return e}const Qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ey(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Qf.length;r++)t=Qf[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Ec(n){this.src=n,this.g={},this.h=0}Ec.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ou(n,e,i,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new q0(e,this.src,r,!!i,s),e.ea=t,n.push(e)),e};function ru(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=yy(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ic(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ou(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==i)return s}return-1}var Th="closure_lm_"+(1e6*Math.random()|0),xl={};function Ty(n,e,t,i,s){if(i&&i.once)return Sy(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ty(n,e[r],t,i,s);return null}return t=Ch(t),n&&n[wo]?n.N(e,t,vo(i)?!!i.capture:!!i,s):by(n,e,t,!1,i,s)}function by(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=vo(s)?!!s.capture:!!s,a=Sh(n);if(a||(n[Th]=a=new Ec(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=$0(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)x0||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(ky(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function $0(){function n(t){return e.call(n.src,n.listener,t)}const e=W0;return n}function Sy(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Sy(n,e[r],t,i,s);return null}return t=Ch(t),n&&n[wo]?n.O(e,t,vo(i)?!!i.capture:!!i,s):by(n,e,t,!0,i,s)}function Cy(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Cy(n,e[r],t,i,s);else i=vo(i)?!!i.capture:!!i,t=Ch(t),n&&n[wo]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ou(r,t,i,s),-1<t&&(Ic(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Sh(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ou(e,t,i,s)),(t=-1<n?e[n]:null)&&bh(t))}function bh(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[wo])ru(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(ky(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=Sh(e))?(ru(t,n),t.h==0&&(t.src=null,e[Th]=null)):Ic(n)}}}function ky(n){return n in xl?xl[n]:xl[n]="on"+n}function W0(n,e){if(n.ba)n=!0;else{e=new Br(e,this);var t=n.listener,i=n.ha||n.src;n.ea&&bh(n),n=t.call(i,e)}return n}function Sh(n){return n=n[Th],n instanceof Ec?n:null}var Pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ch(n){return typeof n=="function"?n:(n[Pl]||(n[Pl]=function(e){return n.handleEvent(e)}),n[Pl])}function Ae(){$n.call(this),this.i=new Ec(this),this.P=this,this.I=null}qe(Ae,$n);Ae.prototype[wo]=!0;Ae.prototype.removeEventListener=function(n,e,t,i){Cy(this,n,e,t,i)};function Ve(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new We(e,n);else if(e instanceof We)e.target=e.target||n;else{var s=e;e=new We(i,n),Ey(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Jo(o,i,!0,e)&&s}if(o=e.g=n,s=Jo(o,i,!0,e)&&s,s=Jo(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Jo(o,i,!1,e)&&s}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Ic(t[i]);delete n.g[e],n.h--}}this.I=null};Ae.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};Ae.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Jo(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&ru(n.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var kh=x.JSON.stringify;function G0(){var n=Ry;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class j0{constructor(){this.h=this.g=null}add(e,t){const i=Ay.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Ay=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new K0,n=>n.reset());class K0{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function H0(n){x.setTimeout(()=>{throw n},0)}function Ny(n,e){au||z0(),cu||(au(),cu=!0),Ry.add(n,e)}var au;function z0(){var n=x.Promise.resolve(void 0);au=function(){n.then(Q0)}}var cu=!1,Ry=new j0;function Q0(){for(var n;n=G0();){try{n.h.call(n.g)}catch(t){H0(t)}var e=Ay;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}cu=!1}function Tc(n,e){Ae.call(this),this.h=n||1,this.g=e||x,this.j=$e(this.lb,this),this.l=Date.now()}qe(Tc,Ae);k=Tc.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ve(this,"tick"),this.ca&&(Ah(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ah(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}k.M=function(){Tc.X.M.call(this),Ah(this),delete this.g};function Nh(n,e,t){if(typeof n=="function")t&&(n=$e(n,t));else if(n&&typeof n.handleEvent=="function")n=$e(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(n,e||0)}function Dy(n){n.g=Nh(()=>{n.g=null,n.i&&(n.i=!1,Dy(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Y0 extends $n{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dy(this)}M(){super.M(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(n){$n.call(this),this.h=n,this.g={}}qe(qr,$n);var Yf=[];function xy(n,e,t,i){Array.isArray(t)||(t&&(Yf[0]=t.toString()),t=Yf);for(var s=0;s<t.length;s++){var r=Ty(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Py(n){Eh(n.g,function(e,t){this.g.hasOwnProperty(t)&&bh(e)},n),n.g={}}qr.prototype.M=function(){qr.X.M.call(this),Py(this)};qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bc(){this.g=!0}bc.prototype.Aa=function(){this.g=!1};function X0(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function J0(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function es(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+ek(n,t)+(i?" "+i:"")})}function Z0(n,e){n.info(function(){return"TIMEOUT: "+e})}bc.prototype.info=function(){};function ek(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return kh(t)}catch{return e}}var Ui={},Xf=null;function Sc(){return Xf=Xf||new Ae}Ui.Pa="serverreachability";function Oy(n){We.call(this,Ui.Pa,n)}qe(Oy,We);function $r(n){const e=Sc();Ve(e,new Oy(e))}Ui.STAT_EVENT="statevent";function Ly(n,e){We.call(this,Ui.STAT_EVENT,n),this.stat=e}qe(Ly,We);function ze(n){const e=Sc();Ve(e,new Ly(e,n))}Ui.Qa="timingevent";function My(n,e){We.call(this,Ui.Qa,n),this.size=e}qe(My,We);function Io(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},e)}var Cc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Rh(){}Rh.prototype.h=null;function Jf(n){return n.h||(n.h=n.i())}function Uy(){}var Eo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Dh(){We.call(this,"d")}qe(Dh,We);function xh(){We.call(this,"c")}qe(xh,We);var lu;function kc(){}qe(kc,Rh);kc.prototype.g=function(){return new XMLHttpRequest};kc.prototype.i=function(){return{}};lu=new kc;function To(n,e,t,i){this.l=n,this.j=e,this.m=t,this.U=i||1,this.S=new qr(this),this.O=tk,n=iu?125:void 0,this.T=new Tc(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var tk=45e3,uu={},Na={};k=To.prototype;k.setTimeout=function(n){this.O=n};function hu(n,e,t){n.K=1,n.v=Nc(sn(e)),n.s=t,n.P=!0,By(n,null)}function By(n,e){n.F=Date.now(),bo(n),n.A=sn(n.v);var t=n.A,i=n.U;Array.isArray(i)||(i=[String(i)]),zy(t.i,"t",i),n.C=0,t=n.l.H,n.h=new Vy,n.g=m_(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Y0($e(n.La,n,n.g),n.N)),xy(n.S,n.g,"readystatechange",n.ib),e=n.H?Iy(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),$r(),X0(n.j,n.u,n.A,n.m,n.U,n.s)}k.ib=function(n){n=n.target;const e=this.L;e&&Yt(n)==3?e.l():this.La(n)};k.La=function(n){try{if(n==this.g)e:{const u=Yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||iu||this.g&&(this.h.h||this.g.fa()||np(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?$r(3):$r(2)),Ac(this);var t=this.g.aa();this.Y=t;t:if(qy(this)){var i=np(this.g);n="";var s=i.length,r=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),vr(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,J0(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ka(a)){var l=a;break t}}l=null}if(t=l)es(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,du(this,t);else{this.i=!1,this.o=3,ze(12),ai(this),vr(this);break e}}this.P?($y(this,u,o),iu&&this.i&&u==3&&(xy(this.S,this.T,"tick",this.hb),this.T.start())):(es(this.j,this.m,o,null),du(this,o)),u==4&&ai(this),this.i&&!this.I&&(u==4?h_(this.l,this):(this.i=!1,bo(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),ai(this),vr(this)}}}catch{}finally{}};function qy(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function $y(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=nk(n,t),s==Na){e==4&&(n.o=4,ze(14),i=!1),es(n.j,n.m,null,"[Incomplete Response]");break}else if(s==uu){n.o=4,ze(15),es(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else es(n.j,n.m,s,null),du(n,s);qy(n)&&s!=Na&&s!=uu&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ze(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Vh(e),e.K=!0,ze(11))):(es(n.j,n.m,t,"[Invalid Chunked Response]"),ai(n),vr(n))}k.hb=function(){if(this.g){var n=Yt(this.g),e=this.g.fa();this.C<e.length&&(Ac(this),$y(this,n,e),this.i&&n!=4&&bo(this))}};function nk(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Na:(t=Number(e.substring(t,i)),isNaN(t)?uu:(i+=1,i+t>e.length?Na:(e=e.substr(i,t),n.C=i+t,e)))}k.cancel=function(){this.I=!0,ai(this)};function bo(n){n.V=Date.now()+n.O,Wy(n,n.O)}function Wy(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Io($e(n.gb,n),e)}function Ac(n){n.B&&(x.clearTimeout(n.B),n.B=null)}k.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(Z0(this.j,this.A),this.K!=2&&($r(),ze(17)),ai(this),this.o=2,vr(this)):Wy(this,this.V-n)};function vr(n){n.l.G==0||n.I||h_(n.l,n)}function ai(n){Ac(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ah(n.T),Py(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function du(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||fu(t.h,n))){if(!n.J&&fu(t.h,n)&&t.G==3){try{var i=t.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)xa(t),xc(t);else break e;Uh(t),ze(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=Io($e(t.cb,t),6e3));if(1>=Xy(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ci(t,11)}else if((n.J||t.g==n)&&xa(t),!ka(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.J=i,t.j.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ph(r,r.h),r.h=null))}if(i.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,ee(i.F,i.D,y))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),i=t;var o=n;if(i.sa=p_(i,i.H?i.ka:null,i.V),o.J){Jy(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Ac(a),bo(a)),i.g=o}else l_(i);0<t.i.length&&Pc(t)}else l[0]!="stop"&&l[0]!="close"||ci(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ci(t,7):Fh(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}$r(4)}catch{}}function ik(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(vc(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function sk(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(vc(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Gy(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(vc(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=sk(n),i=ik(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rk(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mi(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof mi){this.h=e!==void 0?e:n.h,Ra(this,n.j),this.s=n.s,this.g=n.g,Da(this,n.m),this.l=n.l,e=n.i;var t=new Wr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Zf(this,t),this.o=n.o}else n&&(t=String(n).match(jy))?(this.h=!!e,Ra(this,t[1]||"",!0),this.s=dr(t[2]||""),this.g=dr(t[3]||"",!0),Da(this,t[4]),this.l=dr(t[5]||"",!0),Zf(this,t[6]||"",!0),this.o=dr(t[7]||"")):(this.h=!!e,this.i=new Wr(null,this.h))}mi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(fr(e,ep,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(fr(e,ep,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(fr(t,t.charAt(0)=="/"?ck:ak,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",fr(t,uk)),n.join("")};function sn(n){return new mi(n)}function Ra(n,e,t){n.j=t?dr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Da(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Zf(n,e,t){e instanceof Wr?(n.i=e,hk(n.i,n.h)):(t||(e=fr(e,lk)),n.i=new Wr(e,n.h))}function ee(n,e,t){n.i.set(e,t)}function Nc(n){return ee(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function dr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function fr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ok),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ok(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ep=/[#\/\?@]/g,ak=/[#\?:]/g,ck=/[#\?]/g,lk=/[#\?@]/g,uk=/#/g;function Wr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Wn(n){n.g||(n.g=new Map,n.h=0,n.i&&rk(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}k=Wr.prototype;k.add=function(n,e){Wn(this),this.i=null,n=Ms(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Ky(n,e){Wn(n),e=Ms(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Hy(n,e){return Wn(n),e=Ms(n,e),n.g.has(e)}k.forEach=function(n,e){Wn(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};k.oa=function(){Wn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};k.W=function(n){Wn(this);let e=[];if(typeof n=="string")Hy(this,n)&&(e=e.concat(this.g.get(Ms(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};k.set=function(n,e){return Wn(this),this.i=null,n=Ms(this,n),Hy(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};k.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function zy(n,e,t){Ky(n,e),0<t.length&&(n.i=null,n.g.set(Ms(n,e),wh(t)),n.h+=t.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Ms(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function hk(n,e){e&&!n.j&&(Wn(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(Ky(this,i),zy(this,s,t))},n)),n.j=e}var dk=class{constructor(n,e){this.h=n,this.g=e}};function Qy(n){this.l=n||fk,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ga&&x.g.Ga()&&x.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fk=10;function Yy(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Xy(n){return n.h?1:n.g?n.g.size:0}function fu(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ph(n,e){n.g?n.g.add(e):n.h=e}function Jy(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Qy.prototype.cancel=function(){if(this.i=Zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Zy(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return wh(n.i)}function Oh(){}Oh.prototype.stringify=function(n){return x.JSON.stringify(n,void 0)};Oh.prototype.parse=function(n){return x.JSON.parse(n,void 0)};function pk(){this.g=new Oh}function mk(n,e,t){const i=t||"";try{Gy(n,function(s,r){let o=s;vo(s)&&(o=kh(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function gk(n,e){const t=new bc;if(x.Image){const i=new Image;i.onload=Xo(Zo,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Xo(Zo,t,i,"TestLoadImage: error",!1,e),i.onabort=Xo(Zo,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Xo(Zo,t,i,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Zo(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function So(n){this.l=n.ac||null,this.j=n.jb||!1}qe(So,Rh);So.prototype.g=function(){return new Rc(this.l,this.j)};So.prototype.i=function(n){return function(){return n}}({});function Rc(n,e){Ae.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Lh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Rc,Ae);var Lh=0;k=Rc.prototype;k.open=function(n,e){if(this.readyState!=Lh)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Gr(this)};k.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||x).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=Lh};k.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Gr(this)),this.g&&(this.readyState=3,Gr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;e_(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function e_(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}k.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Co(this):Gr(this),this.readyState==3&&e_(this)}};k.Va=function(n){this.g&&(this.response=this.responseText=n,Co(this))};k.Ua=function(n){this.g&&(this.response=n,Co(this))};k.ga=function(){this.g&&Co(this)};function Co(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Gr(n)}k.setRequestHeader=function(n,e){this.v.append(n,e)};k.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Gr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var yk=x.JSON.parse;function ce(n){Ae.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=t_,this.K=this.L=!1}qe(ce,Ae);var t_="",_k=/^https?$/i,vk=["POST","PUT"];k=ce.prototype;k.Ka=function(n){this.L=n};k.da=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lu.g(),this.C=this.u?Jf(this.u):Jf(lu),this.g.onreadystatechange=$e(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){tp(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=x.FormData&&n instanceof x.FormData,!(0<=yy(vk,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{s_(this),0<this.B&&((this.K=wk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.qa,this)):this.A=Nh(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){tp(this,r)}};function wk(n){return ds&&F0()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}k.qa=function(){typeof vh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function tp(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,n_(n),Dc(n)}function n_(n){n.D||(n.D=!0,Ve(n,"complete"),Ve(n,"error"))}k.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ve(this,"complete"),Ve(this,"abort"),Dc(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dc(this,!0)),ce.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?i_(this):this.fb())};k.fb=function(){i_(this)};function i_(n){if(n.h&&typeof vh<"u"&&(!n.C[1]||Yt(n)!=4||n.aa()!=2)){if(n.v&&Yt(n)==4)Nh(n.Ha,0,n);else if(Ve(n,"readystatechange"),Yt(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var s=String(n.H).match(jy)[1]||null;if(!s&&x.self&&x.self.location){var r=x.self.location.protocol;s=r.substr(0,r.length-1)}i=!_k.test(s?s.toLowerCase():"")}t=i}if(t)Ve(n,"complete"),Ve(n,"success");else{n.m=6;try{var o=2<Yt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",n_(n)}}finally{Dc(n)}}}}function Dc(n,e){if(n.g){s_(n);const t=n.g,i=n.C[0]?Ca:null;n.g=null,n.C=null,e||Ve(n,"ready");try{t.onreadystatechange=i}catch{}}}function s_(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}function Yt(n){return n.g?n.g.readyState:0}k.aa=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),yk(e)}};function np(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case t_:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function r_(n){let e="";return Eh(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function Mh(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=r_(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ee(n,e,t))}function Zs(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function o_(n){this.Ca=0,this.i=[],this.j=new bc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Zs("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Zs("baseRetryDelayMs",5e3,n),this.bb=Zs("retryDelaySeedMs",1e4,n),this.$a=Zs("forwardChannelMaxRetries",2,n),this.ta=Zs("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Qy(n&&n.concurrentRequestLimit),this.Fa=new pk,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=o_.prototype;k.ma=8;k.G=1;function Fh(n){if(a_(n),n.G==3){var e=n.U++,t=sn(n.F);ee(t,"SID",n.I),ee(t,"RID",e),ee(t,"TYPE","terminate"),ko(n,t),e=new To(n,n.j,e,void 0),e.K=2,e.v=Nc(sn(t)),t=!1,x.navigator&&x.navigator.sendBeacon&&(t=x.navigator.sendBeacon(e.v.toString(),"")),!t&&x.Image&&(new Image().src=e.v,t=!0),t||(e.g=m_(e.l,null),e.g.da(e.v)),e.F=Date.now(),bo(e)}f_(n)}function xc(n){n.g&&(Vh(n),n.g.cancel(),n.g=null)}function a_(n){xc(n),n.u&&(x.clearTimeout(n.u),n.u=null),xa(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function Pc(n){Yy(n.h)||n.m||(n.m=!0,Ny(n.Ja,n),n.C=0)}function Ik(n,e){return Xy(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Io($e(n.Ja,n,e),d_(n,n.C)),n.C++,!0)}k.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new To(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=Iy(r),Ey(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var i=this.i[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=c_(this,s,e),t=sn(this.F),ee(t,"RID",n),ee(t,"CVER",22),this.D&&ee(t,"X-HTTP-Session-Id",this.D),ko(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(r_(r)))+"&"+e:this.o&&Mh(t,this.o,r)),Ph(this.h,s),this.Ya&&ee(t,"TYPE","init"),this.O?(ee(t,"$req",e),ee(t,"SID","null"),s.Z=!0,hu(s,t,null)):hu(s,t,e),this.G=2}}else this.G==3&&(n?ip(this,n):this.i.length==0||Yy(this.h)||ip(this))};function ip(n,e){var t;e?t=e.m:t=n.U++;const i=sn(n.F);ee(i,"SID",n.I),ee(i,"RID",t),ee(i,"AID",n.T),ko(n,i),n.o&&n.s&&Mh(i,n.o,n.s),t=new To(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=c_(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Ph(n.h,t),hu(t,i,e)}function ko(n,e){n.ia&&Eh(n.ia,function(t,i){ee(e,i,t)}),n.l&&Gy({},function(t,i){ee(e,i,t)})}function c_(n,e,t){t=Math.min(n.i.length,t);var i=n.l?$e(n.l.Ra,n.l,n):null;e:{var s=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=s[c].h;const u=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{mk(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,i}function l_(n){n.g||n.u||(n.Z=1,Ny(n.Ia,n),n.A=0)}function Uh(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Io($e(n.Ia,n),d_(n,n.A)),n.A++,!0)}k.Ia=function(){if(this.u=null,u_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Io($e(this.eb,this),n)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),xc(this),u_(this))};function Vh(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function u_(n){n.g=new To(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=sn(n.sa);ee(e,"RID","rpc"),ee(e,"SID",n.I),ee(e,"CI",n.L?"0":"1"),ee(e,"AID",n.T),ee(e,"TYPE","xmlhttp"),ko(n,e),n.o&&n.s&&Mh(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Nc(sn(e)),t.s=null,t.P=!0,By(t,n)}k.cb=function(){this.v!=null&&(this.v=null,xc(this),Uh(this),ze(19))};function xa(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function h_(n,e){var t=null;if(n.g==e){xa(n),Vh(n),n.g=null;var i=2}else if(fu(n.h,e))t=e.D,Jy(n.h,e),i=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=Sc(),Ve(i,new My(i,t)),Pc(n)}else l_(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(i==1&&Ik(n,e)||i==2&&Uh(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:ci(n,5);break;case 4:ci(n,10);break;case 3:ci(n,6);break;default:ci(n,2)}}}function d_(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ci(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var i=$e(n.kb,n);t||(t=new mi("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Ra(t,"https"),Nc(t)),gk(t.toString(),i)}else ze(2);n.G=0,n.l&&n.l.va(e),f_(n),a_(n)}k.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function f_(n){if(n.G=0,n.la=[],n.l){const e=Zy(n.h);(e.length!=0||n.i.length!=0)&&(Kf(n.la,e),Kf(n.la,n.i),n.h.i.length=0,wh(n.i),n.i.length=0),n.l.ua()}}function p_(n,e,t){var i=t instanceof mi?sn(t):new mi(t,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Da(i,i.m);else{var s=x.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new mi(null,void 0);i&&Ra(r,i),e&&(r.g=e),s&&Da(r,s),t&&(r.l=t),i=r}return t=n.D,e=n.za,t&&e&&ee(i,t,e),ee(i,"VER",n.ma),ko(n,i),i}function m_(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new ce(new So({jb:!0})):new ce(n.ra),e.Ka(n.H),e}function g_(){}k=g_.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function Pa(){if(ds&&!(10<=Number(U0)))throw Error("Environmental error: no available transport.")}Pa.prototype.g=function(n,e){return new pt(n,e)};function pt(n,e){Ae.call(this),this.g=new o_(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!ka(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ka(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Fs(this)}qe(pt,Ae);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ze(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=p_(n,null,n.V),Pc(n)};pt.prototype.close=function(){Fh(this.g)};pt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=kh(n),n=t);e.i.push(new dk(e.ab++,n)),e.G==3&&Pc(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,Fh(this.g),delete this.g,pt.X.M.call(this)};function y_(n){Dh.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}qe(y_,Dh);function __(){xh.call(this),this.status=1}qe(__,xh);function Fs(n){this.g=n}qe(Fs,g_);Fs.prototype.xa=function(){Ve(this.g,"a")};Fs.prototype.wa=function(n){Ve(this.g,new y_(n))};Fs.prototype.va=function(n){Ve(this.g,new __)};Fs.prototype.ua=function(){Ve(this.g,"b")};Pa.prototype.createWebChannel=Pa.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Cc.NO_ERROR=0;Cc.TIMEOUT=8;Cc.HTTP_ERROR=6;Fy.COMPLETE="complete";Uy.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var Ek=function(){return new Pa},Tk=function(){return Sc()},Ol=Cc,bk=Fy,Sk=Ui,sp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ck=So,ea=Uy,kk=ce;const rp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Ds("@firebase/firestore");function pu(){return An.logLevel}function Ak(n){An.setLogLevel(n)}function v(n,...e){if(An.logLevel<=B.DEBUG){const t=e.map(Bh);An.debug(`Firestore (${Us}): ${n}`,...t)}}function de(n,...e){if(An.logLevel<=B.ERROR){const t=e.map(Bh);An.error(`Firestore (${Us}): ${n}`,...t)}}function fs(n,...e){if(An.logLevel<=B.WARN){const t=e.map(Bh);An.warn(`Firestore (${Us}): ${n}`,...t)}}function Bh(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function C(n="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+n;throw de(e),new Error(e)}function D(n,e){n||C()}function Nk(n,e){n||C()}function b(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Ye{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xk{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new Se;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Se,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Se)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(D(typeof i.accessToken=="string"),new v_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new Ee(e)}}class Pk{constructor(e,t,i,s){this.h=e,this.l=t,this.m=i,this.g=s,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(D(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ok{constructor(e,t,i,s){this.h=e,this.l=t,this.m=i,this.g=s}getToken(){return Promise.resolve(new Pk(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const i=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(D(typeof t.token=="string"),this.A=t.token,new Lk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Fk(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function P(n,e){return n<e?-1:n>e?1:0}function ps(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}function I_(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ie(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new ie(0,0))}static max(){return new N(new ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,i){t===void 0?t=0:t>e.length&&C(),i===void 0?i=e.length-t:i>e.length-t&&C(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends jr{construct(e,t,i){return new q(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new q(t)}static emptyPath(){return new q([])}}const Uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends jr{construct(e,t,i){return new fe(e,t,i)}static isValidIdentifier(e){return Uk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new _(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new _(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(q.fromString(e))}static fromName(e){return new E(q.fromString(e).popFirst(5))}static empty(){return new E(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new q(e.slice()))}}/**
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
 */class E_{constructor(e,t,i,s){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=s}}function mu(n){return n.fields.find(e=>e.kind===2)}function Zn(n){return n.fields.filter(e=>e.kind!==2)}E_.UNKNOWN_ID=-1;class Vk{constructor(e,t){this.fieldPath=e,this.kind=t}}class Oa{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Oa(0,mt.min())}}function T_(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=N.fromTimestamp(i===1e9?new ie(t+1,0):new ie(t,i));return new mt(s,E.empty(),e)}function b_(n){return new mt(n.readTime,n.key,-1)}class mt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new mt(N.min(),E.empty(),-1)}static max(){return new mt(N.max(),E.empty(),-1)}}function qh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:P(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==S_)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,i)=>{t(e)})}static reject(e){return new m((t,i)=>{i(e)})}static waitFor(e){return new m((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=m.resolve(!1);for(const i of e)t=t.next(s=>s?m.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new m((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new m((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Se,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new wr(e,t.error)):this.P.resolve()},this.transaction.onerror=i=>{const s=$h(i.target.error);this.P.reject(new wr(e,s))}}static open(e,t,i,s){try{return new Oc(t,e.transaction(s,i))}catch(r){throw new wr(t,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new qk(t)}}class St{constructor(e,t,i){this.name=e,this.version=t,this.S=i,St.D(re())===12.2&&de("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),ti(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Dr())return!1;if(St.N())return!0;const e=re(),t=St.D(e),i=0<t&&t<10,s=St.k(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static k(e){const t=e.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async F(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const o=r.target.result;t(o)},s.onblocked=()=>{i(new wr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const o=r.target.error;o.name==="VersionError"?i(new _(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new _(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new wr(e,o))},s.onupgradeneeded=r=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,s.transaction,r.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,s){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Oc.open(this.db,e,r?"readonly":"readwrite",i),c=s(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),m.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Bk{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return ti(this.U.delete())}}class wr extends _{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function jn(n){return n.name==="IndexedDbTransactionError"}class qk{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),ti(i)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),ti(this.store.add(e))}get(e){return ti(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),ti(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),ti(this.store.count())}W(e,t){const i=this.options(e,t);if(i.index||typeof this.store.getAll!="function"){const s=this.cursor(i),r=[];return this.H(s,(o,a)=>{r.push(a)}).next(()=>r)}{const s=this.store.getAll(i.range);return new m((r,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{r(a.target.result)}})}}J(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new m((s,r)=>{i.onerror=o=>{r(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}Y(e,t){v("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.X=!1;const s=this.cursor(i);return this.H(s,(r,o,a)=>a.delete())}Z(e,t){let i;t?i=e:(i={},t=e);const s=this.cursor(i);return this.H(s,t)}tt(e){const t=this.cursor({});return new m((i,s)=>{t.onerror=r=>{const o=$h(r.target.error);s(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}H(e,t){const i=[];return new m((s,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Bk(a),l=t(a.primaryKey,a.value,c);if(l instanceof m){const u=l.catch(h=>(c.done(),m.reject(h)));i.push(u)}c.isDone?s():c.G===null?a.continue():a.continue(c.G)}}).next(()=>m.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.X?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ti(n){return new m((e,t)=>{n.onsuccess=i=>{const s=i.target.result;e(s)},n.onerror=i=>{const s=$h(i.target.error);t(s)}})}let op=!1;function $h(n){const e=St.D(re());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new _("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return op||(op=!0,setTimeout(()=>{throw i},0)),i}}return n}class $k{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){jn(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Gn(t)}await this.nt(6e4)})}}class Wk{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const i=new Set;let s=t,r=!0;return m.doWhile(()=>r===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!i.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,i.add(o)});r=!1})).next(()=>t-s)}rt(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,i).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,r)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let i=e;return t.changes.forEach((s,r)=>{const o=b_(r);qh(o,i)>0&&(i=o)}),new mt(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class tt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>t.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function k_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt.at=-1;class le{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Le.RED,this.left=s!=null?s:Le.EMPTY,this.right=r!=null?r:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Le(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(n,e,t,i,s){return this}insert(n,e,t){return new Le(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cp(this.data.getIterator())}getIteratorFrom(e){return new cp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof H)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new H(this.comparator);return t.data=e,t}}class cp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zi(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new ut([])}unionWith(e){let t=new H(fe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if(D(!!n),typeof n=="string"){let e=0;const t=jk.exec(n);if(D(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ii(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function A_(n){const e=n.mapValue.fields.__previous_value__;return Wh(e)?A_(e):e}function Kr(n){const e=Nn(n.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,i,s,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Rn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}function Ao(n){return n==null}function Hr(n){return n===0&&1/n==-1/0}function N_(n){return typeof n=="number"&&Number.isInteger(n)&&!Hr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ha={nullValue:"NULL_VALUE"};function Ei(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wh(n)?4:R_(n)?9007199254740991:10:C()}function Wt(n,e){if(n===e)return!0;const t=Ei(n);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Nn(i.timestampValue),o=Nn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ii(i.bytesValue).isEqual(Ii(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=ae(i.doubleValue),o=ae(s.doubleValue);return r===o?Hr(r)===Hr(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return ps(n.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(ap(r)!==ap(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Wt(r[a],o[a])))return!1;return!0}(n,e);default:return C()}}function zr(n,e){return(n.values||[]).find(t=>Wt(t,e))!==void 0}function Dn(n,e){if(n===e)return 0;const t=Ei(n),i=Ei(e);if(t!==i)return P(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=ae(s.integerValue||s.doubleValue),a=ae(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return lp(n.timestampValue,e.timestampValue);case 4:return lp(Kr(n),Kr(e));case 5:return P(n.stringValue,e.stringValue);case 6:return function(s,r){const o=Ii(s),a=Ii(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=P(o[c],a[c]);if(l!==0)return l}return P(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=P(ae(s.latitude),ae(r.latitude));return o!==0?o:P(ae(s.longitude),ae(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Dn(o[c],a[c]);if(l)return l}return P(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===_n.mapValue&&r===_n.mapValue)return 0;if(s===_n.mapValue)return 1;if(r===_n.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=P(a[u],l[u]);if(h!==0)return h;const d=Dn(o[a[u]],c[l[u]]);if(d!==0)return d}return P(a.length,l.length)}(n.mapValue,e.mapValue);default:throw C()}}function lp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return P(n,e);const t=Nn(n),i=Nn(e),s=P(t.seconds,i.seconds);return s!==0?s:P(t.nanos,i.nanos)}function rs(n){return gu(n)}function gu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=Nn(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ii(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,E.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=gu(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${gu(i.fields[a])}`;return r+"}"}(n.mapValue):C();var e,t}function Ti(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yu(n){return!!n&&"integerValue"in n}function Qr(n){return!!n&&"arrayValue"in n}function up(n){return!!n&&"nullValue"in n}function hp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function da(n){return!!n&&"mapValue"in n}function Ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ir(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ir(n.arrayValue.values[t]);return e}return Object.assign({},n)}function R_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Hk(n){return"nullValue"in n?ha:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ti(Rn.empty(),E.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:C()}function zk(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ti(Rn.empty(),E.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?_n:C()}function dp(n,e){const t=Dn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function fp(n,e){const t=Dn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!da(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ir(t)}setAll(e){let t=fe.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=Ir(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());da(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Vi(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Me(Ir(this.value))}}function D_(n){const e=[];return Vi(n.fields,(t,i)=>{const s=new fe([t]);if(da(i)){const r=D_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,i,s,r,o){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Y(e,0,N.min(),N.min(),Me.empty(),0)}static newFoundDocument(e,t,i){return new Y(e,1,t,N.min(),i,0)}static newNoDocument(e,t){return new Y(e,2,t,N.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Y(e,3,t,N.min(),Me.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Y&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qk{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function pp(n,e=null,t=[],i=[],s=null,r=null,o=null){return new Qk(n,e,t,i,s,r,o)}function bi(n){const e=b(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+rs(s.value);var s}).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ao(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>rs(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>rs(i)).join(",")),e.ht=t}return e.ht}function Yk(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${rs(i.value)}`;var i}).join(", ")}]`),Ao(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>rs(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>rs(t)).join(",")),`Target(${e})`}function No(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!sA(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!Wt(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_p(n.startAt,e.startAt)&&_p(n.endAt,e.endAt)}function La(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ma(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function mp(n,e,t){let i=ha,s=!0;for(const r of Ma(n,e)){let o=ha,a=!0;switch(r.op){case"<":case"<=":o=Hk(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=ha}dp({value:i,inclusive:s},{value:o,inclusive:a})<0&&(i=o,s=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];dp({value:i,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(i=o,s=t.inclusive);break}}return{value:i,inclusive:s}}function gp(n,e,t){let i=_n,s=!0;for(const r of Ma(n,e)){let o=_n,a=!0;switch(r.op){case">=":case">":o=zk(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=_n}fp({value:i,inclusive:s},{value:o,inclusive:a})>0&&(i=o,s=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];fp({value:i,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(i=o,s=t.inclusive);break}}return{value:i,inclusive:s}}class Fe extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,i):new Xk(e,t,i):t==="array-contains"?new eA(e,i):t==="in"?new tA(e,i):t==="not-in"?new nA(e,i):t==="array-contains-any"?new iA(e,i):new Fe(e,t,i)}static lt(e,t,i){return t==="in"?new Jk(e,i):new Zk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(Dn(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.ft(Dn(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xk extends Fe{constructor(e,t,i){super(e,t,i),this.key=E.fromName(i.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.ft(t)}}class Jk extends Fe{constructor(e,t){super(e,"in",t),this.keys=x_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Zk extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=x_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function x_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>E.fromName(i.referenceValue))}class eA extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qr(t)&&zr(t.arrayValue,this.value)}}class tA extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zr(this.value.arrayValue,t)}}class nA extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zr(this.value.arrayValue,t)}}class iA extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>zr(this.value.arrayValue,i))}}class xn{constructor(e,t){this.position=e,this.inclusive=t}}class os{constructor(e,t="asc"){this.field=e,this.dir=t}}function sA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function yp(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=E.comparator(E.fromName(o.referenceValue),t.key):i=Dn(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function _p(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Wt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function P_(n,e,t,i,s,r,o,a){return new ln(n,e,t,i,s,r,o,a)}function Vs(n){return new ln(n)}function vp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function jh(n){for(const e of n.filters)if(e.dt())return e.field;return null}function Kh(n){return n.collectionGroup!==null}function ms(n){const e=b(n);if(e._t===null){e._t=[];const t=jh(e),i=Gh(e);if(t!==null&&i===null)t.isKeyField()||e._t.push(new os(t)),e._t.push(new os(fe.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new os(fe.keyField(),r))}}}return e._t}function rt(n){const e=b(n);if(!e.wt)if(e.limitType==="F")e.wt=pp(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of ms(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new os(r.field,o))}const i=e.endAt?new xn(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new xn(e.startAt.position,e.startAt.inclusive):null;e.wt=pp(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.wt}function Fa(n,e,t){return new ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ro(n,e){return No(rt(n),rt(e))&&n.limitType===e.limitType}function O_(n){return`${bi(rt(n))}|lt:${n.limitType}`}function _u(n){return`Query(target=${Yk(rt(n))}; limitType=${n.limitType})`}function Hh(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):E.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,r,o){const a=yp(s,r,o);return s.inclusive?a<=0:a<0}(t.startAt,ms(t),i)||t.endAt&&!function(s,r,o){const a=yp(s,r,o);return s.inclusive?a>=0:a>0}(t.endAt,ms(t),i))}(n,e)}function L_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function M_(n){return(e,t)=>{let i=!1;for(const s of ms(n)){const r=rA(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function rA(n,e,t){const i=n.field.isKeyField()?E.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Dn(a,c):C()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(e)?"-0":e}}function U_(n){return{integerValue:""+n}}function V_(n,e){return N_(e)?U_(e):F_(n,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function oA(n,e,t){return n instanceof gs?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Si?q_(n,e):n instanceof Ci?$_(n,e):function(i,s){const r=B_(i,s),o=wp(r)+wp(i.yt);return yu(r)&&yu(i.yt)?U_(o):F_(i.It,o)}(n,e)}function aA(n,e,t){return n instanceof Si?q_(n,e):n instanceof Ci?$_(n,e):t}function B_(n,e){return n instanceof ys?yu(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class gs extends Lc{}class Si extends Lc{constructor(e){super(),this.elements=e}}function q_(n,e){const t=W_(e);for(const i of n.elements)t.some(s=>Wt(s,i))||t.push(i);return{arrayValue:{values:t}}}class Ci extends Lc{constructor(e){super(),this.elements=e}}function $_(n,e){let t=W_(e);for(const i of n.elements)t=t.filter(s=>!Wt(s,i));return{arrayValue:{values:t}}}class ys extends Lc{constructor(e,t){super(),this.It=e,this.yt=t}}function wp(n){return ae(n.integerValue||n.doubleValue)}function W_(n){return Qr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.field=e,this.transform=t}}function cA(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Si&&i instanceof Si||t instanceof Ci&&i instanceof Ci?ps(t.elements,i.elements,Wt):t instanceof ys&&i instanceof ys?Wt(t.yt,i.yt):t instanceof gs&&i instanceof gs}(n.transform,e.transform)}class lA{constructor(e,t){this.version=e,this.transformResults=t}}class te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new te}static exists(e){return new te(void 0,e)}static updateTime(e){return new te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mc{}function G_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qs(n.key,te.none()):new Bs(n.key,n.data,te.none());{const t=n.data,i=Me.empty();let s=new H(fe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new un(n.key,i,new ut(s.toArray()),te.none())}}function uA(n,e,t){n instanceof Bs?function(i,s,r){const o=i.value.clone(),a=Ep(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof un?function(i,s,r){if(!fa(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Ep(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(j_(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,i){return n instanceof Bs?function(s,r,o,a){if(!fa(s.precondition,r))return o;const c=s.value.clone(),l=Tp(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof un?function(s,r,o,a){if(!fa(s.precondition,r))return o;const c=Tp(s.fieldTransforms,a,r),l=r.data;return l.setAll(j_(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,i):function(s,r,o){return fa(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function hA(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=B_(i.transform,s||null);r!=null&&(t===null&&(t=Me.empty()),t.set(i.field,r))}return t||null}function Ip(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&ps(t,i,(s,r)=>cA(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bs extends Mc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends Mc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function j_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ep(n,e,t){const i=new Map;D(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,aA(o,a,t[s]))}return i}function Tp(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,oA(r,o,e))}return i}class qs extends Mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zh extends Mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,V;function K_(n){switch(n){default:return C();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function H_(n){if(n===void 0)return de("GRPC error has no .code"),g.UNKNOWN;switch(n){case pe.OK:return g.OK;case pe.CANCELLED:return g.CANCELLED;case pe.UNKNOWN:return g.UNKNOWN;case pe.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case pe.INTERNAL:return g.INTERNAL;case pe.UNAVAILABLE:return g.UNAVAILABLE;case pe.UNAUTHENTICATED:return g.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case pe.NOT_FOUND:return g.NOT_FOUND;case pe.ALREADY_EXISTS:return g.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return g.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case pe.ABORTED:return g.ABORTED;case pe.OUT_OF_RANGE:return g.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return g.UNIMPLEMENTED;case pe.DATA_LOSS:return g.DATA_LOSS;default:return C()}}(V=pe||(pe={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return k_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new le(E.comparator);function nt(){return fA}const z_=new le(E.comparator);function pr(...n){let e=z_;for(const t of n)e=e.insert(t.key,t);return e}function Q_(n){let e=z_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ft(){return Tr()}function Y_(){return Tr()}function Tr(){return new Kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const pA=new le(E.comparator),mA=new H(E.comparator);function O(...n){let e=mA;for(const t of n)e=e.add(t);return e}const gA=new H(P);function Fc(){return gA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new xo(N.min(),s,Fc(),nt(),O())}}class Po{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Po(i,t,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,i,s){this.Tt=e,this.removedTargetIds=t,this.key=i,this.Et=s}}class X_{constructor(e,t){this.targetId=e,this.At=t}}class J_{constructor(e,t,i=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class bp{constructor(){this.Rt=0,this.bt=Cp(),this.Pt=ye.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=O(),t=O(),i=O();return this.bt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:C()}}),new Po(this.Pt,this.vt,e,t,i)}Nt(){this.Vt=!1,this.bt=Cp()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class yA{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=nt(),this.qt=Sp(),this.Kt=new H(P)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const i=this.zt(t);switch(e.state){case 0:this.Ht(t)&&i.Ct(e.resumeToken);break;case 1:i.Ft(),i.St||i.Nt(),i.Ct(e.resumeToken);break;case 2:i.Ft(),i.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(i.$t(),i.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),i.Ct(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((i,s)=>{this.Ht(s)&&t(s)})}Yt(e){const t=e.targetId,i=e.At.count,s=this.Xt(t);if(s){const r=s.target;if(La(r))if(i===0){const o=new E(r.path);this.jt(t,o,Y.newNoDocument(o,N.min()))}else D(i===1);else this.Zt(t)!==i&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&La(a.target)){const c=new E(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Y.newNoDocument(c,e))}r.Dt&&(t.set(o,r.xt()),r.Nt())}});let i=O();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const s=new xo(e,t,this.Kt,this.Ut,i);return this.Ut=nt(),this.qt=Sp(),this.Kt=new H(P),s}Qt(e,t){if(!this.Ht(e))return;const i=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,i),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,i){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,t)?s.kt(t,1):s.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),i&&(this.Ut=this.Ut.insert(t,i))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new bp,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new H(P),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new bp),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Sp(){return new le(E.comparator)}function Cp(){return new le(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wA{constructor(e,t){this.databaseId=e,this.gt=t}}function Yr(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z_(n,e){return n.gt?e.toBase64():e.toUint8Array()}function IA(n,e){return Yr(n,e.toTimestamp())}function Ce(n){return D(!!n),N.fromTimestamp(function(e){const t=Nn(e);return new ie(t.seconds,t.nanos)}(n))}function Qh(n,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function ev(n){const e=q.fromString(n);return D(cv(e)),e}function Xr(n,e){return Qh(n.databaseId,e.path)}function Vt(n,e){const t=ev(e);if(t.get(1)!==n.databaseId.projectId)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(nv(t))}function vu(n,e){return Qh(n.databaseId,e)}function tv(n){const e=ev(n);return e.length===4?q.emptyPath():nv(e)}function Jr(n){return new q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nv(n){return D(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kp(n,e,t){return{name:Xr(n,e),fields:t.value.mapValue.fields}}function iv(n,e,t){const i=Vt(n,e.name),s=Ce(e.updateTime),r=new Me({mapValue:{fields:e.fields}}),o=Y.newFoundDocument(i,s,r);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function EA(n,e){return"found"in e?function(t,i){D(!!i.found),i.found.name,i.found.updateTime;const s=Vt(t,i.found.name),r=Ce(i.found.updateTime),o=new Me({mapValue:{fields:i.found.fields}});return Y.newFoundDocument(s,r,o)}(n,e):"missing"in e?function(t,i){D(!!i.missing),D(!!i.readTime);const s=Vt(t,i.missing),r=Ce(i.readTime);return Y.newNoDocument(s,r)}(n,e):C()}function TA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.gt?(D(l===void 0||typeof l=="string"),ye.fromBase64String(l||"")):(D(l===void 0||l instanceof Uint8Array),ye.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:H_(c.code);return new _(l,c.message||"")}(o);t=new J_(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Vt(n,i.document.name),r=Ce(i.document.updateTime),o=new Me({mapValue:{fields:i.document.fields}}),a=Y.newFoundDocument(s,r,o),c=i.targetIds||[],l=i.removedTargetIds||[];t=new pa(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Vt(n,i.document),r=i.readTime?Ce(i.readTime):N.min(),o=Y.newNoDocument(s,r),a=i.removedTargetIds||[];t=new pa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Vt(n,i.document),r=i.removedTargetIds||[];t=new pa([],r,s,null)}else{if(!("filter"in e))return C();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new dA(s),o=i.targetId;t=new X_(o,r)}}return t}function Zr(n,e){let t;if(e instanceof Bs)t={update:kp(n,e.key,e.value)};else if(e instanceof qs)t={delete:Xr(n,e.key)};else if(e instanceof un)t={update:kp(n,e.key,e.data),updateMask:RA(e.fieldMask)};else{if(!(e instanceof zh))return C();t={verify:Xr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof gs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Si)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ci)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ys)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw C()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:IA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:C()}(n,e.precondition)),t}function wu(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?te.updateTime(Ce(s.updateTime)):s.exists!==void 0?te.exists(s.exists):te.none()}(e.currentDocument):te.none(),i=e.updateTransforms?e.updateTransforms.map(s=>function(r,o){let a=null;if("setToServerValue"in o)D(o.setToServerValue==="REQUEST_TIME"),a=new gs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Si(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Ci(l)}else"increment"in o?a=new ys(r,o.increment):C();const c=fe.fromServerFormat(o.fieldPath);return new Do(c,a)}(n,s)):[];if(e.update){e.update.name;const s=Vt(n,e.update.name),r=new Me({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ut(c.map(l=>fe.fromServerFormat(l)))}(e.updateMask);return new un(s,r,o,t,i)}return new Bs(s,r,t,i)}if(e.delete){const s=Vt(n,e.delete);return new qs(s,t)}if(e.verify){const s=Vt(n,e.verify);return new zh(s,t)}return C()}function bA(n,e){return n&&n.length>0?(D(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?Ce(i.updateTime):Ce(s);return r.isEqual(N.min())&&(r=Ce(s)),new lA(r,i.transformResults||[])}(t,e))):[]}function sv(n,e){return{documents:[vu(n,e.path)]}}function rv(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=vu(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=vu(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(hp(h.value))return{unaryFilter:{field:Qi(h.field),op:"IS_NAN"}};if(up(h.value))return{unaryFilter:{field:Qi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(hp(h.value))return{unaryFilter:{field:Qi(h.field),op:"IS_NOT_NAN"}};if(up(h.value))return{unaryFilter:{field:Qi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(h.field),op:kA(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Qi(u.field),direction:CA(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.gt||Ao(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function ov(n){let e=tv(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){D(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=av(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new os(ts(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ao(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new xn(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new xn(d,h)}(t.endAt)),P_(e,s,o,r,a,"F",c,l)}function SA(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function av(n){return n?n.unaryFilter!==void 0?[NA(n)]:n.fieldFilter!==void 0?[AA(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>av(e)).reduce((e,t)=>e.concat(t)):C():[]}function CA(n){return _A[n]}function kA(n){return vA[n]}function Qi(n){return{fieldPath:n.canonicalString()}}function ts(n){return fe.fromServerFormat(n.fieldPath)}function AA(n){return Fe.create(ts(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(n.fieldFilter.op),n.fieldFilter.value)}function NA(n){switch(n.unaryFilter.op){case"IS_NAN":const e=ts(n.unaryFilter.field);return Fe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=ts(n.unaryFilter.field);return Fe.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ts(n.unaryFilter.field);return Fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return C()}}function RA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ap(e)),e=DA(n.get(t),e);return Ap(e)}function DA(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Ap(n){return n+""}function Ut(n){const e=n.length;if(D(e>=2),e===2)return D(n.charAt(0)===""&&n.charAt(1)===""),q.emptyPath();const t=e-2,i=[];let s="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&C(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),i.push(c);break;case"":s+=n.substring(r,o),s+="\0";break;case"":s+=n.substring(r,o+1);break;default:C()}r=o+2}return new q(i)}/**
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
 */const Np=["userId","batchId"];/**
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
 */function ma(n,e){return[n,Xe(e)]}function lv(n,e,t){return[n,Xe(e),t]}const xA={},PA=["prefixPath","collectionGroup","readTime","documentId"],OA=["prefixPath","collectionGroup","documentId"],LA=["collectionGroup","readTime","prefixPath","documentId"],MA=["canonicalId","targetId"],FA=["targetId","path"],UA=["path","targetId"],VA=["collectionId","parent"],BA=["indexId","uid"],qA=["uid","sequenceNumber"],$A=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],WA=["indexId","uid","orderedDocumentKey"],GA=["userId","collectionPath","documentId"],jA=["userId","collectionPath","largestBatchId"],KA=["userId","collectionGroup","largestBatchId"],uv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],HA=[...uv,"documentOverlays"],hv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dv=hv,zA=[...dv,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends C_{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function De(n,e){const t=b(n);return St.M(t.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&uA(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Er(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Er(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Y_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const c=G_(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),O())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(t,i)=>Ip(t,i))&&ps(this.baseMutations,e.baseMutations,(t,i)=>Ip(t,i))}}class Xh{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){D(e.mutations.length===i.length);let s=pA;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Xh(e,t,i,s)}}/**
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
 */class Jh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class En{constructor(e,t,i,s,r=N.min(),o=N.min(),a=ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new En(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.re=e}}function QA(n,e){let t;if(e.document)t=iv(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=E.fromSegments(e.noDocument.path),s=Ai(e.noDocument.readTime);t=Y.newNoDocument(i,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return C();{const i=E.fromSegments(e.unknownDocument.path),s=Ai(e.unknownDocument.version);t=Y.newUnknownDocument(i,s)}}return e.readTime&&t.setReadTime(function(i){const s=new ie(i[0],i[1]);return N.fromTimestamp(s)}(e.readTime)),t}function Rp(n,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ua(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(s,r){return{name:Xr(s,r.key),fields:r.data.value.mapValue.fields,updateTime:Yr(s,r.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:ki(e.version)};else{if(!e.isUnknownDocument())return C();i.unknownDocument={path:t.path.toArray(),version:ki(e.version)}}return i}function Ua(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ki(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ai(n){const e=new ie(n.seconds,n.nanoseconds);return N.fromTimestamp(e)}function ni(n,e){const t=(e.baseMutations||[]).map(r=>wu(n.re,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const i=e.mutations.map(r=>wu(n.re,r)),s=ie.fromMillis(e.localWriteTimeMs);return new Yh(e.batchId,s,t,i)}function mr(n){const e=Ai(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ai(n.lastLimboFreeSnapshotVersion):N.min();let i;var s;return n.query.documents!==void 0?(D((s=n.query).documents.length===1),i=rt(Vs(tv(s.documents[0])))):i=function(r){return rt(ov(r))}(n.query),new En(i,n.targetId,0,n.lastListenSequenceNumber,e,t,ye.fromBase64String(n.resumeToken))}function pv(n,e){const t=ki(e.snapshotVersion),i=ki(e.lastLimboFreeSnapshotVersion);let s;s=La(e.target)?sv(n.re,e.target):rv(n.re,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:bi(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function Zh(n){const e=ov({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fa(e,e.limit,"L"):e}function Ll(n,e){return new Jh(e.largestBatchId,wu(n.re,e.overlayMutation))}function Dp(n,e){const t=e.path.lastSegment();return[n,Xe(e.path.popLast()),t]}function xp(n,e,t,i){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:ki(i.readTime),documentKey:Xe(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{getBundleMetadata(e,t){return Pp(e).get(t).next(i=>{if(i)return{id:(s=i).bundleId,createTime:Ai(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return Pp(e).put({bundleId:(i=t).id,createTime:ki(Ce(i.createTime)),version:i.version});var i}getNamedQuery(e,t){return Op(e).get(t).next(i=>{if(i)return{name:(s=i).name,query:Zh(s.bundledQuery),readTime:Ai(s.readTime)};var s})}saveNamedQuery(e,t){return Op(e).put(function(i){return{name:i.name,readTime:ki(Ce(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Pp(n){return De(n,"bundles")}function Op(n){return De(n,"namedQueries")}/**
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
 */class Uc{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const i=t.uid||"";return new Uc(e,i)}getOverlay(e,t){return er(e).get(Dp(this.userId,t)).next(i=>i?Ll(this.It,i):null)}getOverlays(e,t){const i=Ft();return m.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){const s=[];return i.forEach((r,o)=>{const a=new Jh(t,o);s.push(this.ue(e,a))}),m.waitFor(s)}removeOverlaysForBatchId(e,t,i){const s=new Set;t.forEach(o=>s.add(Xe(o.getCollectionPath())));const r=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,i],[this.userId,o,i+1],!1,!0);r.push(er(e).Y("collectionPathOverlayIndex",a))}),m.waitFor(r)}getOverlaysForCollection(e,t,i){const s=Ft(),r=Xe(t),o=IDBKeyRange.bound([this.userId,r,i],[this.userId,r,Number.POSITIVE_INFINITY],!0);return er(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Ll(this.It,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,i,s){const r=Ft();let o;const a=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return er(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Ll(this.It,l);r.size()<s||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}ue(e,t){return er(e).put(function(i,s,r){const[o,a,c]=Dp(s,r.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:Zr(i.re,r.mutation)}}(this.It,this.userId,t))}}function er(n){return De(n,"documentOverlays")}/**
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
 */class ii{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(ae(e.integerValue));else if("doubleValue"in e){const i=ae(e.doubleValue);isNaN(i)?this.le(t,13):(this.le(t,15),Hr(i)?t.fe(0):t.fe(i))}else if("timestampValue"in e){const i=e.timestampValue;this.le(t,20),typeof i=="string"?t.de(i):(t.de(`${i.seconds||""}`),t.fe(i.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Ii(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?R_(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):C()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const i=e.fields||{};this.le(t,55);for(const s of Object.keys(i))this._e(s,t),this.ae(i[s],t)}pe(e,t){const i=e.values||[];this.le(t,50);for(const s of i)this.ae(s,t)}ge(e,t){this.le(t,37),E.fromName(e).path.forEach(i=>{this.le(t,60),this.Ie(i,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}ii.Te=new ii;function XA(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Lp(n){const e=64-function(t){let i=0;for(let s=0;s<8;++s){const r=XA(255&t[s]);if(i+=r,r!==8)break}return i}(n);return Math.ceil(e/8)}class JA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Ae(i.value),i=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Pe(i.value),i=t.next();this.ve()}Ve(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Ae(i);else if(i<2048)this.Ae(960|i>>>6),this.Ae(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i);else{const s=t.codePointAt(0);this.Ae(240|s>>>18),this.Ae(128|63&s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s)}}this.Re()}Se(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Pe(i);else if(i<2048)this.Pe(960|i>>>6),this.Pe(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i);else{const s=t.codePointAt(0);this.Pe(240|s>>>18),this.Pe(128|63&s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s)}}this.ve()}De(e){const t=this.Ce(e),i=Lp(t);this.xe(1+i),this.buffer[this.position++]=255&i;for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ne(e){const t=this.Ce(e),i=Lp(t);this.xe(1+i),this.buffer[this.position++]=~(255&i);for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(s){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,s,!1),new Uint8Array(r.buffer)}(e),i=(128&t[0])!=0;t[0]^=i?255:128;for(let s=1;s<t.length;++s)t[s]^=i?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const s=new Uint8Array(i);s.set(this.buffer),this.buffer=s}}class ZA{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class eN{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class tr{constructor(){this.Be=new JA,this.Le=new ZA(this.Be),this.Ue=new eN(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class si{constructor(e,t,i,s){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=s}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new si(this.indexId,this.documentKey,this.arrayValue,i)}}function Yn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Mp(n.arrayValue,e.arrayValue),t!==0?t:(t=Mp(n.directionalValue,e.directionalValue),t!==0?t:E.comparator(n.documentKey,e.documentKey)))}function Mp(n,e){for(let t=0;t<n.length&&t<e.length;++t){const i=n[t]-e[t];if(i!==0)return i}return n.length-e.length}/**
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
 */class tN{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const i=t;i.dt()?this.je=i:this.Qe.push(i)}}We(e){const t=mu(e);if(t!==void 0&&!this.ze(t))return!1;const i=Zn(e);let s=0,r=0;for(;s<i.length&&this.ze(i[s]);++s);if(s===i.length)return!0;if(this.je!==void 0){const o=i[s];if(!this.He(this.je,o)||!this.Je(this.Ge[r++],o))return!1;++s}for(;s<i.length;++s){const o=i[s];if(r>=this.Ge.length||!this.Je(this.Ge[r++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class nN{constructor(){this.Ye=new ed}addToCollectionParentIndex(e,t){return this.Ye.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(mt.min())}updateCollectionGroup(e,t,i){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class ed{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new H(q.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new H(q.comparator)).toArray()}}/**
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
 */const na=new Uint8Array(0);class iN{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new ed,this.Ze=new Kn(i=>bi(i),(i,s)=>No(i,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const i=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const r={collectionId:i,parent:Xe(s)};return Fp(e).put(r)}return m.resolve()}getCollectionParents(e,t){const i=[],s=IDBKeyRange.bound([t,""],[I_(t),""],!1,!0);return Fp(e).W(s).next(r=>{for(const o of r){if(o.collectionId!==t)break;i.push(Ut(o.parent))}return i})}addFieldIndex(e,t){const i=ia(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const r=i.add(s);if(t.indexState){const o=ir(e);return r.next(a=>{o.put(xp(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const i=ia(e),s=ir(e),r=nr(e);return i.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const i=nr(e);let s=!0;const r=new Map;return m.forEach(this.tn(t),o=>this.en(e,o).next(a=>{s&&(s=!!a),r.set(o,a)})).next(()=>{if(s){let o=O();const a=[];return m.forEach(r,(c,l)=>{var u;v("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(j=>`${j.fieldPath}:${j.kind}`).join(",")}`} to execute ${bi(t)}`);const h=function(j,he){const oe=mu(he);if(oe===void 0)return null;for(const J of Ma(j,oe.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(l,c),d=function(j,he){const oe=new Map;for(const J of Zn(he))for(const Pe of Ma(j,J.fieldPath))switch(Pe.op){case"==":case"in":oe.set(J.fieldPath.canonicalString(),Pe.value);break;case"not-in":case"!=":return oe.set(J.fieldPath.canonicalString(),Pe.value),Array.from(oe.values())}return null}(l,c),f=function(j,he){const oe=[];let J=!0;for(const Pe of Zn(he)){const Qn=Pe.kind===0?mp(j,Pe.fieldPath,j.startAt):gp(j,Pe.fieldPath,j.startAt);oe.push(Qn.value),J&&(J=Qn.inclusive)}return new xn(oe,J)}(l,c),p=function(j,he){const oe=[];let J=!0;for(const Pe of Zn(he)){const Qn=Pe.kind===0?gp(j,Pe.fieldPath,j.endAt):mp(j,Pe.fieldPath,j.endAt);oe.push(Qn.value),J&&(J=Qn.inclusive)}return new xn(oe,J)}(l,c),y=this.nn(c,l,f),T=this.nn(c,l,p),F=this.sn(c,l,d),W=this.rn(c.indexId,h,y,f.inclusive,T,p.inclusive,F);return m.forEach(W,j=>i.J(j,t.limit).next(he=>{he.forEach(oe=>{const J=E.fromSegments(oe.documentKey);o.has(J)||(o=o.add(J),a.push(J))})}))}).next(()=>a)}return m.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,i,s,r,o,a){const c=(t!=null?t.length:1)*Math.max(i.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.on(t[h/l]):na,f=this.un(e,d,i[h%l],s),p=this.cn(e,d,r[h%l],o),y=a.map(T=>this.un(e,d,T,!0));u.push(...this.createRange(f,p,y))}return u}un(e,t,i,s){const r=new si(e,E.empty(),t,i);return s?r:r.Ke()}cn(e,t,i,s){const r=new si(e,E.empty(),t,i);return s?r.Ke():r}en(e,t){const i=new tN(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(r=>{let o=null;for(const a of r)i.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let i=2;return m.forEach(this.tn(t),s=>this.en(e,s).next(r=>{r?i!==0&&r.fields.length<function(o){let a=new H(fe.comparator),c=!1;for(const l of o.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?c=!0:a=a.add(u.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(c?1:0)}(s)&&(i=1):i=0})).next(()=>i)}an(e,t){const i=new tr;for(const s of Zn(e)){const r=t.data.field(s.fieldPath);if(r==null)return null;const o=i.qe(s.kind);ii.Te.ce(r,o)}return i.$e()}on(e){const t=new tr;return ii.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const i=new tr;return ii.Te.ce(Ti(this.databaseId,t),i.qe(function(s){const r=Zn(s);return r.length===0?0:r[r.length-1].kind}(e))),i.$e()}sn(e,t,i){if(i===null)return[];let s=[];s.push(new tr);let r=0;for(const o of Zn(e)){const a=i[r++];for(const c of s)if(this.ln(t,o.fieldPath)&&Qr(a))s=this.fn(s,o,a);else{const l=c.qe(o.kind);ii.Te.ce(a,l)}}return this.dn(s)}nn(e,t,i){return this.sn(e,t,i.position)}dn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].$e();return t}fn(e,t,i){const s=[...e],r=[];for(const o of i.arrayValue.values||[])for(const a of s){const c=new tr;c.seed(a.$e()),ii.Te.ce(o,c.qe(t.kind)),r.push(c)}return r}ln(e,t){return!!e.filters.find(i=>i instanceof Fe&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,t){const i=ia(e),s=ir(e);return(t?i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):i.W()).next(r=>{const o=[];return m.forEach(r,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Oa(u.sequenceNumber,new mt(Ai(u.readTime),new E(Ut(u.documentKey)),u.largestBatchId)):Oa.empty(),d=l.fields.map(([f,p])=>new Vk(fe.fromServerFormat(f),p));return new E_(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((i,s)=>{const r=i.indexState.sequenceNumber-s.indexState.sequenceNumber;return r!==0?r:P(i.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,i){const s=ia(e),r=ir(e);return this._n(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>r.put(xp(c.indexId,this.user,o,i)))))}updateIndexEntries(e,t){const i=new Map;return m.forEach(t,(s,r)=>{const o=i.get(s.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(i.set(s.collectionGroup,a),m.forEach(a,c=>this.wn(e,s,c).next(l=>{const u=this.mn(r,c);return l.isEqual(u)?m.resolve():this.gn(e,r,c,l,u)}))))})}yn(e,t,i,s){return nr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.hn(i,t.key),documentKey:t.key.path.toArray()})}pn(e,t,i,s){return nr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.hn(i,t.key),t.key.path.toArray()])}wn(e,t,i){const s=nr(e);let r=new H(Yn);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.hn(i,t)])},(o,a)=>{r=r.add(new si(i.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}mn(e,t){let i=new H(Yn);const s=this.an(t,e);if(s==null)return i;const r=mu(t);if(r!=null){const o=e.data.field(r.fieldPath);if(Qr(o))for(const a of o.arrayValue.values||[])i=i.add(new si(t.indexId,e.key,this.on(a),s))}else i=i.add(new si(t.indexId,e.key,na,s));return i}gn(e,t,i,s,r){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let p=zi(d),y=zi(f);for(;p||y;){let T=!1,F=!1;if(p&&y){const W=l(p,y);W<0?F=!0:W>0&&(T=!0)}else p!=null?F=!0:T=!0;T?(u(y),y=zi(f)):F?(h(p),p=zi(d)):(p=zi(d),y=zi(f))}}(s,r,Yn,a=>{o.push(this.yn(e,t,i,a))},a=>{o.push(this.pn(e,t,i,a))}),m.waitFor(o)}_n(e){let t=1;return ir(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,s,r)=>{r.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,i){i=i.sort((o,a)=>Yn(o,a)).filter((o,a,c)=>!a||Yn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of i){const a=Yn(o,e),c=Yn(o,t);if(a===0)s[0]=e.Ke();else if(a>0&&c<0)s.push(o),s.push(o.Ke());else if(c>0)break}s.push(t);const r=[];for(let o=0;o<s.length;o+=2)r.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,na,[]],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,na,[]]));return r}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Up)}getMinOffset(e,t){return m.mapArray(this.tn(t),i=>this.en(e,i).next(s=>s||C())).next(Up)}}function Fp(n){return De(n,"collectionParents")}function nr(n){return De(n,"indexEntries")}function ia(n){return De(n,"indexConfiguration")}function ir(n){return De(n,"indexState")}function Up(n){D(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<n.length;i++){const s=n[i].indexState.offset;qh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new mt(e.readTime,e.documentKey,t)}/**
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
 */const Vp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ze{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e,t){const i=n.store("mutations"),s=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=i.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{D(a===1)}));const l=[];for(const u of t.mutations){const h=lv(e,u.key.path,t.batchId);r.push(s.delete(h)),l.push(u.key)}return m.waitFor(r).next(()=>l)}function Va(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw C();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(41943040,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);class Vc{constructor(e,t,i,s){this.userId=e,this.It=t,this.indexManager=i,this.referenceDelegate=s,this.In={}}static oe(e,t,i,s){D(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new Vc(r,t,i,s)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).Z({index:"userMutationsIndex",range:i},(s,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,i,s){const r=Ji(e),o=fn(e);return o.add({}).next(a=>{D(typeof a=="number");const c=new Yh(a,t,i,s),l=function(d,f,p){const y=p.baseMutations.map(F=>Zr(d.re,F)),T=p.mutations.map(F=>Zr(d.re,F));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:y,mutations:T}}(this.It,this.userId,c),u=[];let h=new H((d,f)=>P(d.canonicalString(),f.canonicalString()));for(const d of s){const f=lv(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,xA))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),m.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return fn(e).get(t).next(i=>i?(D(i.userId===this.userId),ni(this.It,i)):null)}Tn(e,t){return this.In[t]?m.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(i=>{if(i){const s=i.keys();return this.In[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=IDBKeyRange.lowerBound([this.userId,i]);let r=null;return fn(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(D(a.batchId>=i),r=ni(this.It,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return fn(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(s,r,o)=>{i=r.batchId,o.done()}).next(()=>i)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return fn(e).W("userMutationsIndex",t).next(i=>i.map(s=>ni(this.It,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=ma(this.userId,t.path),s=IDBKeyRange.lowerBound(i),r=[];return Ji(e).Z({range:s},(o,a,c)=>{const[l,u,h]=o,d=Ut(u);if(l===this.userId&&t.path.isEqual(d))return fn(e).get(h).next(f=>{if(!f)throw C();D(f.userId===this.userId),r.push(ni(this.It,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new H(P);const s=[];return t.forEach(r=>{const o=ma(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=Ji(e).Z({range:a},(l,u,h)=>{const[d,f,p]=l,y=Ut(f);d===this.userId&&r.path.isEqual(y)?i=i.add(p):h.done()});s.push(c)}),m.waitFor(s).next(()=>this.En(e,i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1,r=ma(this.userId,i),o=IDBKeyRange.lowerBound(r);let a=new H(P);return Ji(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,p=Ut(d);h===this.userId&&i.isPrefixOf(p)?p.length===s&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const i=[],s=[];return t.forEach(r=>{s.push(fn(e).get(r).next(o=>{if(o===null)throw C();D(o.userId===this.userId),i.push(ni(this.It,o))}))}),m.waitFor(s).next(()=>i)}removeMutationBatch(e,t){return mv(e.ie,this.userId,t).next(i=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),m.forEach(i,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const i=IDBKeyRange.lowerBound([this.userId]),s=[];return Ji(e).Z({range:i},(r,o,a)=>{if(r[0]===this.userId){const c=Ut(r[1]);s.push(c)}else a.done()}).next(()=>{D(s.length===0)})})}containsKey(e,t){return gv(e,this.userId,t)}Rn(e){return yv(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gv(n,e,t){const i=ma(e,t.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return Ji(n).Z({range:r,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function fn(n){return De(n,"mutations")}function Ji(n){return De(n,"documentMutations")}function yv(n){return De(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ni(0)}static vn(){return new Ni(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const i=new Ni(t.highestTargetId);return t.highestTargetId=i.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>N.fromTimestamp(new ie(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,i){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=t,i&&(s.lastRemoteSnapshotVersion=i.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Sn(e,s)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(i=>(i.targetCount+=1,this.Cn(t,i),this.Sn(e,i))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Yi(e).delete(t.targetId)).next(()=>this.Vn(e)).next(i=>(D(i.targetCount>0),i.targetCount-=1,this.Sn(e,i)))}removeTargets(e,t,i){let s=0;const r=[];return Yi(e).Z((o,a)=>{const c=mr(a);c.sequenceNumber<=t&&i.get(c.targetId)===null&&(s++,r.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(r)).next(()=>s)}forEachTarget(e,t){return Yi(e).Z((i,s)=>{const r=mr(s);t(r)})}Vn(e){return Bp(e).get("targetGlobalKey").next(t=>(D(t!==null),t))}Sn(e,t){return Bp(e).put("targetGlobalKey",t)}Dn(e,t){return Yi(e).put(pv(this.It,t))}Cn(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const i=bi(t),s=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let r=null;return Yi(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=mr(a);No(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,i){const s=[],r=mn(e);return t.forEach(o=>{const a=Xe(o.path);s.push(r.put({targetId:i,path:a})),s.push(this.referenceDelegate.addReference(e,i,o))}),m.waitFor(s)}removeMatchingKeys(e,t,i){const s=mn(e);return m.forEach(t,r=>{const o=Xe(r.path);return m.waitFor([s.delete([i,o]),this.referenceDelegate.removeReference(e,i,r)])})}removeMatchingKeysForTargetId(e,t){const i=mn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(s)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),s=mn(e);let r=O();return s.Z({range:i,X:!0},(o,a,c)=>{const l=Ut(o[1]),u=new E(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const i=Xe(t.path),s=IDBKeyRange.bound([i],[I_(i)],!1,!0);let r=0;return mn(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}se(e,t){return Yi(e).get(t).next(i=>i?mr(i):null)}}function Yi(n){return De(n,"targets")}function Bp(n){return De(n,"targetGlobal")}function mn(n){return De(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp([n,e],[t,i]){const s=P(n,t);return s===0?P(e,i):s}class rN{constructor(e){this.xn=e,this.buffer=new H(qp),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();qp(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oN{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Gn(t)}await this.Fn(3e5)})}}class aN{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return m.resolve(tt.at);const i=new rN(t);return this.$n.forEachTarget(e,s=>i.On(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>i.On(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.$n.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Vp)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vp):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let i,s,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(i=h,a=Date.now(),this.removeTargets(e,i,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(h=>(l=Date.now(),pu()<=B.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,t){this.db=e,this.garbageCollector=function(i,s){return new aN(i,s)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}qn(e){let t=0;return this.Ln(e,i=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(i,s)=>t(s))}addReference(e,t,i){return sa(e,i)}removeReference(e,t,i){return sa(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return sa(e,t)}Gn(e,t){return function(i,s){let r=!1;return yv(i).tt(o=>gv(i,o,s).next(a=>(a&&(r=!0),m.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return r++,i.getEntry(e,o).next(()=>(i.removeEntry(o,N.min()),mn(e).delete([0,Xe(o.path)])))});s.push(c)}}).next(()=>m.waitFor(s)).next(()=>i.apply(e)).next(()=>r)}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return sa(e,t)}Kn(e,t){const i=mn(e);let s,r=tt.at;return i.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==tt.at&&t(new E(Ut(s)),r),r=l,s=c):r=tt.at}).next(()=>{r!==tt.at&&t(new E(Ut(s)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sa(n,e){return mn(n).put(function(t,i){return{targetId:0,path:Xe(t.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.changes=new Kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Y.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?m.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Xn(e).put(i)}removeEntry(e,t,i){return Xn(e).delete(function(s,r){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ua(r),o[o.length-1]]}(t,i))}updateMetadata(e,t){return this.getMetadata(e).next(i=>(i.byteSize+=t,this.Qn(e,i)))}getEntry(e,t){let i=Y.newInvalidDocument(t);return Xn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(sr(t))},(s,r)=>{i=this.jn(t,r)}).next(()=>i)}Wn(e,t){let i={size:0,document:Y.newInvalidDocument(t)};return Xn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(sr(t))},(s,r)=>{i={document:this.jn(t,r),size:Va(r)}}).next(()=>i)}getEntries(e,t){let i=nt();return this.zn(e,t,(s,r)=>{const o=this.jn(s,r);i=i.insert(s,o)}).next(()=>i)}Hn(e,t){let i=nt(),s=new le(E.comparator);return this.zn(e,t,(r,o)=>{const a=this.jn(r,o);i=i.insert(r,a),s=s.insert(r,Va(o))}).next(()=>({documents:i,Jn:s}))}zn(e,t,i){if(t.isEmpty())return m.resolve();let s=new H(Gp);t.forEach(c=>s=s.add(c));const r=IDBKeyRange.bound(sr(s.first()),sr(s.last())),o=s.getIterator();let a=o.getNext();return Xn(e).Z({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=E.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Gp(a,h)<0;)i(a,null),a=o.getNext();a&&a.isEqual(h)&&(i(a,l),a=o.hasNext()?o.getNext():null),a?u.j(sr(a)):u.done()}).next(()=>{for(;a;)i(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,i){const s=[t.popLast().toArray(),t.lastSegment(),Ua(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xn(e).W(IDBKeyRange.bound(s,r,!0)).next(o=>{let a=nt();for(const c of o){const l=this.jn(E.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,i,s){let r=nt();const o=Wp(t,i),a=Wp(t,mt.max());return Xn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(E.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===s&&u.done()}).next(()=>r)}newChangeBuffer(e){return new uN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return $p(e).get("remoteDocumentGlobalKey").next(t=>(D(!!t),t))}Qn(e,t){return $p(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const i=QA(this.It,t);if(!(i.isNoDocument()&&i.version.isEqual(N.min())))return i}return Y.newInvalidDocument(e)}}function vv(n){return new lN(n)}class uN extends _v{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Kn(i=>i.toString(),(i,s)=>i.isEqual(s))}applyChanges(e){const t=[];let i=0,s=new H((r,o)=>P(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=Rp(this.Yn.It,o);s=s.add(r.path.popLast());const l=Va(c);i+=l-a.size,t.push(this.Yn.addEntry(e,r,c))}else if(i-=a.size,this.trackRemovals){const c=Rp(this.Yn.It,o.convertToNoDocument(N.min()));t.push(this.Yn.addEntry(e,r,c))}}),s.forEach(r=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Yn.updateMetadata(e,i)),m.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(i=>(this.Xn.set(t,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:i,Jn:s})=>(s.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:i.get(r).readTime})}),i))}}function $p(n){return De(n,"remoteDocumentGlobal")}function Xn(n){return De(n,"remoteDocumentsV14")}function sr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wp(n,e){const t=e.documentKey.path.toArray();return[n,Ua(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Gp(n,e){const t=n.path.toArray(),i=e.path.toArray();let s=0;for(let r=0;r<t.length-2&&r<i.length-2;++r)if(s=P(t[r],i[r]),s)return s;return s=P(t.length,i.length),s||(s=P(t[t.length-2],i[i.length-2]),s||P(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.getBaseDocument(e,t,i))).next(s=>(i!==null&&Er(i.mutation,s,ut.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,O()).next(()=>i))}getLocalViewOfDocuments(e,t,i=O()){const s=Ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=pr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,O()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=nt();const o=Tr(),a=Tr();return t.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof un)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Er(u.mutation,l,u.mutation.getFieldMask(),ie.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new hN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Tr();let s=new le((o,a)=>o-a),r=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=i.get(c)||ut.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||O()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Y_();u.forEach(d=>{if(!r.has(d)){const f=G_(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):m.resolve(Ft());let a=-1,c=r;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?m.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,O())).next(u=>({batchId:a,changes:Q_(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(i=>{let s=pr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=pr();return this.indexManager.getCollectionParents(e,s).next(o=>m.forEach(o,a=>{const c=function(l,u){return new ln(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,i).next(r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Y.newInvalidDocument(l)))});let o=pr();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Er(l.mutation,c,ut.empty(),ie.now()),Hh(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):m.resolve(Y.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return m.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var i;return this.Zn.set(t.id,{id:(i=t).id,version:i.version,createTime:Ce(i.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(i){return{name:i.name,query:Zh(i.bundledQuery),readTime:Ce(i.readTime)}}(t)),m.resolve()}}/**
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
 */class fN{constructor(){this.overlays=new le(E.comparator),this.es=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ft();return m.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ue(e,t,r)}),m.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.es.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(i)),m.resolve()}getOverlaysForCollection(e,t,i){const s=Ft(),r=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Ft(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ft(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return m.resolve(a)}ue(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(i.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Jh(t,i));let r=this.es.get(t);r===void 0&&(r=O(),this.es.set(t,r)),this.es.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.ns=new H(we.ss),this.rs=new H(we.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const i=new we(e,t);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.cs(new we(e,t))}hs(e,t){e.forEach(i=>this.removeReference(i,t))}ls(e){const t=new E(new q([])),i=new we(t,e),s=new we(t,e+1),r=[];return this.rs.forEachInRange([i,s],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new E(new q([])),i=new we(t,e),s=new we(t,e+1);let r=O();return this.rs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new we(e,0),i=this.ns.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class we{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return E.comparator(e.key,t.key)||P(e._s,t._s)}static os(e,t){return P(e._s,t._s)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new H(we.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yh(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new we(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.ps(i),r=s<0?0:s;return m.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([i,s],o=>{const a=this.ys(o._s);r.push(a)}),m.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new H(P);return t.forEach(s=>{const r=new we(s,0),o=new we(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{i=i.add(a._s)})}),m.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;E.isDocumentKey(r)||(r=r.child(""));const o=new we(new E(r),0);let a=new H(P);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(i=>{const s=this.ys(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){D(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return m.forEach(t.mutations,s=>{const r=new we(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=i})}An(e){}containsKey(e,t){const i=new we(t,0),s=this.gs.firstAfterOrEqual(i);return m.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.Es=e,this.docs=new le(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Es(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return m.resolve(i?i.document.mutableCopy():Y.newInvalidDocument(t))}getEntries(e,t){let i=nt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Y.newInvalidDocument(s))}),m.resolve(i)}getAllFromCollection(e,t,i){let s=nt();const r=new E(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||qh(b_(c),i)<=0||(s=s.insert(c.key,c.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,i,s){C()}As(e,t){return m.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new gN(this)}getSize(e){return m.resolve(this.size)}}class gN extends _v{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(i)}),m.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.persistence=e,this.Rs=new Kn(t=>bi(t),No),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.bs=0,this.Ps=new td,this.targetCount=0,this.vs=Ni.Pn()}forEachTarget(e,t){return this.Rs.forEach((i,s)=>t(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.bs&&(this.bs=t),m.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Dn(t),m.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(r).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const i=this.Rs.get(t)||null;return m.resolve(i)}addMatchingKeys(e,t,i){return this.Ps.us(t,i),m.resolve()}removeMatchingKeys(e,t,i){this.Ps.hs(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),m.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Ps.ds(t);return m.resolve(i)}containsKey(e,t){return m.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new tt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new yN(this),this.indexManager=new nN,this.remoteDocumentCache=function(i){return new mN(i)}(i=>this.referenceDelegate.xs(i)),this.It=new fv(t),this.Ns=new dN(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Vs[e.toKey()];return i||(i=new pN(t,this.referenceDelegate),this.Vs[e.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,i){v("MemoryPersistence","Starting transaction:",e);const s=new _N(this.Ss.next());return this.referenceDelegate.ks(),i(s).next(r=>this.referenceDelegate.Os(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ms(e,t){return m.or(Object.values(this.Vs).map(i=>()=>i.containsKey(e,t)))}}class _N extends C_{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Fs=new td,this.$s=null}static Bs(e){return new Bc(e)}get Ls(){if(this.$s)return this.$s;throw C()}addReference(e,t,i){return this.Fs.addReference(i,t),this.Ls.delete(i.toString()),m.resolve()}removeReference(e,t,i){return this.Fs.removeReference(i,t),this.Ls.add(i.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),m.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(s=>this.Ls.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,i=>{const s=E.fromPath(i);return this.Us(e,s).next(r=>{r||t.removeEntry(s,N.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(i=>{i?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return m.or([()=>m.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.It=e}$(e,t,i,s){const r=new Oc("createOrUpgrade",t);i<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Np,{unique:!0}),a.createObjectStore("documentMutations")}(e),jp(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return i<3&&s>=3&&(i!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),jp(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:N.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),i<4&&s>=4&&(i!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Np,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return m.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&s>=5&&(o=o.next(()=>this.qs(r))),i<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),i<7&&s>=7&&(o=o.next(()=>this.Gs(r))),i<8&&s>=8&&(o=o.next(()=>this.Qs(e,r))),i<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&s>=10&&(o=o.next(()=>this.js(r))),i<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:GA});c.createIndex("collectionPathOverlayIndex",jA,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",KA,{unique:!1})})(e)})),i<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:PA});c.createIndex("documentKeyIndex",OA),c.createIndex("collectionGroupIndex",LA)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&s>=14&&(o=o.next(()=>this.zs(e,r))),i<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:BA}).createIndex("sequenceNumberIndex",qA,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:$A}).createIndex("documentKeyIndex",WA,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((i,s)=>{t+=Va(s)}).next(()=>{const i={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}qs(e){const t=e.store("mutationQueues"),i=e.store("mutations");return t.W().next(s=>m.forEach(s,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return i.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{D(c.userId===r.userId);const l=ni(this.It,c);return mv(e,r.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const r=[];return i.Z((o,a)=>{const c=new q(o),l=function(u){return[0,Xe(u)]}(c);r.push(t.get(l).next(u=>u?m.resolve():(h=>t.put({targetId:0,path:Xe(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:VA});const i=t.store("collectionParents"),s=new ed,r=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return i.put({collectionId:a,parent:Xe(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new q(o);return r(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=Ut(a);return r(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((i,s)=>{const r=mr(s),o=pv(this.It,r);return t.put(o)})}Ws(e,t){const i=t.store("remoteDocuments"),s=[];return i.Z((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new E(q.fromString(l.document.name).popFirst(5)):l.noDocument?E.fromSegments(l.noDocument.path):l.unknownDocument?E.fromSegments(l.unknownDocument.path):C()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>m.waitFor(s))}zs(e,t){const i=t.store("mutations"),s=vv(this.It),r=new Iv(Bc.Bs,this.It.re);return i.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:O();ni(this.It,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),m.forEach(a,(c,l)=>{const u=new Ee(l),h=Uc.oe(this.It,u),d=r.getIndexManager(u),f=Vc.oe(u,this.It,d,r.referenceDelegate);return new wv(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Iu(t,tt.at),c).next()})})}}function jp(n){n.createObjectStore("targetDocuments",{keyPath:FA}).createIndex("documentTargetsIndex",UA,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MA,{unique:!0}),n.createObjectStore("targetGlobal")}const Ml="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class nd{constructor(e,t,i,s,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.Hs=r,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!nd.C())throw new _(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cN(this,s),this.ii=t+"main",this.It=new fv(c),this.ri=new St(this.ii,this.Xs,new vN(this.It)),this.Cs=new sN(this.referenceDelegate,this.It),this.remoteDocumentCache=vv(this.It),this.Ns=new YA,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&de("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new _(g.FAILED_PRECONDITION,Ml);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new tt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ra(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(jn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return rr(e).get("owner").next(t=>m.resolve(this.mi(t)))}gi(e){return ra(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const i=De(t,"clientMetadata");return i.W().next(s=>{const r=this.Ii(s,18e5),o=s.filter(a=>r.indexOf(a)===-1);return m.forEach(o,a=>i.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?m.resolve(!0):rr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new _(g.FAILED_PRECONDITION,Ml);return!1}}return!(!this.networkEnabled||!this.inForeground)||ra(e).W().next(i=>this.Ii(i,5e3).find(s=>{if(this.clientId!==s.clientId){const r=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Iu(e,tt.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(i=>this.pi(i.updateTimeMs,t)&&!this.Ei(i.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>ra(e).W().next(t=>this.Ii(t,18e5).map(i=>i.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Vc.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iN(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Uc.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,i){v("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?zA:o===14?dv:o===13?hv:o===12?HA:o===11?uv:void C();var o;let a;return this.ri.runTransaction(e,s,r,c=>(a=new Iu(c,this.Ss?this.Ss.next():tt.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw de(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new _(g.FAILED_PRECONDITION,S_);return i(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>i(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return rr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new _(g.FAILED_PRECONDITION,Ml)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return rr(e).put("owner",t)}static C(){return St.C()}_i(e){const t=rr(e);return t.get("owner").next(i=>this.mi(i)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}pi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(de(`Detected an update time that is in the future: ${e} > ${i}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),tE()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const i=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return de("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){de("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function rr(n){return De(n,"owner")}function ra(n){return De(n,"clientMetadata")}function id(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Si=i,this.Di=s}static Ci(e,t){let i=O(),s=O();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new sd(e,t.fromCache,i,s)}}/**
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
 */class Ev{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,i,s){return this.ki(e,t).next(r=>r||this.Oi(e,t,s,i)).next(r=>r||this.Mi(e,t))}ki(e,t){if(vp(t))return m.resolve(null);let i=rt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fa(t,null,"F"),i=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=O(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Fa(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,i,s){return vp(t)||s.isEqual(N.min())?this.Mi(e,t):this.Ni.getDocuments(e,i).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,i,s)?this.Mi(e,t):(pu()<=B.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_u(t)),this.Bi(e,o,t,T_(s,-1)))})}Fi(e,t){let i=new H(M_(e));return t.forEach((s,r)=>{Hh(e,r)&&(i=i.add(r))}),i}$i(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(e,t){return pu()<=B.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",_u(t)),this.Ni.getDocumentsMatchingQuery(e,t,mt.min())}Bi(e,t,i,s){return this.Ni.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,t,i,s){this.persistence=e,this.Li=t,this.It=s,this.Ui=new le(P),this.qi=new Kn(r=>bi(r),No),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(i)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wv(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function Tv(n,e,t,i){return new wN(n,e,t,i)}async function bv(n,e){const t=b(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=O();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(i,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function IN(n,e){const t=b(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const y=c.docVersions.get(f);D(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=O();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Sv(n){const e=b(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function EN(n,e){const t=b(n),i=e.snapshotVersion;let s=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});s=t.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ye.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(p,y,T){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(r,f))});let c=nt(),l=O();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Cv(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!i.isEqual(N.min())){const u=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return m.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ui=s,r))}function Cv(n,e,t){let i=O(),s=O();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=nt();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function TN(n,e){const t=b(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function _s(n,e){const t=b(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Cs.getTargetData(i,e).next(r=>r?(s=r,m.resolve(s)):t.Cs.allocateTargetId(i).next(o=>(s=new En(e,o,0,i.currentSequenceNumber),t.Cs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ui.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(i.targetId,i),t.qi.set(e,i.targetId)),i})}async function vs(n,e,t){const i=b(n),s=i.Ui.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ui=i.Ui.remove(e),i.qi.delete(s.target)}function Ba(n,e,t){const i=b(n);let s=N.min(),r=O();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=b(a),h=u.qi.get(l);return h!==void 0?m.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(i,o,rt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Li.getDocumentsMatchingQuery(o,e,t?s:N.min(),t?r:O())).next(a=>(Nv(i,L_(e),a),{documents:a,Hi:r})))}function kv(n,e){const t=b(n),i=b(t.Cs),s=t.Ui.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",r=>i.se(r,e).next(o=>o?o.target:null))}function Av(n,e){const t=b(n),i=t.Ki.get(e)||N.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Gi.getAllFromCollectionGroup(s,e,T_(i,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Nv(t,e,s),s))}function Nv(n,e,t){let i=n.Ki.get(e)||N.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Ki.set(e,i)}async function bN(n,e,t,i){const s=b(n);let r=O(),o=nt();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),c=await _s(s,function(l){return rt(Vs(q.fromString(`__bundle__/docs/${l}`)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>Cv(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Cs.addMatchingKeys(l,r,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function SN(n,e,t=O()){const i=await _s(n,rt(Zh(e.bundledQuery))),s=b(n);return s.persistence.runTransaction("Save named query","readwrite",r=>{const o=Ce(e.readTime);if(i.snapshotVersion.compareTo(o)>=0)return s.Ns.saveNamedQuery(r,e);const a=i.withResumeToken(ye.EMPTY_BYTE_STRING,o);return s.Ui=s.Ui.insert(a.targetId,a),s.Cs.updateTargetData(r,a).next(()=>s.Cs.removeMatchingKeysForTargetId(r,i.targetId)).next(()=>s.Cs.addMatchingKeys(r,t,i.targetId)).next(()=>s.Ns.saveNamedQuery(r,e))})}function Kp(n,e){return`firestore_clients_${n}_${e}`}function Hp(n,e,t){let i=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function Fl(n,e){return`firestore_targets_${n}_${e}`}class qa{constructor(e,t,i,s){this.user=e,this.batchId=t,this.state=i,this.error=s}static Zi(e,t,i){const s=JSON.parse(i);let r,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(r=new _(s.error.code,s.error.message))),o?new qa(e,t,s.state,r):(de("SharedClientState",`Failed to parse mutation state for ID '${t}': ${i}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class br{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static Zi(e,t){const i=JSON.parse(t);let s,r=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return r&&i.error&&(r=typeof i.error.message=="string"&&typeof i.error.code=="string",r&&(s=new _(i.error.code,i.error.message))),r?new br(e,i.state,s):(de("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $a{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const i=JSON.parse(t);let s=typeof i=="object"&&i.activeTargetIds instanceof Array,r=Fc();for(let o=0;s&&o<i.activeTargetIds.length;++o)s=N_(i.activeTargetIds[o]),r=r.add(i.activeTargetIds[o]);return s?new $a(e,r):(de("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class rd{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new rd(t.clientId,t.onlineState):(de("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Eu{constructor(){this.activeTargetIds=Fc()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ul{constructor(e,t,i,s,r){this.window=e,this.Hs=t,this.persistenceKey=i,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new le(P),this.started=!1,this.cr=[];const o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=Kp(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Eu),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const i of e){if(i===this.sr)continue;const s=this.getItem(Kp(this.persistenceKey,i));if(s){const r=$a.Zi(i,s);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const i=this.yr(t);i&&this.pr(i)}for(const i of this.cr)this.rr(i);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((i,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,i){this.Tr(e,t,i),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Fl(this.persistenceKey,e));if(i){const s=br.Zi(e,i);s&&(t=s.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fl(this.persistenceKey,e))}updateQueryState(e,t,i){this.Rr(e,t,i)}handleUserChange(e,t,i){t.forEach(s=>{this.Er(s)}),this.currentUser=e,i.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void de("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const i=this.vr(t.key);return this.Vr(i,null)}{const i=this.Sr(t.key,t.newValue);if(i)return this.Vr(i.clientId,i)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const i=this.Dr(t.key,t.newValue);if(i)return this.Cr(i)}}else if(this._r.test(t.key)){if(t.newValue!==null){const i=this.Nr(t.key,t.newValue);if(i)return this.kr(i)}}else if(t.key===this.wr){if(t.newValue!==null){const i=this.yr(t.newValue);if(i)return this.pr(i)}}else if(t.key===this.hr){const i=function(s){let r=tt.at;if(s!=null)try{const o=JSON.parse(s);D(typeof o=="number"),r=o}catch(o){de("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);i!==tt.at&&this.sequenceNumberHandler(i)}else if(t.key===this.mr){const i=this.Or(t.newValue);await Promise.all(i.map(s=>this.syncEngine.Mr(s)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,i){const s=new qa(this.currentUser,e,t,i),r=Hp(this.persistenceKey,this.currentUser,e);this.setItem(r,s.tr())}Er(e){const t=Hp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,i){const s=Fl(this.persistenceKey,e),r=new br(e,t,i);this.setItem(s,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const i=this.vr(e);return $a.Zi(i,t)}Dr(e,t){const i=this.dr.exec(e),s=Number(i[1]),r=i[2]!==void 0?i[2]:null;return qa.Zi(new Ee(r),s,t)}Nr(e,t){const i=this._r.exec(e),s=Number(i[1]);return br.Zi(s,t)}yr(e){return rd.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const i=t?this.ur.insert(e,t):this.ur.remove(e),s=this.Ir(this.ur),r=this.Ir(i),o=[],a=[];return r.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=i})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Fc();return e.forEach((i,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Rv{constructor(){this.Lr=new Eu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,i){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Eu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CN{qr(e){}shutdown(){}}/**
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
 */class zp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,i,s,r){const o=this.ho(e,t);v("RestConnection","Sending: ",o,i);const a={};return this.lo(a,s,r),this.fo(e,o,a,i).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw fs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",i),c})}_o(e,t,i,s,r,o){return this.ao(e,t,i,s,r)}lo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ho(e,t){const i=kN[e];return`${this.oo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,i,s){return new Promise((r,o)=>{const a=new kk;a.setWithCredentials(!0),a.listenOnce(bk.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case Ol.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Ol.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new _(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(l=d)===null||l===void 0?void 0:l.error;if(f&&f.status&&f.message){const p=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(T)>=0?T:g.UNKNOWN}(f.status);o(new _(p,f.message))}else o(new _(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(g.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,i,15)})}wo(e,t,i){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ek(),o=Tk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ck({})),this.lo(a.initMessageHeaders,t,i),a.encodeInitMessageHeaders=!0;const c=s.join("");v("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new AN({Hr:p=>{h?v("Connection","Not sending because WebChannel is closed:",p):(u||(v("Connection","Opening WebChannel transport."),l.open(),u=!0),v("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,y,T)=>{p.listen(y,F=>{try{T(F)}catch(W){setTimeout(()=>{throw W},0)}})};return f(l,ea.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),f(l,ea.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.io())}),f(l,ea.EventType.ERROR,p=>{h||(h=!0,fs("Connection","WebChannel transport errored:",p),d.io(new _(g.UNAVAILABLE,"The operation could not be completed")))}),f(l,ea.EventType.MESSAGE,p=>{var y;if(!h){const T=p.data[0];D(!!T);const F=T,W=F.error||((y=F[0])===null||y===void 0?void 0:y.error);if(W){v("Connection","WebChannel received error:",W);const j=W.status;let he=function(J){const Pe=pe[J];if(Pe!==void 0)return H_(Pe)}(j),oe=W.message;he===void 0&&(he=g.INTERNAL,oe="Unknown error status: "+j+" with message "+W.message),h=!0,d.io(new _(he,oe)),l.close()}else v("Connection","WebChannel received:",T),d.ro(T)}}),f(o,Sk.STAT_EVENT,p=>{p.stat===sp.PROXY?v("Connection","Detected buffering proxy"):p.stat===sp.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dv(){return typeof window<"u"?window:null}function ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){return new wA(n,!0)}class od{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-i);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t,i,s,r,o,a,c){this.Hs=e,this.vo=i,this.Vo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new od(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(de(t.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.So===t&&this.Go(i,s)},i=>{e(()=>{const s=new _(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(s)})})}Go(e,t){const i=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{i(()=>this.Qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RN extends xv{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.It=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=TA(this.It,e),i=function(s){if(!("targetChange"in s))return N.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?N.min():r.readTime?Ce(r.readTime):N.min()}(e);return this.listener.Wo(t,i)}zo(e){const t={};t.database=Jr(this.It),t.addTarget=function(s,r){let o;const a=r.target;return o=La(a)?{documents:sv(s,a)}:{query:rv(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Z_(s,r.resumeToken):r.snapshotVersion.compareTo(N.min())>0&&(o.readTime=Yr(s,r.snapshotVersion.toTimestamp())),o}(this.It,e);const i=SA(this.It,e);i&&(t.labels=i),this.Bo(t)}Ho(e){const t={};t.database=Jr(this.It),t.removeTarget=e,this.Bo(t)}}class DN extends xv{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=bA(e.writeResults,e.commitTime),i=Ce(e.commitTime);return this.listener.Zo(i,t)}return D(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Jr(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Zr(this.It,i))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.It=s,this.nu=!1}su(){if(this.nu)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.ao(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(g.UNKNOWN,s.toString())})}_o(e,t,i,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(g.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class PN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(de(t),this.ou=!1):v("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{i.enqueueAndForget(async()=>{Hn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c._u.add(4),await $s(c),c.gu.set("Unknown"),c._u.delete(4),await Lo(c)}(this))})}),this.gu=new PN(i,s)}}async function Lo(n){if(Hn(n))for(const e of n.wu)await e(!0)}async function $s(n){for(const e of n.wu)await e(!1)}function qc(n,e){const t=b(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),ld(t)?cd(t):Gs(t).ko()&&ad(t,e))}function eo(n,e){const t=b(n),i=Gs(t);t.du.delete(e),i.ko()&&Pv(t,e),t.du.size===0&&(i.ko()?i.Fo():Hn(t)&&t.gu.set("Unknown"))}function ad(n,e){n.yu.Mt(e.targetId),Gs(n).zo(e)}function Pv(n,e){n.yu.Mt(e),Gs(n).Ho(e)}function cd(n){n.yu=new yA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),Gs(n).start(),n.gu.uu()}function ld(n){return Hn(n)&&!Gs(n).No()&&n.du.size>0}function Hn(n){return b(n)._u.size===0}function Ov(n){n.yu=void 0}async function LN(n){n.du.forEach((e,t)=>{ad(n,e)})}async function MN(n,e){Ov(n),ld(n)?(n.gu.hu(e),cd(n)):n.gu.set("Unknown")}async function FN(n,e,t){if(n.gu.set("Online"),e instanceof J_&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.du.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.du.delete(o),i.yu.removeTarget(o))}(n,e)}catch(i){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Wa(n,i)}else if(e instanceof pa?n.yu.Gt(e):e instanceof X_?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(N.min()))try{const i=await Sv(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.yu.te(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(ye.EMPTY_BYTE_STRING,c.snapshotVersion)),Pv(s,a);const l=new En(c.target,a,1,c.sequenceNumber);ad(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){v("RemoteStore","Failed to raise snapshot:",i),await Wa(n,i)}}async function Wa(n,e,t){if(!jn(e))throw e;n._u.add(1),await $s(n),n.gu.set("Offline"),t||(t=()=>Sv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Lo(n)})}function Lv(n,e){return e().catch(t=>Wa(n,t,e))}async function Ws(n){const e=b(n),t=Pn(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;UN(e);)try{const s=await TN(e.localStore,i);if(s===null){e.fu.length===0&&t.Fo();break}i=s.batchId,VN(e,s)}catch(s){await Wa(e,s)}Mv(e)&&Fv(e)}function UN(n){return Hn(n)&&n.fu.length<10}function VN(n,e){n.fu.push(e);const t=Pn(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function Mv(n){return Hn(n)&&!Pn(n).No()&&n.fu.length>0}function Fv(n){Pn(n).start()}async function BN(n){Pn(n).eu()}async function qN(n){const e=Pn(n);for(const t of n.fu)e.Xo(t.mutations)}async function $N(n,e,t){const i=n.fu.shift(),s=Xh.from(i,e,t);await Lv(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ws(n)}async function WN(n,e){e&&Pn(n).Yo&&await async function(t,i){if(s=i.code,K_(s)&&s!==g.ABORTED){const r=t.fu.shift();Pn(t).Mo(),await Lv(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ws(t)}var s}(n,e),Mv(n)&&Fv(n)}async function Qp(n,e){const t=b(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const i=Hn(t);t._u.add(3),await $s(t),i&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Lo(t)}async function Tu(n,e){const t=b(n);e?(t._u.delete(2),await Lo(t)):e||(t._u.add(2),await $s(t),t.gu.set("Unknown"))}function Gs(n){return n.pu||(n.pu=function(e,t,i){const s=b(e);return s.su(),new RN(t,s.connection,s.authCredentials,s.appCheckCredentials,s.It,i)}(n.datastore,n.asyncQueue,{Yr:LN.bind(null,n),Zr:MN.bind(null,n),Wo:FN.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),ld(n)?cd(n):n.gu.set("Unknown")):(await n.pu.stop(),Ov(n))})),n.pu}function Pn(n){return n.Iu||(n.Iu=function(e,t,i){const s=b(e);return s.su(),new DN(t,s.connection,s.authCredentials,s.appCheckCredentials,s.It,i)}(n.datastore,n.asyncQueue,{Yr:BN.bind(null,n),Zr:WN.bind(null,n),tu:qN.bind(null,n),Zo:$N.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Ws(n)):(await n.Iu.stop(),n.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new ud(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function js(n,e){if(de("AsyncQueue",`${e}: ${n}`),jn(n))return new _(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(t,i)=>e(t,i)||E.comparator(t.key,i.key):(t,i)=>E.comparator(t.key,i.key),this.keyedMap=pr(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new as;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.Tu=new le(E.comparator)}track(e){const t=e.doc.key,i=this.Tu.get(t);i?e.type!==0&&i.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&i.type!==1?this.Tu=this.Tu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Tu=this.Tu.remove(t):e.type===1&&i.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):C():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,i)=>{e.push(i)}),e}}class ws{constructor(e,t,i,s,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ws(e,t,as.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.Au=void 0,this.listeners=[]}}class jN{constructor(){this.queries=new Kn(e=>O_(e),Ro),this.onlineState="Unknown",this.Ru=new Set}}async function hd(n,e){const t=b(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new GN),s)try{r.Au=await t.onListen(i)}catch(o){const a=js(o,`Initialization of query '${_u(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&fd(t)}async function dd(n,e){const t=b(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function KN(n,e){const t=b(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(s)&&(i=!0);o.Au=s}}i&&fd(t)}function HN(n,e,t){const i=b(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function fd(n){n.Ru.forEach(e=>{e.next()})}class pd{constructor(e,t,i){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}Pu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ws(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Nu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.It=e}Ji(e){return Vt(this.It,e)}Yi(e){return e.metadata.exists?iv(this.It,e.document,!1):Y.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ce(e)}}class QN{constructor(e,t,i){this.Mu=e,this.localStore=t,this.It=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Uv(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const i=q.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,i=new Xp(this.It);for(const s of e)if(s.metadata.queries){const r=i.Ji(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||O()).add(r);t.set(o,a)}}return t}async complete(){const e=await bN(this.localStore,new Xp(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const i of this.queries)await SN(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Uv(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.key=e}}class Bv{constructor(e){this.key=e}}class qv{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=O(),this.mutatedKeys=O(),this.Gu=M_(e),this.Qu=new as(this.Gu)}get ju(){return this.Uu}Wu(e,t){const i=t?t.zu:new Yp,s=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Hh(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(i.track({type:3,doc:f}),T=!0):this.Hu(d,f)||(i.track({type:2,doc:f}),T=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),T=!0):d&&!f&&(i.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Qu:o,zu:i,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(i);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new ws(this.query,e.Qu,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=O(),this.Qu.forEach(i=>{this.Zu(i.key)&&(this.Ku=this.Ku.add(i.key))});const t=[];return e.forEach(i=>{this.Ku.has(i)||t.push(new Bv(i))}),this.Ku.forEach(i=>{e.has(i)||t.push(new Vv(i))}),t}tc(e){this.Uu=e.Hi,this.Ku=O();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ws.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class YN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class XN{constructor(e){this.key=e,this.nc=!1}}class JN{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Kn(a=>O_(a),Ro),this.rc=new Map,this.oc=new Set,this.uc=new le(E.comparator),this.cc=new Map,this.ac=new td,this.hc={},this.lc=new Map,this.fc=Ni.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ZN(n,e){const t=vd(n);let i,s;const r=t.ic.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const o=await _s(t.localStore,rt(e));t.isPrimaryClient&&qc(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await md(t,e,i,a==="current",o.resumeToken)}return s}async function md(n,e,t,i,s){n._c=(h,d,f)=>async function(p,y,T,F){let W=y.view.Wu(T);W.$i&&(W=await Ba(p.localStore,y.query,!1).then(({documents:oe})=>y.view.Wu(oe,W)));const j=F&&F.targetChanges.get(y.targetId),he=y.view.applyChanges(W,p.isPrimaryClient,j);return bu(p,y.targetId,he.Xu),he.snapshot}(n,h,d,f);const r=await Ba(n.localStore,e,!0),o=new qv(e,r.Hi),a=o.Wu(r.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);bu(n,t,l.Xu);const u=new YN(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function eR(n,e){const t=b(n),i=t.ic.get(e),s=t.rc.get(i.targetId);if(s.length>1)return t.rc.set(i.targetId,s.filter(r=>!Ro(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await vs(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),eo(t.remoteStore,i.targetId),Is(t,i.targetId)}).catch(Gn)):(Is(t,i.targetId),await vs(t.localStore,i.targetId,!0))}async function tR(n,e,t){const i=wd(n);try{const s=await function(r,o){const a=b(r),c=ie.now(),l=o.reduce((d,f)=>d.add(f.key),O());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=nt(),p=O();return a.Gi.getEntries(d,l).next(y=>{f=y,f.forEach((T,F)=>{F.isValidDocument()||(p=p.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const T=[];for(const F of o){const W=hA(F,u.get(F.key).overlayedDocument);W!=null&&T.push(new un(F.key,W,D_(W.value.mapValue),te.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(y=>{h=y;const T=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Q_(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new le(P)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(i,s.batchId,t),await hn(i,s.changes),await Ws(i.remoteStore)}catch(s){const r=js(s,"Failed to persist write");t.reject(r)}}async function $v(n,e){const t=b(n);try{const i=await EN(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.cc.get(r);o&&(D(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?D(o.nc):s.removedDocuments.size>0&&(D(o.nc),o.nc=!1))}),await hn(t,i,e)}catch(i){await Gn(i)}}function Jp(n,e,t){const i=b(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&fd(a)}(i.eventManager,e),s.length&&i.sc.Wo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nR(n,e,t){const i=b(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.cc.get(e),r=s&&s.key;if(r){let o=new le(E.comparator);o=o.insert(r,Y.newNoDocument(r,N.min()));const a=O().add(r),c=new xo(N.min(),new Map,new H(P),o,a);await $v(i,c),i.uc=i.uc.remove(r),i.cc.delete(e),_d(i)}else await vs(i.localStore,e,!1).then(()=>Is(i,e,t)).catch(Gn)}async function iR(n,e){const t=b(n),i=e.batch.batchId;try{const s=await IN(t.localStore,e);yd(t,i,null),gd(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await hn(t,s)}catch(s){await Gn(s)}}async function sR(n,e,t){const i=b(n);try{const s=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(D(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);yd(i,e,t),gd(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await hn(i,s)}catch(s){await Gn(s)}}async function rR(n,e){const t=b(n);Hn(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(r){const o=b(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(i===-1)return void e.resolve();const s=t.lc.get(i)||[];s.push(e),t.lc.set(i,s)}catch(i){const s=js(i,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function gd(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function yd(n,e,t){const i=b(n);let s=i.hc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.hc[i.currentUser.toKey()]=s}}function Is(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.rc.get(e))n.ic.delete(i),t&&n.sc.wc(i,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(i=>{n.ac.containsKey(i)||Wv(n,i)})}function Wv(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(eo(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),_d(n))}function bu(n,e,t){for(const i of t)i instanceof Vv?(n.ac.addReference(i.key,e),oR(n,i)):i instanceof Bv?(v("SyncEngine","Document no longer in limbo: "+i.key),n.ac.removeReference(i.key,e),n.ac.containsKey(i.key)||Wv(n,i.key)):C()}function oR(n,e){const t=e.key,i=t.path.canonicalString();n.uc.get(t)||n.oc.has(i)||(v("SyncEngine","New document in limbo: "+t),n.oc.add(i),_d(n))}function _d(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new E(q.fromString(e)),i=n.fc.next();n.cc.set(i,new XN(t)),n.uc=n.uc.insert(t,i),qc(n.remoteStore,new En(rt(Vs(t.path)),i,2,tt.at))}}async function hn(n,e,t){const i=b(n),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach((a,c)=>{o.push(i._c(c,e,t).then(l=>{if((l||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=sd.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.sc.Wo(s),await async function(a,c){const l=b(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>m.forEach(c,h=>m.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>m.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!jn(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,p)}}}(i.localStore,r))}async function aR(n,e){const t=b(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await bv(t.localStore,e);t.currentUser=e,function(s,r){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new _(g.CANCELLED,r))})}),s.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await hn(t,i.ji)}}function cR(n,e){const t=b(n),i=t.cc.get(e);if(i&&i.nc)return O().add(i.key);{let s=O();const r=t.rc.get(e);if(!r)return s;for(const o of r){const a=t.ic.get(o);s=s.unionWith(a.view.ju)}return s}}async function lR(n,e){const t=b(n),i=await Ba(t.localStore,e.query,!0),s=e.view.tc(i);return t.isPrimaryClient&&bu(t,e.targetId,s.Xu),s}async function uR(n,e){const t=b(n);return Av(t.localStore,e).then(i=>hn(t,i))}async function hR(n,e,t,i){const s=b(n),r=await function(o,a){const c=b(o),l=b(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):m.resolve(null)))}(s.localStore,e);r!==null?(t==="pending"?await Ws(s.remoteStore):t==="acknowledged"||t==="rejected"?(yd(s,e,i||null),gd(s,e),function(o,a){b(b(o).mutationQueue).An(a)}(s.localStore,e)):C(),await hn(s,r)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function dR(n,e){const t=b(n);if(vd(t),wd(t),e===!0&&t.dc!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),s=await Zp(t,i.toArray());t.dc=!0,await Tu(t.remoteStore,!0);for(const r of s)qc(t.remoteStore,r)}else if(e===!1&&t.dc!==!1){const i=[];let s=Promise.resolve();t.rc.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?i.push(o):s=s.then(()=>(Is(t,o),vs(t.localStore,o,!0))),eo(t.remoteStore,o)}),await s,await Zp(t,i),function(r){const o=b(r);o.cc.forEach((a,c)=>{eo(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new le(E.comparator)}(t),t.dc=!1,await Tu(t.remoteStore,!1)}}async function Zp(n,e,t){const i=b(n),s=[],r=[];for(const o of e){let a;const c=i.rc.get(o);if(c&&c.length!==0){a=await _s(i.localStore,rt(c[0]));for(const l of c){const u=i.ic.get(l),h=await lR(i,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await kv(i.localStore,o);a=await _s(i.localStore,l),await md(i,Gv(l),o,!1,a.resumeToken)}s.push(a)}return i.sc.Wo(r),s}function Gv(n){return P_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function fR(n){const e=b(n);return b(b(e.localStore).persistence).vi()}async function pR(n,e,t,i){const s=b(n);if(s.dc)return void v("SyncEngine","Ignoring unexpected query state notification.");const r=s.rc.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await Av(s.localStore,L_(r[0])),a=xo.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ye.EMPTY_BYTE_STRING);await hn(s,o,a);break}case"rejected":await vs(s.localStore,e,!0),Is(s,e,i);break;default:C()}}async function mR(n,e,t){const i=vd(n);if(i.dc){for(const s of e){if(i.rc.has(s)){v("SyncEngine","Adding an already active target "+s);continue}const r=await kv(i.localStore,s),o=await _s(i.localStore,r);await md(i,Gv(r),o.targetId,!1,o.resumeToken),qc(i.remoteStore,o)}for(const s of t)i.rc.has(s)&&await vs(i.localStore,s,!1).then(()=>{eo(i.remoteStore,s),Is(i,s)}).catch(Gn)}}function vd(n){const e=b(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$v.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nR.bind(null,e),e.sc.Wo=KN.bind(null,e.eventManager),e.sc.wc=HN.bind(null,e.eventManager),e}function wd(n){const e=b(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sR.bind(null,e),e}function gR(n,e,t){const i=b(n);(async function(s,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=b(h),p=Ce(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(p)>=0)}(s.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Uv(a));const c=new QN(a,s.localStore,r.It);let l=await r.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await r.mc()}const u=await c.complete();return await hn(s,u.Lu,void 0),await function(h,d){const f=b(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return fs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(i,e,t).then(s=>{i.sharedClientState.notifyBundleLoaded(s)})}class jv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Tv(this.persistence,new Ev,e.initialUser,this.It)}yc(e){return new Iv(Bc.Bs,this.It)}gc(e){return new Rv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kv extends jv{constructor(e,t,i){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await wd(this.Ac.syncEngine),await Ws(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return Tv(this.persistence,new Ev,e.initialUser,this.It)}Tc(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new oN(i,e.asyncQueue,t)}Ec(e,t){const i=new Wk(t,this.persistence);return new $k(e.asyncQueue,i)}yc(e){const t=id(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new nd(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,Dv(),ga(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Rv}}class yR extends Kv{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Ul&&(this.sharedClientState.syncEngine={Fr:hR.bind(null,t),$r:pR.bind(null,t),Br:mR.bind(null,t),vi:fR.bind(null,t),Mr:uR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async i=>{await dR(this.Ac.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}gc(e){const t=Dv();if(!Ul.C(t))throw new _(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=id(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ul(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class Id{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Jp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=aR.bind(null,this.syncEngine),await Tu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jN}createDatastore(e){const t=Oo(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new NN(s));var s;return function(r,o,a,c){return new xN(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Jp(this.syncEngine,a,0),o=zp.C()?new zp:new CN,new ON(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,c,l){const u=new JN(i,s,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);v("RemoteStore","RemoteStore shutting down."),t._u.add(5),await $s(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e,t){if(!t)throw new _(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hv(n,e,t,i){if(e===!0&&i===!0)throw new _(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function em(n){if(!E.isDocumentKey(n))throw new _(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tm(n){if(E.isDocumentKey(n))throw new _(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":C()}function $(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$c(n);throw new _(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function zv(n,e){if(e<=0)throw new _(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;class im{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new _(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Hv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new im(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Rk;switch(t.type){case"gapi":const i=t.client;return new Ok(i,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new _(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nm.get(e);t&&(v("ComponentProvider","Removing Datastore"),nm.delete(e),t.terminate())}(this),Promise.resolve()}}function _R(n,e,t,i={}){var s;const r=(n=$(n,Mo))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&fs("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Ee.MOCK_USER;else{o=ig(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new _(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(c)}n._authCredentials=new Dk(new v_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Z(this.firestore,e,this._key)}}class je{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new je(this.firestore,e,this._query)}}class Bt extends je{constructor(e,t,i){super(e,t,Vs(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Z(this.firestore,null,new E(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function Qv(n,e,...t){if(n=S(n),Ed("collection","path",e),n instanceof Mo){const i=q.fromString(e,...t);return tm(i),new Bt(n,null,i)}{if(!(n instanceof Z||n instanceof Bt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(q.fromString(e,...t));return tm(i),new Bt(n.firestore,null,i)}}function vR(n,e){if(n=$(n,Mo),Ed("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new je(n,null,function(t){return new ln(q.emptyPath(),t)}(e))}function Ga(n,e,...t){if(n=S(n),arguments.length===1&&(e=w_.R()),Ed("doc","path",e),n instanceof Mo){const i=q.fromString(e,...t);return em(i),new Z(n,null,new E(i))}{if(!(n instanceof Z||n instanceof Bt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(q.fromString(e,...t));return em(i),new Z(n.firestore,n instanceof Bt?n.converter:null,new E(i))}}function Yv(n,e){return n=S(n),e=S(e),(n instanceof Z||n instanceof Bt)&&(e instanceof Z||e instanceof Bt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Xv(n,e){return n=S(n),e=S(e),n instanceof je&&e instanceof je&&n.firestore===e.firestore&&Ro(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const i={value:n.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):de("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new Se,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(i=>{i&&i.Ou()?this.metadata.resolve(i.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.ku)}`))},i=>this.metadata.reject(i))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),i=Number(t);isNaN(i)&&this.Dc(`length string (${t}) is not valid number`);const s=await this.Cc(i);return new zN(JSON.parse(s),e.length+i)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new _(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const r=b(i),o=Jr(r.It)+"/documents",a={documents:s.map(h=>Xr(r.It,h))},c=await r._o("BatchGetDocuments",o,a,s.length),l=new Map;c.forEach(h=>{const d=EA(r.It,h);l.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=l.get(h.toString());D(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new qs(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const s=E.fromPath(i);this.mutations.push(new zh(s,this.precondition(s)))}),await async function(t,i){const s=b(t),r=Jr(s.It)+"/documents",o={writes:i.map(a=>Zr(s.It,a))};await s.ao("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw C();t=N.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new _(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(N.min())?te.exists(!1):te.updateTime(t):te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(N.min()))throw new _(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return te.updateTime(t)}return te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ER{constructor(e,t,i,s,r){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=s,this.deferred=r,this.kc=i.maxAttempts,this.xo=new od(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new IR(this.datastore),t=this.Mc(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.Fc(s)}))}).catch(i=>{this.Fc(i)})})}Mc(e){try{const t=this.updateFunction(e);return!Ao(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!K_(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=w_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=js(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Jv(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bv(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Zv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Td(n);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>Qp(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Qp(e.remoteStore,r)),n.onlineComponents=e}async function Td(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Jv(n,new jv)),n.offlineComponents}async function Gc(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Zv(n,new Id)),n.onlineComponents}function ew(n){return Td(n).then(e=>e.persistence)}function bd(n){return Td(n).then(e=>e.localStore)}function tw(n){return Gc(n).then(e=>e.remoteStore)}function Sd(n){return Gc(n).then(e=>e.syncEngine)}function bR(n){return Gc(n).then(e=>e.datastore)}async function Es(n){const e=await Gc(n),t=e.eventManager;return t.onListen=ZN.bind(null,e.syncEngine),t.onUnlisten=eR.bind(null,e.syncEngine),t}function SR(n){return n.asyncQueue.enqueue(async()=>{const e=await ew(n),t=await tw(n);return e.setNetworkEnabled(!0),function(i){const s=b(i);return s._u.delete(0),Lo(s)}(t)})}function CR(n){return n.asyncQueue.enqueue(async()=>{const e=await ew(n),t=await tw(n);return e.setNetworkEnabled(!1),async function(i){const s=b(i);s._u.add(0),await $s(s),s.gu.set("Offline")}(t)})}function kR(n,e){const t=new Se;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await function(a,c){const l=b(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(i,s);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new _(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=js(o,`Failed to get document '${s} from cache`);r.reject(a)}}(await bd(n),e,t)),t.promise}function nw(n,e,t={}){const i=new Se;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Wc({next:h=>{r.enqueueAndForget(()=>dd(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new _(g.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new pd(Vs(o.path),l,{includeMetadataChanges:!0,Nu:!0});return hd(s,u)}(await Es(n),n.asyncQueue,e,t,i)),i.promise}function AR(n,e){const t=new Se;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await Ba(i,s,!0),a=new qv(s,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=js(o,`Failed to execute query '${s} against cache`);r.reject(a)}}(await bd(n),e,t)),t.promise}function iw(n,e,t={}){const i=new Se;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Wc({next:h=>{r.enqueueAndForget(()=>dd(s,u)),h.fromCache&&a.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new pd(o,l,{includeMetadataChanges:!0,Nu:!0});return hd(s,u)}(await Es(n),n.asyncQueue,e,t,i)),i.promise}function NR(n,e){const t=new Wc(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){b(i).Ru.add(s),s.next()}(await Es(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){b(i).Ru.delete(s)}(await Es(n),t))}}function RR(n,e,t,i){const s=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new wR(c,l)}(function(c,l){if(c instanceof Uint8Array)return sm(c,l);if(c instanceof ArrayBuffer)return sm(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Oo(e));n.asyncQueue.enqueueAndForget(async()=>{gR(await Sd(n),s,i)})}function DR(n,e){return n.asyncQueue.enqueue(async()=>function(t,i){const s=b(t);return s.persistence.runTransaction("Get named query","readonly",r=>s.Ns.getNamedQuery(r,i))}(await bd(n),e))}class xR{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new od(this,"async_queue_retry"),this.Wc=()=>{const t=ga();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=ga();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new Se;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!jn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw de("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=t,t}enqueueAfterDelay(e,t,i){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const s=ud.createAndSchedule(this,e,t,i,r=>this.Yc(r));return this.qc.push(s),s}zc(){this.Kc&&C()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function Su(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class PR{constructor(){this._progressObserver={},this._taskCompletionResolver=new Se,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=-1;class ue extends Mo{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new xR,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sw(this),this._firestoreClient.terminate()}}function xe(n){return n._firestoreClient||sw(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function sw(n){var e;const t=n._freezeSettings(),i=function(s,r,o,a){return new Kk(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new TR(n._authCredentials,n._appCheckCredentials,n._queue,i)}function LR(n,e){ow(n=$(n,ue));const t=xe(n),i=n._freezeSettings(),s=new Id;return rw(t,s,new Kv(s,i.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function MR(n){ow(n=$(n,ue));const e=xe(n),t=n._freezeSettings(),i=new Id;return rw(e,i,new yR(i,t.cacheSizeBytes))}function rw(n,e,t){const i=new Se;return n.asyncQueue.enqueue(async()=>{try{await Jv(n,t),await Zv(n,e),i.resolve()}catch(s){const r=s;if(!function(o){return o.name==="FirebaseError"?o.code===g.FAILED_PRECONDITION||o.code===g.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;fs("Error enabling offline persistence. Falling back to persistence disabled: "+r),i.reject(r)}}).then(()=>i.promise)}function FR(n){if(n._initialized&&!n._terminated)throw new _(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Se;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!St.C())return Promise.resolve();const i=t+"main";await St.delete(i)}(id(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function UR(n){return function(e){const t=new Se;return e.asyncQueue.enqueueAndForget(async()=>rR(await Sd(e),t)),t.promise}(xe(n=$(n,ue)))}function VR(n){return SR(xe(n=$(n,ue)))}function BR(n){return CR(xe(n=$(n,ue)))}function qR(n,e){const t=xe(n=$(n,ue)),i=new PR;return RR(t,n._databaseId,e,i),i}function $R(n,e){return DR(xe(n=$(n,ue)),e).then(t=>t?new je(n,null,t.query):null)}function ow(n){if(n._initialized||n._terminated)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(ye.fromBase64String(e))}catch(t){throw new _(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gt(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/^__.*__$/;class GR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bs(e,this.data,t,this.fieldTransforms)}}class aw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Kc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.It=i,this.ignoreUndefinedProperties=s,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:i,oa:!1});return s.ua(e),s}ca(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:i,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ja(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(cw(this.sa)&&WR.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class jR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=i||Oo(e)}da(e,t,i,s=!1){return new Kc({sa:e,methodName:t,fa:i,path:fe.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function qi(n){const e=n._freezeSettings(),t=Oo(n._databaseId);return new jR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hc(n,e,t,i,s,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,s);Nd("Data must be an object, but it was:",o,i);const a=hw(i,o);let c,l;if(r.merge)c=new ut(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Cu(e,h,t);if(!o.contains(d))throw new _(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fw(u,d)||u.push(d)}c=new ut(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new GR(new Me(a),c,l)}class Fo extends Bi{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fo}}function lw(n,e,t){return new Kc({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Cd extends Bi{_toFieldTransform(e){return new Do(e.path,new gs)}isEqual(e){return e instanceof Cd}}class KR extends Bi{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=lw(this,e,!0),i=this._a.map(r=>$i(r,t)),s=new Si(i);return new Do(e.path,s)}isEqual(e){return this===e}}class HR extends Bi{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=lw(this,e,!0),i=this._a.map(r=>$i(r,t)),s=new Ci(i);return new Do(e.path,s)}isEqual(e){return this===e}}class zR extends Bi{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new ys(e.It,V_(e.It,this.wa));return new Do(e.path,t)}isEqual(e){return this===e}}function kd(n,e,t,i){const s=n.da(1,e,t);Nd("Data must be an object, but it was:",s,i);const r=[],o=Me.empty();Vi(i,(c,l)=>{const u=Rd(e,c,t);l=S(l);const h=s.ca(u);if(l instanceof Fo)r.push(u);else{const d=$i(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new ut(r);return new aw(o,a,s.fieldTransforms)}function Ad(n,e,t,i,s,r){const o=n.da(1,e,t),a=[Cu(e,i,t)],c=[s];if(r.length%2!=0)throw new _(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Cu(e,r[d])),c.push(r[d+1]);const l=[],u=Me.empty();for(let d=a.length-1;d>=0;--d)if(!fw(l,a[d])){const f=a[d];let p=c[d];p=S(p);const y=o.ca(f);if(p instanceof Fo)l.push(f);else{const T=$i(p,y);T!=null&&(l.push(f),u.set(f,T))}}const h=new ut(l);return new aw(u,h,o.fieldTransforms)}function uw(n,e,t,i=!1){return $i(t,n.da(i?4:3,e))}function $i(n,e){if(dw(n=S(n)))return Nd("Unsupported field value:",e,n),hw(n,e);if(n instanceof Bi)return function(t,i){if(!cw(i.sa))throw i.ha(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ha(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=$i(o,i.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=S(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return V_(i.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=ie.fromDate(t);return{timestampValue:Yr(i.It,s)}}if(t instanceof ie){const s=new ie(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Yr(i.It,s)}}if(t instanceof jc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Gt)return{bytesValue:Z_(i.It,t._byteString)};if(t instanceof Z){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qh(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.ha(`Unsupported field value: ${$c(t)}`)}(n,e)}function hw(n,e){const t={};return k_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(n,(i,s)=>{const r=$i(s,e.ra(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function dw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof jc||n instanceof Gt||n instanceof Z||n instanceof Bi)}function Nd(n,e,t){if(!dw(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=$c(t);throw i==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+i)}}function Cu(n,e,t){if((e=S(e))instanceof On)return e._internalPath;if(typeof e=="string")return Rd(n,e);throw ja("Field path arguments must be of type string or ",n,!1,void 0,t)}const QR=new RegExp("[~\\*/\\[\\]]");function Rd(n,e,t){if(e.search(QR)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new On(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ja(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new _(g.INVALID_ARGUMENT,a+n+c)}function fw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YR extends to{data(){return super.data()}}function zc(n,e){return typeof e=="string"?Rd(n,e):e instanceof On?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uo{}function pn(n,...e){for(const t of e)n=t._apply(n);return n}class XR extends Uo{constructor(e,t,i){super(),this.ma=e,this.ga=t,this.ya=i,this.type="where"}_apply(e){const t=qi(e.firestore),i=function(s,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){om(u,l);const f=[];for(const p of u)f.push(rm(a,s,p));h={arrayValue:{values:f}}}else h=rm(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||om(u,l),h=uw(o,r,u,l==="in"||l==="not-in");const d=Fe.create(c,l,h);return function(f,p){if(p.dt()){const T=jh(f);if(T!==null&&!T.isEqual(p.field))throw new _(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${p.field.toString()}'`);const F=Gh(f);F!==null&&vw(f,p.field,F)}const y=function(T,F){for(const W of T.filters)if(F.indexOf(W.op)>=0)return W.op;return null}(f,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(y!==null)throw y===p.op?new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${y.toString()}' filters.`)}(s,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new je(e.firestore,e.converter,function(s,r){const o=s.filters.concat([r]);return new ln(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function JR(n,e,t){const i=e,s=zc("where",n);return new XR(s,i,t)}class ZR extends Uo{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new os(s,r);return function(a,c){if(Gh(a)===null){const l=jh(a);l!==null&&vw(a,l,c.field)}}(i,o),o}(e._query,this.ma,this.pa);return new je(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new ln(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function eD(n,e="asc"){const t=e,i=zc("orderBy",n);return new ZR(i,t)}class mw extends Uo{constructor(e,t,i){super(),this.type=e,this.Ia=t,this.Ta=i}_apply(e){return new je(e.firestore,e.converter,Fa(e._query,this.Ia,this.Ta))}}function tD(n){return zv("limit",n),new mw("limit",n,"F")}function nD(n){return zv("limitToLast",n),new mw("limitToLast",n,"L")}class gw extends Uo{constructor(e,t,i){super(),this.type=e,this.Ea=t,this.Aa=i}_apply(e){const t=_w(e,this.type,this.Ea,this.Aa);return new je(e.firestore,e.converter,function(i,s){return new ln(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function iD(...n){return new gw("startAt",n,!0)}function sD(...n){return new gw("startAfter",n,!1)}class yw extends Uo{constructor(e,t,i){super(),this.type=e,this.Ea=t,this.Aa=i}_apply(e){const t=_w(e,this.type,this.Ea,this.Aa);return new je(e.firestore,e.converter,function(i,s){return new ln(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function rD(...n){return new yw("endBefore",n,!1)}function oD(...n){return new yw("endAt",n,!0)}function _w(n,e,t,i){if(t[0]=S(t[0]),t[0]instanceof to)return function(s,r,o,a,c){if(!a)throw new _(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of ms(s))if(u.field.isKeyField())l.push(Ti(r,a.key));else{const h=a.data.field(u.field);if(Wh(h))throw new _(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new _(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new xn(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const s=qi(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new _(g.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new _(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Kh(r)&&p.indexOf("/")!==-1)throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const y=r.path.child(q.fromString(p));if(!E.isDocumentKey(y))throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const T=new E(y);d.push(Ti(o,T))}else{const y=uw(a,c,p);d.push(y)}}return new xn(d,u)}(n._query,n.firestore._databaseId,s,e,t,i)}}function rm(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new _(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kh(e)&&t.indexOf("/")!==-1)throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(q.fromString(t));if(!E.isDocumentKey(i))throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ti(n,new E(i))}if(t instanceof Z)return Ti(n,t._key);throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(t)}.`)}function om(n,e){if(!Array.isArray(n)||n.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new _(g.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function vw(n,e,t){if(!t.isEqual(e))throw new _(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw C()}}convertObject(e,t){const i={};return Vi(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new jc(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=A_(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=Nn(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=q.fromString(e);D(cv(i));const s=new Rn(i.get(1),i.get(3)),r=new E(i.popFirst(5));return s.isEqual(t)||de(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class aD extends Dd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Z(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rn extends to{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(zc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Sr extends rn{data(e={}){return super.data(e)}}class Ln{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Sr(this._firestore,this._userDataWriter,i.key,i,new li(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Sr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new li(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Sr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new li(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:cD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}function ww(n,e){return n instanceof rn&&e instanceof rn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ln&&e instanceof Ln&&n._firestore===e._firestore&&Xv(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(n){n=$(n,Z);const e=$(n.firestore,ue);return nw(xe(e),n._key).then(t=>xd(e,n,t))}class Wi extends Dd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Z(this.firestore,null,t)}}function uD(n){n=$(n,Z);const e=$(n.firestore,ue),t=xe(e),i=new Wi(e);return kR(t,n._key).then(s=>new rn(e,i,n._key,s,new li(s!==null&&s.hasLocalMutations,!0),n.converter))}function hD(n){n=$(n,Z);const e=$(n.firestore,ue);return nw(xe(e),n._key,{source:"server"}).then(t=>xd(e,n,t))}function dD(n){n=$(n,je);const e=$(n.firestore,ue),t=xe(e),i=new Wi(e);return pw(n._query),iw(t,n._query).then(s=>new Ln(e,i,n,s))}function fD(n){n=$(n,je);const e=$(n.firestore,ue),t=xe(e),i=new Wi(e);return AR(t,n._query).then(s=>new Ln(e,i,n,s))}function pD(n){n=$(n,je);const e=$(n.firestore,ue),t=xe(e),i=new Wi(e);return iw(t,n._query,{source:"server"}).then(s=>new Ln(e,i,n,s))}function am(n,e,t){n=$(n,Z);const i=$(n.firestore,ue),s=Qc(n.converter,e,t);return Vo(i,[Hc(qi(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,te.none())])}function cm(n,e,t,...i){n=$(n,Z);const s=$(n.firestore,ue),r=qi(s);let o;return o=typeof(e=S(e))=="string"||e instanceof On?Ad(r,"updateDoc",n._key,e,t,i):kd(r,"updateDoc",n._key,e),Vo(s,[o.toMutation(n._key,te.exists(!0))])}function mD(n){return Vo($(n.firestore,ue),[new qs(n._key,te.none())])}function gD(n,e){const t=$(n.firestore,ue),i=Ga(n),s=Qc(n.converter,e);return Vo(t,[Hc(qi(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,te.exists(!1))]).then(()=>i)}function Iw(n,...e){var t,i,s;n=S(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Su(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Su(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(n instanceof Z)l=$(n.firestore,ue),u=Vs(n._key.path),c={next:h=>{e[o]&&e[o](xd(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=$(n,je);l=$(h.firestore,ue),u=h._query;const d=new Wi(l);c={next:f=>{e[o]&&e[o](new Ln(l,d,h,f))},error:e[o+1],complete:e[o+2]},pw(n._query)}return function(h,d,f,p){const y=new Wc(p),T=new pd(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>hd(await Es(h),T)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>dd(await Es(h),T))}}(xe(l),u,a,c)}function yD(n,e){return NR(xe(n=$(n,ue)),Su(e)?e:{next:e})}function Vo(n,e){return function(t,i){const s=new Se;return t.asyncQueue.enqueueAndForget(async()=>tR(await Sd(t),i,s)),s.promise}(xe(n),e)}function xd(n,e,t){const i=t.docs.get(e._key),s=new Wi(n);return new rn(n,s,e._key,i,new li(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const _D={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qi(e)}set(e,t,i){this._verifyNotCommitted();const s=gn(e,this._firestore),r=Qc(s.converter,t,i),o=Hc(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,te.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const r=gn(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof On?Ad(this._dataReader,"WriteBatch.update",r._key,t,i,s):kd(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gn(e,this._firestore);return this._mutations=this._mutations.concat(new qs(t._key,te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gn(n,e){if((n=S(n)).firestore!==e)throw new _(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wD extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=qi(e)}get(e){const t=gn(e,this._firestore),i=new aD(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return C();const r=s[0];if(r.isFoundDocument())return new to(this._firestore,i,r.key,r,t.converter);if(r.isNoDocument())return new to(this._firestore,i,t._key,null,t.converter);throw C()})}set(e,t,i){const s=gn(e,this._firestore),r=Qc(s.converter,t,i),o=Hc(this._dataReader,"Transaction.set",s._key,r,s.converter!==null,i);return this._transaction.set(s._key,o),this}update(e,t,i,...s){const r=gn(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof On?Ad(this._dataReader,"Transaction.update",r._key,t,i,s):kd(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=gn(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gn(e,this._firestore),i=new Wi(this._firestore);return super.get(e).then(s=>new rn(this._firestore,i,t._key,s._document,new li(!1,!1),t.converter))}}function ID(n,e,t){n=$(n,ue);const i=Object.assign(Object.assign({},_D),t);return function(s){if(s.maxAttempts<1)throw new _(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,r,o){const a=new Se;return s.asyncQueue.enqueueAndForget(async()=>{const c=await bR(s);new ER(s.asyncQueue,c,o,r,a).run()}),a.promise}(xe(n),s=>e(new wD(n,s)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(){return new Fo("deleteField")}function TD(){return new Cd("serverTimestamp")}function bD(...n){return new KR("arrayUnion",n)}function SD(...n){return new HR("arrayRemove",n)}function CD(n){return new zR("increment",n)}(function(n,e=!0){(function(t){Us=t})(Bn),tn(new dt("firestore",(t,{instanceIdentifier:i,options:s})=>{const r=t.getProvider("app").getImmediate(),o=new ue(new xk(t.getProvider("auth-internal")),new Mk(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),It(rp,"3.7.3",n),It(rp,"3.7.3","esm2017")})();const kD="@firebase/firestore-compat",AD="0.2.3";/**
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
 */function Pd(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new _("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){if(typeof Uint8Array>"u")throw new _("unimplemented","Uint8Arrays are not available in this environment.")}function um(){if(!Gk())throw new _("unimplemented","Blobs are unavailable in Firestore in this environment.")}class no{constructor(e){this._delegate=e}static fromBase64String(e){return um(),new no(Gt.fromBase64String(e))}static fromUint8Array(e){return lm(),new no(Gt.fromUint8Array(e))}toBase64(){return um(),this._delegate.toBase64()}toUint8Array(){return lm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){return ND(n,["next","error","complete"])}function ND(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{enableIndexedDbPersistence(e,t){return LR(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return MR(e._delegate)}clearIndexedDbPersistence(e){return FR(e._delegate)}}class Ew{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Rn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&fs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){_R(this._delegate,e,t,i)}enableNetwork(){return VR(this._delegate)}disableNetwork(){return BR(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,Hv("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return UR(this._delegate)}onSnapshotsInSync(e){return yD(this._delegate,e)}get app(){if(!this._appCompat)throw new _("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ts(this,Qv(this._delegate,e))}catch(t){throw He(t,"collection()","Firestore.collection()")}}doc(e){try{return new _t(this,Ga(this._delegate,e))}catch(t){throw He(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ke(this,vR(this._delegate,e))}catch(t){throw He(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ID(this._delegate,t=>e(new Tw(this,t)))}batch(){return xe(this._delegate),new bw(new vD(this._delegate,e=>Vo(this._delegate,e)))}loadBundle(e){return qR(this._delegate,e)}namedQuery(e){return $R(this._delegate,e).then(t=>t?new Ke(this,t):null)}}class Yc extends Dd{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(new Gt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return _t.forKey(t,this.firestore,null)}}function DD(n){Ak(n)}class Tw{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Yc(e)}get(e){const t=ui(e);return this._delegate.get(t).then(i=>new io(this._firestore,new rn(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const s=ui(e);return i?(Pd("Transaction.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const r=ui(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,i,...s),this}delete(e){const t=ui(e);return this._delegate.delete(t),this}}class bw{constructor(e){this._delegate=e}set(e,t,i){const s=ui(e);return i?(Pd("WriteBatch.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const r=ui(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,i,...s),this}delete(e){const t=ui(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ri{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new Sr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new so(this._firestore,i),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=Ri.INSTANCES;let s=i.get(e);s||(s=new WeakMap,i.set(e,s));let r=s.get(t);return r||(r=new Ri(e,new Yc(e),t),s.set(t,r)),r}}Ri.INSTANCES=new WeakMap;class _t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Yc(e)}static forPath(e,t,i){if(e.length%2!==0)throw new _("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new _t(t,new Z(t._delegate,i,new E(e)))}static forKey(e,t,i){return new _t(t,new Z(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new Ts(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ts(this.firestore,Qv(this._delegate,e))}catch(t){throw He(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof Z?Yv(this._delegate,e):!1}set(e,t){t=Pd("DocumentReference.set",t);try{return t?am(this._delegate,e,t):am(this._delegate,e)}catch(i){throw He(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?cm(this._delegate,e):cm(this._delegate,e,t,...i)}catch(s){throw He(s,"updateDoc()","DocumentReference.update()")}}delete(){return mD(this._delegate)}onSnapshot(...e){const t=Sw(e),i=Cw(e,s=>new io(this.firestore,new rn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Iw(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=uD(this._delegate):(e==null?void 0:e.source)==="server"?t=hD(this._delegate):t=lD(this._delegate),t.then(i=>new io(this.firestore,new rn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new _t(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function He(n,e,t){return n.message=n.message.replace(e,t),n}function Sw(n){for(const e of n)if(typeof e=="object"&&!ku(e))return e;return{}}function Cw(n,e){var t,i;let s;return ku(n[0])?s=n[0]:ku(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:r=>{s.next&&s.next(e(r))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(i=s.complete)===null||i===void 0?void 0:i.bind(s)}}class io{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new _t(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ww(this._delegate,e._delegate)}}class so extends io{data(e){const t=this._delegate.data(e);return Nk(t!==void 0),t}}class Ke{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Yc(e)}where(e,t,i){try{return new Ke(this.firestore,pn(this._delegate,JR(e,t,i)))}catch(s){throw He(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ke(this.firestore,pn(this._delegate,eD(e,t)))}catch(i){throw He(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ke(this.firestore,pn(this._delegate,tD(e)))}catch(t){throw He(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ke(this.firestore,pn(this._delegate,nD(e)))}catch(t){throw He(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ke(this.firestore,pn(this._delegate,iD(...e)))}catch(t){throw He(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ke(this.firestore,pn(this._delegate,sD(...e)))}catch(t){throw He(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ke(this.firestore,pn(this._delegate,rD(...e)))}catch(t){throw He(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ke(this.firestore,pn(this._delegate,oD(...e)))}catch(t){throw He(t,"endAt()","Query.endAt()")}}isEqual(e){return Xv(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=fD(this._delegate):(e==null?void 0:e.source)==="server"?t=pD(this._delegate):t=dD(this._delegate),t.then(i=>new Au(this.firestore,new Ln(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=Sw(e),i=Cw(e,s=>new Au(this.firestore,new Ln(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Iw(this._delegate,t,i)}withConverter(e){return new Ke(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class xD{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new so(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Au{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ke(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new so(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new xD(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new so(this._firestore,i))})}isEqual(e){return ww(this._delegate,e._delegate)}}class Ts extends Ke{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new _t(this.firestore,e):null}doc(e){try{return e===void 0?new _t(this.firestore,Ga(this._delegate)):new _t(this.firestore,Ga(this._delegate,e))}catch(t){throw He(t,"doc()","CollectionReference.doc()")}}add(e){return gD(this._delegate,e).then(t=>new _t(this.firestore,t))}isEqual(e){return Yv(this._delegate,e._delegate)}withConverter(e){return new Ts(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ui(n){return $(n,Z)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(...e){this._delegate=new On(...e)}static documentId(){return new Od(fe.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof On?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this._delegate=e}static serverTimestamp(){const e=TD();return e._methodName="FieldValue.serverTimestamp",new ri(e)}static delete(){const e=ED();return e._methodName="FieldValue.delete",new ri(e)}static arrayUnion(...e){const t=bD(...e);return t._methodName="FieldValue.arrayUnion",new ri(t)}static arrayRemove(...e){const t=SD(...e);return t._methodName="FieldValue.arrayRemove",new ri(t)}static increment(e){const t=CD(e);return t._methodName="FieldValue.increment",new ri(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const PD={Firestore:Ew,GeoPoint:jc,Timestamp:ie,Blob:no,Transaction:Tw,WriteBatch:bw,DocumentReference:_t,DocumentSnapshot:io,Query:Ke,QueryDocumentSnapshot:so,QuerySnapshot:Au,CollectionReference:Ts,FieldPath:Od,FieldValue:ri,setLogLevel:DD,CACHE_SIZE_UNLIMITED:OR};function OD(n,e){n.INTERNAL.registerComponent(new dt("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(i,s)},"PUBLIC").setServiceProps(Object.assign({},PD)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n){OD(n,(e,t)=>new Ew(e,t,new RD)),n.registerVersion(kD,AD)}LD(ft);const hm="@firebase/database",dm="0.13.10";/**
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
 */let kw="";function Aw(n){kw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:xr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MD(e)}}catch{}return new FD},hi=Nw("localStorage"),Nu=Nw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Ds("@firebase/database"),Rw=function(){let n=1;return function(){return n++}}(),Dw=function(n){const e=yE(n),t=new pE;t.update(e);const i=t.digest();return Qu.encodeByteArray(i)},Bo=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Bo.apply(null,i):typeof i=="object"?e+=ge(i):e+=i,e+=" "}return e};let gi=null,fm=!0;const xw=function(n,e){I(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(cs.logLevel=B.VERBOSE,gi=cs.log.bind(cs),e&&Nu.set("logging_enabled",!0)):typeof n=="function"?gi=n:(gi=null,Nu.remove("logging_enabled"))},be=function(...n){if(fm===!0&&(fm=!1,gi===null&&Nu.get("logging_enabled")===!0&&xw(!0)),gi){const e=Bo.apply(null,n);gi(e)}},qo=function(n){return function(...e){be(n,...e)}},Ru=function(...n){const e="FIREBASE INTERNAL ERROR: "+Bo(...n);cs.error(e)},jt=function(...n){const e=`FIREBASE FATAL ERROR: ${Bo(...n)}`;throw cs.error(e),new Error(e)},Ge=function(...n){const e="FIREBASE WARNING: "+Bo(...n);cs.warn(e)},UD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},VD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},on="[MIN_NAME]",Kt="[MAX_NAME]",Gi=function(n,e){if(n===e)return 0;if(n===on||e===Kt)return-1;if(e===on||n===Kt)return 1;{const t=Ka(n),i=Ka(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},BD=function(n,e){return n===e?0:n<e?-1:1},or=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ge(e))},Ld=function(n){if(typeof n!="object"||n===null)return ge(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ge(e[i]),t+=":",t+=Ld(n[e[i]]);return t+="}",t},Pw=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ow=function(n){I(!Xc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},qD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$D=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const GD=new RegExp("^-?(0*)\\d{1,10}$"),Lw=-2147483648,Md=2147483647,Ka=function(n){if(GD.test(n)){const e=Number(n);if(e>=Lw&&e<=Md)return e}return null},Ks=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ge("Exception was thrown by user callback.",t),e},Math.floor(0))}},jD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class KD{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="5",Mw="v",Fw="s",Uw="r",Vw="f",Bw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qw="ls",$w="p",Du="ac",Ww="websocket",Gw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kw(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===Ww)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Gw)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zD(n)&&(t.ns=n.namespace);const s=[];return Ne(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.counters_={}}incrementCounter(e,t=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return JI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={},Bl={};function Ud(n){const e=n.toString();return Vl[e]||(Vl[e]=new QD),Vl[e]}function YD(n,e){const t=n.toString();return Bl[t]||(Bl[t]=e()),Bl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ks(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="start",JD="close",ZD="pLPCommand",ex="pRTLPCB",Hw="id",zw="pw",Qw="ser",tx="cb",nx="seg",ix="ts",sx="d",rx="dframe",Yw=1870,Xw=30,ox=Yw-Xw,ax=25e3,cx=3e4;class vn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=Ud(t),this.urlFn=c=>(this.appCheckToken&&(c[Du]=this.appCheckToken),Kw(t,Gw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new XD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cx)),VD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pm)this.id=a,this.password=c;else if(o===JD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[pm]="t",i[Qw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tx]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Mw]=Fd,this.transportSessionId&&(i[Fw]=this.transportSessionId),this.lastSessionId&&(i[qw]=this.lastSessionId),this.applicationId&&(i[$w]=this.applicationId),this.appCheckToken&&(i[Du]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bw.test(location.hostname)&&(i[Uw]=Vw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qD()&&!$D()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Jm(t),s=Pw(i,ox);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[rx]="t",i[Hw]=e,i[zw]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ge(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vd{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rw(),window[ZD+this.uniqueCallbackIdentifier]=e,window[ex+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hw]=this.myID,e[zw]=this.myPW,e[Qw]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xw+i.length<=Yw;){const o=this.pendingSegs.shift();i=i+"&"+nx+s+"="+o.seg+"&"+ix+s+"="+o.ts+"&"+sx+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ax)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=16384,ux=45e3;let Ha=null;typeof MozWebSocket<"u"?Ha=MozWebSocket:typeof WebSocket<"u"&&(Ha=WebSocket);class yt{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=Ud(t),this.connURL=yt.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Mw]=Fd,typeof location<"u"&&location.hostname&&Bw.test(location.hostname)&&(o[Uw]=Vw),t&&(o[Fw]=t),i&&(o[qw]=i),s&&(o[Du]=s),r&&(o[$w]=r),Kw(e,Ww,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let i;tg(),this.mySock=new Ha(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ha!==null&&!yt.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=xr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ge(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Pw(t,lx);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ux))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=yt&&yt.isAvailable();let i=t&&!yt.previouslyFailed();if(e.webSocketOnly&&(t||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[yt];else{const s=this.transports_=[];for(const r of bs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=6e4,dx=5e3,fx=10*1024,px=100*1024,ql="t",mm="d",mx="s",gm="r",gx="e",ym="o",_m="a",vm="n",wm="p",yx="h";class _x{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new bs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>px?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ql in e){const t=e[ql];t===_m?this.upgradeIfSecondaryHealthy_():t===gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=or("t",e),i=or("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=or("t",e),i=or("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=or(ql,e);if(mm in e){const i=e[mm];if(t===yx)this.onHandshake_(i);else if(t===vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mx?this.onConnectionShutdown_(i):t===gm?this.onReset_(i):t===gx?Ru("Server Error: "+i):t===ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ru("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fd!==i&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Zw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new za}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=32,Em=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function G(){return new K("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Mn(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function Bd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vx(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ro(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function eI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function ne(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new K(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function Qe(n,e){const t=L(n),i=L(e);if(t===null)return e;if(t===i)return Qe(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wx(n,e){const t=ro(n,0),i=ro(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=Gi(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function qd(n,e){if(Mn(n)!==Mn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function vt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Mn(n)>Mn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Ix{constructor(e,t){this.errorPrefix_=t,this.parts_=ro(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ac(this.parts_[i]);tI(this)}}function Ex(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ac(e),tI(n)}function Tx(n){const e=n.parts_.pop();n.byteLength_-=ac(e),n.parts_.length>0&&(n.byteLength_-=1)}function tI(n){if(n.byteLength_>Em)throw new Error(n.errorPrefix_+"has a key path longer than "+Em+" bytes ("+n.byteLength_+").");if(n.parts_.length>Im)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Im+") or object contains a cycle "+ei(n))}function ei(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Zw{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new $d}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=1e3,bx=60*5*1e3,Tm=30*1e3,Sx=1.3,Cx=3e4,kx="server_kill",bm=3;class en extends Jw{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=en.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ar,this.maxReconnectDelay_=bx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!tg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$d.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&za.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ge(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new et,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;en.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ht(e,"w")){const i=yi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dE(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ru("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cx&&(this.reconnectDelay_=ar),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+en.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _x(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Ge(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(kx)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),c())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],va(this.interruptReasons_)&&(this.reconnectDelay_=ar,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ld(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){be("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Tm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){be("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kw.replace(/\./g,"-")]=1,Yu()?e["framework.cordova"]=1:oc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=za.getInstance().currentlyOnline();return va(this.interruptReasons_)&&e}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new U(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new U(on,e),s=new U(on,t);return this.compare(i,s)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;class nI extends Jc{static get __EMPTY_NODE(){return oa}static set __EMPTY_NODE(e){oa=e}compare(e,t){return Gi(e.name,t.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return U.MIN}maxPost(){return new U(Kt,oa)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,oa)}toString(){return".key"}}const qt=new nI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Te.RED,this.left=s!=null?s:it.EMPTY_NODE,this.right=r!=null?r:it.EMPTY_NODE}copy(e,t,i,s,r){return new Te(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class Ax{copy(e,t,i,s,r){return this}insert(e,t,i){return new Te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,t=it.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new it(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new aa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new aa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new aa(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new Ax;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(n,e){return Gi(n.name,e.name)}function Wd(n,e){return Gi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;function Rx(n){xu=n}const iI=function(n){return typeof n=="number"?"number:"+Ow(n):"string:"+n},sI=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else I(n===xu||n.isEmpty(),"priority of unexpected type.");I(n===xu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm;class ve{constructor(e,t=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sI(this.priorityNode_)}static set __childrenNodeConstructor(e){Sm=e}static get __childrenNodeConstructor(){return Sm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:L(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=L(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ow(this.value_):e+=this.value_,this.lazyHash_=Dw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(t),r=ve.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI,oI;function Dx(n){rI=n}function xx(n){oI=n}class Px extends Jc{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Gi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Kt,new ve("[PRIORITY-POST]",oI))}makePost(e,t){const i=rI(e);return new U(t,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const X=new Px;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=Math.log(2);class Lx{constructor(e){const t=r=>parseInt(Math.log(r)/Ox,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qa=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Te(d,h.node,Te.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=s(c,f),y=s(f+1,l);return h=n[f],d=t?t(h):h,new Te(d,h.node,Te.BLACK,p,y)}},r=function(c){let l=null,u=null,h=n.length;const d=function(p,y){const T=h-p,F=h;h-=p;const W=s(T+1,F),j=n[T],he=t?t(j):j;f(new Te(he,j.node,y,null,W))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const y=c.nextBitIsOne(),T=Math.pow(2,c.count-(p+1));y?d(T,Te.BLACK):(d(T,Te.BLACK),d(T,Te.RED))}return u},o=new Lx(n.length),a=r(o);return new it(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;const Xi={};class Xt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(Xi&&X,"ChildrenNode.ts has not been loaded"),$l=$l||new Xt({".priority":Xi},{".priority":X}),$l}get(e){const t=yi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof it?t:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,t){I(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(U.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Qa(i,e.getCompare()):a=Xi;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Xt(u,l)}addToIndexes(e,t){const i=wa(this.indexes_,(s,r)=>{const o=yi(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===Xi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(U.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Qa(a,o.getCompare())}else return Xi;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new U(e.name,a))),c.insert(e,e.node)}});return new Xt(i,this.indexSet_)}removeFromIndexes(e,t){const i=wa(this.indexes_,s=>{if(s===Xi)return s;{const r=t.get(e.name);return r?s.remove(new U(e.name,r)):s}});return new Xt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class A{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sI(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return cr||(cr=new A(new it(Wd),null,Xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cr}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?cr:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new U(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?cr:this.priorityNode_;return new A(s,o,r)}}updateChild(e,t){const i=L(e);if(i===null)return t;{I(L(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(X,(o,a)=>{t[o]=a.val(e),i++,r&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iI(this.getPriority().val())+":"),this.forEachChild(X,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Dw(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new U(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new U(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new U(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$o?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(X),s=t.getIterator(X);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mx extends A{constructor(){super(new it(Wd),A.EMPTY_NODE,Xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const $o=new Mx;Object.defineProperties(U,{MIN:{value:new U(on,A.EMPTY_NODE)},MAX:{value:new U(Kt,$o)}});nI.__EMPTY_NODE=A.EMPTY_NODE;ve.__childrenNodeConstructor=A;Rx($o);xx($o);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=!0;function se(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ve(t,se(e))}if(!(n instanceof Array)&&Fx){const t=[];let i=!1;if(Ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=se(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new U(o,c)))}}),t.length===0)return A.EMPTY_NODE;const r=Qa(t,Nx,o=>o.name,Wd);if(i){const o=Qa(t,X.getCompare());return new A(r,se(e),new Xt({".priority":o},{".priority":X}))}else return new A(r,se(e),Xt.Default)}else{let t=A.EMPTY_NODE;return Ne(n,(i,s)=>{if(ht(n,i)&&i.substring(0,1)!=="."){const r=se(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(se(e))}}Dx(se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Jc{constructor(e){super(),this.indexPath_=e,I(!M(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Gi(e.name,t.name):r}makePost(e,t){const i=se(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(t,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,$o);return new U(Kt,e)}toString(){return ro(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux extends Jc{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Gi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,t){const i=se(e);return new U(t,i)}toString(){return".value"}}const jd=new Ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Pu="-",aI="z",cI=786,Vx=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Ss.charAt(t%64),t=Math.floor(t/64);I(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ss.charAt(e[s]);return I(o.length===20,"nextPushId: Length should be 20."),o}}(),Cm=function(n){if(n===""+Md)return Pu;const e=Ka(n);if(e!=null)return""+(e+1);const t=new Array(n.length);for(let o=0;o<t.length;o++)t[o]=n.charAt(o);if(t.length<cI)return t.push(Pu),t.join("");let i=t.length-1;for(;i>=0&&t[i]===aI;)i--;if(i===-1)return Kt;const s=t[i],r=Ss.charAt(Ss.indexOf(s)+1);return t[i]=r,t.slice(0,i+1).join("")},km=function(n){if(n===""+Lw)return on;const e=Ka(n);if(e!=null)return""+(e-1);const t=new Array(n.length);for(let i=0;i<t.length;i++)t[i]=n.charAt(i);return t[t.length-1]===Pu?t.length===1?""+Md:(delete t[t.length-1],t.join("")):(t[t.length-1]=Ss.charAt(Ss.indexOf(t[t.length-1])-1),t.join("")+aI.repeat(cI-t.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n){return{type:"value",snapshotNode:n}}function Cs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function oo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ao(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Bx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(oo(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(t,i)):o.trackChildChange(ao(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(X,(s,r)=>{t.hasChild(s)||i.trackChildChange(oo(s,r))}),t.isLeafNode()||t.forEachChild(X,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ao(s,r,o))}else i.trackChildChange(Cs(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.indexedFilter_=new Kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=co.getStartPost_(e),this.endPost_=co.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new U(t,i))||(i=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=A.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(X,(o,a)=>{r.matches(new U(o,a))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.rangedFilter_=new co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new U(t,i))||(i=A.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let r,o,a,c;if(this.reverse_){c=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(r,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:s=s.updateImmediateChild(h.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const c=new U(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(ao(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(oo(t,h));const y=a.updateImmediateChild(t,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cs(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return i.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(oo(l.name,l.node)),r.trackChildChange(Cs(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:on}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $x(n){return n.loadsAllData()?new Kd(n.getIndex()):n.hasLimit()?new qx(n):new co(n)}function Wx(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function Gx(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Ou(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function jx(n,e,t){let i;if(n.index_===qt)typeof e=="string"&&(e=Cm(e)),i=Ou(n,e,t);else{let s;t==null?s=Kt:s=Cm(t),i=Ou(n,e,s)}return i.startAfterSet_=!0,i}function Lu(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function Kx(n,e,t){let i,s;return n.index_===qt?(typeof e=="string"&&(e=km(e)),s=Lu(n,e,t)):(t==null?i=on:i=km(t),s=Lu(n,e,i)),s.endBeforeSet_=!0,s}function el(n,e){const t=n.copy();return t.index_=e,t}function Am(n){const e={};if(n.isDefault())return e;let t;return n.index_===X?t="$priority":n.index_===jd?t="$value":n.index_===qt?t="$key":(I(n.index_ instanceof Gd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ge(t),n.startSet_&&(e.startAt=ge(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+ge(n.indexStartName_))),n.endSet_&&(e.endAt=ge(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+ge(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Nm(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==X&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Jw{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ya.getListenId_(e,i),a={};this.listens_[o]=a;const c=Am(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),yi(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const i=Ya.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Am(e._queryParams),i=e._path.toString(),s=new et;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=xr(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return{value:null,children:new Map}}function Hs(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=L(e);n.children.has(i)||n.children.set(i,Xa());const s=n.children.get(i);e=z(e),Hs(s,e,t)}}function Mu(n,e){if(M(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(X,(i,s)=>{Hs(n,new K(i),s)}),Mu(n,e)}}else if(n.children.size>0){const t=L(e);return e=z(e),n.children.has(t)&&Mu(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Fu(n,e,t){n.value!==null?t(e,n.value):zx(n,(i,s)=>{const r=new K(e.toString()+"/"+i);Fu(s,r,t)})}function zx(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ne(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*1e3,Yx=30*1e3,Xx=5*60*1e3;class Jx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Qx(e);const i=Rm+(Yx-Rm)*Math.random();Cr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ne(e,(s,r)=>{r>0&&ht(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function Hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qd(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ct.ACK_USER_WRITE,this.source=Hd()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new Ja(G(),t,this.revert)}}else return I(L(this.path)===e,"operationForChild called for unrelated child."),new Ja(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.source=e,this.path=t,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new lo(this.source,G()):new lo(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ct.OVERWRITE}operationForChild(e){return M(this.path)?new Di(this.source,G(),this.snap.getImmediateChild(e)):new Di(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ct.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new Di(this.source,G(),t.value):new ks(this.source,G(),t)}else return I(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eP(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bx(o.childName,o.snapshotNode))}),lr(n,s,"child_removed",e,i,t),lr(n,s,"child_added",e,i,t),lr(n,s,"child_moved",r,i,t),lr(n,s,"child_changed",e,i,t),lr(n,s,"value",e,i,t),s}function lr(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>nP(n,a,c)),o.forEach(a=>{const c=tP(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function tP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nP(n,e,t){if(e.childName==null||t.childName==null)throw Rs("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),s=new U(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n,e){return{eventCache:n,serverCache:e}}function kr(n,e,t,i){return tl(new Fn(e,t,i),n.serverCache)}function uI(n,e,t,i){return tl(n.eventCache,new Fn(e,t,i))}function Za(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;const iP=()=>(Wl||(Wl=new it(BD)),Wl);class Q{constructor(e,t=iP()){this.value=e,this.children=t}static fromObject(e){let t=new Q(null);return Ne(e,(i,s)=>{t=t.set(new K(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:G(),value:this.value};if(M(e))return null;{const i=L(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:ne(new K(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=L(e),i=this.children.get(t);return i!==null?i.subtree(z(e)):new Q(null)}}set(e,t){if(M(e))return new Q(t,this.children);{const i=L(e),r=(this.children.get(i)||new Q(null)).set(z(e),t),o=this.children.insert(i,r);return new Q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=L(e),i=this.children.get(t);if(i){const s=i.remove(z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=L(e),i=this.children.get(t);return i?i.get(z(e)):null}}setTree(e,t){if(M(e))return t;{const i=L(e),r=(this.children.get(i)||new Q(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Q(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ne(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,G(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(z(e),ne(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,G(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=L(e),r=this.children.get(s);return r?r.foreachOnPath_(z(e),ne(t,s),i):new Q(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ne(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new Q(null))}}function Ar(n,e,t){if(M(e))return new At(new Q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Qe(s,e);return r=r.updateChild(o,t),new At(n.writeTree_.set(s,r))}else{const s=new Q(t),r=n.writeTree_.setTree(e,s);return new At(r)}}}function Uu(n,e,t){let i=n;return Ne(t,(s,r)=>{i=Ar(i,ne(e,s),r)}),i}function Dm(n,e){if(M(e))return At.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new At(t)}}function Vu(n,e){return ji(n,e)!=null}function ji(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Qe(t.path,e)):null}function xm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(X,(i,s)=>{e.push(new U(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new U(i,s.value))}),e}function Tn(n,e){if(M(e))return n;{const t=ji(n,e);return t!=null?new At(new Q(t)):new At(n.writeTree_.subtree(e))}}function Bu(n){return n.writeTree_.isEmpty()}function As(n,e){return hI(G(),n.writeTree_,e)}function hI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=hI(ne(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ne(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,e){return mI(e,n)}function sP(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ar(n.visibleWrites,e,t)),n.lastWriteId=i}function rP(n,e,t,i){I(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Uu(n.visibleWrites,e,t),n.lastWriteId=i}function oP(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function aP(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&cP(a,i.path)?s=!1:vt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return lP(n),!0;if(i.snap)n.visibleWrites=Dm(n.visibleWrites,i.path);else{const a=i.children;Ne(a,c=>{n.visibleWrites=Dm(n.visibleWrites,ne(i.path,c))})}return!0}else return!1}function cP(n,e){if(n.snap)return vt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&vt(ne(n.path,t),e))return!0;return!1}function lP(n){n.visibleWrites=dI(n.allWrites,uP,G()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function uP(n){return n.visible}function dI(n,e,t){let i=At.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)vt(t,o)?(a=Qe(t,o),i=Ar(i,a,r.snap)):vt(o,t)&&(a=Qe(o,t),i=Ar(i,G(),r.snap.getChild(a)));else if(r.children){if(vt(t,o))a=Qe(t,o),i=Uu(i,a,r.children);else if(vt(o,t))if(a=Qe(o,t),M(a))i=Uu(i,G(),r.children);else{const c=yi(r.children,L(a));if(c){const l=c.getChild(z(a));i=Ar(i,G(),l)}}}else throw Rs("WriteRecord should have .snap or .children")}}return i}function fI(n,e,t,i,s){if(!i&&!s){const r=ji(n.visibleWrites,e);if(r!=null)return r;{const o=Tn(n.visibleWrites,e);if(Bu(o))return t;if(t==null&&!Vu(o,G()))return null;{const a=t||A.EMPTY_NODE;return As(o,a)}}}else{const r=Tn(n.visibleWrites,e);if(!s&&Bu(r))return t;if(!s&&t==null&&!Vu(r,G()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(vt(l.path,e)||vt(e,l.path))},a=dI(n.allWrites,o,e),c=t||A.EMPTY_NODE;return As(a,c)}}}function hP(n,e,t){let i=A.EMPTY_NODE;const s=ji(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(X,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Tn(n.visibleWrites,e);return t.forEachChild(X,(o,a)=>{const c=As(Tn(r,new K(o)),a);i=i.updateImmediateChild(o,c)}),xm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Tn(n.visibleWrites,e);return xm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function dP(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,t);if(Vu(n.visibleWrites,r))return null;{const o=Tn(n.visibleWrites,r);return Bu(o)?s.getChild(t):As(o,s.getChild(t))}}function fP(n,e,t,i){const s=ne(e,t),r=ji(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Tn(n.visibleWrites,s);return As(o,i.getNode().getImmediateChild(t))}else return null}function pP(n,e){return ji(n.visibleWrites,e)}function mP(n,e,t,i,s,r,o){let a;const c=Tn(n.visibleWrites,e),l=ji(c,G());if(l!=null)a=l;else if(t!=null)a=As(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function gP(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function ec(n,e,t,i){return fI(n.writeTree,n.treePath,e,t,i)}function Yd(n,e){return hP(n.writeTree,n.treePath,e)}function Pm(n,e,t,i){return dP(n.writeTree,n.treePath,e,t,i)}function tc(n,e){return pP(n.writeTree,ne(n.treePath,e))}function yP(n,e,t,i,s,r){return mP(n.writeTree,n.treePath,e,t,i,s,r)}function Xd(n,e,t){return fP(n.writeTree,n.treePath,e,t)}function pI(n,e){return mI(ne(n.treePath,e),n.writeTree)}function mI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,ao(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,oo(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Cs(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,ao(i,e.snapshotNode,s.oldSnap));else throw Rs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const gI=new vP;class Jd{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xd(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xi(this.viewCache_),r=yP(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){return{filter:n}}function IP(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function EP(n,e,t,i,s){const r=new _P;let o,a;if(t.type===Ct.OVERWRITE){const l=t;l.source.fromUser?o=qu(n,e,l.path,l.snap,i,s,r):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!M(l.path),o=nc(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===Ct.MERGE){const l=t;l.source.fromUser?o=bP(n,e,l.path,l.children,i,s,r):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$u(n,e,l.path,l.children,i,s,a,r))}else if(t.type===Ct.ACK_USER_WRITE){const l=t;l.revert?o=kP(n,e,l.path,i,s,r):o=SP(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===Ct.LISTEN_COMPLETE)o=CP(n,e,t.path,i,r);else throw Rs("Unknown operation type: "+t.type);const c=r.getChanges();return TP(e,o,c),{viewCache:o,changes:c}}function TP(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Za(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(lI(Za(e)))}}function yI(n,e,t,i,s,r){const o=e.eventCache;if(tc(i,t)!=null)return e;{let a,c;if(M(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=xi(e),u=l instanceof A?l:A.EMPTY_NODE,h=Yd(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=ec(i,xi(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=L(t);if(l===".priority"){I(Mn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Pm(i,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=z(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Pm(i,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Xd(i,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return kr(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function nc(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(M(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=L(t);if(!c.isCompleteForPath(t)&&Mn(t)>1)return e;const p=z(t),T=c.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?l=u.updatePriority(c.getNode(),T):l=u.updateChild(c.getNode(),f,T,p,gI,null)}const h=uI(e,l,c.isFullyInitialized()||M(t),u.filtersNodes()),d=new Jd(s,h,r);return yI(n,h,t,s,d,a)}function qu(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new Jd(s,e,r);if(M(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=kr(e,l,!0,n.filter.filtersNodes());else{const h=L(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=kr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=z(t),f=a.getNode().getImmediateChild(h);let p;if(M(d))p=i;else{const y=u.getCompleteChild(h);y!=null?Bd(d)===".priority"&&y.getChild(eI(d)).isEmpty()?p=y:p=y.updateChild(d,i):p=A.EMPTY_NODE}if(f.equals(p))c=e;else{const y=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=kr(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Om(n,e){return n.eventCache.isCompleteForChild(e)}function bP(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=ne(t,c);Om(e,L(u))&&(a=qu(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=ne(t,c);Om(e,L(u))||(a=qu(n,a,u,l,s,r,o))}),a}function Lm(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function $u(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;M(t)?l=i:l=new Q(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Lm(n,f,d);c=nc(n,c,new K(h),p,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=Lm(n,p,d);c=nc(n,c,new K(h),y,s,r,o,a)}}),c}function SP(n,e,t,i,s,r,o){if(tc(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(M(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return nc(n,e,t,c.getNode().getChild(t),s,r,a,o);if(M(t)){let l=new Q(null);return c.getNode().forEachChild(qt,(u,h)=>{l=l.set(new K(u),h)}),$u(n,e,t,l,s,r,a,o)}else return e}else{let l=new Q(null);return i.foreach((u,h)=>{const d=ne(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),$u(n,e,t,l,s,r,a,o)}}function CP(n,e,t,i,s){const r=e.serverCache,o=uI(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return yI(n,o,t,i,gI,s)}function kP(n,e,t,i,s,r){let o;if(tc(i,t)!=null)return e;{const a=new Jd(i,e,s),c=e.eventCache.getNode();let l;if(M(t)||L(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ec(i,xi(e));else{const h=e.serverCache.getNode();I(h instanceof A,"serverChildren would be complete if leaf node"),u=Yd(i,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=L(t);let h=Xd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,z(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,A.EMPTY_NODE,z(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ec(i,xi(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||tc(i,G())!=null,kr(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Kd(i.getIndex()),r=$x(i);this.processor_=wP(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),u=new Fn(c,o.isFullyInitialized(),s.filtersNodes()),h=new Fn(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=tl(h,u),this.eventGenerator_=new Zx(this.query_)}get query(){return this.query_}}function NP(n){return n.viewCache_.serverCache.getNode()}function RP(n){return Za(n.viewCache_)}function DP(n,e){const t=xi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function Mm(n){return n.eventRegistrations_.length===0}function xP(n,e){n.eventRegistrations_.push(e)}function Fm(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Um(n,e,t,i){e.type===Ct.MERGE&&e.source.queryId!==null&&(I(xi(n.viewCache_),"We should always have a full cache before handling merges"),I(Za(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=EP(n.processor_,s,e,t,i);return IP(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,_I(n,r.changes,r.viewCache.eventCache.getNode(),null)}function PP(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(X,(r,o)=>{i.push(Cs(r,o))}),t.isFullyInitialized()&&i.push(lI(t.getNode())),_I(n,i,t.getNode(),e)}function _I(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return eP(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class vI{constructor(){this.views=new Map}}function OP(n){I(!ic,"__referenceConstructor has already been defined"),ic=n}function LP(){return I(ic,"Reference.ts has not been loaded"),ic}function MP(n){return n.views.size===0}function Zd(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),Um(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Um(o,e,t,i));return r}}function wI(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ec(t,s?i:null),c=!1;a?c=!0:i instanceof A?(a=Yd(t,i),c=!1):(a=A.EMPTY_NODE,c=!1);const l=tl(new Fn(a,c,!1),new Fn(i,s,!1));return new AP(e,l)}return o}function FP(n,e,t,i,s,r){const o=wI(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),xP(o,t),PP(o,t)}function UP(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Un(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(Fm(l,t,i)),Mm(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(Fm(c,t,i)),Mm(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Un(n)&&r.push(new(LP())(e._repo,e._path)),{removed:r,events:o}}function II(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function bn(n,e){let t=null;for(const i of n.views.values())t=t||DP(i,e);return t}function EI(n,e){if(e._queryParams.loadsAllData())return il(n);{const i=e._queryIdentifier;return n.views.get(i)}}function TI(n,e){return EI(n,e)!=null}function Un(n){return il(n)!=null}function il(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;function VP(n){I(!sc,"__referenceConstructor has already been defined"),sc=n}function BP(){return I(sc,"Reference.ts has not been loaded"),sc}let qP=1;class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=gP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ef(n,e,t,i,s){return sP(n.pendingWriteTree_,e,t,i,s),s?zs(n,new Di(Hd(),e,t)):[]}function $P(n,e,t,i){rP(n.pendingWriteTree_,e,t,i);const s=Q.fromObject(t);return zs(n,new ks(Hd(),e,s))}function wn(n,e,t=!1){const i=oP(n.pendingWriteTree_,e);if(aP(n.pendingWriteTree_,e)){let r=new Q(null);return i.snap!=null?r=r.set(G(),!0):Ne(i.children,o=>{r=r.set(new K(o),!0)}),zs(n,new Ja(i.path,r,t))}else return[]}function Wo(n,e,t){return zs(n,new Di(zd(),e,t))}function WP(n,e,t){const i=Q.fromObject(t);return zs(n,new ks(zd(),e,i))}function GP(n,e){return zs(n,new lo(zd(),e))}function jP(n,e,t){const i=tf(n,t);if(i){const s=nf(i),r=s.path,o=s.queryId,a=Qe(r,e),c=new lo(Qd(o),a);return sf(n,r,c)}else return[]}function rc(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||TI(o,e))){const c=UP(o,e,t,i);MP(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Un(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=zP(d);for(let p=0;p<f.length;++p){const y=f[p],T=y.query,F=kI(n,y);n.listenProvider_.startListening(Nr(T),uo(n,T),F.hashFn,F.onComplete)}}}!h&&l.length>0&&!i&&(u?n.listenProvider_.stopListening(Nr(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(rl(d));n.listenProvider_.stopListening(Nr(d),f)}))}QP(n,l)}return a}function bI(n,e,t,i){const s=tf(n,i);if(s!=null){const r=nf(s),o=r.path,a=r.queryId,c=Qe(o,e),l=new Di(Qd(a),c,t);return sf(n,o,l)}else return[]}function KP(n,e,t,i){const s=tf(n,i);if(s){const r=nf(s),o=r.path,a=r.queryId,c=Qe(o,e),l=Q.fromObject(t),u=new ks(Qd(a),c,l);return sf(n,o,u)}else return[]}function Wu(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=Qe(d,s);r=r||bn(f,p),o=o||Un(f)});let a=n.syncPointTree_.get(s);a?(o=o||Un(a),r=r||bn(a,G())):(a=new vI,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const y=bn(p,G());y&&(r=r.updateImmediateChild(f,y))}));const l=TI(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=rl(e);I(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=YP();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=nl(n.pendingWriteTree_,s);let h=FP(a,e,t,u,r,c);if(!l&&!o&&!i){const d=EI(a,e);h=h.concat(XP(n,e,d))}return h}function sl(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Qe(o,e),l=bn(a,c);if(l)return l});return fI(s,e,r,t,!0)}function HP(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=Qe(l,t);i=i||bn(u,h)});let s=n.syncPointTree_.get(t);s?i=i||bn(s,G()):(s=new vI,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Fn(i,!0,!1):null,a=nl(n.pendingWriteTree_,e._path),c=wI(s,e,a,r?o.getNode():A.EMPTY_NODE,r);return RP(c)}function zs(n,e){return SI(e,n.syncPointTree_,null,nl(n.pendingWriteTree_,G()))}function SI(n,e,t,i){if(M(n.path))return CI(n,e,t,i);{const s=e.get(G());t==null&&s!=null&&(t=bn(s,G()));let r=[];const o=L(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=pI(i,o);r=r.concat(SI(a,c,l,u))}return s&&(r=r.concat(Zd(s,n,i,t))),r}}function CI(n,e,t,i){const s=e.get(G());t==null&&s!=null&&(t=bn(s,G()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=pI(i,o),u=n.operationForChild(o);u&&(r=r.concat(CI(u,a,c,l)))}),s&&(r=r.concat(Zd(s,n,i,t))),r}function kI(n,e){const t=e.query,i=uo(n,t);return{hashFn:()=>(NP(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?jP(n,t._path,i):GP(n,t._path);{const r=WD(s,t);return rc(n,t,null,r)}}}}function uo(n,e){const t=rl(e);return n.queryToTagMap.get(t)}function rl(n){return n._path.toString()+"$"+n._queryIdentifier}function tf(n,e){return n.tagToQueryMap.get(e)}function nf(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function sf(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=nl(n.pendingWriteTree_,e);return Zd(i,t,s,null)}function zP(n){return n.fold((e,t,i)=>{if(t&&Un(t))return[il(t)];{let s=[];return t&&(s=II(t)),Ne(i,(r,o)=>{s=s.concat(o)}),s}})}function Nr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(BP())(n._repo,n._path):n}function QP(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=rl(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function YP(){return qP++}function XP(n,e,t){const i=e._path,s=uo(n,e),r=kI(n,t),o=n.listenProvider_.startListening(Nr(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!Un(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!M(l)&&u&&Un(u))return[il(u).query];{let d=[];return u&&(d=d.concat(II(u).map(f=>f.query))),Ne(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Nr(u),uo(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new rf(t)}node(){return this.node_}}class of{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ne(this.path_,e);return new of(this.syncTree_,t)}node(){return sl(this.syncTree_,this.path_)}}const JP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Bm=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ZP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return eO(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ZP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},eO=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},AI=function(n,e,t,i){return cf(e,new of(t,n),i)},af=function(n,e,t){return cf(n,new rf(e),t)};function cf(n,e,t){const i=n.getPriority().val(),s=Bm(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Bm(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ve(a,se(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(X,(a,c)=>{const l=cf(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ol(n,e){let t=e instanceof K?e:new K(e),i=n,s=L(t);for(;s!==null;){const r=yi(i.node.children,s)||{children:{},childCount:0};i=new lf(s,i,r),t=z(t),s=L(t)}return i}function Ki(n){return n.node.value}function uf(n,e){n.node.value=e,Gu(n)}function NI(n){return n.node.childCount>0}function tO(n){return Ki(n)===void 0&&!NI(n)}function al(n,e){Ne(n.node.children,(t,i)=>{e(new lf(t,n,i))})}function RI(n,e,t,i){t&&!i&&e(n),al(n,s=>{RI(s,e,!0,i)}),t&&i&&e(n)}function nO(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Go(n){return new K(n.parent===null?n.name:Go(n.parent)+"/"+n.name)}function Gu(n){n.parent!==null&&iO(n.parent,n.name,n)}function iO(n,e,t){const i=tO(t),s=ht(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Gu(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Gu(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=/[\[\].#$\/\u0000-\u001F\u007F]/,rO=/[\[\].#$\u0000-\u001F\u007F]/,Gl=10*1024*1024,cl=function(n){return typeof n=="string"&&n.length!==0&&!sO.test(n)},DI=function(n){return typeof n=="string"&&n.length!==0&&!rO.test(n)},oO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),DI(n)},ho=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xc(n)||n&&typeof n=="object"&&ht(n,".sv")},Ht=function(n,e,t,i){i&&e===void 0||jo(st(n,"value"),e,t)},jo=function(n,e,t){const i=t instanceof K?new Ix(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ei(i));if(typeof e=="function")throw new Error(n+"contains a function "+ei(i)+" with contents = "+e.toString());if(Xc(e))throw new Error(n+"contains "+e.toString()+" "+ei(i));if(typeof e=="string"&&e.length>Gl/3&&ac(e)>Gl)throw new Error(n+"contains a string greater than "+Gl+" utf8 bytes "+ei(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ne(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cl(o)))throw new Error(n+" contains an invalid key ("+o+") "+ei(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ex(i,o),jo(n,a,i),Tx(i)}),s&&r)throw new Error(n+' contains ".value" child '+ei(i)+" in addition to actual children.")}},aO=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=ro(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!cl(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wx);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&vt(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},xI=function(n,e,t,i){if(i&&e===void 0)return;const s=st(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ne(e,(o,a)=>{const c=new K(o);if(jo(s,a,ne(t,c)),Bd(c)===".priority"&&!ho(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),aO(s,r)},hf=function(n,e,t){if(!(t&&e===void 0)){if(Xc(e))throw new Error(st(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ho(e))throw new Error(st(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ko=function(n,e,t,i){if(!(i&&t===void 0)&&!cl(t))throw new Error(st(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},fo=function(n,e,t,i){if(!(i&&t===void 0)&&!DI(t))throw new Error(st(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cO=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fo(n,e,t,i)},wt=function(n,e){if(L(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},PI=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!oO(t))throw new Error(st(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ll(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!qd(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function OI(n,e,t){ll(n,t),LI(n,i=>qd(i,e))}function gt(n,e,t){ll(n,t),LI(n,i=>vt(i,e)||vt(e,i))}function LI(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(uO(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function uO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();gi&&be("event: "+t.toString()),Ks(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="repo_interrupt",hO=25;class dO{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xa(),this.transactionQueueTree_=new lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fO(n,e,t){if(n.stats_=Ud(n.repoInfo_),n.forceRestClient_||jD())n.server_=new Ya(n.repoInfo_,(i,s,r,o)=>{qm(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$m(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new en(n.repoInfo_,e,(i,s,r,o)=>{qm(n,i,s,r,o)},i=>{$m(n,i)},i=>{pO(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=YD(n.repoInfo_,()=>new Jx(n.stats_,n.server_)),n.infoData_=new Hx,n.infoSyncTree_=new Vm({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Wo(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),df(n,"connected",!1),n.serverSyncTree_=new Vm({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);gt(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function FI(n){const t=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ho(n){return JP({timestamp:FI(n)})}function qm(n,e,t,i,s){n.dataUpdateCount++;const r=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=wa(t,l=>se(l));o=KP(n.serverSyncTree_,r,c,s)}else{const c=se(t);o=bI(n.serverSyncTree_,r,c,s)}else if(i){const c=wa(t,l=>se(l));o=WP(n.serverSyncTree_,r,c)}else{const c=se(t);o=Wo(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ns(n,r)),gt(n.eventQueue_,a,o)}function $m(n,e){df(n,"connected",e),e===!1&&yO(n)}function pO(n,e){Ne(e,(t,i)=>{df(n,t,i)})}function df(n,e,t){const i=new K("/.info/"+e),s=se(t);n.infoData_.updateSnapshot(i,s);const r=Wo(n.infoSyncTree_,i,s);gt(n.eventQueue_,i,r)}function ul(n){return n.nextWriteId_++}function mO(n,e,t){const i=HP(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=se(s).withIndex(e._queryParams.getIndex());Wu(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Wo(n.serverSyncTree_,e._path,r);else{const a=uo(n.serverSyncTree_,e);o=bI(n.serverSyncTree_,e._path,r,a)}return gt(n.eventQueue_,e._path,o),rc(n.serverSyncTree_,e,t,null,!0),r},s=>(Qs(n,"get for query "+ge(e)+" failed: "+s),Promise.reject(new Error(s))))}function ff(n,e,t,i,s){Qs(n,"set",{path:e.toString(),value:t,priority:i});const r=Ho(n),o=se(t,i),a=sl(n.serverSyncTree_,e),c=af(o,a,r),l=ul(n),u=ef(n.serverSyncTree_,e,c,l,!0);ll(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ge("set at "+e+" failed: "+d);const y=wn(n.serverSyncTree_,l,!p);gt(n.eventQueue_,e,y),Vn(n,s,d,f)});const h=mf(n,e);Ns(n,h),gt(n.eventQueue_,h,[])}function gO(n,e,t,i){Qs(n,"update",{path:e.toString(),value:t});let s=!0;const r=Ho(n),o={};if(Ne(t,(a,c)=>{s=!1,o[a]=AI(ne(e,a),se(c),n.serverSyncTree_,r)}),s)be("update() called with empty data.  Don't do anything."),Vn(n,i,"ok",void 0);else{const a=ul(n),c=$P(n.serverSyncTree_,e,o,a);ll(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Ge("update at "+e+" failed: "+l);const d=wn(n.serverSyncTree_,a,!h),f=d.length>0?Ns(n,e):e;gt(n.eventQueue_,f,d),Vn(n,i,l,u)}),Ne(t,l=>{const u=mf(n,ne(e,l));Ns(n,u)}),gt(n.eventQueue_,e,[])}}function yO(n){Qs(n,"onDisconnectEvents");const e=Ho(n),t=Xa();Fu(n.onDisconnect_,G(),(s,r)=>{const o=AI(s,r,n.serverSyncTree_,e);Hs(t,s,o)});let i=[];Fu(t,G(),(s,r)=>{i=i.concat(Wo(n.serverSyncTree_,s,r));const o=mf(n,s);Ns(n,o)}),n.onDisconnect_=Xa(),gt(n.eventQueue_,G(),i)}function _O(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Mu(n.onDisconnect_,e),Vn(n,t,i,s)})}function Wm(n,e,t,i){const s=se(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Hs(n.onDisconnect_,e,s),Vn(n,i,r,o)})}function vO(n,e,t,i,s){const r=se(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Hs(n.onDisconnect_,e,r),Vn(n,s,o,a)})}function wO(n,e,t,i){if(va(t)){be("onDisconnect().update() called with empty data.  Don't do anything."),Vn(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&Ne(t,(o,a)=>{const c=se(a);Hs(n.onDisconnect_,ne(e,o),c)}),Vn(n,i,s,r)})}function IO(n,e,t){let i;L(e._path)===".info"?i=Wu(n.infoSyncTree_,e,t):i=Wu(n.serverSyncTree_,e,t),OI(n.eventQueue_,e._path,i)}function ju(n,e,t){let i;L(e._path)===".info"?i=rc(n.infoSyncTree_,e,t):i=rc(n.serverSyncTree_,e,t),OI(n.eventQueue_,e._path,i)}function UI(n){n.persistentConnection_&&n.persistentConnection_.interrupt(MI)}function EO(n){n.persistentConnection_&&n.persistentConnection_.resume(MI)}function Qs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),be(t,...e)}function Vn(n,e,t,i){e&&Ks(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function TO(n,e,t,i,s,r){Qs(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:Rw(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=pf(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{jo("transaction failed: Data returned ",c,o.path),o.status=0;const l=ol(n.transactionQueueTree_,e),u=Ki(l)||[];u.push(o),uf(l,u);let h;typeof c=="object"&&c!==null&&ht(c,".priority")?(h=yi(c,".priority"),I(ho(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(sl(n.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const d=Ho(n),f=se(c,h),p=af(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=ul(n);const y=ef(n.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);gt(n.eventQueue_,e,y),hl(n,n.transactionQueueTree_)}}function pf(n,e,t){return sl(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function hl(n,e=n.transactionQueueTree_){if(e||dl(n,e),Ki(e)){const t=BI(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&bO(n,Go(e),t)}else NI(e)&&al(e,t=>{hl(n,t)})}function bO(n,e,t){const i=t.map(l=>l.currentWriteId),s=pf(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Qs(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(wn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();dl(n,ol(n.transactionQueueTree_,e)),hl(n,n.transactionQueueTree_),gt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ks(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ge("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Ns(n,e)}},o)}function Ns(n,e){const t=VI(n,e),i=Go(t),s=BI(n,t);return SO(n,s,i),i}function SO(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Qe(t,c.path);let u=!1,h;if(I(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hO)u=!0,h="maxretry",s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0));else{const d=pf(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){jo("transaction failed: Data returned ",f,c.path);let p=se(f);typeof f=="object"&&f!=null&&ht(f,".priority")||(p=p.updatePriority(d.getPriority()));const T=c.currentWriteId,F=Ho(n),W=af(p,d,F);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=W,c.currentWriteId=ul(n),o.splice(o.indexOf(T),1),s=s.concat(ef(n.serverSyncTree_,c.path,W,c.currentWriteId,c.applyLocally)),s=s.concat(wn(n.serverSyncTree_,T,!0))}else u=!0,h="nodata",s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0))}gt(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}dl(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ks(i[a]);hl(n,n.transactionQueueTree_)}function VI(n,e){let t,i=n.transactionQueueTree_;for(t=L(e);t!==null&&Ki(i)===void 0;)i=ol(i,t),e=z(e),t=L(e);return i}function BI(n,e){const t=[];return qI(n,e,t),t.sort((i,s)=>i.order-s.order),t}function qI(n,e,t){const i=Ki(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);al(e,s=>{qI(n,s,t)})}function dl(n,e){const t=Ki(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,uf(e,t.length>0?t:void 0)}al(e,i=>{dl(n,i)})}function mf(n,e){const t=Go(VI(n,e)),i=ol(n.transactionQueueTree_,e);return nO(i,s=>{jl(n,s)}),jl(n,i),RI(i,s=>{jl(n,s)}),t}function jl(n,e){const t=Ki(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(wn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uf(e,void 0):t.length=r+1,gt(n.eventQueue_,Go(e),s);for(let o=0;o<i.length;o++)Ks(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function kO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ge(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ku=function(n,e){const t=AO(n),i=t.namespace;t.domain==="firebase.com"&&jt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||UD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jw(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new K(t.pathString)}},AO=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=CO(n.substring(u,h)));const d=kO(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class WI{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class NO{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new et;return _O(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){wt("OnDisconnect.remove",this._path);const e=new et;return Wm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){wt("OnDisconnect.set",this._path),Ht("OnDisconnect.set",e,this._path,!1);const t=new et;return Wm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){wt("OnDisconnect.setWithPriority",this._path),Ht("OnDisconnect.setWithPriority",e,this._path,!1),hf("OnDisconnect.setWithPriority",t,!1);const i=new et;return vO(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){wt("OnDisconnect.update",this._path),xI("OnDisconnect.update",e,this._path,!1);const t=new et;return wO(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Bd(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=Nm(this._queryParams),t=Ld(e);return t==="{}"?"default":t}get _queryObject(){return Nm(this._queryParams)}isEqual(e){if(e=S(e),!(e instanceof ot))return!1;const t=this._repo===e._repo,i=qd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+vx(this._path)}}function fl(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function zn(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===qt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==on)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Kt)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===X){if(e!=null&&!ho(e)||t!=null&&!ho(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(n.getIndex()instanceof Gd||n.getIndex()===jd,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function pl(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Tt extends ot{constructor(e,t){super(e,t,new Zc,!1)}get parent(){const e=eI(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=Oi(this.ref,e);return new Pi(this._node.getChild(t),i,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Pi(s,Oi(this.ref,i),X)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function GI(n,e){return n=S(n),n._checkNotDeleted("ref"),e!==void 0?Oi(n._root,e):n._root}function Gm(n,e){n=S(n),n._checkNotDeleted("refFromURL");const t=Ku(e,n._repo.repoInfo_.nodeAdmin);PI("refFromURL",t);const i=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&i.host!==n._repo.repoInfo_.host&&jt("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+n._repo.repoInfo_.host+")"),GI(n,t.path.toString())}function Oi(n,e){return n=S(n),L(n._path)===null?cO("child","path",e,!1):fo("child","path",e,!1),new Tt(n._repo,ne(n._path,e))}function RO(n,e){n=S(n),wt("push",n._path),Ht("push",e,n._path,!0);const t=FI(n._repo),i=Vx(t),s=Oi(n,i),r=Oi(n,i);let o;return e!=null?o=yf(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function DO(n){return wt("remove",n._path),yf(n,null)}function yf(n,e){n=S(n),wt("set",n._path),Ht("set",e,n._path,!1);const t=new et;return ff(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xO(n,e){n=S(n),wt("setPriority",n._path),hf("setPriority",e,!1);const t=new et;return ff(n._repo,ne(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function PO(n,e,t){if(wt("setWithPriority",n._path),Ht("setWithPriority",e,n._path,!1),hf("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const i=new et;return ff(n._repo,n._path,e,t,i.wrapCallback(()=>{})),i.promise}function OO(n,e){xI("update",e,n._path,!1);const t=new et;return gO(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function LO(n){n=S(n);const e=new gf(()=>{}),t=new zo(e);return mO(n._repo,n,t).then(i=>new Pi(i,new Tt(n._repo,n._path),n._queryParams.getIndex()))}class zo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new $I("value",this,new Pi(e.snapshotNode,new Tt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new WI(this,e,t):null}matches(e){return e instanceof zo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ml{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new WI(this,e,t):null}createEvent(e,t){I(e.childName!=null,"Child events should have a childName.");const i=Oi(new Tt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new $I(e.type,this,new Pi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ml?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Qo(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(u,h)=>{ju(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new gf(t,r||void 0),a=e==="value"?new zo(o):new ml(e,o);return IO(n._repo,n,a),()=>ju(n._repo,n,a)}function Hu(n,e,t,i){return Qo(n,"value",e,t,i)}function jm(n,e,t,i){return Qo(n,"child_added",e,t,i)}function Km(n,e,t,i){return Qo(n,"child_changed",e,t,i)}function Hm(n,e,t,i){return Qo(n,"child_moved",e,t,i)}function zm(n,e,t,i){return Qo(n,"child_removed",e,t,i)}function Qm(n,e,t){let i=null;const s=t?new gf(t):null;e==="value"?i=new zo(s):e&&(i=new ml(e,s)),ju(n._repo,n,i)}class Rt{}class jI extends Rt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ht("endAt",this._value,e._path,!0);const t=Lu(e._queryParams,this._value,this._key);if(pl(t),zn(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ot(e._repo,e._path,t,e._orderByCalled)}}function MO(n,e){return Ko("endAt","key",e,!0),new jI(n,e)}class FO extends Rt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ht("endBefore",this._value,e._path,!1);const t=Kx(e._queryParams,this._value,this._key);if(pl(t),zn(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ot(e._repo,e._path,t,e._orderByCalled)}}function UO(n,e){return Ko("endBefore","key",e,!0),new FO(n,e)}class KI extends Rt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ht("startAt",this._value,e._path,!0);const t=Ou(e._queryParams,this._value,this._key);if(pl(t),zn(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ot(e._repo,e._path,t,e._orderByCalled)}}function VO(n=null,e){return Ko("startAt","key",e,!0),new KI(n,e)}class BO extends Rt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ht("startAfter",this._value,e._path,!1);const t=jx(e._queryParams,this._value,this._key);if(pl(t),zn(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ot(e._repo,e._path,t,e._orderByCalled)}}function qO(n,e){return Ko("startAfter","key",e,!0),new BO(n,e)}class $O extends Rt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ot(e._repo,e._path,Wx(e._queryParams,this._limit),e._orderByCalled)}}function WO(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new $O(n)}class GO extends Rt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ot(e._repo,e._path,Gx(e._queryParams,this._limit),e._orderByCalled)}}function jO(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new GO(n)}class KO extends Rt{constructor(e){super(),this._path=e}_apply(e){fl(e,"orderByChild");const t=new K(this._path);if(M(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Gd(t),s=el(e._queryParams,i);return zn(s),new ot(e._repo,e._path,s,!0)}}function HO(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fo("orderByChild","path",n,!1),new KO(n)}class zO extends Rt{_apply(e){fl(e,"orderByKey");const t=el(e._queryParams,qt);return zn(t),new ot(e._repo,e._path,t,!0)}}function QO(){return new zO}class YO extends Rt{_apply(e){fl(e,"orderByPriority");const t=el(e._queryParams,X);return zn(t),new ot(e._repo,e._path,t,!0)}}function XO(){return new YO}class JO extends Rt{_apply(e){fl(e,"orderByValue");const t=el(e._queryParams,jd);return zn(t),new ot(e._repo,e._path,t,!0)}}function ZO(){return new JO}class eL extends Rt{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Ht("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new jI(this._value,this._key)._apply(new KI(this._value,this._key)._apply(e))}}function tL(n,e){return Ko("equalTo","key",e,!0),new eL(n,e)}function bt(n,...e){let t=S(n);for(const i of e)t=i._apply(t);return t}OP(Tt);VP(Tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL="FIREBASE_DATABASE_EMULATOR_HOST",zu={};let iL=!1;function sL(n,e,t,i){n.repoInfo_=new jw(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),i&&(n.authTokenProvider_=i)}function HI(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ku(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[nL]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Ku(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new ls(ls.OWNER):new HD(n.name,n.options,e);PI("Invalid Firebase Database URL",o),M(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oL(a,n,u,new KD(n.name,t));return new aL(h,n)}function rL(n,e){const t=zu[e];(!t||t[n.key]!==n)&&jt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),UI(n),delete t[n.key]}function oL(n,e,t,i){let s=zu[e.name];s||(s={},zu[e.name]=s);let r=s[n.toURLString()];return r&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dO(n,iL,t,i),s[n.toURLString()]=r,r}class aL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function zI(){bs.IS_TRANSPORT_INITIALIZED&&Ge("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function cL(){zI(),vn.forceDisallow()}function lL(){zI(),yt.forceDisallow(),vn.forceAllow()}function uL(n,e,t,i={}){n=S(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ls(ls.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ig(i.mockUserToken,n.app.options.projectId);r=new ls(o)}sL(s,e,t,r)}function hL(n){n=S(n),n._checkNotDeleted("goOffline"),UI(n._repo)}function dL(n){n=S(n),n._checkNotDeleted("goOnline"),EO(n._repo)}function fL(n,e){xw(n,e)}/**
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
 */function pL(n){Aw(Bn),tn(new dt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return HI(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),It(hm,dm,n),It(hm,dm,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL={".sv":"timestamp"};function gL(){return mL}function yL(n){return{".sv":{increment:n}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function vL(n,e,t){var i;if(n=S(n),wt("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(i=t==null?void 0:t.applyLocally)!==null&&i!==void 0?i:!0,r=new et,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new Pi(u,new Tt(n._repo,n._path),X),r.resolve(new _L(l,h)))},a=Hu(n,()=>{});return TO(n._repo,n._path,e,o,a,s),r.promise}en.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};en.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};pL();const wL="@firebase/database-compat",IL="0.2.10";/**
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
 */const EL=new Ds("@firebase/database-compat"),QI=function(n){const e="FIREBASE WARNING: "+n;EL.warn(e)};/**
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
 */const TL=function(n,e,t,i){if(!(i&&t===void 0)&&typeof t!="boolean")throw new Error(st(n,e)+"must be a boolean.")},bL=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(st(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this._delegate=e}cancel(e){R("OnDisconnect.cancel",0,1,arguments.length),Ie("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),i=>e(i)),t}remove(e){R("OnDisconnect.remove",0,1,arguments.length),Ie("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),i=>e(i)),t}set(e,t){R("OnDisconnect.set",1,2,arguments.length),Ie("OnDisconnect.set","onComplete",t,!0);const i=this._delegate.set(e);return t&&i.then(()=>t(null),s=>t(s)),i}setWithPriority(e,t,i){R("OnDisconnect.setWithPriority",2,3,arguments.length),Ie("OnDisconnect.setWithPriority","onComplete",i,!0);const s=this._delegate.setWithPriority(e,t);return i&&s.then(()=>i(null),r=>i(r)),s}update(e,t){if(R("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const s={};for(let r=0;r<e.length;++r)s[""+r]=e[r];e=s,QI("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ie("OnDisconnect.update","onComplete",t,!0);const i=this._delegate.update(e);return t&&i.then(()=>t(null),s=>t(s)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return R("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this._database=e,this._delegate=t}val(){return R("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return R("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return R("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return R("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return R("DataSnapshot.child",0,1,arguments.length),e=String(e),fo("DataSnapshot.child","path",e,!1),new Sn(this._database,this._delegate.child(e))}hasChild(e){return R("DataSnapshot.hasChild",1,1,arguments.length),fo("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return R("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return R("DataSnapshot.forEach",1,1,arguments.length),Ie("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Sn(this._database,t)))}hasChildren(){return R("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return R("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return R("DataSnapshot.ref",0,0,arguments.length),new ct(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Oe{constructor(e,t){this.database=e,this._delegate=t}on(e,t,i,s){var r;R("Query.on",2,4,arguments.length),Ie("Query.on","callback",t,!1);const o=Oe.getCancelAndContextArgs_("Query.on",i,s),a=(l,u)=>{t.call(o.context,new Sn(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return Hu(this._delegate,a,c),t;case"child_added":return jm(this._delegate,a,c),t;case"child_removed":return zm(this._delegate,a,c),t;case"child_changed":return Km(this._delegate,a,c),t;case"child_moved":return Hm(this._delegate,a,c),t;default:throw new Error(st("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,i){if(R("Query.off",0,3,arguments.length),bL("Query.off",e,!0),Ie("Query.off","callback",t,!0),vf("Query.off","context",i,!0),t){const s=()=>{};s.userCallback=t,s.context=i,Qm(this._delegate,e,s)}else Qm(this._delegate,e)}get(){return LO(this._delegate).then(e=>new Sn(this.database,e))}once(e,t,i,s){R("Query.once",1,4,arguments.length),Ie("Query.once","callback",t,!0);const r=Oe.getCancelAndContextArgs_("Query.once",i,s),o=new et,a=(l,u)=>{const h=new Sn(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":Hu(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":jm(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":zm(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":Km(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Hm(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(st("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return R("Query.limitToFirst",1,1,arguments.length),new Oe(this.database,bt(this._delegate,WO(e)))}limitToLast(e){return R("Query.limitToLast",1,1,arguments.length),new Oe(this.database,bt(this._delegate,jO(e)))}orderByChild(e){return R("Query.orderByChild",1,1,arguments.length),new Oe(this.database,bt(this._delegate,HO(e)))}orderByKey(){return R("Query.orderByKey",0,0,arguments.length),new Oe(this.database,bt(this._delegate,QO()))}orderByPriority(){return R("Query.orderByPriority",0,0,arguments.length),new Oe(this.database,bt(this._delegate,XO()))}orderByValue(){return R("Query.orderByValue",0,0,arguments.length),new Oe(this.database,bt(this._delegate,ZO()))}startAt(e=null,t){return R("Query.startAt",0,2,arguments.length),new Oe(this.database,bt(this._delegate,VO(e,t)))}startAfter(e=null,t){return R("Query.startAfter",0,2,arguments.length),new Oe(this.database,bt(this._delegate,qO(e,t)))}endAt(e=null,t){return R("Query.endAt",0,2,arguments.length),new Oe(this.database,bt(this._delegate,MO(e,t)))}endBefore(e=null,t){return R("Query.endBefore",0,2,arguments.length),new Oe(this.database,bt(this._delegate,UO(e,t)))}equalTo(e,t){return R("Query.equalTo",1,2,arguments.length),new Oe(this.database,bt(this._delegate,tL(e,t)))}toString(){return R("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return R("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(R("Query.isEqual",1,1,arguments.length),!(e instanceof Oe)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,i){const s={cancel:void 0,context:void 0};if(t&&i)s.cancel=t,Ie(e,"cancel",s.cancel,!0),s.context=i,vf(e,"context",s.context,!0);else if(t)if(typeof t=="object"&&t!==null)s.context=t;else if(typeof t=="function")s.cancel=t;else throw new Error(st(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return s}get ref(){return new ct(this.database,new Tt(this._delegate._repo,this._delegate._path))}}class ct extends Oe{constructor(e,t){super(e,new ot(t._repo,t._path,new Zc,!1)),this.database=e,this._delegate=t}getKey(){return R("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return R("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new ct(this.database,Oi(this._delegate,e))}getParent(){R("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new ct(this.database,e):null}getRoot(){return R("Reference.root",0,0,arguments.length),new ct(this.database,this._delegate.root)}set(e,t){R("Reference.set",1,2,arguments.length),Ie("Reference.set","onComplete",t,!0);const i=yf(this._delegate,e);return t&&i.then(()=>t(null),s=>t(s)),i}update(e,t){if(R("Reference.update",1,2,arguments.length),Array.isArray(e)){const s={};for(let r=0;r<e.length;++r)s[""+r]=e[r];e=s,QI("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}wt("Reference.update",this._delegate._path),Ie("Reference.update","onComplete",t,!0);const i=OO(this._delegate,e);return t&&i.then(()=>t(null),s=>t(s)),i}setWithPriority(e,t,i){R("Reference.setWithPriority",2,3,arguments.length),Ie("Reference.setWithPriority","onComplete",i,!0);const s=PO(this._delegate,e,t);return i&&s.then(()=>i(null),r=>i(r)),s}remove(e){R("Reference.remove",0,1,arguments.length),Ie("Reference.remove","onComplete",e,!0);const t=DO(this._delegate);return e&&t.then(()=>e(null),i=>e(i)),t}transaction(e,t,i){R("Reference.transaction",1,3,arguments.length),Ie("Reference.transaction","transactionUpdate",e,!1),Ie("Reference.transaction","onComplete",t,!0),TL("Reference.transaction","applyLocally",i,!0);const s=vL(this._delegate,e,{applyLocally:i}).then(r=>new CL(r.committed,new Sn(this.database,r.snapshot)));return t&&s.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),s}setPriority(e,t){R("Reference.setPriority",1,2,arguments.length),Ie("Reference.setPriority","onComplete",t,!0);const i=xO(this._delegate,e);return t&&i.then(()=>t(null),s=>t(s)),i}push(e,t){R("Reference.push",0,2,arguments.length),Ie("Reference.push","onComplete",t,!0);const i=RO(this._delegate,e),s=i.then(o=>new ct(this.database,o));t&&s.then(()=>t(null),o=>t(o));const r=new ct(this.database,i);return r.then=s.then.bind(s),r.catch=s.catch.bind(s,void 0),r}onDisconnect(){return wt("Reference.onDisconnect",this._delegate._path),new SL(new NO(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:cL,forceLongPolling:lL}}useEmulator(e,t,i={}){uL(this._delegate,e,t,i)}ref(e){if(R("database.ref",0,1,arguments.length),e instanceof ct){const t=Gm(this._delegate,e.toString());return new ct(this,t)}else{const t=GI(this._delegate,e);return new ct(this,t)}}refFromURL(e){R("database.refFromURL",1,1,arguments.length);const i=Gm(this._delegate,e);return new ct(this,i)}goOffline(){return R("database.goOffline",0,0,arguments.length),hL(this._delegate)}goOnline(){return R("database.goOnline",0,0,arguments.length),dL(this._delegate)}}po.ServerValue={TIMESTAMP:gL(),increment:n=>yL(n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL({app:n,url:e,version:t,customAuthImpl:i,namespace:s,nodeAdmin:r=!1}){Aw(t);const o=new og("auth-internal",new ag("database-standalone"));return o.setComponent(new dt("auth-internal",()=>i,"PRIVATE")),{instance:new po(HI(n,o,void 0,e,r),n),namespace:s}}var AL=Object.freeze({__proto__:null,initStandalone:kL});/**
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
 */const NL=po.ServerValue;function RL(n){n.INTERNAL.registerComponent(new dt("database-compat",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app-compat").getImmediate(),s=e.getProvider("database").getImmediate({identifier:t});return new po(s,i)},"PUBLIC").setServiceProps({Reference:ct,Query:Oe,Database:po,DataSnapshot:Sn,enableLogging:fL,INTERNAL:AL,ServerValue:NL}).setMultipleInstances(!0)),n.registerVersion(wL,IL)}RL(ft);const DL={apiKey:"AIzaSyANYFUMwHMxHVoIDNLJsFzDSiL1_4qB4YA",authDomain:"game-7955e.firebaseapp.com",databaseURL:"https://game-7955e-default-rtdb.firebaseio.com",projectId:"game-7955e",storageBucket:"game-7955e.appspot.com",messagingSenderId:"364405624537",appId:"1:364405624537:web:551896aa29b2a81409f8c8"};ft.initializeApp(DL);ft.apps.length||ft.initializeApp(firebaseConfig);ft.database().ref();ft.database();ft.firestore();const xL=ft.auth();export{xL as a,ft as f};

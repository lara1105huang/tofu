import{q as Ay,s as ky,E as Kd,x as Ua,L as Io,y as Sn,_ as Lu,C as Ns,z as Dy,D as Ba,A as Ry,B as Py,G as Oy,S as Mc,H as My,I as Xe,J as Ly,K as Lc,M as Fy,N as bn,O as Wd,P as B,Q as qa,R as Vy,T as Uy,U as w,V as he,W as Fc,X as By,Y as qy,Z as $y,$ as xn,a0 as Ur,a1 as Ki,a2 as rt,a3 as ze,a4 as jd,a5 as Gy,a6 as Ky,a7 as $a,a8 as Qd,a9 as Wy,aa as jy,ab as Eo,ac as Qy,ad as zy,ae as N,af as pe,ag as Fu,ah as Hy,ai as Yy,aj as Xy}from"./index.70e1c415.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t){this._delegate=e,this.firebase=t,Lu(e,new Ns("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Dy(this._delegate)))}_getService(e,t=Ba){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ba){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Lu(this._delegate,e)}_addOrOverwriteComponent(e){Ry(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Zy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vu=new Kd("app-compat","Firebase",Zy);/**
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
 */function e_(n){const e={},t={__esModule:!0,initializeApp:r,app:i,registerVersion:Sn,setLogLevel:Py,onLog:Oy,apps:null,SDK_VERSION:Mc,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:My}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function i(l){if(l=l||Ba,!Xe(e,l))throw Vu.create("no-app",{appName:l});return e[l]}i.App=n;function r(l,u={}){const h=Ly(l,u);if(Xe(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Lc(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Vu.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ua(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function zd(){const n=e_(Jy);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:zd,extendNamespace:e,createSubscribe:ky,ErrorFactory:Kd,deepExtend:Ua});function e(t){Ua(n,t)}return n}const t_=zd();/**
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
 */const Uu=new Io("@firebase/app-compat"),n_="@firebase/app-compat",s_="0.1.39";/**
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
 */function i_(n){Sn(n_,s_,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Ay()&&self.firebase!==void 0){Uu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Uu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ls=t_;i_();var r_="firebase",o_="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.registerVersion(r_,o_,"app-compat");var a_="firebase",c_="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(a_,c_,"app");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Vc=Vc||{},k=l_||self;function Br(){}function To(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Wi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function u_(n){return Object.prototype.hasOwnProperty.call(n,wa)&&n[wa]||(n[wa]=++h_)}var wa="closure_uid_"+(1e9*Math.random()>>>0),h_=0;function d_(n,e,t){return n.call.apply(n.bind,arguments)}function f_(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Re(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=d_:Re=f_,Re.apply(null,arguments)}function Er(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function De(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function tn(){this.s=this.s,this.o=this.o}var g_=0;tn.prototype.s=!1;tn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),g_!=0)&&u_(this)};tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Uc(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Bu(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(To(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var m_=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",Br,e),k.removeEventListener("test",Br,e)}catch{}return n}();function qr(n){return/^[\s\xa0]*$/.test(n)}var qu=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Ia(n,e){return n<e?-1:n>e?1:0}function Co(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function dt(n){return Co().indexOf(n)!=-1}function Bc(n){return Bc[" "](n),n}Bc[" "]=Br;function p_(n){var e=v_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var y_=dt("Opera"),us=dt("Trident")||dt("MSIE"),Yd=dt("Edge"),Ga=Yd||us,Xd=dt("Gecko")&&!(Co().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),__=Co().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Jd(){var n=k.document;return n?n.documentMode:void 0}var $r;e:{var Ea="",Ta=function(){var n=Co();if(Xd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Yd)return/Edge\/([\d\.]+)/.exec(n);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(__)return/WebKit\/(\S+)/.exec(n);if(y_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ta&&(Ea=Ta?Ta[1]:""),us){var Ca=Jd();if(Ca!=null&&Ca>parseFloat(Ea)){$r=String(Ca);break e}}$r=Ea}var v_={};function w_(){return p_(function(){let n=0;const e=qu(String($r)).split("."),t=qu("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=Ia(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ia(i[2].length==0,r[2].length==0)||Ia(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Ka;if(k.document&&us){var $u=Jd();Ka=$u||parseInt($r,10)||void 0}else Ka=void 0;var I_=Ka;function pi(n,e){if(Pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Xd){e:{try{Bc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:E_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&pi.X.h.call(this)}}De(pi,Pe);var E_={2:"touch",3:"pen",4:"mouse"};pi.prototype.h=function(){pi.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ji="closure_listenable_"+(1e6*Math.random()|0),T_=0;function C_(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++T_,this.ba=this.ea=!1}function So(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function qc(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Zd(n){const e={};for(const t in n)e[t]=n[t];return e}const Gu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ef(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Gu.length;r++)t=Gu[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function bo(n){this.src=n,this.g={},this.h=0}bo.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ja(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new C_(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Wa(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=Hd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(So(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ja(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var $c="closure_lm_"+(1e6*Math.random()|0),Sa={};function tf(n,e,t,s,i){if(s&&s.once)return sf(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)tf(n,e[r],t,s,i);return null}return t=Wc(t),n&&n[ji]?n.N(e,t,Wi(s)?!!s.capture:!!s,i):nf(n,e,t,!1,s,i)}function nf(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Wi(i)?!!i.capture:!!i,a=Kc(n);if(a||(n[$c]=a=new bo(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=S_(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)m_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(of(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function S_(){function n(t){return e.call(n.src,n.listener,t)}const e=b_;return n}function sf(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)sf(n,e[r],t,s,i);return null}return t=Wc(t),n&&n[ji]?n.O(e,t,Wi(s)?!!s.capture:!!s,i):nf(n,e,t,!0,s,i)}function rf(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)rf(n,e[r],t,s,i);else s=Wi(s)?!!s.capture:!!s,t=Wc(t),n&&n[ji]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ja(r,t,s,i),-1<t&&(So(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Kc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ja(e,t,s,i)),(t=-1<n?e[n]:null)&&Gc(t))}function Gc(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[ji])Wa(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(of(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Kc(e))?(Wa(t,n),t.h==0&&(t.src=null,e[$c]=null)):So(n)}}}function of(n){return n in Sa?Sa[n]:Sa[n]="on"+n}function b_(n,e){if(n.ba)n=!0;else{e=new pi(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&Gc(n),n=t.call(s,e)}return n}function Kc(n){return n=n[$c],n instanceof bo?n:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wc(n){return typeof n=="function"?n:(n[ba]||(n[ba]=function(e){return n.handleEvent(e)}),n[ba])}function Ee(){tn.call(this),this.i=new bo(this),this.P=this,this.I=null}De(Ee,tn);Ee.prototype[ji]=!0;Ee.prototype.removeEventListener=function(n,e,t,s){rf(this,n,e,t,s)};function ke(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Pe(e,n);else if(e instanceof Pe)e.target=e.target||n;else{var i=e;e=new Pe(s,n),ef(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Tr(o,s,!0,e)&&i}if(o=e.g=n,i=Tr(o,s,!0,e)&&i,i=Tr(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Tr(o,s,!1,e)&&i}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)So(t[s]);delete n.g[e],n.h--}}this.I=null};Ee.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Ee.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Tr(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Wa(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var jc=k.JSON.stringify;function x_(){var n=lf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class N_{constructor(){this.h=this.g=null}add(e,t){const s=af.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var af=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new A_,n=>n.reset());class A_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function k_(n){k.setTimeout(()=>{throw n},0)}function cf(n,e){Qa||D_(),za||(Qa(),za=!0),lf.add(n,e)}var Qa;function D_(){var n=k.Promise.resolve(void 0);Qa=function(){n.then(R_)}}var za=!1,lf=new N_;function R_(){for(var n;n=x_();){try{n.h.call(n.g)}catch(t){k_(t)}var e=af;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}za=!1}function xo(n,e){Ee.call(this),this.h=n||1,this.g=e||k,this.j=Re(this.lb,this),this.l=Date.now()}De(xo,Ee);S=xo.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Qc(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qc(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){xo.X.M.call(this),Qc(this),delete this.g};function zc(n,e,t){if(typeof n=="function")t&&(n=Re(n,t));else if(n&&typeof n.handleEvent=="function")n=Re(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function uf(n){n.g=zc(()=>{n.g=null,n.i&&(n.i=!1,uf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class P_ extends tn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uf(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(n){tn.call(this),this.h=n,this.g={}}De(yi,tn);var Ku=[];function hf(n,e,t,s){Array.isArray(t)||(t&&(Ku[0]=t.toString()),t=Ku);for(var i=0;i<t.length;i++){var r=tf(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function df(n){qc(n.g,function(e,t){this.g.hasOwnProperty(t)&&Gc(e)},n),n.g={}}yi.prototype.M=function(){yi.X.M.call(this),df(this)};yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function No(){this.g=!0}No.prototype.Aa=function(){this.g=!1};function O_(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function M_(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function ns(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+F_(n,t)+(s?" "+s:"")})}function L_(n,e){n.info(function(){return"TIMEOUT: "+e})}No.prototype.info=function(){};function F_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jc(t)}catch{return e}}var $n={},Wu=null;function Ao(){return Wu=Wu||new Ee}$n.Pa="serverreachability";function ff(n){Pe.call(this,$n.Pa,n)}De(ff,Pe);function _i(n){const e=Ao();ke(e,new ff(e))}$n.STAT_EVENT="statevent";function gf(n,e){Pe.call(this,$n.STAT_EVENT,n),this.stat=e}De(gf,Pe);function Ve(n){const e=Ao();ke(e,new gf(e,n))}$n.Qa="timingevent";function mf(n,e){Pe.call(this,$n.Qa,n),this.size=e}De(mf,Pe);function Qi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var ko={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Hc(){}Hc.prototype.h=null;function ju(n){return n.h||(n.h=n.i())}function yf(){}var zi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Yc(){Pe.call(this,"d")}De(Yc,Pe);function Xc(){Pe.call(this,"c")}De(Xc,Pe);var Ha;function Do(){}De(Do,Hc);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};Ha=new Do;function Hi(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new yi(this),this.O=V_,n=Ga?125:void 0,this.T=new xo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _f}function _f(){this.i=null,this.g="",this.h=!1}var V_=45e3,Ya={},Gr={};S=Hi.prototype;S.setTimeout=function(n){this.O=n};function Xa(n,e,t){n.K=1,n.v=Po(bt(e)),n.s=t,n.P=!0,vf(n,null)}function vf(n,e){n.F=Date.now(),Yi(n),n.A=bt(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),xf(t.i,"t",s),n.C=0,t=n.l.H,n.h=new _f,n.g=zf(n.l,t?e:null,!n.s),0<n.N&&(n.L=new P_(Re(n.La,n,n.g),n.N)),hf(n.S,n.g,"readystatechange",n.ib),e=n.H?Zd(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),_i(),O_(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&Tt(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const u=Tt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ga||this.g&&(this.h.h||this.g.fa()||Yu(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_i(3):_i(2)),Ro(this);var t=this.g.aa();this.Y=t;t:if(wf(this)){var s=Yu(this.g);n="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),ri(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,M_(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qr(a)){var l=a;break t}}l=null}if(t=l)ns(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ja(this,t);else{this.i=!1,this.o=3,Ve(12),_n(this),ri(this);break e}}this.P?(If(this,u,o),Ga&&this.i&&u==3&&(hf(this.S,this.T,"tick",this.hb),this.T.start())):(ns(this.j,this.m,o,null),Ja(this,o)),u==4&&_n(this),this.i&&!this.I&&(u==4?Kf(this.l,this):(this.i=!1,Yi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),_n(this),ri(this)}}}catch{}finally{}};function wf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function If(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=U_(n,t),i==Gr){e==4&&(n.o=4,Ve(14),s=!1),ns(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ya){n.o=4,Ve(15),ns(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ns(n.j,n.m,i,null),Ja(n,i);wf(n)&&i!=Gr&&i!=Ya&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ve(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),il(e),e.K=!0,Ve(11))):(ns(n.j,n.m,t,"[Invalid Chunked Response]"),_n(n),ri(n))}S.hb=function(){if(this.g){var n=Tt(this.g),e=this.g.fa();this.C<e.length&&(Ro(this),If(this,n,e),this.i&&n!=4&&Yi(this))}};function U_(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Gr:(t=Number(e.substring(t,s)),isNaN(t)?Ya:(s+=1,s+t>e.length?Gr:(e=e.substr(s,t),n.C=s+t,e)))}S.cancel=function(){this.I=!0,_n(this)};function Yi(n){n.V=Date.now()+n.O,Ef(n,n.O)}function Ef(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Qi(Re(n.gb,n),e)}function Ro(n){n.B&&(k.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(L_(this.j,this.A),this.K!=2&&(_i(),Ve(17)),_n(this),this.o=2,ri(this)):Ef(this,this.V-n)};function ri(n){n.l.G==0||n.I||Kf(n.l,n)}function _n(n){Ro(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Qc(n.T),df(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Ja(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Za(t.h,n))){if(!n.J&&Za(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)jr(t),Lo(t);else break e;sl(t),Ve(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Qi(Re(t.cb,t),6e3));if(1>=kf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else vn(t,11)}else if((n.J||t.g==n)&&jr(t),!qr(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Jc(r,r.h),r.h=null))}if(s.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,X(s.F,s.D,_))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=Qf(s,s.H?s.ka:null,s.V),o.J){Df(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ro(a),Yi(a)),s.g=o}else $f(s);0<t.i.length&&Fo(t)}else l[0]!="stop"&&l[0]!="close"||vn(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vn(t,7):nl(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}_i(4)}catch{}}function B_(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(To(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function q_(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(To(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Tf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(To(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=q_(n),s=B_(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Tn){this.h=e!==void 0?e:n.h,Kr(this,n.j),this.s=n.s,this.g=n.g,Wr(this,n.m),this.l=n.l,e=n.i;var t=new vi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Qu(this,t),this.o=n.o}else n&&(t=String(n).match(Cf))?(this.h=!!e,Kr(this,t[1]||"",!0),this.s=ti(t[2]||""),this.g=ti(t[3]||"",!0),Wr(this,t[4]),this.l=ti(t[5]||"",!0),Qu(this,t[6]||"",!0),this.o=ti(t[7]||"")):(this.h=!!e,this.i=new vi(null,this.h))}Tn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ni(e,zu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ni(e,zu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ni(t,t.charAt(0)=="/"?W_:K_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ni(t,Q_)),n.join("")};function bt(n){return new Tn(n)}function Kr(n,e,t){n.j=t?ti(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Wr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Qu(n,e,t){e instanceof vi?(n.i=e,z_(n.i,n.h)):(t||(e=ni(e,j_)),n.i=new vi(e,n.h))}function X(n,e,t){n.i.set(e,t)}function Po(n){return X(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ti(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ni(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,G_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function G_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var zu=/[#\/\?@]/g,K_=/[#\?:]/g,W_=/[#\?]/g,j_=/[#\?@]/g,Q_=/#/g;function vi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function nn(n){n.g||(n.g=new Map,n.h=0,n.i&&$_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=vi.prototype;S.add=function(n,e){nn(this),this.i=null,n=As(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Sf(n,e){nn(n),e=As(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function bf(n,e){return nn(n),e=As(n,e),n.g.has(e)}S.forEach=function(n,e){nn(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};S.oa=function(){nn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};S.W=function(n){nn(this);let e=[];if(typeof n=="string")bf(this,n)&&(e=e.concat(this.g.get(As(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return nn(this),this.i=null,n=As(this,n),bf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function xf(n,e,t){Sf(n,e),0<t.length&&(n.i=null,n.g.set(As(n,e),Uc(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function As(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function z_(n,e){e&&!n.j&&(nn(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Sf(this,s),xf(this,i,t))},n)),n.j=e}var H_=class{constructor(n,e){this.h=n,this.g=e}};function Nf(n){this.l=n||Y_,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ga&&k.g.Ga()&&k.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Y_=10;function Af(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function kf(n){return n.h?1:n.g?n.g.size:0}function Za(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Jc(n,e){n.g?n.g.add(e):n.h=e}function Df(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Nf.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Uc(n.i)}function Zc(){}Zc.prototype.stringify=function(n){return k.JSON.stringify(n,void 0)};Zc.prototype.parse=function(n){return k.JSON.parse(n,void 0)};function X_(){this.g=new Zc}function J_(n,e,t){const s=t||"";try{Tf(n,function(i,r){let o=i;Wi(i)&&(o=jc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Z_(n,e){const t=new No;if(k.Image){const s=new Image;s.onload=Er(Cr,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Er(Cr,t,s,"TestLoadImage: error",!1,e),s.onabort=Er(Cr,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Er(Cr,t,s,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Cr(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Xi(n){this.l=n.ac||null,this.j=n.jb||!1}De(Xi,Hc);Xi.prototype.g=function(){return new Oo(this.l,this.j)};Xi.prototype.i=function(n){return function(){return n}}({});function Oo(n,e){Ee.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=el,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Oo,Ee);var el=0;S=Oo.prototype;S.open=function(n,e){if(this.readyState!=el)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,wi(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||k).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=el};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pf(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Pf(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ji(this):wi(this),this.readyState==3&&Pf(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,Ji(this))};S.Ua=function(n){this.g&&(this.response=n,Ji(this))};S.ga=function(){this.g&&Ji(this)};function Ji(n){n.readyState=4,n.l=null,n.j=null,n.A=null,wi(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function wi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ev=k.JSON.parse;function se(n){Ee.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Of,this.K=this.L=!1}De(se,Ee);var Of="",tv=/^https?$/i,nv=["POST","PUT"];S=se.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ha.g(),this.C=this.u?ju(this.u):ju(Ha),this.g.onreadystatechange=Re(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Hu(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Hd(nv,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ff(this),0<this.B&&((this.K=sv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.qa,this)):this.A=zc(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Hu(this,r)}};function sv(n){return us&&w_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof Vc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Hu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Mf(n),Mo(n)}function Mf(n){n.D||(n.D=!0,ke(n,"complete"),ke(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ke(this,"complete"),ke(this,"abort"),Mo(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mo(this,!0)),se.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?Lf(this):this.fb())};S.fb=function(){Lf(this)};function Lf(n){if(n.h&&typeof Vc<"u"&&(!n.C[1]||Tt(n)!=4||n.aa()!=2)){if(n.v&&Tt(n)==4)zc(n.Ha,0,n);else if(ke(n,"readystatechange"),Tt(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(Cf)[1]||null;if(!i&&k.self&&k.self.location){var r=k.self.location.protocol;i=r.substr(0,r.length-1)}s=!tv.test(i?i.toLowerCase():"")}t=s}if(t)ke(n,"complete"),ke(n,"success");else{n.m=6;try{var o=2<Tt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Mf(n)}}finally{Mo(n)}}}}function Mo(n,e){if(n.g){Ff(n);const t=n.g,s=n.C[0]?Br:null;n.g=null,n.C=null,e||ke(n,"ready");try{t.onreadystatechange=s}catch{}}}function Ff(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}function Tt(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ev(e)}};function Yu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Of:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vf(n){let e="";return qc(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function tl(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Vf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):X(n,e,t))}function Ks(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Uf(n){this.Ca=0,this.i=[],this.j=new No,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ks("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ks("baseRetryDelayMs",5e3,n),this.bb=Ks("retryDelaySeedMs",1e4,n),this.$a=Ks("forwardChannelMaxRetries",2,n),this.ta=Ks("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Nf(n&&n.concurrentRequestLimit),this.Fa=new X_,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Uf.prototype;S.ma=8;S.G=1;function nl(n){if(Bf(n),n.G==3){var e=n.U++,t=bt(n.F);X(t,"SID",n.I),X(t,"RID",e),X(t,"TYPE","terminate"),Zi(n,t),e=new Hi(n,n.j,e,void 0),e.K=2,e.v=Po(bt(t)),t=!1,k.navigator&&k.navigator.sendBeacon&&(t=k.navigator.sendBeacon(e.v.toString(),"")),!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=zf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yi(e)}jf(n)}function Lo(n){n.g&&(il(n),n.g.cancel(),n.g=null)}function Bf(n){Lo(n),n.u&&(k.clearTimeout(n.u),n.u=null),jr(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function Fo(n){Af(n.h)||n.m||(n.m=!0,cf(n.Ja,n),n.C=0)}function iv(n,e){return kf(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Qi(Re(n.Ja,n,e),Wf(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Hi(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=Zd(r),ef(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=qf(this,i,e),t=bt(this.F),X(t,"RID",n),X(t,"CVER",22),this.D&&X(t,"X-HTTP-Session-Id",this.D),Zi(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(Vf(r)))+"&"+e:this.o&&tl(t,this.o,r)),Jc(this.h,i),this.Ya&&X(t,"TYPE","init"),this.O?(X(t,"$req",e),X(t,"SID","null"),i.Z=!0,Xa(i,t,null)):Xa(i,t,e),this.G=2}}else this.G==3&&(n?Xu(this,n):this.i.length==0||Af(this.h)||Xu(this))};function Xu(n,e){var t;e?t=e.m:t=n.U++;const s=bt(n.F);X(s,"SID",n.I),X(s,"RID",t),X(s,"AID",n.T),Zi(n,s),n.o&&n.s&&tl(s,n.o,n.s),t=new Hi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=qf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Jc(n.h,t),Xa(t,s,e)}function Zi(n,e){n.ia&&qc(n.ia,function(t,s){X(e,s,t)}),n.l&&Tf({},function(t,s){X(e,s,t)})}function qf(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Re(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{J_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function $f(n){n.g||n.u||(n.Z=1,cf(n.Ia,n),n.A=0)}function sl(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Qi(Re(n.Ia,n),Wf(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,Gf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Qi(Re(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),Lo(this),Gf(this))};function il(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function Gf(n){n.g=new Hi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=bt(n.sa);X(e,"RID","rpc"),X(e,"SID",n.I),X(e,"CI",n.L?"0":"1"),X(e,"AID",n.T),X(e,"TYPE","xmlhttp"),Zi(n,e),n.o&&n.s&&tl(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Po(bt(e)),t.s=null,t.P=!0,vf(t,n)}S.cb=function(){this.v!=null&&(this.v=null,Lo(this),sl(this),Ve(19))};function jr(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function Kf(n,e){var t=null;if(n.g==e){jr(n),il(n),n.g=null;var s=2}else if(Za(n.h,e))t=e.D,Df(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Ao(),ke(s,new mf(s,t)),Fo(n)}else $f(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&iv(n,e)||s==2&&sl(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:vn(n,5);break;case 4:vn(n,10);break;case 3:vn(n,6);break;default:vn(n,2)}}}function Wf(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function vn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Re(n.kb,n);t||(t=new Tn("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||Kr(t,"https"),Po(t)),Z_(t.toString(),s)}else Ve(2);n.G=0,n.l&&n.l.va(e),jf(n),Bf(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function jf(n){if(n.G=0,n.la=[],n.l){const e=Rf(n.h);(e.length!=0||n.i.length!=0)&&(Bu(n.la,e),Bu(n.la,n.i),n.h.i.length=0,Uc(n.i),n.i.length=0),n.l.ua()}}function Qf(n,e,t){var s=t instanceof Tn?bt(t):new Tn(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Wr(s,s.m);else{var i=k.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Tn(null,void 0);s&&Kr(r,s),e&&(r.g=e),i&&Wr(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&X(s,t,e),X(s,"VER",n.ma),Zi(n,s),s}function zf(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new se(new Xi({jb:!0})):new se(n.ra),e.Ka(n.H),e}function Hf(){}S=Hf.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function Qr(){if(us&&!(10<=Number(I_)))throw Error("Environmental error: no available transport.")}Qr.prototype.g=function(n,e){return new Je(n,e)};function Je(n,e){Ee.call(this),this.g=new Uf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!qr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new ks(this)}De(Je,Ee);Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Ve(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Qf(n,null,n.V),Fo(n)};Je.prototype.close=function(){nl(this.g)};Je.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=jc(n),n=t);e.i.push(new H_(e.ab++,n)),e.G==3&&Fo(e)};Je.prototype.M=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,Je.X.M.call(this)};function Yf(n){Yc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}De(Yf,Yc);function Xf(){Xc.call(this),this.status=1}De(Xf,Xc);function ks(n){this.g=n}De(ks,Hf);ks.prototype.xa=function(){ke(this.g,"a")};ks.prototype.wa=function(n){ke(this.g,new Yf(n))};ks.prototype.va=function(n){ke(this.g,new Xf)};ks.prototype.ua=function(){ke(this.g,"b")};Qr.prototype.createWebChannel=Qr.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;ko.NO_ERROR=0;ko.TIMEOUT=8;ko.HTTP_ERROR=6;pf.COMPLETE="complete";yf.EventType=zi;zi.OPEN="a";zi.CLOSE="b";zi.ERROR="c";zi.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;se.prototype.listenOnce=se.prototype.O;se.prototype.getLastError=se.prototype.Oa;se.prototype.getLastErrorCode=se.prototype.Ea;se.prototype.getStatus=se.prototype.aa;se.prototype.getResponseJson=se.prototype.Sa;se.prototype.getResponseText=se.prototype.fa;se.prototype.send=se.prototype.da;se.prototype.setWithCredentials=se.prototype.Ka;var rv=function(){return new Qr},ov=function(){return Ao()},xa=ko,av=pf,cv=$n,Ju={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lv=Xi,Sr=yf,uv=se;const Zu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Io("@firebase/firestore");function ec(){return Gt.logLevel}function hv(n){Gt.setLogLevel(n)}function v(n,...e){if(Gt.logLevel<=bn.DEBUG){const t=e.map(rl);Gt.debug(`Firestore (${Ds}): ${n}`,...t)}}function ae(n,...e){if(Gt.logLevel<=bn.ERROR){const t=e.map(rl);Gt.error(`Firestore (${Ds}): ${n}`,...t)}}function hs(n,...e){if(Gt.logLevel<=bn.WARN){const t=e.map(rl);Gt.warn(`Firestore (${Ds}): ${n}`,...t)}}function rl(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function C(n="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+n;throw ae(e),new Error(e)}function A(n,e){n||C()}function dv(n,e){n||C()}function E(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Fy{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class gv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mv{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new we;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new we,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new we)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(A(typeof s.accessToken=="string"),new Jf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return A(e===null||typeof e=="string"),new ye(e)}}class pv{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(A(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class yv{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new pv(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vv{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(A(typeof t.token=="string"),this.A=t.token,new _v(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=wv(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function D(n,e){return n<e?-1:n>e?1:0}function ds(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function eg(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ee(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new ee(0,0))}static max(){return new x(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,s){t===void 0?t=0:t>e.length&&C(),s===void 0?s=e.length-t:s>e.length-t&&C(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends Ii{construct(e,t,s){return new V(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new V(t)}static emptyPath(){return new V([])}}const Iv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Ii{construct(e,t,s){return new ce(e,t,s)}static isValidIdentifier(e){return Iv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(V.fromString(e))}static fromName(e){return new I(V.fromString(e).popFirst(5))}static empty(){return new I(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new V(e.slice()))}}/**
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
 */class tg{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function tc(n){return n.fields.find(e=>e.kind===2)}function hn(n){return n.fields.filter(e=>e.kind!==2)}tg.UNKNOWN_ID=-1;class Ev{constructor(e,t){this.fieldPath=e,this.kind=t}}class zr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new zr(0,Ze.min())}}function ng(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new ee(t+1,0):new ee(t,s));return new Ze(i,I.empty(),e)}function sg(n){return new Ze(n.readTime,n.key,-1)}class Ze{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ze(x.min(),I.empty(),-1)}static max(){return new Ze(x.max(),I.empty(),-1)}}function ol(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ig)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,s)=>{t(e)})}static reject(e){return new m((t,s)=>{s(e)})}static waitFor(e){return new m((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=m.resolve(!1);for(const s of e)t=t.next(i=>i?m.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new m((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new m((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new we,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new oi(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const i=al(s.target.error);this.P.reject(new oi(e,i))}}static open(e,t,s,i){try{return new Vo(t,e.transaction(i,s))}catch(r){throw new oi(t,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Cv(t)}}class ct{constructor(e,t,s){this.name=e,this.version=t,this.S=s,ct.D(qa())===12.2&&ae("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),fn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Vy())return!1;if(ct.N())return!0;const e=qa(),t=ct.D(e),s=0<t&&t<10,i=ct.k(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new oi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new oi(e,o))},i.onupgradeneeded=r=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,i.transaction,r.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Vo.open(this.db,e,r?"readonly":"readwrite",s),c=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),m.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Tv{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return fn(this.U.delete())}}class oi extends y{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rn(n){return n.name==="IndexedDbTransactionError"}class Cv{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),fn(s)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),fn(this.store.add(e))}get(e){return fn(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),fn(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),fn(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const i=this.cursor(s),r=[];return this.H(i,(o,a)=>{r.push(a)}).next(()=>r)}{const i=this.store.getAll(s.range);return new m((r,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new m((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}Y(e,t){v("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const i=this.cursor(s);return this.H(i,(r,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.H(i,t)}tt(e){const t=this.cursor({});return new m((s,i)=>{t.onerror=r=>{const o=al(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new m((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Tv(a),l=t(a.primaryKey,a.value,c);if(l instanceof m){const u=l.catch(h=>(c.done(),m.reject(h)));s.push(u)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>m.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fn(n){return new m((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=al(s.target.error);t(i)}})}let eh=!1;function al(n){const e=ct.D(qa());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eh||(eh=!0,setTimeout(()=>{throw s},0)),s}}return n}class Sv{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){rn(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await sn(t)}await this.nt(6e4)})}}class bv{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let i=t,r=!0;return m.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,s.add(o)});r=!1})).next(()=>t-i)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,r)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((i,r)=>{const o=sg(r);ol(o,s)>0&&(s=o)}),new Ze(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ge{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function og(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.at=-1;class ie{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new br(this.root,e,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new br(this.root,e,this.comparator,!0)}}class br{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:xe.RED,this.left=i!=null?i:xe.EMPTY,this.right=r!=null?r:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new xe(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(n,e,t,s,i){return this}insert(n,e,t){return new xe(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nh(this.data.getIterator())}getIteratorFrom(e){return new nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof K)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new K(this.comparator);return t.data=e,t}}class nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new K(ce.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new de(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Nv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(A(!!n),typeof n=="string"){let e=0;const t=Nv.exec(n);if(A(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nn(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ag(n){const e=n.mapValue.fields.__previous_value__;return cl(e)?ag(e):e}function Ei(n){const e=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}function er(n){return n==null}function Ti(n){return n===0&&1/n==-1/0}function cg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Pr={nullValue:"NULL_VALUE"};function An(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cl(n)?4:lg(n)?9007199254740991:10:C()}function _t(n,e){if(n===e)return!0;const t=An(n);if(t!==An(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ei(n).isEqual(Ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Kt(s.timestampValue),o=Kt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Nn(s.bytesValue).isEqual(Nn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ne(s.geoPointValue.latitude)===ne(i.geoPointValue.latitude)&&ne(s.geoPointValue.longitude)===ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ne(s.integerValue)===ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ne(s.doubleValue),o=ne(i.doubleValue);return r===o?Ti(r)===Ti(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return ds(n.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(th(r)!==th(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_t(r[a],o[a])))return!1;return!0}(n,e);default:return C()}}function Ci(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function jt(n,e){if(n===e)return 0;const t=An(n),s=An(e);if(t!==s)return D(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ne(i.integerValue||i.doubleValue),a=ne(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return sh(n.timestampValue,e.timestampValue);case 4:return sh(Ei(n),Ei(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,r){const o=Nn(i),a=Nn(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=D(o[c],a[c]);if(l!==0)return l}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=D(ne(i.latitude),ne(r.latitude));return o!==0?o:D(ne(i.longitude),ne(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=jt(o[c],a[c]);if(l)return l}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Lt.mapValue&&r===Lt.mapValue)return 0;if(i===Lt.mapValue)return 1;if(r===Lt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=D(a[u],l[u]);if(h!==0)return h;const d=jt(o[a[u]],c[l[u]]);if(d!==0)return d}return D(a.length,l.length)}(n.mapValue,e.mapValue);default:throw C()}}function sh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Kt(n),s=Kt(e),i=D(t.seconds,s.seconds);return i!==0?i:D(t.nanos,s.nanos)}function is(n){return nc(n)}function nc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Kt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Nn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=nc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${nc(s.fields[a])}`;return r+"}"}(n.mapValue):C();var e,t}function kn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function ih(n){return!!n&&"nullValue"in n}function rh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Or(n){return!!n&&"mapValue"in n}function ai(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ai(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kv(n){return"nullValue"in n?Pr:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?kn(Wt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:C()}function Dv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?kn(Wt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Lt:C()}function oh(n,e){const t=jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ah(n,e){const t=jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Or(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=ce.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=ai(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Or(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Or(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Gn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ne(ai(this.value))}}function ug(n){const e=[];return Gn(n.fields,(t,s)=>{const i=new ce([t]);if(Or(s)){const r=ug(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,s,i,r,o){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new z(e,0,x.min(),x.min(),Ne.empty(),0)}static newFoundDocument(e,t,s){return new z(e,1,t,x.min(),s,0)}static newNoDocument(e,t){return new z(e,2,t,x.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new z(e,3,t,x.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rv{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function ch(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Rv(n,e,t,s,i,r,o)}function Dn(n){const e=E(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+is(i.value);var i}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),er(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>is(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>is(s)).join(",")),e.ht=t}return e.ht}function Pv(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${is(s.value)}`;var s}).join(", ")}]`),er(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>is(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>is(t)).join(",")),`Target(${e})`}function tr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!qv(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(t=n.filters[i],s=e.filters[i],t.op!==s.op||!t.field.isEqual(s.field)||!_t(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dh(n.startAt,e.startAt)&&dh(n.endAt,e.endAt)}function Hr(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Yr(n,e){return n.filters.filter(t=>t instanceof Ae&&t.field.isEqual(e))}function lh(n,e,t){let s=Pr,i=!0;for(const r of Yr(n,e)){let o=Pr,a=!0;switch(r.op){case"<":case"<=":o=kv(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=Pr}oh({value:s,inclusive:i},{value:o,inclusive:a})<0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];oh({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function uh(n,e,t){let s=Lt,i=!0;for(const r of Yr(n,e)){let o=Lt,a=!0;switch(r.op){case">=":case">":o=Dv(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Lt}ah({value:s,inclusive:i},{value:o,inclusive:a})>0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];ah({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}class Ae extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,s):new Ov(e,t,s):t==="array-contains"?new Fv(e,s):t==="in"?new Vv(e,s):t==="not-in"?new Uv(e,s):t==="array-contains-any"?new Bv(e,s):new Ae(e,t,s)}static lt(e,t,s){return t==="in"?new Mv(e,s):new Lv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(jt(t,this.value)):t!==null&&An(this.value)===An(t)&&this.ft(jt(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ov extends Ae{constructor(e,t,s){super(e,t,s),this.key=I.fromName(s.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.ft(t)}}class Mv extends Ae{constructor(e,t){super(e,"in",t),this.keys=hg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lv extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=hg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>I.fromName(s.referenceValue))}class Fv extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Si(t)&&Ci(t.arrayValue,this.value)}}class Vv extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ci(this.value.arrayValue,t)}}class Uv extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ci(this.value.arrayValue,t)}}class Bv extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Si(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ci(this.value.arrayValue,s))}}class Qt{constructor(e,t){this.position=e,this.inclusive=t}}class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function qv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function hh(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),t.key):s=jt(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function dh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function dg(n,e,t,s,i,r,o,a){return new At(n,e,t,s,i,r,o,a)}function Rs(n){return new At(n)}function fh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ll(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ul(n){for(const e of n.filters)if(e.dt())return e.field;return null}function hl(n){return n.collectionGroup!==null}function fs(n){const e=E(n);if(e._t===null){e._t=[];const t=ul(e),s=ll(e);if(t!==null&&s===null)t.isKeyField()||e._t.push(new rs(t)),e._t.push(new rs(ce.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new rs(ce.keyField(),r))}}}return e._t}function je(n){const e=E(n);if(!e.wt)if(e.limitType==="F")e.wt=ch(e.path,e.collectionGroup,fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of fs(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new rs(r.field,o))}const s=e.endAt?new Qt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qt(e.startAt.position,e.startAt.inclusive):null;e.wt=ch(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.wt}function Xr(n,e,t){return new At(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nr(n,e){return tr(je(n),je(e))&&n.limitType===e.limitType}function fg(n){return`${Dn(je(n))}|lt:${n.limitType}`}function ic(n){return`Query(target=${Pv(je(n))}; limitType=${n.limitType})`}function dl(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=hh(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,fs(t),s)||t.endAt&&!function(i,r,o){const a=hh(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,fs(t),s))}(n,e)}function gg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mg(n){return(e,t)=>{let s=!1;for(const i of fs(n)){const r=$v(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function $v(n,e,t){const s=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?jt(a,c):C()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function yg(n){return{integerValue:""+n}}function _g(n,e){return cg(e)?yg(e):pg(n,e)}/**
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
 */class Uo{constructor(){this._=void 0}}function Gv(n,e,t){return n instanceof gs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Rn?wg(n,e):n instanceof Pn?Ig(n,e):function(s,i){const r=vg(s,i),o=gh(r)+gh(s.yt);return sc(r)&&sc(s.yt)?yg(o):pg(s.It,o)}(n,e)}function Kv(n,e,t){return n instanceof Rn?wg(n,e):n instanceof Pn?Ig(n,e):t}function vg(n,e){return n instanceof ms?sc(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class gs extends Uo{}class Rn extends Uo{constructor(e){super(),this.elements=e}}function wg(n,e){const t=Eg(e);for(const s of n.elements)t.some(i=>_t(i,s))||t.push(s);return{arrayValue:{values:t}}}class Pn extends Uo{constructor(e){super(),this.elements=e}}function Ig(n,e){let t=Eg(e);for(const s of n.elements)t=t.filter(i=>!_t(i,s));return{arrayValue:{values:t}}}class ms extends Uo{constructor(e,t){super(),this.It=e,this.yt=t}}function gh(n){return ne(n.integerValue||n.doubleValue)}function Eg(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.field=e,this.transform=t}}function Wv(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Rn&&s instanceof Rn||t instanceof Pn&&s instanceof Pn?ds(t.elements,s.elements,_t):t instanceof ms&&s instanceof ms?_t(t.yt,s.yt):t instanceof gs&&s instanceof gs}(n.transform,e.transform)}class jv{constructor(e,t){this.version=e,this.transformResults=t}}class J{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new J}static exists(e){return new J(void 0,e)}static updateTime(e){return new J(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bo{}function Tg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Os(n.key,J.none()):new Ps(n.key,n.data,J.none());{const t=n.data,s=Ne.empty();let i=new K(ce.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new kt(n.key,s,new Ye(i.toArray()),J.none())}}function Qv(n,e,t){n instanceof Ps?function(s,i,r){const o=s.value.clone(),a=ph(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(s,i,r){if(!Mr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ph(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Cg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function ci(n,e,t,s){return n instanceof Ps?function(i,r,o,a){if(!Mr(i.precondition,r))return o;const c=i.value.clone(),l=yh(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof kt?function(i,r,o,a){if(!Mr(i.precondition,r))return o;const c=yh(i.fieldTransforms,a,r),l=r.data;return l.setAll(Cg(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return Mr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function zv(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=vg(s.transform,i||null);r!=null&&(t===null&&(t=Ne.empty()),t.set(s.field,r))}return t||null}function mh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&ds(t,s,(i,r)=>Wv(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ps extends Bo{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends Bo{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Cg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ph(n,e,t){const s=new Map;A(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Kv(o,a,t[i]))}return s}function yh(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Gv(r,o,e))}return s}class Os extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fl extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,F;function Sg(n){switch(n){default:return C();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function bg(n){if(n===void 0)return ae("GRPC error has no .code"),p.UNKNOWN;switch(n){case le.OK:return p.OK;case le.CANCELLED:return p.CANCELLED;case le.UNKNOWN:return p.UNKNOWN;case le.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case le.INTERNAL:return p.INTERNAL;case le.UNAVAILABLE:return p.UNAVAILABLE;case le.UNAUTHENTICATED:return p.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case le.NOT_FOUND:return p.NOT_FOUND;case le.ALREADY_EXISTS:return p.ALREADY_EXISTS;case le.PERMISSION_DENIED:return p.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case le.ABORTED:return p.ABORTED;case le.OUT_OF_RANGE:return p.OUT_OF_RANGE;case le.UNIMPLEMENTED:return p.UNIMPLEMENTED;case le.DATA_LOSS:return p.DATA_LOSS;default:return C()}}(F=le||(le={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return og(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new ie(I.comparator);function Ke(){return Yv}const xg=new ie(I.comparator);function si(...n){let e=xg;for(const t of n)e=e.insert(t.key,t);return e}function Ng(n){let e=xg;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ft(){return li()}function Ag(){return li()}function li(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const Xv=new ie(I.comparator),Jv=new K(I.comparator);function R(...n){let e=Jv;for(const t of n)e=e.add(t);return e}const Zv=new K(D);function qo(){return Zv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ir(x.min(),i,qo(),Ke(),R())}}class rr{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new rr(s,t,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,s,i){this.Tt=e,this.removedTargetIds=t,this.key=s,this.Et=i}}class kg{constructor(e,t){this.targetId=e,this.At=t}}class Dg{constructor(e,t,s=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class _h{constructor(){this.Rt=0,this.bt=wh(),this.Pt=de.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=R(),t=R(),s=R();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:C()}}),new rr(this.Pt,this.vt,e,t,s)}Nt(){this.Vt=!1,this.bt=wh()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ew{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ke(),this.qt=vh(),this.Kt=new K(D)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const s=this.zt(t);switch(e.state){case 0:this.Ht(t)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),s.Ct(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((s,i)=>{this.Ht(i)&&t(i)})}Yt(e){const t=e.targetId,s=e.At.count,i=this.Xt(t);if(i){const r=i.target;if(Hr(r))if(s===0){const o=new I(r.path);this.jt(t,o,z.newNoDocument(o,x.min()))}else A(s===1);else this.Zt(t)!==s&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Hr(a.target)){const c=new I(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,z.newNoDocument(c,e))}r.Dt&&(t.set(o,r.xt()),r.Nt())}});let s=R();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ir(e,t,this.Kt,this.Ut,s);return this.Ut=Ke(),this.qt=vh(),this.Kt=new K(D),i}Qt(e,t){if(!this.Ht(e))return;const s=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,t)?i.kt(t,1):i.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new _h,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new K(D),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new _h),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function vh(){return new ie(I.comparator)}function wh(){return new ie(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sw{constructor(e,t){this.databaseId=e,this.gt=t}}function bi(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rg(n,e){return n.gt?e.toBase64():e.toUint8Array()}function iw(n,e){return bi(n,e.toTimestamp())}function Ie(n){return A(!!n),x.fromTimestamp(function(e){const t=Kt(e);return new ee(t.seconds,t.nanos)}(n))}function gl(n,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Pg(n){const e=V.fromString(n);return A(qg(e)),e}function xi(n,e){return gl(n.databaseId,e.path)}function mt(n,e){const t=Pg(e);if(t.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Mg(t))}function rc(n,e){return gl(n.databaseId,e)}function Og(n){const e=Pg(n);return e.length===4?V.emptyPath():Mg(e)}function Ni(n){return new V(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mg(n){return A(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ih(n,e,t){return{name:xi(n,e),fields:t.value.mapValue.fields}}function Lg(n,e,t){const s=mt(n,e.name),i=Ie(e.updateTime),r=new Ne({mapValue:{fields:e.fields}}),o=z.newFoundDocument(s,i,r);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function rw(n,e){return"found"in e?function(t,s){A(!!s.found),s.found.name,s.found.updateTime;const i=mt(t,s.found.name),r=Ie(s.found.updateTime),o=new Ne({mapValue:{fields:s.found.fields}});return z.newFoundDocument(i,r,o)}(n,e):"missing"in e?function(t,s){A(!!s.missing),A(!!s.readTime);const i=mt(t,s.missing),r=Ie(s.readTime);return z.newNoDocument(i,r)}(n,e):C()}function ow(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.gt?(A(l===void 0||typeof l=="string"),de.fromBase64String(l||"")):(A(l===void 0||l instanceof Uint8Array),de.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:bg(c.code);return new y(l,c.message||"")}(o);t=new Dg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mt(n,s.document.name),r=Ie(s.document.updateTime),o=new Ne({mapValue:{fields:s.document.fields}}),a=z.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Lr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mt(n,s.document),r=s.readTime?Ie(s.readTime):x.min(),o=z.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Lr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mt(n,s.document),r=s.removedTargetIds||[];t=new Lr([],r,i,null)}else{if(!("filter"in e))return C();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Hv(i),o=s.targetId;t=new kg(o,r)}}return t}function Ai(n,e){let t;if(e instanceof Ps)t={update:Ih(n,e.key,e.value)};else if(e instanceof Os)t={delete:xi(n,e.key)};else if(e instanceof kt)t={update:Ih(n,e.key,e.data),updateMask:fw(e.fieldMask)};else{if(!(e instanceof fl))return C();t={verify:xi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof gs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ms)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw C()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:C()}(n,e.precondition)),t}function oc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?J.updateTime(Ie(i.updateTime)):i.exists!==void 0?J.exists(i.exists):J.none()}(e.currentDocument):J.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(r,o){let a=null;if("setToServerValue"in o)A(o.setToServerValue==="REQUEST_TIME"),a=new gs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Rn(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Pn(l)}else"increment"in o?a=new ms(r,o.increment):C();const c=ce.fromServerFormat(o.fieldPath);return new sr(c,a)}(n,i)):[];if(e.update){e.update.name;const i=mt(n,e.update.name),r=new Ne({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ye(c.map(l=>ce.fromServerFormat(l)))}(e.updateMask);return new kt(i,r,o,t,s)}return new Ps(i,r,t,s)}if(e.delete){const i=mt(n,e.delete);return new Os(i,t)}if(e.verify){const i=mt(n,e.verify);return new fl(i,t)}return C()}function aw(n,e){return n&&n.length>0?(A(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?Ie(s.updateTime):Ie(i);return r.isEqual(x.min())&&(r=Ie(i)),new jv(r,s.transformResults||[])}(t,e))):[]}function Fg(n,e){return{documents:[rc(n,e.path)]}}function Vg(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=rc(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=rc(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(rh(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NAN"}};if(ih(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(rh(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NOT_NAN"}};if(ih(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(h.field),op:uw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Jn(u.field),direction:lw(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.gt||er(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Ug(n){let e=Og(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){A(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=Bg(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new rs(ss(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,er(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Qt(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Qt(d,h)}(t.endAt)),dg(e,i,o,r,a,"F",c,l)}function cw(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bg(n){return n?n.unaryFilter!==void 0?[dw(n)]:n.fieldFilter!==void 0?[hw(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Bg(e)).reduce((e,t)=>e.concat(t)):C():[]}function lw(n){return tw[n]}function uw(n){return nw[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function ss(n){return ce.fromServerFormat(n.fieldPath)}function hw(n){return Ae.create(ss(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(n.fieldFilter.op),n.fieldFilter.value)}function dw(n){switch(n.unaryFilter.op){case"IS_NAN":const e=ss(n.unaryFilter.field);return Ae.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=ss(n.unaryFilter.field);return Ae.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return Ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ss(n.unaryFilter.field);return Ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}function fw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Eh(e)),e=gw(n.get(t),e);return Eh(e)}function gw(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Eh(n){return n+""}function gt(n){const e=n.length;if(A(e>=2),e===2)return A(n.charAt(0)===""&&n.charAt(1)===""),V.emptyPath();const t=e-2,s=[];let i="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&C(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),s.push(c);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:C()}r=o+2}return new V(s)}/**
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
 */const Th=["userId","batchId"];/**
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
 */function Fr(n,e){return[n,Be(e)]}function $g(n,e,t){return[n,Be(e),t]}const mw={},pw=["prefixPath","collectionGroup","readTime","documentId"],yw=["prefixPath","collectionGroup","documentId"],_w=["collectionGroup","readTime","prefixPath","documentId"],vw=["canonicalId","targetId"],ww=["targetId","path"],Iw=["path","targetId"],Ew=["collectionId","parent"],Tw=["indexId","uid"],Cw=["uid","sequenceNumber"],Sw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],bw=["indexId","uid","orderedDocumentKey"],xw=["userId","collectionPath","documentId"],Nw=["userId","collectionPath","largestBatchId"],Aw=["userId","collectionGroup","largestBatchId"],Gg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],kw=[...Gg,"documentOverlays"],Kg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wg=Kg,Dw=[...Wg,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends rg{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function Ce(n,e){const t=E(n);return ct.M(t.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Qv(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ci(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ci(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ag();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Tg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(t,s)=>mh(t,s))&&ds(this.baseMutations,e.baseMutations,(t,s)=>mh(t,s))}}class pl{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){A(e.mutations.length===s.length);let i=Xv;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new pl(e,t,s,i)}}/**
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
 */class yl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ut{constructor(e,t,s,i,r=x.min(),o=x.min(),a=de.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.re=e}}function Rw(n,e){let t;if(e.document)t=Lg(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=I.fromSegments(e.noDocument.path),i=Mn(e.noDocument.readTime);t=z.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return C();{const s=I.fromSegments(e.unknownDocument.path),i=Mn(e.unknownDocument.version);t=z.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(s){const i=new ee(s[0],s[1]);return x.fromTimestamp(i)}(e.readTime)),t}function Ch(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Jr(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(i,r){return{name:xi(i,r.key),fields:r.data.value.mapValue.fields,updateTime:bi(i,r.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:On(e.version)};else{if(!e.isUnknownDocument())return C();s.unknownDocument={path:t.path.toArray(),version:On(e.version)}}return s}function Jr(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function On(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mn(n){const e=new ee(n.seconds,n.nanoseconds);return x.fromTimestamp(e)}function gn(n,e){const t=(e.baseMutations||[]).map(r=>oc(n.re,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const s=e.mutations.map(r=>oc(n.re,r)),i=ee.fromMillis(e.localWriteTimeMs);return new ml(e.batchId,i,t,s)}function ii(n){const e=Mn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Mn(n.lastLimboFreeSnapshotVersion):x.min();let s;var i;return n.query.documents!==void 0?(A((i=n.query).documents.length===1),s=je(Rs(Og(i.documents[0])))):s=function(r){return je(Ug(r))}(n.query),new Ut(s,n.targetId,0,n.lastListenSequenceNumber,e,t,de.fromBase64String(n.resumeToken))}function Qg(n,e){const t=On(e.snapshotVersion),s=On(e.lastLimboFreeSnapshotVersion);let i;i=Hr(e.target)?Fg(n.re,e.target):Vg(n.re,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Dn(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function _l(n){const e=Ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xr(e,e.limit,"L"):e}function Na(n,e){return new yl(e.largestBatchId,oc(n.re,e.overlayMutation))}function Sh(n,e){const t=e.path.lastSegment();return[n,Be(e.path.popLast()),t]}function bh(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:On(s.readTime),documentKey:Be(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{getBundleMetadata(e,t){return xh(e).get(t).next(s=>{if(s)return{id:(i=s).bundleId,createTime:Mn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return xh(e).put({bundleId:(s=t).id,createTime:On(Ie(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Nh(e).get(t).next(s=>{if(s)return{name:(i=s).name,query:_l(i.bundledQuery),readTime:Mn(i.readTime)};var i})}saveNamedQuery(e,t){return Nh(e).put(function(s){return{name:s.name,readTime:On(Ie(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function xh(n){return Ce(n,"bundles")}function Nh(n){return Ce(n,"namedQueries")}/**
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
 */class $o{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const s=t.uid||"";return new $o(e,s)}getOverlay(e,t){return Ws(e).get(Sh(this.userId,t)).next(s=>s?Na(this.It,s):null)}getOverlays(e,t){const s=ft();return m.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((r,o)=>{const a=new yl(t,o);i.push(this.ue(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(o=>i.add(Be(o.getCollectionPath())));const r=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(Ws(e).Y("collectionPathOverlayIndex",a))}),m.waitFor(r)}getOverlaysForCollection(e,t,s){const i=ft(),r=Be(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Ws(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Na(this.It,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const r=ft();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ws(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Na(this.It,l);r.size()<i||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}ue(e,t){return Ws(e).put(function(s,i,r){const[o,a,c]=Sh(i,r.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:Ai(s.re,r.mutation)}}(this.It,this.userId,t))}}function Ws(n){return Ce(n,"documentOverlays")}/**
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
 */class mn{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(ne(e.integerValue));else if("doubleValue"in e){const s=ne(e.doubleValue);isNaN(s)?this.le(t,13):(this.le(t,15),Ti(s)?t.fe(0):t.fe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.le(t,20),typeof s=="string"?t.de(s):(t.de(`${s.seconds||""}`),t.fe(s.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Nn(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?lg(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):C()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const s=e.fields||{};this.le(t,55);for(const i of Object.keys(s))this._e(i,t),this.ae(s[i],t)}pe(e,t){const s=e.values||[];this.le(t,50);for(const i of s)this.ae(i,t)}ge(e,t){this.le(t,37),I.fromName(e).path.forEach(s=>{this.le(t,60),this.Ie(s,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}mn.Te=new mn;function Ow(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Ah(n){const e=64-function(t){let s=0;for(let i=0;i<8;++i){const r=Ow(255&t[i]);if(s+=r,r!==8)break}return s}(n);return Math.ceil(e/8)}class Mw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Pe(s.value),s=t.next();this.ve()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const i=t.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Pe(s);else if(s<2048)this.Pe(960|s>>>6),this.Pe(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s);else{const i=t.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const t=this.Ce(e),s=Ah(t);this.xe(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ne(e){const t=this.Ce(e),s=Ah(t);this.xe(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(i){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,i,!1),new Uint8Array(r.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class Lw{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class Fw{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class js{constructor(){this.Be=new Mw,this.Le=new Lw(this.Be),this.Ue=new Fw(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class pn{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new pn(this.indexId,this.documentKey,this.arrayValue,s)}}function ln(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=kh(n.arrayValue,e.arrayValue),t!==0?t:(t=kh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function kh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class Vw{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const s=t;s.dt()?this.je=s:this.Qe.push(s)}}We(e){const t=tc(e);if(t!==void 0&&!this.ze(t))return!1;const s=hn(e);let i=0,r=0;for(;i<s.length&&this.ze(s[i]);++i);if(i===s.length)return!0;if(this.je!==void 0){const o=s[i];if(!this.He(this.je,o)||!this.Je(this.Ge[r++],o))return!1;++i}for(;i<s.length;++i){const o=s[i];if(r>=this.Ge.length||!this.Je(this.Ge[r++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class Uw{constructor(){this.Ye=new vl}addToCollectionParentIndex(e,t){return this.Ye.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ze.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ze.min())}updateCollectionGroup(e,t,s){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class vl{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new K(V.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new K(V.comparator)).toArray()}}/**
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
 */const xr=new Uint8Array(0);class Bw{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new vl,this.Ze=new on(s=>Dn(s),(s,i)=>tr(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const r={collectionId:s,parent:Be(i)};return Dh(e).put(r)}return m.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[eg(t),""],!1,!0);return Dh(e).W(i).next(r=>{for(const o of r){if(o.collectionId!==t)break;s.push(gt(o.parent))}return s})}addFieldIndex(e,t){const s=Nr(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const r=s.add(i);if(t.indexState){const o=zs(e);return r.next(a=>{o.put(bh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const s=Nr(e),i=zs(e),r=Qs(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=Qs(e);let i=!0;const r=new Map;return m.forEach(this.tn(t),o=>this.en(e,o).next(a=>{i&&(i=!!a),r.set(o,a)})).next(()=>{if(i){let o=R();const a=[];return m.forEach(r,(c,l)=>{var u;v("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`} to execute ${Dn(t)}`);const h=function(W,fe){const ue=tc(fe);if(ue===void 0)return null;for(const oe of Yr(W,ue.fieldPath))switch(oe.op){case"array-contains-any":return oe.value.arrayValue.values||[];case"array-contains":return[oe.value]}return null}(l,c),d=function(W,fe){const ue=new Map;for(const oe of hn(fe))for(const qe of Yr(W,oe.fieldPath))switch(qe.op){case"==":case"in":ue.set(oe.fieldPath.canonicalString(),qe.value);break;case"not-in":case"!=":return ue.set(oe.fieldPath.canonicalString(),qe.value),Array.from(ue.values())}return null}(l,c),f=function(W,fe){const ue=[];let oe=!0;for(const qe of hn(fe)){const Gs=qe.kind===0?lh(W,qe.fieldPath,W.startAt):uh(W,qe.fieldPath,W.startAt);ue.push(Gs.value),oe&&(oe=Gs.inclusive)}return new Qt(ue,oe)}(l,c),g=function(W,fe){const ue=[];let oe=!0;for(const qe of hn(fe)){const Gs=qe.kind===0?uh(W,qe.fieldPath,W.endAt):lh(W,qe.fieldPath,W.endAt);ue.push(Gs.value),oe&&(oe=Gs.inclusive)}return new Qt(ue,oe)}(l,c),_=this.nn(c,l,f),T=this.nn(c,l,g),L=this.sn(c,l,d),G=this.rn(c.indexId,h,_,f.inclusive,T,g.inclusive,L);return m.forEach(G,W=>s.J(W,t.limit).next(fe=>{fe.forEach(ue=>{const oe=I.fromSegments(ue.documentKey);o.has(oe)||(o=o.add(oe),a.push(oe))})}))}).next(()=>a)}return m.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,s,i,r,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.on(t[h/l]):xr,f=this.un(e,d,s[h%l],i),g=this.cn(e,d,r[h%l],o),_=a.map(T=>this.un(e,d,T,!0));u.push(...this.createRange(f,g,_))}return u}un(e,t,s,i){const r=new pn(e,I.empty(),t,s);return i?r:r.Ke()}cn(e,t,s,i){const r=new pn(e,I.empty(),t,s);return i?r.Ke():r}en(e,t){const s=new Vw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(const a of r)s.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return m.forEach(this.tn(t),i=>this.en(e,i).next(r=>{r?s!==0&&r.fields.length<function(o){let a=new K(ce.comparator),c=!1;for(const l of o.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?c=!0:a=a.add(u.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(c?1:0)}(i)&&(s=1):s=0})).next(()=>s)}an(e,t){const s=new js;for(const i of hn(e)){const r=t.data.field(i.fieldPath);if(r==null)return null;const o=s.qe(i.kind);mn.Te.ce(r,o)}return s.$e()}on(e){const t=new js;return mn.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const s=new js;return mn.Te.ce(kn(this.databaseId,t),s.qe(function(i){const r=hn(i);return r.length===0?0:r[r.length-1].kind}(e))),s.$e()}sn(e,t,s){if(s===null)return[];let i=[];i.push(new js);let r=0;for(const o of hn(e)){const a=s[r++];for(const c of i)if(this.ln(t,o.fieldPath)&&Si(a))i=this.fn(i,o,a);else{const l=c.qe(o.kind);mn.Te.ce(a,l)}}return this.dn(i)}nn(e,t,s){return this.sn(e,t,s.position)}dn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].$e();return t}fn(e,t,s){const i=[...e],r=[];for(const o of s.arrayValue.values||[])for(const a of i){const c=new js;c.seed(a.$e()),mn.Te.ce(o,c.qe(t.kind)),r.push(c)}return r}ln(e,t){return!!e.filters.find(s=>s instanceof Ae&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Nr(e),i=zs(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(r=>{const o=[];return m.forEach(r,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new zr(u.sequenceNumber,new Ze(Mn(u.readTime),new I(gt(u.documentKey)),u.largestBatchId)):zr.empty(),d=l.fields.map(([f,g])=>new Ev(ce.fromServerFormat(f),g));return new tg(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:D(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=Nr(e),r=zs(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>r.put(bh(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return m.forEach(t,(i,r)=>{const o=s.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(s.set(i.collectionGroup,a),m.forEach(a,c=>this.wn(e,i,c).next(l=>{const u=this.mn(r,c);return l.isEqual(u)?m.resolve():this.gn(e,r,c,l,u)}))))})}yn(e,t,s,i){return Qs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(s,t.key),documentKey:t.key.path.toArray()})}pn(e,t,s,i){return Qs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(s,t.key),t.key.path.toArray()])}wn(e,t,s){const i=Qs(e);let r=new K(ln);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.hn(s,t)])},(o,a)=>{r=r.add(new pn(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}mn(e,t){let s=new K(ln);const i=this.an(t,e);if(i==null)return s;const r=tc(t);if(r!=null){const o=e.data.field(r.fieldPath);if(Si(o))for(const a of o.arrayValue.values||[])s=s.add(new pn(t.indexId,e.key,this.on(a),i))}else s=s.add(new pn(t.indexId,e.key,xr,i));return s}gn(e,t,s,i,r){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let g=Xn(d),_=Xn(f);for(;g||_;){let T=!1,L=!1;if(g&&_){const G=l(g,_);G<0?L=!0:G>0&&(T=!0)}else g!=null?L=!0:T=!0;T?(u(_),_=Xn(f)):L?(h(g),g=Xn(d)):(g=Xn(d),_=Xn(f))}}(i,r,ln,a=>{o.push(this.yn(e,t,s,a))},a=>{o.push(this.pn(e,t,s,a))}),m.waitFor(o)}_n(e){let t=1;return zs(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>ln(o,a)).filter((o,a,c)=>!a||ln(o,c[a-1])!==0);const i=[];i.push(e);for(const o of s){const a=ln(o,e),c=ln(o,t);if(a===0)i[0]=e.Ke();else if(a>0&&c<0)i.push(o),i.push(o.Ke());else if(c>0)break}i.push(t);const r=[];for(let o=0;o<i.length;o+=2)r.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,xr,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,xr,[]]));return r}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Rh)}getMinOffset(e,t){return m.mapArray(this.tn(t),s=>this.en(e,s).next(i=>i||C())).next(Rh)}}function Dh(n){return Ce(n,"collectionParents")}function Qs(n){return Ce(n,"indexEntries")}function Nr(n){return Ce(n,"indexConfiguration")}function zs(n){return Ce(n,"indexState")}function Rh(n){A(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const i=n[s].indexState.offset;ol(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ze(e.readTime,e.documentKey,t)}/**
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
 */const Ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $e{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n,e,t){const s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{A(a===1)}));const l=[];for(const u of t.mutations){const h=$g(e,u.key.path,t.batchId);r.push(i.delete(h)),l.push(u.key)}return m.waitFor(r).next(()=>l)}function Zr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw C();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(41943040,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);class Go{constructor(e,t,s,i){this.userId=e,this.It=t,this.indexManager=s,this.referenceDelegate=i,this.In={}}static oe(e,t,s,i){A(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new Go(r,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).Z({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const r=ts(e),o=Rt(e);return o.add({}).next(a=>{A(typeof a=="number");const c=new ml(a,t,s,i),l=function(d,f,g){const _=g.baseMutations.map(L=>Ai(d.re,L)),T=g.mutations.map(L=>Ai(d.re,L));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:_,mutations:T}}(this.It,this.userId,c),u=[];let h=new K((d,f)=>D(d.canonicalString(),f.canonicalString()));for(const d of i){const f=$g(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,mw))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),m.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Rt(e).get(t).next(s=>s?(A(s.userId===this.userId),gn(this.It,s)):null)}Tn(e,t){return this.In[t]?m.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let r=null;return Rt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(A(a.batchId>=s),r=gn(this.It,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Rt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).W("userMutationsIndex",t).next(s=>s.map(i=>gn(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Fr(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return ts(e).Z({range:i},(o,a,c)=>{const[l,u,h]=o,d=gt(u);if(l===this.userId&&t.path.isEqual(d))return Rt(e).get(h).next(f=>{if(!f)throw C();A(f.userId===this.userId),r.push(gn(this.It,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new K(D);const i=[];return t.forEach(r=>{const o=Fr(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=ts(e).Z({range:a},(l,u,h)=>{const[d,f,g]=l,_=gt(f);d===this.userId&&r.path.isEqual(_)?s=s.add(g):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,r=Fr(this.userId,s),o=IDBKeyRange.lowerBound(r);let a=new K(D);return ts(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,g=gt(d);h===this.userId&&s.isPrefixOf(g)?g.length===i&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],i=[];return t.forEach(r=>{i.push(Rt(e).get(r).next(o=>{if(o===null)throw C();A(o.userId===this.userId),s.push(gn(this.It,o))}))}),m.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return zg(e.ie,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),m.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const s=IDBKeyRange.lowerBound([this.userId]),i=[];return ts(e).Z({range:s},(r,o,a)=>{if(r[0]===this.userId){const c=gt(r[1]);i.push(c)}else a.done()}).next(()=>{A(i.length===0)})})}containsKey(e,t){return Hg(e,this.userId,t)}Rn(e){return Yg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hg(n,e,t){const s=Fr(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return ts(n).Z({range:r,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Rt(n){return Ce(n,"mutations")}function ts(n){return Ce(n,"documentMutations")}function Yg(n){return Ce(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ln(0)}static vn(){return new Ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new Ln(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>x.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zn(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(A(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let i=0;const r=[];return Zn(e).Z((o,a)=>{const c=ii(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(i++,r.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(r)).next(()=>i)}forEachTarget(e,t){return Zn(e).Z((s,i)=>{const r=ii(i);t(r)})}Vn(e){return Oh(e).get("targetGlobalKey").next(t=>(A(t!==null),t))}Sn(e,t){return Oh(e).put("targetGlobalKey",t)}Dn(e,t){return Zn(e).put(Qg(this.It,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Dn(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let r=null;return Zn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=ii(a);tr(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,s){const i=[],r=Ot(e);return t.forEach(o=>{const a=Be(o.path);i.push(r.put({targetId:s,path:a})),i.push(this.referenceDelegate.addReference(e,s,o))}),m.waitFor(i)}removeMatchingKeys(e,t,s){const i=Ot(e);return m.forEach(t,r=>{const o=Be(r.path);return m.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){const s=Ot(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ot(e);let r=R();return i.Z({range:s,X:!0},(o,a,c)=>{const l=gt(o[1]),u=new I(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const s=Be(t.path),i=IDBKeyRange.bound([s],[eg(s)],!1,!0);let r=0;return Ot(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}se(e,t){return Zn(e).get(t).next(s=>s?ii(s):null)}}function Zn(n){return Ce(n,"targets")}function Oh(n){return Ce(n,"targetGlobal")}function Ot(n){return Ce(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh([n,e],[t,s]){const i=D(n,t);return i===0?D(e,s):i}class $w{constructor(e){this.xn=e,this.buffer=new K(Mh),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Mh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await sn(t)}await this.Fn(3e5)})}}class Kw{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Ge.at);const s=new $w(t);return this.$n.forEachTarget(e,i=>s.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>s.On(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Ph)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ph):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let s,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),ec()<=bn.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t){this.db=e,this.garbageCollector=function(s,i){return new Kw(s,i)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}qn(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,i)=>t(i))}addReference(e,t,s){return Ar(e,s)}removeReference(e,t,s){return Ar(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Ar(e,t)}Gn(e,t){return function(s,i){let r=!1;return Yg(s).tt(o=>Hg(s,o,i).next(a=>(a&&(r=!0),m.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,x.min()),Ot(e).delete([0,Be(o.path)])))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Ar(e,t)}Kn(e,t){const s=Ot(e);let i,r=Ge.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==Ge.at&&t(new I(gt(i)),r),r=l,i=c):r=Ge.at}).next(()=>{r!==Ge.at&&t(new I(gt(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ar(n,e){return Ot(n).put(function(t,s){return{targetId:0,path:Be(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?m.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return un(e).put(s)}removeEntry(e,t,s){return un(e).delete(function(i,r){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Jr(r),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=z.newInvalidDocument(t);return un(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hs(t))},(i,r)=>{s=this.jn(t,r)}).next(()=>s)}Wn(e,t){let s={size:0,document:z.newInvalidDocument(t)};return un(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hs(t))},(i,r)=>{s={document:this.jn(t,r),size:Zr(r)}}).next(()=>s)}getEntries(e,t){let s=Ke();return this.zn(e,t,(i,r)=>{const o=this.jn(i,r);s=s.insert(i,o)}).next(()=>s)}Hn(e,t){let s=Ke(),i=new ie(I.comparator);return this.zn(e,t,(r,o)=>{const a=this.jn(r,o);s=s.insert(r,a),i=i.insert(r,Zr(o))}).next(()=>({documents:s,Jn:i}))}zn(e,t,s){if(t.isEmpty())return m.resolve();let i=new K(Vh);t.forEach(c=>i=i.add(c));const r=IDBKeyRange.bound(Hs(i.first()),Hs(i.last())),o=i.getIterator();let a=o.getNext();return un(e).Z({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=I.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Vh(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(Hs(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const i=[t.popLast().toArray(),t.lastSegment(),Jr(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return un(e).W(IDBKeyRange.bound(i,r,!0)).next(o=>{let a=Ke();for(const c of o){const l=this.jn(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,s,i){let r=Ke();const o=Fh(t,s),a=Fh(t,Ze.max());return un(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(I.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===i&&u.done()}).next(()=>r)}newChangeBuffer(e){return new Qw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Lh(e).get("remoteDocumentGlobalKey").next(t=>(A(!!t),t))}Qn(e,t){return Lh(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=Rw(this.It,t);if(!(s.isNoDocument()&&s.version.isEqual(x.min())))return s}return z.newInvalidDocument(e)}}function Jg(n){return new jw(n)}class Qw extends Xg{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new on(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new K((r,o)=>D(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=Ch(this.Yn.It,o);i=i.add(r.path.popLast());const l=Zr(c);s+=l-a.size,t.push(this.Yn.addEntry(e,r,c))}else if(s-=a.size,this.trackRemovals){const c=Ch(this.Yn.It,o.convertToNoDocument(x.min()));t.push(this.Yn.addEntry(e,r,c))}}),i.forEach(r=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Yn.updateMetadata(e,s)),m.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:i})=>(i.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:s.get(r).readTime})}),s))}}function Lh(n){return Ce(n,"remoteDocumentGlobal")}function un(n){return Ce(n,"remoteDocumentsV14")}function Hs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fh(n,e){const t=e.documentKey.path.toArray();return[n,Jr(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Vh(n,e){const t=n.path.toArray(),s=e.path.toArray();let i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=D(t[r],s[r]),i)return i;return i=D(t.length,s.length),i||(i=D(t[t.length-2],s[s.length-2]),i||D(t[t.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.getBaseDocument(e,t,s))).next(i=>(s!==null&&ci(s.mutation,i,Ye.empty(),ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,R()).next(()=>s))}getLocalViewOfDocuments(e,t,s=R()){const i=ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=si();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,R()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Ke();const o=li(),a=li();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof kt)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ci(u.mutation,l,u.mutation.getFieldMask(),ee.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new zw(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=li();let i=new ie((o,a)=>o-a),r=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Ye.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ag();u.forEach(d=>{if(!r.has(d)){const f=Tg(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):m.resolve(ft());let a=-1,c=r;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?m.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,R())).next(u=>({batchId:a,changes:Ng(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(s=>{let i=si();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=si();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,u){return new At(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,z.newInvalidDocument(l)))});let o=si();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ci(l.mutation,c,Ye.empty(),ee.now()),dl(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):m.resolve(z.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return m.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:Ie(s.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:_l(s.bundledQuery),readTime:Ie(s.readTime)}}(t)),m.resolve()}}/**
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
 */class Yw{constructor(){this.overlays=new ie(I.comparator),this.es=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ft();return m.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ue(e,t,r)}),m.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(e,t,s){const i=ft(),r=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=ft(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ft(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return m.resolve(a)}ue(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yl(t,s));let r=this.es.get(t);r===void 0&&(r=R(),this.es.set(t,r)),this.es.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.ns=new K(me.ss),this.rs=new K(me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new me(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new me(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new I(new V([])),s=new me(t,e),i=new me(t,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new I(new V([])),s=new me(t,e),i=new me(t,e+1);let r=R();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new me(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class me{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return I.comparator(e.key,t.key)||D(e._s,t._s)}static os(e,t){return D(e._s,t._s)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new K(me.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ml(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new me(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ps(s),r=i<0?0:i;return m.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),m.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new K(D);return t.forEach(i=>{const r=new me(i,0),o=new me(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;I.isDocumentKey(r)||(r=r.child(""));const o=new me(new I(r),0);let a=new K(D);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){A(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(t.mutations,i=>{const r=new me(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new me(t,0),i=this.gs.firstAfterOrEqual(s);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.Es=e,this.docs=new ie(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return m.resolve(s?s.document.mutableCopy():z.newInvalidDocument(t))}getEntries(e,t){let s=Ke();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():z.newInvalidDocument(i))}),m.resolve(s)}getAllFromCollection(e,t,s){let i=Ke();const r=new I(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||ol(sg(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,s,i){C()}As(e,t){return m.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Zw(this)}getSize(e){return m.resolve(this.size)}}class Zw extends Xg{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),m.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.persistence=e,this.Rs=new on(t=>Dn(t),tr),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wl,this.targetCount=0,this.vs=Ln.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),m.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Dn(t),m.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(r).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return m.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),m.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),m.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return m.resolve(s)}containsKey(e,t){return m.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Ge(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new eI(this),this.indexManager=new Uw,this.remoteDocumentCache=function(s){return new Jw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new jg(t),this.Ns=new Hw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new Xw(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const i=new tI(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,t){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class tI extends rg{constructor(e){super(),this.currentSequenceNumber=e}}class Ko{constructor(e){this.persistence=e,this.Fs=new wl,this.$s=null}static Bs(e){return new Ko(e)}get Ls(){if(this.$s)return this.$s;throw C()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),m.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),m.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const i=I.fromPath(s);return this.Us(e,i).next(r=>{r||t.removeEntry(i,x.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return m.or([()=>m.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.It=e}$(e,t,s,i){const r=new Vo("createOrUpgrade",t);s<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Th,{unique:!0}),a.createObjectStore("documentMutations")}(e),Uh(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return s<3&&i>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Uh(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:x.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Th,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return m.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.qs(r))),s<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),s<7&&i>=7&&(o=o.next(()=>this.Gs(r))),s<8&&i>=8&&(o=o.next(()=>this.Qs(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.js(r))),s<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:xw});c.createIndex("collectionPathOverlayIndex",Nw,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Aw,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:pw});c.createIndex("documentKeyIndex",yw),c.createIndex("collectionGroupIndex",_w)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.zs(e,r))),s<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Tw}).createIndex("sequenceNumberIndex",Cw,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Sw}).createIndex("documentKeyIndex",bw,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,i)=>{t+=Zr(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}qs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(i=>m.forEach(i,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{A(c.userId===r.userId);const l=gn(this.It,c);return zg(e,r.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const r=[];return s.Z((o,a)=>{const c=new V(o),l=function(u){return[0,Be(u)]}(c);r.push(t.get(l).next(u=>u?m.resolve():(h=>t.put({targetId:0,path:Be(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Ew});const s=t.store("collectionParents"),i=new vl,r=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Be(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new V(o);return r(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=gt(a);return r(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,i)=>{const r=ii(i),o=Qg(this.It,r);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),i=[];return s.Z((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new I(V.fromString(l.document.name).popFirst(5)):l.noDocument?I.fromSegments(l.noDocument.path):l.unknownDocument?I.fromSegments(l.unknownDocument.path):C()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}zs(e,t){const s=t.store("mutations"),i=Jg(this.It),r=new em(Ko.Bs,this.It.re);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:R();gn(this.It,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),m.forEach(a,(c,l)=>{const u=new ye(l),h=$o.oe(this.It,u),d=r.getIndexManager(u),f=Go.oe(u,this.It,d,r.referenceDelegate);return new Zg(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ac(t,Ge.at),c).next()})})}}function Uh(n){n.createObjectStore("targetDocuments",{keyPath:ww}).createIndex("documentTargetsIndex",Iw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vw,{unique:!0}),n.createObjectStore("targetGlobal")}const Aa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Il{constructor(e,t,s,i,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=r,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Il.C())throw new y(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ww(this,i),this.ii=t+"main",this.It=new jg(c),this.ri=new ct(this.ii,this.Xs,new nI(this.It)),this.Cs=new qw(this.referenceDelegate,this.It),this.remoteDocumentCache=Jg(this.It),this.Ns=new Pw,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&ae("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Aa);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Ge(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kr(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(rn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Ys(e).get("owner").next(t=>m.resolve(this.mi(t)))}gi(e){return kr(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=Ce(t,"clientMetadata");return s.W().next(i=>{const r=this.Ii(i,18e5),o=i.filter(a=>r.indexOf(a)===-1);return m.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?m.resolve(!0):Ys(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Aa);return!1}}return!(!this.networkEnabled||!this.inForeground)||kr(e).W().next(s=>this.Ii(s,5e3).find(i=>{if(this.clientId!==i.clientId){const r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ac(e,Ge.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>kr(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Go.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Bw(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return $o.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?Dw:o===14?Wg:o===13?Kg:o===12?kw:o===11?Gg:void C();var o;let a;return this.ri.runTransaction(e,i,r,c=>(a=new ac(c,this.Ss?this.Ss.next():Ge.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw ae(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new y(p.FAILED_PRECONDITION,ig);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Ys(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(p.FAILED_PRECONDITION,Aa)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ys(e).put("owner",t)}static C(){return ct.C()}_i(e){const t=Ys(e);return t.get("owner").next(s=>this.mi(s)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(ae(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Uy()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return ae("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){ae("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ys(n){return Ce(n,"owner")}function kr(n){return Ce(n,"clientMetadata")}function El(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=i}static Ci(e,t){let s=R(),i=R();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Tl(e,t.fromCache,s,i)}}/**
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
 */class tm{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,s)).next(r=>r||this.Mi(e,t))}ki(e,t){if(fh(t))return m.resolve(null);let s=je(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Xr(t,null,"F"),s=je(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=R(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Xr(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,i){return fh(t)||i.isEqual(x.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,s,i)?this.Mi(e,t):(ec()<=bn.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ic(t)),this.Bi(e,o,t,ng(i,-1)))})}Fi(e,t){let s=new K(mg(e));return t.forEach((i,r)=>{dl(e,r)&&(s=s.add(r))}),s}$i(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return ec()<=bn.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",ic(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ze.min())}Bi(e,t,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,s,i){this.persistence=e,this.Li=t,this.It=i,this.Ui=new ie(D),this.qi=new on(r=>Dn(r),tr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function nm(n,e,t,s){return new sI(n,e,t,s)}async function sm(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function iI(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const _=c.docVersions.get(f);A(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function im(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function rI(n,e){const t=E(n),s=e.snapshotVersion;let i=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(de.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,_,T){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(r,f))});let c=Ke(),l=R();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(rm(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(x.min())){const u=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return m.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ui=i,r))}function rm(n,e,t){let s=R(),i=R();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Ke();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function oI(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ps(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Cs.getTargetData(s,e).next(r=>r?(i=r,m.resolve(i)):t.Cs.allocateTargetId(s).next(o=>(i=new Ut(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function ys(n,e,t){const s=E(n),i=s.Ui.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function eo(n,e,t){const s=E(n);let i=x.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=E(a),h=u.qi.get(l);return h!==void 0?m.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,je(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?i:x.min(),t?r:R())).next(a=>(cm(s,gg(e),a),{documents:a,Hi:r})))}function om(n,e){const t=E(n),s=E(t.Cs),i=t.Ui.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",r=>s.se(r,e).next(o=>o?o.target:null))}function am(n,e){const t=E(n),s=t.Ki.get(e)||x.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,ng(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(cm(t,e,i),i))}function cm(n,e,t){let s=n.Ki.get(e)||x.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ki.set(e,s)}async function aI(n,e,t,s){const i=E(n);let r=R(),o=Ke();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await ps(i,function(l){return je(Rs(V.fromString(`__bundle__/docs/${l}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>rm(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Cs.addMatchingKeys(l,r,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function cI(n,e,t=R()){const s=await ps(n,je(_l(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",r=>{const o=Ie(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(r,e);const a=s.withResumeToken(de.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(r,a).next(()=>i.Cs.removeMatchingKeysForTargetId(r,s.targetId)).next(()=>i.Cs.addMatchingKeys(r,t,s.targetId)).next(()=>i.Ns.saveNamedQuery(r,e))})}function Bh(n,e){return`firestore_clients_${n}_${e}`}function qh(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function ka(n,e){return`firestore_targets_${n}_${e}`}class to{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static Zi(e,t,s){const i=JSON.parse(s);let r,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(r=new y(i.error.code,i.error.message))),o?new to(e,t,i.state,r):(ae("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ui{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let i,r=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return r&&s.error&&(r=typeof s.error.message=="string"&&typeof s.error.code=="string",r&&(i=new y(s.error.code,s.error.message))),r?new ui(e,s.state,i):(ae("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class no{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,r=qo();for(let o=0;i&&o<s.activeTargetIds.length;++o)i=cg(s.activeTargetIds[o]),r=r.add(s.activeTargetIds[o]);return i?new no(e,r):(ae("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Cl{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Cl(t.clientId,t.onlineState):(ae("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cc{constructor(){this.activeTargetIds=qo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Da{constructor(e,t,s,i,r){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ie(D),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=Bh(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new cc),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const i=this.getItem(Bh(this.persistenceKey,s));if(i){const r=no.Zi(s,i);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ka(this.persistenceKey,e));if(s){const i=ui.Zi(e,s);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ka(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.Er(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void ae("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(i){let r=Ge.at;if(i!=null)try{const o=JSON.parse(i);A(typeof o=="number"),r=o}catch(o){ae("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);s!==Ge.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const i=new to(this.currentUser,e,t,s),r=qh(this.persistenceKey,this.currentUser,e);this.setItem(r,i.tr())}Er(e){const t=qh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const i=ka(this.persistenceKey,e),r=new ui(e,t,s);this.setItem(i,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return no.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),i=Number(s[1]),r=s[2]!==void 0?s[2]:null;return to.Zi(new ye(r),i,t)}Nr(e,t){const s=this._r.exec(e),i=Number(s[1]);return ui.Zi(i,t)}yr(e){return Cl.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),r=this.Ir(s),o=[],a=[];return r.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=qo();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class lm{constructor(){this.Lr=new cc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,s){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new cc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lI{qr(e){}shutdown(){}}/**
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
 */class $h{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,i,r){const o=this.ho(e,t);v("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw hs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,i,r,o){return this.ao(e,t,s,i,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,t){const s=uI[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,i){return new Promise((r,o)=>{const a=new uv;a.setWithCredentials(!0),a.listenOnce(av.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case xa.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case xa.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(l=d)===null||l===void 0?void 0:l.error;if(f&&f.status&&f.message){const g=function(_){const T=_.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(T)>=0?T:p.UNKNOWN}(f.status);o(new y(g,f.message))}else o(new y(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(p.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}wo(e,t,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=rv(),o=ov(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lv({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new hI({Hr:g=>{h?v("Connection","Not sending because WebChannel is closed:",g):(u||(v("Connection","Opening WebChannel transport."),l.open(),u=!0),v("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),f=(g,_,T)=>{g.listen(_,L=>{try{T(L)}catch(G){setTimeout(()=>{throw G},0)}})};return f(l,Sr.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),f(l,Sr.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.io())}),f(l,Sr.EventType.ERROR,g=>{h||(h=!0,hs("Connection","WebChannel transport errored:",g),d.io(new y(p.UNAVAILABLE,"The operation could not be completed")))}),f(l,Sr.EventType.MESSAGE,g=>{var _;if(!h){const T=g.data[0];A(!!T);const L=T,G=L.error||((_=L[0])===null||_===void 0?void 0:_.error);if(G){v("Connection","WebChannel received error:",G);const W=G.status;let fe=function(oe){const qe=le[oe];if(qe!==void 0)return bg(qe)}(W),ue=G.message;fe===void 0&&(fe=p.INTERNAL,ue="Unknown error status: "+W+" with message "+G.message),h=!0,d.io(new y(fe,ue)),l.close()}else v("Connection","WebChannel received:",T),d.ro(T)}}),f(o,cv.STAT_EVENT,g=>{g.stat===Ju.PROXY?v("Connection","Detected buffering proxy"):g.stat===Ju.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function um(){return typeof window<"u"?window:null}function Vr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){return new sw(n,!0)}class Sl{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Sl(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(ae(t.toString()),ae("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===t&&this.Go(s,i)},s=>{e(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fI extends hm{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.It=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ow(this.It,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?Ie(r.readTime):x.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=Ni(this.It),t.addTarget=function(i,r){let o;const a=r.target;return o=Hr(a)?{documents:Fg(i,a)}:{query:Vg(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Rg(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=bi(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=cw(this.It,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=Ni(this.It),t.removeTarget=e,this.Bo(t)}}class gI extends hm{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(A(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=aw(e.writeResults,e.commitTime),s=Ie(e.commitTime);return this.listener.Zo(s,t)}return A(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ni(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ai(this.It,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}_o(e,t,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(p.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class pI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ae(t),this.ou=!1):v("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{an(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=E(a);c._u.add(4),await Ms(c),c.gu.set("Unknown"),c._u.delete(4),await ar(c)}(this))})}),this.gu=new pI(s,i)}}async function ar(n){if(an(n))for(const e of n.wu)await e(!0)}async function Ms(n){for(const e of n.wu)await e(!1)}function Wo(n,e){const t=E(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Nl(t)?xl(t):Fs(t).ko()&&bl(t,e))}function ki(n,e){const t=E(n),s=Fs(t);t.du.delete(e),s.ko()&&dm(t,e),t.du.size===0&&(s.ko()?s.Fo():an(t)&&t.gu.set("Unknown"))}function bl(n,e){n.yu.Mt(e.targetId),Fs(n).zo(e)}function dm(n,e){n.yu.Mt(e),Fs(n).Ho(e)}function xl(n){n.yu=new ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),Fs(n).start(),n.gu.uu()}function Nl(n){return an(n)&&!Fs(n).No()&&n.du.size>0}function an(n){return E(n)._u.size===0}function fm(n){n.yu=void 0}async function _I(n){n.du.forEach((e,t)=>{bl(n,e)})}async function vI(n,e){fm(n),Nl(n)?(n.gu.hu(e),xl(n)):n.gu.set("Unknown")}async function wI(n,e,t){if(n.gu.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await so(n,s)}else if(e instanceof Lr?n.yu.Gt(e):e instanceof kg?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(x.min()))try{const s=await im(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(de.EMPTY_BYTE_STRING,c.snapshotVersion)),dm(i,a);const l=new Ut(c.target,a,1,c.sequenceNumber);bl(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await so(n,s)}}async function so(n,e,t){if(!rn(e))throw e;n._u.add(1),await Ms(n),n.gu.set("Offline"),t||(t=()=>im(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await ar(n)})}function gm(n,e){return e().catch(t=>so(n,t,e))}async function Ls(n){const e=E(n),t=zt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;II(e);)try{const i=await oI(e.localStore,s);if(i===null){e.fu.length===0&&t.Fo();break}s=i.batchId,EI(e,i)}catch(i){await so(e,i)}mm(e)&&pm(e)}function II(n){return an(n)&&n.fu.length<10}function EI(n,e){n.fu.push(e);const t=zt(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function mm(n){return an(n)&&!zt(n).No()&&n.fu.length>0}function pm(n){zt(n).start()}async function TI(n){zt(n).eu()}async function CI(n){const e=zt(n);for(const t of n.fu)e.Xo(t.mutations)}async function SI(n,e,t){const s=n.fu.shift(),i=pl.from(s,e,t);await gm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ls(n)}async function bI(n,e){e&&zt(n).Yo&&await async function(t,s){if(i=s.code,Sg(i)&&i!==p.ABORTED){const r=t.fu.shift();zt(t).Mo(),await gm(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ls(t)}var i}(n,e),mm(n)&&pm(n)}async function Gh(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=an(t);t._u.add(3),await Ms(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await ar(t)}async function lc(n,e){const t=E(n);e?(t._u.delete(2),await ar(t)):e||(t._u.add(2),await Ms(t),t.gu.set("Unknown"))}function Fs(n){return n.pu||(n.pu=function(e,t,s){const i=E(e);return i.su(),new fI(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(n.datastore,n.asyncQueue,{Yr:_I.bind(null,n),Zr:vI.bind(null,n),Wo:wI.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Nl(n)?xl(n):n.gu.set("Unknown")):(await n.pu.stop(),fm(n))})),n.pu}function zt(n){return n.Iu||(n.Iu=function(e,t,s){const i=E(e);return i.su(),new gI(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,s)}(n.datastore,n.asyncQueue,{Yr:TI.bind(null,n),Zr:bI.bind(null,n),tu:CI.bind(null,n),Zo:SI.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Ls(n)):(await n.Iu.stop(),n.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Al(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vs(n,e){if(ae("AsyncQueue",`${e}: ${n}`),rn(n))return new y(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(t,s)=>e(t,s)||I.comparator(t.key,s.key):(t,s)=>I.comparator(t.key,s.key),this.keyedMap=si(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Tu=new ie(I.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):C():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class _s{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,t,os.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.Au=void 0,this.listeners=[]}}class NI{constructor(){this.queries=new on(e=>fg(e),nr),this.onlineState="Unknown",this.Ru=new Set}}async function kl(n,e){const t=E(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new xI),i)try{r.Au=await t.onListen(s)}catch(o){const a=Vs(o,`Initialization of query '${ic(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&Rl(t)}async function Dl(n,e){const t=E(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function AI(n,e){const t=E(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Rl(t)}function kI(n,e,t){const s=E(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Rl(n){n.Ru.forEach(e=>{e.next()})}class Pl{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new _s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.It=e}Ji(e){return mt(this.It,e)}Yi(e){return e.metadata.exists?Lg(this.It,e.document,!1):z.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ie(e)}}class RI{constructor(e,t,s){this.Mu=e,this.localStore=t,this.It=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ym(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=V.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new Wh(this.It);for(const i of e)if(i.metadata.queries){const r=s.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||R()).add(r);t.set(o,a)}}return t}async complete(){const e=await aI(this.localStore,new Wh(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await cI(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function ym(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.key=e}}class vm{constructor(e){this.key=e}}class wm{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=mg(e),this.Qu=new os(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new Kh,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=dl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(s.track({type:3,doc:f}),T=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),T=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),T=!0):d&&!f&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new _s(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Kh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=R(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new vm(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new _m(s))}),t}tc(e){this.Uu=e.Hi,this.Ku=R();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return _s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class PI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class OI{constructor(e){this.key=e,this.nc=!1}}class MI{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new on(a=>fg(a),nr),this.rc=new Map,this.oc=new Set,this.uc=new ie(I.comparator),this.cc=new Map,this.ac=new wl,this.hc={},this.lc=new Map,this.fc=Ln.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function LI(n,e){const t=Vl(n);let s,i;const r=t.ic.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await ps(t.localStore,je(e));t.isPrimaryClient&&Wo(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ol(t,e,s,a==="current",o.resumeToken)}return i}async function Ol(n,e,t,s,i){n._c=(h,d,f)=>async function(g,_,T,L){let G=_.view.Wu(T);G.$i&&(G=await eo(g.localStore,_.query,!1).then(({documents:ue})=>_.view.Wu(ue,G)));const W=L&&L.targetChanges.get(_.targetId),fe=_.view.applyChanges(G,g.isPrimaryClient,W);return uc(g,_.targetId,fe.Xu),fe.snapshot}(n,h,d,f);const r=await eo(n.localStore,e,!0),o=new wm(e,r.Hi),a=o.Wu(r.documents),c=rr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);uc(n,t,l.Xu);const u=new PI(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function FI(n,e){const t=E(n),s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(r=>!nr(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await ys(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ki(t.remoteStore,s.targetId),vs(t,s.targetId)}).catch(sn)):(vs(t,s.targetId),await ys(t.localStore,s.targetId,!0))}async function VI(n,e,t){const s=Ul(n);try{const i=await function(r,o){const a=E(r),c=ee.now(),l=o.reduce((d,f)=>d.add(f.key),R());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ke(),g=R();return a.Gi.getEntries(d,l).next(_=>{f=_,f.forEach((T,L)=>{L.isValidDocument()||(g=g.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const T=[];for(const L of o){const G=zv(L,u.get(L.key).overlayedDocument);G!=null&&T.push(new kt(L.key,G,ug(G.value.mapValue),J.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(_=>{h=_;const T=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Ng(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new ie(D)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Dt(s,i.changes),await Ls(s.remoteStore)}catch(i){const r=Vs(i,"Failed to persist write");t.reject(r)}}async function Im(n,e){const t=E(n);try{const s=await rI(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.cc.get(r);o&&(A(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?A(o.nc):i.removedDocuments.size>0&&(A(o.nc),o.nc=!1))}),await Dt(t,s,e)}catch(s){await sn(s)}}function jh(n,e,t){const s=E(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=E(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Rl(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UI(n,e,t){const s=E(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ie(I.comparator);o=o.insert(r,z.newNoDocument(r,x.min()));const a=R().add(r),c=new ir(x.min(),new Map,new K(D),o,a);await Im(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),Fl(s)}else await ys(s.localStore,e,!1).then(()=>vs(s,e,t)).catch(sn)}async function BI(n,e){const t=E(n),s=e.batch.batchId;try{const i=await iI(t.localStore,e);Ll(t,s,null),Ml(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Dt(t,i)}catch(i){await sn(i)}}async function qI(n,e,t){const s=E(n);try{const i=await function(r,o){const a=E(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(A(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Ll(s,e,t),Ml(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Dt(s,i)}catch(i){await sn(i)}}async function $I(n,e){const t=E(n);an(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(r){const o=E(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const i=t.lc.get(s)||[];i.push(e),t.lc.set(s,i)}catch(s){const i=Vs(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ml(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function Ll(n,e,t){const s=E(n);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function vs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||Em(n,s)})}function Em(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(ki(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Fl(n))}function uc(n,e,t){for(const s of t)s instanceof _m?(n.ac.addReference(s.key,e),GI(n,s)):s instanceof vm?(v("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||Em(n,s.key)):C()}function GI(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(v("SyncEngine","New document in limbo: "+t),n.oc.add(s),Fl(n))}function Fl(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new I(V.fromString(e)),s=n.fc.next();n.cc.set(s,new OI(t)),n.uc=n.uc.insert(t,s),Wo(n.remoteStore,new Ut(je(Rs(t.path)),s,2,Ge.at))}}async function Dt(n,e,t){const s=E(n),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Tl.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=E(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>m.forEach(c,h=>m.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>m.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!rn(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,g)}}}(s.localStore,r))}async function KI(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await sm(t.localStore,e);t.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new y(p.CANCELLED,r))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dt(t,s.ji)}}function WI(n,e){const t=E(n),s=t.cc.get(e);if(s&&s.nc)return R().add(s.key);{let i=R();const r=t.rc.get(e);if(!r)return i;for(const o of r){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function jI(n,e){const t=E(n),s=await eo(t.localStore,e.query,!0),i=e.view.tc(s);return t.isPrimaryClient&&uc(t,e.targetId,i.Xu),i}async function QI(n,e){const t=E(n);return am(t.localStore,e).then(s=>Dt(t,s))}async function zI(n,e,t,s){const i=E(n),r=await function(o,a){const c=E(o),l=E(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):m.resolve(null)))}(i.localStore,e);r!==null?(t==="pending"?await Ls(i.remoteStore):t==="acknowledged"||t==="rejected"?(Ll(i,e,s||null),Ml(i,e),function(o,a){E(E(o).mutationQueue).An(a)}(i.localStore,e)):C(),await Dt(i,r)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function HI(n,e){const t=E(n);if(Vl(t),Ul(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await Qh(t,s.toArray());t.dc=!0,await lc(t.remoteStore,!0);for(const r of i)Wo(t.remoteStore,r)}else if(e===!1&&t.dc!==!1){const s=[];let i=Promise.resolve();t.rc.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):i=i.then(()=>(vs(t,o),ys(t.localStore,o,!0))),ki(t.remoteStore,o)}),await i,await Qh(t,s),function(r){const o=E(r);o.cc.forEach((a,c)=>{ki(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new ie(I.comparator)}(t),t.dc=!1,await lc(t.remoteStore,!1)}}async function Qh(n,e,t){const s=E(n),i=[],r=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await ps(s.localStore,je(c[0]));for(const l of c){const u=s.ic.get(l),h=await jI(s,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await om(s.localStore,o);a=await ps(s.localStore,l),await Ol(s,Tm(l),o,!1,a.resumeToken)}i.push(a)}return s.sc.Wo(r),i}function Tm(n){return dg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function YI(n){const e=E(n);return E(E(e.localStore).persistence).vi()}async function XI(n,e,t,s){const i=E(n);if(i.dc)return void v("SyncEngine","Ignoring unexpected query state notification.");const r=i.rc.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await am(i.localStore,gg(r[0])),a=ir.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await Dt(i,o,a);break}case"rejected":await ys(i.localStore,e,!0),vs(i,e,s);break;default:C()}}async function JI(n,e,t){const s=Vl(n);if(s.dc){for(const i of e){if(s.rc.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const r=await om(s.localStore,i),o=await ps(s.localStore,r);await Ol(s,Tm(r),o.targetId,!1,o.resumeToken),Wo(s.remoteStore,o)}for(const i of t)s.rc.has(i)&&await ys(s.localStore,i,!1).then(()=>{ki(s.remoteStore,i),vs(s,i)}).catch(sn)}}function Vl(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UI.bind(null,e),e.sc.Wo=AI.bind(null,e.eventManager),e.sc.wc=kI.bind(null,e.eventManager),e}function Ul(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qI.bind(null,e),e}function ZI(n,e,t){const s=E(n);(async function(i,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=E(h),g=Ie(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",_=>f.Ns.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(g)>=0)}(i.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(ym(a));const c=new RI(a,i.localStore,r.It);let l=await r.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await r.mc()}const u=await c.complete();return await Dt(i,u.Lu,void 0),await function(h,d){const f=E(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return hs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=or(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return nm(this.persistence,new tm,e.initialUser,this.It)}yc(e){return new em(Ko.Bs,this.It)}gc(e){return new lm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sm extends Cm{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Ul(this.Ac.syncEngine),await Ls(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return nm(this.persistence,new tm,e.initialUser,this.It)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new Gw(s,e.asyncQueue,t)}Ec(e,t){const s=new bv(t,this.persistence);return new Sv(e.asyncQueue,s)}yc(e){const t=El(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Il(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,um(),Vr(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new lm}}class eE extends Sm{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Da&&(this.sharedClientState.syncEngine={Fr:zI.bind(null,t),$r:XI.bind(null,t),Br:JI.bind(null,t),vi:YI.bind(null,t),Mr:QI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await HI(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=um();if(!Da.C(t))throw new y(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=El(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Da(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Bl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KI.bind(null,this.syncEngine),await lc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NI}createDatastore(e){const t=or(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dI(i));var i;return function(r,o,a,c){return new mI(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>jh(this.syncEngine,a,0),o=$h.C()?new $h:new lI,new yI(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new MI(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);v("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Ms(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n,e,t){if(!t)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bm(n,e,t,s){if(e===!0&&s===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zh(n){if(!I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hh(n){if(I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":C()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jo(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function xm(n,e){if(e<=0)throw new y(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;class Xh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new fv;switch(t.type){case"gapi":const s=t.client;return new yv(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Yh.get(e);t&&(v("ComponentProvider","Removing Datastore"),Yh.delete(e),t.terminate())}(this),Promise.resolve()}}function tE(n,e,t,s={}){var i;const r=(n=U(n,cr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ye.MOCK_USER;else{o=Wd(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ye(c)}n._authCredentials=new gv(new Jf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Y(this.firestore,e,this._key)}}class Me{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Me(this.firestore,e,this._query)}}class pt extends Me{constructor(e,t,s){super(e,t,Rs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Y(this.firestore,null,new I(e))}withConverter(e){return new pt(this.firestore,e,this._path)}}function Nm(n,e,...t){if(n=B(n),ql("collection","path",e),n instanceof cr){const s=V.fromString(e,...t);return Hh(s),new pt(n,null,s)}{if(!(n instanceof Y||n instanceof pt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return Hh(s),new pt(n.firestore,null,s)}}function nE(n,e){if(n=U(n,cr),ql("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Me(n,null,function(t){return new At(V.emptyPath(),t)}(e))}function io(n,e,...t){if(n=B(n),arguments.length===1&&(e=Zf.R()),ql("doc","path",e),n instanceof cr){const s=V.fromString(e,...t);return zh(s),new Y(n,null,new I(s))}{if(!(n instanceof Y||n instanceof pt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return zh(s),new Y(n.firestore,n instanceof pt?n.converter:null,new I(s))}}function Am(n,e){return n=B(n),e=B(e),(n instanceof Y||n instanceof pt)&&(e instanceof Y||e instanceof pt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function km(n,e){return n=B(n),e=B(e),n instanceof Me&&e instanceof Me&&n.firestore===e.firestore&&nr(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ae("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new we,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(s);return new DI(JSON.parse(i),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const r=E(s),o=Ni(r.It)+"/documents",a={documents:i.map(h=>xi(r.It,h))},c=await r._o("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=rw(r.It,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());A(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Os(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=I.fromPath(s);this.mutations.push(new fl(i,this.precondition(i)))}),await async function(t,s){const i=E(t),r=Ni(i.It)+"/documents",o={writes:s.map(a=>Ai(i.It,a))};await i.ao("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw C();t=x.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(x.min())?J.exists(!1):J.updateTime(t):J.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new y(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return J.updateTime(t)}return J.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class rE{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.kc=s.maxAttempts,this.xo=new Sl(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new iE(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Fc(i)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!er(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Sg(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=Zf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vs(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Dm(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await sm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Rm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $l(n);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>Gh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Gh(e.remoteStore,r)),n.onlineComponents=e}async function $l(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Dm(n,new Cm)),n.offlineComponents}async function zo(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Rm(n,new Bl)),n.onlineComponents}function Pm(n){return $l(n).then(e=>e.persistence)}function Gl(n){return $l(n).then(e=>e.localStore)}function Om(n){return zo(n).then(e=>e.remoteStore)}function Kl(n){return zo(n).then(e=>e.syncEngine)}function aE(n){return zo(n).then(e=>e.datastore)}async function ws(n){const e=await zo(n),t=e.eventManager;return t.onListen=LI.bind(null,e.syncEngine),t.onUnlisten=FI.bind(null,e.syncEngine),t}function cE(n){return n.asyncQueue.enqueue(async()=>{const e=await Pm(n),t=await Om(n);return e.setNetworkEnabled(!0),function(s){const i=E(s);return i._u.delete(0),ar(i)}(t)})}function lE(n){return n.asyncQueue.enqueue(async()=>{const e=await Pm(n),t=await Om(n);return e.setNetworkEnabled(!1),async function(s){const i=E(s);i._u.add(0),await Ms(i),i.gu.set("Offline")}(t)})}function uE(n,e){const t=new we;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await function(a,c){const l=E(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,i);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new y(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Vs(o,`Failed to get document '${i} from cache`);r.reject(a)}}(await Gl(n),e,t)),t.promise}function Mm(n,e,t={}){const s=new we;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Qo({next:h=>{r.enqueueAndForget(()=>Dl(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Pl(Rs(o.path),l,{includeMetadataChanges:!0,Nu:!0});return kl(i,u)}(await ws(n),n.asyncQueue,e,t,s)),s.promise}function hE(n,e){const t=new we;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await eo(s,i,!0),a=new wm(i,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=Vs(o,`Failed to execute query '${i} against cache`);r.reject(a)}}(await Gl(n),e,t)),t.promise}function Lm(n,e,t={}){const s=new we;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Qo({next:h=>{r.enqueueAndForget(()=>Dl(i,u)),h.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Pl(o,l,{includeMetadataChanges:!0,Nu:!0});return kl(i,u)}(await ws(n),n.asyncQueue,e,t,s)),s.promise}function dE(n,e){const t=new Qo(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){E(s).Ru.add(i),i.next()}(await ws(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){E(s).Ru.delete(i)}(await ws(n),t))}}function fE(n,e,t,s){const i=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new sE(c,l)}(function(c,l){if(c instanceof Uint8Array)return Jh(c,l);if(c instanceof ArrayBuffer)return Jh(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,or(e));n.asyncQueue.enqueueAndForget(async()=>{ZI(await Kl(n),i,s)})}function gE(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const i=E(t);return i.persistence.runTransaction("Get named query","readonly",r=>i.Ns.getNamedQuery(r,s))}(await Gl(n),e))}class mE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Sl(this,"async_queue_retry"),this.Wc=()=>{const t=Vr();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Vr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=Vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new we;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!rn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ae("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=Al.createAndSchedule(this,e,t,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&C()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function hc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class pE{constructor(){this._progressObserver={},this._taskCompletionResolver=new we,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=-1;class re extends cr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new mE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fm(this),this._firestoreClient.terminate()}}function Se(n){return n._firestoreClient||Fm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Fm(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new Av(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new oE(n._authCredentials,n._appCheckCredentials,n._queue,s)}function _E(n,e){Um(n=U(n,re));const t=Se(n),s=n._freezeSettings(),i=new Bl;return Vm(t,i,new Sm(i,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function vE(n){Um(n=U(n,re));const e=Se(n),t=n._freezeSettings(),s=new Bl;return Vm(e,s,new eE(s,t.cacheSizeBytes))}function Vm(n,e,t){const s=new we;return n.asyncQueue.enqueue(async()=>{try{await Dm(n,t),await Rm(n,e),s.resolve()}catch(i){const r=i;if(!function(o){return o.name==="FirebaseError"?o.code===p.FAILED_PRECONDITION||o.code===p.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;hs("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function wE(n){if(n._initialized&&!n._terminated)throw new y(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new we;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!ct.C())return Promise.resolve();const s=t+"main";await ct.delete(s)}(El(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function IE(n){return function(e){const t=new we;return e.asyncQueue.enqueueAndForget(async()=>$I(await Kl(e),t)),t.promise}(Se(n=U(n,re)))}function EE(n){return cE(Se(n=U(n,re)))}function TE(n){return lE(Se(n=U(n,re)))}function CE(n,e){const t=Se(n=U(n,re)),s=new pE;return fE(t,n._databaseId,e,s),s}function SE(n,e){return gE(Se(n=U(n,re)),e).then(t=>t?new Me(n,null,t.query):null)}function Um(n){if(n._initialized||n._terminated)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vt(de.fromBase64String(e))}catch(t){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vt(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=/^__.*__$/;class xE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ps(e,this.data,t,this.fieldTransforms)}}class Bm{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Yo{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ro(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(qm(this.sa)&&bE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class NE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=s||or(e)}da(e,t,s,i=!1){return new Yo({sa:e,methodName:t,fa:s,path:ce.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Wn(n){const e=n._freezeSettings(),t=or(n._databaseId);return new NE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xo(n,e,t,s,i,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,i);zl("Data must be an object, but it was:",o,s);const a=Km(s,o);let c,l;if(r.merge)c=new Ye(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=dc(e,h,t);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jm(u,d)||u.push(d)}c=new Ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new xE(new Ne(a),c,l)}class lr extends Kn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lr}}function $m(n,e,t){return new Yo({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Wl extends Kn{_toFieldTransform(e){return new sr(e.path,new gs)}isEqual(e){return e instanceof Wl}}class AE extends Kn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=$m(this,e,!0),s=this._a.map(r=>jn(r,t)),i=new Rn(s);return new sr(e.path,i)}isEqual(e){return this===e}}class kE extends Kn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=$m(this,e,!0),s=this._a.map(r=>jn(r,t)),i=new Pn(s);return new sr(e.path,i)}isEqual(e){return this===e}}class DE extends Kn{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new ms(e.It,_g(e.It,this.wa));return new sr(e.path,t)}isEqual(e){return this===e}}function jl(n,e,t,s){const i=n.da(1,e,t);zl("Data must be an object, but it was:",i,s);const r=[],o=Ne.empty();Gn(s,(c,l)=>{const u=Hl(e,c,t);l=B(l);const h=i.ca(u);if(l instanceof lr)r.push(u);else{const d=jn(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ye(r);return new Bm(o,a,i.fieldTransforms)}function Ql(n,e,t,s,i,r){const o=n.da(1,e,t),a=[dc(e,s,t)],c=[i];if(r.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(dc(e,r[d])),c.push(r[d+1]);const l=[],u=Ne.empty();for(let d=a.length-1;d>=0;--d)if(!jm(l,a[d])){const f=a[d];let g=c[d];g=B(g);const _=o.ca(f);if(g instanceof lr)l.push(f);else{const T=jn(g,_);T!=null&&(l.push(f),u.set(f,T))}}const h=new Ye(l);return new Bm(u,h,o.fieldTransforms)}function Gm(n,e,t,s=!1){return jn(t,n.da(s?4:3,e))}function jn(n,e){if(Wm(n=B(n)))return zl("Unsupported field value:",e,n),Km(n,e);if(n instanceof Kn)return function(t,s){if(!qm(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=jn(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=B(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return _g(s.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=ee.fromDate(t);return{timestampValue:bi(s.It,i)}}if(t instanceof ee){const i=new ee(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:bi(s.It,i)}}if(t instanceof Ho)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof vt)return{bytesValue:Rg(s.It,t._byteString)};if(t instanceof Y){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gl(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${jo(t)}`)}(n,e)}function Km(n,e){const t={};return og(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(s,i)=>{const r=jn(i,e.ra(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function Wm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Ho||n instanceof vt||n instanceof Y||n instanceof Kn)}function zl(n,e,t){if(!Wm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=jo(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function dc(n,e,t){if((e=B(e))instanceof Ht)return e._internalPath;if(typeof e=="string")return Hl(n,e);throw ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const RE=new RegExp("[~\\*/\\[\\]]");function Hl(n,e,t){if(e.search(RE)>=0)throw ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ht(...e.split("."))._internalPath}catch{throw ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ro(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new y(p.INVALID_ARGUMENT,a+n+c)}function jm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PE extends Di{data(){return super.data()}}function Jo(n,e){return typeof e=="string"?Hl(n,e):e instanceof Ht?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ur{}function Pt(n,...e){for(const t of e)n=t._apply(n);return n}class OE extends ur{constructor(e,t,s){super(),this.ma=e,this.ga=t,this.ya=s,this.type="where"}_apply(e){const t=Wn(e.firestore),s=function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ed(u,l);const f=[];for(const g of u)f.push(Zh(a,i,g));h={arrayValue:{values:f}}}else h=Zh(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ed(u,l),h=Gm(o,r,u,l==="in"||l==="not-in");const d=Ae.create(c,l,h);return function(f,g){if(g.dt()){const T=ul(f);if(T!==null&&!T.isEqual(g.field))throw new y(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${g.field.toString()}'`);const L=ll(f);L!==null&&Jm(f,g.field,L)}const _=function(T,L){for(const G of T.filters)if(L.indexOf(G.op)>=0)return G.op;return null}(f,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(_!==null)throw _===g.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${_.toString()}' filters.`)}(i,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Me(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new At(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function ME(n,e,t){const s=e,i=Jo("where",n);return new OE(i,s,t)}class LE extends ur{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new rs(i,r);return function(a,c){if(ll(a)===null){const l=ul(a);l!==null&&Jm(a,l,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new Me(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new At(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function FE(n,e="asc"){const t=e,s=Jo("orderBy",n);return new LE(s,t)}class zm extends ur{constructor(e,t,s){super(),this.type=e,this.Ia=t,this.Ta=s}_apply(e){return new Me(e.firestore,e.converter,Xr(e._query,this.Ia,this.Ta))}}function VE(n){return xm("limit",n),new zm("limit",n,"F")}function UE(n){return xm("limitToLast",n),new zm("limitToLast",n,"L")}class Hm extends ur{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Xm(e,this.type,this.Ea,this.Aa);return new Me(e.firestore,e.converter,function(s,i){return new At(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function BE(...n){return new Hm("startAt",n,!0)}function qE(...n){return new Hm("startAfter",n,!1)}class Ym extends ur{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Xm(e,this.type,this.Ea,this.Aa);return new Me(e.firestore,e.converter,function(s,i){return new At(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function $E(...n){return new Ym("endBefore",n,!1)}function GE(...n){return new Ym("endAt",n,!0)}function Xm(n,e,t,s){if(t[0]=B(t[0]),t[0]instanceof Di)return function(i,r,o,a,c){if(!a)throw new y(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of fs(i))if(u.field.isKeyField())l.push(kn(r,a.key));else{const h=a.data.field(u.field);if(cl(h))throw new y(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new y(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Qt(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=Wn(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new y(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new y(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!hl(r)&&g.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const _=r.path.child(V.fromString(g));if(!I.isDocumentKey(_))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const T=new I(_);d.push(kn(o,T))}else{const _=Gm(a,c,g);d.push(_)}}return new Qt(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function Zh(n,e,t){if(typeof(t=B(t))=="string"){if(t==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hl(e)&&t.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(V.fromString(t));if(!I.isDocumentKey(s))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kn(n,new I(s))}if(t instanceof Y)return kn(n,t._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jo(t)}.`)}function ed(n,e){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Jm(n,e,t){if(!t.isEqual(e))throw new y(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{convertValue(e,t="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw C()}}convertObject(e,t){const s={};return Gn(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Ho(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ag(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=V.fromString(e);A(qg(s));const i=new Wt(s.get(1),s.get(3)),r=new I(s.popFirst(5));return i.isEqual(t)||ae(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class KE extends Yl{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xt extends Di{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Jo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class hi extends xt{data(e={}){return super.data(e)}}class Yt{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new hi(this._firestore,this._userDataWriter,s.key,s,new wn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new hi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:WE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function WE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}function Zm(n,e){return n instanceof xt&&e instanceof xt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Yt&&e instanceof Yt&&n._firestore===e._firestore&&km(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){n=U(n,Y);const e=U(n.firestore,re);return Mm(Se(e),n._key).then(t=>Xl(e,n,t))}class Qn extends Yl{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}function QE(n){n=U(n,Y);const e=U(n.firestore,re),t=Se(e),s=new Qn(e);return uE(t,n._key).then(i=>new xt(e,s,n._key,i,new wn(i!==null&&i.hasLocalMutations,!0),n.converter))}function zE(n){n=U(n,Y);const e=U(n.firestore,re);return Mm(Se(e),n._key,{source:"server"}).then(t=>Xl(e,n,t))}function HE(n){n=U(n,Me);const e=U(n.firestore,re),t=Se(e),s=new Qn(e);return Qm(n._query),Lm(t,n._query).then(i=>new Yt(e,s,n,i))}function YE(n){n=U(n,Me);const e=U(n.firestore,re),t=Se(e),s=new Qn(e);return hE(t,n._query).then(i=>new Yt(e,s,n,i))}function XE(n){n=U(n,Me);const e=U(n.firestore,re),t=Se(e),s=new Qn(e);return Lm(t,n._query,{source:"server"}).then(i=>new Yt(e,s,n,i))}function td(n,e,t){n=U(n,Y);const s=U(n.firestore,re),i=Zo(n.converter,e,t);return hr(s,[Xo(Wn(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,J.none())])}function nd(n,e,t,...s){n=U(n,Y);const i=U(n.firestore,re),r=Wn(i);let o;return o=typeof(e=B(e))=="string"||e instanceof Ht?Ql(r,"updateDoc",n._key,e,t,s):jl(r,"updateDoc",n._key,e),hr(i,[o.toMutation(n._key,J.exists(!0))])}function JE(n){return hr(U(n.firestore,re),[new Os(n._key,J.none())])}function ZE(n,e){const t=U(n.firestore,re),s=io(n),i=Zo(n.converter,e);return hr(t,[Xo(Wn(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,J.exists(!1))]).then(()=>s)}function ep(n,...e){var t,s,i;n=B(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(hc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof Y)l=U(n.firestore,re),u=Rs(n._key.path),c={next:h=>{e[o]&&e[o](Xl(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,Me);l=U(h.firestore,re),u=h._query;const d=new Qn(l);c={next:f=>{e[o]&&e[o](new Yt(l,d,h,f))},error:e[o+1],complete:e[o+2]},Qm(n._query)}return function(h,d,f,g){const _=new Qo(g),T=new Pl(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>kl(await ws(h),T)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>Dl(await ws(h),T))}}(Se(l),u,a,c)}function eT(n,e){return dE(Se(n=U(n,re)),hc(e)?e:{next:e})}function hr(n,e){return function(t,s){const i=new we;return t.asyncQueue.enqueueAndForget(async()=>VI(await Kl(t),s,i)),i.promise}(Se(n),e)}function Xl(n,e,t){const s=t.docs.get(e._key),i=new Qn(n);return new xt(n,i,e._key,s,new wn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const tT={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wn(e)}set(e,t,s){this._verifyNotCommitted();const i=Mt(e,this._firestore),r=Zo(i.converter,t,s),o=Xo(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,J.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=Mt(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof Ht?Ql(this._dataReader,"WriteBatch.update",r._key,t,s,i):jl(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,J.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mt(e,this._firestore);return this._mutations=this._mutations.concat(new Os(t._key,J.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mt(n,e){if((n=B(n)).firestore!==e)throw new y(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sT extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Wn(e)}get(e){const t=Mt(e,this._firestore),s=new KE(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return C();const r=i[0];if(r.isFoundDocument())return new Di(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new Di(this._firestore,s,t._key,null,t.converter);throw C()})}set(e,t,s){const i=Mt(e,this._firestore),r=Zo(i.converter,t,s),o=Xo(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=Mt(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof Ht?Ql(this._dataReader,"Transaction.update",r._key,t,s,i):jl(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Mt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Mt(e,this._firestore),s=new Qn(this._firestore);return super.get(e).then(i=>new xt(this._firestore,s,t._key,i._document,new wn(!1,!1),t.converter))}}function iT(n,e,t){n=U(n,re);const s=Object.assign(Object.assign({},tT),t);return function(i){if(i.maxAttempts<1)throw new y(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new we;return i.asyncQueue.enqueueAndForget(async()=>{const c=await aE(i);new rE(i.asyncQueue,c,o,r,a).run()}),a.promise}(Se(n),i=>e(new sT(n,i)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){return new lr("deleteField")}function oT(){return new Wl("serverTimestamp")}function aT(...n){return new AE("arrayUnion",n)}function cT(...n){return new kE("arrayRemove",n)}function lT(n){return new DE("increment",n)}(function(n,e=!0){(function(t){Ds=t})(Mc),Lc(new Ns("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new re(new mv(t.getProvider("auth-internal")),new vv(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Sn(Zu,"3.7.3",n),Sn(Zu,"3.7.3","esm2017")})();const uT="@firebase/firestore-compat",hT="0.2.3";/**
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
 */function Jl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function id(){if(!xv())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ri{constructor(e){this._delegate=e}static fromBase64String(e){return id(),new Ri(vt.fromBase64String(e))}static fromUint8Array(e){return sd(),new Ri(vt.fromUint8Array(e))}toBase64(){return id(),this._delegate.toBase64()}toUint8Array(){return sd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){return dT(n,["next","error","complete"])}function dT(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{enableIndexedDbPersistence(e,t){return _E(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return vE(e._delegate)}clearIndexedDbPersistence(e){return wE(e._delegate)}}class tp{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&hs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){tE(this._delegate,e,t,s)}enableNetwork(){return EE(this._delegate)}disableNetwork(){return TE(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,bm("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return IE(this._delegate)}onSnapshotsInSync(e){return eT(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Is(this,Nm(this._delegate,e))}catch(t){throw Fe(t,"collection()","Firestore.collection()")}}doc(e){try{return new nt(this,io(this._delegate,e))}catch(t){throw Fe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Le(this,nE(this._delegate,e))}catch(t){throw Fe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return iT(this._delegate,t=>e(new np(this,t)))}batch(){return Se(this._delegate),new sp(new nT(this._delegate,e=>hr(this._delegate,e)))}loadBundle(e){return CE(this._delegate,e)}namedQuery(e){return SE(this._delegate,e).then(t=>t?new Le(this,t):null)}}class ea extends Yl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(new vt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return nt.forKey(t,this.firestore,null)}}function gT(n){hv(n)}class np{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ea(e)}get(e){const t=In(e);return this._delegate.get(t).then(s=>new Pi(this._firestore,new xt(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const i=In(e);return s?(Jl("Transaction.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=In(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}}class sp{constructor(e){this._delegate=e}set(e,t,s){const i=In(e);return s?(Jl("WriteBatch.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=In(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Fn{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new hi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Oi(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=Fn.INSTANCES;let i=s.get(e);i||(i=new WeakMap,s.set(e,i));let r=i.get(t);return r||(r=new Fn(e,new ea(e),t),i.set(t,r)),r}}Fn.INSTANCES=new WeakMap;class nt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ea(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nt(t,new Y(t._delegate,s,new I(e)))}static forKey(e,t,s){return new nt(t,new Y(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Is(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Is(this.firestore,Nm(this._delegate,e))}catch(t){throw Fe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof Y?Am(this._delegate,e):!1}set(e,t){t=Jl("DocumentReference.set",t);try{return t?td(this._delegate,e,t):td(this._delegate,e)}catch(s){throw Fe(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?nd(this._delegate,e):nd(this._delegate,e,t,...s)}catch(i){throw Fe(i,"updateDoc()","DocumentReference.update()")}}delete(){return JE(this._delegate)}onSnapshot(...e){const t=ip(e),s=rp(e,i=>new Pi(this.firestore,new xt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ep(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=QE(this._delegate):(e==null?void 0:e.source)==="server"?t=zE(this._delegate):t=jE(this._delegate),t.then(s=>new Pi(this.firestore,new xt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new nt(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fe(n,e,t){return n.message=n.message.replace(e,t),n}function ip(n){for(const e of n)if(typeof e=="object"&&!fc(e))return e;return{}}function rp(n,e){var t,s;let i;return fc(n[0])?i=n[0]:fc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:r=>{i.next&&i.next(e(r))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(s=i.complete)===null||s===void 0?void 0:s.bind(i)}}class Pi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new nt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Zm(this._delegate,e._delegate)}}class Oi extends Pi{data(e){const t=this._delegate.data(e);return dv(t!==void 0),t}}class Le{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ea(e)}where(e,t,s){try{return new Le(this.firestore,Pt(this._delegate,ME(e,t,s)))}catch(i){throw Fe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Le(this.firestore,Pt(this._delegate,FE(e,t)))}catch(s){throw Fe(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Le(this.firestore,Pt(this._delegate,VE(e)))}catch(t){throw Fe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Le(this.firestore,Pt(this._delegate,UE(e)))}catch(t){throw Fe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Le(this.firestore,Pt(this._delegate,BE(...e)))}catch(t){throw Fe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Le(this.firestore,Pt(this._delegate,qE(...e)))}catch(t){throw Fe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Le(this.firestore,Pt(this._delegate,$E(...e)))}catch(t){throw Fe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Le(this.firestore,Pt(this._delegate,GE(...e)))}catch(t){throw Fe(t,"endAt()","Query.endAt()")}}isEqual(e){return km(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=YE(this._delegate):(e==null?void 0:e.source)==="server"?t=XE(this._delegate):t=HE(this._delegate),t.then(s=>new gc(this.firestore,new Yt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=ip(e),s=rp(e,i=>new gc(this.firestore,new Yt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ep(this._delegate,t,s)}withConverter(e){return new Le(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class mT{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Oi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class gc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Le(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Oi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new mT(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new Oi(this._firestore,s))})}isEqual(e){return Zm(this._delegate,e._delegate)}}class Is extends Le{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nt(this.firestore,e):null}doc(e){try{return e===void 0?new nt(this.firestore,io(this._delegate)):new nt(this.firestore,io(this._delegate,e))}catch(t){throw Fe(t,"doc()","CollectionReference.doc()")}}add(e){return ZE(this._delegate,e).then(t=>new nt(this.firestore,t))}isEqual(e){return Am(this._delegate,e._delegate)}withConverter(e){return new Is(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function In(n){return U(n,Y)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){this._delegate=new Ht(...e)}static documentId(){return new Zl(ce.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof Ht?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._delegate=e}static serverTimestamp(){const e=oT();return e._methodName="FieldValue.serverTimestamp",new yn(e)}static delete(){const e=rT();return e._methodName="FieldValue.delete",new yn(e)}static arrayUnion(...e){const t=aT(...e);return t._methodName="FieldValue.arrayUnion",new yn(t)}static arrayRemove(...e){const t=cT(...e);return t._methodName="FieldValue.arrayRemove",new yn(t)}static increment(e){const t=lT(e);return t._methodName="FieldValue.increment",new yn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const pT={Firestore:tp,GeoPoint:Ho,Timestamp:ee,Blob:Ri,Transaction:np,WriteBatch:sp,DocumentReference:nt,DocumentSnapshot:Pi,Query:Le,QueryDocumentSnapshot:Oi,QuerySnapshot:gc,CollectionReference:Is,FieldPath:Zl,FieldValue:yn,setLogLevel:gT,CACHE_SIZE_UNLIMITED:yE};function yT(n,e){n.INTERNAL.registerComponent(new Ns("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(s,i)},"PUBLIC").setServiceProps(Object.assign({},pT)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(n){yT(n,(e,t)=>new tp(e,t,new fT)),n.registerVersion(uT,hT)}_T(ls);const rd="@firebase/database",od="0.13.10";/**
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
 */let op="";function ap(n){op=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Fc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Xe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vT(e)}}catch{}return new wT},En=cp("localStorage"),mc=cp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Io("@firebase/database"),lp=function(){let n=1;return function(){return n++}}(),up=function(n){const e=By(n),t=new qy;t.update(e);const s=t.digest();return $y.encodeByteArray(s)},dr=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=dr.apply(null,s):typeof s=="object"?e+=he(s):e+=s,e+=" "}return e};let Cn=null,ad=!0;const hp=function(n,e){w(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(as.logLevel=bn.VERBOSE,Cn=as.log.bind(as),e&&mc.set("logging_enabled",!0)):typeof n=="function"?Cn=n:(Cn=null,mc.remove("logging_enabled"))},ve=function(...n){if(ad===!0&&(ad=!1,Cn===null&&mc.get("logging_enabled")===!0&&hp(!0)),Cn){const e=dr.apply(null,n);Cn(e)}},fr=function(n){return function(...e){ve(n,...e)}},pc=function(...n){const e="FIREBASE INTERNAL ERROR: "+dr(...n);as.error(e)},wt=function(...n){const e=`FIREBASE FATAL ERROR: ${dr(...n)}`;throw as.error(e),new Error(e)},Oe=function(...n){const e="FIREBASE WARNING: "+dr(...n);as.warn(e)},IT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ta=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ET=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Nt="[MIN_NAME]",It="[MAX_NAME]",zn=function(n,e){if(n===e)return 0;if(n===Nt||e===It)return-1;if(e===Nt||n===It)return 1;{const t=oo(n),s=oo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},TT=function(n,e){return n===e?0:n<e?-1:1},Xs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+he(e))},eu=function(n){if(typeof n!="object"||n===null)return he(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=he(e[s]),t+=":",t+=eu(n[e[s]]);return t+="}",t},dp=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const fp=function(n){w(!ta(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},CT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ST=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const xT=new RegExp("^-?(0*)\\d{1,10}$"),gp=-2147483648,tu=2147483647,oo=function(n){if(xT.test(n)){const e=Number(n);if(e>=gp&&e<=tu)return e}return null},Us=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},NT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},di=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class AT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="5",mp="v",pp="s",yp="r",_p="f",vp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wp="ls",Ip="p",yc="ac",Ep="websocket",Tp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,s,i,r=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function DT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sp(n,e,t){w(typeof e=="string","typeof type must == string"),w(typeof t=="object","typeof params must == object");let s;if(e===Ep)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Tp)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DT(n)&&(t.ns=n.namespace);const i=[];return Te(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(){this.counters_={}}incrementCounter(e,t=1){Xe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={},Pa={};function su(n){const e=n.toString();return Ra[e]||(Ra[e]=new RT),Ra[e]}function PT(n,e){const t=n.toString();return Pa[t]||(Pa[t]=e()),Pa[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Us(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="start",MT="close",LT="pLPCommand",FT="pRTLPCB",bp="id",xp="pw",Np="ser",VT="cb",UT="seg",BT="ts",qT="d",$T="dframe",Ap=1870,kp=30,GT=Ap-kp,KT=25e3,WT=3e4;class Ft{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fr(e),this.stats_=su(t),this.urlFn=c=>(this.appCheckToken&&(c[yc]=this.appCheckToken),Sp(t,Tp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new OT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WT)),ET(()=>{if(this.isClosed_)return;this.scriptTagHolder=new iu((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cd)this.id=a,this.password=c;else if(o===MT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[cd]="t",s[Np]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[VT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mp]=nu,this.transportSessionId&&(s[pp]=this.transportSessionId),this.lastSessionId&&(s[wp]=this.lastSessionId),this.applicationId&&(s[Ip]=this.applicationId),this.appCheckToken&&(s[yc]=this.appCheckToken),typeof location<"u"&&location.hostname&&vp.test(location.hostname)&&(s[yp]=_p);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ft.forceAllow_=!0}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){return Ft.forceAllow_?!0:!Ft.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CT()&&!ST()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=he(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=zy(t),i=dp(s,GT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[$T]="t",s[bp]=e,s[xp]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=he(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class iu{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lp(),window[LT+this.uniqueCallbackIdentifier]=e,window[FT+this.uniqueCallbackIdentifier]=t,this.myIFrame=iu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ve("frame writing exception"),a.stack&&ve(a.stack),ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bp]=this.myID,e[xp]=this.myPW,e[Np]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kp+s.length<=Ap;){const o=this.pendingSegs.shift();s=s+"&"+UT+i+"="+o.seg+"&"+BT+i+"="+o.ts+"&"+qT+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(KT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=16384,QT=45e3;let ao=null;typeof MozWebSocket<"u"?ao=MozWebSocket:typeof WebSocket<"u"&&(ao=WebSocket);class tt{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fr(this.connId),this.stats_=su(t),this.connURL=tt.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[mp]=nu,typeof location<"u"&&location.hostname&&vp.test(location.hostname)&&(o[yp]=_p),t&&(o[pp]=t),s&&(o[wp]=s),i&&(o[yc]=i),r&&(o[Ip]=r),Sp(e,Ep,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let s;jd(),this.mySock=new ao(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ao!==null&&!tt.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Fc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=he(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=dp(t,jT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ft,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=tt&&tt.isAvailable();let s=t&&!tt.previouslyFailed();if(e.webSocketOnly&&(t||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=6e4,HT=5e3,YT=10*1024,XT=100*1024,Oa="t",ld="d",JT="s",ud="r",ZT="e",hd="o",dd="a",fd="n",gd="p",eC="h";class tC{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fr("c:"+this.id+":"),this.transportManager_=new Es(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oa in e){const t=e[Oa];t===dd?this.upgradeIfSecondaryHealthy_():t===ud?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===hd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Xs("t",e),s=Xs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Xs("t",e),s=Xs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Xs(Oa,e);if(ld in e){const s=e[ld];if(t===eC)this.onHandshake_(s);else if(t===fd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===JT?this.onConnectionShutdown_(s):t===ud?this.onReset_(s):t===ZT?pc("Server Error: "+s):t===hd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),nu!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Rp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new co}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=32,pd=768;class ${constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function q(){return new $("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xt(n){return n.pieces_.length-n.pieceNum_}function j(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new $(n.pieces_,e)}function ru(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new $(e,0)}function Z(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof $)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new $(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function Ue(n,e){const t=P(n),s=P(e);if(t===null)return e;if(t===s)return Ue(j(n),j(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function sC(n,e){const t=Mi(n,0),s=Mi(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=zn(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ou(n,e){if(Xt(n)!==Xt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function st(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Xt(n)>Xt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class iC{constructor(e,t){this.errorPrefix_=t,this.parts_=Mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Eo(this.parts_[s]);Op(this)}}function rC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Eo(e),Op(n)}function oC(n){const e=n.parts_.pop();n.byteLength_-=Eo(e),n.parts_.length>0&&(n.byteLength_-=1)}function Op(n){if(n.byteLength_>pd)throw new Error(n.errorPrefix_+"has a key path longer than "+pd+" bytes ("+n.byteLength_+").");if(n.parts_.length>md)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+md+") or object contains a cycle "+dn(n))}function dn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Rp{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new au}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=1e3,aC=60*5*1e3,yd=30*1e3,cC=1.3,lC=3e4,uC="server_kill",_d=3;class St extends Dp{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=St.nextPersistentConnectionId_++,this.log_=fr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=aC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!jd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");au.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&co.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(he(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ze,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;St.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Xe(e,"w")){const s=xn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ky(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):pc("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lC&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new tC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Oe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(uC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),c())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$a(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>eu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new $(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ve("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_d&&(this.reconnectDelay_=yd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ve("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_d&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+op.replace(/\./g,"-")]=1,Qd()?e["framework.cordova"]=1:Wy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=co.getInstance().currentlyOnline();return $a(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new M(Nt,e),i=new M(Nt,t);return this.compare(s,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;class Mp extends na{static get __EMPTY_NODE(){return Dr}static set __EMPTY_NODE(e){Dr=e}compare(e,t){return zn(e.name,t.name)}isDefinedOn(e){throw Ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(It,Dr)}makePost(e,t){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Dr)}toString(){return".key"}}const yt=new Mp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:_e.RED,this.left=i!=null?i:We.EMPTY_NODE,this.right=r!=null?r:We.EMPTY_NODE}copy(e,t,s,i,r){return new _e(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class hC{copy(e,t,s,i,r){return this}insert(e,t,s){return new _e(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,t=We.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new We(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rr(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new hC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n,e){return zn(n.name,e.name)}function cu(n,e){return zn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;function fC(n){_c=n}const Lp=function(n){return typeof n=="number"?"number:"+fp(n):"string:"+n},Fp=function(n){if(n.isLeafNode()){const e=n.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xe(e,".sv"),"Priority must be a string or number.")}else w(n===_c||n.isEmpty(),"priority of unexpected type.");w(n===_c||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd;class ge{constructor(e,t=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fp(this.priorityNode_)}static set __childrenNodeConstructor(e){vd=e}static get __childrenNodeConstructor(){return vd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:P(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=P(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(j(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=fp(this.value_):e+=this.value_,this.lazyHash_=up(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(t),r=ge.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+t),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vp,Up;function gC(n){Vp=n}function mC(n){Up=n}class pC extends na{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?zn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(It,new ge("[PRIORITY-POST]",Up))}makePost(e,t){const s=Vp(e);return new M(t,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const H=new pC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=Math.log(2);class _C{constructor(e){const t=r=>parseInt(Math.log(r)/yC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lo=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new _e(d,h.node,_e.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=i(c,f),_=i(f+1,l);return h=n[f],d=t?t(h):h,new _e(d,h.node,_e.BLACK,g,_)}},r=function(c){let l=null,u=null,h=n.length;const d=function(g,_){const T=h-g,L=h;h-=g;const G=i(T+1,L),W=n[T],fe=t?t(W):W;f(new _e(fe,W.node,_,null,G))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),T=Math.pow(2,c.count-(g+1));_?d(T,_e.BLACK):(d(T,_e.BLACK),d(T,_e.RED))}return u},o=new _C(n.length),a=r(o);return new We(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;const es={};class Ct{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return w(es&&H,"ChildrenNode.ts has not been loaded"),Ma=Ma||new Ct({".priority":es},{".priority":H}),Ma}get(e){const t=xn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof We?t:null}hasIndex(e){return Xe(this.indexSet_,e.toString())}addIndex(e,t){w(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=lo(s,e.getCompare()):a=es;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ct(u,l)}addToIndexes(e,t){const s=Ur(this.indexes_,(i,r)=>{const o=xn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===es)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(M.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),lo(a,o.getCompare())}else return es;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new M(e.name,a))),c.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ur(this.indexes_,i=>{if(i===es)return i;{const r=t.get(e.name);return r?i.remove(new M(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class b{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fp(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zs||(Zs=new b(new We(cu),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Zs:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(j(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new M(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zs:this.priorityNode_;return new b(i,o,r)}}updateChild(e,t){const s=P(e);if(s===null)return t;{w(P(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(j(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),s++,r&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lp(this.getPriority().val())+":"),this.forEachChild(H,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":up(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gr?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(H),i=t.getIterator(H);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vC extends b{constructor(){super(new We(cu),b.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const gr=new vC;Object.defineProperties(M,{MIN:{value:new M(Nt,b.EMPTY_NODE)},MAX:{value:new M(It,gr)}});Mp.__EMPTY_NODE=b.EMPTY_NODE;ge.__childrenNodeConstructor=b;fC(gr);mC(gr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=!0;function te(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ge(t,te(e))}if(!(n instanceof Array)&&wC){const t=[];let s=!1;if(Te(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=te(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new M(o,c)))}}),t.length===0)return b.EMPTY_NODE;const r=lo(t,dC,o=>o.name,cu);if(s){const o=lo(t,H.getCompare());return new b(r,te(e),new Ct({".priority":o},{".priority":H}))}else return new b(r,te(e),Ct.Default)}else{let t=b.EMPTY_NODE;return Te(n,(s,i)=>{if(Xe(n,s)&&s.substring(0,1)!=="."){const r=te(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(te(e))}}gC(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends na{constructor(e){super(),this.indexPath_=e,w(!O(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?zn(e.name,t.name):r}makePost(e,t){const s=te(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,s);return new M(t,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,gr);return new M(It,e)}toString(){return Mi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends na{compare(e,t){const s=e.node.compareTo(t.node);return s===0?zn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const s=te(e);return new M(t,s)}toString(){return".value"}}const uu=new IC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vc="-",Bp="z",qp=786,EC=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ts.charAt(t%64),t=Math.floor(t/64);w(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ts.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}(),wd=function(n){if(n===""+tu)return vc;const e=oo(n);if(e!=null)return""+(e+1);const t=new Array(n.length);for(let o=0;o<t.length;o++)t[o]=n.charAt(o);if(t.length<qp)return t.push(vc),t.join("");let s=t.length-1;for(;s>=0&&t[s]===Bp;)s--;if(s===-1)return It;const i=t[s],r=Ts.charAt(Ts.indexOf(i)+1);return t[s]=r,t.slice(0,s+1).join("")},Id=function(n){if(n===""+gp)return Nt;const e=oo(n);if(e!=null)return""+(e-1);const t=new Array(n.length);for(let s=0;s<t.length;s++)t[s]=n.charAt(s);return t[t.length-1]===vc?t.length===1?""+tu:(delete t[t.length-1],t.join("")):(t[t.length-1]=Ts.charAt(Ts.indexOf(t[t.length-1])-1),t.join("")+Bp.repeat(qp-t.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){return{type:"value",snapshotNode:n}}function Cs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Li(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function TC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Li(t,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(t,s)):o.trackChildChange(Fi(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(H,(i,r)=>{t.hasChild(i)||s.trackChildChange(Li(i,r))}),t.isLeafNode()||t.forEachChild(H,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fi(i,r,o))}else s.trackChildChange(Cs(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.indexedFilter_=new hu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vi.getStartPost_(e),this.endPost_=Vi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,s,i,r,o){return this.matches(new M(t,s))||(s=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=b.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new M(o,a))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.rangedFilter_=new Vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new M(t,s))||(s=b.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=t.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let r,o,a,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(r,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:i=i.updateImmediateChild(h.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new M(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Fi(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Li(t,h));const _=a.updateImmediateChild(t,b.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cs(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Li(l.name,l.node)),r.trackChildChange(Cs(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nt}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:It}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SC(n){return n.loadsAllData()?new hu(n.getIndex()):n.hasLimit()?new CC(n):new Vi(n)}function bC(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function xC(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function wc(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function NC(n,e,t){let s;if(n.index_===yt)typeof e=="string"&&(e=wd(e)),s=wc(n,e,t);else{let i;t==null?i=It:i=wd(t),s=wc(n,e,i)}return s.startAfterSet_=!0,s}function Ic(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function AC(n,e,t){let s,i;return n.index_===yt?(typeof e=="string"&&(e=Id(e)),i=Ic(n,e,t)):(t==null?s=Nt:s=Id(t),i=Ic(n,e,s)),i.endBeforeSet_=!0,i}function ia(n,e){const t=n.copy();return t.index_=e,t}function Ed(n){const e={};if(n.isDefault())return e;let t;return n.index_===H?t="$priority":n.index_===uu?t="$value":n.index_===yt?t="$key":(w(n.index_ instanceof lu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=he(t),n.startSet_&&(e.startAt=he(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+he(n.indexStartName_))),n.endSet_&&(e.endAt=he(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+he(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Td(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Dp{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=uo.getListenId_(e,s),a={};this.listens_[o]=a;const c=Ed(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),xn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=uo.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ed(e._queryParams),s=e._path.toString(),i=new ze;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jy(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Fc(a.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){return{value:null,children:new Map}}function Bs(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=P(e);n.children.has(s)||n.children.set(s,ho());const i=n.children.get(s);e=j(e),Bs(i,e,t)}}function Ec(n,e){if(O(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(H,(s,i)=>{Bs(n,new $(s),i)}),Ec(n,e)}}else if(n.children.size>0){const t=P(e);return e=j(e),n.children.has(t)&&Ec(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Tc(n,e,t){n.value!==null?t(e,n.value):DC(n,(s,i)=>{const r=new $(e.toString()+"/"+s);Tc(i,r,t)})}function DC(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=10*1e3,PC=30*1e3,OC=5*60*1e3;class MC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new RC(e);const s=Cd+(PC-Cd)*Math.random();di(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Te(e,(i,r)=>{r>0&&Xe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),di(this.reportStats_.bind(this),Math.floor(Math.random()*2*OC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function du(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gu(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=lt.ACK_USER_WRITE,this.source=du()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $(e));return new fo(q(),t,this.revert)}}else return w(P(this.path)===e,"operationForChild called for unrelated child."),new fo(j(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.source=e,this.path=t,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new Ui(this.source,q()):new Ui(this.source,j(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=lt.OVERWRITE}operationForChild(e){return O(this.path)?new Vn(this.source,q(),this.snap.getImmediateChild(e)):new Vn(this.source,j(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=lt.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new $(e));return t.isEmpty()?null:t.value?new Vn(this.source,q(),t.value):new Ss(this.source,q(),t)}else return w(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ss(this.source,j(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FC(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(TC(o.childName,o.snapshotNode))}),ei(n,i,"child_removed",e,s,t),ei(n,i,"child_added",e,s,t),ei(n,i,"child_moved",r,s,t),ei(n,i,"child_changed",e,s,t),ei(n,i,"value",e,s,t),i}function ei(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>UC(n,a,c)),o.forEach(a=>{const c=VC(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function VC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function UC(n,e,t){if(e.childName==null||t.childName==null)throw Ki("Should only compare child_ events.");const s=new M(e.childName,e.snapshotNode),i=new M(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){return{eventCache:n,serverCache:e}}function fi(n,e,t,s){return ra(new Jt(e,t,s),n.serverCache)}function Gp(n,e,t,s){return ra(n.eventCache,new Jt(e,t,s))}function go(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Un(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;const BC=()=>(La||(La=new We(TT)),La);class Q{constructor(e,t=BC()){this.value=e,this.children=t}static fromObject(e){let t=new Q(null);return Te(e,(s,i)=>{t=t.set(new $(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:q(),value:this.value};if(O(e))return null;{const s=P(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(j(e),t);return r!=null?{path:Z(new $(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=P(e),s=this.children.get(t);return s!==null?s.subtree(j(e)):new Q(null)}}set(e,t){if(O(e))return new Q(t,this.children);{const s=P(e),r=(this.children.get(s)||new Q(null)).set(j(e),t),o=this.children.insert(s,r);return new Q(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=P(e),s=this.children.get(t);if(s){const i=s.remove(j(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const t=P(e),s=this.children.get(t);return s?s.get(j(e)):null}}setTree(e,t){if(O(e))return t;{const s=P(e),r=(this.children.get(s)||new Q(null)).setTree(j(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Q(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Z(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,q(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(O(e))return null;{const r=P(e),o=this.children.get(r);return o?o.findOnPath_(j(e),Z(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,q(),t)}foreachOnPath_(e,t,s){if(O(e))return this;{this.value&&s(t,this.value);const i=P(e),r=this.children.get(i);return r?r.foreachOnPath_(j(e),Z(t,i),s):new Q(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Z(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new Q(null))}}function gi(n,e,t){if(O(e))return new ut(new Q(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,t),new ut(n.writeTree_.set(i,r))}else{const i=new Q(t),r=n.writeTree_.setTree(e,i);return new ut(r)}}}function Cc(n,e,t){let s=n;return Te(t,(i,r)=>{s=gi(s,Z(e,i),r)}),s}function Sd(n,e){if(O(e))return ut.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new ut(t)}}function Sc(n,e){return Hn(n,e)!=null}function Hn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ue(t.path,e)):null}function bd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(s,i)=>{e.push(new M(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new M(s,i.value))}),e}function Bt(n,e){if(O(e))return n;{const t=Hn(n,e);return t!=null?new ut(new Q(t)):new ut(n.writeTree_.subtree(e))}}function bc(n){return n.writeTree_.isEmpty()}function bs(n,e){return Kp(q(),n.writeTree_,e)}function Kp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Kp(Z(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Z(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){return zp(e,n)}function qC(n,e,t,s,i){w(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=gi(n.visibleWrites,e,t)),n.lastWriteId=s}function $C(n,e,t,s){w(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Cc(n.visibleWrites,e,t),n.lastWriteId=s}function GC(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function KC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);w(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&WC(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return jC(n),!0;if(s.snap)n.visibleWrites=Sd(n.visibleWrites,s.path);else{const a=s.children;Te(a,c=>{n.visibleWrites=Sd(n.visibleWrites,Z(s.path,c))})}return!0}else return!1}function WC(n,e){if(n.snap)return st(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&st(Z(n.path,t),e))return!0;return!1}function jC(n){n.visibleWrites=Wp(n.allWrites,QC,q()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function QC(n){return n.visible}function Wp(n,e,t){let s=ut.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)st(t,o)?(a=Ue(t,o),s=gi(s,a,r.snap)):st(o,t)&&(a=Ue(o,t),s=gi(s,q(),r.snap.getChild(a)));else if(r.children){if(st(t,o))a=Ue(t,o),s=Cc(s,a,r.children);else if(st(o,t))if(a=Ue(o,t),O(a))s=Cc(s,q(),r.children);else{const c=xn(r.children,P(a));if(c){const l=c.getChild(j(a));s=gi(s,q(),l)}}}else throw Ki("WriteRecord should have .snap or .children")}}return s}function jp(n,e,t,s,i){if(!s&&!i){const r=Hn(n.visibleWrites,e);if(r!=null)return r;{const o=Bt(n.visibleWrites,e);if(bc(o))return t;if(t==null&&!Sc(o,q()))return null;{const a=t||b.EMPTY_NODE;return bs(o,a)}}}else{const r=Bt(n.visibleWrites,e);if(!i&&bc(r))return t;if(!i&&t==null&&!Sc(r,q()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(st(l.path,e)||st(e,l.path))},a=Wp(n.allWrites,o,e),c=t||b.EMPTY_NODE;return bs(a,c)}}}function zC(n,e,t){let s=b.EMPTY_NODE;const i=Hn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(H,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Bt(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const c=bs(Bt(r,new $(o)),a);s=s.updateImmediateChild(o,c)}),bd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(n.visibleWrites,e);return bd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function HC(n,e,t,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Z(e,t);if(Sc(n.visibleWrites,r))return null;{const o=Bt(n.visibleWrites,r);return bc(o)?i.getChild(t):bs(o,i.getChild(t))}}function YC(n,e,t,s){const i=Z(e,t),r=Hn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Bt(n.visibleWrites,i);return bs(o,s.getNode().getImmediateChild(t))}else return null}function XC(n,e){return Hn(n.visibleWrites,e)}function JC(n,e,t,s,i,r,o){let a;const c=Bt(n.visibleWrites,e),l=Hn(c,q());if(l!=null)a=l;else if(t!=null)a=bs(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function ZC(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function mo(n,e,t,s){return jp(n.writeTree,n.treePath,e,t,s)}function mu(n,e){return zC(n.writeTree,n.treePath,e)}function xd(n,e,t,s){return HC(n.writeTree,n.treePath,e,t,s)}function po(n,e){return XC(n.writeTree,Z(n.treePath,e))}function eS(n,e,t,s,i,r){return JC(n.writeTree,n.treePath,e,t,s,i,r)}function pu(n,e,t){return YC(n.writeTree,n.treePath,e,t)}function Qp(n,e){return zp(Z(n.treePath,e),n.writeTree)}function zp(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;w(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Fi(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Li(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Cs(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fi(s,e.snapshotNode,i.oldSnap));else throw Ki("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Hp=new nS;class yu{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pu(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Un(this.viewCache_),r=eS(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(n){return{filter:n}}function iS(n,e){w(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function rS(n,e,t,s,i){const r=new tS;let o,a;if(t.type===lt.OVERWRITE){const l=t;l.source.fromUser?o=xc(n,e,l.path,l.snap,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!O(l.path),o=yo(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===lt.MERGE){const l=t;l.source.fromUser?o=aS(n,e,l.path,l.children,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Nc(n,e,l.path,l.children,s,i,a,r))}else if(t.type===lt.ACK_USER_WRITE){const l=t;l.revert?o=uS(n,e,l.path,s,i,r):o=cS(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===lt.LISTEN_COMPLETE)o=lS(n,e,t.path,s,r);else throw Ki("Unknown operation type: "+t.type);const c=r.getChanges();return oS(e,o,c),{viewCache:o,changes:c}}function oS(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=go(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push($p(go(e)))}}function Yp(n,e,t,s,i,r){const o=e.eventCache;if(po(s,t)!=null)return e;{let a,c;if(O(t))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Un(e),u=l instanceof b?l:b.EMPTY_NODE,h=mu(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=mo(s,Un(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=P(t);if(l===".priority"){w(Xt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=xd(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=j(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=xd(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=pu(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return fi(e,a,o.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function yo(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(O(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=P(t);if(!c.isCompleteForPath(t)&&Xt(t)>1)return e;const g=j(t),T=c.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?l=u.updatePriority(c.getNode(),T):l=u.updateChild(c.getNode(),f,T,g,Hp,null)}const h=Gp(e,l,c.isFullyInitialized()||O(t),u.filtersNodes()),d=new yu(i,h,r);return Yp(n,h,t,i,d,a)}function xc(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new yu(i,e,r);if(O(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=fi(e,l,!0,n.filter.filtersNodes());else{const h=P(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=fi(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=j(t),f=a.getNode().getImmediateChild(h);let g;if(O(d))g=s;else{const _=u.getCompleteChild(h);_!=null?ru(d)===".priority"&&_.getChild(Pp(d)).isEmpty()?g=_:g=_.updateChild(d,s):g=b.EMPTY_NODE}if(f.equals(g))c=e;else{const _=n.filter.updateChild(a.getNode(),h,g,d,u,o);c=fi(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Nd(n,e){return n.eventCache.isCompleteForChild(e)}function aS(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Z(t,c);Nd(e,P(u))&&(a=xc(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Z(t,c);Nd(e,P(u))||(a=xc(n,a,u,l,i,r,o))}),a}function Ad(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nc(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;O(t)?l=s:l=new Q(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Ad(n,f,d);c=yo(n,c,new $(h),g,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),_=Ad(n,g,d);c=yo(n,c,new $(h),_,i,r,o,a)}}),c}function cS(n,e,t,s,i,r,o){if(po(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(O(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return yo(n,e,t,c.getNode().getChild(t),i,r,a,o);if(O(t)){let l=new Q(null);return c.getNode().forEachChild(yt,(u,h)=>{l=l.set(new $(u),h)}),Nc(n,e,t,l,i,r,a,o)}else return e}else{let l=new Q(null);return s.foreach((u,h)=>{const d=Z(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Nc(n,e,t,l,i,r,a,o)}}function lS(n,e,t,s,i){const r=e.serverCache,o=Gp(e,r.getNode(),r.isFullyInitialized()||O(t),r.isFiltered());return Yp(n,o,t,s,Hp,i)}function uS(n,e,t,s,i,r){let o;if(po(s,t)!=null)return e;{const a=new yu(s,e,i),c=e.eventCache.getNode();let l;if(O(t)||P(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mo(s,Un(e));else{const h=e.serverCache.getNode();w(h instanceof b,"serverChildren would be complete if leaf node"),u=mu(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=P(t);let h=pu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,j(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,b.EMPTY_NODE,j(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mo(s,Un(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||po(s,q())!=null,fi(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new hu(s.getIndex()),r=SC(s);this.processor_=sS(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(b.EMPTY_NODE,a.getNode(),null),u=new Jt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Jt(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ra(h,u),this.eventGenerator_=new LC(this.query_)}get query(){return this.query_}}function dS(n){return n.viewCache_.serverCache.getNode()}function fS(n){return go(n.viewCache_)}function gS(n,e){const t=Un(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function kd(n){return n.eventRegistrations_.length===0}function mS(n,e){n.eventRegistrations_.push(e)}function Dd(n,e,t){const s=[];if(t){w(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Rd(n,e,t,s){e.type===lt.MERGE&&e.source.queryId!==null&&(w(Un(n.viewCache_),"We should always have a full cache before handling merges"),w(go(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=rS(n.processor_,i,e,t,s);return iS(n.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Xp(n,r.changes,r.viewCache.eventCache.getNode(),null)}function pS(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{s.push(Cs(r,o))}),t.isFullyInitialized()&&s.push($p(t.getNode())),Xp(n,s,t.getNode(),e)}function Xp(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return FC(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class Jp{constructor(){this.views=new Map}}function yS(n){w(!_o,"__referenceConstructor has already been defined"),_o=n}function _S(){return w(_o,"Reference.ts has not been loaded"),_o}function vS(n){return n.views.size===0}function _u(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),Rd(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Rd(o,e,t,s));return r}}function Zp(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=mo(t,i?s:null),c=!1;a?c=!0:s instanceof b?(a=mu(t,s),c=!1):(a=b.EMPTY_NODE,c=!1);const l=ra(new Jt(a,c,!1),new Jt(s,i,!1));return new hS(e,l)}return o}function wS(n,e,t,s,i,r){const o=Zp(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mS(o,t),pS(o,t)}function IS(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Zt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Dd(l,t,s)),kd(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Dd(c,t,s)),kd(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Zt(n)&&r.push(new(_S())(e._repo,e._path)),{removed:r,events:o}}function ey(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function qt(n,e){let t=null;for(const s of n.views.values())t=t||gS(s,e);return t}function ty(n,e){if(e._queryParams.loadsAllData())return aa(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ny(n,e){return ty(n,e)!=null}function Zt(n){return aa(n)!=null}function aa(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;function ES(n){w(!vo,"__referenceConstructor has already been defined"),vo=n}function TS(){return w(vo,"Reference.ts has not been loaded"),vo}let CS=1;class Pd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=ZC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vu(n,e,t,s,i){return qC(n.pendingWriteTree_,e,t,s,i),i?qs(n,new Vn(du(),e,t)):[]}function SS(n,e,t,s){$C(n.pendingWriteTree_,e,t,s);const i=Q.fromObject(t);return qs(n,new Ss(du(),e,i))}function Vt(n,e,t=!1){const s=GC(n.pendingWriteTree_,e);if(KC(n.pendingWriteTree_,e)){let r=new Q(null);return s.snap!=null?r=r.set(q(),!0):Te(s.children,o=>{r=r.set(new $(o),!0)}),qs(n,new fo(s.path,r,t))}else return[]}function mr(n,e,t){return qs(n,new Vn(fu(),e,t))}function bS(n,e,t){const s=Q.fromObject(t);return qs(n,new Ss(fu(),e,s))}function xS(n,e){return qs(n,new Ui(fu(),e))}function NS(n,e,t){const s=wu(n,t);if(s){const i=Iu(s),r=i.path,o=i.queryId,a=Ue(r,e),c=new Ui(gu(o),a);return Eu(n,r,c)}else return[]}function wo(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ny(o,e))){const c=IS(o,e,t,s);vS(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Zt(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=DS(d);for(let g=0;g<f.length;++g){const _=f[g],T=_.query,L=oy(n,_);n.listenProvider_.startListening(mi(T),Bi(n,T),L.hashFn,L.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(mi(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(la(d));n.listenProvider_.stopListening(mi(d),f)}))}RS(n,l)}return a}function sy(n,e,t,s){const i=wu(n,s);if(i!=null){const r=Iu(i),o=r.path,a=r.queryId,c=Ue(o,e),l=new Vn(gu(a),c,t);return Eu(n,o,l)}else return[]}function AS(n,e,t,s){const i=wu(n,s);if(i){const r=Iu(i),o=r.path,a=r.queryId,c=Ue(o,e),l=Q.fromObject(t),u=new Ss(gu(a),c,l);return Eu(n,o,u)}else return[]}function Ac(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=Ue(d,i);r=r||qt(f,g),o=o||Zt(f)});let a=n.syncPointTree_.get(i);a?(o=o||Zt(a),r=r||qt(a,q())):(a=new Jp,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=b.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,g)=>{const _=qt(g,q());_&&(r=r.updateImmediateChild(f,_))}));const l=ny(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=la(e);w(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=PS();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=oa(n.pendingWriteTree_,i);let h=wS(a,e,t,u,r,c);if(!l&&!o&&!s){const d=ty(a,e);h=h.concat(OS(n,e,d))}return h}function ca(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ue(o,e),l=qt(a,c);if(l)return l});return jp(i,e,r,t,!0)}function kS(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=Ue(l,t);s=s||qt(u,h)});let i=n.syncPointTree_.get(t);i?s=s||qt(i,q()):(i=new Jp,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Jt(s,!0,!1):null,a=oa(n.pendingWriteTree_,e._path),c=Zp(i,e,a,r?o.getNode():b.EMPTY_NODE,r);return fS(c)}function qs(n,e){return iy(e,n.syncPointTree_,null,oa(n.pendingWriteTree_,q()))}function iy(n,e,t,s){if(O(n.path))return ry(n,e,t,s);{const i=e.get(q());t==null&&i!=null&&(t=qt(i,q()));let r=[];const o=P(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=Qp(s,o);r=r.concat(iy(a,c,l,u))}return i&&(r=r.concat(_u(i,n,s,t))),r}}function ry(n,e,t,s){const i=e.get(q());t==null&&i!=null&&(t=qt(i,q()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Qp(s,o),u=n.operationForChild(o);u&&(r=r.concat(ry(u,a,c,l)))}),i&&(r=r.concat(_u(i,n,s,t))),r}function oy(n,e){const t=e.query,s=Bi(n,t);return{hashFn:()=>(dS(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?NS(n,t._path,s):xS(n,t._path);{const r=bT(i,t);return wo(n,t,null,r)}}}}function Bi(n,e){const t=la(e);return n.queryToTagMap.get(t)}function la(n){return n._path.toString()+"$"+n._queryIdentifier}function wu(n,e){return n.tagToQueryMap.get(e)}function Iu(n){const e=n.indexOf("$");return w(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new $(n.substr(0,e))}}function Eu(n,e,t){const s=n.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=oa(n.pendingWriteTree_,e);return _u(s,t,i,null)}function DS(n){return n.fold((e,t,s)=>{if(t&&Zt(t))return[aa(t)];{let i=[];return t&&(i=ey(t)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function mi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(TS())(n._repo,n._path):n}function RS(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=la(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function PS(){return CS++}function OS(n,e,t){const s=e._path,i=Bi(n,e),r=oy(n,t),o=n.listenProvider_.startListening(mi(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)w(!Zt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!O(l)&&u&&Zt(u))return[aa(u).query];{let d=[];return u&&(d=d.concat(ey(u).map(f=>f.query))),Te(h,(f,g)=>{d=d.concat(g)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(mi(u),Bi(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Tu(t)}node(){return this.node_}}class Cu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Z(this.path_,e);return new Cu(this.syncTree_,t)}node(){return ca(this.syncTree_,this.path_)}}const MS=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Od=function(n,e,t){if(!n||typeof n!="object")return n;if(w(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return LS(n[".sv"],e,t);if(typeof n[".sv"]=="object")return FS(n[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},LS=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:w(!1,"Unexpected server value: "+n)}},FS=function(n,e,t){n.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ay=function(n,e,t,s){return bu(e,new Cu(t,n),s)},Su=function(n,e,t){return bu(n,new Tu(e),t)};function bu(n,e,t){const s=n.getPriority().val(),i=Od(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Od(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ge(a,te(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(H,(a,c)=>{const l=bu(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ua(n,e){let t=e instanceof $?e:new $(e),s=n,i=P(t);for(;i!==null;){const r=xn(s.node.children,i)||{children:{},childCount:0};s=new xu(i,s,r),t=j(t),i=P(t)}return s}function Yn(n){return n.node.value}function Nu(n,e){n.node.value=e,kc(n)}function cy(n){return n.node.childCount>0}function VS(n){return Yn(n)===void 0&&!cy(n)}function ha(n,e){Te(n.node.children,(t,s)=>{e(new xu(t,n,s))})}function ly(n,e,t,s){t&&!s&&e(n),ha(n,i=>{ly(i,e,!0,s)}),t&&s&&e(n)}function US(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pr(n){return new $(n.parent===null?n.name:pr(n.parent)+"/"+n.name)}function kc(n){n.parent!==null&&BS(n.parent,n.name,n)}function BS(n,e,t){const s=VS(t),i=Xe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,kc(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,kc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=/[\[\].#$\/\u0000-\u001F\u007F]/,$S=/[\[\].#$\u0000-\u001F\u007F]/,Fa=10*1024*1024,da=function(n){return typeof n=="string"&&n.length!==0&&!qS.test(n)},uy=function(n){return typeof n=="string"&&n.length!==0&&!$S.test(n)},GS=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uy(n)},qi=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ta(n)||n&&typeof n=="object"&&Xe(n,".sv")},Et=function(n,e,t,s){s&&e===void 0||yr(rt(n,"value"),e,t)},yr=function(n,e,t){const s=t instanceof $?new iC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dn(s));if(typeof e=="function")throw new Error(n+"contains a function "+dn(s)+" with contents = "+e.toString());if(ta(e))throw new Error(n+"contains "+e.toString()+" "+dn(s));if(typeof e=="string"&&e.length>Fa/3&&Eo(e)>Fa)throw new Error(n+"contains a string greater than "+Fa+" utf8 bytes "+dn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!da(o)))throw new Error(n+" contains an invalid key ("+o+") "+dn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rC(s,o),yr(n,a,s),oC(s)}),i&&r)throw new Error(n+' contains ".value" child '+dn(s)+" in addition to actual children.")}},KS=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Mi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!da(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sC);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&st(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},hy=function(n,e,t,s){if(s&&e===void 0)return;const i=rt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,a)=>{const c=new $(o);if(yr(i,a,Z(t,c)),ru(c)===".priority"&&!qi(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),KS(i,r)},Au=function(n,e,t){if(!(t&&e===void 0)){if(ta(e))throw new Error(rt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!qi(e))throw new Error(rt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},_r=function(n,e,t,s){if(!(s&&t===void 0)&&!da(t))throw new Error(rt(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},$i=function(n,e,t,s){if(!(s&&t===void 0)&&!uy(t))throw new Error(rt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WS=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$i(n,e,t,s)},it=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},dy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!da(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!GS(t))throw new Error(rt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fa(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ou(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function fy(n,e,t){fa(n,t),gy(n,s=>ou(s,e))}function et(n,e,t){fa(n,t),gy(n,s=>st(s,e)||st(e,s))}function gy(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(QS(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function QS(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Cn&&ve("event: "+t.toString()),Us(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="repo_interrupt",zS=25;class HS{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ho(),this.transactionQueueTree_=new xu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YS(n,e,t){if(n.stats_=su(n.repoInfo_),n.forceRestClient_||NT())n.server_=new uo(n.repoInfo_,(s,i,r,o)=>{Md(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ld(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new St(n.repoInfo_,e,(s,i,r,o)=>{Md(n,s,i,r,o)},s=>{Ld(n,s)},s=>{XS(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=PT(n.repoInfo_,()=>new MC(n.stats_,n.server_)),n.infoData_=new kC,n.infoSyncTree_=new Pd({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=mr(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ku(n,"connected",!1),n.serverSyncTree_=new Pd({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);et(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function py(n){const t=n.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vr(n){return MS({timestamp:py(n)})}function Md(n,e,t,s,i){n.dataUpdateCount++;const r=new $(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Ur(t,l=>te(l));o=AS(n.serverSyncTree_,r,c,i)}else{const c=te(t);o=sy(n.serverSyncTree_,r,c,i)}else if(s){const c=Ur(t,l=>te(l));o=bS(n.serverSyncTree_,r,c)}else{const c=te(t);o=mr(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=xs(n,r)),et(n.eventQueue_,a,o)}function Ld(n,e){ku(n,"connected",e),e===!1&&eb(n)}function XS(n,e){Te(e,(t,s)=>{ku(n,t,s)})}function ku(n,e,t){const s=new $("/.info/"+e),i=te(t);n.infoData_.updateSnapshot(s,i);const r=mr(n.infoSyncTree_,s,i);et(n.eventQueue_,s,r)}function ga(n){return n.nextWriteId_++}function JS(n,e,t){const s=kS(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=te(i).withIndex(e._queryParams.getIndex());Ac(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=mr(n.serverSyncTree_,e._path,r);else{const a=Bi(n.serverSyncTree_,e);o=sy(n.serverSyncTree_,e._path,r,a)}return et(n.eventQueue_,e._path,o),wo(n.serverSyncTree_,e,t,null,!0),r},i=>($s(n,"get for query "+he(e)+" failed: "+i),Promise.reject(new Error(i))))}function Du(n,e,t,s,i){$s(n,"set",{path:e.toString(),value:t,priority:s});const r=vr(n),o=te(t,s),a=ca(n.serverSyncTree_,e),c=Su(o,a,r),l=ga(n),u=vu(n.serverSyncTree_,e,c,l,!0);fa(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const g=d==="ok";g||Oe("set at "+e+" failed: "+d);const _=Vt(n.serverSyncTree_,l,!g);et(n.eventQueue_,e,_),en(n,i,d,f)});const h=Pu(n,e);xs(n,h),et(n.eventQueue_,h,[])}function ZS(n,e,t,s){$s(n,"update",{path:e.toString(),value:t});let i=!0;const r=vr(n),o={};if(Te(t,(a,c)=>{i=!1,o[a]=ay(Z(e,a),te(c),n.serverSyncTree_,r)}),i)ve("update() called with empty data.  Don't do anything."),en(n,s,"ok",void 0);else{const a=ga(n),c=SS(n.serverSyncTree_,e,o,a);fa(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Oe("update at "+e+" failed: "+l);const d=Vt(n.serverSyncTree_,a,!h),f=d.length>0?xs(n,e):e;et(n.eventQueue_,f,d),en(n,s,l,u)}),Te(t,l=>{const u=Pu(n,Z(e,l));xs(n,u)}),et(n.eventQueue_,e,[])}}function eb(n){$s(n,"onDisconnectEvents");const e=vr(n),t=ho();Tc(n.onDisconnect_,q(),(i,r)=>{const o=ay(i,r,n.serverSyncTree_,e);Bs(t,i,o)});let s=[];Tc(t,q(),(i,r)=>{s=s.concat(mr(n.serverSyncTree_,i,r));const o=Pu(n,i);xs(n,o)}),n.onDisconnect_=ho(),et(n.eventQueue_,q(),s)}function tb(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Ec(n.onDisconnect_,e),en(n,t,s,i)})}function Fd(n,e,t,s){const i=te(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Bs(n.onDisconnect_,e,i),en(n,s,r,o)})}function nb(n,e,t,s,i){const r=te(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Bs(n.onDisconnect_,e,r),en(n,i,o,a)})}function sb(n,e,t,s){if($a(t)){ve("onDisconnect().update() called with empty data.  Don't do anything."),en(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Te(t,(o,a)=>{const c=te(a);Bs(n.onDisconnect_,Z(e,o),c)}),en(n,s,i,r)})}function ib(n,e,t){let s;P(e._path)===".info"?s=Ac(n.infoSyncTree_,e,t):s=Ac(n.serverSyncTree_,e,t),fy(n.eventQueue_,e._path,s)}function Dc(n,e,t){let s;P(e._path)===".info"?s=wo(n.infoSyncTree_,e,t):s=wo(n.serverSyncTree_,e,t),fy(n.eventQueue_,e._path,s)}function yy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(my)}function rb(n){n.persistentConnection_&&n.persistentConnection_.resume(my)}function $s(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ve(t,...e)}function en(n,e,t,s){e&&Us(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ob(n,e,t,s,i,r){$s(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:lp(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ru(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{yr("transaction failed: Data returned ",c,o.path),o.status=0;const l=ua(n.transactionQueueTree_,e),u=Yn(l)||[];u.push(o),Nu(l,u);let h;typeof c=="object"&&c!==null&&Xe(c,".priority")?(h=xn(c,".priority"),w(qi(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(ca(n.serverSyncTree_,e)||b.EMPTY_NODE).getPriority().val();const d=vr(n),f=te(c,h),g=Su(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=g,o.currentWriteId=ga(n);const _=vu(n.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);et(n.eventQueue_,e,_),ma(n,n.transactionQueueTree_)}}function Ru(n,e,t){return ca(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function ma(n,e=n.transactionQueueTree_){if(e||pa(n,e),Yn(e)){const t=vy(n,e);w(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ab(n,pr(e),t)}else cy(e)&&ha(e,t=>{ma(n,t)})}function ab(n,e,t){const s=t.map(l=>l.currentWriteId),i=Ru(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ue(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{$s(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Vt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();pa(n,ua(n.transactionQueueTree_,e)),ma(n,n.transactionQueueTree_),et(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Us(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Oe("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}xs(n,e)}},o)}function xs(n,e){const t=_y(n,e),s=pr(t),i=vy(n,t);return cb(n,i,s),s}function cb(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ue(t,c.path);let u=!1,h;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Vt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=zS)u=!0,h="maxretry",i=i.concat(Vt(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Ru(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){yr("transaction failed: Data returned ",f,c.path);let g=te(f);typeof f=="object"&&f!=null&&Xe(f,".priority")||(g=g.updatePriority(d.getPriority()));const T=c.currentWriteId,L=vr(n),G=Su(g,d,L);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=G,c.currentWriteId=ga(n),o.splice(o.indexOf(T),1),i=i.concat(vu(n.serverSyncTree_,c.path,G,c.currentWriteId,c.applyLocally)),i=i.concat(Vt(n.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(Vt(n.serverSyncTree_,c.currentWriteId,!0))}et(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}pa(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Us(s[a]);ma(n,n.transactionQueueTree_)}function _y(n,e){let t,s=n.transactionQueueTree_;for(t=P(e);t!==null&&Yn(s)===void 0;)s=ua(s,t),e=j(e),t=P(e);return s}function vy(n,e){const t=[];return wy(n,e,t),t.sort((s,i)=>s.order-i.order),t}function wy(n,e,t){const s=Yn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ha(e,i=>{wy(n,i,t)})}function pa(n,e){const t=Yn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Nu(e,t.length>0?t:void 0)}ha(e,s=>{pa(n,s)})}function Pu(n,e){const t=pr(_y(n,e)),s=ua(n.transactionQueueTree_,e);return US(s,i=>{Va(n,i)}),Va(n,s),ly(s,i=>{Va(n,i)}),t}function Va(n,e){const t=Yn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(w(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Vt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Nu(e,void 0):t.length=r+1,et(n.eventQueue_,pr(e),i);for(let o=0;o<s.length;o++)Us(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ub(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rc=function(n,e){const t=hb(n),s=t.namespace;t.domain==="firebase.com"&&wt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||IT();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Cp(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new $(t.pathString)}},hb=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=lb(n.substring(u,h)));const d=ub(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Ey{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class db{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ze;return tb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){it("OnDisconnect.remove",this._path);const e=new ze;return Fd(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){it("OnDisconnect.set",this._path),Et("OnDisconnect.set",e,this._path,!1);const t=new ze;return Fd(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){it("OnDisconnect.setWithPriority",this._path),Et("OnDisconnect.setWithPriority",e,this._path,!1),Au("OnDisconnect.setWithPriority",t,!1);const s=new ze;return nb(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){it("OnDisconnect.update",this._path),hy("OnDisconnect.update",e,this._path,!1);const t=new ze;return sb(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return O(this._path)?null:ru(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Td(this._queryParams),t=eu(e);return t==="{}"?"default":t}get _queryObject(){return Td(this._queryParams)}isEqual(e){if(e=B(e),!(e instanceof Qe))return!1;const t=this._repo===e._repo,s=ou(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nC(this._path)}}function ya(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function cn(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===yt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Nt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==It)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===H){if(e!=null&&!qi(e)||t!=null&&!qi(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(n.getIndex()instanceof lu||n.getIndex()===uu,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _a(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ot extends Qe{constructor(e,t){super(e,t,new sa,!1)}get parent(){const e=Pp(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $(e),s=qn(this.ref,e);return new Bn(this._node.getChild(t),s,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bn(i,qn(this.ref,s),H)))}hasChild(e){const t=new $(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ty(n,e){return n=B(n),n._checkNotDeleted("ref"),e!==void 0?qn(n._root,e):n._root}function Vd(n,e){n=B(n),n._checkNotDeleted("refFromURL");const t=Rc(e,n._repo.repoInfo_.nodeAdmin);dy("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&wt("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),Ty(n,t.path.toString())}function qn(n,e){return n=B(n),P(n._path)===null?WS("child","path",e,!1):$i("child","path",e,!1),new ot(n._repo,Z(n._path,e))}function fb(n,e){n=B(n),it("push",n._path),Et("push",e,n._path,!0);const t=py(n._repo),s=EC(t),i=qn(n,s),r=qn(n,s);let o;return e!=null?o=Mu(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function gb(n){return it("remove",n._path),Mu(n,null)}function Mu(n,e){n=B(n),it("set",n._path),Et("set",e,n._path,!1);const t=new ze;return Du(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mb(n,e){n=B(n),it("setPriority",n._path),Au("setPriority",e,!1);const t=new ze;return Du(n._repo,Z(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function pb(n,e,t){if(it("setWithPriority",n._path),Et("setWithPriority",e,n._path,!1),Au("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new ze;return Du(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function yb(n,e){hy("update",e,n._path,!1);const t=new ze;return ZS(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function _b(n){n=B(n);const e=new Ou(()=>{}),t=new wr(e);return JS(n._repo,n,t).then(s=>new Bn(s,new ot(n._repo,n._path),n._queryParams.getIndex()))}class wr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Iy("value",this,new Bn(e.snapshotNode,new ot(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ey(this,e,t):null}matches(e){return e instanceof wr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class va{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ey(this,e,t):null}createEvent(e,t){w(e.childName!=null,"Child events should have a childName.");const s=qn(new ot(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Iy(e.type,this,new Bn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof va?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ir(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(u,h)=>{Dc(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Ou(t,r||void 0),a=e==="value"?new wr(o):new va(e,o);return ib(n._repo,n,a),()=>Dc(n._repo,n,a)}function Pc(n,e,t,s){return Ir(n,"value",e,t,s)}function Ud(n,e,t,s){return Ir(n,"child_added",e,t,s)}function Bd(n,e,t,s){return Ir(n,"child_changed",e,t,s)}function qd(n,e,t,s){return Ir(n,"child_moved",e,t,s)}function $d(n,e,t,s){return Ir(n,"child_removed",e,t,s)}function Gd(n,e,t){let s=null;const i=t?new Ou(t):null;e==="value"?s=new wr(i):e&&(s=new va(e,i)),Dc(n._repo,n,s)}class ht{}class Cy extends ht{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("endAt",this._value,e._path,!0);const t=Ic(e._queryParams,this._value,this._key);if(_a(t),cn(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Qe(e._repo,e._path,t,e._orderByCalled)}}function vb(n,e){return _r("endAt","key",e,!0),new Cy(n,e)}class wb extends ht{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("endBefore",this._value,e._path,!1);const t=AC(e._queryParams,this._value,this._key);if(_a(t),cn(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Qe(e._repo,e._path,t,e._orderByCalled)}}function Ib(n,e){return _r("endBefore","key",e,!0),new wb(n,e)}class Sy extends ht{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("startAt",this._value,e._path,!0);const t=wc(e._queryParams,this._value,this._key);if(_a(t),cn(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Qe(e._repo,e._path,t,e._orderByCalled)}}function Eb(n=null,e){return _r("startAt","key",e,!0),new Sy(n,e)}class Tb extends ht{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Et("startAfter",this._value,e._path,!1);const t=NC(e._queryParams,this._value,this._key);if(_a(t),cn(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Qe(e._repo,e._path,t,e._orderByCalled)}}function Cb(n,e){return _r("startAfter","key",e,!0),new Tb(n,e)}class Sb extends ht{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Qe(e._repo,e._path,bC(e._queryParams,this._limit),e._orderByCalled)}}function bb(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Sb(n)}class xb extends ht{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Qe(e._repo,e._path,xC(e._queryParams,this._limit),e._orderByCalled)}}function Nb(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new xb(n)}class Ab extends ht{constructor(e){super(),this._path=e}_apply(e){ya(e,"orderByChild");const t=new $(this._path);if(O(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new lu(t),i=ia(e._queryParams,s);return cn(i),new Qe(e._repo,e._path,i,!0)}}function kb(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return $i("orderByChild","path",n,!1),new Ab(n)}class Db extends ht{_apply(e){ya(e,"orderByKey");const t=ia(e._queryParams,yt);return cn(t),new Qe(e._repo,e._path,t,!0)}}function Rb(){return new Db}class Pb extends ht{_apply(e){ya(e,"orderByPriority");const t=ia(e._queryParams,H);return cn(t),new Qe(e._repo,e._path,t,!0)}}function Ob(){return new Pb}class Mb extends ht{_apply(e){ya(e,"orderByValue");const t=ia(e._queryParams,uu);return cn(t),new Qe(e._repo,e._path,t,!0)}}function Lb(){return new Mb}class Fb extends ht{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Et("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Cy(this._value,this._key)._apply(new Sy(this._value,this._key)._apply(e))}}function Vb(n,e){return _r("equalTo","key",e,!0),new Fb(n,e)}function at(n,...e){let t=B(n);for(const s of e)t=s._apply(t);return t}yS(ot);ES(ot);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="FIREBASE_DATABASE_EMULATOR_HOST",Oc={};let Bb=!1;function qb(n,e,t,s){n.repoInfo_=new Cp(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),s&&(n.authTokenProvider_=s)}function by(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rc(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Ub]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Rc(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new cs(cs.OWNER):new kT(n.name,n.options,e);dy("Invalid Firebase Database URL",o),O(o.path)||wt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Gb(a,n,u,new AT(n.name,t));return new Kb(h,n)}function $b(n,e){const t=Oc[e];(!t||t[n.key]!==n)&&wt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),yy(n),delete t[n.key]}function Gb(n,e,t,s){let i=Oc[e.name];i||(i={},Oc[e.name]=i);let r=i[n.toURLString()];return r&&wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new HS(n,Bb,t,s),i[n.toURLString()]=r,r}class Kb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($b(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wt("Cannot call "+e+" on a deleted database.")}}function xy(){Es.IS_TRANSPORT_INITIALIZED&&Oe("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Wb(){xy(),Ft.forceDisallow()}function jb(){xy(),tt.forceDisallow(),Ft.forceAllow()}function Qb(n,e,t,s={}){n=B(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&wt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new cs(cs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Wd(s.mockUserToken,n.app.options.projectId);r=new cs(o)}qb(i,e,t,r)}function zb(n){n=B(n),n._checkNotDeleted("goOffline"),yy(n._repo)}function Hb(n){n=B(n),n._checkNotDeleted("goOnline"),rb(n._repo)}function Yb(n,e){hp(n,e)}/**
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
 */function Xb(n){ap(Mc),Lc(new Ns("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return by(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(rd,od,n),Sn(rd,od,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={".sv":"timestamp"};function Zb(){return Jb}function e0(n){return{".sv":{increment:n}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function n0(n,e,t){var s;if(n=B(n),it("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new ze,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new Bn(u,new ot(n._repo,n._path),H),r.resolve(new t0(l,h)))},a=Pc(n,()=>{});return ob(n._repo,n._path,e,o,a,i),r.promise}St.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};St.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Xb();const s0="@firebase/database-compat",i0="0.2.10";/**
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
 */const r0=new Io("@firebase/database-compat"),Ny=function(n){const e="FIREBASE WARNING: "+n;r0.warn(e)};/**
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
 */const o0=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(rt(n,e)+"must be a boolean.")},a0=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(rt(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this._delegate=e}cancel(e){N("OnDisconnect.cancel",0,1,arguments.length),pe("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){N("OnDisconnect.remove",0,1,arguments.length),pe("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){N("OnDisconnect.set",1,2,arguments.length),pe("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){N("OnDisconnect.setWithPriority",2,3,arguments.length),pe("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(N("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,Ny("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}pe("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return N("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this._database=e,this._delegate=t}val(){return N("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return N("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return N("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return N("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return N("DataSnapshot.child",0,1,arguments.length),e=String(e),$i("DataSnapshot.child","path",e,!1),new $t(this._database,this._delegate.child(e))}hasChild(e){return N("DataSnapshot.hasChild",1,1,arguments.length),$i("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return N("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return N("DataSnapshot.forEach",1,1,arguments.length),pe("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new $t(this._database,t)))}hasChildren(){return N("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return N("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return N("DataSnapshot.ref",0,0,arguments.length),new He(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class be{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;N("Query.on",2,4,arguments.length),pe("Query.on","callback",t,!1);const o=be.getCancelAndContextArgs_("Query.on",s,i),a=(l,u)=>{t.call(o.context,new $t(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return Pc(this._delegate,a,c),t;case"child_added":return Ud(this._delegate,a,c),t;case"child_removed":return $d(this._delegate,a,c),t;case"child_changed":return Bd(this._delegate,a,c),t;case"child_moved":return qd(this._delegate,a,c),t;default:throw new Error(rt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(N("Query.off",0,3,arguments.length),a0("Query.off",e,!0),pe("Query.off","callback",t,!0),Fu("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,Gd(this._delegate,e,i)}else Gd(this._delegate,e)}get(){return _b(this._delegate).then(e=>new $t(this.database,e))}once(e,t,s,i){N("Query.once",1,4,arguments.length),pe("Query.once","callback",t,!0);const r=be.getCancelAndContextArgs_("Query.once",s,i),o=new ze,a=(l,u)=>{const h=new $t(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":Pc(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Ud(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":$d(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":Bd(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":qd(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(rt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return N("Query.limitToFirst",1,1,arguments.length),new be(this.database,at(this._delegate,bb(e)))}limitToLast(e){return N("Query.limitToLast",1,1,arguments.length),new be(this.database,at(this._delegate,Nb(e)))}orderByChild(e){return N("Query.orderByChild",1,1,arguments.length),new be(this.database,at(this._delegate,kb(e)))}orderByKey(){return N("Query.orderByKey",0,0,arguments.length),new be(this.database,at(this._delegate,Rb()))}orderByPriority(){return N("Query.orderByPriority",0,0,arguments.length),new be(this.database,at(this._delegate,Ob()))}orderByValue(){return N("Query.orderByValue",0,0,arguments.length),new be(this.database,at(this._delegate,Lb()))}startAt(e=null,t){return N("Query.startAt",0,2,arguments.length),new be(this.database,at(this._delegate,Eb(e,t)))}startAfter(e=null,t){return N("Query.startAfter",0,2,arguments.length),new be(this.database,at(this._delegate,Cb(e,t)))}endAt(e=null,t){return N("Query.endAt",0,2,arguments.length),new be(this.database,at(this._delegate,vb(e,t)))}endBefore(e=null,t){return N("Query.endBefore",0,2,arguments.length),new be(this.database,at(this._delegate,Ib(e,t)))}equalTo(e,t){return N("Query.equalTo",1,2,arguments.length),new be(this.database,at(this._delegate,Vb(e,t)))}toString(){return N("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return N("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(N("Query.isEqual",1,1,arguments.length),!(e instanceof be)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,pe(e,"cancel",i.cancel,!0),i.context=s,Fu(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(rt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new He(this.database,new ot(this._delegate._repo,this._delegate._path))}}class He extends be{constructor(e,t){super(e,new Qe(t._repo,t._path,new sa,!1)),this.database=e,this._delegate=t}getKey(){return N("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return N("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new He(this.database,qn(this._delegate,e))}getParent(){N("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new He(this.database,e):null}getRoot(){return N("Reference.root",0,0,arguments.length),new He(this.database,this._delegate.root)}set(e,t){N("Reference.set",1,2,arguments.length),pe("Reference.set","onComplete",t,!0);const s=Mu(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(N("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,Ny("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}it("Reference.update",this._delegate._path),pe("Reference.update","onComplete",t,!0);const s=yb(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){N("Reference.setWithPriority",2,3,arguments.length),pe("Reference.setWithPriority","onComplete",s,!0);const i=pb(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){N("Reference.remove",0,1,arguments.length),pe("Reference.remove","onComplete",e,!0);const t=gb(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){N("Reference.transaction",1,3,arguments.length),pe("Reference.transaction","transactionUpdate",e,!1),pe("Reference.transaction","onComplete",t,!0),o0("Reference.transaction","applyLocally",s,!0);const i=n0(this._delegate,e,{applyLocally:s}).then(r=>new l0(r.committed,new $t(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){N("Reference.setPriority",1,2,arguments.length),pe("Reference.setPriority","onComplete",t,!0);const s=mb(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){N("Reference.push",0,2,arguments.length),pe("Reference.push","onComplete",t,!0);const s=fb(this._delegate,e),i=s.then(o=>new He(this.database,o));t&&i.then(()=>t(null),o=>t(o));const r=new He(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return it("Reference.onDisconnect",this._delegate._path),new c0(new db(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Wb,forceLongPolling:jb}}useEmulator(e,t,s={}){Qb(this._delegate,e,t,s)}ref(e){if(N("database.ref",0,1,arguments.length),e instanceof He){const t=Vd(this._delegate,e.toString());return new He(this,t)}else{const t=Ty(this._delegate,e);return new He(this,t)}}refFromURL(e){N("database.refFromURL",1,1,arguments.length);const s=Vd(this._delegate,e);return new He(this,s)}goOffline(){return N("database.goOffline",0,0,arguments.length),zb(this._delegate)}goOnline(){return N("database.goOnline",0,0,arguments.length),Hb(this._delegate)}}Gi.ServerValue={TIMESTAMP:Zb(),increment:n=>e0(n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){ap(t);const o=new Hy("auth-internal",new Yy("database-standalone"));return o.setComponent(new Ns("auth-internal",()=>s,"PRIVATE")),{instance:new Gi(by(n,o,void 0,e,r),n),namespace:i}}var h0=Object.freeze({__proto__:null,initStandalone:u0});/**
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
 */const d0=Gi.ServerValue;function f0(n){n.INTERNAL.registerComponent(new Ns("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Gi(i,s)},"PUBLIC").setServiceProps({Reference:He,Query:be,Database:Gi,DataSnapshot:$t,enableLogging:Yb,INTERNAL:h0,ServerValue:d0}).setMultipleInstances(!0)),n.registerVersion(s0,i0)}f0(ls);const g0={apiKey:"AIzaSyANYFUMwHMxHVoIDNLJsFzDSiL1_4qB4YA",authDomain:"game-7955e.firebaseapp.com",databaseURL:"https://game-7955e-default-rtdb.firebaseio.com",projectId:"game-7955e",storageBucket:"game-7955e.appspot.com",messagingSenderId:"364405624537",appId:"1:364405624537:web:551896aa29b2a81409f8c8"};ls.initializeApp(g0);ls.apps.length||ls.initializeApp(firebaseConfig);Xy();export{ls as f};

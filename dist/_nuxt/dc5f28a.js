/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{337:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return I})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return D})),r.d(t,"g",(function(){return B})),r.d(t,"h",(function(){return L})),r.d(t,"i",(function(){return l})),r.d(t,"j",(function(){return R})),r.d(t,"k",(function(){return k})),r.d(t,"l",(function(){return f})),r.d(t,"m",(function(){return v})),r.d(t,"n",(function(){return E})),r.d(t,"o",(function(){return N})),r.d(t,"p",(function(){return y})),r.d(t,"q",(function(){return C})),r.d(t,"r",(function(){return m})),r.d(t,"s",(function(){return _})),r.d(t,"t",(function(){return w})),r.d(t,"u",(function(){return U})),r.d(t,"v",(function(){return T})),r.d(t,"w",(function(){return P})),r.d(t,"x",(function(){return O}));const n=function(e){const t=[];let p=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[p++]=r:r<2048?(t[p++]=r>>6|192,t[p++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[p++]=r>>18|240,t[p++]=r>>12&63|128,t[p++]=r>>6&63|128,t[p++]=63&r|128):(t[p++]=r>>12|224,t[p++]=r>>6&63|128,t[p++]=63&r|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(input,e){if(!Array.isArray(input))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,output=[];for(let i=0;i<input.length;i+=3){const e=input[i],r=i+1<input.length,n=r?input[i+1]:0,o=i+2<input.length,c=o?input[i+2]:0,h=e>>2,l=(3&e)<<4|n>>4;let d=(15&n)<<2|c>>6,f=63&c;o||(f=64,r||(d=64)),output.push(t[h],t[l],t[d],t[f])}return output.join("")},encodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(input):this.encodeByteArray(n(input),e)},decodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(input):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const c=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&c)}else if(o>239&&o<365){const u=((7&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{const c=e[r++],h=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&c)<<6|63&h)}}return t.join("")}(this.decodeStringToByteArray(input,e))},decodeStringToByteArray(input,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,output=[];for(let i=0;i<input.length;){const e=t[input.charAt(i++)],r=i<input.length?t[input.charAt(i)]:0;++i;const n=i<input.length?t[input.charAt(i)]:64;++i;const o=i<input.length?t[input.charAt(i)]:64;if(++i,null==e||null==r||null==n||null==o)throw Error();const c=e<<2|r>>4;if(output.push(c),64!==n){const e=r<<4&240|n>>2;if(output.push(e),64!==o){const e=n<<6&192|o;output.push(e)}}}return output},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},c=function(e){return function(e){const t=n(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},h=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function l(e,source){if(!(source instanceof Object))return source;switch(source.constructor){case Date:return new Date(source.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return source}for(const t in source)source.hasOwnProperty(t)&&"__proto__"!==t&&(e[t]=l(e[t],source[t]));return e}class d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function _(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function v(){return"object"==typeof self&&self.self===self}function E(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function y(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return"object"==typeof indexedDB}function O(){return new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class I extends Error{constructor(code,e,t){super(e),this.code=code,this.customData=t,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(code,...data){const e=data[0]||{},t=`${this.service}/${code}`,template=this.errors[code],r=template?function(template,data){return template.replace(A,((e,t)=>{const r=data[t];return null!=r?String(r):`<${t}?>`}))}(template,e):"Error",n=`${this.serviceName}: ${r} (${t}).`;return new I(t,n,e)}}const A=/\{\$([^}]+)}/g;function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(a,b){if(a===b)return!0;const e=Object.keys(a),t=Object.keys(b);for(const r of e){if(!t.includes(r))return!1;const e=a[r],n=b[r];if(j(e)&&j(n)){if(!L(e,n))return!1}else if(e!==n)return!1}for(const r of t)if(!e.includes(r))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}function T(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}})),t}function R(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function B(e,t){const r=new M(e,t);return r.subscribe.bind(r)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=$),void 0===n.error&&(n.error=$),void 0===n.complete&&(n.complete=$);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),o}unsubscribeOne(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(i,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[i])try{e(this.observers[i])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(){}function k(e){return e&&e._delegate?e._delegate:e}function F(e,t){return new Promise(((r,n)=>{e.onsuccess=e=>{r(e.target.result)},e.onerror=e=>{var r;n(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}}))}class x{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new H(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new z(this._db.createObjectStore(e,t))}close(){this._db.close()}}class H{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new z(this._transaction.objectStore(e))}}class z{constructor(e){this._store=e}index(e){return new V(this._store.index(e))}createIndex(e,t,r){return new V(this._store.createIndex(e,t,r))}get(e){return F(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return F(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return F(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return F(this._store.clear(),"Error clearing IndexedDB object store")}}class V{constructor(e){this._index=e}get(e){return F(this._index.get(e),"Error reading from IndexedDB")}}function U(e,t,r){return new Promise(((n,o)=>{try{const c=indexedDB.open(e,t);c.onsuccess=e=>{n(new x(e.target.result))},c.onerror=e=>{var t;o(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},c.onupgradeneeded=e=>{r(new x(c.result),e.oldVersion,e.newVersion,new H(c.transaction))}}catch(e){o(`Error opening indexedDB: ${e.message}`)}}))}}).call(this,r(54))},343:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var n=r(337);class o{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const c="[DEFAULT]";class h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(component){if(component.name!==this.name)throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=component,this.shouldAutoInitialize()){if(function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService({instanceIdentifier:c})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),o=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;o.add(e),this.onInitCallbacks.set(n,o);const c=this.instances.get(n);return c&&e(c,n),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===c?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:c:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(component){const e=this.getProvider(component.name);if(e.isComponentSet())throw new Error(`Component ${component.name} has already been registered with ${this.name}`);e.setComponent(component)}addOrOverwriteComponent(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},349:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(337),o=r(343),c=r(350),h=r(351);class l{constructor(e,t){this._delegate=e,this.firebase=t,Object(c._addComponent)(e,new o.a("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Object(c.deleteApp)(this._delegate))))}_getService(e,t=c._DEFAULT_ENTRY_NAME){var r;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=c._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(component){Object(c._addComponent)(this._delegate,component)}_addOrOverwriteComponent(component){Object(c._addOrOverwriteComponent)(this._delegate,component)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const d={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},f=new n.b("app-compat","Firebase",d);const m=function e(){const t=function(e){const t={},r={__esModule:!0,initializeApp:function(o,h={}){const l=c.initializeApp(o,h);if(Object(n.f)(t,l.name))return t[l.name];const d=new e(l,r);return t[l.name]=d,d},app:o,registerVersion:c.registerVersion,setLogLevel:c.setLogLevel,onLog:c.onLog,apps:null,SDK_VERSION:c.SDK_VERSION,INTERNAL:{registerComponent:function(component){const t=component.name,h=t.replace("-compat","");if(c._registerComponent(component)&&"PUBLIC"===component.type){const c=(e=o())=>{if("function"!=typeof e[h])throw f.create("invalid-app-argument",{appName:t});return e[h]()};void 0!==component.serviceProps&&Object(n.i)(c,component.serviceProps),r[h]=c,e.prototype[h]=function(...e){return this._getService.bind(this,t).apply(this,component.multipleInstances?e:[])}}return"PUBLIC"===component.type?r[h]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:c}};function o(e){if(e=e||c._DEFAULT_ENTRY_NAME,!Object(n.f)(t,e))throw f.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,r}(l);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(n.i)(t,e)},createSubscribe:n.g,ErrorFactory:n.b,deepExtend:n.i}),t}(),_=new h.b("@firebase/app-compat");if(Object(n.m)()&&void 0!==self.firebase){_.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&_.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=m;var E;Object(c.registerVersion)("@firebase/app-compat","0.1.21",E)},350:function(e,t,r){"use strict";r.r(t),r.d(t,"SDK_VERSION",(function(){return L})),r.d(t,"_DEFAULT_ENTRY_NAME",(function(){return m})),r.d(t,"_addComponent",(function(){return w})),r.d(t,"_addOrOverwriteComponent",(function(){return y})),r.d(t,"_apps",(function(){return v})),r.d(t,"_clearComponents",(function(){return S})),r.d(t,"_components",(function(){return E})),r.d(t,"_getProvider",(function(){return O})),r.d(t,"_registerComponent",(function(){return C})),r.d(t,"_removeServiceInstance",(function(){return I})),r.d(t,"deleteApp",(function(){return R})),r.d(t,"getApp",(function(){return T})),r.d(t,"getApps",(function(){return P})),r.d(t,"initializeApp",(function(){return j})),r.d(t,"onLog",(function(){return M})),r.d(t,"registerVersion",(function(){return B})),r.d(t,"setLogLevel",(function(){return $}));var n=r(343),o=r(351),c=r(337);r.d(t,"FirebaseError",(function(){return c.c}));class h{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const component=e.getComponent();return"VERSION"===(null==component?void 0:component.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const l="@firebase/app",d="0.7.20",f=new o.b("@firebase/app"),m="[DEFAULT]",_={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},v=new Map,E=new Map;function w(e,component){try{e.container.addComponent(component)}catch(t){f.debug(`Component ${component.name} failed to register with FirebaseApp ${e.name}`,t)}}function y(e,component){e.container.addOrOverwriteComponent(component)}function C(component){const e=component.name;if(E.has(e))return f.debug(`There were multiple attempts to register component ${e}.`),!1;E.set(e,component);for(const e of v.values())w(e,component);return!0}function O(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function I(e,t,r=m){O(e,t).clearInstance(r)}function S(){E.clear()}const A={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},D=new c.b("app","Firebase",A);class N{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.a("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}const L="9.6.10";function j(e,t={}){if("object"!=typeof t){t={name:t}}const r=Object.assign({name:m,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw D.create("bad-app-name",{appName:String(o)});const h=v.get(o);if(h){if(Object(c.h)(e,h.options)&&Object(c.h)(r,h.config))return h;throw D.create("duplicate-app",{appName:o})}const l=new n.b(o);for(const component of E.values())l.addComponent(component);const d=new N(e,r,l);return v.set(o,d),d}function T(e=m){const t=v.get(e);if(!t)throw D.create("no-app",{appName:e});return t}function P(){return Array.from(v.values())}async function R(e){const t=e.name;v.has(t)&&(v.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function B(e,t,r){var o;let c=null!==(o=_[e])&&void 0!==o?o:e;r&&(c+=`-${r}`);const h=c.match(/\s|\//),l=t.match(/\s|\//);if(h||l){const e=[`Unable to register library "${c}" with version "${t}":`];return h&&e.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&l&&e.push("and"),l&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void f.warn(e.join(" "))}C(new n.a(`${c}-version`,(()=>({library:c,version:t})),"VERSION"))}function M(e,t){if(null!==e&&"function"!=typeof e)throw D.create("invalid-log-argument");Object(o.d)(e,t)}function $(e){Object(o.c)(e)}const k="firebase-heartbeat-store";let F=null;function x(){return F||(F=Object(c.u)("firebase-heartbeat-database",1,((e,t)=>{if(0===t)e.createObjectStore(k)})).catch((e=>{throw D.create("storage-open",{originalErrorMessage:e.message})}))),F}async function H(e,t){try{const r=(await x()).transaction(k,"readwrite"),n=r.objectStore(k);return await n.put(t,z(e)),r.complete}catch(e){throw D.create("storage-set",{originalErrorMessage:e.message})}}function z(e){return`${e.name}!${e.options.appId}`}class V{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new W(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=U();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=U(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const o of e){const e=r.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),G(r)>t){e.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=Object(c.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function U(){return(new Date).toISOString().substring(0,10)}class W{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(c.q)()&&Object(c.x)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await x()).transaction(k).objectStore(k).get(z(e))}catch(e){throw D.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return Object(c.e)(JSON.stringify({version:2,heartbeats:e})).length}var Y;Y="",C(new n.a("platform-logger",(e=>new h(e)),"PRIVATE")),C(new n.a("heartbeat",(e=>new V(e)),"PRIVATE")),B(l,d,Y),B(l,d,"esm2017"),B("fire-js","")},351:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return _}));const n=[];var o;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));const c={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},h=o.INFO,l={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},d=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),o=l[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${n}]  ${e.name}:`,...r)};class f{constructor(e){this.name=e,this._logLevel=h,this._logHandler=d,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function m(e){n.forEach((t=>{t.setLogLevel(e)}))}function _(e,t){for(const r of n){let n=null;t&&t.level&&(n=c[t.level]),r.userLogHandler=null===e?null:(t,r,...c)=>{const h=c.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:o[r].toLowerCase(),message:h,args:c,type:t.name})}}}}}]);
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-V3smlL-h.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rd={exports:{}},Io={};var lx;function FS(){if(lx)return Io;lx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var cx;function IS(){return cx||(cx=1,Rd.exports=FS()),Rd.exports}var T=IS(),wd={exports:{}},ht={};var ux;function HS(){if(ux)return ht;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function _(U,ie,ge){this.props=U,this.context=ie,this.refs=y,this.updater=ge||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function D(){}D.prototype=_.prototype;function N(U,ie,ge){this.props=U,this.context=ie,this.refs=y,this.updater=ge||E}var P=N.prototype=new D;P.constructor=N,A(P,_.prototype),P.isPureReactComponent=!0;var F=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function R(U,ie,ge){var Ce=ge.ref;return{$$typeof:r,type:U,key:ie,ref:Ce!==void 0?Ce:null,props:ge}}function L(U,ie){return R(U.type,ie,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function ne(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ge){return ie[ge]})}var oe=/\/+/g;function me(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?ne(""+U.key):ie.toString(36)}function de(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,ie,ge,Ce,Be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(te){case"bigint":case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case r:case e:he=!0;break;case x:return he=U._init,B(he(U._payload),ie,ge,Ce,Be)}}if(he)return Be=Be(U),he=Ce===""?"."+me(U,0):Ce,F(Be)?(ge="",he!=null&&(ge=he.replace(oe,"$&/")+"/"),B(Be,ie,ge,"",function(Me){return Me})):Be!=null&&(k(Be)&&(Be=L(Be,ge+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(oe,"$&/")+"/")+he)),ie.push(Be)),1;he=0;var Le=Ce===""?".":Ce+":";if(F(U))for(var je=0;je<U.length;je++)Ce=U[je],te=Le+me(Ce,je),he+=B(Ce,ie,ge,te,Be);else if(je=M(U),typeof je=="function")for(U=je.call(U),je=0;!(Ce=U.next()).done;)Ce=Ce.value,te=Le+me(Ce,je++),he+=B(Ce,ie,ge,te,Be);else if(te==="object"){if(typeof U.then=="function")return B(de(U),ie,ge,Ce,Be);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(U,ie,ge){if(U==null)return U;var Ce=[],Be=0;return B(U,Ce,"","",function(te){return ie.call(ge,te,Be++)}),Ce}function $(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ge){(U._status===0||U._status===-1)&&(U._status=1,U._result=ge)},function(ge){(U._status===0||U._status===-1)&&(U._status=2,U._result=ge)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Ee=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:H,forEach:function(U,ie,ge){H(U,function(){ie.apply(this,arguments)},ge)},count:function(U){var ie=0;return H(U,function(){ie++}),ie},toArray:function(U){return H(U,function(ie){return ie})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ht.Activity=g,ht.Children=be,ht.Component=_,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=N,ht.StrictMode=s,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ht.cache=function(U){return function(){return U.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(U,ie,ge){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=A({},U.props),Be=U.key;if(ie!=null)for(te in ie.key!==void 0&&(Be=""+ie.key),ie)!Y.call(ie,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ie.ref===void 0||(Ce[te]=ie[te]);var te=arguments.length-2;if(te===1)Ce.children=ge;else if(1<te){for(var he=Array(te),Le=0;Le<te;Le++)he[Le]=arguments[Le+2];Ce.children=he}return R(U.type,Be,Ce)},ht.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ht.createElement=function(U,ie,ge){var Ce,Be={},te=null;if(ie!=null)for(Ce in ie.key!==void 0&&(te=""+ie.key),ie)Y.call(ie,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Be[Ce]=ie[Ce]);var he=arguments.length-2;if(he===1)Be.children=ge;else if(1<he){for(var Le=Array(he),je=0;je<he;je++)Le[je]=arguments[je+2];Be.children=Le}if(U&&U.defaultProps)for(Ce in he=U.defaultProps,he)Be[Ce]===void 0&&(Be[Ce]=he[Ce]);return R(U,te,Be)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:d,render:U}},ht.isValidElement=k,ht.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:$}},ht.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},ht.startTransition=function(U){var ie=z.T,ge={};z.T=ge;try{var Ce=U(),Be=z.S;Be!==null&&Be(ge,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(I,Ee)}catch(te){Ee(te)}finally{ie!==null&&ge.types!==null&&(ie.types=ge.types),z.T=ie}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(U){return z.H.use(U)},ht.useActionState=function(U,ie,ge){return z.H.useActionState(U,ie,ge)},ht.useCallback=function(U,ie){return z.H.useCallback(U,ie)},ht.useContext=function(U){return z.H.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U,ie){return z.H.useDeferredValue(U,ie)},ht.useEffect=function(U,ie){return z.H.useEffect(U,ie)},ht.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(U,ie,ge){return z.H.useImperativeHandle(U,ie,ge)},ht.useInsertionEffect=function(U,ie){return z.H.useInsertionEffect(U,ie)},ht.useLayoutEffect=function(U,ie){return z.H.useLayoutEffect(U,ie)},ht.useMemo=function(U,ie){return z.H.useMemo(U,ie)},ht.useOptimistic=function(U,ie){return z.H.useOptimistic(U,ie)},ht.useReducer=function(U,ie,ge){return z.H.useReducer(U,ie,ge)},ht.useRef=function(U){return z.H.useRef(U)},ht.useState=function(U){return z.H.useState(U)},ht.useSyncExternalStore=function(U,ie,ge){return z.H.useSyncExternalStore(U,ie,ge)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.4",ht}var fx;function dp(){return fx||(fx=1,wd.exports=HS()),wd.exports}var X=dp(),Cd={exports:{}},Ho={},Dd={exports:{}},Nd={};var dx;function GS(){return dx||(dx=1,(function(r){function e(B,H){var $=B.length;B.push(H);e:for(;0<$;){var Ee=$-1>>>1,be=B[Ee];if(0<l(be,H))B[Ee]=H,B[$]=be,$=Ee;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],$=B.pop();if($!==H){B[0]=$;e:for(var Ee=0,be=B.length,U=be>>>1;Ee<U;){var ie=2*(Ee+1)-1,ge=B[ie],Ce=ie+1,Be=B[Ce];if(0>l(ge,$))Ce<be&&0>l(Be,ge)?(B[Ee]=Be,B[Ce]=$,Ee=Ce):(B[Ee]=ge,B[ie]=$,Ee=ie);else if(Ce<be&&0>l(Be,$))B[Ee]=Be,B[Ce]=$,Ee=Ce;else break e}}return H}function l(B,H){var $=B.sortIndex-H.sortIndex;return $!==0?$:B.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],x=1,g=null,v=3,M=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=B)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(B){if(A=!1,P(B),!E)if(i(m)!==null)E=!0,I||(I=!0,ne());else{var H=i(p);H!==null&&de(F,H.startTime-B)}}var I=!1,z=-1,Y=5,R=-1;function L(){return y?!0:!(r.unstable_now()-R<Y)}function k(){if(y=!1,I){var B=r.unstable_now();R=B;var H=!0;try{e:{E=!1,A&&(A=!1,D(z),z=-1),M=!0;var $=v;try{t:{for(P(B),g=i(m);g!==null&&!(g.expirationTime>B&&L());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,v=g.priorityLevel;var be=Ee(g.expirationTime<=B);if(B=r.unstable_now(),typeof be=="function"){g.callback=be,P(B),H=!0;break t}g===i(m)&&s(m),P(B)}else s(m);g=i(m)}if(g!==null)H=!0;else{var U=i(p);U!==null&&de(F,U.startTime-B),H=!1}}break e}finally{g=null,v=$,M=!1}H=void 0}}finally{H?ne():I=!1}}}var ne;if(typeof N=="function")ne=function(){N(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=k,ne=function(){me.postMessage(null)}}else ne=function(){_(k,0)};function de(B,H){z=_(function(){B(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return B()}finally{v=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=v;v=B;try{return H()}finally{v=$}},r.unstable_scheduleCallback=function(B,H,$){var Ee=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Ee+$:Ee):$=Ee,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=$+be,B={id:x++,callback:H,priorityLevel:B,startTime:$,expirationTime:be,sortIndex:-1},$>Ee?(B.sortIndex=$,e(p,B),i(m)===null&&B===i(p)&&(A?(D(z),z=-1):A=!0,de(F,$-Ee))):(B.sortIndex=be,e(m,B),E||M||(E=!0,I||(I=!0,ne()))),B},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(B){var H=v;return function(){var $=v;v=H;try{return B.apply(this,arguments)}finally{v=$}}}})(Nd)),Nd}var hx;function VS(){return hx||(hx=1,Dd.exports=GS()),Dd.exports}var Ld={exports:{}},Nn={};var px;function kS(){if(px)return Nn;px=1;var r=dp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var mx;function jS(){if(mx)return Ld.exports;mx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=kS(),Ld.exports}var gx;function XS(){if(gx)return Ho;gx=1;var r=VS(),e=dp(),i=jS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,w=u.child;w;){if(w===a){S=!0,a=u,o=h;break}if(w===o){S=!0,o=u,a=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===a){S=!0,a=h,o=u;break}if(w===o){S=!0,o=h,a=u;break}w=w.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Ee=[],be=-1;function U(t){return{current:t}}function ie(t){0>be||(t.current=Ee[be],Ee[be]=null,be--)}function ge(t,n){be++,Ee[be]=t.current,t.current=n}var Ce=U(null),Be=U(null),te=U(null),he=U(null);function Le(t,n){switch(ge(te,n),ge(Be,t),ge(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Lg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ce),ge(Ce,t)}function je(){ie(Ce),ie(Be),ie(te)}function Me(t){t.memoizedState!==null&&ge(he,t);var n=Ce.current,a=Lg(n,t.type);n!==a&&(ge(Be,t),ge(Ce,a))}function Ke(t){Be.current===t&&(ie(Ce),ie(Be)),he.current===t&&(ie(he),Po._currentValue=$)}var lt,ct;function it(t){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+ct}var ot=!1;function st(t,n){if(!t||ot)return"";ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ce){var re=ce}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ce){re=ce}t.call(ye.prototype)}}else{try{throw Error()}catch(ce){re=ce}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var G=S.split(`
`),ee=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ee.length)for(o=G.length-1,u=ee.length-1;1<=o&&0<=u&&G[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ee[u]){var pe=`
`+G[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return t.child!==n&&n!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return it("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Vt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,_t=r.unstable_scheduleCallback,Je=r.unstable_cancelCallback,xe=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,fe=r.unstable_ImmediatePriority,ve=r.unstable_UserBlockingPriority,ue=r.unstable_NormalPriority,Ve=r.unstable_LowPriority,De=r.unstable_IdlePriority,Xe=r.log,nt=r.unstable_setDisableYieldValue,Ae=null,Re=null;function Oe(t){if(typeof Xe=="function"&&nt(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ae,t)}catch{}}var He=Math.clz32?Math.clz32:W,Ue=Math.log,mt=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ue(t)/mt|0)|0}var ze=256,we=262144,Ge=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Te(o):(S&=w,S!==0?u=Te(S):a||(a=w&~t,a!==0&&(u=Te(a))))):(w=o&~h,w!==0?u=Te(w):S!==0?u=Te(S):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,o,u,h){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-He(a),ye=1<<pe;w[pe]=0,G[pe]=-1;var re=ee[pe];if(re!==null)for(ee[pe]=null,pe=0;pe<re.length;pe++){var ce=re[pe];ce!==null&&(ce.lane&=-536870913)}a&=~ye}o!==0&&gl(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function gl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Fr(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:tx(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ai=Math.random().toString(36).slice(2),on="__reactFiber$"+ai,_n="__reactProps$"+ai,yi="__reactContainer$"+ai,Hr="__reactEvents$"+ai,Gr="__reactListeners$"+ai,xl="__reactHandles$"+ai,Zs="__reactResources$"+ai,or="__reactMarker$"+ai;function Ks(t){delete t[on],delete t[_n],delete t[Hr],delete t[Gr],delete t[xl]}function Aa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ig(t);t!==null;){if(a=t[on])return a;t=Ig(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wa(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[or]=!0}var Z=new Set,le={};function ae(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function We(t){return Ct.call(Fe,t)?!0:Ct.call(ke,t)?!1:Pe.test(t)?Fe[t]=!0:(ke[t]=!0,!1)}function Ye(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function tt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function $e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function dt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,h,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,S,at(n)):a!=null?Sn(t,S,at(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+at(w):t.removeAttribute("name")}function Wi(t,n,a,o,u,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Yt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Yt(t)}function Sn(t,n,a){n==="number"&&$e(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(de(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Yt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&En(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&En(t,h,n[h])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return P_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var bu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,jr=null;function Dp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Bt(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var Tu=!1;function Np(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var o=t(n);return o}finally{if(Tu=!1,(kr!==null||jr!==null)&&(rc(),kr&&(n=kr,t=jr,jr=kr=null,Dp(n),t)))for(n=0;n<t.length;n++)Dp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Yi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Au=!1}var Ca=null,Ru=null,_l=null;function Lp(){if(_l)return _l;var t,n=Ru,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Up(){return!1}function Hn(t){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Sl:Up,this.isPropagationStopped=Up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Hn(cr),$s=g({},cr,{view:0,detail:0}),B_=Hn($s),wu,Cu,eo,bl=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(wu=t.screenX-eo.screenX,Cu=t.screenY-eo.screenY):Cu=wu=0,eo=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Op=Hn(bl),z_=g({},bl,{dataTransfer:0}),F_=Hn(z_),I_=g({},$s,{relatedTarget:0}),Du=Hn(I_),H_=g({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=Hn(H_),V_=g({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k_=Hn(V_),j_=g({},cr,{data:0}),Pp=Hn(j_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=q_[t])?!!n[t]:!1}function Nu(){return Y_}var Z_=g({},$s,{key:function(t){if(t.key){var n=X_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=Hn(Z_),Q_=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Hn(Q_),J_=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),$_=Hn(J_),ey=g({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Hn(ey),ny=g({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Hn(ny),ay=g({},cr,{newState:0,oldState:0}),ry=Hn(ay),sy=[9,13,27,32],Lu=Yi&&"CompositionEvent"in window,to=null;Yi&&"documentMode"in document&&(to=document.documentMode);var oy=Yi&&"TextEvent"in window&&!to,zp=Yi&&(!Lu||to&&8<to&&11>=to),Fp=" ",Ip=!1;function Hp(t,n){switch(t){case"keyup":return sy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function ly(t,n){switch(t){case"compositionend":return Gp(n);case"keypress":return n.which!==32?null:(Ip=!0,Fp);case"textInput":return t=n.data,t===Fp&&Ip?null:t;default:return null}}function cy(t,n){if(Xr)return t==="compositionend"||!Lu&&Hp(t,n)?(t=Lp(),_l=Ru=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!uy[t.type]:n==="textarea"}function kp(t,n,a,o){kr?jr?jr.push(o):jr=[o]:kr=o,n=dc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function fy(t){Tg(t,0)}function El(t){var n=lr(t);if(Bt(n))return t}function jp(t,n){if(t==="change")return n}var Xp=!1;if(Yi){var Uu;if(Yi){var Ou="oninput"in document;if(!Ou){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Ou=typeof Wp.oninput=="function"}Uu=Ou}else Uu=!1;Xp=Uu&&(!document.documentMode||9<document.documentMode)}function qp(){no&&(no.detachEvent("onpropertychange",Yp),io=no=null)}function Yp(t){if(t.propertyName==="value"&&El(io)){var n=[];kp(n,io,t,Eu(t)),Np(fy,n)}}function dy(t,n,a){t==="focusin"?(qp(),no=n,io=a,no.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(io)}function py(t,n){if(t==="click")return El(n)}function my(t,n){if(t==="input"||t==="change")return El(n)}function gy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:gy;function ao(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ct.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$e(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$e(t.document)}return n}function Pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xy=Yi&&"documentMode"in document&&11>=document.documentMode,Wr=null,Bu=null,ro=null,zu=!1;function $p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||Wr==null||Wr!==$e(o)||(o=Wr,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=dc(Bu,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Wr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Fu={},em={};Yi&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function fr(t){if(Fu[t])return Fu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Fu[t]=n[a];return t}var tm=fr("animationend"),nm=fr("animationiteration"),im=fr("animationstart"),vy=fr("transitionrun"),_y=fr("transitionstart"),yy=fr("transitioncancel"),am=fr("transitionend"),rm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Mi(t,n){rm.set(t,n),ae(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Yr=0,Hu=0;function Al(){for(var t=Yr,n=Hu=Yr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var h=si[n];if(si[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&sm(a,u,h)}}function Rl(t,n,a,o){si[Yr++]=t,si[Yr++]=n,si[Yr++]=a,si[Yr++]=o,Hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gu(t,n,a,o){return Rl(t,n,a,o),wl(t)}function dr(t,n){return Rl(t,null,null,n),wl(t)}function sm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-He(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function wl(t){if(50<wo)throw wo=0,Qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function Sy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new Sy(t,n,a,o)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,h){var S=0;if(o=t,typeof t=="function")Vu(t)&&(S=1);else if(typeof t=="string")S=AS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=Zn(31,a,n,u),t.elementType=R,t.lanes=h,t;case A:return hr(a.children,u,h,n);case y:S=8,u|=24;break;case _:return t=Zn(12,a,n,u|2),t.elementType=_,t.lanes=h,t;case F:return t=Zn(13,a,n,u),t.elementType=F,t.lanes=h,t;case I:return t=Zn(19,a,n,u),t.elementType=I,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:S=10;break e;case D:S=9;break e;case P:S=11;break e;case z:S=14;break e;case Y:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function hr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function ku(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function lm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function ju(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},cm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Kr=[],Qr=0,Dl=null,so=0,li=[],ci=0,Da=null,Ui=1,Oi="";function Ki(t,n){Kr[Qr++]=so,Kr[Qr++]=Dl,Dl=t,so=n}function um(t,n,a){li[ci++]=Ui,li[ci++]=Oi,li[ci++]=Da,Da=t;var o=Ui;t=Oi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var h=32-He(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-He(n)+u|a<<u|o,Oi=h+t}else Ui=1<<h|a<<u|o,Oi=t}function Xu(t){t.return!==null&&(Ki(t,1),um(t,1,0))}function Wu(t){for(;t===Dl;)Dl=Kr[--Qr],Kr[Qr]=null,so=Kr[--Qr],Kr[Qr]=null;for(;t===Da;)Da=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null,Ui=li[--ci],li[ci]=null}function fm(t,n){li[ci++]=Ui,li[ci++]=Oi,li[ci++]=Da,Ui=n.id,Oi=n.overflow,Da=t}var Tn=null,Zt=null,Et=!1,Na=null,ui=!1,qu=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(oi(n,t)),qu}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[_n]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)St(Do[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Wi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Cg(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||La(t,!0)}function hm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!Et)return hm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&Zt&&La(t),hm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Fg(t)}else n===27?(n=Zt,Wa(t.type)?(t=xd,xd=null,Zt=t):Zt=n):Zt=Tn?di(t.stateNode.nextSibling):null;return!0}function pr(){Zt=Tn=null,Et=!1}function Yu(){var t=Na;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Na=null),t}function oo(t){Na===null?Na=[t]:Na.push(t)}var Zu=U(null),mr=null,Qi=null;function Ua(t,n,a){ge(Zu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Zu.current,ie(Zu)}function Ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Ku(h.return,a,t),o||(S=null);break e}h=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Ku(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function $r(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=u.type;Yn(u.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(u===he.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Qu(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return pm(mr,t)}function Ll(t,n){return mr===null&&gr(t),pm(t,n)}function pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var My=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},by=r.unstable_scheduleCallback,Ey=r.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new My,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&by(Ey,function(){t.controller.abort()})}var co=null,$u=0,es=0,ts=null;function Ty(t,n){if(co===null){var a=co=[];$u=0,es=id(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(mm,mm),n}function mm(){if(--$u===0&&co!==null){ts!==null&&(ts.status="fulfilled");var t=co;co=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ay(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=B.S;B.S=function(t,n){$0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ty(t,n),gm!==null&&gm(t,n)};var xr=U(null);function ef(){var t=xr.current;return t!==null?t:qt.pooledCache}function Ul(t,n){n===null?ge(xr,xr.current):ge(xr,n.pool)}function xm(){var t=ef();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(s(460)),tf=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw _r=n,ns}}function vr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_r=a,ns):a}}var _r=null;function ym(){if(_r===null)throw Error(s(459));var t=_r;return _r=null,t}function Sm(t){if(t===ns||t===Ol)throw Error(s(483))}var is=null,uo=0;function Bl(t){var n=uo;return uo+=1,is===null&&(is=[]),_m(is,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(K,j){if(t){var J=K.deletions;J===null?(K.deletions=[j],K.flags|=16):J.push(j)}}function a(K,j){if(!t)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Zi(K,j),K.index=0,K.sibling=null,K}function h(K,j,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<j?(K.flags|=67108866,j):J):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,j,J,_e){return j===null||j.tag!==6?(j=ku(J,K.mode,_e),j.return=K,j):(j=u(j,J),j.return=K,j)}function G(K,j,J,_e){var et=J.type;return et===A?pe(K,j,J.props.children,_e,J.key):j!==null&&(j.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Y&&vr(et)===j.type)?(j=u(j,J.props),fo(j,J),j.return=K,j):(j=Cl(J.type,J.key,J.props,null,K.mode,_e),fo(j,J),j.return=K,j)}function ee(K,j,J,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=ju(J,K.mode,_e),j.return=K,j):(j=u(j,J.children||[]),j.return=K,j)}function pe(K,j,J,_e,et){return j===null||j.tag!==7?(j=hr(J,K.mode,_e,et),j.return=K,j):(j=u(j,J),j.return=K,j)}function ye(K,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ku(""+j,K.mode,J),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return J=Cl(j.type,j.key,j.props,null,K.mode,J),fo(J,j),J.return=K,J;case E:return j=ju(j,K.mode,J),j.return=K,j;case Y:return j=vr(j),ye(K,j,J)}if(de(j)||ne(j))return j=hr(j,K.mode,J,null),j.return=K,j;if(typeof j.then=="function")return ye(K,Bl(j),J);if(j.$$typeof===N)return ye(K,Ll(K,j),J);zl(K,j)}return null}function re(K,j,J,_e){var et=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return et!==null?null:w(K,j,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===et?G(K,j,J,_e):null;case E:return J.key===et?ee(K,j,J,_e):null;case Y:return J=vr(J),re(K,j,J,_e)}if(de(J)||ne(J))return et!==null?null:pe(K,j,J,_e,null);if(typeof J.then=="function")return re(K,j,Bl(J),_e);if(J.$$typeof===N)return re(K,j,Ll(K,J),_e);zl(K,J)}return null}function ce(K,j,J,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(J)||null,w(j,K,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return K=K.get(_e.key===null?J:_e.key)||null,G(j,K,_e,et);case E:return K=K.get(_e.key===null?J:_e.key)||null,ee(j,K,_e,et);case Y:return _e=vr(_e),ce(K,j,J,_e,et)}if(de(_e)||ne(_e))return K=K.get(J)||null,pe(j,K,_e,et,null);if(typeof _e.then=="function")return ce(K,j,J,Bl(_e),et);if(_e.$$typeof===N)return ce(K,j,J,Ll(j,_e),et);zl(j,_e)}return null}function qe(K,j,J,_e){for(var et=null,Dt=null,Qe=j,gt=j=0,bt=null;Qe!==null&&gt<J.length;gt++){Qe.index>gt?(bt=Qe,Qe=null):bt=Qe.sibling;var Nt=re(K,Qe,J[gt],_e);if(Nt===null){Qe===null&&(Qe=bt);break}t&&Qe&&Nt.alternate===null&&n(K,Qe),j=h(Nt,j,gt),Dt===null?et=Nt:Dt.sibling=Nt,Dt=Nt,Qe=bt}if(gt===J.length)return a(K,Qe),Et&&Ki(K,gt),et;if(Qe===null){for(;gt<J.length;gt++)Qe=ye(K,J[gt],_e),Qe!==null&&(j=h(Qe,j,gt),Dt===null?et=Qe:Dt.sibling=Qe,Dt=Qe);return Et&&Ki(K,gt),et}for(Qe=o(Qe);gt<J.length;gt++)bt=ce(Qe,K,gt,J[gt],_e),bt!==null&&(t&&bt.alternate!==null&&Qe.delete(bt.key===null?gt:bt.key),j=h(bt,j,gt),Dt===null?et=bt:Dt.sibling=bt,Dt=bt);return t&&Qe.forEach(function(Qa){return n(K,Qa)}),Et&&Ki(K,gt),et}function rt(K,j,J,_e){if(J==null)throw Error(s(151));for(var et=null,Dt=null,Qe=j,gt=j=0,bt=null,Nt=J.next();Qe!==null&&!Nt.done;gt++,Nt=J.next()){Qe.index>gt?(bt=Qe,Qe=null):bt=Qe.sibling;var Qa=re(K,Qe,Nt.value,_e);if(Qa===null){Qe===null&&(Qe=bt);break}t&&Qe&&Qa.alternate===null&&n(K,Qe),j=h(Qa,j,gt),Dt===null?et=Qa:Dt.sibling=Qa,Dt=Qa,Qe=bt}if(Nt.done)return a(K,Qe),Et&&Ki(K,gt),et;if(Qe===null){for(;!Nt.done;gt++,Nt=J.next())Nt=ye(K,Nt.value,_e),Nt!==null&&(j=h(Nt,j,gt),Dt===null?et=Nt:Dt.sibling=Nt,Dt=Nt);return Et&&Ki(K,gt),et}for(Qe=o(Qe);!Nt.done;gt++,Nt=J.next())Nt=ce(Qe,K,gt,Nt.value,_e),Nt!==null&&(t&&Nt.alternate!==null&&Qe.delete(Nt.key===null?gt:Nt.key),j=h(Nt,j,gt),Dt===null?et=Nt:Dt.sibling=Nt,Dt=Nt);return t&&Qe.forEach(function(zS){return n(K,zS)}),Et&&Ki(K,gt),et}function Xt(K,j,J,_e){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var et=J.key;j!==null;){if(j.key===et){if(et=J.type,et===A){if(j.tag===7){a(K,j.sibling),_e=u(j,J.props.children),_e.return=K,K=_e;break e}}else if(j.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Y&&vr(et)===j.type){a(K,j.sibling),_e=u(j,J.props),fo(_e,J),_e.return=K,K=_e;break e}a(K,j);break}else n(K,j);j=j.sibling}J.type===A?(_e=hr(J.props.children,K.mode,_e,J.key),_e.return=K,K=_e):(_e=Cl(J.type,J.key,J.props,null,K.mode,_e),fo(_e,J),_e.return=K,K=_e)}return S(K);case E:e:{for(et=J.key;j!==null;){if(j.key===et)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){a(K,j.sibling),_e=u(j,J.children||[]),_e.return=K,K=_e;break e}else{a(K,j);break}else n(K,j);j=j.sibling}_e=ju(J,K.mode,_e),_e.return=K,K=_e}return S(K);case Y:return J=vr(J),Xt(K,j,J,_e)}if(de(J))return qe(K,j,J,_e);if(ne(J)){if(et=ne(J),typeof et!="function")throw Error(s(150));return J=et.call(J),rt(K,j,J,_e)}if(typeof J.then=="function")return Xt(K,j,Bl(J),_e);if(J.$$typeof===N)return Xt(K,j,Ll(K,J),_e);zl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,j!==null&&j.tag===6?(a(K,j.sibling),_e=u(j,J),_e.return=K,K=_e):(a(K,j),_e=ku(J,K.mode,_e),_e.return=K,K=_e),S(K)):a(K,j)}return function(K,j,J,_e){try{uo=0;var et=Xt(K,j,J,_e);return is=null,et}catch(Qe){if(Qe===ns||Qe===Ol)throw Qe;var Dt=Zn(29,Qe,null,K.mode);return Dt.lanes=_e,Dt.return=K,Dt}}}var yr=Mm(!0),bm=Mm(!1),Oa=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(t),sm(t,null,a),n}return Rl(t,o,n,a),wl(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}function rf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function po(){if(sf){var t=ts;if(t!==null)throw t}}function mo(t,n,a,o){sf=!1;var u=t.updateQueue;Oa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,ee=G.next;G.next=null,S===null?h=ee:S.next=ee,S=G;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,w=pe.lastBaseUpdate,w!==S&&(w===null?pe.firstBaseUpdate=ee:w.next=ee,pe.lastBaseUpdate=G))}if(h!==null){var ye=u.baseState;S=0,pe=ee=G=null,w=h;do{var re=w.lane&-536870913,ce=re!==w.lane;if(ce?(Mt&re)===re:(o&re)===re){re!==0&&re===es&&(sf=!0),pe!==null&&(pe=pe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var qe=t,rt=w;re=n;var Xt=a;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){ye=qe.call(Xt,ye,re);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,re=typeof qe=="function"?qe.call(Xt,ye,re):qe,re==null)break e;ye=g({},ye,re);break e;case 2:Oa=!0}}re=w.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pe===null?(ee=pe=ce,G=ye):pe=pe.next=ce,S|=re;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ce=w,w=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(G=ye),u.baseState=G,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,h===null&&(u.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=ye}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var as=U(null),Fl=U(0);function Am(t,n){t=oa,ge(Fl,t),ge(as,n),oa=t|n.baseLanes}function of(){ge(Fl,oa),ge(as,as.current)}function lf(){oa=Fl.current,ie(as),ie(Fl)}var Kn=U(null),fi=null;function za(t){var n=t.alternate;ge(an,an.current&1),ge(Kn,t),fi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(fi=t)}function cf(t){ge(an,an.current),ge(Kn,t),fi===null&&(fi=t)}function Rm(t){t.tag===22?(ge(an,an.current),ge(Kn,t),fi===null&&(fi=t)):Fa()}function Fa(){ge(an,an.current),ge(Kn,Kn.current)}function Qn(t){ie(Kn),fi===t&&(fi=null),ie(an)}var an=U(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,pt=null,kt=null,cn=null,Hl=!1,rs=!1,Sr=!1,Gl=0,go=0,ss=null,Ry=0;function en(){throw Error(s(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function ff(t,n,a,o,u,h){return $i=h,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?u0:Af,Sr=!1,h=a(o,u),Sr=!1,rs&&(h=Cm(n,a,o,u)),wm(t),h}function wm(t){B.H=_o;var n=kt!==null&&kt.next!==null;if($i=0,cn=kt=pt=null,Hl=!1,go=0,ss=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Nl(t)&&(un=!0))}function Cm(t,n,a,o){pt=t;var u=0;do{if(rs&&(ss=null),go=0,rs=!1,25<=u)throw Error(s(301));if(u+=1,cn=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=f0,h=n(a,o)}while(rs);return h}function wy(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(pt.flags|=1024),n}function df(){var t=Gl!==0;return Gl=0,t}function hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pf(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}$i=0,cn=kt=pt=null,rs=!1,go=Gl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pt.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=cn===null?pt.memoizedState:cn.next;if(n!==null)cn=n,kt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},cn===null?pt.memoizedState=cn=t:cn=cn.next=t}return cn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=go;return go+=1,ss===null&&(ss=[]),t=_m(ss,t,n),n=pt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?u0:Af),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===N)return An(t)}throw Error(s(438,String(t)))}function mf(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=L;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function jl(t){var n=rn();return gf(n,kt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var w=S=null,G=null,ee=n,pe=!1;do{var ye=ee.lane&-536870913;if(ye!==ee.lane?(Mt&ye)===ye:($i&ye)===ye){var re=ee.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ye===es&&(pe=!0);else if(($i&re)===re){ee=ee.next,re===es&&(pe=!0);continue}else ye={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(w=G=ye,S=h):G=G.next=ye,pt.lanes|=re,Ga|=re;ye=ee.action,Sr&&a(h,ye),h=ee.hasEagerState?ee.eagerState:a(h,ye)}else re={lane:ye,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(w=G=re,S=h):G=G.next=re,pt.lanes|=ye,Ga|=ye;ee=ee.next}while(ee!==null&&ee!==n);if(G===null?S=h:G.next=w,!Yn(h,t.memoizedState)&&(un=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=h,t.baseState=S,t.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);Yn(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Dm(t,n,a){var o=pt,u=rn(),h=Et;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((kt||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,yf(Um.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Lm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));h||($i&127)!==0||Nm(o,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Vl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Lm(t,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(t)}function Um(t,n,a){return a(function(){Om(n)&&Pm(t)})}function Om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Pm(t){var n=dr(t,2);n!==null&&Xn(n,t,2)}function vf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Sr){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Bm(t,n,a,o){return t.baseState=a,gf(t,kt,typeof o=="function"?o:ea)}function Cy(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,zm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function zm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,S={};B.T=S;try{var w=a(u,o),G=B.S;G!==null&&G(S,w),Fm(t,n,w)}catch(ee){_f(t,n,ee)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=a(u,o),Fm(t,n,h)}catch(ee){_f(t,n,ee)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(t,n,o)},function(o){return _f(t,n,o)}):Im(t,n,a)}function Im(t,n,a){n.status="fulfilled",n.value=a,Hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,zm(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}t.action=null}function Hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function Vm(t,n){if(Et){var a=qt.formState;if(a!==null){e:{var o=pt;if(Et){if(Zt){t:{for(var u=Zt,h=ui;u.nodeType!==8;){if(!h){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=o,a=o0.bind(null,pt,o),o.dispatch=a,o=vf(!1),h=Tf.bind(null,pt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Cy.bind(null,pt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function km(t){var n=rn();return jm(n,kt,t)}function jm(t,n,a){if(n=gf(t,n,Gm)[0],t=jl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(S){throw S===ns?Ol:S}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,os(9,{destroy:void 0},Dy.bind(null,u,a),null)),[o,h,t]}function Dy(t,n){t.action=n}function Xm(t){var n=rn(),a=kt;if(a!==null)return jm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Vl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return rn().memoizedState}function Xl(t,n,a,o){var u=Pn();pt.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;kt!==null&&o!==null&&uf(o,kt.memoizedState.deps)?u.memoizedState=os(n,h,a,o):(pt.flags|=t,u.memoizedState=os(1|n,h,a,o))}function qm(t,n){Xl(8390656,8,t,n)}function yf(t,n){Wl(2048,8,t,n)}function Ny(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Vl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=rn().memoizedState;return Ny({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return Wl(4,2,t,n)}function Km(t,n){return Wl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jm(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,Qm.bind(null,n,t),a)}function Sf(){}function $m(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function e0(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),Sr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||($i&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=tg(),pt.lanes|=t,Ga|=t,a)}function t0(t,n,a,o){return Yn(a,n)?a:as.current!==null?(t=Mf(t,a,o),Yn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(Mt&261930)===0?(un=!0,t.memoizedState=a):(t=tg(),pt.lanes|=t,Ga|=t,n)}function n0(t,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var S=B.T,w={};B.T=w,Tf(t,!1,n,a);try{var G=u(),ee=B.S;if(ee!==null&&ee(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pe=Ay(G,o);vo(t,n,pe,ei(t))}else vo(t,n,o,ei(t))}catch(ye){vo(t,n,{then:function(){},status:"rejected",reason:ye},ei())}finally{H.p=h,S!==null&&w.types!==null&&(S.types=w.types),B.T=S}}function Ly(){}function bf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=i0(t).queue;n0(t,u,n,$,a===null?Ly:function(){return a0(t),a(o)})}function i0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function a0(t){var n=i0(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ei())}function Ef(){return An(Po)}function r0(){return rn().memoizedState}function s0(){return rn().memoizedState}function Uy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Pa(a);var o=Ba(n,t,a);o!==null&&(Xn(o,n,a),ho(o,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function Oy(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?l0(n,a):(a=Gu(t,n,a,o),a!==null&&(Xn(a,t,o),c0(a,n,o)))}function o0(t,n,a){var o=ei();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))l0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,w=h(S,a);if(u.hasEagerState=!0,u.eagerState=w,Yn(w,S))return Rl(t,n,u,0),qt===null&&Al(),!1}catch{}if(a=Gu(t,n,u,o),a!==null)return Xn(a,t,o),c0(a,n,o),!0}return!1}function Tf(t,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=Gu(t,a,o,2),n!==null&&Xn(n,t,2)}function ql(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function l0(t,n){rs=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function c0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}var _o={readContext:An,use:kl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};_o.useEffectEvent=en;var u0={readContext:An,use:kl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Sr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(Sr){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Oy.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=vf(t);var n=t.queue,a=o0.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(t,n){var a=Pn();return Mf(a,t,n)},useTransition:function(){var t=vf(!1);return t=n0.bind(null,pt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Pn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(Mt&127)!==0||Nm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,qm(Um.bind(null,o,h,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Lm.bind(null,o,h,a,n),null),a},useId:function(){var t=Pn(),n=qt.identifierPrefix;if(Et){var a=Oi,o=Ui;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ry++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ef,useFormState:Vm,useActionState:Vm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:mf,useCacheRefresh:function(){return Pn().memoizedState=Uy.bind(null,pt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:An,use:kl,useCallback:$m,useContext:An,useEffect:yf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:jl,useRef:Wm,useState:function(){return jl(ea)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return t0(a,kt.memoizedState,t,n)},useTransition:function(){var t=jl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Dm,useId:r0,useHostTransitionStatus:Ef,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=rn();return Bm(a,kt,t,n)},useMemoCache:mf,useCacheRefresh:s0};Af.useEffectEvent=Ym;var f0={readContext:An,use:kl,useCallback:$m,useContext:An,useEffect:yf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:e0,useReducer:xf,useRef:Wm,useState:function(){return xf(ea)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=rn();return kt===null?Mf(a,t,n):t0(a,kt.memoizedState,t,n)},useTransition:function(){var t=xf(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Dm,useId:r0,useHostTransitionStatus:Ef,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=rn();return kt!==null?Bm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:s0};f0.useEffectEvent=Ym;function Rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Xn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Xn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Xn(n,t,a),ho(n,t,a))}};function d0(t,n,a,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,h):!0}function h0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function p0(t){Tl(t)}function m0(t){console.error(t)}function g0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function x0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function v0(t){return t=Pa(t),t.tag=3,t}function _0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){x0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){x0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Py(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?sc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(t,o,u)),!1}throw Error(s(435,a.tag))}return ed(t,o,u),sc(),!1}if(Et)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(t=Error(s(422),{cause:o}),oo(oi(t,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),oo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Cf(t.stateNode,o,u),rf(t,u),tn!==4&&(tn=2)),!1;var h=Error(s(520),{cause:o});if(h=oi(h,a),Ro===null?Ro=[h]:Ro.push(h),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cf(a.stateNode,o,t),rf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Va===null||!Va.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),_0(u,t,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?bm(n,null,a,o):yr(n,t.child,a,o)}function y0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return gr(n),o=ff(t,n,a,S,h,u),w=df(),t!==null&&!un?(hf(t,n,u),ta(t,n,u)):(Et&&w&&Xu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function S0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,M0(t,n,h,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Ff(t,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(S,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(h,o),t.ref=n.ref,t.return=n,n.child=t}function M0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(ao(h,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=h,Ff(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return Nf(t,n,a,o,u)}function b0(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return E0(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(n,h!==null?h.cachePool:null),h!==null?Am(n,h):of(),Rm(n);else return o=n.lanes=536870912,E0(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ul(n,h.cachePool),Am(n,h),Fa(),n.memoizedState=null):(t!==null&&Ul(n,null),of(),Fa());return Rn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(t,n,a,o,u){var h=ef();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Ul(n,null),of(),Rm(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function T0(t,n,a){return yr(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function By(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,yo(null,t);if(cf(n),(t=Zt)?(t=zg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ui,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Zl(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=T0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||$r(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=qt,o!==null&&(S=Fr(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,dr(t,S),Xn(o,t,S),Df;sc(),n=T0(t,n,a)}else t=h.treeContext,Zt=di(S.nextSibling),Tn=n,Et=!0,Na=null,ui=!1,t!==null&&fm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Nf(t,n,a,o,u){return gr(n),a=ff(t,n,a,o,void 0,u),o=df(),t!==null&&!un?(hf(t,n,u),ta(t,n,u)):(Et&&o&&Xu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function A0(t,n,a,o,u,h){return gr(n),n.updateQueue=null,a=Cm(n,o,a,u),wm(t),o=df(),t!==null&&!un?(hf(t,n,h),ta(t,n,h)):(Et&&o&&Xu(n),n.flags|=1,Rn(t,n,a,h),n.child)}function R0(t,n,a,o,u){if(gr(n),n.stateNode===null){var h=Zr,S=a.contextType;typeof S=="object"&&S!==null&&(h=An(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?An(S):Zr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Rf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&wf.enqueueReplaceState(h,h.state,null),mo(n,o,h,u),po(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,G=Mr(a,w);h.props=G;var ee=h.context,pe=a.contextType;S=Zr,typeof pe=="object"&&pe!==null&&(S=An(pe));var ye=a.getDerivedStateFromProps;pe=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ee!==S)&&h0(n,h,o,S),Oa=!1;var re=n.memoizedState;h.state=re,mo(n,o,h,u),po(),ee=n.memoizedState,w||re!==ee||Oa?(typeof ye=="function"&&(Rf(n,a,ye,o),ee=n.memoizedState),(G=Oa||d0(n,a,G,o,re,ee,S))?(pe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),h.props=o,h.state=ee,h.context=S,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(t,n),S=n.memoizedProps,pe=Mr(a,S),h.props=pe,ye=n.pendingProps,re=h.context,ee=a.contextType,G=Zr,typeof ee=="object"&&ee!==null&&(G=An(ee)),w=a.getDerivedStateFromProps,(ee=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==ye||re!==G)&&h0(n,h,o,G),Oa=!1,re=n.memoizedState,h.state=re,mo(n,o,h,u),po();var ce=n.memoizedState;S!==ye||re!==ce||Oa||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof w=="function"&&(Rf(n,a,w,o),ce=n.memoizedState),(pe=Oa||d0(n,a,pe,o,re,ce,G)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=G,o=pe):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Kl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=yr(n,t.child,null,u),n.child=yr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=ta(t,n,u),t}function w0(t,n,a,o){return pr(),n.flags|=256,Rn(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:xm()}}function Of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function C0(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?za(n):Fa(),(t=Zt)?(t=zg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ui,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw La(n);return gd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Fa(),u=n.mode,w=Ql({mode:"hidden",children:w},u),o=hr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,S,a),n.memoizedState=Lf,yo(null,o)):(za(n),Pf(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(h)n.flags&256?(za(n),n.flags&=-257,n=Bf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),w=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),w=hr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,yr(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,S,a),n.memoizedState=Lf,n=yo(null,o));else if(za(n),gd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(s(419)),o.stack="",o.digest=S,oo({value:o,source:null,stack:null}),n=Bf(t,n,a)}else if(un||$r(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=qt,S!==null&&(o=Fr(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,dr(t,o),Xn(S,t,o),Df;md(w)||sc(),n=Bf(t,n,a)}else md(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Zt=di(w.nextSibling),Tn=n,Et=!0,Na=null,ui=!1,t!==null&&fm(n,t),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Fa(),w=o.fallback,u=n.mode,G=t.child,ee=G.sibling,o=Zi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ee!==null?w=Zi(ee,w):(w=hr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,yo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Uf(a):(u=w.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=xm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Of(t,S,a),n.memoizedState=Lf,yo(t.child,o)):(za(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Pf(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Bf(t,n,a){return yr(n,t.child,null,a),t=Pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function D0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,a)}function zf(t,n,a,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function N0(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=an.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ge(an,S),Rn(t,n,o,a),o=Et?so:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&D0(t,a,n);else if(t.tag===19)D0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}zf(n,!0,a,null,h,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function zy(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Ua(n,ln,t.memoizedState.cache),pr();break;case 27:case 5:Me(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?C0(t,n,a):(za(n),t=ta(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return N0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(an,an.current),o)break;return null;case 22:return n.lanes=0,b0(t,n,a,n.pendingProps);case 24:Ua(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function L0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Ff(t,a)&&(n.flags&128)===0)return un=!1,zy(t,n,a);un=(t.flags&131072)!==0}else un=!1,Et&&(n.flags&1048576)!==0&&um(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vr(n.elementType),n.type=t,typeof t=="function")Vu(t)?(o=Mr(t,o),n.tag=1,n=R0(null,n,t,o,a)):(n.tag=0,n=Nf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=y0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=S0(null,n,t,o,a);break e}}throw n=me(t)||t,Error(s(306,n,""))}}return n;case 0:return Nf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Mr(o,n.pendingProps),R0(t,n,o,u,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,af(t,n),mo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ua(n,ln,o),o!==h.cache&&Qu(n,[ln],a,!0),po(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=w0(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),oo(u),n=w0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=di(t.firstChild),Tn=n,Et=!0,Na=null,ui=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pr(),o===u){n=ta(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=hc(te.current).createElement(a),o[on]=n,o[_n]=t,wn(o,a,t),C(o),n.stateNode=o):n.memoizedState=kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Me(n),t===null&&Et&&(o=n.stateNode=Hg(n.type,n.pendingProps,te.current),Tn=n,ui=!0,u=Zt,Wa(n.type)?(xd=u,Zt=di(o.firstChild)):Zt=u),Rn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Zt)&&(o=hS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Zt=di(o.firstChild),ui=!1,u=!0):u=!1),u||La(n)),Me(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,dd(u,h)?o=null:S!==null&&dd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(t,n,wy,null,null,a),Po._currentValue=u),Kl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Zt)&&(a=pS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Zt=null,t=!0):t=!1),t||La(n)),null;case 13:return C0(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=yr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return y0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return S0(t,n,n.type,n.pendingProps,a);case 15:return M0(t,n,n.type,n.pendingProps,a);case 19:return N0(t,n,a);case 31:return By(t,n,a);case 22:return b0(t,n,a,n.pendingProps);case 24:return gr(n),o=An(ln),t===null?(u=ef(),u===null&&(u=qt,h=Ju(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},nf(n),Ua(n,ln,u)):((t.lanes&a)!==0&&(af(t,n),mo(n,null,null,a),po()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,ln,o)):(o=h.cache,Ua(n,ln,o),o!==u.cache&&Qu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function If(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(rg())t.flags|=8192;else throw _r=Pl,tf}else t.flags&=-16777217}function U0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n))if(rg())t.flags|=8192;else throw _r=Pl,tf}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,fs|=n)}function So(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Fy(t,n,a){var o=n.pendingProps;switch(Wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),Kt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(na(n),h!==null?(Kt(n),U0(n,h)):(Kt(n),If(n,u,null,o,a))):h?h!==t.memoizedState?(na(n),Kt(n),U0(n,h)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Kt(n),If(n,u,t,o,a)),null;case 27:if(Ke(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ce.current,Jr(n)?dm(n):(t=Hg(u,o,a),n.stateNode=t,na(n))}return Kt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(h=Ce.current,Jr(n))dm(n);else{var S=hc(te.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[on]=n,h[_n]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(wn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Kt(n),If(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=te.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Cg(t.nodeValue,a)),t||La(n,!0)}else t=hc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Kt(n),null);case 4:return je(),t===null&&od(n.stateNode.containerInfo),Kt(n),null;case 10:return Ji(n.type),Kt(n),null;case 19:if(ie(an),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)So(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Il(t),h!==null){for(n.flags|=128,So(o,!1),t=h.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return ge(an,an.current&1|2),Et&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ic&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Et)return Kt(n),null}else 2*b()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,ge(an,u?a&1|2:a&1),Et&&Ki(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return Qn(n),lf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(xr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Iy(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(an),null;case 4:return je(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),lf(),t!==null&&ie(xr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function O0(t,n){switch(Wu(n),n.tag){case 3:Ji(ln),je();break;case 26:case 27:case 5:Ke(n);break;case 4:je();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ie(an);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),lf(),t!==null&&ie(xr);break;case 24:Ji(ln)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(w){Ht(n,n.return,w)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var G=a,ee=w;try{ee()}catch(pe){Ht(u,G,pe)}}}o=o.next}while(o!==h)}}catch(pe){Ht(n,n.return,pe)}}function P0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tm(n,a)}catch(o){Ht(t,t.return,o)}}}function B0(t,n,a){a.props=Mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function z0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Hf(t,n,a){try{var o=t.stateNode;oS(o,t.type,a,n),o[_n]=n}catch(u){Ht(t,t.return,u)}}function F0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Vf(t,n,a),t=t.sibling;t!==null;)Vf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function I0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=t,n[_n]=a}catch(h){Ht(t,t.return,h)}}var ia=!1,fn=!1,kf=!1,H0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Hy(t,n){if(t=t.containerInfo,ud=yc,t=Jp(t),Pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var S=0,w=-1,G=-1,ee=0,pe=0,ye=t,re=null;t:for(;;){for(var ce;ye!==a||u!==0&&ye.nodeType!==3||(w=S+u),ye!==h||o!==0&&ye.nodeType!==3||(G=S+o),ye.nodeType===3&&(S+=ye.nodeValue.length),(ce=ye.firstChild)!==null;)re=ye,ye=ce;for(;;){if(ye===t)break t;if(re===a&&++ee===u&&(w=S),re===h&&++pe===o&&(G=S),(ce=ye.nextSibling)!==null)break;ye=re,re=ye.parentNode}ye=ce}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:t,selectionRange:a},yc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qe=Mr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Ht(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function G0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),o&4&&Mo(5,a);break;case 1:if(ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ht(a,a.return,S)}else{var u=Mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(a,a.return,S)}}o&64&&P0(a),o&512&&bo(a,a.return);break;case 3:if(ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(t,n)}catch(S){Ht(a,a.return,S)}}break;case 27:n===null&&o&4&&I0(a);case 26:case 5:ra(t,a),n===null&&o&4&&z0(a),o&512&&bo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),o&4&&j0(t,a);break;case 13:ra(t,a),o&4&&X0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Zy.bind(null,a),mS(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var h=fn;ia=o,(fn=n)&&!h?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=h}break;case 30:break;default:ra(t,a)}}function V0(t){var n=t.alternate;n!==null&&(t.alternate=null,V0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)k0(t,n,a),a=a.sibling}function k0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Jt,u=Gn;Wa(a.type)&&(Jt=a.stateNode,Gn=!1),aa(t,n,a),Lo(a.stateNode),Jt=o,Gn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Jt,u=Gn,Jt=null,aa(t,n,a),Jt=o,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(h){Ht(a,n,h)}else try{Jt.removeChild(a.stateNode)}catch(h){Ht(a,n,h)}break;case 18:Jt!==null&&(Gn?(t=Jt,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_s(t)):Pg(Jt,a.stateNode));break;case 4:o=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),Jt=o,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),aa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&B0(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(a){Ht(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(a){Ht(n,n.return,a)}}function Gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new H0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new H0),n;default:throw Error(s(435,t.tag))}}function ec(t,n){var a=Gy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ky.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Wa(w.type)){Jt=w.stateNode,Gn=!1;break e}break;case 5:Jt=w.stateNode,Gn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,Gn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));k0(h,S,u),Jt=null,Gn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,t),n=n.sibling}var bi=null;function W0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ia(3,t,t.return),Mo(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[or]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),wn(h,o,a),h[on]=t,C(h),o=h;break e;case"link":var S=Wg("link","href",u).get(o+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Wg("meta","content",u).get(o+(a.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=t,C(h),o=h}t.stateNode=o}else qg(u,t.type,t.stateNode);else t.stateNode=Xg(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?qg(u,t.type,t.stateNode):Xg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&Hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(qe){Ht(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Hf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(gc=null,u=bi,bi=pc(n.containerInfo),Vn(n,t),bi=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}kf&&(kf=!1,q0(t));break;case 4:o=bi,bi=pc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ee=ia,pe=fn;if(ia=ee||u,fn=pe||G,Vn(n,t),fn=pe,ia=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ia||fn||br(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=G.stateNode;var ye=G.memoizedProps.style,re=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(qe){Ht(G,G.return,qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){Ht(G,G.return,qe)}}}else if(n.tag===18){if(a===null){G=n;try{var ce=G.stateNode;u?Bg(ce,!0):Bg(G.stateNode,!1)}catch(qe){Ht(G,G.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(F0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Gf(t);$l(t,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(hn(S,""),a.flags&=-33);var w=Gf(t);$l(t,w,S);break;case 3:case 4:var G=a.stateNode.containerInfo,ee=Gf(t);Vf(t,ee,G);break;default:throw Error(s(161))}}catch(pe){Ht(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(t,n.alternate,n),n=n.sibling}function br(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),br(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&B0(n,n.return,a),br(n);break;case 27:Lo(n.stateNode);case 26:case 5:Pi(n,n.return),br(n);break;case 22:n.memoizedState===null&&br(n);break;case 30:br(n);break;default:br(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:sa(u,h,a),Mo(4,h);break;case 1:if(sa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ht(o,o.return,ee)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Em(G[u],w)}catch(ee){Ht(o,o.return,ee)}}a&&S&64&&P0(h),bo(h,h.return);break;case 27:I0(h);case 26:case 5:sa(u,h,a),a&&o===null&&S&4&&z0(h),bo(h,h.return);break;case 12:sa(u,h,a);break;case 31:sa(u,h,a),a&&S&4&&j0(u,h);break;case 13:sa(u,h,a),a&&S&4&&X0(u,h);break;case 22:h.memoizedState===null&&sa(u,h,a),bo(h,h.return);break;case 30:break;default:sa(u,h,a)}n=n.sibling}}function jf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function Xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(t,n,a,o),n=n.sibling}function Y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Mo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Ht(n,n.return,G)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Ei(t,n,a,o):Eo(t,n):h._visibility&2?Ei(t,n,a,o):(h._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jf(S,n);break;case 24:Ei(t,n,a,o),u&2048&&Xf(n.alternate,n);break;default:Ei(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,w=a,G=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:ls(h,S,w,G,u),Mo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?ls(h,S,w,G,u):Eo(h,S):(pe._visibility|=2,ls(h,S,w,G,u)),u&&ee&2048&&jf(S.alternate,S);break;case 24:ls(h,S,w,G,u),u&&ee&2048&&Xf(S.alternate,S);break;default:ls(h,S,w,G,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&jf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Xf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function cs(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Z0(t,n,a),t=t.sibling}function Z0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&To&&t.memoizedState!==null&&RS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=bi;bi=pc(t.stateNode.containerInfo),cs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,cs(t,n,a),To=o):cs(t,n,a));break;default:cs(t,n,a)}}function K0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,J0(o,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Ao(t);break;default:Ao(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,J0(o,t)}K0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function J0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(V0(o),o===a){xn=null;break e}if(u!==null){u.return=h,xn=u;break e}xn=h}}}var Vy={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},ky=typeof WeakMap=="function"?WeakMap:Map,Pt=0,qt=null,yt=null,Mt=0,It=0,Jn=null,Ha=!1,us=!1,Wf=!1,oa=0,tn=0,Ga=0,Er=0,qf=0,$n=0,fs=0,Ro=null,jn=null,Yf=!1,nc=0,$0=0,ic=1/0,ac=null,Va=null,pn=0,ka=null,ds=null,la=0,Zf=0,Kf=null,eg=null,wo=0,Qf=null;function ei(){return(Pt&2)!==0&&Mt!==0?Mt&-Mt:B.T!==null?id():Ys()}function tg(){if($n===0)if((Mt&536870912)===0||Et){var t=we;we<<=1,(we&3932160)===0&&(we=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===qt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ja(t,Mt,$n,!1)),Dn(t,a),((Pt&2)===0||t!==qt)&&(t===qt&&((Pt&2)===0&&(Er|=a),tn===4&&ja(t,Mt,$n,!1)),Bi(t))}function ng(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?Wy(t,n):$f(t,n,!0),h=o;do{if(u===0){us&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!jy(a)){u=$f(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;u=Ro;var G=w.current.memoizedState.isDehydrated;if(G&&(hs(w,S).flags|=256),S=$f(w,S,!1),S!==2){if(Wf&&!G){w.errorRecoveryDisabledLanes|=h,Er|=h,u=4;break e}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){hs(t,0),ja(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,$n,!Ha);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-b(),10<u)){if(ja(o,n,$n,!Ha),Se(o,0,!0)!==0)break e;la=n,o.timeoutHandle=Ug(ig.bind(null,o,a,jn,ac,Yf,n,$n,Er,fs,Ha,h,"Throttled",-0,0),u);break e}ig(o,a,jn,ac,Yf,n,$n,Er,fs,Ha,h,null,-0,0)}}break}while(!0);Bi(t)}function ig(t,n,a,o,u,h,S,w,G,ee,pe,ye,re,ce){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},Z0(n,h,ye);var qe=(h&62914560)===h?nc-b():(h&4194048)===h?$0-b():0;if(qe=wS(ye,qe),qe!==null){la=h,t.cancelPendingCommit=qe(fg.bind(null,t,n,h,a,o,u,S,w,G,pe,ye,null,re,ce)),ja(t,h,S,!ee);return}}fg(t,n,h,a,o,u,S,w,G)}function jy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~qf,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-He(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&gl(t,a,n)}function rc(){return(Pt&6)===0?(Co(0),!1):!0}function Jf(){if(yt!==null){if(It===0)var t=yt.return;else t=yt,Qi=mr=null,pf(t),is=null,uo=0,t=yt;for(;t!==null;)O0(t.alternate,t),t=t.return;yt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Jf(),qt=t,yt=a=Zi(t.current,null),Mt=n,It=0,Jn=null,Ha=!1,us=Ne(t,n),Wf=!1,fs=$n=qf=Er=Ga=tn=0,jn=Ro=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),h=1<<u;n|=t[u],o&=~h}return oa=n,Al(),a}function ag(t,n){pt=null,B.H=_o,n===ns||n===Ol?(n=ym(),It=3):n===tf?(n=ym(),It=4):It=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,yt===null&&(tn=1,Yl(t,oi(n,t.current)))}function rg(){var t=Kn.current;return t===null?!0:(Mt&4194048)===Mt?fi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===fi:!1}function sg(){var t=B.H;return B.H=_o,t===null?_o:t}function og(){var t=B.A;return B.A=Vy,t}function sc(){tn=4,Ha||(Mt&4194048)!==Mt&&Kn.current!==null||(us=!0),(Ga&134217727)===0&&(Er&134217727)===0||qt===null||ja(qt,Mt,$n,!1)}function $f(t,n,a){var o=Pt;Pt|=2;var u=sg(),h=og();(qt!==t||Mt!==n)&&(ac=null,hs(t,n)),n=!1;var S=tn;e:do try{if(It!==0&&yt!==null){var w=yt,G=Jn;switch(It){case 8:Jf(),S=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var ee=It;if(It=0,Jn=null,ps(t,w,G,ee),a&&us){S=0;break e}break;default:ee=It,It=0,Jn=null,ps(t,w,G,ee)}}Xy(),S=tn;break}catch(pe){ag(t,pe)}while(!0);return n&&t.shellSuspendCounter++,Qi=mr=null,Pt=o,B.H=u,B.A=h,yt===null&&(qt=null,Mt=0,Al()),S}function Xy(){for(;yt!==null;)lg(yt)}function Wy(t,n){var a=Pt;Pt|=2;var o=sg(),u=og();qt!==t||Mt!==n?(ac=null,ic=b()+500,hs(t,n)):us=Ne(t,n);e:do try{if(It!==0&&yt!==null){n=yt;var h=Jn;t:switch(It){case 1:It=0,Jn=null,ps(t,n,h,1);break;case 2:case 9:if(vm(h)){It=0,Jn=null,cg(n);break}n=function(){It!==2&&It!==9||qt!==t||(It=7),Bi(t)},h.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:vm(h)?(It=0,Jn=null,cg(n)):(It=0,Jn=null,ps(t,n,h,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var w=yt;if(S?Yg(S):w.stateNode.complete){It=0,Jn=null;var G=w.sibling;if(G!==null)yt=G;else{var ee=w.return;ee!==null?(yt=ee,oc(ee)):yt=null}break t}}It=0,Jn=null,ps(t,n,h,5);break;case 6:It=0,Jn=null,ps(t,n,h,6);break;case 8:Jf(),tn=6;break e;default:throw Error(s(462))}}qy();break}catch(pe){ag(t,pe)}while(!0);return Qi=mr=null,B.H=o,B.A=u,Pt=a,yt!==null?0:(qt=null,Mt=0,Al(),tn)}function qy(){for(;yt!==null&&!xe();)lg(yt)}function lg(t){var n=L0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?oc(t):yt=n}function cg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=A0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=A0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:pf(n);default:O0(a,n),n=yt=om(n,oa),n=L0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?oc(t):yt=n}function ps(t,n,a,o){Qi=mr=null,pf(n),is=null,uo=0;var u=n.return;try{if(Py(t,u,n,a,Mt)){tn=1,Yl(t,oi(a,t.current)),yt=null;return}}catch(h){if(u!==null)throw yt=u,h;tn=1,Yl(t,oi(a,t.current)),yt=null;return}n.flags&32768?(Et||o===1?t=!0:us||(Mt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){ug(n,Ha);return}t=n.return;var a=Fy(n.alternate,n,oa);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);tn===0&&(tn=5)}function ug(t,n){do{var a=Iy(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);tn=6,yt=null}function fg(t,n,a,o,u,h,S,w,G){t.cancelPendingCommit=null;do lc();while(pn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Hu,_i(t,a,h,S,w,G),t===qt&&(yt=qt=null,Mt=0),ds=n,ka=t,la=a,Zf=h,Kf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qy(ue,function(){return gg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,S=Pt,Pt|=4;try{Hy(t,n,a)}finally{Pt=S,H.p=u,B.T=o}}pn=1,dg(),hg(),pg()}}function dg(){if(pn===1){pn=0;var t=ka,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{W0(n,t);var h=fd,S=Jp(t.containerInfo),w=h.focusedElem,G=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&Qp(w.ownerDocument.documentElement,w)){if(G!==null&&Pu(w)){var ee=G.start,pe=G.end;if(pe===void 0&&(pe=ee),"selectionStart"in w)w.selectionStart=ee,w.selectionEnd=Math.min(pe,w.value.length);else{var ye=w.ownerDocument||document,re=ye&&ye.defaultView||window;if(re.getSelection){var ce=re.getSelection(),qe=w.textContent.length,rt=Math.min(G.start,qe),Xt=G.end===void 0?rt:Math.min(G.end,qe);!ce.extend&&rt>Xt&&(S=Xt,Xt=rt,rt=S);var K=Kp(w,rt),j=Kp(w,Xt);if(K&&j&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var J=ye.createRange();J.setStart(K.node,K.offset),ce.removeAllRanges(),rt>Xt?(ce.addRange(J),ce.extend(j.node,j.offset)):(J.setEnd(j.node,j.offset),ce.addRange(J))}}}}for(ye=[],ce=w;ce=ce.parentNode;)ce.nodeType===1&&ye.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var _e=ye[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}yc=!!ud,fd=ud=null}finally{Pt=u,H.p=o,B.T=a}}t.current=n,pn=2}}function hg(){if(pn===2){pn=0;var t=ka,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{G0(t,n.alternate,n)}finally{Pt=u,H.p=o,B.T=a}}pn=3}}function pg(){if(pn===4||pn===3){pn=0,O();var t=ka,n=ds,a=la,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ds=ka=null,mg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Ir(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var w=o[S];h(w.value,{componentStack:w.stack})}}finally{B.T=n,H.p=u}}(la&3)!==0&&lc(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qf?wo++:(wo=0,Qf=t):wo=0,Co(0)}}function mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function lc(){return dg(),hg(),pg(),gg()}function gg(){if(pn!==5)return!1;var t=ka,n=Zf;Zf=0;var a=Ir(la),o=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=Kf,Kf=null;var h=ka,S=la;if(pn=0,ds=ka=null,la=0,(Pt&6)!==0)throw Error(s(331));var w=Pt;if(Pt|=4,Q0(h.current),Y0(h,h.current,S,a),Pt=w,Co(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{H.p=u,B.T=o,mg(t,n)}}function xg(t,n,a){n=oi(a,n),n=Cf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Dn(t,2),Bi(t))}function Ht(t,n,a){if(t.tag===3)xg(t,t,a);else for(;n!==null;){if(n.tag===3){xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=oi(a,t),a=v0(2),o=Ba(n,a,2),o!==null&&(_0(a,o,n,t),Dn(o,2),Bi(o));break}}n=n.return}}function ed(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ky;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Wf=!0,u.add(a),t=Yy.bind(null,t,n,a),n.then(t,t))}function Yy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(Mt&a)===a&&(tn===4||tn===3&&(Mt&62914560)===Mt&&300>b()-nc?(Pt&2)===0&&hs(t,0):qf|=a,fs===Mt&&(fs=0)),Bi(t)}function vg(t,n){n===0&&(n=zt()),t=dr(t,n),t!==null&&(Dn(t,n),Bi(t))}function Zy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(t,a)}function Ky(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),vg(t,a)}function Qy(t,n){return _t(t,n)}var cc=null,ms=null,td=!1,uc=!1,nd=!1,Xa=0;function Bi(t){t!==ms&&t.next===null&&(ms===null?cc=ms=t:ms=ms.next=t),uc=!0,td||(td=!0,$y())}function Co(t,n){if(!nd&&uc){nd=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-He(42|t)+1)-1,h&=u&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Mg(o,h))}else h=Mt,h=Se(o,o===qt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ne(o,h)||(a=!0,Mg(o,h));o=o.next}while(a);nd=!1}}function Jy(){_g()}function _g(){uc=td=!1;var t=0;Xa!==0&&cS()&&(t=Xa);for(var n=b(),a=null,o=cc;o!==null;){var u=o.next,h=yg(o,n);h===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(h&3)!==0)&&(uc=!0)),o=u}pn!==0&&pn!==5||Co(t),Xa!==0&&(Xa=0)}function yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-He(h),w=1<<S,G=u[S];G===-1?((w&a)===0||(w&o)!==0)&&(u[S]=ut(w,n)):G<=n&&(t.expiredLanes|=w),h&=~w}if(n=qt,a=Mt,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Je(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Je(o),Ir(a)){case 2:case 8:a=ve;break;case 32:a=ue;break;case 268435456:a=De;break;default:a=ue}return o=Sg.bind(null,t),a=_t(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Je(o),t.callbackPriority=2,t.callbackNode=null,2}function Sg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=Mt;return o=Se(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ng(t,o,n),yg(t,b()),t.callbackNode!=null&&t.callbackNode===a?Sg.bind(null,t):null)}function Mg(t,n){if(lc())return null;ng(t,n,!0)}function $y(){fS(function(){(Pt&6)!==0?_t(fe,Jy):_g()})}function id(){if(Xa===0){var t=es;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Xa=t}return Xa}function bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function Eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function eS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=bg((u[_n]||null).action),S=o.submitter;S&&(n=(n=S[_n]||null)?bg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var w=new Ml("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var G=S?Eg(u,S):new FormData(u);bf(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(w.preventDefault(),G=S?Eg(u,S):new FormData(u),bf(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var ad=0;ad<Iu.length;ad++){var rd=Iu[ad],tS=rd.toLowerCase(),nS=rd[0].toUpperCase()+rd.slice(1);Mi(tS,"on"+nS)}Mi(tm,"onAnimationEnd"),Mi(nm,"onAnimationIteration"),Mi(im,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(vy,"onTransitionRun"),Mi(_y,"onTransitionStart"),Mi(yy,"onTransitionCancel"),Mi(am,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function Tg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],G=w.instance,ee=w.currentTarget;if(w=w.listener,G!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(pe){Tl(pe)}u.currentTarget=null,h=G}else for(S=0;S<o.length;S++){if(w=o[S],G=w.instance,ee=w.currentTarget,w=w.listener,G!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(pe){Tl(pe)}u.currentTarget=null,h=G}}}}function St(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(Ag(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),Ag(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function od(t){if(!t[fc]){t[fc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,sd("selectionchange",!1,n))}}function Ag(t,n,a,o){switch(tx(n)){case 2:var u=NS;break;case 8:u=LS;break;default:u=Md}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ld(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=Aa(w),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=h=S;continue e}w=w.parentNode}}o=o.return}Np(function(){var ee=h,pe=Eu(a),ye=[];e:{var re=rm.get(t);if(re!==void 0){var ce=Ml,qe=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":ce=K_;break;case"focusin":qe="focus",ce=Du;break;case"focusout":qe="blur",ce=Du;break;case"beforeblur":case"afterblur":ce=Du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=F_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=$_;break;case tm:case nm:case im:ce=G_;break;case am:ce=ty;break;case"scroll":case"scrollend":ce=B_;break;case"wheel":ce=iy;break;case"copy":case"cut":case"paste":ce=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Bp;break;case"toggle":case"beforetoggle":ce=ry}var rt=(n&4)!==0,Xt=!rt&&(t==="scroll"||t==="scrollend"),K=rt?re!==null?re+"Capture":null:re;rt=[];for(var j=ee,J;j!==null;){var _e=j;if(J=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||J===null||K===null||(_e=Qs(j,K),_e!=null&&rt.push(No(j,_e,J))),Xt)break;j=j.return}0<rt.length&&(re=new ce(re,qe,null,a,pe),ye.push({event:re,listeners:rt}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==bu&&(qe=a.relatedTarget||a.fromElement)&&(Aa(qe)||qe[yi]))break e;if((ce||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=ee,qe=qe?Aa(qe):null,qe!==null&&(Xt=c(qe),rt=qe.tag,qe!==Xt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(ce=null,qe=ee),ce!==qe)){if(rt=Op,_e="onMouseLeave",K="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Bp,_e="onPointerLeave",K="onPointerEnter",j="pointer"),Xt=ce==null?re:lr(ce),J=qe==null?re:lr(qe),re=new rt(_e,j+"leave",ce,a,pe),re.target=Xt,re.relatedTarget=J,_e=null,Aa(pe)===ee&&(rt=new rt(K,j+"enter",qe,a,pe),rt.target=J,rt.relatedTarget=Xt,_e=rt),Xt=_e,ce&&qe)t:{for(rt=aS,K=ce,j=qe,J=0,_e=K;_e;_e=rt(_e))J++;_e=0;for(var et=j;et;et=rt(et))_e++;for(;0<J-_e;)K=rt(K),J--;for(;0<_e-J;)j=rt(j),_e--;for(;J--;){if(K===j||j!==null&&K===j.alternate){rt=K;break t}K=rt(K),j=rt(j)}rt=null}else rt=null;ce!==null&&Rg(ye,re,ce,rt,!1),qe!==null&&Xt!==null&&Rg(ye,Xt,qe,rt,!0)}}e:{if(re=ee?lr(ee):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Dt=jp;else if(Vp(re))if(Xp)Dt=my;else{Dt=hy;var Qe=dy}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Si(ee.elementType)&&(Dt=jp):Dt=py;if(Dt&&(Dt=Dt(t,ee))){kp(ye,Dt,a,pe);break e}Qe&&Qe(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&Sn(re,"number",re.value)}switch(Qe=ee?lr(ee):window,t){case"focusin":(Vp(Qe)||Qe.contentEditable==="true")&&(Wr=Qe,Bu=ee,ro=null);break;case"focusout":ro=Bu=Wr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,$p(ye,a,pe);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":$p(ye,a,pe)}var gt;if(Lu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Xr?Hp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(zp&&a.locale!=="ko"&&(Xr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Xr&&(gt=Lp()):(Ca=pe,Ru="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),Qe=dc(ee,bt),0<Qe.length&&(bt=new Pp(bt,t,null,a,pe),ye.push({event:bt,listeners:Qe}),gt?bt.data=gt:(gt=Gp(a),gt!==null&&(bt.data=gt)))),(gt=oy?ly(t,a):cy(t,a))&&(bt=dc(ee,"onBeforeInput"),0<bt.length&&(Qe=new Pp("onBeforeInput","beforeinput",null,a,pe),ye.push({event:Qe,listeners:bt}),Qe.data=gt)),eS(ye,t,ee,a,pe)}Tg(ye,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function dc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Qs(t,a),u!=null&&o.unshift(No(t,u,h)),u=Qs(t,n),u!=null&&o.push(No(t,u,h))),t.tag===3)return o;t=t.return}return[]}function aS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rg(t,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var w=a,G=w.alternate,ee=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||ee===null||(G=ee,u?(ee=Qs(a,h),ee!=null&&S.unshift(No(a,ee,G))):u||(ee=Qs(a,h),ee!=null&&S.push(No(a,ee,G)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(sS,"")}function Cg(t,n){return n=wg(n),wg(t)===n}function jt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":tt(t,"class",o);break;case"tabIndex":tt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(t,a,o);break;case"style":Vr(t,o,h);break;case"data":if(n!=="object"){tt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qi);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ye(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O_.get(a)||a,Ye(t,a,o))}}function cd(t,n,a,o,u,h){switch(a){case"style":Vr(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ye(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,h,S,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),o&&jt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var w=h=S=u=null,G=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":G=pe;break;case"defaultChecked":ee=pe;break;case"value":h=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:jt(t,n,o,pe,a,null)}}Wi(t,h,w,G,ee,S,u,!1);return;case"select":St("invalid",t),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:jt(t,n,u,w,a,null)}n=h,a=S,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":St("invalid",t),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:jt(t,n,S,w,a,null)}Mn(t,o,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":jt(t,n,G,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)St(Do[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,ee,o,a,null)}return;default:if(Si(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&cd(t,n,pe,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&jt(t,n,w,o,a,null))}function oS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,w=null,G=null,ee=null,pe=null;for(ce in a){var ye=a[ce];if(a.hasOwnProperty(ce)&&ye!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=ye;default:o.hasOwnProperty(ce)||jt(t,n,ce,null,o,ye)}}for(var re in o){var ce=o[re];if(ye=a[re],o.hasOwnProperty(re)&&(ce!=null||ye!=null))switch(re){case"type":h=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":pe=ce;break;case"value":S=ce;break;case"defaultValue":w=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==ye&&jt(t,n,re,ce,o,ye)}}yn(t,S,w,G,ee,pe,h,u);return;case"select":ce=S=w=re=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ce=G;default:o.hasOwnProperty(h)||jt(t,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":re=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==G&&jt(t,n,u,h,o,G)}n=w,a=S,o=ce,re!=null?ri(t,!!a,re,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:jt(t,n,w,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&jt(t,n,S,u,o,h)}Ft(t,re,ce);return;case"option":for(var qe in a)re=a[qe],a.hasOwnProperty(qe)&&re!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:jt(t,n,qe,null,o,re));for(G in o)re=o[G],ce=a[G],o.hasOwnProperty(G)&&re!==ce&&(re!=null||ce!=null)&&(G==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":jt(t,n,G,re,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)re=a[rt],a.hasOwnProperty(rt)&&re!=null&&!o.hasOwnProperty(rt)&&jt(t,n,rt,null,o,re);for(ee in o)if(re=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&re!==ce&&(re!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:jt(t,n,ee,re,o,ce)}return;default:if(Si(n)){for(var Xt in a)re=a[Xt],a.hasOwnProperty(Xt)&&re!==void 0&&!o.hasOwnProperty(Xt)&&cd(t,n,Xt,void 0,o,re);for(pe in o)re=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||re===ce||re===void 0&&ce===void 0||cd(t,n,pe,re,o,ce);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&jt(t,n,K,null,o,re);for(ye in o)re=o[ye],ce=a[ye],!o.hasOwnProperty(ye)||re===ce||re==null&&ce==null||jt(t,n,ye,re,o,ce)}function Dg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,w=u.duration;if(h&&w&&Dg(S)){for(S=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ee=G.startTime;if(ee>w)break;var pe=G.transferSize,ye=G.initiatorType;pe&&Dg(ye)&&(G=G.responseEnd,S+=pe*(G<w?1:(w-ee)/(G-ee)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,fd=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function cS(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(dS)}:Ug;function dS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Pg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Lo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,w=h.nodeName;h[or]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Lo(t.ownerDocument.body);a=u}while(a);_s(n)}function Bg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),Ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function pS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function zg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$?"||t.data==="$~"}function gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xd=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ig(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Hg(t,n,a){switch(n=hc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ks(t)}var hi=new Map,Gg=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=H.d;H.d={f:gS,r:xS,D:vS,C:_S,L:yS,m:SS,X:bS,S:MS,M:ES};function gS(){var t=ca.f(),n=rc();return t||n}function xS(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?a0(n):ca.r(t)}var gs=typeof document>"u"?null:document;function Vg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=dt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Gg.has(u)||(Gg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),C(n),o.head.appendChild(n)))}}function vS(t){ca.D(t),Vg("dns-prefetch",t,null)}function _S(t,n){ca.C(t,n),Vg("preconnect",t,n)}function yS(t,n,a){ca.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+dt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dt(a.imageSizes)+'"]')):u+='[href="'+dt(t)+'"]';var h=u;switch(n){case"style":h=xs(t);break;case"script":h=vs(t)}hi.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(h))||n==="script"&&o.querySelector(Oo(h))||(n=o.createElement("link"),wn(n,"link",t),C(n),o.head.appendChild(n)))}}function SS(t,n){ca.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dt(o)+'"][href="'+dt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vs(t)}if(!hi.has(h)&&(t=g({rel:"modulepreload",href:t},n),hi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(h)))return}o=a.createElement("link"),wn(o,"link",t),C(o),a.head.appendChild(o)}}}function MS(t,n,a){ca.S(t,n,a);var o=gs;if(o&&t){var u=wa(o).hoistableStyles,h=xs(t);n=n||"default";var S=u.get(h);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(Uo(h)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(h))&&vd(t,a);var G=S=o.createElement("link");C(G),wn(G,"link",t),G._p=new Promise(function(ee,pe){G.onload=ee,G.onerror=pe}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,mc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(h,S)}}}function bS(t,n){ca.X(t,n);var a=gs;if(a&&t){var o=wa(a).hoistableScripts,u=vs(t),h=o.get(u);h||(h=a.querySelector(Oo(u)),h||(t=g({src:t,async:!0},n),(n=hi.get(u))&&_d(t,n),h=a.createElement("script"),C(h),wn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ES(t,n){ca.M(t,n);var a=gs;if(a&&t){var o=wa(a).hoistableScripts,u=vs(t),h=o.get(u);h||(h=a.querySelector(Oo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&_d(t,n),h=a.createElement("script"),C(h),wn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function kg(t,n,a,o){var u=(u=te.current)?pc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var h=wa(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(Uo(t)))&&!h._p&&(S.instance=h,S.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),h||TS(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xs(t){return'href="'+dt(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function jg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function TS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),C(n),t.head.appendChild(n))}function vs(t){return'[src="'+dt(t)+'"]'}function Oo(t){return"script[async]"+t}function Xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+dt(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),wn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xs(a.href);var h=t.querySelector(Uo(u));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=jg(a),(u=hi.get(u))&&vd(o,u),h=(t.ownerDocument||t).createElement("link"),C(h);var S=h;return S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),wn(h,"link",o),n.state.loading|=4,mc(h,a.precedence,t),n.instance=h;case"script":return h=vs(a.src),(u=t.querySelector(Oo(h)))?(n.instance=u,C(u),u):(o=a,(u=hi.get(h))&&(o=g({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function Wg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[or]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var w=o.get(S);w?w.push(h):o.set(S,[h])}}return o}function qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function AS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function RS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xs(o.href),h=n.querySelector(Uo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=xc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,C(h);return}h=n.ownerDocument||n,o=jg(o),(u=hi.get(u))&&vd(o,u),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(w,G){S.onload=w,S.onerror=G}),wn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function wS(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*lS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(CS,t),vc=null,xc.call(t))}function CS(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:N,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function DS(t,n,a,o,u,h,S,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Zg(t,n,a,o,u,h,S,w,G,ee,pe,ye){return t=new DS(t,n,a,S,G,ee,pe,ye,w),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),t.current=h,h.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),t}function Kg(t){return t?(t=Zr,t):Zr}function Qg(t,n,a,o,u,h){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ba(t,o,n),a!==null&&(Xn(a,t,n),ho(a,t,n))}function Jg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sd(t,n){Jg(t,n),(t=t.alternate)&&Jg(t,n)}function $g(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&Xn(n,t,67108864),Sd(t,67108864)}}function ex(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=dr(t,n);a!==null&&Xn(a,t,n),Sd(t,n)}}var yc=!0;function NS(t,n,a,o){var u=B.T;B.T=null;var h=H.p;try{H.p=2,Md(t,n,a,o)}finally{H.p=h,B.T=u}}function LS(t,n,a,o){var u=B.T;B.T=null;var h=H.p;try{H.p=8,Md(t,n,a,o)}finally{H.p=h,B.T=u}}function Md(t,n,a,o){if(yc){var u=bd(o);if(u===null)ld(t,n,o,Sc,a),nx(t,o);else if(OS(u,t,n,a,o))o.stopPropagation();else if(nx(t,o),n&4&&-1<US.indexOf(t)){for(;u!==null;){var h=Ra(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Te(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var G=1<<31-He(S);w.entanglements[1]|=G,S&=~G}Bi(h),(Pt&6)===0&&(ic=b()+500,Co(0))}}break;case 31:case 13:w=dr(h,2),w!==null&&Xn(w,h,2),rc(),Sd(h,2)}if(h=bd(o),h===null&&ld(t,n,o,Sc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ld(t,n,o,null,a)}}function bd(t){return t=Eu(t),Ed(t)}var Sc=null;function Ed(t){if(Sc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function tx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case fe:return 2;case ve:return 8;case ue:case Ve:return 32;case De:return 268435456;default:return 32}default:return 32}}var Td=!1,qa=null,Ya=null,Za=null,Bo=new Map,zo=new Map,Ka=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Fo(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&$g(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function OS(t,n,a,o,u){switch(n){case"focusin":return qa=Fo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=Fo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=Fo(Za,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Bo.set(h,Fo(Bo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,zo.set(h,Fo(zo.get(h)||null,t,n,a,o,u)),!0}return!1}function ix(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Li(t.priority,function(){ex(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Li(t.priority,function(){ex(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=Ra(a),n!==null&&$g(n),t.blockedOn=a,!1;n.shift()}return!0}function ax(t,n,a){Mc(t)&&a.delete(n)}function PS(){Td=!1,qa!==null&&Mc(qa)&&(qa=null),Ya!==null&&Mc(Ya)&&(Ya=null),Za!==null&&Mc(Za)&&(Za=null),Bo.forEach(ax),zo.forEach(ax)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Td||(Td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var Ec=null;function rx(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var h=Ra(a);h!==null&&(t.splice(n,3),n-=3,bf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _s(t){function n(G){return bc(G,t)}qa!==null&&bc(qa,t),Ya!==null&&bc(Ya,t),Za!==null&&bc(Za,t),Bo.forEach(n),zo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)ix(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[_n]||null;if(typeof h=="function")S||rx(a);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[_n]||null)w=S.formAction;else if(Ed(u)!==null)continue}else w=S.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),rx(a)}}}function sx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(t){this._internalRoot=t}Tc.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();Qg(a,o,t,n,null,null)},Tc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qg(t.current,2,null,t,null,null),rc(),n[yi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&ix(t)}};var ox=e.version;if(ox!=="19.2.4")throw Error(s(527,ox,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var BS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ae=Ac.inject(BS),Re=Ac}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=p0,h=m0,S=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Zg(t,1,!1,null,null,a,o,null,u,h,S,sx),t[yi]=n.current,od(t),new Ad(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=p0,S=m0,w=g0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Zg(t,1,!0,n,a??null,o,u,G,h,S,w,sx),n.context=Kg(null),a=n.current,o=ei(),o=qs(o),u=Pa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Bi(n),t[yi]=n.current,od(t),new Tc(n)},Ho.version="19.2.4",Ho}var xx;function WS(){if(xx)return Cd.exports;xx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=XS(),Cd.exports}var qS=WS();var vx="popstate";function YS(r={}){function e(s,l){let{pathname:c,search:f,hash:d}=s.location;return mh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:el(l)}return KS(e,i,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ki(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZS(){return Math.random().toString(36).substring(2,10)}function _x(r,e){return{usr:r.state,key:r.key,idx:e}}function mh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||s||ZS()}}function el({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Gs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function KS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){d="POP";let y=x(),_=y==null?null:y-p;p=y,m&&m({action:d,location:A.location,delta:_})}function v(y,_){d="PUSH";let D=mh(A.location,y,_);p=x()+1;let N=_x(D,p),P=A.createHref(D);try{f.pushState(N,"",P)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(P)}c&&m&&m({action:d,location:A.location,delta:1})}function M(y,_){d="REPLACE";let D=mh(A.location,y,_);p=x();let N=_x(D,p),P=A.createHref(D);f.replaceState(N,"",P),c&&m&&m({action:d,location:A.location,delta:0})}function E(y){return QS(y)}let A={get action(){return d},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(vx,g),m=y,()=>{l.removeEventListener(vx,g),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(y){return f.go(y)}};return A}function QS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:el(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Cv(r,e,i="/"){return JS(r,e,i,!1)}function JS(r,e,i,s){let l=typeof e=="string"?Gs(e):e,c=Sa(l.pathname||"/",i);if(c==null)return null;let f=Dv(r);$S(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=u1(c);d=l1(f[m],p,s)}return d}function Dv(r,e=[],i=[],s="",l=!1){let c=(f,d,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;$t(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=va([s,x.relativePath]),v=i.concat(x);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Dv(f.children,e,v,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:s1(g,f.index),routesMeta:v})};return r.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of Nv(f.path))c(f,d,!0,m)}),e}function Nv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Nv(s.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>r.startsWith("/")&&m===""?"/":m)}function $S(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:o1(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var e1=/^:[\w-]+$/,t1=3,n1=2,i1=1,a1=10,r1=-2,yx=r=>r==="*";function s1(r,e){let i=r.split("/"),s=i.length;return i.some(yx)&&(s+=r1),e&&(s+=n1),i.filter(l=>!yx(l)).reduce((l,c)=>l+(e1.test(c)?t1:c===""?i1:a1),s)}function o1(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function l1(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=cu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),v=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=cu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:va([c,g.pathname]),pathnameBase:p1(va([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=va([c,g.pathnameBase]))}return f}function cu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=c1(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},v)=>{if(x==="*"){let E=d[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return g&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function c1(r,e=!1,i=!0){ki(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function u1(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Sa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var f1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function d1(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Gs(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Sx(i.substring(1),"/"):c=Sx(i,e)):c=e,{pathname:c,search:m1(s),hash:g1(l)}}function Sx(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ud(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function h1(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Lv(r){let e=h1(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Uv(r,e,i,s=!1){let l;typeof r=="string"?l=Gs(r):(l={...r},$t(!l.pathname||!l.pathname.includes("?"),Ud("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Ud("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Ud("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}d=g>=0?e[g]:"/"}let m=d1(l,d),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var va=r=>r.join("/").replace(/\/\/+/g,"/"),p1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,g1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,x1=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function v1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function _1(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pv(r,e){let i=r;if(typeof i!="string"||!f1.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Ov)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=Sa(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var y1=["GET",...Bv];new Set(y1);var Vs=X.createContext(null);Vs.displayName="DataRouter";var gu=X.createContext(null);gu.displayName="DataRouterState";var S1=X.createContext(!1),zv=X.createContext({isTransitioning:!1});zv.displayName="ViewTransition";var M1=X.createContext(new Map);M1.displayName="Fetchers";var b1=X.createContext(null);b1.displayName="Await";var vi=X.createContext(null);vi.displayName="Navigation";var rl=X.createContext(null);rl.displayName="Location";var Xi=X.createContext({outlet:null,matches:[],isDataRoute:!1});Xi.displayName="Route";var hp=X.createContext(null);hp.displayName="RouteError";var Fv="REACT_ROUTER_ERROR",E1="REDIRECT",T1="ROUTE_ERROR_RESPONSE";function A1(r){if(r.startsWith(`${Fv}:${E1}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function R1(r){if(r.startsWith(`${Fv}:${T1}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new x1(e.status,e.statusText,e.data)}catch{}}function w1(r,{relative:e}={}){$t(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=X.useContext(vi),{hash:l,pathname:c,search:f}=ll(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:va([i,c])),s.createHref({pathname:d,search:f,hash:l})}function sl(){return X.useContext(rl)!=null}function zr(){return $t(sl(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(rl).location}var Iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hv(r){X.useContext(vi).static||X.useLayoutEffect(r)}function ol(){let{isDataRoute:r}=X.useContext(Xi);return r?V1():C1()}function C1(){$t(sl(),"useNavigate() may be used only in the context of a <Router> component.");let r=X.useContext(Vs),{basename:e,navigator:i}=X.useContext(vi),{matches:s}=X.useContext(Xi),{pathname:l}=zr(),c=JSON.stringify(Lv(s)),f=X.useRef(!1);return Hv(()=>{f.current=!0}),X.useCallback((m,p={})=>{if(ki(f.current,Iv),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=Uv(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:va([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,r])}X.createContext(null);function D1(){let{matches:r}=X.useContext(Xi),e=r[r.length-1];return e?e.params:{}}function ll(r,{relative:e}={}){let{matches:i}=X.useContext(Xi),{pathname:s}=zr(),l=JSON.stringify(Lv(i));return X.useMemo(()=>Uv(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function N1(r,e){return Gv(r,e)}function Gv(r,e,i,s,l){$t(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=X.useContext(vi),{matches:f}=X.useContext(Xi),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",x=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";kv(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=zr(),M;if(e){let D=typeof e=="string"?Gs(e):e;$t(x==="/"||D.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=v;let E=M.pathname||"/",A=E;if(x!=="/"){let D=x.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=Cv(r,{pathname:A});ki(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ki(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=B1(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:va([x,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:va([x,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l);return e&&_?X.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function L1(){let r=G1(),e=v1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:c},"ErrorBoundary")," or"," ",X.createElement("code",{style:c},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),i?X.createElement("pre",{style:l},i):null,f)}var U1=X.createElement(L1,null),Vv=class extends X.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=R1(r.digest);i&&(r=i)}let e=r!==void 0?X.createElement(Xi.Provider,{value:this.props.routeContext},X.createElement(hp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?X.createElement(O1,{error:r},e):e}};Vv.contextType=S1;var Od=new WeakMap;function O1({children:r,error:e}){let{basename:i}=X.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=A1(e.digest);if(s){let l=Od.get(e);if(l)throw l;let c=Pv(s.location,i);if(Ov&&!Od.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Od.set(e,f),f}return X.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function P1({routeContext:r,match:e,children:i}){let s=X.useContext(Vs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(Xi.Provider,{value:r},i)}function B1(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let x=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$t(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let d=!1,m=-1;if(i)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=x),g.route.id){let{loaderData:v,errors:M}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(x,g)=>{s(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:_1(i.matches),errorInfo:g})}:void 0;return c.reduceRight((x,g,v)=>{let M,E=!1,A=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||U1,d&&(m<0&&v===0?(kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):m===v&&(E=!0,y=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,v+1)),D=()=>{let N;return M?N=A:E?N=y:g.route.Component?N=X.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=x,X.createElement(P1,{match:g,routeContext:{outlet:x,matches:_,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?X.createElement(Vv,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):D()},null)}function pp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z1(r){let e=X.useContext(Vs);return $t(e,pp(r)),e}function F1(r){let e=X.useContext(gu);return $t(e,pp(r)),e}function I1(r){let e=X.useContext(Xi);return $t(e,pp(r)),e}function mp(r){let e=I1(r),i=e.matches[e.matches.length-1];return $t(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function H1(){return mp("useRouteId")}function G1(){let r=X.useContext(hp),e=F1("useRouteError"),i=mp("useRouteError");return r!==void 0?r:e.errors?.[i]}function V1(){let{router:r}=z1("useNavigate"),e=mp("useNavigate"),i=X.useRef(!1);return Hv(()=>{i.current=!0}),X.useCallback(async(l,c={})=>{ki(i.current,Iv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Mx={};function kv(r,e,i){!e&&!Mx[r]&&(Mx[r]=!0,ki(!1,i))}X.memo(k1);function k1({routes:r,future:e,state:i,onError:s}){return Gv(r,void 0,i,s,e)}function Ko(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function j1({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=X.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:x="",hash:g="",state:v=null,key:M="default"}=i,E=X.useMemo(()=>{let A=Sa(p,d);return A==null?null:{location:{pathname:A,search:x,hash:g,state:v,key:M},navigationType:s}},[d,p,x,g,v,M,s]);return ki(E!=null,`<Router basename="${d}"> is not able to match the URL "${p}${x}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:X.createElement(vi.Provider,{value:m},X.createElement(rl.Provider,{children:e,value:E}))}function X1({children:r,location:e}){return N1(gh(r),e)}function gh(r,e=[]){let i=[];return X.Children.forEach(r,(s,l)=>{if(!X.isValidElement(s))return;let c=[...e,l];if(s.type===X.Fragment){i.push.apply(i,gh(s.props.children,c));return}$t(s.type===Ko,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=gh(s.props.children,c)),i.push(f)}),i}var eu="get",tu="application/x-www-form-urlencoded";function xu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function W1(r){return xu(r)&&r.tagName.toLowerCase()==="button"}function q1(r){return xu(r)&&r.tagName.toLowerCase()==="form"}function Y1(r){return xu(r)&&r.tagName.toLowerCase()==="input"}function Z1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function K1(r,e){return r.button===0&&(!e||e==="_self")&&!Z1(r)}var Rc=null;function Q1(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var J1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(r){return r!=null&&!J1.has(r)?(ki(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):r}function $1(r,e){let i,s,l,c,f;if(q1(r)){let d=r.getAttribute("action");s=d?Sa(d,e):null,i=r.getAttribute("method")||eu,l=Pd(r.getAttribute("enctype"))||tu,c=new FormData(r)}else if(W1(r)||Y1(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||d.getAttribute("action");if(s=m?Sa(m,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||eu,l=Pd(r.getAttribute("formenctype"))||Pd(d.getAttribute("enctype"))||tu,c=new FormData(d,r),!Q1()){let{name:p,type:x,value:g}=r;if(x==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(xu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,s=null,l=tu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function eM(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Sa(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function tM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function iM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await tM(c,i);return f.links?f.links():[]}return[]}));return oM(s.flat(1).filter(nM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function bx(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function aM(r,e,{includeHydrateFallback:i}={}){return rM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function rM(r){return[...new Set(r)]}function sM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function oM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(sM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function jv(){let r=X.useContext(Vs);return gp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function lM(){let r=X.useContext(gu);return gp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var xp=X.createContext(void 0);xp.displayName="FrameworkContext";function Xv(){let r=X.useContext(xp);return gp(r,"You must render this element inside a <HydratedRouter> element"),r}function cM(r,e){let i=X.useContext(xp),[s,l]=X.useState(!1),[c,f]=X.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,v=X.useRef(null);X.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=_=>{_.forEach(D=>{f(D.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),X.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Go(d,M),onBlur:Go(m,E),onMouseEnter:Go(p,M),onMouseLeave:Go(x,E),onTouchStart:Go(g,M)}]:[!1,v,{}]}function Go(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function uM({page:r,...e}){let{router:i}=jv(),s=X.useMemo(()=>Cv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?X.createElement(dM,{page:r,matches:s,...e}):null}function fM(r){let{manifest:e,routeModules:i}=Xv(),[s,l]=X.useState([]);return X.useEffect(()=>{let c=!1;return iM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function dM({page:r,matches:e,...i}){let s=zr(),{future:l,manifest:c,routeModules:f}=Xv(),{basename:d}=jv(),{loaderData:m,matches:p}=lM(),x=X.useMemo(()=>bx(r,e,p,c,s,"data"),[r,e,p,c,s]),g=X.useMemo(()=>bx(r,e,p,c,s,"assets"),[r,e,p,c,s]),v=X.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let A=new Set,y=!1;if(e.forEach(D=>{let N=c.routes[D.route.id];!N||!N.hasLoader||(!x.some(P=>P.route.id===D.route.id)&&D.route.id in m&&f[D.route.id]?.shouldRevalidate||N.hasClientLoader?y=!0:A.add(D.route.id))}),A.size===0)return[];let _=eM(r,d,l.unstable_trailingSlashAwareDataRequests,"data");return y&&A.size>0&&_.searchParams.set("_routes",e.filter(D=>A.has(D.route.id)).map(D=>D.route.id).join(",")),[_.pathname+_.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,s,c,x,e,r,f]),M=X.useMemo(()=>aM(g,c),[g,c]),E=fM(g);return X.createElement(X.Fragment,null,v.map(A=>X.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),M.map(A=>X.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:y})=>X.createElement("link",{key:A,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function hM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var pM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pM&&(window.__reactRouterVersion="7.13.0")}catch{}function mM({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=X.useRef();l.current==null&&(l.current=YS({window:s,v5Compat:!0}));let c=l.current,[f,d]=X.useState({action:c.action,location:c.location}),m=X.useCallback(p=>{i===!1?d(p):X.startTransition(()=>d(p))},[i]);return X.useLayoutEffect(()=>c.listen(m),[c,m]),X.createElement(j1,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=X.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E){let{basename:A,unstable_useTransitions:y}=X.useContext(vi),_=typeof p=="string"&&Wv.test(p),D=Pv(p,A);p=D.to;let N=w1(p,{relative:l}),[P,F,I]=cM(s,M),z=_M(p,{replace:f,state:d,target:m,preventScrollReset:x,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function Y(L){e&&e(L),L.defaultPrevented||z(L)}let R=X.createElement("a",{...M,...I,href:D.absoluteURL||N,onClick:D.isExternal||c?e:Y,ref:hM(E,F),target:m,"data-discover":!_&&i==="render"?"true":void 0});return P&&!_?X.createElement(X.Fragment,null,R,X.createElement(uM,{page:N})):R});qv.displayName="Link";var gM=X.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},x){let g=ll(f,{relative:p.relative}),v=zr(),M=X.useContext(gu),{navigator:E,basename:A}=X.useContext(vi),y=M!=null&&EM(g)&&d===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=v.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&A&&(N=Sa(N,A)||N);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=D===_||!l&&D.startsWith(_)&&D.charAt(P)==="/",I=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:F,isPending:I,isTransitioning:y},Y=F?e:void 0,R;typeof s=="function"?R=s(z):R=[s,F?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof c=="function"?c(z):c;return X.createElement(qv,{...p,"aria-current":Y,className:R,ref:x,style:L,to:f,viewTransition:d},typeof m=="function"?m(z):m)});gM.displayName="NavLink";var xM=X.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=eu,action:d,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:A}=X.useContext(vi),y=MM(),_=bM(d,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",N=typeof d=="string"&&Wv.test(d),P=F=>{if(m&&m(F),F.defaultPrevented)return;F.preventDefault();let I=F.nativeEvent.submitter,z=I?.getAttribute("formmethod")||f,Y=()=>y(I||F.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v});A&&i!==!1?X.startTransition(()=>Y()):Y()};return X.createElement("form",{ref:E,method:D,action:_,onSubmit:s?m:P,...M,"data-discover":!N&&r==="render"?"true":void 0})});xM.displayName="Form";function vM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yv(r){let e=X.useContext(Vs);return $t(e,vM(r)),e}function _M(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=ol(),x=zr(),g=ll(r,{relative:c});return X.useCallback(v=>{if(K1(v,e)){v.preventDefault();let M=i!==void 0?i:el(x)===el(g),E=()=>p(r,{replace:M,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});m?X.startTransition(()=>E()):E()}},[x,p,g,i,s,e,r,l,c,f,d,m])}var yM=0,SM=()=>`__${String(++yM)}__`;function MM(){let{router:r}=Yv("useSubmit"),{basename:e}=X.useContext(vi),i=H1(),s=r.fetch,l=r.navigate;return X.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:x,body:g}=$1(c,e);if(f.navigate===!1){let v=f.fetcherKey||SM();await s(v,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function bM(r,{relative:e}={}){let{basename:i}=X.useContext(vi),s=X.useContext(Xi);$t(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...ll(r||".",{relative:e})},f=zr();if(r==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(x=>x==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let x=d.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:va([i,c.pathname])),el(c)}function EM(r,{relative:e}={}){let i=X.useContext(zv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Yv("useViewTransitionState"),l=ll(r,{relative:e});if(!i.isTransitioning)return!1;let c=Sa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return cu(l.pathname,f)!=null||cu(l.pathname,c)!=null}const Zv="memory-map-data",Kv="memory-map-context";function TM(r){try{localStorage.setItem(Zv,JSON.stringify(r))}catch(e){console.error("Failed to save memories:",e)}}function AM(){try{const r=localStorage.getItem(Zv);return r?JSON.parse(r):[]}catch(r){return console.error("Failed to load memories:",r),[]}}function RM(r){try{localStorage.setItem(Kv,JSON.stringify(r))}catch(e){console.error("Failed to save context:",e)}}function wM(){try{const r=localStorage.getItem(Kv);return r?JSON.parse(r):null}catch(r){return console.error("Failed to load context:",r),null}}function Qv({children:r,variant:e="primary",className:i="",...s}){const l="font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2",c={primary:"bg-accent-primary text-bg-primary px-10 py-4 rounded-[4px] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.25)] active:scale-[0.98]",secondary:"bg-transparent text-accent-primary border border-accent-primary/30 px-8 py-3 rounded-[4px] hover:border-accent-primary/60 hover:bg-accent-primary/5 active:scale-[0.98]",ghost:"bg-transparent text-accent-primary px-4 py-2 hover:text-accent-secondary",icon:"bg-accent-primary text-bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] active:scale-95"};return T.jsx("button",{className:`${l} ${c[e]} ${i}`,...s,children:r})}const vp="182",CM=0,Ex=1,DM=2,nu=1,NM=2,Qo=3,sr=0,qn=1,ga=2,_a=0,Os=1,Tx=2,Ax=3,Rx=4,LM=5,Lr=100,UM=101,OM=102,PM=103,BM=104,zM=200,FM=201,IM=202,HM=203,xh=204,vh=205,GM=206,VM=207,kM=208,jM=209,XM=210,WM=211,qM=212,YM=213,ZM=214,_h=0,yh=1,Sh=2,Bs=3,Mh=4,bh=5,Eh=6,Th=7,Jv=0,KM=1,QM=2,Gi=0,$v=1,e_=2,t_=3,n_=4,i_=5,a_=6,r_=7,s_=300,Br=301,zs=302,Ah=303,Rh=304,vu=306,wh=1e3,xa=1001,Ch=1002,Cn=1003,JM=1004,wc=1005,On=1006,Bd=1007,Or=1008,gi=1009,o_=1010,l_=1011,tl=1012,_p=1013,ji=1014,Ii=1015,Ma=1016,yp=1017,Sp=1018,nl=1020,c_=35902,u_=35899,f_=1021,d_=1022,Di=1023,ba=1026,Pr=1027,h_=1028,Mp=1029,Fs=1030,bp=1031,Ep=1033,iu=33776,au=33777,ru=33778,su=33779,Dh=35840,Nh=35841,Lh=35842,Uh=35843,Oh=36196,Ph=37492,Bh=37496,zh=37488,Fh=37489,Ih=37490,Hh=37491,Gh=37808,Vh=37809,kh=37810,jh=37811,Xh=37812,Wh=37813,qh=37814,Yh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,ep=37821,tp=36492,np=36494,ip=36495,ap=36283,rp=36284,sp=36285,op=36286,$M=3200,eb=0,tb=1,ar="",mi="srgb",Is="srgb-linear",uu="linear",Gt="srgb",ys=7680,wx=519,nb=512,ib=513,ab=514,Tp=515,rb=516,sb=517,Ap=518,ob=519,Cx=35044,Dx="300 es",Hi=2e3,fu=2001;function p_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lb(){const r=du("canvas");return r.style.display="block",r}const Nx={};function Lx(...r){const e="THREE."+r.shift();console.log(e,...r)}function ft(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Lt(...r){const e="THREE."+r.shift();console.error(e,...r)}function il(...r){const e=r.join(" ");e in Nx||(Nx[e]=!0,ft(...r))}function cb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,lp=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function ub(r,e){return(r%e+e)%e}function Fd(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(e=0,i=0){Wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],v=c[f+0],M=c[f+1],E=c[f+2],A=c[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(d>=1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==v||p!==M||x!==E){let y=m*v+p*M+x*E+g*A;y<0&&(v=-v,M=-M,E=-E,A=-A,y=-y);let _=1-d;if(y<.9995){const D=Math.acos(y),N=Math.sin(D);_=Math.sin(_*D)/N,d=Math.sin(d*D)/N,m=m*_+v*d,p=p*_+M*d,x=x*_+E*d,g=g*_+A*d}else{m=m*_+v*d,p=p*_+M*d,x=x*_+E*d,g=g*_+A*d;const D=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=D,p*=D,x*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=d*E+x*g+m*M-p*v,e[i+1]=m*E+x*v+p*g-d*M,e[i+2]=p*E+x*M+d*v-m*g,e[i+3]=x*E-d*g-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),v=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*x*g+p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g-v*M*E;break;case"YXZ":this._x=v*x*g+p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g+v*M*E;break;case"ZXY":this._x=v*x*g-p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g-v*M*E;break;case"ZYX":this._x=v*x*g-p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g+v*M*E;break;case"YZX":this._x=v*x*g+p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g-v*M*E;break;case"XZY":this._x=v*x*g-p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g+v*M*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],v=s+d+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*d+l*p-c*m,this._y=l*x+f*m+c*d-s*p,this._z=c*x+f*p+s*m-l*d,this._w=f*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ux.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),x=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new se,Ux=new ul;class xt{constructor(e,i,s,l,c,f,d,m,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p)}set(e,i,s,l,c,f,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],v=s[2],M=s[5],E=s[8],A=l[0],y=l[3],_=l[6],D=l[1],N=l[4],P=l[7],F=l[2],I=l[5],z=l[8];return c[0]=f*A+d*D+m*F,c[3]=f*y+d*N+m*I,c[6]=f*_+d*P+m*z,c[1]=p*A+x*D+g*F,c[4]=p*y+x*N+g*I,c[7]=p*_+x*P+g*z,c[2]=v*A+M*D+E*F,c[5]=v*y+M*N+E*I,c[8]=v*_+M*P+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*d*p-s*c*x+s*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*f-d*p,v=d*m-x*c,M=p*c-f*m,E=i*g+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-x*s)*A,e[2]=(d*s-l*f)*A,e[3]=v*A,e[4]=(x*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hd.makeScale(e,i)),this}rotate(e){return this.premultiply(Hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new xt,Ox=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Px=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fb(){const r={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Gt&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?uu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Is]:{primaries:e,whitePoint:s,transfer:uu,toXYZ:Ox,fromXYZ:Px,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:Ox,fromXYZ:Px,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Rt=fb();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ss;class db{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ss===void 0&&(Ss=du("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ss}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=du("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ya(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hb=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Gd(l[f].image)):c.push(Gd(l[f]))}else c=Gd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Gd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?db.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let pb=0;const Vd=new se;class Fn extends ks{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=xa,l=xa,c=On,f=Or,d=Di,m=gi,p=Fn.DEFAULT_ANISOTROPY,x=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=cl(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=s_;Fn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],M=m[5],E=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,P=(M+1)/2,F=(_+1)/2,I=(x+v)/4,z=(g+A)/4,Y=(E+y)/4;return N>P&&N>F?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=I/s,c=z/s):P>F?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=I/l,c=Y/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=Y/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-E)*(y-E)+(g-A)*(g-A)+(v-x)*(v-x));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(g-A)/D,this.z=(v-x)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mb extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends mb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class m_ extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gb extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Dc.subVectors(this.max,ko),Ms.subVectors(e.a,ko),bs.subVectors(e.b,ko),Es.subVectors(e.c,ko),Ja.subVectors(bs,Ms),$a.subVectors(Es,bs),Tr.subVectors(Ms,Es);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Tr.z,Tr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Tr.z,0,-Tr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Tr.y,Tr.x,0];return!kd(i,Ms,bs,Es,Dc)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,Ms,bs,Es,Dc))?!1:(Nc.crossVectors(Ja,$a),i=[Nc.x,Nc.y,Nc.z],kd(i,Ms,bs,Es,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new se,new se,new se,new se,new se,new se,new se,new se],Ti=new se,Cc=new fl,Ms=new se,bs=new se,Es=new se,Ja=new se,$a=new se,Tr=new se,ko=new se,Dc=new se,Nc=new se,Ar=new se;function kd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ar.fromArray(r,c);const d=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),x=s.dot(Ar);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const xb=new fl,jo=new se,jd=new se;class dl{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):xb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(jd)),this.expandByPoint(jo.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new se,Xd=new se,Lc=new se,er=new se,Wd=new se,Uc=new se,qd=new se;class wp{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Xd.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),er.copy(this.origin).sub(Xd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Lc),d=er.dot(this.direction),m=-er.dot(Lc),p=er.lengthSq(),x=Math.abs(1-f*f);let g,v,M,E;if(x>0)if(g=f*m-d,v=f*d-m,E=c*x,g>=0)if(v>=-E)if(v<=E){const A=1/x;g*=A,v*=A,M=g*(g+f*v+2*d)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+d)),M=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+d)),M=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-f*c+d)),v=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(g=Math.max(0,-(f*c+d)),v=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+d)),M=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Xd).addScaledVector(Lc,v),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,f=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,f=(e.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){Wd.subVectors(i,e),Uc.subVectors(s,e),qd.crossVectors(Wd,Uc);let f=this.direction.dot(qd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;er.subVectors(this.origin,e);const m=d*this.direction.dot(Uc.crossVectors(er,Uc));if(m<0)return null;const p=d*this.direction.dot(Wd.cross(er));if(p<0||m+p>f)return null;const x=-d*er.dot(qd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,c,f,d,m,p,x,g,v,M,E,A,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p,x,g,v,M,E,A,y)}set(e,i,s,l,c,f,d,m,p,x,g,v,M,E,A,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=v,_[3]=M,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*x,M=f*g,E=d*x,A=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*x,M=m*g,E=p*x,A=p*g;i[0]=v+A*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-d,i[2]=M*d-E,i[6]=A+v*d,i[10]=f*m}else if(e.order==="ZXY"){const v=m*x,M=m*g,E=p*x,A=p*g;i[0]=v-A*d,i[4]=-f*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*x,i[9]=A-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const v=f*x,M=f*g,E=d*x,A=d*g;i[0]=m*x,i[4]=E*p-M,i[8]=v*p+A,i[1]=m*g,i[5]=A*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*x,i[4]=A-v*g,i[8]=E*g+M,i[1]=g,i[5]=f*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*g+E,i[10]=v-A*g}else if(e.order==="XZY"){const v=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=v*g+A,i[5]=f*x,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*x,i[10]=A*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vb,e,_b)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),tr.crossVectors(s,ti),tr.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),tr.crossVectors(s,ti)),tr.normalize(),Oc.crossVectors(ti,tr),l[0]=tr.x,l[4]=Oc.x,l[8]=ti.x,l[1]=tr.y,l[5]=Oc.y,l[9]=ti.y,l[2]=tr.z,l[6]=Oc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],v=s[9],M=s[13],E=s[2],A=s[6],y=s[10],_=s[14],D=s[3],N=s[7],P=s[11],F=s[15],I=l[0],z=l[4],Y=l[8],R=l[12],L=l[1],k=l[5],ne=l[9],oe=l[13],me=l[2],de=l[6],B=l[10],H=l[14],$=l[3],Ee=l[7],be=l[11],U=l[15];return c[0]=f*I+d*L+m*me+p*$,c[4]=f*z+d*k+m*de+p*Ee,c[8]=f*Y+d*ne+m*B+p*be,c[12]=f*R+d*oe+m*H+p*U,c[1]=x*I+g*L+v*me+M*$,c[5]=x*z+g*k+v*de+M*Ee,c[9]=x*Y+g*ne+v*B+M*be,c[13]=x*R+g*oe+v*H+M*U,c[2]=E*I+A*L+y*me+_*$,c[6]=E*z+A*k+y*de+_*Ee,c[10]=E*Y+A*ne+y*B+_*be,c[14]=E*R+A*oe+y*H+_*U,c[3]=D*I+N*L+P*me+F*$,c[7]=D*z+N*k+P*de+F*Ee,c[11]=D*Y+N*ne+P*B+F*be,c[15]=D*R+N*oe+P*H+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],M=e[14],E=e[3],A=e[7],y=e[11],_=e[15],D=m*M-p*v,N=d*M-p*g,P=d*v-m*g,F=f*M-p*x,I=f*v-m*x,z=f*g-d*x;return i*(A*D-y*N+_*P)-s*(E*D-y*F+_*I)+l*(E*N-A*F+_*z)-c*(E*P-A*I+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],M=e[11],E=e[12],A=e[13],y=e[14],_=e[15],D=g*y*p-A*v*p+A*m*M-d*y*M-g*m*_+d*v*_,N=E*v*p-x*y*p-E*m*M+f*y*M+x*m*_-f*v*_,P=x*A*p-E*g*p+E*d*M-f*A*M-x*d*_+f*g*_,F=E*g*m-x*A*m-E*d*v+f*A*v+x*d*y-f*g*y,I=i*D+s*N+l*P+c*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=D*z,e[1]=(A*v*c-g*y*c-A*l*M+s*y*M+g*l*_-s*v*_)*z,e[2]=(d*y*c-A*m*c+A*l*p-s*y*p-d*l*_+s*m*_)*z,e[3]=(g*m*c-d*v*c-g*l*p+s*v*p+d*l*M-s*m*M)*z,e[4]=N*z,e[5]=(x*y*c-E*v*c+E*l*M-i*y*M-x*l*_+i*v*_)*z,e[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*_-i*m*_)*z,e[7]=(f*v*c-x*m*c+x*l*p-i*v*p-f*l*M+i*m*M)*z,e[8]=P*z,e[9]=(E*g*c-x*A*c-E*s*M+i*A*M+x*s*_-i*g*_)*z,e[10]=(f*A*c-E*d*c+E*s*p-i*A*p-f*s*_+i*d*_)*z,e[11]=(x*d*c-f*g*c-x*s*p+i*g*p+f*s*M-i*d*M)*z,e[12]=F*z,e[13]=(x*A*l-E*g*l+E*s*v-i*A*v-x*s*y+i*g*y)*z,e[14]=(E*d*l-f*A*l-E*s*m+i*A*m+f*s*y-i*d*y)*z,e[15]=(f*g*l-x*d*l+x*s*m-i*g*m-f*s*v+i*d*v)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,m=e.z,p=c*f,x=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*f,0,p*m-l*d,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,x=f+f,g=d+d,v=c*p,M=c*x,E=c*g,A=f*x,y=f*g,_=d*g,D=m*p,N=m*x,P=m*g,F=s.x,I=s.y,z=s.z;return l[0]=(1-(A+_))*F,l[1]=(M+P)*F,l[2]=(E-N)*F,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(v+_))*I,l[6]=(y+D)*I,l[7]=0,l[8]=(E+N)*z,l[9]=(y-D)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),d=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,x=1/f,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=Hi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(d===Hi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===fu)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=Hi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(d===Hi)E=-2/(f-c),A=-(f+c)/(f-c);else if(d===fu)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ts=new se,Ai=new nn,vb=new se(0,0,0),_b=new se(1,1,1),tr=new se,Oc=new se,ti=new se,Bx=new nn,zx=new ul;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Bx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return zx.setFromEuler(this),this.setFromQuaternion(zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yb=0;const Fx=new se,As=new ul,da=new nn,Pc=new se,Xo=new se,Sb=new se,Mb=new ul,Ix=new se(1,0,0),Hx=new se(0,1,0),Gx=new se(0,0,1),Vx={type:"added"},bb={type:"removed"},Rs={type:"childadded",child:null},Yd={type:"childremoved",child:null};class In extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new se,i=new Ea,s=new ul,l=new se(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new xt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(Hx,e)}rotateZ(e){return this.rotateOnAxis(Gx,e)}translateOnAxis(e,i){return Fx.copy(e).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(Hx,e)}translateZ(e){return this.translateOnAxis(Gx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Xo,Pc,this.up):da.lookAt(Pc,Xo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),As.setFromRotationMatrix(da),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vx),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(bb),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vx),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new se(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new se,ha=new se,Zd=new se,pa=new se,ws=new se,Cs=new se,kx=new se,Kd=new se,Qd=new se,Jd=new se,$d=new sn,eh=new sn,th=new sn;class Ci{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),Zd.subVectors(e,i);const f=Ri.dot(Ri),d=Ri.dot(ha),m=Ri.dot(Zd),p=ha.dot(ha),x=ha.dot(Zd),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,M=(p*m-d*x)*v,E=(f*x-d*m)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,d,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return $d.setScalar(0),eh.setScalar(0),th.setScalar(0),$d.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,s),th.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector($d,c.x),f.addScaledVector(eh,c.y),f.addScaledVector(th,c.z),f}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;ws.subVectors(l,s),Cs.subVectors(c,s),Kd.subVectors(e,s);const m=ws.dot(Kd),p=Cs.dot(Kd);if(m<=0&&p<=0)return i.copy(s);Qd.subVectors(e,l);const x=ws.dot(Qd),g=Cs.dot(Qd);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(ws,f);Jd.subVectors(e,c);const M=ws.dot(Jd),E=Cs.dot(Jd);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Cs,d);const y=x*E-M*g;if(y<=0&&g-x>=0&&M-E>=0)return kx.subVectors(c,l),d=(g-x)/(g-x+(M-E)),i.copy(l).addScaledVector(kx,d);const _=1/(y+A+v);return f=A*_,d=v*_,i.copy(s).addScaledVector(ws,f).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function nh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class wt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=ub(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=nh(f,c,e+1/3),this.g=nh(f,c,e),this.b=nh(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=x_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Rt.workingToColorSpace(Un.copy(this),e),Math.round(Tt(Un.r*255,0,255))*65536+Math.round(Tt(Un.g*255,0,255))*256+Math.round(Tt(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=x<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Rt.workingToColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Bc);const s=Fd(nr.h,Bc.h,i),l=Fd(nr.s,Bc.s,i),c=Fd(nr.l,Bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new wt;wt.NAMES=x_;let Eb=0;class js extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Os,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xh&&(s.blendSrc=this.blendSrc),this.blendDst!==vh&&(s.blendDst=this.blendDst),this.blendEquation!==Lr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class v_ extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new se,zc=new Wt;let Tb=0;class zn{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Cx,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(e),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cx&&(e.usage=this.usage),e}}class __ extends zn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class y_ extends zn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ni extends zn{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Ab=0;const pi=new nn,ih=new In,Ds=new se,ni=new fl,Wo=new fl,vn=new se;class ii extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?y_:__)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ni(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,Wo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Wo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)vn.fromBufferAttribute(d,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new se,m[Y]=new se;const p=new se,x=new se,g=new se,v=new Wt,M=new Wt,E=new Wt,A=new se,y=new se;function _(Y,R,L){p.fromBufferAttribute(s,Y),x.fromBufferAttribute(s,R),g.fromBufferAttribute(s,L),v.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,R),E.fromBufferAttribute(c,L),x.sub(p),g.sub(p),M.sub(v),E.sub(v);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(A.copy(x).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(k),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(k),d[Y].add(A),d[R].add(A),d[L].add(A),m[Y].add(y),m[R].add(y),m[L].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Y=0,R=D.length;Y<R;++Y){const L=D[Y],k=L.start,ne=L.count;for(let oe=k,me=k+ne;oe<me;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const N=new se,P=new se,F=new se,I=new se;function z(Y){F.fromBufferAttribute(l,Y),I.copy(F);const R=d[Y];N.copy(R),N.sub(F.multiplyScalar(F.dot(R))).normalize(),P.crossVectors(I,R);const k=P.dot(m[Y])<0?-1:1;f.setXYZW(Y,N.x,N.y,N.z,k)}for(let Y=0,R=D.length;Y<R;++Y){const L=D[Y],k=L.start,ne=L.count;for(let oe=k,me=k+ne;oe<me;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new se,c=new se,f=new se,d=new se,m=new se,p=new se,x=new se,g=new se;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,v=new p.constructor(m.length*x);let M=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*x;for(let _=0;_<x;_++)v[E++]=p[M++]}return new zn(v,x,g)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const v=p[x],M=e(v,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,M=g.length;v<M;v++)x.push(g[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jx=new nn,Rr=new wp,Fc=new dl,Xx=new se,Ic=new se,Hc=new se,Gc=new se,ah=new se,Vc=new se,Wx=new se,kc=new se;class Ta extends In{constructor(e=new ii,i=new v_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(ah.fromBufferAttribute(g,e),f?Vc.addScaledVector(ah,x):Vc.addScaledVector(ah.sub(i),x))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(Fc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Fc,Xx)===null||Rr.origin.distanceToSquared(Xx)>(e.far-e.near)**2))&&(jx.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(jx),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=f[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let P=D,F=N;P<F;P+=3){const I=d.getX(P),z=d.getX(P+1),Y=d.getX(P+2);l=jc(this,_,e,s,p,x,g,I,z,Y),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const D=d.getX(y),N=d.getX(y+1),P=d.getX(y+2);l=jc(this,f,e,s,p,x,g,D,N,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=f[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=D,F=N;P<F;P+=3){const I=P,z=P+1,Y=P+2;l=jc(this,_,e,s,p,x,g,I,z,Y),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const D=y,N=y+1,P=y+2;l=jc(this,f,e,s,p,x,g,D,N,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Rb(r,e,i,s,l,c,f,d){let m;if(e.side===qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,e.side===sr,d),m===null)return null;kc.copy(d),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function jc(r,e,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Ic),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const x=Rb(r,e,i,s,Ic,Hc,Gc,Wx);if(x){const g=new se;Ci.getBarycoord(Wx,Ic,Hc,Gc,g),l&&(x.uv=Ci.getInterpolatedAttribute(l,d,m,p,g,new Wt)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,d,m,p,g,new Wt)),f&&(x.normal=Ci.getInterpolatedAttribute(f,d,m,p,g,new se),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new se,materialIndex:0};Ci.getNormal(Ic,Hc,Gc,v.normal),x.face=v,x.barycoord=g}return x}class hl extends ii{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(x,3)),this.setAttribute("uv",new Ni(g,2));function E(A,y,_,D,N,P,F,I,z,Y,R){const L=P/z,k=F/Y,ne=P/2,oe=F/2,me=I/2,de=z+1,B=Y+1;let H=0,$=0;const Ee=new se;for(let be=0;be<B;be++){const U=be*k-oe;for(let ie=0;ie<de;ie++){const ge=ie*L-ne;Ee[A]=ge*D,Ee[y]=U*N,Ee[_]=me,p.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[y]=0,Ee[_]=I>0?1:-1,x.push(Ee.x,Ee.y,Ee.z),g.push(ie/z),g.push(1-be/Y),H+=1}}for(let be=0;be<Y;be++)for(let U=0;U<z;U++){const ie=v+U+de*be,ge=v+U+de*(be+1),Ce=v+(U+1)+de*(be+1),Be=v+(U+1)+de*be;m.push(ie,ge,Be),m.push(ge,Ce,Be),$+=6}d.addGroup(M,$,R),M+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=Hs(r[i]);for(const l in s)e[l]=s[l]}return e}function wb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function S_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Cb={clone:Hs,merge:Bn};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class M_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new se,qx=new Wt,Yx=new Wt;class wi extends M_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,qx,Yx),i.subVectors(Yx,qx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ns=-90,Ls=1;class Lb extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Ns,Ls,e,i);l.layers=this.layers,this.add(l);const c=new wi(Ns,Ls,e,i);c.layers=this.layers,this.add(c);const f=new wi(Ns,Ls,e,i);f.layers=this.layers,this.add(f);const d=new wi(Ns,Ls,e,i);d.layers=this.layers,this.add(d);const m=new wi(Ns,Ls,e,i);m.layers=this.layers,this.add(m);const p=new wi(Ns,Ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===fu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class b_ extends Fn{constructor(e=[],i=Br,s,l,c,f,d,m,p,x){super(e,i,s,l,c,f,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new b_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new hl(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:_a});c.uniforms.tEquirect.value=i;const f=new Ta(l,c),d=i.minFilter;return i.minFilter===Or&&(i.minFilter=On),new Lb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Xc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Xc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Ob extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Pb extends Fn{constructor(e=null,i=1,s=1,l,c,f,d,m,p=Cn,x=Cn,g,v){super(null,f,d,m,p,x,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new se,Bb=new se,zb=new xt;class Nr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=sh.subVectors(s,i).cross(Bb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(sh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zb.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new dl,Fb=new Wt(.5,.5),Wc=new se;class T_{constructor(e=new Nr,i=new Nr,s=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],M=c[7],E=c[8],A=c[9],y=c[10],_=c[11],D=c[12],N=c[13],P=c[14],F=c[15];if(l[0].setComponents(p-f,M-x,_-E,F-D).normalize(),l[1].setComponents(p+f,M+x,_+E,F+D).normalize(),l[2].setComponents(p+d,M+g,_+A,F+N).normalize(),l[3].setComponents(p-d,M-g,_-A,F-N).normalize(),s)l[4].setComponents(m,v,y,P).normalize(),l[5].setComponents(p-m,M-v,_-y,F-P).normalize();else if(l[4].setComponents(p-m,M-v,_-y,F-P).normalize(),i===Hi)l[5].setComponents(p+m,M+v,_+y,F+P).normalize();else if(i===fu)l[5].setComponents(m,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const i=Fb.distanceTo(e.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?e.max.x:e.min.x,Wc.y=l.normal.y>0?e.max.y:e.min.y,Wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ib extends js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new se,pu=new se,Zx=new nn,qo=new wp,qc=new dl,oh=new se,Kx=new se;class Hb extends In{constructor(e=new ii,i=new Ib){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)hu.fromBufferAttribute(i,l-1),pu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=hu.distanceTo(pu);e.setAttribute("lineDistance",new Ni(s,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;Zx.copy(l).invert(),qo.copy(e.ray).applyMatrix4(Zx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let A=M,y=E-1;A<y;A+=p){const _=x.getX(A),D=x.getX(A+1),N=Yc(this,e,qo,m,_,D,A);N&&i.push(N)}if(this.isLineLoop){const A=x.getX(E-1),y=x.getX(M),_=Yc(this,e,qo,m,A,y,E-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=M,y=E-1;A<y;A+=p){const _=Yc(this,e,qo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Yc(this,e,qo,m,E-1,M,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Yc(r,e,i,s,l,c,f){const d=r.geometry.attributes.position;if(hu.fromBufferAttribute(d,l),pu.fromBufferAttribute(d,c),i.distanceSqToSegment(hu,pu,oh,Kx)>s)return;oh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(oh);if(!(p<e.near||p>e.far))return{distance:p,point:Kx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Qx=new se,Jx=new se;class Gb extends Hb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Qx.fromBufferAttribute(i,l),Jx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Qx.distanceTo(Jx);e.setAttribute("lineDistance",new Ni(s,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vb extends js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $x=new nn,cp=new wp,Zc=new dl,Kc=new se;class kb extends In{constructor(e=new ii,i=new Vb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Zc.copy(s.boundingSphere),Zc.applyMatrix4(l),Zc.radius+=c,e.ray.intersectsSphere(Zc)===!1)return;$x.copy(l).invert(),cp.copy(e.ray).applyMatrix4($x);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=v,A=M;E<A;E++){const y=p.getX(E);Kc.fromBufferAttribute(g,y),ev(Kc,y,m,l,e,i,this)}}else{const v=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=v,A=M;E<A;E++)Kc.fromBufferAttribute(g,E),ev(Kc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ev(r,e,i,s,l,c,f){const d=cp.distanceSqToPoint(r);if(d<i){const m=new se;cp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class al extends Fn{constructor(e,i,s=ji,l,c,f,d=Cn,m=Cn,p,x=ba,g=1){if(x!==ba&&x!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jb extends al{constructor(e,i=ji,s=Br,l,c,f=Cn,d=Cn,m,p=ba){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _u extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=e/d,v=i/m,M=[],E=[],A=[],y=[];for(let _=0;_<x;_++){const D=_*v-f;for(let N=0;N<p;N++){const P=N*g-c;E.push(P,-D,0),A.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const N=D+p*_,P=D+p*(_+1),F=D+1+p*(_+1),I=D+1+p*_;M.push(N,P,I),M.push(P,F,I)}this.setIndex(M),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(A,3)),this.setAttribute("uv",new Ni(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xb extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wb extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cp extends M_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Yb extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tv(r,e,i,s){const l=Zb(s);switch(i){case f_:return r*e;case h_:return r*e/l.components*l.byteLength;case Mp:return r*e/l.components*l.byteLength;case Fs:return r*e*2/l.components*l.byteLength;case bp:return r*e*2/l.components*l.byteLength;case d_:return r*e*3/l.components*l.byteLength;case Di:return r*e*4/l.components*l.byteLength;case Ep:return r*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Uh:return Math.max(r,16)*Math.max(e,8)/4;case Dh:case Lh:return Math.max(r,8)*Math.max(e,8)/2;case Oh:case Ph:case zh:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bh:case Ih:case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ep:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tp:case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ap:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sp:case op:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zb(r){switch(r){case gi:case o_:return{byteLength:1,components:1};case tl:case l_:case Ma:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case ji:case _p:case Ii:return{byteLength:4,components:1};case c_:case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);function R_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Kb(r){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,x);else{g.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<g.length;M++){const E=g[v],A=g[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,g[v]=A)}g.length=v+1;for(let M=0,E=g.length;M<E;M++){const A=g[M];r.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var Qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Qb,alphahash_pars_fragment:Jb,alphamap_fragment:$b,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:aE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:oE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:fE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:xE,color_pars_vertex:vE,color_vertex:_E,common:yE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:ME,displacementmap_pars_vertex:bE,displacementmap_vertex:EE,emissivemap_fragment:TE,emissivemap_pars_fragment:AE,colorspace_fragment:RE,colorspace_pars_fragment:wE,envmap_fragment:CE,envmap_common_pars_fragment:DE,envmap_pars_fragment:NE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:kE,envmap_vertex:UE,fog_vertex:OE,fog_pars_vertex:PE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:IE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:VE,lights_toon_fragment:jE,lights_toon_pars_fragment:XE,lights_phong_fragment:WE,lights_phong_pars_fragment:qE,lights_physical_fragment:YE,lights_physical_pars_fragment:ZE,lights_fragment_begin:KE,lights_fragment_maps:QE,lights_fragment_end:JE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:nT,map_fragment:iT,map_pars_fragment:aT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:lT,morphinstance_vertex:cT,morphcolor_vertex:uT,morphnormal_vertex:fT,morphtarget_pars_vertex:dT,morphtarget_vertex:hT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:xT,normal_vertex:vT,normalmap_pars_fragment:_T,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:bT,opaque_fragment:ET,packing:TT,premultiplied_alpha_fragment:AT,project_vertex:RT,dithering_fragment:wT,dithering_pars_fragment:CT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:UT,shadowmap_vertex:OT,shadowmask_pars_fragment:PT,skinbase_vertex:BT,skinning_pars_vertex:zT,skinning_vertex:FT,skinnormal_vertex:IT,specularmap_fragment:HT,specularmap_pars_fragment:GT,tonemapping_fragment:VT,tonemapping_pars_fragment:kT,transmission_fragment:jT,transmission_pars_fragment:XT,uv_pars_fragment:WT,uv_pars_vertex:qT,uv_vertex:YT,worldpos_vertex:ZT,background_vert:KT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:$T,cube_vert:e2,cube_frag:t2,depth_vert:n2,depth_frag:i2,distance_vert:a2,distance_frag:r2,equirect_vert:s2,equirect_frag:o2,linedashed_vert:l2,linedashed_frag:c2,meshbasic_vert:u2,meshbasic_frag:f2,meshlambert_vert:d2,meshlambert_frag:h2,meshmatcap_vert:p2,meshmatcap_frag:m2,meshnormal_vert:g2,meshnormal_frag:x2,meshphong_vert:v2,meshphong_frag:_2,meshphysical_vert:y2,meshphysical_frag:S2,meshtoon_vert:M2,meshtoon_frag:b2,points_vert:E2,points_frag:T2,shadow_vert:A2,shadow_frag:R2,sprite_vert:w2,sprite_frag:C2},Ie={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Qc={r:0,b:0,g:0},Cr=new Ea,D2=new nn;function N2(r,e,i,s,l,c,f){const d=new wt(0);let m=c===!0?0:1,p,x,g=null,v=0,M=null;function E(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?i:e).get(P)),P}function A(N){let P=!1;const F=E(N);F===null?_(d,m):F&&F.isColor&&(_(F,1),P=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,P){const F=E(P);F&&(F.isCubeTexture||F.mapping===vu)?(x===void 0&&(x=new Ta(new hl(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Hs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Cr.copy(P.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(Cr)),x.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Gt,(g!==F||v!==F.version||M!==r.toneMapping)&&(x.material.needsUpdate=!0,g=F,v=F.version,M=r.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ta(new _u(2,2),new xi({name:"BackgroundMaterial",uniforms:Hs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Gt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||v!==F.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=F,v=F.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,P){N.getRGB(Qc,S_(r)),s.buffers.color.setClear(Qc.r,Qc.g,Qc.b,P,f)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),m=P,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:A,addToRenderList:y,dispose:D}}function L2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(L,k,ne,oe,me){let de=!1;const B=g(oe,ne,k);c!==B&&(c=B,p(c.object)),de=M(L,oe,ne,me),de&&E(L,oe,ne,me),me!==null&&e.update(me,r.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,P(L,k,ne,oe),me!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return r.createVertexArray()}function p(L){return r.bindVertexArray(L)}function x(L){return r.deleteVertexArray(L)}function g(L,k,ne){const oe=ne.wireframe===!0;let me=s[L.id];me===void 0&&(me={},s[L.id]=me);let de=me[k.id];de===void 0&&(de={},me[k.id]=de);let B=de[oe];return B===void 0&&(B=v(m()),de[oe]=B),B}function v(L){const k=[],ne=[],oe=[];for(let me=0;me<i;me++)k[me]=0,ne[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:oe,object:L,attributes:{},index:null}}function M(L,k,ne,oe){const me=c.attributes,de=k.attributes;let B=0;const H=ne.getAttributes();for(const $ in H)if(H[$].location>=0){const be=me[$];let U=de[$];if(U===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function E(L,k,ne,oe){const me={},de=k.attributes;let B=0;const H=ne.getAttributes();for(const $ in H)if(H[$].location>=0){let be=de[$];be===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(be=L.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),me[$]=U,B++}c.attributes=me,c.attributesNum=B,c.index=oe}function A(){const L=c.newAttributes;for(let k=0,ne=L.length;k<ne;k++)L[k]=0}function y(L){_(L,0)}function _(L,k){const ne=c.newAttributes,oe=c.enabledAttributes,me=c.attributeDivisors;ne[L]=1,oe[L]===0&&(r.enableVertexAttribArray(L),oe[L]=1),me[L]!==k&&(r.vertexAttribDivisor(L,k),me[L]=k)}function D(){const L=c.newAttributes,k=c.enabledAttributes;for(let ne=0,oe=k.length;ne<oe;ne++)k[ne]!==L[ne]&&(r.disableVertexAttribArray(ne),k[ne]=0)}function N(L,k,ne,oe,me,de,B){B===!0?r.vertexAttribIPointer(L,k,ne,me,de):r.vertexAttribPointer(L,k,ne,oe,me,de)}function P(L,k,ne,oe){A();const me=oe.attributes,de=ne.getAttributes(),B=k.defaultAttributeValues;for(const H in de){const $=de[H];if($.location>=0){let Ee=me[H];if(Ee===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),Ee!==void 0){const be=Ee.normalized,U=Ee.itemSize,ie=e.get(Ee);if(ie===void 0)continue;const ge=ie.buffer,Ce=ie.type,Be=ie.bytesPerElement,te=Ce===r.INT||Ce===r.UNSIGNED_INT||Ee.gpuType===_p;if(Ee.isInterleavedBufferAttribute){const he=Ee.data,Le=he.stride,je=Ee.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<$.locationSize;Me++)_($.location+Me,he.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<$.locationSize;Me++)y($.location+Me);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Me=0;Me<$.locationSize;Me++)N($.location+Me,U/$.locationSize,Ce,be,Le*Be,(je+U/$.locationSize*Me)*Be,te)}else{if(Ee.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)_($.location+he,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let he=0;he<$.locationSize;he++)y($.location+he);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let he=0;he<$.locationSize;he++)N($.location+he,U/$.locationSize,Ce,be,U*Be,U/$.locationSize*he*Be,te)}}else if(B!==void 0){const be=B[H];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv($.location,be);break;case 3:r.vertexAttrib3fv($.location,be);break;case 4:r.vertexAttrib4fv($.location,be);break;default:r.vertexAttrib1fv($.location,be)}}}}D()}function F(){Y();for(const L in s){const k=s[L];for(const ne in k){const oe=k[ne];for(const me in oe)x(oe[me].object),delete oe[me];delete k[ne]}delete s[L]}}function I(L){if(s[L.id]===void 0)return;const k=s[L.id];for(const ne in k){const oe=k[ne];for(const me in oe)x(oe[me].object),delete oe[me];delete k[ne]}delete s[L.id]}function z(L){for(const k in s){const ne=s[k];if(ne[L.id]===void 0)continue;const oe=ne[L.id];for(const me in oe)x(oe[me].object),delete oe[me];delete ne[L.id]}}function Y(){R(),f=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function U2(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E];i.update(M,s,1)}function m(p,x,g,v){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],x[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,g);let E=0;for(let A=0;A<g;A++)E+=x[A]*v[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function O2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Di&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==gi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!Y)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ft("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:P,maxSamples:F,samples:I}}function P2(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Nr,d=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||s!==0||l;return l=v,s=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,M){const E=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!y)c?x(null):p();else{const D=c?0:s,N=D*4;let P=_.clippingState||null;m.value=P,P=x(E,v,N,M);for(let F=0;F!==N;++F)P[F]=i[F];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,v,M,E){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const _=M+A*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,P=M;N!==A;++N,P+=4)f.copy(g[N]).applyMatrix4(D,d),f.normal.toArray(y,P),y[P+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function B2(r){let e=new WeakMap;function i(f,d){return d===Ah?f.mapping=Br:d===Rh&&(f.mapping=zs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ah||d===Rh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new E_(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const rr=4,nv=[.125,.215,.35,.446,.526,.582],Ur=20,z2=256,Yo=new Cp,iv=new wt;let lh=null,ch=0,uh=0,fh=!1;const F2=new se;class av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=F2}=c;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Br||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ma,format:Di,colorSpace:Is,depthBuffer:!1},l=rv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I2(c)),this._blurMaterial=G2(c,e,i),this._ggxMaterial=H2(c,e,i)}return l}_compileMaterial(e){const i=new Ta(new ii,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new wi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,M=g.toneMapping;g.getClearColor(iv),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ta(new hl,new v_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,_=!0):(y.color.copy(iv),_=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const F=this._cubeSize;Us(l,P*F,N>2?F:0,F,F),g.setRenderTarget(l),_&&g.render(A,m),g.render(e,m)}g.toneMapping=M,g.autoClear=v,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Br||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Us(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=0+p*1.25,M=g*v,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-rr?s-E+rr:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Us(c,y,_,3*A,2*A),l.setRenderTarget(c),l.render(d,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Us(e,y,_,3*A,2*A),l.setRenderTarget(e),l.render(d,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ur-1),A=c/E,y=isFinite(c)?1+Math.floor(x*A):Ur;y>Ur&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ur}`);const _=[];let D=0;for(let z=0;z<Ur;++z){const Y=z/A,R=Math.exp(-Y*Y/2);_.push(R),z===0?D+=R:z<y&&(D+=2*R)}for(let z=0;z<_.length;z++)_[z]=_[z]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-s;const P=this._sizeLods[l],F=3*P*(l>N-rr?l-N+rr:0),I=4*(this._cubeSize-P);Us(i,F,I,3*P,2*P),m.setRenderTarget(i),m.render(g,Yo)}}function I2(r){const e=[],i=[],s=[];let l=r;const c=r-rr+1+nv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>r-rr?m=nv[f-r+rr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,E=6,A=3,y=2,_=1,D=new Float32Array(A*E*M),N=new Float32Array(y*E*M),P=new Float32Array(_*E*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,Y=I>2?0:-1,R=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];D.set(R,A*E*I),N.set(v,y*E*I);const L=[I,I,I,I,I,I];P.set(L,_*E*I)}const F=new ii;F.setAttribute("position",new zn(D,A)),F.setAttribute("uv",new zn(N,y)),F.setAttribute("faceIndex",new zn(P,_)),s.push(new Ta(F,null)),l>rr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function rv(r,e,i){const s=new Vi(r,e,i);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Us(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function H2(r,e,i){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function G2(r,e,i){const s=new Float32Array(Ur),l=new se(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function sv(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ov(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V2(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,x=m===Br||m===zs;if(p||x){let g=e.get(d);const v=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new av(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new av(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function k2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&il("WebGLRenderer: "+s+" extension not supported."),l}}}function j2(r,e,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(g){const v=[],M=g.index,E=g.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let N=0,P=D.length;N<P;N+=3){const F=D[N+0],I=D[N+1],z=D[N+2];v.push(F,I,I,z,z,F)}}else if(E!==void 0){const D=E.array;A=E.version;for(let N=0,P=D.length/3-1;N<P;N+=3){const F=N+0,I=N+1,z=N+2;v.push(F,I,I,z,z,F)}}else return;const y=new(p_(v)?y_:__)(v,1);y.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,y)}function x(g){const v=c.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function X2(r,e,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function x(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,s,1)}function g(v,M,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/f,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,A,0,E);let _=0;for(let D=0;D<E;D++)_+=M[D]*A[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function W2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function q2(r,e,i){const s=new WeakMap,l=new sn;function c(f,d,m){const p=f.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let L=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",L)};var M=L;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),y===!0&&(P=3);let F=d.attributes.position.count*P,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*I*4*g),Y=new m_(z,F,I,g);Y.type=Ii,Y.needsUpdate=!0;const R=P*4;for(let k=0;k<g;k++){const ne=_[k],oe=D[k],me=N[k],de=F*I*4*k;for(let B=0;B<ne.count;B++){const H=B*R;E===!0&&(l.fromBufferAttribute(ne,B),z[de+H+0]=l.x,z[de+H+1]=l.y,z[de+H+2]=l.z,z[de+H+3]=0),A===!0&&(l.fromBufferAttribute(oe,B),z[de+H+4]=l.x,z[de+H+5]=l.y,z[de+H+6]=l.z,z[de+H+7]=0),y===!0&&(l.fromBufferAttribute(me,B),z[de+H+8]=l.x,z[de+H+9]=l.y,z[de+H+10]=l.z,z[de+H+11]=me.itemSize===4?l.w:1)}}v={count:g,texture:Y,size:new Wt(F,I)},s.set(d,v),d.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Y2(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Z2={[$v]:"LINEAR_TONE_MAPPING",[e_]:"REINHARD_TONE_MAPPING",[t_]:"CINEON_TONE_MAPPING",[n_]:"ACES_FILMIC_TONE_MAPPING",[a_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[i_]:"CUSTOM_TONE_MAPPING"};function K2(r,e,i,s,l){const c=new Vi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Vi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),d=new ii;d.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const m=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ta(d,m),x=new Cp(-1,1,1,-1,0,1);let g=null,v=null,M=!1,E,A=null,y=[],_=!1;this.setSize=function(D,N){c.setSize(D,N),f.setSize(D,N);for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(D,N)}},this.setEffects=function(D){y=D,_=y.length>0&&y[0].isRenderPass===!0;const N=c.width,P=c.height;for(let F=0;F<y.length;F++){const I=y[F];I.setSize&&I.setSize(N,P)}},this.begin=function(D,N){if(M||D.toneMapping===Gi&&y.length===0)return!1;if(A=N,N!==null){const P=N.width,F=N.height;(c.width!==P||c.height!==F)&&this.setSize(P,F)}return _===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(D,N){D.toneMapping=E,M=!0;let P=c,F=f;for(let I=0;I<y.length;I++){const z=y[I];if(z.enabled!==!1&&(z.render(D,F,P,N),z.needsSwap!==!1)){const Y=P;P=F,F=Y}}if(g!==D.outputColorSpace||v!==D.toneMapping){g=D.outputColorSpace,v=D.toneMapping,m.defines={},Rt.getTransfer(g)===Gt&&(m.defines.SRGB_TRANSFER="");const I=Z2[v];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(A),D.render(p,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const w_=new Fn,up=new al(1,1),C_=new m_,D_=new gb,N_=new b_,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),dv=new Float32Array(4);function Xs(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=lv[l];if(c===void 0&&(c=new Float32Array(l),lv[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Su(r,e){let i=cv[e];i===void 0&&(i=new Int32Array(e),cv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function Q2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function J2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function $2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function eA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function tA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;dv.set(s),r.uniformMatrix2fv(this.addr,!1,dv),gn(i,s)}}function nA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;fv.set(s),r.uniformMatrix3fv(this.addr,!1,fv),gn(i,s)}}function iA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;uv.set(s),r.uniformMatrix4fv(this.addr,!1,uv),gn(i,s)}}function aA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function rA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function sA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function oA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function lA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function cA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function uA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function fA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function dA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(up.compareFunction=i.isReversedDepthBuffer()?Ap:Tp,c=up):c=w_,i.setTexture2D(e||c,l)}function hA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||D_,l)}function pA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||N_,l)}function mA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||C_,l)}function gA(r){switch(r){case 5126:return Q2;case 35664:return J2;case 35665:return $2;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function xA(r,e){r.uniform1fv(this.addr,e)}function vA(r,e){const i=Xs(e,this.size,2);r.uniform2fv(this.addr,i)}function _A(r,e){const i=Xs(e,this.size,3);r.uniform3fv(this.addr,i)}function yA(r,e){const i=Xs(e,this.size,4);r.uniform4fv(this.addr,i)}function SA(r,e){const i=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function MA(r,e){const i=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bA(r,e){const i=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function EA(r,e){r.uniform1iv(this.addr,e)}function TA(r,e){r.uniform2iv(this.addr,e)}function AA(r,e){r.uniform3iv(this.addr,e)}function RA(r,e){r.uniform4iv(this.addr,e)}function wA(r,e){r.uniform1uiv(this.addr,e)}function CA(r,e){r.uniform2uiv(this.addr,e)}function DA(r,e){r.uniform3uiv(this.addr,e)}function NA(r,e){r.uniform4uiv(this.addr,e)}function LA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=up:f=w_;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,c[d])}function UA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||D_,c[f])}function OA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||N_,c[f])}function PA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||C_,c[f])}function BA(r){switch(r){case 5126:return xA;case 35664:return vA;case 35665:return _A;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return bA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return wA;case 36294:return CA;case 36295:return DA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}class zA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gA(i.type)}}class FA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BA(i.type)}}class IA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function hv(r,e){r.seq.push(e),r.map[e.id]=e}function HA(r,e,i){const s=r.name,l=s.length;for(dh.lastIndex=0;;){const c=dh.exec(s),f=dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){hv(i,p===void 0?new zA(d,r,e):new FA(d,r,e));break}else{let g=i.map[d];g===void 0&&(g=new IA(d),hv(i,g)),i=g}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);HA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function pv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const GA=37297;let VA=0;function kA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const mv=new xt;function jA(r){Rt._getMatrix(mv,Rt.workingColorSpace,r);const e=`mat3( ${mv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case uu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+kA(r.getShaderSource(e),d)}else return c}function XA(r,e){const i=jA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WA={[$v]:"Linear",[e_]:"Reinhard",[t_]:"Cineon",[n_]:"ACESFilmic",[a_]:"AgX",[r_]:"Neutral",[i_]:"Custom"};function qA(r,e){const i=WA[e];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new se;function YA(){Rt.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function KA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function QA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function Jo(r){return r!==""}function xv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(r){return r.replace(JA,eR)}const $A=new Map;function eR(r,e){let i=vt[e];if(i===void 0){const s=$A.get(e);if(s!==void 0)i=vt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return fp(i)}const tR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(tR,nR)}function nR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iR={[nu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function aR(r){return iR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rR={[Br]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function sR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const oR={[zs]:"ENVMAP_MODE_REFRACTION"};function lR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cR={[Jv]:"ENVMAP_BLENDING_MULTIPLY",[KM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function uR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cR[r.combine]||"ENVMAP_BLENDING_NONE"}function fR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=aR(i),p=sR(i),x=lR(i),g=uR(i),v=fR(i),M=ZA(i),E=KA(c),A=l.createProgram();let y,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(y=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Gi?qA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,XA("linearToOutputTexel",i.outputColorSpace),YA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=fp(f),f=xv(f,i),f=vv(f,i),d=fp(d),d=xv(d,i),d=vv(d,i),f=_v(f),d=_v(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=D+y+f,P=D+_+d,F=pv(l,l.VERTEX_SHADER,N),I=pv(l,l.FRAGMENT_SHADER,P);l.attachShader(A,F),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(k){if(r.debug.checkShaderErrors){const ne=l.getProgramInfoLog(A)||"",oe=l.getShaderInfoLog(F)||"",me=l.getShaderInfoLog(I)||"",de=ne.trim(),B=oe.trim(),H=me.trim();let $=!0,Ee=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,F,I);else{const be=gv(l,F,"vertex"),U=gv(l,I,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+be+`
`+U)}else de!==""?ft("WebGLProgram: Program Info Log:",de):(B===""||H==="")&&(Ee=!1);Ee&&(k.diagnostics={runnable:$,programLog:de,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:_}})}l.deleteShader(F),l.deleteShader(I),Y=new ou(l,A),R=QA(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(A,GA)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=I,this}let hR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new mR(e),i.set(e,s)),s}}class mR{constructor(e){this.id=hR++,this.code=e,this.usedTimes=0}}function gR(r,e,i,s,l,c,f){const d=new g_,m=new pR,p=new Set,x=[],g=new Map,v=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,L,k,ne,oe){const me=ne.fog,de=oe.geometry,B=R.isMeshStandardMaterial?ne.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||B),$=H&&H.mapping===vu?H.image.height:null,Ee=E[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&ft("WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const be=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=be!==void 0?be.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let ge,Ce,Be,te;if(Ee){const At=Fi[Ee];ge=At.vertexShader,Ce=At.fragmentShader}else ge=R.vertexShader,Ce=R.fragmentShader,m.update(R),Be=m.getVertexShaderID(R),te=m.getFragmentShaderID(R);const he=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),je=oe.isInstancedMesh===!0,Me=oe.isBatchedMesh===!0,Ke=!!R.map,lt=!!R.matcap,ct=!!H,it=!!R.aoMap,ot=!!R.lightMap,st=!!R.bumpMap,Vt=!!R.normalMap,V=!!R.displacementMap,Ct=!!R.emissiveMap,_t=!!R.metalnessMap,Je=!!R.roughnessMap,xe=R.anisotropy>0,O=R.clearcoat>0,b=R.dispersion>0,q=R.iridescence>0,fe=R.sheen>0,ve=R.transmission>0,ue=xe&&!!R.anisotropyMap,Ve=O&&!!R.clearcoatMap,De=O&&!!R.clearcoatNormalMap,Xe=O&&!!R.clearcoatRoughnessMap,nt=q&&!!R.iridescenceMap,Ae=q&&!!R.iridescenceThicknessMap,Re=fe&&!!R.sheenColorMap,Oe=fe&&!!R.sheenRoughnessMap,He=!!R.specularMap,Ue=!!R.specularColorMap,mt=!!R.specularIntensityMap,W=ve&&!!R.transmissionMap,ze=ve&&!!R.thicknessMap,we=!!R.gradientMap,Ge=!!R.alphaMap,Te=R.alphaTest>0,Se=!!R.alphaHash,Ne=!!R.extensions;let ut=Gi;R.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ut=r.toneMapping);const zt={shaderID:Ee,shaderType:R.type,shaderName:R.name,vertexShader:ge,fragmentShader:Ce,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Me,batchingColor:Me&&oe._colorsTexture!==null,instancing:je,instancingColor:je&&oe.instanceColor!==null,instancingMorph:je&&oe.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Is,alphaToCoverage:!!R.alphaToCoverage,map:Ke,matcap:lt,envMap:ct,envMapMode:ct&&H.mapping,envMapCubeUVHeight:$,aoMap:it,lightMap:ot,bumpMap:st,normalMap:Vt,displacementMap:V,emissiveMap:Ct,normalMapObjectSpace:Vt&&R.normalMapType===tb,normalMapTangentSpace:Vt&&R.normalMapType===eb,metalnessMap:_t,roughnessMap:Je,anisotropy:xe,anisotropyMap:ue,clearcoat:O,clearcoatMap:Ve,clearcoatNormalMap:De,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:Ae,sheen:fe,sheenColorMap:Re,sheenRoughnessMap:Oe,specularMap:He,specularColorMap:Ue,specularIntensityMap:mt,transmission:ve,transmissionMap:W,thicknessMap:ze,gradientMap:we,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Te,alphaHash:Se,combine:R.combine,mapUv:Ke&&A(R.map.channel),aoMapUv:it&&A(R.aoMap.channel),lightMapUv:ot&&A(R.lightMap.channel),bumpMapUv:st&&A(R.bumpMap.channel),normalMapUv:Vt&&A(R.normalMap.channel),displacementMapUv:V&&A(R.displacementMap.channel),emissiveMapUv:Ct&&A(R.emissiveMap.channel),metalnessMapUv:_t&&A(R.metalnessMap.channel),roughnessMapUv:Je&&A(R.roughnessMap.channel),anisotropyMapUv:ue&&A(R.anisotropyMap.channel),clearcoatMapUv:Ve&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&A(R.sheenRoughnessMap.channel),specularMapUv:He&&A(R.specularMap.channel),specularColorMapUv:Ue&&A(R.specularColorMap.channel),specularIntensityMapUv:mt&&A(R.specularIntensityMap.channel),transmissionMapUv:W&&A(R.transmissionMap.channel),thicknessMapUv:ze&&A(R.thicknessMap.channel),alphaMapUv:Ge&&A(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Vt||xe),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(Ke||Ge),fog:!!me,useFog:R.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ke&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ct&&R.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(R.emissiveMap.colorSpace)===Gt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ga,flipSided:R.side===qn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ne&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&R.extensions.multiDraw===!0||Me)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function _(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)L.push(k),L.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(D(L,R),N(L,R),L.push(r.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function D(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function N(R,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),R.push(d.mask)}function P(R){const L=E[R.type];let k;if(L){const ne=Fi[L];k=Cb.clone(ne.uniforms)}else k=R.uniforms;return k}function F(R,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new dR(r,L,R,c),x.push(k),g.set(L,k)),k}function I(R){if(--R.usedTimes===0){const L=x.indexOf(R);x[L]=x[x.length-1],x.pop(),g.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:x,dispose:Y}}function xR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function vR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,v,M,E,A,y){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:M,groupOrder:E,renderOrder:g.renderOrder,z:A,group:y},r[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=y),e++,_}function d(g,v,M,E,A,y){const _=f(g,v,M,E,A,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,v,M,E,A,y){const _=f(g,v,M,E,A,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,v){i.length>1&&i.sort(g||vR),s.length>1&&s.sort(v||Sv),l.length>1&&l.sort(v||Sv)}function x(){for(let g=e,v=r.length;g<v;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function _R(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Mv,r.set(s,[f])):l>=c.length?(f=new Mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function yR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new wt};break;case"SpotLight":i={position:new se,direction:new se,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=i,i}}}function SR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let MR=0;function bR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ER(r){const e=new yR,i=SR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const l=new se,c=new nn,f=new nn;function d(p){let x=0,g=0,v=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,E=0,A=0,y=0,_=0,D=0,N=0,P=0,F=0,I=0,z=0;p.sort(bR);for(let R=0,L=p.length;R<L;R++){const k=p[R],ne=k.color,oe=k.intensity,me=k.distance;let de=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Fs?de=k.shadow.map.texture:de=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=ne.r*oe,g+=ne.g*oe,v+=ne.b*oe;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],oe);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=de,s.directionalShadowMatrix[M]=k.shadow.matrix,D++}s.directional[M]=B,M++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(ne).multiplyScalar(oe),B.distance=me,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[A]=B;const H=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,H.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[A]=H.matrix,k.castShadow){const $=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=de,P++}A++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(ne).multiplyScalar(oe),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=B,y++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=de,s.pointShadowMatrix[E]=k.shadow.matrix,N++}s.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(oe),B.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[_]=B,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==A||Y.rectAreaLength!==y||Y.hemiLength!==_||Y.numDirectionalShadows!==D||Y.numPointShadows!==N||Y.numSpotShadows!==P||Y.numSpotMaps!==F||Y.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=A,Y.rectAreaLength=y,Y.hemiLength=_,Y.numDirectionalShadows=D,Y.numPointShadows=N,Y.numSpotShadows=P,Y.numSpotMaps=F,Y.numLightProbes=z,s.version=MR++)}function m(p,x){let g=0,v=0,M=0,E=0,A=0;const y=x.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const N=p[_];if(N.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),g++}else if(N.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),v++}else if(N.isHemisphereLight){const P=s.hemi[A];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function bv(r){const e=new ER(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function TR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new bv(r),e.set(l,[d])):c>=f.length?(d=new bv(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const AR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wR=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],CR=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],Ev=new nn,Zo=new se,hh=new se;function DR(r,e,i){let s=new T_;const l=new Wt,c=new Wt,f=new sn,d=new Wb,m=new qb,p={},x=i.maxTextureSize,g={[sr]:qn,[qn]:sr,[ga]:ga},v=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:AR,fragmentShader:RR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ta(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let _=this.type;this.render=function(I,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===NM&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=nu);const R=r.getRenderTarget(),L=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(_a),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const oe=_!==this.type;oe&&z.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(de=>de.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,de=I.length;me<de;me++){const B=I[me],H=B.shadow;if(H===void 0){ft("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();if(l.multiply($),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/$.y),l.y=c.y*$.y,H.mapSize.y=c.y)),H.map===null||oe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(B.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Fs,type:Ma,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new al(l.x,l.y,Ii),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{B.isPointLight?(H.map=new E_(l.x),H.map.depthTexture=new jb(l.x,ji)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new al(l.x,l.y,ji)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ba;const be=r.state.buffers.depth.getReversed();this.type===nu?(H.map.depthTexture.compareFunction=be?Ap:Tp,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<Ee;be++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,be),r.clear();else{be===0&&(r.setRenderTarget(H.map),r.clear());const U=H.getViewport(be);f.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),ne.viewport(f)}if(B.isPointLight){const U=H.camera,ie=H.matrix,ge=B.distance||U.far;ge!==U.far&&(U.far=ge,U.updateProjectionMatrix()),Zo.setFromMatrixPosition(B.matrixWorld),U.position.copy(Zo),hh.copy(U.position),hh.add(wR[be]),U.up.copy(CR[be]),U.lookAt(hh),U.updateMatrixWorld(),ie.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Ev.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ev,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(B);s=H.getFrustum(),P(z,Y,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&D(H,Y),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(R,L,k)};function D(I,z){const Y=e.update(A);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(l.x,l.y,{format:Fs,type:Ma})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,Y,v,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,Y,M,A,null)}function N(I,z,Y,R){let L=null;const k=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)L=k;else if(L=Y.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=L.uuid,oe=z.uuid;let me=p[ne];me===void 0&&(me={},p[ne]=me);let de=me[oe];de===void 0&&(de=L.clone(),me[oe]=de,z.addEventListener("dispose",F)),L=de}if(L.visible=z.visible,L.wireframe=z.wireframe,R===Qo?L.side=z.shadowSide!==null?z.shadowSide:z.side:L.side=z.shadowSide!==null?z.shadowSide:g[z.side],L.alphaMap=z.alphaMap,L.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,L.map=z.map,L.clipShadows=z.clipShadows,L.clippingPlanes=z.clippingPlanes,L.clipIntersection=z.clipIntersection,L.displacementMap=z.displacementMap,L.displacementScale=z.displacementScale,L.displacementBias=z.displacementBias,L.wireframeLinewidth=z.wireframeLinewidth,L.linewidth=z.linewidth,Y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ne=r.properties.get(L);ne.light=Y}return L}function P(I,z,Y,R,L){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&L===Qo)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const oe=e.update(I),me=I.material;if(Array.isArray(me)){const de=oe.groups;for(let B=0,H=de.length;B<H;B++){const $=de[B],Ee=me[$.materialIndex];if(Ee&&Ee.visible){const be=N(I,Ee,R,L);I.onBeforeShadow(r,I,z,Y,oe,be,$),r.renderBufferDirect(Y,null,oe,be,I,$),I.onAfterShadow(r,I,z,Y,oe,be,$)}}}else if(me.visible){const de=N(I,me,R,L);I.onBeforeShadow(r,I,z,Y,oe,de,null),r.renderBufferDirect(Y,null,oe,de,I,null),I.onAfterShadow(r,I,z,Y,oe,de,null)}}const ne=I.children;for(let oe=0,me=ne.length;oe<me;oe++)P(ne[oe],z,Y,R,L)}function F(I){I.target.removeEventListener("dispose",F);for(const Y in p){const R=p[Y],L=I.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}const NR={[_h]:yh,[Sh]:Eh,[Mh]:Th,[Bs]:bh,[yh]:_h,[Eh]:Sh,[Th]:Mh,[bh]:Bs};function LR(r,e){function i(){let W=!1;const ze=new sn;let we=null;const Ge=new sn(0,0,0,0);return{setMask:function(Te){we!==Te&&!W&&(r.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){W=Te},setClear:function(Te,Se,Ne,ut,zt){zt===!0&&(Te*=ut,Se*=ut,Ne*=ut),ze.set(Te,Se,Ne,ut),Ge.equals(ze)===!1&&(r.clearColor(Te,Se,Ne,ut),Ge.copy(ze))},reset:function(){W=!1,we=null,Ge.set(-1,0,0,0)}}}function s(){let W=!1,ze=!1,we=null,Ge=null,Te=null;return{setReversed:function(Se){if(ze!==Se){const Ne=e.get("EXT_clip_control");Se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ze=Se;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return ze},setTest:function(Se){Se?he(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Se){we!==Se&&!W&&(r.depthMask(Se),we=Se)},setFunc:function(Se){if(ze&&(Se=NR[Se]),Ge!==Se){switch(Se){case _h:r.depthFunc(r.NEVER);break;case yh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Mh:r.depthFunc(r.EQUAL);break;case bh:r.depthFunc(r.GEQUAL);break;case Eh:r.depthFunc(r.GREATER);break;case Th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ge=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Te!==Se&&(ze&&(Se=1-Se),r.clearDepth(Se),Te=Se)},reset:function(){W=!1,we=null,Ge=null,Te=null,ze=!1}}}function l(){let W=!1,ze=null,we=null,Ge=null,Te=null,Se=null,Ne=null,ut=null,zt=null;return{setTest:function(At){W||(At?he(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(At){ze!==At&&!W&&(r.stencilMask(At),ze=At)},setFunc:function(At,Dn,_i){(we!==At||Ge!==Dn||Te!==_i)&&(r.stencilFunc(At,Dn,_i),we=At,Ge=Dn,Te=_i)},setOp:function(At,Dn,_i){(Se!==At||Ne!==Dn||ut!==_i)&&(r.stencilOp(At,Dn,_i),Se=At,Ne=Dn,ut=_i)},setLocked:function(At){W=At},setClear:function(At){zt!==At&&(r.clearStencil(At),zt=At)},reset:function(){W=!1,ze=null,we=null,Ge=null,Te=null,Se=null,Ne=null,ut=null,zt=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,D=null,N=null,P=null,F=null,I=null,z=new wt(0,0,0),Y=0,R=!1,L=null,k=null,ne=null,oe=null,me=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),B=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=H>=2);let Ee=null,be={};const U=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),ge=new sn().fromArray(U),Ce=new sn().fromArray(ie);function Be(W,ze,we,Ge){const Te=new Uint8Array(4),Se=r.createTexture();r.bindTexture(W,Se),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<we;Ne++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(ze+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return Se}const te={};te[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),he(r.DEPTH_TEST),f.setFunc(Bs),st(!1),Vt(Ex),he(r.CULL_FACE),it(_a);function he(W){x[W]!==!0&&(r.enable(W),x[W]=!0)}function Le(W){x[W]!==!1&&(r.disable(W),x[W]=!1)}function je(W,ze){return g[W]!==ze?(r.bindFramebuffer(W,ze),g[W]=ze,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=ze),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function Me(W,ze){let we=M,Ge=!1;if(W){we=v.get(ze),we===void 0&&(we=[],v.set(ze,we));const Te=W.textures;if(we.length!==Te.length||we[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Ne=Te.length;Se<Ne;Se++)we[Se]=r.COLOR_ATTACHMENT0+Se;we.length=Te.length,Ge=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ge=!0);Ge&&r.drawBuffers(we)}function Ke(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const lt={[Lr]:r.FUNC_ADD,[UM]:r.FUNC_SUBTRACT,[OM]:r.FUNC_REVERSE_SUBTRACT};lt[PM]=r.MIN,lt[BM]=r.MAX;const ct={[zM]:r.ZERO,[FM]:r.ONE,[IM]:r.SRC_COLOR,[xh]:r.SRC_ALPHA,[XM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[GM]:r.DST_ALPHA,[HM]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[jM]:r.ONE_MINUS_DST_COLOR,[VM]:r.ONE_MINUS_DST_ALPHA,[WM]:r.CONSTANT_COLOR,[qM]:r.ONE_MINUS_CONSTANT_COLOR,[YM]:r.CONSTANT_ALPHA,[ZM]:r.ONE_MINUS_CONSTANT_ALPHA};function it(W,ze,we,Ge,Te,Se,Ne,ut,zt,At){if(W===_a){A===!0&&(Le(r.BLEND),A=!1);return}if(A===!1&&(he(r.BLEND),A=!0),W!==LM){if(W!==y||At!==R){if((_!==Lr||P!==Lr)&&(r.blendEquation(r.FUNC_ADD),_=Lr,P=Lr),At)switch(W){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tx:r.blendFunc(r.ONE,r.ONE);break;case Ax:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ax:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rx:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}D=null,N=null,F=null,I=null,z.set(0,0,0),Y=0,y=W,R=At}return}Te=Te||ze,Se=Se||we,Ne=Ne||Ge,(ze!==_||Te!==P)&&(r.blendEquationSeparate(lt[ze],lt[Te]),_=ze,P=Te),(we!==D||Ge!==N||Se!==F||Ne!==I)&&(r.blendFuncSeparate(ct[we],ct[Ge],ct[Se],ct[Ne]),D=we,N=Ge,F=Se,I=Ne),(ut.equals(z)===!1||zt!==Y)&&(r.blendColor(ut.r,ut.g,ut.b,zt),z.copy(ut),Y=zt),y=W,R=!1}function ot(W,ze){W.side===ga?Le(r.CULL_FACE):he(r.CULL_FACE);let we=W.side===qn;ze&&(we=!we),st(we),W.blending===Os&&W.transparent===!1?it(_a):it(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ge=W.stencilWrite;d.setTest(Ge),Ge&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(W){L!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),L=W)}function Vt(W){W!==CM?(he(r.CULL_FACE),W!==k&&(W===Ex?r.cullFace(r.BACK):W===DM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),k=W}function V(W){W!==ne&&(B&&r.lineWidth(W),ne=W)}function Ct(W,ze,we){W?(he(r.POLYGON_OFFSET_FILL),(oe!==ze||me!==we)&&(r.polygonOffset(ze,we),oe=ze,me=we)):Le(r.POLYGON_OFFSET_FILL)}function _t(W){W?he(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function Je(W){W===void 0&&(W=r.TEXTURE0+de-1),Ee!==W&&(r.activeTexture(W),Ee=W)}function xe(W,ze,we){we===void 0&&(Ee===null?we=r.TEXTURE0+de-1:we=Ee);let Ge=be[we];Ge===void 0&&(Ge={type:void 0,texture:void 0},be[we]=Ge),(Ge.type!==W||Ge.texture!==ze)&&(Ee!==we&&(r.activeTexture(we),Ee=we),r.bindTexture(W,ze||te[W]),Ge.type=W,Ge.texture=ze)}function O(){const W=be[Ee];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function fe(){try{r.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ve(){try{r.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ve(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function De(){try{r.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Xe(){try{r.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function nt(){try{r.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ae(){try{r.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Re(W){ge.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Oe(W){Ce.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function He(W,ze){let we=p.get(ze);we===void 0&&(we=new WeakMap,p.set(ze,we));let Ge=we.get(W);Ge===void 0&&(Ge=r.getUniformBlockIndex(ze,W.name),we.set(W,Ge))}function Ue(W,ze){const Ge=p.get(ze).get(W);m.get(ze)!==Ge&&(r.uniformBlockBinding(ze,Ge,W.__bindingPointIndex),m.set(ze,Ge))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},Ee=null,be={},g={},v=new WeakMap,M=[],E=null,A=!1,y=null,_=null,D=null,N=null,P=null,F=null,I=null,z=new wt(0,0,0),Y=0,R=!1,L=null,k=null,ne=null,oe=null,me=null,ge.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:he,disable:Le,bindFramebuffer:je,drawBuffers:Me,useProgram:Ke,setBlending:it,setMaterial:ot,setFlipSided:st,setCullFace:Vt,setLineWidth:V,setPolygonOffset:Ct,setScissorTest:_t,activeTexture:Je,bindTexture:xe,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:nt,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:Xe,texSubImage2D:fe,texSubImage3D:ve,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ve,scissor:Re,viewport:Oe,reset:mt}}function UR(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,x=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return M?new OffscreenCanvas(O,b):du("canvas")}function A(O,b,q){let fe=1;const ve=xe(O);if((ve.width>q||ve.height>q)&&(fe=q/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(fe*ve.width),Ve=Math.floor(fe*ve.height);g===void 0&&(g=E(ue,Ve));const De=b?E(ue,Ve):g;return De.width=ue,De.height=Ve,De.getContext("2d").drawImage(O,0,0,ue,Ve),ft("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ue+"x"+Ve+")."),De}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){r.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(O,b,q,fe,ve=!1){if(O!==null){if(r[O]!==void 0)return r[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=b;if(b===r.RED&&(q===r.FLOAT&&(ue=r.R32F),q===r.HALF_FLOAT&&(ue=r.R16F),q===r.UNSIGNED_BYTE&&(ue=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.R8UI),q===r.UNSIGNED_SHORT&&(ue=r.R16UI),q===r.UNSIGNED_INT&&(ue=r.R32UI),q===r.BYTE&&(ue=r.R8I),q===r.SHORT&&(ue=r.R16I),q===r.INT&&(ue=r.R32I)),b===r.RG&&(q===r.FLOAT&&(ue=r.RG32F),q===r.HALF_FLOAT&&(ue=r.RG16F),q===r.UNSIGNED_BYTE&&(ue=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),q===r.UNSIGNED_INT&&(ue=r.RG32UI),q===r.BYTE&&(ue=r.RG8I),q===r.SHORT&&(ue=r.RG16I),q===r.INT&&(ue=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),q===r.UNSIGNED_INT&&(ue=r.RGB32UI),q===r.BYTE&&(ue=r.RGB8I),q===r.SHORT&&(ue=r.RGB16I),q===r.INT&&(ue=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),q===r.BYTE&&(ue=r.RGBA8I),q===r.SHORT&&(ue=r.RGBA16I),q===r.INT&&(ue=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),b===r.RGBA){const Ve=ve?uu:Rt.getTransfer(fe);q===r.FLOAT&&(ue=r.RGBA32F),q===r.HALF_FLOAT&&(ue=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ue=Ve===Gt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(O,b){let q;return O?b===null||b===ji||b===nl?q=r.DEPTH24_STENCIL8:b===Ii?q=r.DEPTH32F_STENCIL8:b===tl&&(q=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===nl?q=r.DEPTH_COMPONENT24:b===Ii?q=r.DEPTH_COMPONENT32F:b===tl&&(q=r.DEPTH_COMPONENT16),q}function F(O,b){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Cn&&O.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),Y(b),b.isVideoTexture&&x.delete(b)}function z(O){const b=O.target;b.removeEventListener("dispose",z),L(b)}function Y(O){const b=s.get(O);if(b.__webglInit===void 0)return;const q=O.source,fe=v.get(q);if(fe){const ve=fe[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(O),Object.keys(fe).length===0&&v.delete(q)}s.remove(O)}function R(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const q=O.source,fe=v.get(q);delete fe[b.__cacheKey],f.memory.textures--}function L(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let ve=0;ve<b.__webglFramebuffer[fe].length;ve++)r.deleteFramebuffer(b.__webglFramebuffer[fe][ve]);else r.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)r.deleteFramebuffer(b.__webglFramebuffer[fe]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=O.textures;for(let fe=0,ve=q.length;fe<ve;fe++){const ue=s.get(q[fe]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),f.memory.textures--),s.remove(q[fe])}s.remove(O)}let k=0;function ne(){k=0}function oe(){const O=k;return O>=l.maxTextures&&ft("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function me(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function de(O,b){const q=s.get(O);if(O.isVideoTexture&&_t(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const fe=O.image;if(fe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,O,b);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function B(O,b){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){te(q,O,b);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function H(O,b){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){te(q,O,b);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function $(O,b){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){he(q,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const Ee={[wh]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[Ch]:r.MIRRORED_REPEAT},be={[Cn]:r.NEAREST,[JM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Bd]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},U={[nb]:r.NEVER,[ob]:r.ALWAYS,[ib]:r.LESS,[Tp]:r.LEQUAL,[ab]:r.EQUAL,[Ap]:r.GEQUAL,[rb]:r.GREATER,[sb]:r.NOTEQUAL};function ie(O,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Bd||b.magFilter===wc||b.magFilter===Or||b.minFilter===On||b.minFilter===Bd||b.minFilter===wc||b.minFilter===Or)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Ee[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Ee[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Ee[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,be[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==wc&&b.minFilter!==Or||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ge(O,b){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const fe=b.source;let ve=v.get(fe);ve===void 0&&(ve={},v.set(fe,ve));const ue=me(b);if(ue!==O.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ve[ue].usedTimes++;const Ve=ve[O.__cacheKey];Ve!==void 0&&(ve[O.__cacheKey].usedTimes--,Ve.usedTimes===0&&R(b)),O.__cacheKey=ue,O.__webglTexture=ve[ue].texture}return q}function Ce(O,b,q){return Math.floor(Math.floor(O/q)/b)}function Be(O,b,q,fe){const ue=O.updateRanges;if(ue.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,fe,b.data);else{ue.sort((Ae,Re)=>Ae.start-Re.start);let Ve=0;for(let Ae=1;Ae<ue.length;Ae++){const Re=ue[Ve],Oe=ue[Ae],He=Re.start+Re.count,Ue=Ce(Oe.start,b.width,4),mt=Ce(Re.start,b.width,4);Oe.start<=He+1&&Ue===mt&&Ce(Oe.start+Oe.count-1,b.width,4)===Ue?Re.count=Math.max(Re.count,Oe.start+Oe.count-Re.start):(++Ve,ue[Ve]=Oe)}ue.length=Ve+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const Oe=ue[Ae],He=Math.floor(Oe.start/4),Ue=Math.ceil(Oe.count/4),mt=He%b.width,W=Math.floor(He/b.width),ze=Ue,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,mt,W,ze,we,q,fe,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function te(O,b,q){let fe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=r.TEXTURE_3D);const ve=ge(O,b),ue=b.source;i.bindTexture(fe,O.__webglTexture,r.TEXTURE0+q);const Ve=s.get(ue);if(ue.version!==Ve.__version||ve===!0){i.activeTexture(r.TEXTURE0+q);const De=Rt.getPrimaries(Rt.workingColorSpace),Xe=b.colorSpace===ar?null:Rt.getPrimaries(b.colorSpace),nt=b.colorSpace===ar||De===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ae=A(b.image,!1,l.maxTextureSize);Ae=Je(b,Ae);const Re=c.convert(b.format,b.colorSpace),Oe=c.convert(b.type);let He=N(b.internalFormat,Re,Oe,b.colorSpace,b.isVideoTexture);ie(fe,b);let Ue;const mt=b.mipmaps,W=b.isVideoTexture!==!0,ze=Ve.__version===void 0||ve===!0,we=ue.dataReady,Ge=F(b,Ae);if(b.isDepthTexture)He=P(b.format===Pr,b.type),ze&&(W?i.texStorage2D(r.TEXTURE_2D,1,He,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,He,Ae.width,Ae.height,0,Re,Oe,null));else if(b.isDataTexture)if(mt.length>0){W&&ze&&i.texStorage2D(r.TEXTURE_2D,Ge,He,mt[0].width,mt[0].height);for(let Te=0,Se=mt.length;Te<Se;Te++)Ue=mt[Te],W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Re,Oe,Ue.data):i.texImage2D(r.TEXTURE_2D,Te,He,Ue.width,Ue.height,0,Re,Oe,Ue.data);b.generateMipmaps=!1}else W?(ze&&i.texStorage2D(r.TEXTURE_2D,Ge,He,Ae.width,Ae.height),we&&Be(b,Ae,Re,Oe)):i.texImage2D(r.TEXTURE_2D,0,He,Ae.width,Ae.height,0,Re,Oe,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&ze&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,He,mt[0].width,mt[0].height,Ae.depth);for(let Te=0,Se=mt.length;Te<Se;Te++)if(Ue=mt[Te],b.format!==Di)if(Re!==null)if(W){if(we)if(b.layerUpdates.size>0){const Ne=tv(Ue.width,Ue.height,b.format,b.type);for(const ut of b.layerUpdates){const zt=Ue.data.subarray(ut*Ne/Ue.data.BYTES_PER_ELEMENT,(ut+1)*Ne/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,ut,Ue.width,Ue.height,1,Re,zt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ae.depth,Re,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Ue.width,Ue.height,Ae.depth,0,Ue.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Ae.depth,Re,Oe,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Ue.width,Ue.height,Ae.depth,0,Re,Oe,Ue.data)}else{W&&ze&&i.texStorage2D(r.TEXTURE_2D,Ge,He,mt[0].width,mt[0].height);for(let Te=0,Se=mt.length;Te<Se;Te++)Ue=mt[Te],b.format!==Di?Re!==null?W?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Ue.width,Ue.height,0,Ue.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Re,Oe,Ue.data):i.texImage2D(r.TEXTURE_2D,Te,He,Ue.width,Ue.height,0,Re,Oe,Ue.data)}else if(b.isDataArrayTexture)if(W){if(ze&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,He,Ae.width,Ae.height,Ae.depth),we)if(b.layerUpdates.size>0){const Te=tv(Ae.width,Ae.height,b.format,b.type);for(const Se of b.layerUpdates){const Ne=Ae.data.subarray(Se*Te/Ae.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Ae.width,Ae.height,1,Re,Oe,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Oe,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Ae.width,Ae.height,Ae.depth,0,Re,Oe,Ae.data);else if(b.isData3DTexture)W?(ze&&i.texStorage3D(r.TEXTURE_3D,Ge,He,Ae.width,Ae.height,Ae.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Re,Oe,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,He,Ae.width,Ae.height,Ae.depth,0,Re,Oe,Ae.data);else if(b.isFramebufferTexture){if(ze)if(W)i.texStorage2D(r.TEXTURE_2D,Ge,He,Ae.width,Ae.height);else{let Te=Ae.width,Se=Ae.height;for(let Ne=0;Ne<Ge;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,He,Te,Se,0,Re,Oe,null),Te>>=1,Se>>=1}}else if(mt.length>0){if(W&&ze){const Te=xe(mt[0]);i.texStorage2D(r.TEXTURE_2D,Ge,He,Te.width,Te.height)}for(let Te=0,Se=mt.length;Te<Se;Te++)Ue=mt[Te],W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Re,Oe,Ue):i.texImage2D(r.TEXTURE_2D,Te,He,Re,Oe,Ue);b.generateMipmaps=!1}else if(W){if(ze){const Te=xe(Ae);i.texStorage2D(r.TEXTURE_2D,Ge,He,Te.width,Te.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Oe,Ae)}else i.texImage2D(r.TEXTURE_2D,0,He,Re,Oe,Ae);y(b)&&_(fe),Ve.__version=ue.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function he(O,b,q){if(b.image.length!==6)return;const fe=ge(O,b),ve=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+q);const ue=s.get(ve);if(ve.version!==ue.__version||fe===!0){i.activeTexture(r.TEXTURE0+q);const Ve=Rt.getPrimaries(Rt.workingColorSpace),De=b.colorSpace===ar?null:Rt.getPrimaries(b.colorSpace),Xe=b.colorSpace===ar||Ve===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let Se=0;Se<6;Se++)!nt&&!Ae?Re[Se]=A(b.image[Se],!0,l.maxCubemapSize):Re[Se]=Ae?b.image[Se].image:b.image[Se],Re[Se]=Je(b,Re[Se]);const Oe=Re[0],He=c.convert(b.format,b.colorSpace),Ue=c.convert(b.type),mt=N(b.internalFormat,He,Ue,b.colorSpace),W=b.isVideoTexture!==!0,ze=ue.__version===void 0||fe===!0,we=ve.dataReady;let Ge=F(b,Oe);ie(r.TEXTURE_CUBE_MAP,b);let Te;if(nt){W&&ze&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,mt,Oe.width,Oe.height);for(let Se=0;Se<6;Se++){Te=Re[Se].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){const ut=Te[Ne];b.format!==Di?He!==null?W?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ut.width,ut.height,He,ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,mt,ut.width,ut.height,0,ut.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ut.width,ut.height,He,Ue,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,mt,ut.width,ut.height,0,He,Ue,ut.data)}}}else{if(Te=b.mipmaps,W&&ze){Te.length>0&&Ge++;const Se=xe(Re[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,mt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ae){W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Re[Se].width,Re[Se].height,He,Ue,Re[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,Re[Se].width,Re[Se].height,0,He,Ue,Re[Se].data);for(let Ne=0;Ne<Te.length;Ne++){const zt=Te[Ne].image[Se].image;W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,zt.width,zt.height,He,Ue,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,mt,zt.width,zt.height,0,He,Ue,zt.data)}}else{W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,He,Ue,Re[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,He,Ue,Re[Se]);for(let Ne=0;Ne<Te.length;Ne++){const ut=Te[Ne];W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,He,Ue,ut.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,mt,He,Ue,ut.image[Se])}}}y(b)&&_(r.TEXTURE_CUBE_MAP),ue.__version=ve.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Le(O,b,q,fe,ve,ue){const Ve=c.convert(q.format,q.colorSpace),De=c.convert(q.type),Xe=N(q.internalFormat,Ve,De,q.colorSpace),nt=s.get(b),Ae=s.get(q);if(Ae.__renderTarget=b,!nt.__hasExternalTextures){const Re=Math.max(1,b.width>>ue),Oe=Math.max(1,b.height>>ue);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,ue,Xe,Re,Oe,b.depth,0,Ve,De,null):i.texImage2D(ve,ue,Xe,Re,Oe,0,Ve,De,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Ct(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ve,Ae.__webglTexture,0,V(b)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,ve,Ae.__webglTexture,ue),i.bindFramebuffer(r.FRAMEBUFFER,null)}function je(O,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const fe=b.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,ue=P(b.stencilBuffer,ve),Ve=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ct(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ue,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ue,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ue,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ve,r.RENDERBUFFER,O)}else{const fe=b.textures;for(let ve=0;ve<fe.length;ve++){const ue=fe[ve],Ve=c.convert(ue.format,ue.colorSpace),De=c.convert(ue.type),Xe=N(ue.internalFormat,Ve,De,ue.colorSpace);Ct(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),Xe,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),Xe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(O,b,q){const fe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(r.TEXTURE_CUBE_MAP,b.depthTexture);const nt=c.convert(b.depthTexture.format),Ae=c.convert(b.depthTexture.type);let Re;b.depthTexture.format===ba?Re=r.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(Re=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Re,b.width,b.height,0,nt,Ae,null)}}else de(b.depthTexture,0);const ue=ve.__webglTexture,Ve=V(b),De=fe?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Xe=b.depthTexture.format===Pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ba)Ct(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,De,ue,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,De,ue,0);else if(b.depthTexture.format===Pr)Ct(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,De,ue,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,De,ue,0);else throw new Error("Unknown depthTexture format")}function Ke(O){const b=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=fe}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)Me(b.__webglFramebuffer[fe],O,fe);else{const fe=O.texture.mipmaps;fe&&fe.length>0?Me(b.__webglFramebuffer[0],O,0):Me(b.__webglFramebuffer,O,0)}else if(q){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=r.createRenderbuffer(),je(b.__webglDepthbuffer[fe],O,!1);else{const ve=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ue)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),je(b.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ue)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(O,b,q){const fe=s.get(O);b!==void 0&&Le(fe.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ke(O)}function ct(O){const b=O.texture,q=s.get(O),fe=s.get(b);O.addEventListener("dispose",z);const ve=O.textures,ue=O.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=b.version,f.memory.textures++),ue){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)q.__webglFramebuffer[De][Xe]=r.createFramebuffer()}else q.__webglFramebuffer[De]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)q.__webglFramebuffer[De]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ve)for(let De=0,Xe=ve.length;De<Xe;De++){const nt=s.get(ve[De]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Ct(O)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let De=0;De<ve.length;De++){const Xe=ve[De];q.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[De]);const nt=c.convert(Xe.format,Xe.colorSpace),Ae=c.convert(Xe.type),Re=N(Xe.internalFormat,nt,Ae,Xe.colorSpace,O.isXRRenderTarget===!0),Oe=V(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Re,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,q.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),je(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){i.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),ie(r.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Le(q.__webglFramebuffer[De][Xe],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,Xe);else Le(q.__webglFramebuffer[De],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ve){for(let De=0,Xe=ve.length;De<Xe;De++){const nt=ve[De],Ae=s.get(nt);let Re=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ae.__webglTexture),ie(Re,nt),Le(q.__webglFramebuffer,O,nt,r.COLOR_ATTACHMENT0+De,Re,0),y(nt)&&_(Re)}i.unbindTexture()}else{let De=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,fe.__webglTexture),ie(De,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Le(q.__webglFramebuffer[Xe],O,b,r.COLOR_ATTACHMENT0,De,Xe);else Le(q.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,De,0);y(b)&&_(De),i.unbindTexture()}O.depthBuffer&&Ke(O)}function it(O){const b=O.textures;for(let q=0,fe=b.length;q<fe;q++){const ve=b[q];if(y(ve)){const ue=D(O),Ve=s.get(ve).__webglTexture;i.bindTexture(ue,Ve),_(ue),i.unbindTexture()}}}const ot=[],st=[];function Vt(O){if(O.samples>0){if(Ct(O)===!1){const b=O.textures,q=O.width,fe=O.height;let ve=r.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ve=s.get(O),De=b.length>1;if(De)for(let nt=0;nt<b.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Xe=O.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[nt]);const Ae=s.get(b[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,q,fe,0,0,q,fe,ve,r.NEAREST),m===!0&&(ot.length=0,st.length=0,ot.push(r.COLOR_ATTACHMENT0+nt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ot.push(ue),st.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let nt=0;nt<b.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[nt]);const Ae=s.get(b[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function Ct(O){const b=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(O){const b=f.render.frame;x.get(O)!==b&&(x.set(O,b),O.update())}function Je(O,b){const q=O.colorSpace,fe=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Is&&q!==ar&&(Rt.getTransfer(q)===Gt?(fe!==Di||ve!==gi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",q)),b}function xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ne,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function OR(r,e){function i(s,l=ar){let c;const f=Rt.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===yp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===c_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===o_)return r.BYTE;if(s===l_)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===_p)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===f_)return r.ALPHA;if(s===d_)return r.RGB;if(s===Di)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Pr)return r.DEPTH_STENCIL;if(s===h_)return r.RED;if(s===Mp)return r.RED_INTEGER;if(s===Fs)return r.RG;if(s===bp)return r.RG_INTEGER;if(s===Ep)return r.RGBA_INTEGER;if(s===iu||s===au||s===ru||s===su)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dh||s===Nh||s===Lh||s===Uh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oh||s===Ph||s===Bh||s===zh||s===Fh||s===Ih||s===Hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Oh||s===Ph)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Bh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===zh)return c.COMPRESSED_R11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ih)return c.COMPRESSED_RG11_EAC;if(s===Hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gh||s===Vh||s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp||s===np||s===ip)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===tp)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ap||s===rp||s===sp||s===op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const PR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new A_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new xi({vertexShader:PR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ta(new _u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FR extends ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,x=null,g=null,v=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",y=new zR,_={},D=i.getContextAttributes();let N=null,P=null;const F=[],I=[],z=new Wt;let Y=null;const R=new wi;R.viewport=new sn;const L=new wi;L.viewport=new sn;const k=[R,L],ne=new Yb;let oe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=F[te];return he===void 0&&(he=new rh,F[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=F[te];return he===void 0&&(he=new rh,F[te]=he),he.getGripSpace()},this.getHand=function(te){let he=F[te];return he===void 0&&(he=new rh,F[te]=he),he.getHandSpace()};function de(te){const he=I.indexOf(te.inputSource);if(he===-1)return;const Le=F[he];Le!==void 0&&(Le.update(te.inputSource,te.frame,p||f),Le.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let te=0;te<F.length;te++){const he=I[te];he!==null&&(I[te]=null,F[te].disconnect(he))}oe=null,me=null,y.reset();for(const te in _)delete _[te];e.setRenderTarget(N),M=null,v=null,g=null,l=null,P=null,Be.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,je=null,Me=null;D.depth&&(Me=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Le=D.stencil?Pr:ba,je=D.stencil?nl:ji);const Ke={colorFormat:i.RGBA8,depthFormat:Me,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Ke),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Vi(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new al(v.textureWidth,v.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Le),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(te){for(let he=0;he<te.removed.length;he++){const Le=te.removed[he],je=I.indexOf(Le);je>=0&&(I[je]=null,F[je].disconnect(Le))}for(let he=0;he<te.added.length;he++){const Le=te.added[he];let je=I.indexOf(Le);if(je===-1){for(let Ke=0;Ke<F.length;Ke++)if(Ke>=I.length){I.push(Le),je=Ke;break}else if(I[Ke]===null){I[Ke]=Le,je=Ke;break}if(je===-1)break}const Me=F[je];Me&&Me.connect(Le)}}const $=new se,Ee=new se;function be(te,he,Le){$.setFromMatrixPosition(he.matrixWorld),Ee.setFromMatrixPosition(Le.matrixWorld);const je=$.distanceTo(Ee),Me=he.projectionMatrix.elements,Ke=Le.projectionMatrix.elements,lt=Me[14]/(Me[10]-1),ct=Me[14]/(Me[10]+1),it=(Me[9]+1)/Me[5],ot=(Me[9]-1)/Me[5],st=(Me[8]-1)/Me[0],Vt=(Ke[8]+1)/Ke[0],V=lt*st,Ct=lt*Vt,_t=je/(-st+Vt),Je=_t*-st;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Je),te.translateZ(_t),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Me[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const xe=lt+_t,O=ct+_t,b=V-Je,q=Ct+(je-Je),fe=it*ct/O*xe,ve=ot*ct/O*xe;te.projectionMatrix.makePerspective(b,q,fe,ve,xe,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let he=te.near,Le=te.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Le=y.depthFar)),ne.near=L.near=R.near=he,ne.far=L.far=R.far=Le,(oe!==ne.near||me!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),oe=ne.near,me=ne.far),ne.layers.mask=te.layers.mask|6,R.layers.mask=ne.layers.mask&3,L.layers.mask=ne.layers.mask&5;const je=te.parent,Me=ne.cameras;U(ne,je);for(let Ke=0;Ke<Me.length;Ke++)U(Me[Ke],je);Me.length===2?be(ne,R,L):ne.projectionMatrix.copy(R.projectionMatrix),ie(te,ne,je)};function ie(te,he,Le){Le===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(Le.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=lp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(te){return _[te]};let ge=null;function Ce(te,he){if(x=he.getViewerPose(p||f),E=he,x!==null){const Le=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let je=!1;Le.length!==ne.cameras.length&&(ne.cameras.length=0,je=!0);for(let ct=0;ct<Le.length;ct++){const it=Le[ct];let ot=null;if(M!==null)ot=M.getViewport(it);else{const Vt=g.getViewSubImage(v,it);ot=Vt.viewport,ct===0&&(e.setRenderTargetTextures(P,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(P))}let st=k[ct];st===void 0&&(st=new wi,st.layers.enable(ct),st.viewport=new sn,k[ct]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ot.x,ot.y,ot.width,ot.height),ct===0&&(ne.matrix.copy(st.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),je===!0&&ne.cameras.push(st)}const Me=l.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const ct=g.getDepthInformation(Le[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(Me&&Me.includes("camera-access")&&A){e.state.unbindTexture(),g=s.getBinding();for(let ct=0;ct<Le.length;ct++){const it=Le[ct].camera;if(it){let ot=_[it];ot||(ot=new A_,_[it]=ot);const st=g.getCameraImage(it);ot.sourceTexture=st}}}}for(let Le=0;Le<F.length;Le++){const je=I[Le],Me=F[Le];je!==null&&Me!==void 0&&Me.update(je,he,p||f)}ge&&ge(te,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Be=new R_;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Dr=new Ea,IR=new nn;function HR(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,S_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,D,N,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),x(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),A(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,D,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===qn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===qn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),N=D.envMap,P=D.envMapRotation;N&&(y.envMap.value=N,Dr.copy(P),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),y.envMapRotation.value.setFromMatrix4(IR.makeRotationFromEuler(Dr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,D,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GR(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const P=N.program;s.uniformBlockBinding(D,P)}function p(D,N){let P=l[D.id];P===void 0&&(E(D),P=x(D),l[D.id]=P,D.addEventListener("dispose",y));const F=N.program;s.updateUBOMapping(D,F);const I=e.render.frame;c[D.id]!==I&&(v(D),c[D.id]=I)}function x(D){const N=g();D.__bindingPointIndex=N;const P=r.createBuffer(),F=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,F,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,P),P}function g(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const N=l[D.id],P=D.uniforms,F=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let I=0,z=P.length;I<z;I++){const Y=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,L=Y.length;R<L;R++){const k=Y[R];if(M(k,I,R,F)===!0){const ne=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let de=0;de<oe.length;de++){const B=oe[de],H=A(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,ne+me,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,me),me+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,N,P,F){const I=D.value,z=N+"_"+P;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const Y=F[z];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return F[z]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(D){const N=D.uniforms;let P=0;const F=16;for(let z=0,Y=N.length;z<Y;z++){const R=Array.isArray(N[z])?N[z]:[N[z]];for(let L=0,k=R.length;L<k;L++){const ne=R[L],oe=Array.isArray(ne.value)?ne.value:[ne.value];for(let me=0,de=oe.length;me<de;me++){const B=oe[me],H=A(B),$=P%F,Ee=$%H.boundary,be=$+Ee;P+=Ee,be!==0&&F-be<H.storage&&(P+=F-be),ne.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=H.storage}}}const I=P%F;return I>0&&(P+=F-I),D.__size=P,D.__cache={},this}function A(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const P=f.indexOf(N.__bindingPointIndex);f.splice(P,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const VR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function kR(){return zi===null&&(zi=new Pb(VR,16,16,Fs,Ma),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=xa,zi.wrapT=xa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class jR{constructor(e={}){const{canvas:i=lb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=M,y=new Set([Ep,bp,Mp]),_=new Set([gi,ji,tl,nl,yp,Sp]),D=new Uint32Array(4),N=new Int32Array(4);let P=null,F=null;const I=[],z=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1;this._outputColorSpace=mi;let k=0,ne=0,oe=null,me=-1,de=null;const B=new sn,H=new sn;let $=null;const Ee=new wt(0);let be=0,U=i.width,ie=i.height,ge=1,Ce=null,Be=null;const te=new sn(0,0,U,ie),he=new sn(0,0,U,ie);let Le=!1;const je=new T_;let Me=!1,Ke=!1;const lt=new nn,ct=new se,it=new sn,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Vt(){return oe===null?ge:1}let V=s;function Ct(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vp}`),i.addEventListener("webglcontextlost",ut,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",At,!1),V===null){const Z="webgl2";if(V=Ct(Z,C),V===null)throw Ct(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let _t,Je,xe,O,b,q,fe,ve,ue,Ve,De,Xe,nt,Ae,Re,Oe,He,Ue,mt,W,ze,we,Ge,Te;function Se(){_t=new k2(V),_t.init(),we=new OR(V,_t),Je=new O2(V,_t,e,we),xe=new LR(V,_t),Je.reversedDepthBuffer&&v&&xe.buffers.depth.setReversed(!0),O=new W2(V),b=new xR,q=new UR(V,_t,xe,b,Je,we,O),fe=new B2(R),ve=new V2(R),ue=new Kb(V),Ge=new L2(V,ue),Ve=new j2(V,ue,O,Ge),De=new Y2(V,Ve,ue,O),mt=new q2(V,Je,q),Oe=new P2(b),Xe=new gR(R,fe,ve,_t,Je,Ge,Oe),nt=new HR(R,b),Ae=new _R,Re=new TR(_t),Ue=new N2(R,fe,ve,xe,De,E,m),He=new DR(R,De,Je),Te=new GR(V,O,Je,xe),W=new U2(V,_t,O),ze=new X2(V,_t,O),O.programs=Xe.programs,R.capabilities=Je,R.extensions=_t,R.properties=b,R.renderLists=Ae,R.shadowMap=He,R.state=xe,R.info=O}Se(),A!==gi&&(Y=new K2(A,i.width,i.height,l,c));const Ne=new FR(R,V);this.xr=Ne,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(U,ie,!1))},this.getSize=function(C){return C.set(U,ie)},this.setSize=function(C,Z,le=!0){if(Ne.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,ie=Z,i.width=Math.floor(C*ge),i.height=Math.floor(Z*ge),le===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(U*ge,ie*ge).floor()},this.setDrawingBufferSize=function(C,Z,le){U=C,ie=Z,ge=le,i.width=Math.floor(C*le),i.height=Math.floor(Z*le),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Z,le,ae){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Z,le,ae),xe.viewport(B.copy(te).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,Z,le,ae){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,Z,le,ae),xe.scissor(H.copy(he).multiplyScalar(ge).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){xe.setScissorTest(Le=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Be=C},this.getClearColor=function(C){return C.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,le=!0){let ae=0;if(C){let Q=!1;if(oe!==null){const Pe=oe.texture.format;Q=y.has(Pe)}if(Q){const Pe=oe.texture.type,ke=_.has(Pe),Fe=Ue.getClearColor(),We=Ue.getClearAlpha(),Ye=Fe.r,tt=Fe.g,Ze=Fe.b;ke?(D[0]=Ye,D[1]=tt,D[2]=Ze,D[3]=We,V.clearBufferuiv(V.COLOR,0,D)):(N[0]=Ye,N[1]=tt,N[2]=Ze,N[3]=We,V.clearBufferiv(V.COLOR,0,N))}else ae|=V.COLOR_BUFFER_BIT}Z&&(ae|=V.DEPTH_BUFFER_BIT),le&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ut,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ue.dispose(),Ae.dispose(),Re.dispose(),b.dispose(),fe.dispose(),ve.dispose(),De.dispose(),Ge.dispose(),Te.dispose(),Xe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ir),Ne.removeEventListener("sessionend",Ys),Li.stop()};function ut(C){C.preventDefault(),Lx("WebGLRenderer: Context Lost."),L=!0}function zt(){Lx("WebGLRenderer: Context Restored."),L=!1;const C=O.autoReset,Z=He.enabled,le=He.autoUpdate,ae=He.needsUpdate,Q=He.type;Se(),O.autoReset=C,He.enabled=Z,He.autoUpdate=le,He.needsUpdate=ae,He.type=Q}function At(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dn(C){const Z=C.target;Z.removeEventListener("dispose",Dn),_i(Z)}function _i(C){gl(C),b.remove(C)}function gl(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(le){Xe.releaseProgram(le)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,le,ae,Q,Pe){Z===null&&(Z=ot);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=or(C,Z,le,ae,Q);xe.setMaterial(ae,ke);let We=le.index,Ye=1;if(ae.wireframe===!0){if(We=Ve.getWireframeAttribute(le),We===void 0)return;Ye=2}const tt=le.drawRange,Ze=le.attributes.position;let at=tt.start*Ye,Ut=(tt.start+tt.count)*Ye;Pe!==null&&(at=Math.max(at,Pe.start*Ye),Ut=Math.min(Ut,(Pe.start+Pe.count)*Ye)),We!==null?(at=Math.max(at,0),Ut=Math.min(Ut,We.count)):Ze!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,Ze.count));const Qt=Ut-at;if(Qt<0||Qt===1/0)return;Ge.setup(Q,ae,Fe,le,We);let Yt,Bt=W;if(We!==null&&(Yt=ue.get(We),Bt=ze,Bt.setIndex(Yt)),Q.isMesh)ae.wireframe===!0?(xe.setLineWidth(ae.wireframeLinewidth*Vt()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if(Q.isLine){let $e=ae.linewidth;$e===void 0&&($e=1),xe.setLineWidth($e*Vt()),Q.isLineSegments?Bt.setMode(V.LINES):Q.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else Q.isPoints?Bt.setMode(V.POINTS):Q.isSprite&&Bt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,Ot=Q._multiDrawCounts,dt=Q._multiDrawCount,yn=We?ue.get(We).bytesPerElement:1,Wi=b.get(ae).currentProgram.getUniforms();for(let Sn=0;Sn<dt;Sn++)Wi.setValue(V,"_gl_DrawID",Sn),Bt.render($e[Sn]/yn,Ot[Sn])}else if(Q.isInstancedMesh)Bt.renderInstances(at,Qt,Q.count);else if(le.isInstancedBufferGeometry){const $e=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ot=Math.min(le.instanceCount,$e);Bt.renderInstances(at,Qt,Ot)}else Bt.render(at,Qt)};function Ws(C,Z,le){C.transparent===!0&&C.side===ga&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Gr(C,Z,le),C.side=sr,C.needsUpdate=!0,Gr(C,Z,le),C.side=ga):Gr(C,Z,le)}this.compile=function(C,Z,le=null){le===null&&(le=C),F=Re.get(le),F.init(Z),z.push(F),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),C!==le&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),F.setupLights();const ae=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Fe=Pe[ke];Ws(Fe,le,Q),ae.add(Fe)}else Ws(Pe,le,Q),ae.add(Pe)}),F=z.pop(),ae},this.compileAsync=function(C,Z,le=null){const ae=this.compile(C,Z,le);return new Promise(Q=>{function Pe(){if(ae.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ae.delete(ke)}),ae.size===0){Q(C);return}setTimeout(Pe,10)}_t.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Fr=null;function qs(C){Fr&&Fr(C)}function Ir(){Li.stop()}function Ys(){Li.start()}const Li=new R_;Li.setAnimationLoop(qs),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){Fr=C,Ne.setAnimationLoop(C),C===null?Li.stop():Li.start()},Ne.addEventListener("sessionstart",Ir),Ne.addEventListener("sessionend",Ys),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const le=Ne.enabled===!0&&Ne.isPresenting===!0,ae=Y!==null&&(oe===null||le)&&Y.begin(R,oe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Z),Z=Ne.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Z,oe),F=Re.get(C,z.length),F.init(Z),z.push(F),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),je.setFromProjectionMatrix(lt,Hi,Z.reversedDepth),Ke=this.localClippingEnabled,Me=Oe.init(this.clippingPlanes,Ke),P=Ae.get(C,I.length),P.init(),I.push(P),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&ai(ke,Z,-1/0,R.sortObjects)}ai(C,Z,0,R.sortObjects),P.finish(),R.sortObjects===!0&&P.sort(Ce,Be),st=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,st&&Ue.addToRenderList(P,C),this.info.render.frame++,Me===!0&&Oe.beginShadows();const Q=F.state.shadowsArray;if(He.render(Q,C,Z),Me===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&Y.hasRenderPass())===!1){const ke=P.opaque,Fe=P.transmissive;if(F.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Fe.length>0)for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];_n(ke,Fe,C,Ze)}st&&Ue.render(C);for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];on(P,C,Ze,Ze.viewport)}}else Fe.length>0&&_n(ke,Fe,C,Z),st&&Ue.render(C),on(P,C,Z)}oe!==null&&ne===0&&(q.updateMultisampleRenderTarget(oe),q.updateRenderTargetMipmap(oe)),ae&&Y.end(R),C.isScene===!0&&C.onAfterRender(R,C,Z),Ge.resetDefaultState(),me=-1,de=null,z.pop(),z.length>0?(F=z[z.length-1],Me===!0&&Oe.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function ai(C,Z,le,ae){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||je.intersectsSprite(C)){ae&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(lt);const ke=De.update(C),Fe=C.material;Fe.visible&&P.push(C,ke,Fe,le,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||je.intersectsObject(C))){const ke=De.update(C),Fe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),it.copy(ke.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(lt)),Array.isArray(Fe)){const We=ke.groups;for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye],at=Fe[Ze.materialIndex];at&&at.visible&&P.push(C,ke,at,le,it.z,Ze)}}else Fe.visible&&P.push(C,ke,Fe,le,it.z,null)}}const Pe=C.children;for(let ke=0,Fe=Pe.length;ke<Fe;ke++)ai(Pe[ke],Z,le,ae)}function on(C,Z,le,ae){const{opaque:Q,transmissive:Pe,transparent:ke}=C;F.setupLightsView(le),Me===!0&&Oe.setGlobalState(R.clippingPlanes,le),ae&&xe.viewport(B.copy(ae)),Q.length>0&&yi(Q,Z,le),Pe.length>0&&yi(Pe,Z,le),ke.length>0&&yi(ke,Z,le),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _n(C,Z,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ae.id]===void 0){const at=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ae.id]=new Vi(1,1,{generateMipmaps:!0,type:at?Ma:gi,minFilter:Or,samples:Je.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Pe=F.state.transmissionRenderTarget[ae.id],ke=ae.viewport||B;Pe.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget(),We=R.getActiveCubeFace(),Ye=R.getActiveMipmapLevel();R.setRenderTarget(Pe),R.getClearColor(Ee),be=R.getClearAlpha(),be<1&&R.setClearColor(16777215,.5),R.clear(),st&&Ue.render(le);const tt=R.toneMapping;R.toneMapping=Gi;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),F.setupLightsView(ae),Me===!0&&Oe.setGlobalState(R.clippingPlanes,ae),yi(C,le,ae),q.updateMultisampleRenderTarget(Pe),q.updateRenderTargetMipmap(Pe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ut=0,Qt=Z.length;Ut<Qt;Ut++){const Yt=Z[Ut],{object:Bt,geometry:$e,material:Ot,group:dt}=Yt;if(Ot.side===ga&&Bt.layers.test(ae.layers)){const yn=Ot.side;Ot.side=qn,Ot.needsUpdate=!0,Hr(Bt,le,ae,$e,Ot,dt),Ot.side=yn,Ot.needsUpdate=!0,at=!0}}at===!0&&(q.updateMultisampleRenderTarget(Pe),q.updateRenderTargetMipmap(Pe))}R.setRenderTarget(Fe,We,Ye),R.setClearColor(Ee,be),Ze!==void 0&&(ae.viewport=Ze),R.toneMapping=tt}function yi(C,Z,le){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Pe=C.length;Q<Pe;Q++){const ke=C[Q],{object:Fe,geometry:We,group:Ye}=ke;let tt=ke.material;tt.allowOverride===!0&&ae!==null&&(tt=ae),Fe.layers.test(le.layers)&&Hr(Fe,Z,le,We,tt,Ye)}}function Hr(C,Z,le,ae,Q,Pe){C.onBeforeRender(R,Z,le,ae,Q,Pe),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(R,Z,le,ae,C,Pe),Q.transparent===!0&&Q.side===ga&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,R.renderBufferDirect(le,Z,ae,Q,C,Pe),Q.side=sr,Q.needsUpdate=!0,R.renderBufferDirect(le,Z,ae,Q,C,Pe),Q.side=ga):R.renderBufferDirect(le,Z,ae,Q,C,Pe),C.onAfterRender(R,Z,le,ae,Q,Pe)}function Gr(C,Z,le){Z.isScene!==!0&&(Z=ot);const ae=b.get(C),Q=F.state.lights,Pe=F.state.shadowsArray,ke=Q.state.version,Fe=Xe.getParameters(C,Q.state,Pe,Z,le),We=Xe.getProgramCacheKey(Fe);let Ye=ae.programs;ae.environment=C.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(C.isMeshStandardMaterial?ve:fe).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Dn),Ye=new Map,ae.programs=Ye);let tt=Ye.get(We);if(tt!==void 0){if(ae.currentProgram===tt&&ae.lightsStateVersion===ke)return Zs(C,Fe),tt}else Fe.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Fe,R),tt=Xe.acquireProgram(Fe,We),Ye.set(We,tt),ae.uniforms=Fe.uniforms;const Ze=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Oe.uniform),Zs(C,Fe),ae.needsLights=Aa(C),ae.lightsStateVersion=ke,ae.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=tt,ae.uniformsList=null,tt}function xl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Zs(C,Z){const le=b.get(C);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function or(C,Z,le,ae,Q){Z.isScene!==!0&&(Z=ot),q.resetTextureUnits();const Pe=Z.fog,ke=ae.isMeshStandardMaterial?Z.environment:null,Fe=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Is,We=(ae.isMeshStandardMaterial?ve:fe).get(ae.envMap||ke),Ye=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!le.morphAttributes.position,at=!!le.morphAttributes.normal,Ut=!!le.morphAttributes.color;let Qt=Gi;ae.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qt=R.toneMapping);const Yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Bt=Yt!==void 0?Yt.length:0,$e=b.get(ae),Ot=F.state.lights;if(Me===!0&&(Ke===!0||C!==de)){const bn=C===de&&ae.id===me;Oe.setState(ae,C,bn)}let dt=!1;ae.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ot.state.version||$e.outputColorSpace!==Fe||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==We||ae.fog===!0&&$e.fog!==Pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Oe.numPlanes||$e.numIntersection!==Oe.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==tt||$e.morphTargets!==Ze||$e.morphNormals!==at||$e.morphColors!==Ut||$e.toneMapping!==Qt||$e.morphTargetsCount!==Bt)&&(dt=!0):(dt=!0,$e.__version=ae.version);let yn=$e.currentProgram;dt===!0&&(yn=Gr(ae,Z,Q));let Wi=!1,Sn=!1,ri=!1;const Ft=yn.getUniforms(),Mn=$e.uniforms;if(xe.useProgram(yn.program)&&(Wi=!0,Sn=!0,ri=!0),ae.id!==me&&(me=ae.id,Sn=!0),Wi||de!==C){xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",C.projectionMatrix),Ft.setValue(V,"viewMatrix",C.matrixWorldInverse);const En=Ft.map.cameraPosition;En!==void 0&&En.setValue(V,ct.setFromMatrixPosition(C.matrixWorld)),Je.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,Sn=!0,ri=!0)}if($e.needsLights&&(Ot.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ot.state.directionalShadowMap,q),Ot.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ot.state.spotShadowMap,q),Ot.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ot.state.pointShadowMap,q)),Q.isSkinnedMesh){Ft.setOptional(V,Q,"bindMatrix"),Ft.setOptional(V,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ft.setValue(V,"boneTexture",bn.boneTexture,q))}Q.isBatchedMesh&&(Ft.setOptional(V,Q,"batchingTexture"),Ft.setValue(V,"batchingTexture",Q._matricesTexture,q),Ft.setOptional(V,Q,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",Q._indirectTexture,q),Ft.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",Q._colorsTexture,q));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&mt.update(Q,le,yn),(Sn||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,Ft.setValue(V,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Mn.envMap.value=We,Mn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Z.environment!==null&&(Mn.envMapIntensity.value=Z.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=kR()),Sn&&(Ft.setValue(V,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&Ks(Mn,ri),Pe&&ae.fog===!0&&nt.refreshFogUniforms(Mn,Pe),nt.refreshMaterialUniforms(Mn,ae,ge,ie,F.state.transmissionRenderTarget[C.id]),ou.upload(V,xl($e),Mn,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ou.upload(V,xl($e),Mn,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(V,"center",Q.center),Ft.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(V,"normalMatrix",Q.normalMatrix),Ft.setValue(V,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const bn=ae.uniformsGroups;for(let En=0,Vr=bn.length;En<Vr;En++){const Si=bn[En];Te.update(Si,yn),Te.bind(Si,yn)}}return yn}function Ks(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Aa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(C,Z,le){const ae=b.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const le=b.get(C);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(C,Z=0,le=0){oe=C,k=Z,ne=le;let ae=null,Q=!1,Pe=!1;if(C){const Fe=b.get(C);if(Fe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),B.copy(C.viewport),H.copy(C.scissor),$=C.scissorTest,xe.viewport(B),xe.scissor(H),xe.setScissorTest($),me=-1;return}else if(Fe.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Fe.__hasExternalTextures)q.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Fe.__boundDepthTexture!==tt){if(tt!==null&&b.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ye=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?ae=Ye[Z][le]:ae=Ye[Z],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?ae=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[le]:ae=Ye,B.copy(C.viewport),H.copy(C.scissor),$=C.scissorTest}else B.copy(te).multiplyScalar(ge).floor(),H.copy(he).multiplyScalar(ge).floor(),$=Le;if(le!==0&&(ae=Ra),xe.bindFramebuffer(V.FRAMEBUFFER,ae)&&xe.drawBuffers(C,ae),xe.viewport(B),xe.scissor(H),xe.setScissorTest($),Q){const Fe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,le)}else if(Pe){const Fe=Z;for(let We=0;We<C.textures.length;We++){const Ye=b.get(C.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,Ye.__webglTexture,le,Fe)}}else if(C!==null&&le!==0){const Fe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(C,Z,le,ae,Q,Pe,ke,Fe=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){xe.bindFramebuffer(V.FRAMEBUFFER,We);try{const Ye=C.textures[Fe],tt=Ye.format,Ze=Ye.type;if(!Je.textureFormatReadable(tt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ze)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ae&&le>=0&&le<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(Z,le,ae,Q,we.convert(tt),we.convert(Ze),Pe))}finally{const Ye=oe!==null?b.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,Z,le,ae,Q,Pe,ke,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(Z>=0&&Z<=C.width-ae&&le>=0&&le<=C.height-Q){xe.bindFramebuffer(V.FRAMEBUFFER,We);const Ye=C.textures[Fe],tt=Ye.format,Ze=Ye.type;if(!Je.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,at),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(Z,le,ae,Q,we.convert(tt),we.convert(Ze),0);const Ut=oe!==null?b.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,Ut);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cb(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,at),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(at),V.deleteSync(Qt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,le=0){const ae=Math.pow(2,-le),Q=Math.floor(C.image.width*ae),Pe=Math.floor(C.image.height*ae),ke=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;q.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ke,Fe,Q,Pe),xe.unbindTexture()};const lr=V.createFramebuffer(),wa=V.createFramebuffer();this.copyTextureToTexture=function(C,Z,le=null,ae=null,Q=0,Pe=null){Pe===null&&(Q!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let ke,Fe,We,Ye,tt,Ze,at,Ut,Qt;const Yt=C.isCompressedTexture?C.mipmaps[Pe]:C.image;if(le!==null)ke=le.max.x-le.min.x,Fe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Ye=le.min.x,tt=le.min.y,Ze=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-Q);ke=Math.floor(Yt.width*hn),Fe=Math.floor(Yt.height*hn),C.isDataArrayTexture?We=Yt.depth:C.isData3DTexture?We=Math.floor(Yt.depth*hn):We=1,Ye=0,tt=0,Ze=0}ae!==null?(at=ae.x,Ut=ae.y,Qt=ae.z):(at=0,Ut=0,Qt=0);const Bt=we.convert(Z.format),$e=we.convert(Z.type);let Ot;Z.isData3DTexture?(q.setTexture3D(Z,0),Ot=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(q.setTexture2DArray(Z,0),Ot=V.TEXTURE_2D_ARRAY):(q.setTexture2D(Z,0),Ot=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const dt=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const Ft=C.isDataArrayTexture||C.isData3DTexture,Mn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const hn=b.get(C),bn=b.get(Z),En=b.get(hn.__renderTarget),Vr=b.get(bn.__renderTarget);xe.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<We;Si++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,Ze+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Pe,Qt+Si)),V.blitFramebuffer(Ye,tt,ke,Fe,at,Ut,ke,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const hn=b.get(C),bn=b.get(Z);xe.bindFramebuffer(V.READ_FRAMEBUFFER,lr),xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,wa);for(let En=0;En<We;En++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Ze+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Q),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Pe,Qt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Pe),Q!==0?V.blitFramebuffer(Ye,tt,ke,Fe,at,Ut,ke,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Ot,Pe,at,Ut,Qt+En,Ye,tt,ke,Fe):V.copyTexSubImage2D(Ot,Pe,at,Ut,Ye,tt,ke,Fe);xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ot,Pe,at,Ut,Qt,ke,Fe,We,Bt,$e,Yt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ot,Pe,at,Ut,Qt,ke,Fe,We,Bt,Yt.data):V.texSubImage3D(Ot,Pe,at,Ut,Qt,ke,Fe,We,Bt,$e,Yt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,at,Ut,ke,Fe,Bt,$e,Yt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,at,Ut,Yt.width,Yt.height,Bt,Yt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,at,Ut,ke,Fe,Bt,$e,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,dt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Pe===0&&Z.generateMipmaps&&V.generateMipmap(Ot),xe.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){k=0,ne=0,oe=null,xe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const XR=`
  attribute float alpha;
  attribute float aSize;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`,WR=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.15, 0.5, dist);
    // Bright core with warm glow falloff
    float core = 1.0 - smoothstep(0.0, 0.15, dist);
    vec3 brightColor = uColor + core * 0.35;
    gl_FragColor = vec4(brightColor, vAlpha * softEdge);
  }
`,qR=`
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,YR=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function ZR(r,e){const i=16*Math.pow(Math.sin(r),3),s=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r);return{x:i*e,y:s*e}}function Tv(r,e){const i=[];for(let s=0;s<r;s++){const l=s/r*Math.PI*2,c=(Math.random()-.5)*e*.6,f=(Math.random()-.5)*e*.6,d=ZR(l,e);i.push({x:d.x+c,y:d.y+f})}return i}function KR(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function QR(r,e,i){const s=new Map;for(let l=0;l<r.length;l++){const c=r[l],f=Math.floor((c.x+i)/e)*1e4+Math.floor((c.y+i)/e);s.has(f)||s.set(f,[]),s.get(f).push(l)}return s}function JR(r,e,i){const s=[];for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const f=r.get((e+l)*1e4+(i+c));if(f)for(let d=0;d<f.length;d++)s.push(f[d])}return s}function $R(r,e={}){const{particleCount:i=90,connectionDistance:s=120,color:l=13935988,heartMode:c="heart",alphaMultiplier:f=1,connectionAlphaMultiplier:d=1}=e;let m=window.innerWidth,p=window.innerHeight,x=m/2,g=p/2,v=null;const M=140,E=M*M,A=350,y=.3,_=10,D=3,N=4,P=2.5,F=_+D+N+P;let I=c==="heart";const z={x:0,y:0,active:!1},Y={active:!1,startTime:0,duration:1.5},R={active:!1,from:new wt(l),to:new wt(l),progress:0,speed:.02},L=window.matchMedia("(prefers-reduced-motion: reduce)").matches,k=new jR({canvas:r,alpha:!0,antialias:!1,powerPreference:"low-power"});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setSize(m,p);const ne=new Cp(-x,x,g,-g,.1,100);ne.position.z=10;const oe=new Ob,me=new wt(l),de=Math.min(m,p)*.028;let B=I?Tv(i,de):null;const H=[];for(let Me=0;Me<i;Me++)H.push({x:(Math.random()-.5)*m,y:(Math.random()-.5)*p,homeX:(Math.random()-.5)*m,homeY:(Math.random()-.5)*p,heartX:B?B[Me].x:0,heartY:B?B[Me].y:0,snapX:0,snapY:0,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,baseAlpha:(.35+Math.random()*.45)*f,size:(2.5+Math.random()*3.5)*Math.min(window.devicePixelRatio,2),phase:Math.random()*Math.PI*2});const $=new Float32Array(i*3),Ee=new Float32Array(i),be=new Float32Array(i);for(let Me=0;Me<i;Me++)$[Me*3]=H[Me].x,$[Me*3+1]=H[Me].y,$[Me*3+2]=0,Ee[Me]=H[Me].baseAlpha,be[Me]=H[Me].size;const U=new ii;U.setAttribute("position",new zn($,3)),U.setAttribute("alpha",new zn(Ee,1)),U.setAttribute("aSize",new zn(be,1));const ie=new xi({uniforms:{uColor:{value:me}},vertexShader:XR,fragmentShader:WR,transparent:!0,depthWrite:!1});oe.add(new kb(U,ie));const ge=new Float32Array(A*6),Ce=new Float32Array(A*2),Be=new ii;Be.setAttribute("position",new zn(ge,3)),Be.setAttribute("alpha",new zn(Ce,1)),Be.setDrawRange(0,0);const te=new xi({uniforms:{uColor:{value:me}},vertexShader:qR,fragmentShader:YR,transparent:!0,depthWrite:!1});oe.add(new Gb(Be,te));const he=s*s;let Le="drift";function je(Me){v=requestAnimationFrame(je);const Ke=Me*.001;let lt="drift",ct=0;if(I){const Je=Ke%F;Je<_?(lt="drift",ct=Je/_):Je<_+D?(lt="gather",ct=(Je-_)/D):Je<_+D+N?(lt="hold",ct=(Je-_-D)/N):(lt="scatter",ct=(Je-_-D-N)/P)}if(lt!==Le){for(let Je=0;Je<i;Je++){const xe=H[Je];xe.snapX=xe.x,xe.snapY=xe.y,lt==="scatter"&&(xe.homeX=(Math.random()-.5)*m,xe.homeY=(Math.random()-.5)*p)}Le=lt}const it=KR(Math.min(ct,1));for(let Je=0;Je<i;Je++){const xe=H[Je];if(lt==="drift")xe.x+=xe.vx,xe.y+=xe.vy,xe.x>x+30&&(xe.x=-x-30),xe.x<-x-30&&(xe.x=x+30),xe.y>g+30&&(xe.y=-g-30),xe.y<-g-30&&(xe.y=g+30);else if(lt==="gather")xe.x=xe.snapX+(xe.heartX-xe.snapX)*it,xe.y=xe.snapY+(xe.heartY-xe.snapY)*it;else if(lt==="hold"){const fe=1+Math.sin(Ke*2)*.03;xe.x=xe.heartX*fe,xe.y=xe.heartY*fe}else lt==="scatter"&&(xe.x=xe.snapX+(xe.homeX-xe.snapX)*it,xe.y=xe.snapY+(xe.homeY-xe.snapY)*it);if(z.active){const fe=xe.x-z.x,ve=xe.y-z.y,ue=fe*fe+ve*ve;if(ue<E&&ue>1){const Ve=Math.sqrt(ue),De=(1-Ve/M)*.9;xe.x+=fe/Ve*De,xe.y+=ve/Ve*De}}const O=Math.sin(Ke*.5+xe.phase)*.18;let b=0;lt==="gather"&&(b=it*.25),lt==="hold"&&(b=.3),lt==="scatter"&&(b=(1-it)*.25);let q=0;if(Y.active){const fe=Ke-Y.startTime;if(fe>Y.duration)Y.active=!1;else{const ve=fe/Y.duration;q=(1-ve)*.7*Math.sin(ve*Math.PI)}}$[Je*3]=xe.x,$[Je*3+1]=xe.y,Ee[Je]=Math.max(.05,xe.baseAlpha+O+b+q)}let ot=s,st=he,Vt=y*d;if(lt==="gather"?(ot+=it*80,st=ot*ot,Vt+=it*.18):lt==="hold"?(ot+=80,st=ot*ot,Vt+=.18):lt==="scatter"&&(ot+=(1-it)*80,st=ot*ot,Vt+=(1-it)*.18),Y.active){const Je=(Ke-Y.startTime)/Y.duration,xe=(1-Je)*Math.sin(Je*Math.PI);ot+=xe*80,st=ot*ot,Vt+=xe*.2}const V=QR(H,ot,x);let Ct=0;const _t=new Set;for(let Je=0;Je<i&&Ct<A;Je++){const xe=H[Je],O=Math.floor((xe.x+x)/ot),b=Math.floor((xe.y+x)/ot),q=JR(V,O,b);for(let fe=0;fe<q.length&&Ct<A;fe++){const ve=q[fe];if(ve<=Je)continue;const ue=Je*i+ve;if(_t.has(ue))continue;_t.add(ue);const Ve=H[ve],De=xe.x-Ve.x,Xe=xe.y-Ve.y,nt=De*De+Xe*Xe;if(nt<st){const Ae=Math.sqrt(nt),Re=(1-Ae/ot)*Vt,Oe=Ct*6;ge[Oe]=xe.x,ge[Oe+1]=xe.y,ge[Oe+2]=0,ge[Oe+3]=Ve.x,ge[Oe+4]=Ve.y,ge[Oe+5]=0,Ce[Ct*2]=Re,Ce[Ct*2+1]=Re,Ct++}}}Be.setDrawRange(0,Ct*2),R.active&&(R.progress=Math.min(R.progress+R.speed,1),me.lerpColors(R.from,R.to,R.progress),R.progress>=1&&(R.active=!1)),U.attributes.position.needsUpdate=!0,U.attributes.alpha.needsUpdate=!0,Be.attributes.position.needsUpdate=!0,Be.attributes.alpha.needsUpdate=!0,k.render(oe,ne)}if(L){if(B)for(let Me=0;Me<i;Me++)$[Me*3]=B[Me].x,$[Me*3+1]=B[Me].y,Ee[Me]=H[Me].baseAlpha+.15;U.attributes.position.needsUpdate=!0,U.attributes.alpha.needsUpdate=!0,k.render(oe,ne)}else v=requestAnimationFrame(je);return{destroy(){v!==null&&cancelAnimationFrame(v),U.dispose(),ie.dispose(),Be.dispose(),te.dispose(),k.dispose()},resize(Me,Ke){m=Me,p=Ke,x=Me/2,g=Ke/2,k.setSize(Me,Ke),ne.left=-x,ne.right=x,ne.top=g,ne.bottom=-g,ne.updateProjectionMatrix()},setMouse(Me,Ke,lt){z.x=Me-x,z.y=-(Ke-g),z.active=lt},burst(){Y.active=!0,Y.startTime=performance.now()*.001;for(let Me=0;Me<i;Me++){const Ke=H[Me],lt=Ke.x,ct=Ke.y,it=Math.sqrt(lt*lt+ct*ct)||1;Ke.vx+=lt/it*1.2,Ke.vy+=ct/it*1.2}},setHeartMode(Me){if(I=Me==="heart",I&&!B){B=Tv(i,de);for(let Ke=0;Ke<i;Ke++)H[Ke].heartX=B[Ke].x,H[Ke].heartY=B[Ke].y}},setColor(Me){R.from.copy(me),R.to.set(Me),R.progress=0,R.active=!0}}}function ew(){try{const r=document.createElement("canvas");return!!(r.getContext("webgl")||r.getContext("experimental-webgl"))}catch{return!1}}const pl=X.forwardRef(function({mode:e="heart",intensity:i=.6,color:s=13935988,className:l="",fixed:c=!1},f){const d=X.useRef(null),m=X.useRef(null),[p]=X.useState(()=>ew());if(X.useImperativeHandle(f,()=>({burst:()=>m.current?.burst(),setHeartMode:g=>m.current?.setHeartMode(g),setColor:g=>m.current?.setColor(g)})),X.useEffect(()=>{if(!p)return;const g=d.current;if(!g)return;const v=window.innerWidth<768,E=Math.round((v?45:90)*(.5+i*.8)),y=Math.round((v?90:130)*(.7+i*.5));let _="heart";(e==="drift"||e==="ambient")&&(_="none");try{m.current=$R(g,{particleCount:E,connectionDistance:y,color:s,heartMode:_,alphaMultiplier:e==="ambient"?.5:.7+i*.4,connectionAlphaMultiplier:e==="ambient"?.4:.6+i*.5})}catch(Y){console.warn("ParticleField: scene creation failed",Y)}let D=null;const N=()=>{clearTimeout(D),D=setTimeout(()=>{m.current?.resize(window.innerWidth,window.innerHeight)},200)};window.addEventListener("resize",N);const P=Y=>m.current?.setMouse(Y.clientX,Y.clientY,!0),F=()=>m.current?.setMouse(0,0,!1),I=Y=>{const R=Y.touches[0];R&&m.current?.setMouse(R.clientX,R.clientY,!0)},z=()=>m.current?.setMouse(0,0,!1);return window.addEventListener("mousemove",P),document.addEventListener("mouseleave",F),window.addEventListener("touchmove",I,{passive:!0}),window.addEventListener("touchend",z),()=>{clearTimeout(D),m.current?.destroy(),m.current=null,window.removeEventListener("resize",N),window.removeEventListener("mousemove",P),document.removeEventListener("mouseleave",F),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",z)}},[p,e,i,s]),!p)return null;const x=c?"fixed":"absolute";return T.jsx("canvas",{ref:d,className:`${x} inset-0 w-full h-full pointer-events-none ${l}`,style:{zIndex:1},"aria-hidden":"true"})});function tw(){const r=ol(),[e,i]=X.useState(0);X.useEffect(()=>{const l=setTimeout(()=>i(1),200),c=setTimeout(()=>i(2),600),f=setTimeout(()=>i(3),1800),d=setTimeout(()=>i(4),2400),m=setTimeout(()=>i(5),3e3);return()=>{clearTimeout(l),clearTimeout(c),clearTimeout(f),clearTimeout(d),clearTimeout(m)}},[]);const s="Your love story, mapped in memories.".split(" ");return T.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[T.jsx(pl,{mode:"heart",intensity:.9}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.14) 0%, rgba(212,165,116,0.04) 40%, transparent 65%)"}}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(232,201,160,0.10) 0%, transparent 70%)",animationDelay:"2s"}}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(200,150,150,0.04) 0%, transparent 50%)",opacity:e>=2?1:0,transition:"opacity 3s ease-out"}}),T.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.06) 0%, transparent 50%)"}}),T.jsx("div",{className:"sparkle-field absolute inset-0 pointer-events-none"}),T.jsxs("div",{className:"relative z-10",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",maxWidth:"680px"},children:[T.jsx("div",{style:{opacity:e>=1?1:0,transform:e>=1?"scale(1)":"scale(0.5)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)"},children:T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/40 heart-glow animate-heart-beat",style:{marginBottom:"16px"},children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),T.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/70 mb-6",style:{opacity:e>=1?1:0,transform:e>=1?"translateY(0)":"translateY(12px)",filter:e>=1?"blur(0)":"blur(4px)",transition:"all 0.8s cubic-bezier(0.22, 1, 0.36, 1)"},children:"The Memory Map"}),T.jsx("h1",{className:"font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary hero-headline-shimmer",style:{textAlign:"center",width:"100%"},children:s.map((l,c)=>T.jsx("span",{className:"inline-block",style:{opacity:e>=2?1:0,transform:e>=2?"translateY(0) scale(1)":"translateY(20px) scale(0.95)",filter:e>=2?"blur(0)":"blur(8px)",transition:"all 0.9s cubic-bezier(0.22, 1, 0.36, 1)",transitionDelay:`${c*.08}s`,marginRight:"0.25em"},children:l},c))}),T.jsx("div",{className:"mt-5 mb-1",style:{width:"60px",height:"1px",background:"linear-gradient(90deg, transparent, rgba(224,176,128,0.35), transparent)",opacity:e>=3?1:0,transform:e>=3?"scaleX(1)":"scaleX(0)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)",transformOrigin:"center"}}),T.jsx("p",{className:"font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-5 leading-relaxed",style:{opacity:e>=3?1:0,transform:e>=3?"translateY(0)":"translateY(16px)",filter:e>=3?"blur(0)":"blur(4px)",transition:"all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",maxWidth:"480px",textAlign:"center"},children:"Share the moments that matter most. We'll map them into a Valentine's gift worth keeping."}),T.jsx("div",{className:"mt-12",style:{opacity:e>=4?1:0,transform:e>=4?"translateY(0) scale(1)":"translateY(12px) scale(0.95)",transition:"all 0.8s cubic-bezier(0.22, 1, 0.36, 1)"},children:T.jsx(Qv,{onClick:()=>r("/create"),className:"glow-button",children:"Start Your Memory Map"})}),T.jsx("p",{className:"font-body text-[11px] text-text-tertiary/50 mt-4",style:{opacity:e>=4?1:0,transition:"opacity 1s ease-out",transitionDelay:"0.3s"},children:"Free. No account needed. Ready in minutes."})]}),T.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2",style:{opacity:e>=5?1:0,transition:"opacity 1s ease-out"},children:T.jsx("div",{className:"animate-gentle-bounce",children:T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/40",children:T.jsx("path",{d:"M6 9l6 6 6-6"})})})})]})}function Mu(r={}){const e=X.useRef(null),[i,s]=X.useState(!1);return X.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(s(!0),c.unobserve(l))},{threshold:r.threshold||.1,rootMargin:r.rootMargin||"0px 0px -40px 0px"});return c.observe(l),()=>c.disconnect()},[r.threshold,r.rootMargin]),[e,i]}function ma({children:r,className:e="",delay:i=0,direction:s="up"}){const[l,c]=Mu(),f={up:"translate-y-5",left:"-translate-x-[30px]",right:"translate-x-[30px]",none:""};return T.jsx("div",{ref:l,className:`transition-all duration-600 ease-out ${c?"opacity-100 translate-y-0 translate-x-0":`opacity-0 ${f[s]}`} ${e}`,style:{transitionDelay:`${i}s`},children:r})}const nw=[{number:"1",label:"Remember",description:"Talk or type about the moments you never want to forget",icon:T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/50",children:[T.jsx("path",{d:"M12 20h9"}),T.jsx("path",{d:"M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"})]})},{number:"2",label:"Watch it come alive",description:"Each memory becomes part of your love map",icon:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})},{number:"3",label:"Send it with love",description:"A Valentine's gift made entirely from your time together",icon:T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/50",children:[T.jsx("path",{d:"M22 2L11 13"}),T.jsx("path",{d:"M22 2L15 22l-4-9-9-4 20-7z"})]})}];function iw(){return T.jsxs("section",{className:"py-[120px] px-6 relative overflow-hidden",children:[T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)"}}),T.jsxs("div",{className:"max-w-[900px] relative z-10",style:{marginLeft:"auto",marginRight:"auto"},children:[T.jsx(ma,{children:T.jsxs("div",{className:"text-center mb-16",children:[T.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-accent-primary/50 mb-3",children:"How it works"}),T.jsx("h2",{className:"font-display text-[clamp(24px,4vw,36px)] font-medium text-text-primary",children:"Three steps to something beautiful"}),T.jsx("div",{className:"mt-4",style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, rgba(224,176,128,0.30), transparent)",marginLeft:"auto",marginRight:"auto"}})]})}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative",children:[T.jsx("div",{className:"hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px pointer-events-none",style:{background:"linear-gradient(90deg, transparent, rgba(224,176,128,0.15), rgba(224,176,128,0.15), transparent)"}}),nw.map((r,e)=>T.jsx(ma,{delay:e*.15,children:T.jsxs("div",{className:"step-card-glass text-center",children:[T.jsx("div",{className:"step-number-glow inline-block mb-4",children:T.jsx("span",{className:"font-accent italic text-[48px] text-accent-primary/70 leading-none",children:r.number})}),T.jsx("div",{className:"flex justify-center mb-3",children:r.icon}),T.jsx("h3",{className:"font-body text-sm uppercase tracking-[0.1em] text-text-primary mb-2",children:r.label}),T.jsx("p",{className:"font-body text-base text-text-secondary leading-relaxed",children:r.description})]})},r.number))]})]})]})}function ml({count:r=12,opacity:e=.12}){const i=X.useMemo(()=>Array.from({length:r},(s,l)=>({id:l,left:`${5+l*89%90}%`,size:12+l*7%18,delay:`${l*2.3%8}s`,duration:`${12+l*3.7%10}s`,opacity:e*(.5+l*13%10/10)})),[r,e]);return T.jsx("div",{className:"floating-hearts",children:i.map(s=>T.jsx("svg",{className:"heart",width:s.size,height:s.size,viewBox:"0 0 24 24",fill:"currentColor",style:{left:s.left,animationDuration:s.duration,animationDelay:s.delay,color:`rgba(220, 150, 150, ${s.opacity})`,filter:`drop-shadow(0 0 4px rgba(220, 150, 150, ${s.opacity*.5}))`},children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})},s.id))})}function aw(){return T.jsxs("main",{className:"relative",children:[T.jsx(ml,{count:8,opacity:.04}),T.jsx(tw,{}),T.jsx(iw,{})]})}const rw=[{id:"partner",label:"My Partner",sub:"my Valentine"},{id:"friend",label:"My Best Friend",sub:"my chosen family"},{id:"parent",label:"My Parent",sub:"my first love"},{id:"sibling",label:"My Sibling",sub:"my longest story"},{id:"grandparent",label:"My Grandparent",sub:"my foundation"},{id:"other",label:"Someone Special",sub:"my person"}];function sw({onComplete:r}){const[e,i]=X.useState(""),[s,l]=X.useState(null),[c,f]=X.useState(0),d=p=>{p.preventDefault(),e.trim()&&f(1)},m=p=>{l(p),f(2),setTimeout(()=>{r({name:e.trim(),type:p.id,typeLabel:p.label})},600)};return T.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[T.jsx(pl,{mode:"ambient",intensity:.4}),T.jsx(ml,{count:8,opacity:.04}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),T.jsxs("div",{className:`text-center max-w-[560px] relative z-10 transition-all duration-700 ease-out ${c===2?"opacity-0 translate-y-[-20px]":"opacity-100"}`,children:[c===0&&T.jsxs("form",{onSubmit:d,className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[T.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-6 text-accent-primary/40 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("p",{className:"font-accent text-[clamp(24px,4vw,32px)] font-light text-text-primary leading-[1.3] mb-10",children:"Who is this Memory Map for?"}),T.jsxs("div",{className:"relative max-w-[400px] mx-auto",children:[T.jsx("input",{type:"text",value:e,onChange:p=>i(p.target.value),placeholder:"Their first name",autoFocus:!0,className:"w-full bg-transparent border-0 border-b-2 border-accent-primary/20 focus:border-accent-primary/60 text-center font-display text-[clamp(28px,5vw,40px)] font-medium text-text-primary placeholder:text-text-tertiary/30 focus:outline-none pb-3 transition-all duration-300"}),T.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-500",style:{width:e?"100%":"0%"}})]}),T.jsxs("button",{type:"submit",disabled:!e.trim(),className:`mt-10 font-body text-sm tracking-wide transition-all duration-500 cursor-pointer ${e.trim()?"text-accent-primary opacity-100 translate-y-0":"text-text-tertiary/30 opacity-0 translate-y-2 pointer-events-none"}`,children:["Continue",T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"inline-block ml-2",children:T.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c>=1&&c<2&&T.jsxs("div",{className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[T.jsxs("p",{className:"font-accent text-[clamp(20px,3.5vw,28px)] font-light text-text-primary leading-[1.3] mb-3",children:[T.jsx("span",{className:"text-accent-primary",children:e.trim()})," is..."]}),T.jsx("p",{className:"font-body text-sm text-text-tertiary/60 mb-10",children:"This shapes how your Memory Map feels"}),T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto",children:rw.map(p=>T.jsxs("button",{onClick:()=>m(p),className:"group glass-card rounded-lg px-4 py-5 text-center cursor-pointer transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated/60 active:scale-[0.97]",children:[T.jsx("span",{className:"font-body text-sm font-medium text-text-primary block",children:p.label}),T.jsx("span",{className:"font-body text-[10px] text-text-tertiary/50 mt-1 block",children:p.sub})]},p.id))})]}),c===2&&s&&T.jsxs("div",{className:"animate-fade-in text-center",children:[T.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-4 text-accent-primary/50 animate-heart-fade-in heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsxs("p",{className:"font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary",children:["A Memory Map for ",T.jsx("span",{className:"text-accent-primary",children:e.trim()})]})]})]})]})}function ow({prompt:r,onSubmit:e,isProcessing:i,memoryIndex:s}){const[l,c]=X.useState(""),[f,d]=X.useState(!1),m=X.useRef(null);X.useEffect(()=>{const g=setTimeout(()=>d(!0),100);return()=>clearTimeout(g)},[]),X.useEffect(()=>{if(f){const g=setTimeout(()=>m.current?.focus(),500);return()=>clearTimeout(g)}},[f]),X.useEffect(()=>{const g=m.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,200)+"px")},[l]);const p=()=>{const g=l.trim();!g||i||e(g)},x=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),p())};return T.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:[T.jsx("p",{className:`font-accent text-[clamp(22px,4vw,32px)] font-light text-text-primary text-center
          max-w-[600px] leading-[1.4] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:r}),T.jsxs("div",{className:`mt-10 w-full max-w-[560px] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0 delay-300":"opacity-0 translate-y-4"}`,children:[T.jsx("textarea",{ref:m,value:l,onChange:g=>c(g.target.value),onKeyDown:x,disabled:i,placeholder:"Tell your story here...",rows:2,className:`w-full bg-transparent text-center font-body text-lg text-text-primary\r
            placeholder:font-accent placeholder:italic placeholder:text-text-tertiary/40\r
            resize-none pb-4 transition-colors duration-500`,style:{border:"none",borderBottom:"1px solid rgba(212, 165, 116, 0.15)",outline:"none",boxShadow:"none"},onFocus:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.4)",g.target.style.outline="none"},onBlur:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.15)"}}),T.jsx("div",{className:"flex justify-center mt-4",children:T.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50 animate-breathe",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),T.jsx("div",{className:`mt-6 flex justify-center transition-all duration-500
            ${l.trim()?"opacity-100 translate-y-0":"opacity-0 translate-y-2 pointer-events-none"}`,children:T.jsxs("button",{onClick:p,disabled:!l.trim()||i,className:`font-body text-sm text-accent-primary hover:text-accent-secondary\r
              transition-colors cursor-pointer flex items-center gap-2`,children:["Save this memory",T.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-70",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})}),T.jsx("p",{className:`mt-4 text-center font-body text-[11px] text-text-tertiary/30
            transition-all duration-500
            ${f?"opacity-100 delay-700":"opacity-0"}`,children:"Press Enter to save"})]}),s>0&&T.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:T.jsxs("div",{className:"flex items-center gap-2",children:[Array.from({length:s}).map((g,v)=>T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/40",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})},v)),T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary animate-breathe",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})})]})}function lw({memory:r,onContinue:e}){const[i,s]=X.useState(0),l=X.useRef(!1),c=X.useCallback(()=>{l.current||(l.current=!0,s(2),setTimeout(()=>e(),600))},[e]);return X.useEffect(()=>{const f=setTimeout(()=>s(1),100);return()=>clearTimeout(f)},[]),X.useEffect(()=>{if(i!==1||r.loading)return;const f=d=>{d.key==="Enter"&&(d.preventDefault(),c())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[i,r.loading,c]),r.loading?T.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"w-2 h-2 rounded-full bg-accent-primary animate-breathe mx-auto mb-4"}),T.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Capturing this moment..."})]})}):T.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:T.jsxs("div",{className:`max-w-[480px] w-full glass-card rounded-xl p-8 transition-all duration-700 ease-out
          ${i===0?"opacity-0 translate-y-6 scale-95":""}
          ${i===1?"opacity-100 translate-y-0 scale-100":""}
          ${i===2?"opacity-0 -translate-y-6 scale-95":""}`,children:[T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30 mb-3 mx-auto heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("h3",{className:"font-display text-2xl font-medium text-text-primary mb-2",children:r.title}),r.date_hint&&T.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-4",children:r.date_hint}),T.jsxs("p",{className:"font-accent text-lg text-text-secondary leading-relaxed mb-5",children:["“",r.excerpt,"”"]}),T.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-6",children:[r.emotion&&T.jsx("span",{className:`font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80\r
              border border-accent-primary/20 rounded-full px-3 py-1`,children:r.emotion}),r.location?.place_name&&T.jsxs("span",{className:"font-body text-[11px] text-text-tertiary flex items-center gap-1",children:[T.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),T.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(f=>T.jsx("span",{className:"font-body text-[10px] text-text-tertiary/60 border border-border-subtle rounded-full px-2 py-0.5",children:f},f))]}),T.jsxs("button",{onClick:c,className:`font-body text-sm text-accent-primary hover:text-accent-secondary\r
            transition-colors cursor-pointer flex items-center gap-2 mx-auto`,children:["Continue",T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),T.jsx("p",{className:"mt-3 text-center font-body text-[11px] text-text-tertiary/30",children:"Press Enter to continue"})]})})}function cw({memoryCount:r,recipientName:e,onAddMore:i}){const s=ol(),[l,c]=X.useState(0);return X.useEffect(()=>{const f=setTimeout(()=>c(1),200),d=setTimeout(()=>c(2),800),m=setTimeout(()=>c(3),1400);return()=>{clearTimeout(f),clearTimeout(d),clearTimeout(m)}},[]),T.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:[T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)",opacity:l>=1?1:0,transition:"opacity 2s ease-out"}}),T.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[T.jsx("div",{className:`mb-4 transition-all duration-700 ${l>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:T.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/50 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),T.jsxs("div",{className:`mb-6 transition-all duration-700 ${l>=1?"opacity-100":"opacity-0"}`,children:[T.jsx("span",{className:"font-display text-5xl text-accent-primary",children:r}),T.jsxs("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/50 mt-2",children:[r===1?"Memory":"Memories"," captured"]})]}),T.jsxs("div",{className:`flex items-center justify-center gap-3 mb-8 transition-all duration-800 ${l>=1?"opacity-100":"opacity-0"}`,children:[T.jsx("div",{className:"w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/25"}),T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("div",{className:"w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/25"})]}),T.jsxs("p",{className:`font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary leading-[1.4] mb-10 transition-all duration-[1200ms] ease-out ${l>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{filter:l>=2?"blur(0)":"blur(4px)"},children:["Your map of ",T.jsx("span",{className:"text-accent-primary",children:e})," is ready."]}),T.jsxs("div",{className:`flex flex-col items-center gap-5 transition-all duration-700 ${l>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[T.jsxs("button",{onClick:()=>s("/preview"),className:"group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50",children:[T.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{boxShadow:"0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)"}}),T.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["See Your Memory Map",T.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-60",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})]}),T.jsx("button",{onClick:i,className:"font-body text-xs text-text-tertiary/50 hover:text-accent-primary/70 transition-colors cursor-pointer",children:"+ Add another memory"})]})]})]})}const L_="/api";async function uw(r,e){const i=await fetch(`${L_}/process-memory`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}async function fw(r,e){const i=await fetch(`${L_}/relationship-summary`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({memories:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}function dw({addMemory:r,updateMemory:e,memories:i,setRelationshipSummary:s,relationshipContext:l}){return{submitMemory:X.useCallback(f=>{const d=Date.now().toString();return r({id:d,rawText:f,loading:!0,title:null,date_hint:null,location:null,emotion:null,excerpt:null,theme_tags:[]}),uw(f,l).then(p=>{if(e(d,{...p,loading:!1,rawText:f}),i.length+1>=3){const g=[...i.map(v=>v.rawText||v.excerpt),f];fw(g,l).then(v=>s(v)).catch(v=>console.error("Summary generation failed:",v))}}).catch(p=>{console.error("Memory processing failed:",p);const x=f.trim().split(/\s+/);let v=x.slice(0,Math.min(6,x.length)).join(" ");x.length>6&&(v+="..."),v=v.charAt(0).toUpperCase()+v.slice(1),e(d,{loading:!1,title:v||"A moment remembered",excerpt:f,emotion:"nostalgia",theme_tags:["personal"]})}),d},[r,e,i,s,l])}}const $c={first:[r=>`Close your eyes for a second. What's the first moment with ${r} that comes to mind?`,r=>`What's a moment with ${r} you'd relive if you could? Not to change it, just to feel it again.`,r=>`Think about ${r}. What memory makes you smile before you even finish the thought?`],second:[r=>`What's something ${r} does, maybe without even realizing, that completely disarms you?`,r=>`Is there a place that holds a piece of your story with ${r}? What happened there?`,r=>`When did ${r} surprise you? Not with a gift, but by being exactly who they are.`],third:[r=>`What would you tell ${r} if you knew they'd really hear it? Not just listen, but feel it.`,r=>`What's a small, ordinary moment with ${r} that turned out to be one of the most important ones?`,r=>`When did you first realize ${r} wasn't just someone in your life, but someone your life was built around?`],continuing:[r=>`There's always one more. What else surfaces when you sit with ${r} in your mind?`,r=>`Is there a moment with ${r} you've never told anyone about? You don't have to share all of it. Just enough.`,r=>`What's something about your time with ${r} that still catches you off guard?`]};function ph(r,e){const i=r===0?$c.first:r===1?$c.second:r===2?$c.third:$c.continuing,s=Math.floor(Math.random()*i.length);return i[s](e)}function hw({memories:r,addMemory:e,updateMemory:i,deleteMemory:s,relationshipContext:l,setRelationshipContext:c,relationshipSummary:f,setRelationshipSummary:d}){const[m,p]=X.useState("prompting"),[x,g]=X.useState(""),[v,M]=X.useState(null),[E,A]=X.useState(0),y=X.useRef(null),{submitMemory:_}=dw({addMemory:e,updateMemory:i,memories:r,setRelationshipSummary:d,relationshipContext:l});X.useEffect(()=>{l&&!x&&g(ph(r.length,l.name))},[l]);const D=r.find(I=>I.id===v);X.useEffect(()=>{m==="processing"&&D&&!D.loading&&p("revealing")},[m,D?.loading]);const N=X.useCallback(I=>{y.current?.burst();const z=_(I);M(z),p("processing")},[_]),P=X.useCallback(()=>{r.length>=3?(y.current?.setHeartMode("heart"),p("complete")):(g(ph(r.length,l.name)),A(I=>I+1),p("prompting"))},[r.length,l]),F=X.useCallback(()=>{y.current?.setHeartMode("none"),g(ph(r.length,l.name)),A(I=>I+1),p("prompting")},[r.length,l]);return l?T.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[T.jsx(pl,{ref:y,mode:m==="complete"?"heart":"drift",intensity:m==="processing"?.8:m==="complete"?.7:.5,fixed:!0}),T.jsx(ml,{count:10,opacity:.05}),T.jsx("div",{className:`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]\r
          rounded-full pointer-events-none animate-glow-pulse`,style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)"}}),m==="prompting"&&T.jsx(ow,{prompt:x,onSubmit:N,isProcessing:!1,memoryIndex:r.length},E),m==="processing"&&D?.loading&&T.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:T.jsxs("div",{className:"text-center",children:[T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-4 text-accent-primary animate-heart-beat heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Capturing this moment..."})]})}),(m==="revealing"||m==="processing"&&D&&!D.loading)&&D&&T.jsx(lw,{memory:D,onContinue:P}),m==="complete"&&T.jsx(cw,{memoryCount:r.length,recipientName:l.name,onAddMore:F})]}):T.jsx("main",{className:"min-h-screen bg-bg-primary",children:T.jsx(sw,{onComplete:c})})}const pw="modulepreload",mw=function(r){return"/"+r},Av={},$o=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(x){return Promise.all(x.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var f=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(x=>{if(x=mw(x),x in Av)return;Av[x]=!0;const g=x.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${v}`))return;const M=document.createElement("link");if(M.rel=g?"stylesheet":pw,g||(M.as="script"),M.crossOrigin="",M.href=x,m&&M.setAttribute("nonce",m),document.head.appendChild(M),g)return new Promise((E,A)=>{M.addEventListener("load",E),M.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${x}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function gw({memories:r}){const e=X.useRef(null),i=X.useRef(null),[s,l]=X.useState(!1),c=r.filter(f=>f.location?.coordinates&&!f.loading);return X.useEffect(()=>!e.current||i.current?void 0:((async()=>{const d=(await $o(async()=>{const{default:p}=await import("./mapbox-gl-yvUAwFkg.js").then(x=>x.m);return{default:p}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const x=await(await fetch("/api/config")).json();d.accessToken=x.mapboxToken||""}catch{d.accessToken=""}if(!d.accessToken){console.warn("Mapbox token not set. Map will not render.");return}const m=new d.Map({container:e.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,logoPosition:"bottom-left"});m.on("load",()=>{l(!0)}),i.current=m})(),()=>{i.current&&(i.current.remove(),i.current=null)}),[]),X.useEffect(()=>{if(!i.current||!s)return;const f=i.current;if(document.querySelectorAll(".memory-marker").forEach(p=>p.remove()),f.getLayer("preview-route-glow")&&f.removeLayer("preview-route-glow"),f.getLayer("preview-route-line")&&f.removeLayer("preview-route-line"),f.getSource("preview-route")&&f.removeSource("preview-route"),c.length===0)return;(async()=>{const p=(await $o(async()=>{const{default:v}=await import("./mapbox-gl-yvUAwFkg.js").then(M=>M.m);return{default:v}},[])).default,x=new p.LngLatBounds,g=[];if(c.forEach((v,M)=>{const[E,A]=v.location.coordinates,y=[A,E];x.extend(y),g.push(y);const _=document.createElement("div");_.className="memory-marker",_.style.cssText=`
          width: 14px;
          height: 14px;
          background: radial-gradient(circle, #E8C9A0 0%, #D4A574 60%, rgba(212,165,116,0.6) 100%);
          border-radius: 50%;
          box-shadow: 0 0 16px rgba(212,165,116,0.5), 0 0 40px rgba(212,165,116,0.15);
          animation: marker-drop 0.5s ease-out forwards;
          animation-delay: ${M*.3}s;
          opacity: 0;
          position: relative;
        `;const D=document.createElement("div");D.style.cssText=`
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: Satoshi, sans-serif;
          font-size: 9px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(232,201,160,0.6);
          white-space: nowrap;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        `,D.textContent=v.location.place_name,_.appendChild(D);const N=new p.Popup({offset:15,closeButton:!1,className:"memory-popup"}).setHTML(`<div style="font-family: Satoshi, sans-serif; font-size: 11px; color: #E8C9A0; background: #111; padding: 6px 10px; border-radius: 4px;">
            ${v.location.place_name}
          </div>`);new p.Marker({element:_}).setLngLat(y).setPopup(N).addTo(f)}),g.length>=2&&(f.addSource("preview-route",{type:"geojson",data:{type:"Feature",geometry:{type:"LineString",coordinates:g}}}),f.addLayer({id:"preview-route-glow",type:"line",source:"preview-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.1)","line-width":5,"line-blur":4}}),f.addLayer({id:"preview-route-line",type:"line",source:"preview-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.3)","line-width":1.5,"line-dasharray":[3,4]}})),c.length>1)f.fitBounds(x,{padding:60,maxZoom:12});else{const[v,M]=c[0].location.coordinates;f.flyTo({center:[M,v],zoom:10})}})()},[c,s]),T.jsxs("div",{className:"relative h-full min-h-[300px] rounded-lg overflow-hidden",children:[T.jsx("div",{ref:e,className:"w-full h-full"}),c.length===0&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-bg-secondary/80 pointer-events-none",children:T.jsx("p",{className:"font-body text-sm text-text-tertiary text-center px-6",children:"Memories with places will appear here"})})]})}function xw(r,e,i,s){const l={m:r.map(d=>({t:d.title,e:d.excerpt,d:d.date_hint,em:d.emotion,l:d.location,tags:d.theme_tags})),s:e?{e:e.relationship_essence,t:e.timeline_title,th:e.dominant_themes,c:e.color_mood}:null,n:i||null,r:s?{name:s.name,type:s.type}:null},c=JSON.stringify(l);return btoa(unescape(encodeURIComponent(c)))}function vw(r){try{const e=decodeURIComponent(escape(atob(r))),i=JSON.parse(e),s=i.m.map((f,d)=>({id:`shared-${d}`,title:f.t,excerpt:f.e,date_hint:f.d,emotion:f.em,location:f.l,theme_tags:f.tags||[]})),l=i.s?{relationship_essence:i.s.e,timeline_title:i.s.t,dominant_themes:i.s.th,color_mood:i.s.c}:null,c=i.r||null;return{memories:s,summary:l,personalNote:i.n,relationshipContext:c}}catch(e){return console.error("Failed to decode share data:",e),null}}function _w(r,e,i,s){const l=xw(r,e,i,s);return`${window.location.origin}/shared/${l}`}function yw({memories:r,summary:e,personalNote:i,relationshipContext:s}){const[l,c]=X.useState(""),[f,d]=X.useState(!1),[m,p]=X.useState(!1),x=()=>{p(!0),setTimeout(()=>{const E=_w(r,e,i,s);c(E),p(!1)},600)},g=async()=>{try{await navigator.clipboard.writeText(l),d(!0),setTimeout(()=>d(!1),2e3)}catch{const E=document.createElement("input");E.value=l,document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E),d(!0),setTimeout(()=>d(!1),2e3)}},v=()=>{const E=encodeURIComponent("I made a Valentine's Memory Map for someone I love.");window.open(`https://twitter.com/intent/tweet?text=${E}&url=${encodeURIComponent(l)}`,"_blank")},M=()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(l)}`,"_blank")};return T.jsx("div",{className:"text-center py-8 max-w-[480px] px-6",style:{marginLeft:"auto",marginRight:"auto"},children:l?T.jsxs("div",{className:"space-y-5 animate-fade-up",style:{animationFillMode:"forwards"},children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("input",{type:"text",readOnly:!0,value:l,className:"flex-1 bg-transparent border-b border-border-subtle px-2 py-2.5 font-body text-xs text-text-secondary/70 truncate text-center",style:{outline:"none"}}),T.jsx("button",{onClick:g,className:"font-body text-xs text-accent-primary/80 hover:text-accent-secondary border border-accent-primary/20 rounded-full px-4 py-2 hover:border-accent-primary/40 transition-all duration-300 cursor-pointer shrink-0",children:f?T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M20 6L9 17l-5-5"})}):"Copy"})]}),T.jsxs("div",{className:"flex items-center justify-center gap-5 pt-1",children:[T.jsx("button",{onClick:v,className:"text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer","aria-label":"Share on X",children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),T.jsx("button",{onClick:M,className:"text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer","aria-label":"Share on LinkedIn",children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}):T.jsxs("button",{onClick:x,disabled:m,className:"group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",children:[T.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{boxShadow:"0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)"}}),T.jsx("span",{className:"relative z-10 flex items-center justify-center gap-2",children:m?T.jsxs(T.Fragment,{children:[T.jsx("svg",{className:"w-4 h-4 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"})}),"Creating your link..."]}):T.jsxs(T.Fragment,{children:["Create Share Link",T.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-60",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})})]})})}function lu({size:r=14,className:e=""}){return T.jsx("div",{className:`heart-divider py-6 ${e}`,children:T.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})}const mu={"Words of Affirmation":{emotions:["gratitude","love","joy"],tags:["communication","support","encouragement","letters","compliments","words","talking","said","told","message","text","unspoken understanding","vulnerability"],description:"What's said between you becomes sacred",insights:[r=>`This memory lives in language. The words between you and ${r||"them"} aren't small talk. They're the architecture of your intimacy. What gets said out loud between you two has a weight that most people never experience.`,r=>`Notice what's happening here: a moment that could have passed in silence instead became something spoken. That's not an accident. ${r?r+" needs":"They need"} to hear it, and you need to say it. That's the engine of your connection.`,r=>"There's a reason this memory stayed with you. It's because something was named. A feeling, a truth, a gratitude. In your relationship, the unspoken eventually demands to be spoken. And when it is, it changes everything."]},"Quality Time":{emotions:["joy","comfort","nostalgia","adventure"],tags:["travel","together","evening","weekend","dinner","walk","adventure","explore","date","night","morning","trip","visit","spent","everyday moments","routine","everyday sacred","the small things","finding home"],description:"Your presence is the gift they never have to unwrap",insights:[r=>`This memory isn't about what happened. It's about who you were with when it did. The activity is almost irrelevant. What matters is that you and ${r||"them"} were in the same room, breathing the same air, existing in the same moment. That's the whole thing.`,r=>`You could have been anywhere, doing anything. But this specific moment, with ${r||"this person"}, in this specific place... that's what stayed. Not because it was extraordinary, but because being together made the ordinary feel like enough.`,r=>"Here's what this memory reveals: your love doesn't need an event. It needs presence. The moments that matter most between you aren't the ones you planned. They're the ones where you simply chose to stay in the room."]},"Acts of Service":{emotions:["gratitude","comfort","love"],tags:["help","care","cooking","support","surprise","effort","sacrifice","drove","made","built","fixed","cleaned","prepared","comfort in chaos","trust"],description:"Love is a verb in your vocabulary",insights:[r=>`What you remember here isn't a grand gesture. It's someone showing up. ${r||"They"} didn't say "I love you" in this moment. ${r||"They"} proved it. And the fact that you noticed? That's how you know it's your language too.`,r=>"In this memory, love looks like effort. Not the showy kind. The quiet, unglamorous kind that most people overlook. But you didn't overlook it. You filed it away as evidence of something profound. That says everything about what you value.",r=>"The psychology here is simple but powerful: when someone does something for you that they didn't have to, it rewires how safe you feel with them. This memory is a record of that safety being built, one action at a time."]},"Physical Touch":{emotions:["love","comfort","bittersweet"],tags:["embrace","dance","touch","hold","close","warmth","cuddle","hug","kiss","hand","shoulder","lean","playful intimacy","letting go"],description:"What words can't carry, your closeness does",insights:[r=>`This memory is stored in your body, not just your mind. The warmth, the proximity, the physical reality of ${r||"them"} being close... your nervous system registered that as home. That's not metaphor. That's neuroscience. And it's beautiful.`,r=>`Notice that in this memory, the most important thing isn't what was said. It's how close you were when nothing needed to be said. For you and ${r||"them"}, presence is physical. Safety is felt before it's understood.`,r=>`There's a reason this moment stayed: it's when the distance between you and ${r||"them"} collapsed to zero. Not emotionally. Literally. And in that closeness, something wordless was communicated that neither of you could have said out loud.`]},"Receiving Gifts":{emotions:["joy","gratitude","love"],tags:["gift","surprise","present","birthday","celebration","anniversary","ring","bought","gave","special","milestones","first times"],description:"The symbols of your love become its landmarks",insights:[r=>`What you're really remembering here isn't an object. It's proof that someone was thinking about you when you weren't in the room. ${r||"They"} saw something, thought of you, and acted on it. That chain of attention is the real gift.`,r=>`This memory marks a moment when something invisible, a feeling, a milestone, a promise, was made tangible. For you and ${r||"them"}, the physical token isn't the point. It's the evidence that this matters enough to commemorate.`,r=>"In the psychology of relationships, meaningful gifts function like bookmarks. They mark the page where your story changed. This memory is one of those pages. Not because of what was given, but because of what it represented between you."]}};function U_(r,e=[]){const i=e.map(l=>l.toLowerCase()),s=[];for(const[l,c]of Object.entries(mu)){let f=0;c.emotions.includes(r)&&(f+=2);for(const d of i)c.tags.some(m=>d.includes(m)||m.includes(d))&&(f+=3);s.push([l,f])}return s.sort((l,c)=>c[1]-l[1])}function Sw(r){let e=0;for(let i=0;i<r.length;i++)e=(e<<5)-e+r.charCodeAt(i)|0;return Math.abs(e)}function Mw(r,e=[],i=""){const s=U_(r,e),[l,c]=s[0],f=c>=2?l:"Quality Time",d=mu[f],m=(r||"").length%d.insights.length,p=d.insights[m](i);return{language:f,description:d.description,insight:p}}function bw(r,e=""){if(!r||r.length===0)return{};const i=Object.keys(mu),s=new Set,l=new Set,c={},d=[...r.map((m,p)=>({id:m.id,index:p,emotion:m.emotion,scores:U_(m.emotion,m.theme_tags)}))].sort((m,p)=>p.scores[0][1]-m.scores[0][1]);for(const m of d){let p=null;if(s.size<i.length){for(const[M,E]of m.scores)if(!s.has(M)){p=M;break}}p||(p=m.scores[0][0]),s.add(p);const x=mu[p];let v=Sw(m.id+m.index)%x.insights.length;for(let M=0;M<x.insights.length;M++){const E=`${p}:${v}`;if(!l.has(E)){l.add(E);break}v=(v+1)%x.insights.length}c[m.id]={language:p,description:x.description,insight:x.insights[v](e)}}return c}const Rv={joy:{accent:"#E0B080",glow:"rgba(224, 176, 128, 0.16)"},nostalgia:{accent:"#C4B0D8",glow:"rgba(196, 176, 216, 0.14)"},gratitude:{accent:"#B0D8BA",glow:"rgba(176, 216, 186, 0.14)"},love:{accent:"#D89C9C",glow:"rgba(216, 156, 156, 0.16)"},humor:{accent:"#E0CC80",glow:"rgba(224, 204, 128, 0.14)"},bittersweet:{accent:"#BBABCE",glow:"rgba(187, 171, 206, 0.14)"},adventure:{accent:"#84BFE4",glow:"rgba(132, 191, 228, 0.14)"},comfort:{accent:"#E0C89C",glow:"rgba(224, 200, 156, 0.14)"}};function Ew({memory:r,index:e,recipientName:i,loveLanguage:s}){const[l,c]=X.useState(!1),f=X.useRef(null),[d,m]=X.useState(0),p=Rv[r.emotion]||Rv.joy,x=s||Mw(r.emotion,r.theme_tags,i);return X.useEffect(()=>{f.current&&m(f.current.scrollHeight)},[l,r]),T.jsxs("div",{className:`memory-card-cinematic p-8 text-center cursor-pointer transition-all duration-500 ${l?"ring-1 ring-accent-primary/15":""}`,onClick:()=>c(!l),role:"button",tabIndex:0,"aria-expanded":l,onKeyDown:g=>g.key==="Enter"&&c(!l),style:{padding:"32px",textAlign:"center",boxShadow:l?`0 20px 80px rgba(0,0,0,0.5), 0 0 60px ${p.glow}`:void 0},children:[T.jsxs("div",{className:"flex items-center justify-center gap-4 mb-5",children:[r.emotion&&T.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-3 py-1 border",style:{color:`${p.accent}cc`,borderColor:`${p.accent}30`},children:r.emotion}),r.date_hint&&T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-text-tertiary/50",children:r.date_hint})]}),T.jsx("h3",{className:"font-display text-[clamp(22px,3.5vw,28px)] font-medium text-text-primary mb-4 leading-[1.2]",children:r.title}),T.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[T.jsx("div",{className:"w-6 h-px bg-gradient-to-r from-transparent to-accent-primary/30"}),T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/45 heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("div",{className:"w-6 h-px bg-gradient-to-l from-transparent to-accent-primary/30"})]}),T.jsxs("p",{className:"font-accent text-[clamp(15px,2.2vw,19px)] text-text-secondary leading-[1.8] mb-5 max-w-[480px] mx-auto",children:["“",r.excerpt,"”"]}),T.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap",children:[r.location?.place_name&&T.jsxs("span",{className:"font-body text-[10px] text-text-tertiary/60 flex items-center gap-1.5",children:[T.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"shrink-0 text-accent-primary/50",children:[T.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),T.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(g=>T.jsx("span",{className:"font-body text-[9px] text-text-tertiary/50 bg-bg-elevated/30 rounded-full px-2.5 py-0.5",children:g},g))]}),T.jsx("div",{className:`mt-5 transition-all duration-400 ${l?"opacity-0 h-0 mt-0":"opacity-40"}`,children:T.jsxs("span",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/50 flex items-center justify-center gap-1.5",children:[T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-accent-primary/30",children:T.jsx("path",{d:"M6 9l6 6 6-6"})}),"Tap to reveal more"]})}),T.jsx("div",{className:"overflow-hidden",style:{maxHeight:l?`${d+20}px`:"0px",opacity:l?1:0,transition:"max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease-out"},children:T.jsxs("div",{ref:f,children:[T.jsx("div",{className:"w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mt-6 mb-8"}),T.jsx("div",{className:"flex justify-center mb-6",children:T.jsx("div",{className:"w-24 h-24 rounded-full animate-breathe",style:{background:`radial-gradient(circle, ${p.glow}, transparent 70%)`}})}),T.jsx("p",{className:"font-body text-[9px] uppercase tracking-[0.2em] text-text-tertiary/50 mb-2",children:"Your Love Language"}),T.jsx("h4",{className:"font-display text-[clamp(20px,3vw,26px)] font-medium mb-2 leading-[1.2]",style:{color:p.accent},children:x.language}),T.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.12em] mb-5",style:{color:`${p.accent}80`},children:x.description}),T.jsx("p",{className:"font-accent text-base text-text-secondary/70 leading-relaxed max-w-[420px] mx-auto mb-6 italic",children:x.insight}),r.rawText&&r.rawText!==r.excerpt&&T.jsxs("div",{className:"mt-2 p-5 rounded-xl bg-bg-elevated/20 border border-border-subtle/50 text-left",children:[T.jsx("p",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/40 mb-3",children:"What you said"}),T.jsx("p",{className:"font-accent text-sm text-text-secondary/50 leading-relaxed italic",children:r.rawText})]}),T.jsx("div",{className:"mt-6",children:T.jsxs("span",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/30 flex items-center justify-center gap-1.5",children:[T.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-accent-primary/30 rotate-180",children:T.jsx("path",{d:"M6 9l6 6 6-6"})}),"Tap to collapse"]})})]})})]})}function Tw({memories:r,relationshipContext:e,relationshipSummary:i,personalNote:s,setPersonalNote:l}){const c=ol(),[f,d]=X.useState(!1),[m,p]=X.useState(!1),x=X.useRef(null);if(X.useEffect(()=>{const y=setTimeout(()=>d(!0),150),_=setTimeout(()=>p(!0),900);return()=>{clearTimeout(y),clearTimeout(_)}},[]),r.length===0)return T.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center px-6",children:T.jsxs("div",{className:"text-center",children:[T.jsx("p",{className:"font-accent text-xl text-text-secondary mb-6",children:"No memories yet. Start by sharing your story."}),T.jsx(Qv,{onClick:()=>c("/create"),children:"Create Memories"})]})});const g=r.some(y=>y.location?.coordinates),v=e?.name||"them",M=X.useMemo(()=>bw(r,v),[r,v]),E=[...new Set(r.map(y=>y.emotion).filter(Boolean))],A=[...new Set(r.map(y=>y.location?.place_name).filter(Boolean))];return T.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[T.jsx(pl,{ref:x,mode:"heart",intensity:.85,fixed:!0}),T.jsx(ml,{count:16,opacity:.1}),T.jsxs("section",{className:"min-h-screen flex flex-col items-center justify-center relative px-6",children:[T.jsx("div",{className:"sparkle-field absolute inset-0 pointer-events-none"}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(224,176,128,0.14) 0%, rgba(224,176,128,0.04) 40%, transparent 65%)"}}),T.jsxs("button",{onClick:()=>c("/create"),className:"absolute top-8 left-8 font-body text-xs text-text-tertiary/50 hover:text-accent-primary transition-colors flex items-center gap-2 cursor-pointer z-20",children:[T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Edit memories"]}),T.jsxs("div",{className:"text-center max-w-[600px] relative z-10",children:[T.jsx("div",{className:`mb-6 transition-all duration-1000 ${f?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:T.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/70 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),T.jsx("h1",{className:`font-display text-[clamp(36px,6vw,56px)] font-medium text-text-primary leading-[1.1] mb-4 transition-all duration-[1200ms] ease-out ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{filter:f?"blur(0)":"blur(8px)"},children:i?.timeline_title||"Your Memory Map"}),i?.relationship_essence&&T.jsx("p",{className:`font-accent italic text-[clamp(16px,2.5vw,22px)] text-text-secondary/80 leading-[1.6] max-w-[500px] mx-auto transition-all duration-1000 ease-out ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{transitionDelay:"0.4s"},children:i.relationship_essence}),T.jsx("div",{className:`w-16 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent mx-auto mt-8 mb-6 transition-all duration-800 ${f?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.7s",transformOrigin:"center",transform:f?"scaleX(1)":"scaleX(0)"}}),T.jsxs("div",{className:`flex items-center justify-center gap-10 mt-4 transition-all duration-700 ${m?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[T.jsxs("div",{className:"text-center",children:[T.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:r.length}),T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:r.length===1?"Memory":"Memories"})]}),A.length>0&&T.jsxs("div",{className:"text-center",children:[T.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:A.length}),T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:A.length===1?"Place":"Places"})]}),E.length>0&&T.jsxs("div",{className:"text-center",children:[T.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:E.length}),T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:E.length===1?"Emotion":"Emotions"})]})]})]}),T.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${m?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.5s"},children:T.jsxs("div",{className:"flex flex-col items-center gap-2",children:[T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Scroll to explore"}),T.jsx("div",{className:"animate-gentle-bounce",children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:T.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),T.jsxs("section",{className:"relative z-10 pb-12",style:{width:"100%"},children:[T.jsx(ma,{children:T.jsxs("div",{className:"text-center mb-16",children:[T.jsx(lu,{size:12}),T.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/60 mt-2",children:"Your moments together"})]})}),T.jsx("div",{style:{maxWidth:"560px",width:"100%",marginLeft:"auto",marginRight:"auto",paddingLeft:"24px",paddingRight:"24px"},children:r.map((y,_)=>T.jsx(ma,{delay:_*.08,children:T.jsxs("div",{className:"mb-10 relative",children:[_<r.length-1&&T.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-10 bg-gradient-to-b from-accent-primary/15 to-transparent"}),T.jsx(Ew,{memory:y,index:_,recipientName:v,loveLanguage:M[y.id]})]})},y.id))})]}),g&&T.jsxs("section",{className:"relative z-10 py-20",children:[T.jsx(ma,{children:T.jsxs("div",{className:"text-center mb-10",children:[T.jsx(lu,{size:12}),T.jsx("p",{className:"font-body text-xs uppercase tracking-[0.2em] text-text-tertiary/60 mt-2",children:"Where your love has been"})]})}),T.jsx(ma,{delay:.2,children:T.jsx("div",{className:"max-w-[900px] px-6",style:{marginLeft:"auto",marginRight:"auto"},children:T.jsx("div",{className:"map-cinematic h-[450px] border border-border-subtle",children:T.jsx(gw,{memories:r})})})})]}),i?.dominant_themes&&T.jsx(ma,{delay:.1,children:T.jsx("div",{className:"flex items-center justify-center gap-3 py-8 flex-wrap px-6 relative z-10",children:i.dominant_themes.map((y,_)=>T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80 border border-accent-primary/25 rounded-full px-5 py-1.5 animate-stagger-up",style:{animationDelay:`${_*.1}s`,opacity:0},children:y},y))})}),T.jsx(ma,{delay:.1,children:T.jsxs("div",{className:"max-w-[520px] px-6 py-16 relative z-10",style:{marginLeft:"auto",marginRight:"auto"},children:[T.jsxs("label",{className:"font-accent text-base text-text-secondary/60 block mb-4 text-center",children:["Write a note for ",v]}),T.jsx("textarea",{value:s,onChange:y=>l(y.target.value),placeholder:`What would you say to ${v} right now?`,rows:3,className:`w-full bg-transparent text-center font-accent text-lg text-text-primary\r
              placeholder:text-text-tertiary/30 placeholder:italic\r
              resize-none pb-4 transition-colors duration-500`,style:{border:"none",borderBottom:"1px solid rgba(224, 176, 128, 0.18)",outline:"none",boxShadow:"none"},onFocus:y=>{y.target.style.borderBottomColor="rgba(224, 176, 128, 0.45)",y.target.style.outline="none"},onBlur:y=>{y.target.style.borderBottomColor="rgba(224, 176, 128, 0.18)"}})]})}),T.jsxs("section",{className:"relative z-10 pb-24",children:[T.jsx(lu,{size:16,className:"mb-8"}),T.jsx(ma,{children:T.jsxs("div",{className:"text-center mb-6",children:[T.jsxs("p",{className:"font-accent text-[clamp(20px,3vw,28px)] text-text-secondary mb-2 animate-text-glow",children:["Send this to ",v]}),T.jsxs("p",{className:"font-body text-xs text-text-tertiary/60 flex items-center justify-center gap-2",children:["A Valentine made from real moments",T.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50 heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})]})}),T.jsx(yw,{memories:r,summary:i,personalNote:s,relationshipContext:e})]})]})}const wv={joy:{bg:"rgba(224, 176, 128, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(224, 176, 128, 0.14) 0%, rgba(224, 176, 128, 0.03) 40%, transparent 65%)",accent:"#E0B080"},nostalgia:{bg:"rgba(196, 176, 216, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(196, 176, 216, 0.12) 0%, rgba(196, 176, 216, 0.03) 40%, transparent 65%)",accent:"#C4B0D8"},gratitude:{bg:"rgba(176, 216, 186, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(176, 216, 186, 0.12) 0%, rgba(176, 216, 186, 0.03) 40%, transparent 65%)",accent:"#B0D8BA"},love:{bg:"rgba(216, 156, 156, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(216, 156, 156, 0.14) 0%, rgba(216, 156, 156, 0.03) 40%, transparent 65%)",accent:"#D89C9C"},humor:{bg:"rgba(224, 204, 128, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(224, 204, 128, 0.12) 0%, rgba(224, 204, 128, 0.03) 40%, transparent 65%)",accent:"#E0CC80"},bittersweet:{bg:"rgba(187, 171, 206, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(187, 171, 206, 0.12) 0%, rgba(187, 171, 206, 0.03) 40%, transparent 65%)",accent:"#BBABCE"},adventure:{bg:"rgba(132, 191, 228, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(132, 191, 228, 0.12) 0%, rgba(132, 191, 228, 0.03) 40%, transparent 65%)",accent:"#84BFE4"},comfort:{bg:"rgba(224, 200, 156, 0.04)",glow:"radial-gradient(circle at 50% 40%, rgba(224, 200, 156, 0.12) 0%, rgba(224, 200, 156, 0.03) 40%, transparent 65%)",accent:"#E0C89C"}};function Aw({memory:r,index:e,total:i,onVisible:s}){const[l,c]=Mu({threshold:.2}),[f,d]=X.useState(0);X.useEffect(()=>{if(c){s?.(r.emotion);const x=setTimeout(()=>d(1),200),g=setTimeout(()=>d(2),700),v=setTimeout(()=>d(3),1300);return()=>{clearTimeout(x),clearTimeout(g),clearTimeout(v)}}},[c]);const m=wv[r.emotion]||wv.joy,p=e%2===0;return T.jsxs("section",{ref:l,className:"min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",style:{backgroundColor:m.bg},children:[T.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:m.glow,opacity:c?1:0,transition:"opacity 2s ease-out"}}),T.jsx("div",{className:`absolute top-[15%] ${p?"right-[8%]":"left-[8%]"} pointer-events-none hidden md:block transition-all duration-[2s] ${f>=1?"opacity-[0.03]":"opacity-0"}`,children:T.jsx("span",{className:"font-display text-[200px] font-bold text-text-primary leading-none select-none",children:String(e+1).padStart(2,"0")})}),T.jsxs("div",{className:"max-w-[620px] text-center relative z-10",children:[T.jsxs("div",{className:`flex items-center justify-center gap-3 mb-10 transition-all duration-600 ${f>=1?"opacity-100":"opacity-0"}`,children:[T.jsx("div",{className:"w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/30"}),T.jsxs("span",{className:"font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/60",children:["Memory ",e+1," of ",i]}),T.jsx("div",{className:"w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/30"})]}),T.jsx("h2",{className:`font-display text-[clamp(30px,6vw,48px)] font-medium text-text-primary leading-[1.1] transition-all duration-[1200ms] ease-out ${f>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{filter:f>=1?"blur(0)":"blur(6px)"},children:r.title}),T.jsxs("div",{className:`flex items-center justify-center gap-3 mt-7 mb-8 transition-all duration-800 ${f>=2?"opacity-100":"opacity-0"}`,children:[T.jsx("div",{className:`h-px bg-gradient-to-r from-transparent to-accent-primary/30 transition-all duration-800 ${f>=2?"w-8":"w-0"}`}),T.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50 shrink-0 heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),T.jsx("div",{className:`h-px bg-gradient-to-l from-transparent to-accent-primary/30 transition-all duration-800 ${f>=2?"w-8":"w-0"}`})]}),T.jsxs("p",{className:`font-accent text-[clamp(18px,3vw,24px)] text-text-secondary leading-[1.8] transition-all duration-[1000ms] ease-out ${f>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:["“",r.excerpt,"”"]}),T.jsxs("div",{className:`mt-12 transition-all duration-700 ease-out ${f>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[T.jsxs("div",{className:"flex items-center justify-center gap-6 mb-5 flex-wrap",children:[r.date_hint&&T.jsxs("span",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-secondary/70 flex items-center gap-2",children:[T.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/60",children:[T.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),T.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]}),r.date_hint]}),r.location?.place_name&&T.jsxs("span",{className:"font-body text-[11px] text-text-secondary/70 flex items-center gap-2",children:[T.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/60",children:[T.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),T.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]})]}),T.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[r.emotion&&T.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-4 py-1 border",style:{color:`${m.accent}cc`,borderColor:`${m.accent}40`},children:r.emotion}),r.theme_tags?.map(x=>T.jsx("span",{className:"font-body text-[9px] text-text-tertiary/50 bg-bg-elevated/30 rounded-full px-3 py-0.5",children:x},x))]})]})]}),T.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-accent-primary/12 to-transparent transition-all duration-1000 ${f>=3?"h-16 opacity-100":"h-0 opacity-0"}`})]})}function Rw({memories:r}){const[e,i]=Mu({threshold:.2}),s=X.useRef(null),l=X.useRef(null),[c,f]=X.useState(!1),[d,m]=X.useState(!1),p=r.filter(x=>x.location?.coordinates);return X.useEffect(()=>!i||!s.current||l.current?void 0:((async()=>{const g=(await $o(async()=>{const{default:M}=await import("./mapbox-gl-yvUAwFkg.js").then(E=>E.m);return{default:M}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const E=await(await fetch("/api/config")).json();g.accessToken=E.mapboxToken||""}catch{g.accessToken=""}if(!g.accessToken)return;const v=new g.Map({container:s.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,interactive:!0,pitch:0});v.on("load",()=>{if(f(!0),p.length===0)return;const M=new g.LngLatBounds,E=[];if(p.forEach((A,y)=>{const[_,D]=A.location.coordinates,N=[D,_];M.extend(N),E.push(N),setTimeout(()=>{const P=document.createElement("div");P.style.cssText=`
              position: absolute;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 1px solid rgba(212,165,116,0.3);
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse-ring 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
              animation-delay: ${y*.5}s;
            `;const F=document.createElement("div");F.style.cssText=`
              width: 14px;
              height: 14px;
              background: radial-gradient(circle, #E8C9A0 0%, #D4A574 60%, rgba(212,165,116,0.6) 100%);
              border-radius: 50%;
              box-shadow: 0 0 16px rgba(212,165,116,0.6), 0 0 40px rgba(212,165,116,0.2);
              animation: marker-drop 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              position: relative;
            `,F.appendChild(P);const I=document.createElement("div");I.style.cssText=`
              position: absolute;
              top: 22px;
              left: 50%;
              transform: translateX(-50%);
              font-family: Satoshi, sans-serif;
              font-size: 9px;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              color: rgba(232,201,160,0.7);
              white-space: nowrap;
              text-shadow: 0 1px 4px rgba(0,0,0,0.8);
              opacity: 0;
              animation: fade-up 0.5s ease-out forwards;
              animation-delay: 0.3s;
            `,I.textContent=A.location.place_name,F.appendChild(I),new g.Marker({element:F,anchor:"center"}).setLngLat(N).addTo(v),y===p.length-1&&setTimeout(()=>{m(!0),E.length>=2&&ww(v,E)},400)},y*400)}),p.length>1)v.fitBounds(M,{padding:100,maxZoom:11});else{const[A,y]=p[0].location.coordinates;v.flyTo({center:[y,A],zoom:10,duration:2e3})}}),l.current=v})(),()=>{l.current&&(l.current.remove(),l.current=null)}),[i,p]),p.length===0?null:T.jsxs("section",{ref:e,className:"min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden",children:[T.jsxs("div",{className:`text-center mb-10 transition-all duration-800 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[T.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/40 mb-3",children:"Where your love has been"}),T.jsx("div",{className:`w-12 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mx-auto ${i?"animate-line-grow":"opacity-0"}`})]}),T.jsx("div",{className:`w-full max-w-[950px] map-cinematic transition-all duration-[1500ms] ease-out ${i?"opacity-100 scale-100":"opacity-0 scale-[0.97]"}`,style:{transitionDelay:"0.3s"},children:T.jsx("div",{className:"h-[500px] md:h-[550px]",style:{borderRadius:"16px",overflow:"hidden"},children:T.jsx("div",{ref:s,className:"w-full h-full"})})}),d&&p.length>=2&&T.jsxs("p",{className:"mt-6 font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/30 animate-fade-up",style:{animationDelay:"0.2s",opacity:0,animationFillMode:"forwards"},children:[p.length," places that hold your story"]})]})}function ww(r,e){const i="memory-route",s="memory-route-line",l="memory-route-glow";if(r.getSource(i))return;r.addSource(i,{type:"geojson",data:{type:"Feature",geometry:{type:"LineString",coordinates:e}}}),r.addLayer({id:l,type:"line",source:i,layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.12)","line-width":6,"line-blur":4}}),r.addLayer({id:s,type:"line",source:i,layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.35)","line-width":1.5,"line-dasharray":[0,100]}});const c=7,f=60;let d=0;const m=setInterval(()=>{d++;const x=d/f*c,g=Math.max(.1,c-x);try{r.setPaintProperty(s,"line-dasharray",[x,g])}catch{}d>=f&&clearInterval(m)},2e3/f)}function Cw({summary:r,particleRef:e}){const[i,s]=Mu({threshold:.25}),[l,c]=X.useState(0),f=ol();return X.useEffect(()=>{if(s){e?.current?.burst(),e?.current?.setColor(14725248);const d=setTimeout(()=>c(1),300),m=setTimeout(()=>c(2),1200),p=setTimeout(()=>c(3),2e3);return()=>{clearTimeout(d),clearTimeout(m),clearTimeout(p)}}},[s]),T.jsxs("section",{ref:i,className:"min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",children:[T.jsx("div",{className:"sparkle-field absolute inset-0 pointer-events-none"}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(224,176,128,0.16) 0%, rgba(224,176,128,0.04) 40%, transparent 65%)",opacity:l>=1?1:0,transition:"opacity 2.5s ease-out"}}),T.jsxs("div",{className:"text-center max-w-[550px] relative z-10",children:[T.jsx("div",{className:`mx-auto mb-10 transition-all duration-1000 ${l>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:T.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/70 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),r?.relationship_essence&&T.jsxs("p",{className:`font-accent italic text-[clamp(22px,4vw,30px)] text-text-secondary leading-[1.6] transition-all duration-[1500ms] ease-out ${l>=1?"opacity-100 translate-y-0 animate-text-glow":"opacity-0 translate-y-8"}`,style:{filter:l>=1?"blur(0)":"blur(4px)"},children:["“",r.relationship_essence,"”"]}),r?.dominant_themes&&T.jsx("div",{className:`flex items-center justify-center gap-3 mt-10 flex-wrap transition-all duration-800 ${l>=2?"opacity-100":"opacity-0"}`,children:r.dominant_themes.map((d,m)=>T.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/70 border border-accent-primary/25 rounded-full px-4 py-1 animate-stagger-up",style:{animationDelay:`${m*.15}s`,opacity:0,animationFillMode:"forwards"},children:d},d))}),T.jsx("div",{className:`w-20 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mx-auto my-12 transition-all duration-1000 ${l>=2?"opacity-100":"opacity-0"}`,style:{transformOrigin:"center",transform:l>=2?"scaleX(1)":"scaleX(0)"}}),T.jsxs("div",{className:`space-y-6 transition-all duration-800 ease-out ${l>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[T.jsxs("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/50 flex items-center justify-center gap-2",children:["Made with love on",T.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/60 heart-glow",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),"The Memory Map"]}),T.jsxs("button",{onClick:()=>f("/"),className:"group font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/30 rounded-full px-8 py-2.5 hover:border-accent-primary/50 relative overflow-hidden glow-button",children:[T.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{boxShadow:"0 0 30px rgba(224,176,128,0.20), inset 0 0 24px rgba(224,176,128,0.08)"}}),T.jsx("span",{className:"relative z-10",children:"Make One for Your Valentine"})]})]})]})]})}const Dw={joy:15253648,nostalgia:12890328,gratitude:11589818,love:14195868,humor:14732416,bittersweet:12299214,adventure:8699876,comfort:14731420},Nw=14725248;function Lw(){const{data:r}=D1(),[e,i]=X.useState(0),s=X.useRef(null),l=X.useMemo(()=>r?vw(r):null,[r]);X.useEffect(()=>{const g=setTimeout(()=>i(1),300),v=setTimeout(()=>i(2),1600),M=setTimeout(()=>i(3),2600);return()=>{clearTimeout(g),clearTimeout(v),clearTimeout(M)}},[]);const c=X.useCallback(g=>{const v=Dw[g]||Nw;s.current?.setColor(v)},[]);if(!l)return T.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:T.jsx("p",{className:"font-accent text-xl text-text-secondary",children:"This Memory Map couldn't be found."})});const{memories:f,summary:d,personalNote:m,relationshipContext:p}=l,x=p?.name;return T.jsxs("main",{className:"min-h-screen bg-bg-primary relative",children:[T.jsx(pl,{ref:s,mode:"heart",intensity:.95,fixed:!0}),T.jsx(ml,{count:18,opacity:.12}),T.jsxs("section",{className:"min-h-screen flex items-center justify-center relative px-6 overflow-hidden",children:[T.jsx("div",{className:"sparkle-field absolute inset-0 pointer-events-none"}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(224,176,128,0.14) 0%, rgba(224,176,128,0.04) 40%, transparent 65%)"}}),T.jsx("div",{className:`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${e>=1?"h-16 opacity-100":"h-0 opacity-0"}`}),T.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[T.jsx("div",{className:`mb-6 transition-all duration-1000 ${e>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:T.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/70 heart-glow animate-heart-beat",children:T.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),T.jsx("p",{className:`font-accent text-[clamp(26px,5vw,32px)] font-light text-text-primary leading-[1.3] transition-all duration-[1500ms] ease-out ${e>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:x?T.jsxs(T.Fragment,{children:["Someone made this for you, ",T.jsx("span",{className:"text-accent-primary",children:x}),"."]}):"Someone made this for you."}),T.jsx("p",{className:`font-accent text-base text-text-secondary/70 mt-4 transition-all duration-1000 ease-out ${e>=1?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:"Every moment here is real. Remembered, written, and given with love."}),m&&T.jsxs("p",{className:`font-accent italic text-lg text-text-secondary mt-10 leading-relaxed transition-all duration-800 ease-out ${e>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:["“",m,"”"]}),d?.timeline_title&&T.jsx("p",{className:`font-display text-lg text-accent-primary/80 mt-8 tracking-wide animate-text-glow transition-all duration-700 ${e>=2?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:d.timeline_title})]}),T.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${e>=3?"opacity-100":"opacity-0"}`,children:T.jsxs("div",{className:"flex flex-col items-center gap-2",children:[T.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/60",children:"Scroll to begin"}),T.jsx("div",{className:"animate-gentle-bounce",children:T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:T.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),T.jsx(lu,{size:14,className:"mb-4"}),f.map((g,v)=>T.jsx(Aw,{memory:g,index:v,total:f.length,onVisible:c},g.id)),T.jsx(Rw,{memories:f}),T.jsx(Cw,{summary:d,particleRef:s})]})}function Uw(){const[r,e]=X.useState(()=>AM()),[i,s]=X.useState(()=>wM()),[l,c]=X.useState(null),[f,d]=X.useState("");X.useEffect(()=>{const g=r.filter(v=>!v.loading);g.length>0&&TM(g)},[r]),X.useEffect(()=>{i&&RM(i)},[i]);const m=X.useCallback(g=>{e(v=>[...v,{...g,id:g.id||Date.now().toString()}])},[]),p=X.useCallback((g,v)=>{e(M=>M.map(E=>E.id===g?{...E,...v}:E))},[]),x=X.useCallback(g=>{e(v=>v.filter(M=>M.id!==g))},[]);return T.jsx("div",{className:"min-h-screen bg-bg-primary",children:T.jsxs(X1,{children:[T.jsx(Ko,{path:"/",element:T.jsx(aw,{})}),T.jsx(Ko,{path:"/create",element:T.jsx(hw,{memories:r,addMemory:m,updateMemory:p,deleteMemory:x,relationshipContext:i,setRelationshipContext:s,relationshipSummary:l,setRelationshipSummary:c})}),T.jsx(Ko,{path:"/preview",element:T.jsx(Tw,{memories:r,relationshipContext:i,relationshipSummary:l,personalNote:f,setPersonalNote:d})}),T.jsx(Ko,{path:"/shared/:data",element:T.jsx(Lw,{})})]})})}qS.createRoot(document.getElementById("root")).render(T.jsx(X.StrictMode,{children:T.jsx(mM,{children:T.jsx(Uw,{})})}));

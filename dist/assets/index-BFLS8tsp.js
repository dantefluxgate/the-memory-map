const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-V3smlL-h.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},Ho={};var r_;function NS(){if(r_)return Ho;r_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var s_;function US(){return s_||(s_=1,Ed.exports=NS()),Ed.exports}var O=US(),Td={exports:{}},ut={};var o_;function LS(){if(o_)return ut;o_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function x(L,ee,ge){this.props=L,this.context=ee,this.refs=S,this.updater=ge||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=x.prototype;function N(L,ee,ge){this.props=L,this.context=ee,this.refs=S,this.updater=ge||E}var P=N.prototype=new w;P.constructor=N,T(P,x.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(L,ee,ge){var Ce=ge.ref;return{$$typeof:s,type:L,key:ee,ref:Ce!==void 0?Ce:null,props:ge}}function D(L,ee){return C(L.type,ee,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function se(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return ee[ge]})}var oe=/\/+/g;function pe(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?se(""+L.key):ee.toString(36)}function ce(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(z,z):(L.status="pending",L.then(function(ee){L.status==="pending"&&(L.status="fulfilled",L.value=ee)},function(ee){L.status==="pending"&&(L.status="rejected",L.reason=ee)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,ee,ge,Ce,Ve){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(te){case"bigint":case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case s:case e:de=!0;break;case g:return de=L._init,B(de(L._payload),ee,ge,Ce,Ve)}}if(de)return Ve=Ve(L),de=Ce===""?"."+pe(L,0):Ce,I(Ve)?(ge="",de!=null&&(ge=de.replace(oe,"$&/")+"/"),B(Ve,ee,ge,"",function(De){return De})):Ve!=null&&(X(Ve)&&(Ve=D(Ve,ge+(Ve.key==null||L&&L.key===Ve.key?"":(""+Ve.key).replace(oe,"$&/")+"/")+de)),ee.push(Ve)),1;de=0;var ye=Ce===""?".":Ce+":";if(I(L))for(var Ie=0;Ie<L.length;Ie++)Ce=L[Ie],te=ye+pe(Ce,Ie),de+=B(Ce,ee,ge,te,Ve);else if(Ie=M(L),typeof Ie=="function")for(L=Ie.call(L),Ie=0;!(Ce=L.next()).done;)Ce=Ce.value,te=ye+pe(Ce,Ie++),de+=B(Ce,ee,ge,te,Ve);else if(te==="object"){if(typeof L.then=="function")return B(ce(L),ee,ge,Ce,Ve);throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return de}function G(L,ee,ge){if(L==null)return L;var Ce=[],Ve=0;return B(L,Ce,"","",function(te){return ee.call(ge,te,Ve++)}),Ce}function ne(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var Me=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},be={map:G,forEach:function(L,ee,ge){G(L,function(){ee.apply(this,arguments)},ge)},count:function(L){var ee=0;return G(L,function(){ee++}),ee},toArray:function(L){return G(L,function(ee){return ee})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ut.Activity=_,ut.Children=be,ut.Component=x,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=N,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ut.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ut.cache=function(L){return function(){return L.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(L,ee,ge){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ce=T({},L.props),Ve=L.key;if(ee!=null)for(te in ee.key!==void 0&&(Ve=""+ee.key),ee)!K.call(ee,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ee.ref===void 0||(Ce[te]=ee[te]);var te=arguments.length-2;if(te===1)Ce.children=ge;else if(1<te){for(var de=Array(te),ye=0;ye<te;ye++)de[ye]=arguments[ye+2];Ce.children=de}return C(L.type,Ve,Ce)},ut.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ut.createElement=function(L,ee,ge){var Ce,Ve={},te=null;if(ee!=null)for(Ce in ee.key!==void 0&&(te=""+ee.key),ee)K.call(ee,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ve[Ce]=ee[Ce]);var de=arguments.length-2;if(de===1)Ve.children=ge;else if(1<de){for(var ye=Array(de),Ie=0;Ie<de;Ie++)ye[Ie]=arguments[Ie+2];Ve.children=ye}if(L&&L.defaultProps)for(Ce in de=L.defaultProps,de)Ve[Ce]===void 0&&(Ve[Ce]=de[Ce]);return C(L,te,Ve)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(L){return{$$typeof:h,render:L}},ut.isValidElement=X,ut.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:ne}},ut.memo=function(L,ee){return{$$typeof:p,type:L,compare:ee===void 0?null:ee}},ut.startTransition=function(L){var ee=F.T,ge={};F.T=ge;try{var Ce=L(),Ve=F.S;Ve!==null&&Ve(ge,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(z,Me)}catch(te){Me(te)}finally{ee!==null&&ge.types!==null&&(ee.types=ge.types),F.T=ee}},ut.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ut.use=function(L){return F.H.use(L)},ut.useActionState=function(L,ee,ge){return F.H.useActionState(L,ee,ge)},ut.useCallback=function(L,ee){return F.H.useCallback(L,ee)},ut.useContext=function(L){return F.H.useContext(L)},ut.useDebugValue=function(){},ut.useDeferredValue=function(L,ee){return F.H.useDeferredValue(L,ee)},ut.useEffect=function(L,ee){return F.H.useEffect(L,ee)},ut.useEffectEvent=function(L){return F.H.useEffectEvent(L)},ut.useId=function(){return F.H.useId()},ut.useImperativeHandle=function(L,ee,ge){return F.H.useImperativeHandle(L,ee,ge)},ut.useInsertionEffect=function(L,ee){return F.H.useInsertionEffect(L,ee)},ut.useLayoutEffect=function(L,ee){return F.H.useLayoutEffect(L,ee)},ut.useMemo=function(L,ee){return F.H.useMemo(L,ee)},ut.useOptimistic=function(L,ee){return F.H.useOptimistic(L,ee)},ut.useReducer=function(L,ee,ge){return F.H.useReducer(L,ee,ge)},ut.useRef=function(L){return F.H.useRef(L)},ut.useState=function(L){return F.H.useState(L)},ut.useSyncExternalStore=function(L,ee,ge){return F.H.useSyncExternalStore(L,ee,ge)},ut.useTransition=function(){return F.H.useTransition()},ut.version="19.2.4",ut}var l_;function cp(){return l_||(l_=1,Td.exports=LS()),Td.exports}var Q=cp(),Ad={exports:{}},Go={},Rd={exports:{}},Cd={};var c_;function OS(){return c_||(c_=1,(function(s){function e(B,G){var ne=B.length;B.push(G);e:for(;0<ne;){var Me=ne-1>>>1,be=B[Me];if(0<l(be,G))B[Me]=G,B[ne]=be,ne=Me;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],ne=B.pop();if(ne!==G){B[0]=ne;e:for(var Me=0,be=B.length,L=be>>>1;Me<L;){var ee=2*(Me+1)-1,ge=B[ee],Ce=ee+1,Ve=B[Ce];if(0>l(ge,ne))Ce<be&&0>l(Ve,ge)?(B[Me]=Ve,B[Ce]=ne,Me=Ce):(B[Me]=ge,B[ee]=ne,Me=ee);else if(Ce<be&&0>l(Ve,ne))B[Me]=Ve,B[Ce]=ne,Me=Ce;else break e}}return G}function l(B,G){var ne=B.sortIndex-G.sortIndex;return ne!==0?ne:B.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,v=3,M=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=B)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(B){if(T=!1,P(B),!E)if(i(m)!==null)E=!0,z||(z=!0,se());else{var G=i(p);G!==null&&ce(I,G.startTime-B)}}var z=!1,F=-1,K=5,C=-1;function D(){return S?!0:!(s.unstable_now()-C<K)}function X(){if(S=!1,z){var B=s.unstable_now();C=B;var G=!0;try{e:{E=!1,T&&(T=!1,w(F),F=-1),M=!0;var ne=v;try{t:{for(P(B),_=i(m);_!==null&&!(_.expirationTime>B&&D());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,v=_.priorityLevel;var be=Me(_.expirationTime<=B);if(B=s.unstable_now(),typeof be=="function"){_.callback=be,P(B),G=!0;break t}_===i(m)&&r(m),P(B)}else r(m);_=i(m)}if(_!==null)G=!0;else{var L=i(p);L!==null&&ce(I,L.startTime-B),G=!1}}break e}finally{_=null,v=ne,M=!1}G=void 0}}finally{G?se():z=!1}}}var se;if(typeof N=="function")se=function(){N(X)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,pe=oe.port2;oe.port1.onmessage=X,se=function(){pe.postMessage(null)}}else se=function(){x(X,0)};function ce(B,G){F=x(function(){B(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ne=v;v=G;try{return B()}finally{v=ne}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=v;v=B;try{return G()}finally{v=ne}},s.unstable_scheduleCallback=function(B,G,ne){var Me=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Me+ne:Me):ne=Me,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,B={id:g++,callback:G,priorityLevel:B,startTime:ne,expirationTime:be,sortIndex:-1},ne>Me?(B.sortIndex=ne,e(p,B),i(m)===null&&B===i(p)&&(T?(w(F),F=-1):T=!0,ce(I,ne-Me))):(B.sortIndex=be,e(m,B),E||M||(E=!0,z||(z=!0,se()))),B},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(B){var G=v;return function(){var ne=v;v=G;try{return B.apply(this,arguments)}finally{v=ne}}}})(Cd)),Cd}var u_;function PS(){return u_||(u_=1,Rd.exports=OS()),Rd.exports}var wd={exports:{}},Nn={};var f_;function FS(){if(f_)return Nn;f_=1;var s=cp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var d_;function BS(){if(d_)return wd.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wd.exports=FS(),wd.exports}var h_;function IS(){if(h_)return Go;h_=1;var s=PS(),e=cp(),i=BS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=d;break}if(A===o){y=!0,o=u,a=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===a){y=!0,a=d,o=u;break}if(A===o){y=!0,o=d,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ce=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function L(t){return{current:t}}function ee(t){0>be||(t.current=Me[be],Me[be]=null,be--)}function ge(t,n){be++,Me[be]=t.current,t.current=n}var Ce=L(null),Ve=L(null),te=L(null),de=L(null);function ye(t,n){switch(ge(te,n),ge(Ve,t),ge(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ce),ge(Ce,t)}function Ie(){ee(Ce),ee(Ve),ee(te)}function De(t){t.memoizedState!==null&&ge(de,t);var n=Ce.current,a=wg(n,t.type);n!==a&&(ge(Ve,t),ge(Ce,a))}function ft(t){Ve.current===t&&(ee(Ce),ee(Ve)),de.current===t&&(ee(de),Fo._currentValue=ne)}var At,at;function dt(t){if(At===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);At=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+at}var yt=!1;function lt(t,n){if(!t||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var ae=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){ae=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){ae=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&ae&&typeof ue.stack=="string")return[ue.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var H=y.split(`
`),$=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===$.length)for(o=H.length-1,u=$.length-1;1<=o&&0<=u&&H[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==$[u]){var me=`
`+H[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?dt(a):""}function Ft(t,n){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return dt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rt=Object.prototype.hasOwnProperty,we=s.unstable_scheduleCallback,Tt=s.unstable_cancelCallback,Xe=s.unstable_shouldYield,U=s.unstable_requestPaint,b=s.unstable_now,j=s.unstable_getCurrentPriorityLevel,he=s.unstable_ImmediatePriority,ve=s.unstable_UserBlockingPriority,fe=s.unstable_NormalPriority,Ye=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,qe=s.log,tt=s.unstable_setDisableYieldValue,Ee=null,Ae=null;function Ge(t){if(typeof qe=="function"&&tt(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var ze=Math.clz32?Math.clz32:W,Le=Math.log,pt=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Le(t)/pt|0)|0}var Pe=256,Re=262144,He=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Te(o):(y&=A,y!==0?u=Te(y):a||(a=A&~t,a!==0&&(u=Te(a))))):(A=o&~d,A!==0?u=Te(A):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=He;return He<<=1,(He&62914560)===0&&(He=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var me=31-ze(a),xe=1<<me;A[me]=0,H[me]=-1;var ae=$[me];if(ae!==null)for($[me]=null,me=0;me<ae.length;me++){var ue=ae[me];ue!==null&&(ue.lane&=-536870913)}a&=~xe}o!==0&&gl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function gl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function qs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ir(t,n){var a=n&-n;return a=(a&42)!==0?1:Ys(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Ui(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ai=Math.random().toString(36).slice(2),on="__reactFiber$"+ai,xn="__reactProps$"+ai,yi="__reactContainer$"+ai,Hr="__reactEvents$"+ai,Gr="__reactListeners$"+ai,_l="__reactHandles$"+ai,Ks="__reactResources$"+ai,sr="__reactMarker$"+ai;function Qs(t){delete t[on],delete t[xn],delete t[Hr],delete t[Gr],delete t[_l]}function Ta(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Fg(t);t!==null;){if(a=t[on])return a;t=Fg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function or(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[Ks];return n||(n=t[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[sr]=!0}var q=new Set,le={};function ie(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(le[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function We(t){return rt.call(Fe,t)?!0:rt.call(ke,t)?!1:Oe.test(t)?Fe[t]=!0:(ke[t]=!0,!1)}function Ze(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function ct(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,d,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,nt(n)):a!=null?Sn(t,y,nt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+nt(A):t.removeAttribute("name")}function ji(t,n,a,o,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Yt(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Yt(t)}function Sn(t,n,a){n==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Yt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&En(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&En(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return Cx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var yu=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Rp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ct(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(r(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Bt(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var Mu=!1;function Cp(t,n,a){if(Mu)return t(n,a);Mu=!0;try{var o=t(n);return o}finally{if(Mu=!1,(kr!==null||Xr!==null)&&(rc(),kr&&(n=kr,t=Xr,Xr=kr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Yi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){bu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{bu=!1}var Ca=null,Eu=null,xl=null;function wp(){if(xl)return xl;var t,n=Eu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return xl=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Dp(){return!1}function Hn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Hn(lr),eo=_({},lr,{view:0,detail:0}),wx=Hn(eo),Tu,Au,to,bl=_({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Tu=t.screenX-to.screenX,Au=t.screenY-to.screenY):Au=Tu=0,to=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Np=Hn(bl),Dx=_({},bl,{dataTransfer:0}),Nx=Hn(Dx),Ux=_({},eo,{relatedTarget:0}),Ru=Hn(Ux),Lx=_({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=Hn(Lx),Px=_({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fx=Hn(Px),Bx=_({},lr,{data:0}),Up=Hn(Bx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hx[t])?!!n[t]:!1}function Cu(){return Gx}var Vx=_({},eo,{key:function(t){if(t.key){var n=Ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=Hn(Vx),Xx=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Hn(Xx),Wx=_({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),jx=Hn(Wx),qx=_({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=Hn(qx),Zx=_({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=Hn(Zx),Qx=_({},lr,{newState:0,oldState:0}),Jx=Hn(Qx),$x=[9,13,27,32],wu=Yi&&"CompositionEvent"in window,no=null;Yi&&"documentMode"in document&&(no=document.documentMode);var ey=Yi&&"TextEvent"in window&&!no,Op=Yi&&(!wu||no&&8<no&&11>=no),Pp=" ",Fp=!1;function Bp(t,n){switch(t){case"keyup":return $x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function ty(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Fp=!0,Pp);case"textInput":return t=n.data,t===Pp&&Fp?null:t;default:return null}}function ny(t,n){if(Wr)return t==="compositionend"||!wu&&Bp(t,n)?(t=wp(),xl=Eu=Ca=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iy[t.type]:n==="textarea"}function Hp(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=dc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var io=null,ao=null;function ay(t){Mg(t,0)}function El(t){var n=or(t);if(Bt(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(Yi){var Du;if(Yi){var Nu="oninput"in document;if(!Nu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Nu=typeof kp.oninput=="function"}Du=Nu}else Du=!1;Vp=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){io&&(io.detachEvent("onpropertychange",Wp),ao=io=null)}function Wp(t){if(t.propertyName==="value"&&El(ao)){var n=[];Hp(n,ao,t,Su(t)),Cp(ay,n)}}function ry(t,n,a){t==="focusin"?(Xp(),io=n,ao=a,io.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ao)}function oy(t,n){if(t==="click")return El(n)}function ly(t,n){if(t==="input"||t==="change")return El(n)}function cy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:cy;function ro(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Je(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uy=Yi&&"documentMode"in document&&11>=document.documentMode,jr=null,Lu=null,so=null,Ou=!1;function Kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||jr==null||jr!==Je(o)||(o=jr,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=dc(Lu,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=jr)))}function cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Pu={},Qp={};Yi&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function ur(t){if(Pu[t])return Pu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Pu[t]=n[a];return t}var Jp=ur("animationend"),$p=ur("animationiteration"),em=ur("animationstart"),fy=ur("transitionrun"),dy=ur("transitionstart"),hy=ur("transitioncancel"),tm=ur("transitionend"),nm=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Mi(t,n){nm.set(t,n),ie(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Yr=0,Bu=0;function Al(){for(var t=Yr,n=Bu=Yr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&im(a,u,d)}}function Rl(t,n,a,o){si[Yr++]=t,si[Yr++]=n,si[Yr++]=a,si[Yr++]=o,Bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return Rl(t,n,a,o),Cl(t)}function fr(t,n){return Rl(t,null,null,n),Cl(t)}function im(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ze(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Cl(t){if(50<wo)throw wo=0,Yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function py(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new py(t,n,a,o)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function am(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")zu(t)&&(y=1);else if(typeof t=="string")y=xS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,u),t.elementType=C,t.lanes=d,t;case T:return dr(a.children,u,d,n);case S:y=8,u|=24;break;case x:return t=Zn(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case I:return t=Zn(13,a,n,u),t.elementType=I,t.lanes=d,t;case z:return t=Zn(19,a,n,u),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case w:y=9;break e;case P:y=11;break e;case F:y=14;break e;case K:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function dr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Hu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function rm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Gu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},sm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Kr=[],Qr=0,Dl=null,oo=0,li=[],ci=0,wa=null,Li=1,Oi="";function Ki(t,n){Kr[Qr++]=oo,Kr[Qr++]=Dl,Dl=t,oo=n}function om(t,n,a){li[ci++]=Li,li[ci++]=Oi,li[ci++]=wa,wa=t;var o=Li;t=Oi;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var d=32-ze(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Li=1<<32-ze(n)+u|a<<u|o,Oi=d+t}else Li=1<<d|a<<u|o,Oi=t}function Vu(t){t.return!==null&&(Ki(t,1),om(t,1,0))}function ku(t){for(;t===Dl;)Dl=Kr[--Qr],Kr[Qr]=null,oo=Kr[--Qr],Kr[Qr]=null;for(;t===wa;)wa=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null}function lm(t,n){li[ci++]=Li,li[ci++]=Oi,li[ci++]=wa,Li=n.id,Oi=n.overflow,wa=t}var Tn=null,Zt=null,bt=!1,Da=null,ui=!1,Xu=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(oi(n,t)),Xu}function cm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)xt(No[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Na(t,!0)}function um(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!bt)return um(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||cd(t.type,t.memoizedProps)),a=!a),a&&Zt&&Na(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=Pg(t)}else n===27?(n=Zt,Wa(t.type)?(t=pd,pd=null,Zt=t):Zt=n):Zt=Tn?di(t.stateNode.nextSibling):null;return!0}function hr(){Zt=Tn=null,bt=!1}function Wu(){var t=Da;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Da=null),t}function lo(t){Da===null?Da=[t]:Da.push(t)}var ju=L(null),pr=null,Qi=null;function Ua(t,n,a){ge(ju,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=ju.current,ee(ju)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Yu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),qu(d.return,a,t),o||(y=null);break e}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),qu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $r(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===de.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Yu(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return fm(pr,t)}function Ul(t,n){return pr===null&&mr(t),fm(t,n)}function fm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var my=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gy=s.unstable_scheduleCallback,_y=s.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new my,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&gy(_y,function(){t.controller.abort()})}var uo=null,Ku=0,es=0,ts=null;function vy(t,n){if(uo===null){var a=uo=[];Ku=0,es=ed(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(dm,dm),n}function dm(){if(--Ku===0&&uo!==null){ts!==null&&(ts.status="fulfilled");var t=uo;uo=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=B.S;B.S=function(t,n){K0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vy(t,n),hm!==null&&hm(t,n)};var gr=L(null);function Qu(){var t=gr.current;return t!==null?t:qt.pooledCache}function Ll(t,n){n===null?ge(gr,gr.current):ge(gr,n.pool)}function pm(){var t=Qu();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(r(460)),Ju=Error(r(474)),Ol=Error(r(542)),Pl={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t}throw vr=n,ns}}function _r(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,ns):a}}var vr=null;function _m(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function vm(t){if(t===ns||t===Ol)throw Error(r(483))}var is=null,fo=0;function Fl(t){var n=fo;return fo+=1,is===null&&(is=[]),gm(is,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n(Y,k){if(t){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Zi(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,J,_e){return k===null||k.tag!==6?(k=Hu(J,Y.mode,_e),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function H(Y,k,J,_e){var $e=J.type;return $e===T?me(Y,k,J.props.children,_e,J.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&_r($e)===k.type)?(k=u(k,J.props),ho(k,J),k.return=Y,k):(k=wl(J.type,J.key,J.props,null,Y.mode,_e),ho(k,J),k.return=Y,k)}function $(Y,k,J,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Gu(J,Y.mode,_e),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function me(Y,k,J,_e,$e){return k===null||k.tag!==7?(k=dr(J,Y.mode,_e,$e),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function xe(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Hu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=wl(k.type,k.key,k.props,null,Y.mode,J),ho(J,k),J.return=Y,J;case E:return k=Gu(k,Y.mode,J),k.return=Y,k;case K:return k=_r(k),xe(Y,k,J)}if(ce(k)||se(k))return k=dr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return xe(Y,Fl(k),J);if(k.$$typeof===N)return xe(Y,Ul(Y,k),J);Bl(Y,k)}return null}function ae(Y,k,J,_e){var $e=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $e!==null?null:A(Y,k,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===$e?H(Y,k,J,_e):null;case E:return J.key===$e?$(Y,k,J,_e):null;case K:return J=_r(J),ae(Y,k,J,_e)}if(ce(J)||se(J))return $e!==null?null:me(Y,k,J,_e,null);if(typeof J.then=="function")return ae(Y,k,Fl(J),_e);if(J.$$typeof===N)return ae(Y,k,Ul(Y,J),_e);Bl(Y,J)}return null}function ue(Y,k,J,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Y=Y.get(J)||null,A(k,Y,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return Y=Y.get(_e.key===null?J:_e.key)||null,H(k,Y,_e,$e);case E:return Y=Y.get(_e.key===null?J:_e.key)||null,$(k,Y,_e,$e);case K:return _e=_r(_e),ue(Y,k,J,_e,$e)}if(ce(_e)||se(_e))return Y=Y.get(J)||null,me(k,Y,_e,$e,null);if(typeof _e.then=="function")return ue(Y,k,J,Fl(_e),$e);if(_e.$$typeof===N)return ue(Y,k,J,Ul(k,_e),$e);Bl(k,_e)}return null}function je(Y,k,J,_e){for(var $e=null,wt=null,Qe=k,mt=k=0,Mt=null;Qe!==null&&mt<J.length;mt++){Qe.index>mt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Dt=ae(Y,Qe,J[mt],_e);if(Dt===null){Qe===null&&(Qe=Mt);break}t&&Qe&&Dt.alternate===null&&n(Y,Qe),k=d(Dt,k,mt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt,Qe=Mt}if(mt===J.length)return a(Y,Qe),bt&&Ki(Y,mt),$e;if(Qe===null){for(;mt<J.length;mt++)Qe=xe(Y,J[mt],_e),Qe!==null&&(k=d(Qe,k,mt),wt===null?$e=Qe:wt.sibling=Qe,wt=Qe);return bt&&Ki(Y,mt),$e}for(Qe=o(Qe);mt<J.length;mt++)Mt=ue(Qe,Y,mt,J[mt],_e),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?mt:Mt.key),k=d(Mt,k,mt),wt===null?$e=Mt:wt.sibling=Mt,wt=Mt);return t&&Qe.forEach(function(Ka){return n(Y,Ka)}),bt&&Ki(Y,mt),$e}function it(Y,k,J,_e){if(J==null)throw Error(r(151));for(var $e=null,wt=null,Qe=k,mt=k=0,Mt=null,Dt=J.next();Qe!==null&&!Dt.done;mt++,Dt=J.next()){Qe.index>mt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Ka=ae(Y,Qe,Dt.value,_e);if(Ka===null){Qe===null&&(Qe=Mt);break}t&&Qe&&Ka.alternate===null&&n(Y,Qe),k=d(Ka,k,mt),wt===null?$e=Ka:wt.sibling=Ka,wt=Ka,Qe=Mt}if(Dt.done)return a(Y,Qe),bt&&Ki(Y,mt),$e;if(Qe===null){for(;!Dt.done;mt++,Dt=J.next())Dt=xe(Y,Dt.value,_e),Dt!==null&&(k=d(Dt,k,mt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return bt&&Ki(Y,mt),$e}for(Qe=o(Qe);!Dt.done;mt++,Dt=J.next())Dt=ue(Qe,Y,mt,Dt.value,_e),Dt!==null&&(t&&Dt.alternate!==null&&Qe.delete(Dt.key===null?mt:Dt.key),k=d(Dt,k,mt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return t&&Qe.forEach(function(DS){return n(Y,DS)}),bt&&Ki(Y,mt),$e}function Wt(Y,k,J,_e){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var $e=J.key;k!==null;){if(k.key===$e){if($e=J.type,$e===T){if(k.tag===7){a(Y,k.sibling),_e=u(k,J.props.children),_e.return=Y,Y=_e;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&_r($e)===k.type){a(Y,k.sibling),_e=u(k,J.props),ho(_e,J),_e.return=Y,Y=_e;break e}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===T?(_e=dr(J.props.children,Y.mode,_e,J.key),_e.return=Y,Y=_e):(_e=wl(J.type,J.key,J.props,null,Y.mode,_e),ho(_e,J),_e.return=Y,Y=_e)}return y(Y);case E:e:{for($e=J.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),_e=u(k,J.children||[]),_e.return=Y,Y=_e;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}_e=Gu(J,Y.mode,_e),_e.return=Y,Y=_e}return y(Y);case K:return J=_r(J),Wt(Y,k,J,_e)}if(ce(J))return je(Y,k,J,_e);if(se(J)){if($e=se(J),typeof $e!="function")throw Error(r(150));return J=$e.call(J),it(Y,k,J,_e)}if(typeof J.then=="function")return Wt(Y,k,Fl(J),_e);if(J.$$typeof===N)return Wt(Y,k,Ul(Y,J),_e);Bl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),_e=u(k,J),_e.return=Y,Y=_e):(a(Y,k),_e=Hu(J,Y.mode,_e),_e.return=Y,Y=_e),y(Y)):a(Y,k)}return function(Y,k,J,_e){try{fo=0;var $e=Wt(Y,k,J,_e);return is=null,$e}catch(Qe){if(Qe===ns||Qe===Ol)throw Qe;var wt=Zn(29,Qe,null,Y.mode);return wt.lanes=_e,wt.return=Y,wt}}}var xr=xm(!0),ym=xm(!1),La=!1;function $u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),im(t,null,a),n}return Rl(t,o,n,a),Cl(t)}function po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,qs(t,a)}}function tf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var nf=!1;function mo(){if(nf){var t=ts;if(t!==null)throw t}}function go(t,n,a,o){nf=!1;var u=t.updateQueue;La=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,$=H.next;H.next=null,y===null?d=$:y.next=$,y=H;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==y&&(A===null?me.firstBaseUpdate=$:A.next=$,me.lastBaseUpdate=H))}if(d!==null){var xe=u.baseState;y=0,me=$=H=null,A=d;do{var ae=A.lane&-536870913,ue=ae!==A.lane;if(ue?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===es&&(nf=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var je=t,it=A;ae=n;var Wt=a;switch(it.tag){case 1:if(je=it.payload,typeof je=="function"){xe=je.call(Wt,xe,ae);break e}xe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=it.payload,ae=typeof je=="function"?je.call(Wt,xe,ae):je,ae==null)break e;xe=_({},xe,ae);break e;case 2:La=!0}}ae=A.callback,ae!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ae]:ue.push(ae))}else ue={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?($=me=ue,H=xe):me=me.next=ue,y|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=$,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Ha|=y,t.lanes=y,t.memoizedState=xe}}function Sm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sm(a[t],n)}var as=L(null),Il=L(0);function bm(t,n){t=oa,ge(Il,t),ge(as,n),oa=t|n.baseLanes}function af(){ge(Il,oa),ge(as,as.current)}function rf(){oa=Il.current,ee(as),ee(Il)}var Kn=L(null),fi=null;function Fa(t){var n=t.alternate;ge(an,an.current&1),ge(Kn,t),fi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(fi=t)}function sf(t){ge(an,an.current),ge(Kn,t),fi===null&&(fi=t)}function Em(t){t.tag===22?(ge(an,an.current),ge(Kn,t),fi===null&&(fi=t)):Ba()}function Ba(){ge(an,an.current),ge(Kn,Kn.current)}function Qn(t){ee(Kn),fi===t&&(fi=null),ee(an)}var an=L(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dd(a)||hd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ht=null,kt=null,cn=null,Hl=!1,rs=!1,yr=!1,Gl=0,_o=0,ss=null,yy=0;function en(){throw Error(r(321))}function of(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function lf(t,n,a,o,u,d){return $i=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?o0:bf,yr=!1,d=a(o,u),yr=!1,rs&&(d=Am(n,a,o,u)),Tm(t),d}function Tm(t){B.H=yo;var n=kt!==null&&kt.next!==null;if($i=0,cn=kt=ht=null,Hl=!1,_o=0,ss=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Nl(t)&&(un=!0))}function Am(t,n,a,o){ht=t;var u=0;do{if(rs&&(ss=null),_o=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,cn=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=l0,d=n(a,o)}while(rs);return d}function Sy(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ht.flags|=1024),n}function cf(){var t=Gl!==0;return Gl=0,t}function uf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ff(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}$i=0,cn=kt=ht=null,rs=!1,_o=Gl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ht.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=cn===null?ht.memoizedState:cn.next;if(n!==null)cn=n,kt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},cn===null?ht.memoizedState=cn=t:cn=cn.next=t}return cn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,ss===null&&(ss=[]),t=gm(ss,t,n),n=ht,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?o0:bf),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function df(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Xl(t){var n=rn();return hf(n,kt,t)}function hf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=y=null,H=null,$=n,me=!1;do{var xe=$.lane&-536870913;if(xe!==$.lane?(St&xe)===xe:($i&xe)===xe){var ae=$.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xe===es&&(me=!0);else if(($i&ae)===ae){$=$.next,ae===es&&(me=!0);continue}else xe={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=xe,y=d):H=H.next=xe,ht.lanes|=ae,Ha|=ae;xe=$.action,yr&&a(d,xe),d=$.hasEagerState?$.eagerState:a(d,xe)}else ae={lane:xe,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=ae,y=d):H=H.next=ae,ht.lanes|=xe,Ha|=xe;$=$.next}while($!==null&&$!==n);if(H===null?y=d:H.next=A,!Yn(d,t.memoizedState)&&(un=!0,me&&(a=ts,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function pf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(t,n,a){var o=ht,u=rn(),d=bt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Yn((kt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,_f(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));d||($i&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Vl(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wm(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Um(t)}function Dm(t,n,a){return a(function(){Nm(n)&&Um(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Um(t){var n=fr(t,2);n!==null&&Wn(n,t,2)}function mf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),yr){Ge(!0);try{a()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Lm(t,n,a,o){return t.baseState=a,hf(t,kt,typeof o=="function"?o:ea)}function My(t,n,a,o,u){if(ql(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var A=a(u,o),H=B.S;H!==null&&H(y,A),Pm(t,n,A)}catch($){gf(t,n,$)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=a(u,o),Pm(t,n,d)}catch($){gf(t,n,$)}}function Pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return gf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function gf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function zm(t,n){if(bt){var a=qt.formState;if(a!==null){e:{var o=ht;if(bt){if(Zt){t:{for(var u=Zt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=a0.bind(null,ht,o),o.dispatch=a,o=mf(!1),d=Mf.bind(null,ht,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=My.bind(null,ht,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hm(t){var n=rn();return Gm(n,kt,t)}function Gm(t,n,a){if(n=hf(t,n,Im)[0],t=Xl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(y){throw y===ns?Ol:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,os(9,{destroy:void 0},by.bind(null,u,a),null)),[o,d,t]}function by(t,n){t.action=n}function Vm(t){var n=rn(),a=kt;if(a!==null)return Gm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Vl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function km(){return rn().memoizedState}function Wl(t,n,a,o){var u=Pn();ht.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;kt!==null&&o!==null&&of(o,kt.memoizedState.deps)?u.memoizedState=os(n,d,a,o):(ht.flags|=t,u.memoizedState=os(1|n,d,a,o))}function Xm(t,n){Wl(8390656,8,t,n)}function _f(t,n){jl(2048,8,t,n)}function Ey(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Vl(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wm(t){var n=rn().memoizedState;return Ey({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return jl(4,2,t,n)}function qm(t,n){return jl(4,4,t,n)}function Ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zm(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,Ym.bind(null,n,t),a)}function vf(){}function Km(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Qm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=t(),yr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o}function xf(t,n,a){return a===void 0||($i&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=J0(),ht.lanes|=t,Ha|=t,a)}function Jm(t,n,a,o){return Yn(a,n)?a:as.current!==null?(t=xf(t,a,o),Yn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=J0(),ht.lanes|=t,Ha|=t,n)}function $m(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=B.T,A={};B.T=A,Mf(t,!1,n,a);try{var H=u(),$=B.S;if($!==null&&$(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=xy(H,o);xo(t,n,me,ei(t))}else xo(t,n,o,ei(t))}catch(xe){xo(t,n,{then:function(){},status:"rejected",reason:xe},ei())}finally{G.p=d,y!==null&&A.types!==null&&(y.types=A.types),B.T=y}}function Ty(){}function yf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=e0(t).queue;$m(t,u,n,ne,a===null?Ty:function(){return t0(t),a(o)})}function e0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=e0(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},ei())}function Sf(){return An(Fo)}function n0(){return rn().memoizedState}function i0(){return rn().memoizedState}function Ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Wn(o,n,a),po(o,n,a)),n={cache:Zu()},t.payload=n;return}n=n.return}}function Ry(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?r0(n,a):(a=Iu(t,n,a,o),a!==null&&(Wn(a,t,o),s0(a,n,o)))}function a0(t,n,a){var o=ei();xo(t,n,a,o)}function xo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))r0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,A=d(y,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,y))return Rl(t,n,u,0),qt===null&&Al(),!1}catch{}if(a=Iu(t,n,u,o),a!==null)return Wn(a,t,o),s0(a,n,o),!0}return!1}function Mf(t,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(r(479))}else n=Iu(t,a,o,2),n!==null&&Wn(n,t,2)}function ql(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function r0(t,n){rs=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function s0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,qs(t,a)}}var yo={readContext:An,use:kl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};yo.useEffectEvent=en;var o0={readContext:An,use:kl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,Ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(yr){Ge(!0);try{t()}finally{Ge(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(yr){Ge(!0);try{a(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ry.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=mf(t);var n=t.queue,a=a0.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(t,n){var a=Pn();return xf(a,t,n)},useTransition:function(){var t=mf(!1);return t=$m.bind(null,ht,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Pn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(St&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,t),[t]),o.flags|=2048,os(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=qt.identifierPrefix;if(bt){var a=Oi,o=Li;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Sf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:df,useCacheRefresh:function(){return Pn().memoizedState=Ay.bind(null,ht)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},bf={readContext:An,use:kl,useCallback:Km,useContext:An,useEffect:_f,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:qm,useMemo:Qm,useReducer:Xl,useRef:km,useState:function(){return Xl(ea)},useDebugValue:vf,useDeferredValue:function(t,n){var a=rn();return Jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Xl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:Sf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=rn();return Lm(a,kt,t,n)},useMemoCache:df,useCacheRefresh:i0};bf.useEffectEvent=Wm;var l0={readContext:An,use:kl,useCallback:Km,useContext:An,useEffect:_f,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:qm,useMemo:Qm,useReducer:pf,useRef:km,useState:function(){return pf(ea)},useDebugValue:vf,useDeferredValue:function(t,n){var a=rn();return kt===null?xf(a,t,n):Jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=pf(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:Sf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=rn();return kt!==null?Lm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:df,useCacheRefresh:i0};l0.useEffectEvent=Wm;function Ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Wn(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Wn(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Wn(n,t,a),po(n,t,a))}};function c0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,d):!0}function u0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Tf.enqueueReplaceState(n,n.state,null)}function Sr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function f0(t){Tl(t)}function d0(t){console.error(t)}function h0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function m0(t){return t=Oa(t),t.tag=3,t}function g0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){p0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){p0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Cy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?sc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(t,o,u)),!1}throw Error(r(435,a.tag))}return Qf(t,o,u),sc(),!1}if(bt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(t=Error(r(422),{cause:o}),lo(oi(t,a)))):(o!==Xu&&(n=Error(r(423),{cause:o}),lo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Af(t.stateNode,o,u),tf(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),Co===null?Co=[d]:Co.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Af(a.stateNode,o,t),tf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,t,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Rf=Error(r(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?ym(n,null,a,o):xr(n,t.child,a,o)}function _0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return mr(n),o=lf(t,n,a,y,d,u),A=cf(),t!==null&&!un?(uf(t,n,u),ta(t,n,u)):(bt&&A&&Vu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function v0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,x0(t,n,d,o,u)):(t=wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Pf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(y,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,Pf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return Cf(t,n,a,o,u)}function y0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return S0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,d!==null?d.cachePool:null),d!==null?bm(n,d):af(),Em(n);else return o=n.lanes=536870912,S0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ll(n,d.cachePool),bm(n,d),Ba(),n.memoizedState=null):(t!==null&&Ll(n,null),af(),Ba());return Rn(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(t,n,a,o,u){var d=Qu();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ll(n,null),af(),Em(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function M0(t,n,a){return xr(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function wy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,So(null,t);if(sf(n),(t=Zt)?(t=Og(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Zl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=M0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||$r(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=qt,o!==null&&(y=Ir(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,fr(t,y),Wn(o,t,y),Rf;sc(),n=M0(t,n,a)}else t=d.treeContext,Zt=di(y.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&lm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cf(t,n,a,o,u){return mr(n),a=lf(t,n,a,o,void 0,u),o=cf(),t!==null&&!un?(uf(t,n,u),ta(t,n,u)):(bt&&o&&Vu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function b0(t,n,a,o,u,d){return mr(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(t),o=cf(),t!==null&&!un?(uf(t,n,d),ta(t,n,d)):(bt&&o&&Vu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function E0(t,n,a,o,u){if(mr(n),n.stateNode===null){var d=Zr,y=a.contextType;typeof y=="object"&&y!==null&&(d=An(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Tf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},$u(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?An(y):Zr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ef(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Tf.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,H=Sr(a,A);d.props=H;var $=d.context,me=a.contextType;y=Zr,typeof me=="object"&&me!==null&&(y=An(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==y)&&u0(n,d,o,y),La=!1;var ae=n.memoizedState;d.state=ae,go(n,o,d,u),mo(),$=n.memoizedState,A||ae!==$||La?(typeof xe=="function"&&(Ef(n,a,xe,o),$=n.memoizedState),(H=La||c0(n,a,H,o,ae,$,y))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=y,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ef(t,n),y=n.memoizedProps,me=Sr(a,y),d.props=me,xe=n.pendingProps,ae=d.context,$=a.contextType,H=Zr,typeof $=="object"&&$!==null&&(H=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==xe||ae!==H)&&u0(n,d,o,H),La=!1,ae=n.memoizedState,d.state=ae,go(n,o,d,u),mo();var ue=n.memoizedState;y!==xe||ae!==ue||La||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),ue=n.memoizedState),(me=La||c0(n,a,me,o,ae,ue,H)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=H,o=me):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,u),n.child=xr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ta(t,n,u),t}function T0(t,n,a,o){return hr(),n.flags|=256,Rn(t,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(t){return{baseLanes:t,cachePool:pm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function A0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Fa(n):Ba(),(t=Zt)?(t=Og(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=rm(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Na(n);return hd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=Ql({mode:"hidden",children:A},u),o=dr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Df(a),o.childLanes=Nf(t,y,a),n.memoizedState=wf,So(null,o)):(Fa(n),Uf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Lf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),A=dr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Nf(t,y,a),n.memoizedState=wf,n=So(null,o));else if(Fa(n),hd(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,lo({value:o,source:null,stack:null}),n=Lf(t,n,a)}else if(un||$r(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=qt,y!==null&&(o=Ir(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,fr(t,o),Wn(y,t,o),Rf;dd(A)||sc(),n=Lf(t,n,a)}else dd(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Zt=di(A.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&lm(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,H=t.child,$=H.sibling,o=Zi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,$!==null?A=Zi($,A):(A=dr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,So(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Df(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=pm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Nf(t,y,a),n.memoizedState=wf,So(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Lf(t,n,a){return xr(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function R0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Of(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function C0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,ge(an,y),Rn(t,n,o,a),o=bt?oo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,a,n);else if(t.tag===19)R0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Of(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Of(n,!0,a,null,d,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function Dy(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ua(n,ln,t.memoizedState.cache),hr();break;case 27:case 5:De(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(t,n,a):(Fa(n),t=ta(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(an,an.current),o)break;return null;case 22:return n.lanes=0,y0(t,n,a,n.pendingProps);case 24:Ua(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function w0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Pf(t,a)&&(n.flags&128)===0)return un=!1,Dy(t,n,a);un=(t.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&om(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")zu(t)?(o=Sr(t,o),n.tag=1,n=E0(null,n,t,o,a)):(n.tag=0,n=Cf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=_0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=v0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Cf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),E0(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ef(t,n),go(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ua(n,ln,o),o!==d.cache&&Yu(n,[ln],a,!0),mo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),lo(u),n=T0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=di(t.firstChild),Tn=n,bt=!0,Da=null,ui=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hr(),o===u){n=ta(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=hc(te.current).createElement(a),o[on]=n,o[xn]=t,Cn(o,a,t),R(o),n.stateNode=o):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return De(n),t===null&&bt&&(o=n.stateNode=Bg(n.type,n.pendingProps,te.current),Tn=n,ui=!0,u=Zt,Wa(n.type)?(pd=u,Zt=di(o.firstChild)):Zt=u),Rn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Zt)&&(o=sS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Zt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Na(n)),De(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,cd(u,d)?o=null:y!==null&&cd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(t,n,Sy,null,null,a),Fo._currentValue=u),Kl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Zt)&&(a=oS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Zt=null,t=!0):t=!1),t||Na(n)),null;case 13:return A0(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return _0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return v0(t,n,n.type,n.pendingProps,a);case 15:return x0(t,n,n.type,n.pendingProps,a);case 19:return C0(t,n,a);case 31:return wy(t,n,a);case 22:return y0(t,n,a,n.pendingProps);case 24:return mr(n),o=An(ln),t===null?(u=Qu(),u===null&&(u=qt,d=Zu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},$u(n),Ua(n,ln,u)):((t.lanes&a)!==0&&(ef(t,n),go(n,null,null,a),mo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,ln,o)):(o=d.cache,Ua(n,ln,o),o!==u.cache&&Yu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw vr=Pl,Ju}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw vr=Pl,Ju}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,fs|=n)}function Mo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ny(t,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Kt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(na(n),d!==null?(Kt(n),D0(n,d)):(Kt(n),Ff(n,u,null,o,a))):d?d!==t.memoizedState?(na(n),Kt(n),D0(n,d)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Kt(n),Ff(n,u,t,o,a)),null;case 27:if(ft(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}t=Ce.current,Jr(n)?cm(n):(t=Bg(u,o,a),n.stateNode=t,na(n))}return Kt(n),null;case 5:if(ft(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(d=Ce.current,Jr(n))cm(n);else{var y=hc(te.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[on]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Kt(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||Na(n,!0)}else t=hc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Kt(n),null);case 4:return Ie(),t===null&&ad(n.stateNode.containerInfo),Kt(n),null;case 10:return Ji(n.type),Kt(n),null;case 19:if(ee(an),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)am(a,t),a=a.sibling;return ge(an,an.current&1|2),bt&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ic&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!bt)return Kt(n),null}else 2*b()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,ge(an,u?a&1|2:a&1),bt&&Ki(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return Qn(n),rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ee(gr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Uy(t,n){switch(ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ee(an),null;case 4:return Ie(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),rf(),t!==null&&ee(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function N0(t,n){switch(ku(n),n.tag){case 3:Ji(ln),Ie();break;case 26:case 27:case 5:ft(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ee(an);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),rf(),t!==null&&ee(gr);break;case 24:Ji(ln)}}function bo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Gt(n,n.return,A)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var H=a,$=A;try{$()}catch(me){Gt(u,H,me)}}}o=o.next}while(o!==d)}}catch(me){Gt(n,n.return,me)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){Gt(t,t.return,o)}}}function L0(t,n,a){a.props=Sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function O0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Bf(t,n,a){try{var o=t.stateNode;eS(o,t.type,a,n),o[xn]=n}catch(u){Gt(t,t.return,u)}}function P0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zf(t,n,a),t=t.sibling;t!==null;)zf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function F0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[on]=t,n[xn]=a}catch(d){Gt(t,t.return,d)}}var ia=!1,fn=!1,Hf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Ly(t,n){if(t=t.containerInfo,od=yc,t=Zp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,A=-1,H=-1,$=0,me=0,xe=t,ae=null;t:for(;;){for(var ue;xe!==a||u!==0&&xe.nodeType!==3||(A=y+u),xe!==d||o!==0&&xe.nodeType!==3||(H=y+o),xe.nodeType===3&&(y+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)ae=xe,xe=ue;for(;;){if(xe===t)break t;if(ae===a&&++$===u&&(A=y),ae===d&&++me===o&&(H=y),(ue=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=ue}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:t,selectionRange:a},yc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=Sr(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Gt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)fd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function I0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),o&4&&bo(5,a);break;case 1:if(ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Gt(a,a.return,y)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Gt(a,a.return,y)}}o&64&&U0(a),o&512&&Eo(a,a.return);break;case 3:if(ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(y){Gt(a,a.return,y)}}break;case 27:n===null&&o&4&&F0(a);case 26:case 5:ra(t,a),n===null&&o&4&&O0(a),o&512&&Eo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),o&4&&G0(t,a);break;case 13:ra(t,a),o&4&&V0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vy.bind(null,a),lS(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var d=fn;ia=o,(fn=n)&&!d?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=d}break;case 30:break;default:ra(t,a)}}function z0(t){var n=t.alternate;n!==null&&(t.alternate=null,z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)H0(t,n,a),a=a.sibling}function H0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Jt,u=Gn;Wa(a.type)&&(Jt=a.stateNode,Gn=!1),aa(t,n,a),Lo(a.stateNode),Jt=o,Gn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Jt,u=Gn,Jt=null,aa(t,n,a),Jt=o,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(d){Gt(a,n,d)}else try{Jt.removeChild(a.stateNode)}catch(d){Gt(a,n,d)}break;case 18:Jt!==null&&(Gn?(t=Jt,Ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):Ug(Jt,a.stateNode));break;case 4:o=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),Jt=o,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),aa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Gt(n,n.return,a)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Gt(n,n.return,a)}}function Oy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(r(435,t.tag))}}function ec(t,n){var a=Oy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ky.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Jt=A.stateNode,Gn=!1;break e}break;case 5:Jt=A.stateNode,Gn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Jt===null)throw Error(r(160));H0(d,y,u),Jt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t),n=n.sibling}var bi=null;function k0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ia(3,t,t.return),bo(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[sr]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[on]=t,R(d),o=d;break e;case"link":var y=kg("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=kg("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=t,R(d),o=d}t.stateNode=o}else Xg(u,t.type,t.stateNode);else t.stateNode=Vg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,t.type,t.stateNode):Vg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&Bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(je){Gt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){Gt(t,t.return,je)}}break;case 3:if(gc=null,u=bi,bi=pc(n.containerInfo),Vn(n,t),bi=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(je){Gt(t,t.return,je)}Hf&&(Hf=!1,X0(t));break;case 4:o=bi,bi=pc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,$=ia,me=fn;if(ia=$||u,fn=me||H,Vn(n,t),fn=me,ia=$,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||fn||Mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=H.stateNode;var xe=H.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(je){Gt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Gt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?Lg(ue,!0):Lg(H.stateNode,!1)}catch(je){Gt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=If(t);$l(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var A=If(t);$l(t,A,y);break;case 3:case 4:var H=a.stateNode.containerInfo,$=If(t);zf(t,$,H);break;default:throw Error(r(161))}}catch(me){Gt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Mr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Mr(n);break;case 27:Lo(n.stateNode);case 26:case 5:Pi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:sa(u,d,a),bo(4,d);break;case 1:if(sa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Gt(o,o.return,$)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Sm(H[u],A)}catch($){Gt(o,o.return,$)}}a&&y&64&&U0(d),Eo(d,d.return);break;case 27:F0(d);case 26:case 5:sa(u,d,a),a&&o===null&&y&4&&O0(d),Eo(d,d.return);break;case 12:sa(u,d,a);break;case 31:sa(u,d,a),a&&y&4&&G0(u,d);break;case 13:sa(u,d,a),a&&y&4&&V0(u,d);break;case 22:d.memoizedState===null&&sa(u,d,a),Eo(d,d.return);break;case 30:break;default:sa(u,d,a)}n=n.sibling}}function Gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&co(a))}function Vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,a,o),n=n.sibling}function W0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&bo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):To(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(y,n);break;case 24:Ei(t,n,a,o),u&2048&&Vf(n.alternate,n);break;default:Ei(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,A=a,H=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:ls(d,y,A,H,u),bo(8,y);break;case 23:break;case 22:var me=y.stateNode;y.memoizedState!==null?me._visibility&2?ls(d,y,A,H,u):To(d,y):(me._visibility|=2,ls(d,y,A,H,u)),u&&$&2048&&Gf(y.alternate,y);break;case 24:ls(d,y,A,H,u),u&&$&2048&&Vf(y.alternate,y);break;default:ls(d,y,A,H,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Gf(o.alternate,o);break;case 24:To(a,o),u&2048&&Vf(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function cs(t,n,a){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)j0(t,n,a),t=t.sibling}function j0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&Ao&&t.memoizedState!==null&&yS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=bi;bi=pc(t.stateNode.containerInfo),cs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,cs(t,n,a),Ao=o):cs(t,n,a));break;default:cs(t,n,a)}}function q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Z0(o,t)}q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y0(t),t=t.sibling}function Y0(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Ro(t);break;default:Ro(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Z0(o,t)}q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function Z0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(z0(o),o===a){_n=null;break e}if(u!==null){u.return=d,_n=u;break e}_n=d}}}var Py={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},Fy=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,vt=null,St=0,Ht=0,Jn=null,za=!1,us=!1,kf=!1,oa=0,tn=0,Ha=0,br=0,Xf=0,$n=0,fs=0,Co=null,Xn=null,Wf=!1,nc=0,K0=0,ic=1/0,ac=null,Ga=null,pn=0,Va=null,ds=null,la=0,jf=0,qf=null,Q0=null,wo=0,Yf=null;function ei(){return(Ot&2)!==0&&St!==0?St&-St:B.T!==null?ed():Zs()}function J0(){if($n===0)if((St&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ka(t,St,$n,!1)),Dn(t,a),((Ot&2)===0||t!==qt)&&(t===qt&&((Ot&2)===0&&(br|=a),tn===4&&ka(t,St,$n,!1)),Fi(t))}function $0(t,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?zy(t,n):Kf(t,n,!0),d=o;do{if(u===0){us&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!By(a)){u=Kf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=Co;var H=A.current.memoizedState.isDehydrated;if(H&&(hs(A,y).flags|=256),y=Kf(A,y,!1),y!==2){if(kf&&!H){A.errorRecoveryDisabledLanes|=d,br|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,$n,!za);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=nc+300-b(),10<u)){if(ka(o,n,$n,!za),Se(o,0,!0)!==0)break e;la=n,o.timeoutHandle=Dg(eg.bind(null,o,a,Xn,ac,Wf,n,$n,br,fs,za,d,"Throttled",-0,0),u);break e}eg(o,a,Xn,ac,Wf,n,$n,br,fs,za,d,null,-0,0)}}break}while(!0);Fi(t)}function eg(t,n,a,o,u,d,y,A,H,$,me,xe,ae,ue){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},j0(n,d,xe);var je=(d&62914560)===d?nc-b():(d&4194048)===d?K0-b():0;if(je=SS(xe,je),je!==null){la=d,t.cancelPendingCommit=je(lg.bind(null,t,n,d,a,o,u,y,A,H,me,xe,null,ae,ue)),ka(t,d,y,!$);return}}lg(t,n,d,a,o,u,y,A,H)}function By(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Xf,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ze(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&gl(t,a,n)}function rc(){return(Ot&6)===0?(Do(0),!1):!0}function Zf(){if(vt!==null){if(Ht===0)var t=vt.return;else t=vt,Qi=pr=null,ff(t),is=null,fo=0,t=vt;for(;t!==null;)N0(t.alternate,t),t=t.return;vt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Zf(),qt=t,vt=a=Zi(t.current,null),St=n,Ht=0,Jn=null,za=!1,us=Ne(t,n),kf=!1,fs=$n=Xf=br=Ha=tn=0,Xn=Co=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),d=1<<u;n|=t[u],o&=~d}return oa=n,Al(),a}function tg(t,n){ht=null,B.H=yo,n===ns||n===Ol?(n=_m(),Ht=3):n===Ju?(n=_m(),Ht=4):Ht=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,vt===null&&(tn=1,Yl(t,oi(n,t.current)))}function ng(){var t=Kn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function ig(){var t=B.H;return B.H=yo,t===null?yo:t}function ag(){var t=B.A;return B.A=Py,t}function sc(){tn=4,za||(St&4194048)!==St&&Kn.current!==null||(us=!0),(Ha&134217727)===0&&(br&134217727)===0||qt===null||ka(qt,St,$n,!1)}function Kf(t,n,a){var o=Ot;Ot|=2;var u=ig(),d=ag();(qt!==t||St!==n)&&(ac=null,hs(t,n)),n=!1;var y=tn;e:do try{if(Ht!==0&&vt!==null){var A=vt,H=Jn;switch(Ht){case 8:Zf(),y=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var $=Ht;if(Ht=0,Jn=null,ps(t,A,H,$),a&&us){y=0;break e}break;default:$=Ht,Ht=0,Jn=null,ps(t,A,H,$)}}Iy(),y=tn;break}catch(me){tg(t,me)}while(!0);return n&&t.shellSuspendCounter++,Qi=pr=null,Ot=o,B.H=u,B.A=d,vt===null&&(qt=null,St=0,Al()),y}function Iy(){for(;vt!==null;)rg(vt)}function zy(t,n){var a=Ot;Ot|=2;var o=ig(),u=ag();qt!==t||St!==n?(ac=null,ic=b()+500,hs(t,n)):us=Ne(t,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var d=Jn;t:switch(Ht){case 1:Ht=0,Jn=null,ps(t,n,d,1);break;case 2:case 9:if(mm(d)){Ht=0,Jn=null,sg(n);break}n=function(){Ht!==2&&Ht!==9||qt!==t||(Ht=7),Fi(t)},d.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:mm(d)?(Ht=0,Jn=null,sg(n)):(Ht=0,Jn=null,ps(t,n,d,7));break;case 5:var y=null;switch(vt.tag){case 26:y=vt.memoizedState;case 5:case 27:var A=vt;if(y?Wg(y):A.stateNode.complete){Ht=0,Jn=null;var H=A.sibling;if(H!==null)vt=H;else{var $=A.return;$!==null?(vt=$,oc($)):vt=null}break t}}Ht=0,Jn=null,ps(t,n,d,5);break;case 6:Ht=0,Jn=null,ps(t,n,d,6);break;case 8:Zf(),tn=6;break e;default:throw Error(r(462))}}Hy();break}catch(me){tg(t,me)}while(!0);return Qi=pr=null,B.H=o,B.A=u,Ot=a,vt!==null?0:(qt=null,St=0,Al(),tn)}function Hy(){for(;vt!==null&&!Xe();)rg(vt)}function rg(t){var n=w0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?oc(t):vt=n}function sg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=b0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=b0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:ff(n);default:N0(a,n),n=vt=am(n,oa),n=w0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?oc(t):vt=n}function ps(t,n,a,o){Qi=pr=null,ff(n),is=null,fo=0;var u=n.return;try{if(Cy(t,u,n,a,St)){tn=1,Yl(t,oi(a,t.current)),vt=null;return}}catch(d){if(u!==null)throw vt=u,d;tn=1,Yl(t,oi(a,t.current)),vt=null;return}n.flags&32768?(bt||o===1?t=!0:us||(St&536870912)!==0?t=!1:(za=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){og(n,za);return}t=n.return;var a=Ny(n.alternate,n,oa);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);tn===0&&(tn=5)}function og(t,n){do{var a=Uy(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);tn=6,vt=null}function lg(t,n,a,o,u,d,y,A,H){t.cancelPendingCommit=null;do lc();while(pn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Bu,xi(t,a,d,y,A,H),t===qt&&(vt=qt=null,St=0),ds=n,Va=t,la=a,jf=d,qf=u,Q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xy(fe,function(){return hg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,y=Ot,Ot|=4;try{Ly(t,n,a)}finally{Ot=y,G.p=u,B.T=o}}pn=1,cg(),ug(),fg()}}function cg(){if(pn===1){pn=0;var t=Va,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{k0(n,t);var d=ld,y=Zp(t.containerInfo),A=d.focusedElem,H=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(H!==null&&Uu(A)){var $=H.start,me=H.end;if(me===void 0&&(me=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var ue=ae.getSelection(),je=A.textContent.length,it=Math.min(H.start,je),Wt=H.end===void 0?it:Math.min(H.end,je);!ue.extend&&it>Wt&&(y=Wt,Wt=it,it=y);var Y=qp(A,it),k=qp(A,Wt);if(Y&&k&&(ue.rangeCount!==1||ue.anchorNode!==Y.node||ue.anchorOffset!==Y.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var J=xe.createRange();J.setStart(Y.node,Y.offset),ue.removeAllRanges(),it>Wt?(ue.addRange(J),ue.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ue.addRange(J))}}}}for(xe=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var _e=xe[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}yc=!!od,ld=od=null}finally{Ot=u,G.p=o,B.T=a}}t.current=n,pn=2}}function ug(){if(pn===2){pn=0;var t=Va,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{I0(t,n.alternate,n)}finally{Ot=u,G.p=o,B.T=a}}pn=3}}function fg(){if(pn===4||pn===3){pn=0,U();var t=Va,n=ds,a=la,o=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ds=Va=null,dg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),zr(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];d(A.value,{componentStack:A.stack})}}finally{B.T=n,G.p=u}}(la&3)!==0&&lc(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Yf?wo++:(wo=0,Yf=t):wo=0,Do(0)}}function dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function lc(){return cg(),ug(),fg(),hg()}function hg(){if(pn!==5)return!1;var t=Va,n=jf;jf=0;var a=zr(la),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=qf,qf=null;var d=Va,y=la;if(pn=0,ds=Va=null,la=0,(Ot&6)!==0)throw Error(r(331));var A=Ot;if(Ot|=4,Y0(d.current),W0(d,d.current,y,a),Ot=A,Do(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{G.p=u,B.T=o,dg(t,n)}}function pg(t,n,a){n=oi(a,n),n=Af(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function Gt(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=oi(a,t),a=m0(2),o=Pa(n,a,2),o!==null&&(g0(a,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function Qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Fy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),t=Gy.bind(null,t,n,a),n.then(t,t))}function Gy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>b()-nc?(Ot&2)===0&&hs(t,0):Xf|=a,fs===St&&(fs=0)),Fi(t)}function mg(t,n){n===0&&(n=It()),t=fr(t,n),t!==null&&(Dn(t,n),Fi(t))}function Vy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function ky(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),mg(t,a)}function Xy(t,n){return we(t,n)}var cc=null,ms=null,Jf=!1,uc=!1,$f=!1,Xa=0;function Fi(t){t!==ms&&t.next===null&&(ms===null?cc=ms=t:ms=ms.next=t),uc=!0,Jf||(Jf=!0,jy())}function Do(t,n){if(!$f&&uc){$f=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-ze(42|t)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=St,d=Se(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(a=!0,xg(o,d));o=o.next}while(a);$f=!1}}function Wy(){gg()}function gg(){uc=Jf=!1;var t=0;Xa!==0&&nS()&&(t=Xa);for(var n=b(),a=null,o=cc;o!==null;){var u=o.next,d=_g(o,n);d===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(d&3)!==0)&&(uc=!0)),o=u}pn!==0&&pn!==5||Do(t),Xa!==0&&(Xa=0)}function _g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-ze(d),A=1<<y,H=u[y];H===-1?((A&a)===0||(A&o)!==0)&&(u[y]=st(A,n)):H<=n&&(t.expiredLanes|=A),d&=~A}if(n=qt,a=St,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Tt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Tt(o),zr(a)){case 2:case 8:a=ve;break;case 32:a=fe;break;case 268435456:a=Ue;break;default:a=fe}return o=vg.bind(null,t),a=we(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Tt(o),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=St;return o=Se(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:($0(t,o,n),_g(t,b()),t.callbackNode!=null&&t.callbackNode===a?vg.bind(null,t):null)}function xg(t,n){if(lc())return null;$0(t,n,!0)}function jy(){aS(function(){(Ot&6)!==0?we(he,Wy):gg()})}function ed(){if(Xa===0){var t=es;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Xa=t}return Xa}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function Sg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=yg((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?yg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var A=new Ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var H=y?Sg(u,y):new FormData(u);yf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=y?Sg(u,y):new FormData(u),yf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var td=0;td<Fu.length;td++){var nd=Fu[td],Yy=nd.toLowerCase(),Zy=nd[0].toUpperCase()+nd.slice(1);Mi(Yy,"on"+Zy)}Mi(Jp,"onAnimationEnd"),Mi($p,"onAnimationIteration"),Mi(em,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(fy,"onTransitionRun"),Mi(dy,"onTransitionStart"),Mi(hy,"onTransitionCancel"),Mi(tm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],H=A.instance,$=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=$;try{d(u)}catch(me){Tl(me)}u.currentTarget=null,d=H}else for(y=0;y<o.length;y++){if(A=o[y],H=A.instance,$=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=$;try{d(u)}catch(me){Tl(me)}u.currentTarget=null,d=H}}}}function xt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(bg(n,t,2,!1),a.add(o))}function id(t,n,a){var o=0;n&&(o|=4),bg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function ad(t){if(!t[fc]){t[fc]=!0,q.forEach(function(a){a!=="selectionchange"&&(Ky.has(a)||id(a,!1,t),id(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,id("selectionchange",!1,n))}}function bg(t,n,a,o){switch(Jg(n)){case 2:var u=ES;break;case 8:u=TS;break;default:u=xd}a=u.bind(null,n,a,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Ta(A),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=d=y;continue e}A=A.parentNode}}o=o.return}Cp(function(){var $=d,me=Su(a),xe=[];e:{var ae=nm.get(t);if(ae!==void 0){var ue=Ml,je=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":ue=kx;break;case"focusin":je="focus",ue=Ru;break;case"focusout":je="blur",ue=Ru;break;case"beforeblur":case"afterblur":ue=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=jx;break;case Jp:case $p:case em:ue=Ox;break;case tm:ue=Yx;break;case"scroll":case"scrollend":ue=wx;break;case"wheel":ue=Kx;break;case"copy":case"cut":case"paste":ue=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Lp;break;case"toggle":case"beforetoggle":ue=Jx}var it=(n&4)!==0,Wt=!it&&(t==="scroll"||t==="scrollend"),Y=it?ae!==null?ae+"Capture":null:ae;it=[];for(var k=$,J;k!==null;){var _e=k;if(J=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||J===null||Y===null||(_e=Js(k,Y),_e!=null&&it.push(Uo(k,_e,J))),Wt)break;k=k.return}0<it.length&&(ae=new ue(ae,je,null,a,me),xe.push({event:ae,listeners:it}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ae&&a!==yu&&(je=a.relatedTarget||a.fromElement)&&(Ta(je)||je[yi]))break e;if((ue||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,ue?(je=a.relatedTarget||a.toElement,ue=$,je=je?Ta(je):null,je!==null&&(Wt=c(je),it=je.tag,je!==Wt||it!==5&&it!==27&&it!==6)&&(je=null)):(ue=null,je=$),ue!==je)){if(it=Np,_e="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=Lp,_e="onPointerLeave",Y="onPointerEnter",k="pointer"),Wt=ue==null?ae:or(ue),J=je==null?ae:or(je),ae=new it(_e,k+"leave",ue,a,me),ae.target=Wt,ae.relatedTarget=J,_e=null,Ta(me)===$&&(it=new it(Y,k+"enter",je,a,me),it.target=J,it.relatedTarget=Wt,_e=it),Wt=_e,ue&&je)t:{for(it=Qy,Y=ue,k=je,J=0,_e=Y;_e;_e=it(_e))J++;_e=0;for(var $e=k;$e;$e=it($e))_e++;for(;0<J-_e;)Y=it(Y),J--;for(;0<_e-J;)k=it(k),_e--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){it=Y;break t}Y=it(Y),k=it(k)}it=null}else it=null;ue!==null&&Eg(xe,ae,ue,it,!1),je!==null&&Wt!==null&&Eg(xe,Wt,je,it,!0)}}e:{if(ae=$?or($):window,ue=ae.nodeName&&ae.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ae.type==="file")var wt=Gp;else if(zp(ae))if(Vp)wt=ly;else{wt=sy;var Qe=ry}else ue=ae.nodeName,!ue||ue.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?$&&Si($.elementType)&&(wt=Gp):wt=oy;if(wt&&(wt=wt(t,$))){Hp(xe,wt,a,me);break e}Qe&&Qe(t,ae,$),t==="focusout"&&$&&ae.type==="number"&&$.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch(Qe=$?or($):window,t){case"focusin":(zp(Qe)||Qe.contentEditable==="true")&&(jr=Qe,Lu=$,so=null);break;case"focusout":so=Lu=jr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Kp(xe,a,me);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Kp(xe,a,me)}var mt;if(wu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Wr?Bp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Op&&a.locale!=="ko"&&(Wr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Wr&&(mt=wp()):(Ca=me,Eu="value"in Ca?Ca.value:Ca.textContent,Wr=!0)),Qe=dc($,Mt),0<Qe.length&&(Mt=new Up(Mt,t,null,a,me),xe.push({event:Mt,listeners:Qe}),mt?Mt.data=mt:(mt=Ip(a),mt!==null&&(Mt.data=mt)))),(mt=ey?ty(t,a):ny(t,a))&&(Mt=dc($,"onBeforeInput"),0<Mt.length&&(Qe=new Up("onBeforeInput","beforeinput",null,a,me),xe.push({event:Qe,listeners:Mt}),Qe.data=mt)),qy(xe,t,$,a,me)}Mg(xe,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function dc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Js(t,a),u!=null&&o.unshift(Uo(t,u,d)),u=Js(t,n),u!=null&&o.push(Uo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Eg(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var A=a,H=A.alternate,$=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||$===null||(H=$,u?($=Js(a,d),$!=null&&y.unshift(Uo(a,$,H))):u||($=Js(a,d),$!=null&&y.push(Uo(a,$,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Jy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(Jy,`
`).replace($y,"")}function Ag(t,n){return n=Tg(n),Tg(t)===n}function Xt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":et(t,"class",o);break;case"tabIndex":et(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,o);break;case"style":Vr(t,o,d);break;case"data":if(n!=="object"){et(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qi);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ze(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rx.get(a)||a,Ze(t,a,o))}}function sd(t,n,a,o,u,d){switch(a){case"style":Vr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ze(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,d,y,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var A=d=y=u=null,H=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":y=me;break;case"checked":H=me;break;case"defaultChecked":$=me;break;case"value":d=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Xt(t,n,o,me,a,null)}}ji(t,d,A,H,$,y,u,!1);return;case"select":xt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Xt(t,n,u,A,a,null)}n=d,a=y,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":xt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Xt(t,n,y,A,a,null)}Mn(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(t,n,H,o,a,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)xt(No[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,$,o,a,null)}return;default:if(Si(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&sd(t,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xt(t,n,A,o,a,null))}function eS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,H=null,$=null,me=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(ue)||Xt(t,n,ue,null,o,xe)}}for(var ae in o){var ue=o[ae];if(xe=a[ae],o.hasOwnProperty(ae)&&(ue!=null||xe!=null))switch(ae){case"type":d=ue;break;case"name":u=ue;break;case"checked":$=ue;break;case"defaultChecked":me=ue;break;case"value":y=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==xe&&Xt(t,n,ae,ue,o,xe)}}yn(t,y,A,H,$,me,d,u);return;case"select":ue=y=A=ae=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(d)||Xt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ae=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==H&&Xt(t,n,u,d,o,H)}n=A,a=y,o=ue,ae!=null?ri(t,!!a,ae,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":ue=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,n,A,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ae=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Xt(t,n,y,u,o,d)}zt(t,ae,ue);return;case"option":for(var je in a)ae=a[je],a.hasOwnProperty(je)&&ae!=null&&!o.hasOwnProperty(je)&&(je==="selected"?t.selected=!1:Xt(t,n,je,null,o,ae));for(H in o)ae=o[H],ue=a[H],o.hasOwnProperty(H)&&ae!==ue&&(ae!=null||ue!=null)&&(H==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Xt(t,n,H,ae,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)ae=a[it],a.hasOwnProperty(it)&&ae!=null&&!o.hasOwnProperty(it)&&Xt(t,n,it,null,o,ae);for($ in o)if(ae=o[$],ue=a[$],o.hasOwnProperty($)&&ae!==ue&&(ae!=null||ue!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Xt(t,n,$,ae,o,ue)}return;default:if(Si(n)){for(var Wt in a)ae=a[Wt],a.hasOwnProperty(Wt)&&ae!==void 0&&!o.hasOwnProperty(Wt)&&sd(t,n,Wt,void 0,o,ae);for(me in o)ae=o[me],ue=a[me],!o.hasOwnProperty(me)||ae===ue||ae===void 0&&ue===void 0||sd(t,n,me,ae,o,ue);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!o.hasOwnProperty(Y)&&Xt(t,n,Y,null,o,ae);for(xe in o)ae=o[xe],ue=a[xe],!o.hasOwnProperty(xe)||ae===ue||ae==null&&ue==null||Xt(t,n,xe,ae,o,ue)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&Rg(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],$=H.startTime;if($>A)break;var me=H.transferSize,xe=H.initiatorType;me&&Rg(xe)&&(H=H.responseEnd,y+=me*(H<A?1:(A-$)/(H-$)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var od=null,ld=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function cd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=null;function nS(){var t=window.event;return t&&t.type==="popstate"?t===ud?!1:(ud=t,!0):(ud=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(rS)}:Dg;function rS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Ug(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Lo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[sr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Lo(t.ownerDocument.body);a=u}while(a);xs(n)}function Lg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function fd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function oS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function dd(t){return t.data==="$?"||t.data==="$~"}function hd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var pd=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,a){switch(n=hc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qs(t)}var hi=new Map,Ig=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=G.d;G.d={f:cS,r:uS,D:fS,C:dS,L:hS,m:pS,X:gS,S:mS,M:_S};function cS(){var t=ca.f(),n=rc();return t||n}function uS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):ca.r(t)}var gs=typeof document>"u"?null:document;function zg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=ct(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function fS(t){ca.D(t),zg("dns-prefetch",t,null)}function dS(t,n){ca.C(t,n),zg("preconnect",t,n)}function hS(t,n,a){ca.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+ct(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ct(a.imageSizes)+'"]')):u+='[href="'+ct(t)+'"]';var d=u;switch(n){case"style":d=_s(t);break;case"script":d=vs(t)}hi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Po(d))||(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function pS(t,n){ca.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ct(o)+'"][href="'+ct(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vs(t)}if(!hi.has(d)&&(t=_({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(d)))return}o=a.createElement("link"),Cn(o,"link",t),R(o),a.head.appendChild(o)}}}function mS(t,n,a){ca.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,d=_s(t);n=n||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Oo(d)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&md(t,a);var H=y=o.createElement("link");R(H),Cn(H,"link",t),H._p=new Promise(function($,me){H.onload=$,H.onerror=me}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function gS(t,n){ca.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Po(u)),d||(t=_({src:t,async:!0},n),(n=hi.get(u))&&gd(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function _S(t,n){ca.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Po(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&gd(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(t,n,a,o){var u=(u=te.current)?pc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var d=Ra(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Oo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||vS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+ct(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),R(n),t.head.appendChild(n))}function vs(t){return'[src="'+ct(t)+'"]'}function Po(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ct(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Cn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var d=t.querySelector(Oo(u));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=Gg(a),(u=hi.get(u))&&md(o,u),d=(t.ownerDocument||t).createElement("link"),R(d);var y=d;return y._p=new Promise(function(A,H){y.onload=A,y.onerror=H}),Cn(d,"link",o),n.state.loading|=4,mc(d,a.precedence,t),n.instance=d;case"script":return d=vs(a.src),(u=t.querySelector(Po(d)))?(n.instance=u,R(u),u):(o=a,(u=hi.get(d))&&(o=_({},a),gd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function kg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[sr]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(d):o.set(y,[d])}}return o}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),d=n.querySelector(Oo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=Gg(o),(u=hi.get(u))&&md(o,u),d=d.createElement("link"),R(d);var y=d;y._p=new Promise(function(A,H){y.onload=A,y.onerror=H}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_c.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var _d=0;function SS(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&_d===0&&(_d=62500*tS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>_d?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(MS,t),vc=null,_c.call(t))}function MS(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function bS(t,n,a,o,u,d,y,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function jg(t,n,a,o,u,d,y,A,H,$,me,xe){return t=new bS(t,n,a,y,H,$,me,xe,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},$u(d),t}function qg(t){return t?(t=Zr,t):Zr}function Yg(t,n,a,o,u,d){u=qg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Pa(t,o,n),a!==null&&(Wn(a,t,n),po(a,t,n))}function Zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vd(t,n){Zg(t,n),(t=t.alternate)&&Zg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&Wn(n,t,67108864),vd(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=ei();n=Ys(n);var a=fr(t,n);a!==null&&Wn(a,t,n),vd(t,n)}}var yc=!0;function ES(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=2,xd(t,n,a,o)}finally{G.p=d,B.T=u}}function TS(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=8,xd(t,n,a,o)}finally{G.p=d,B.T=u}}function xd(t,n,a,o){if(yc){var u=yd(o);if(u===null)rd(t,n,o,Sc,a),$g(t,o);else if(RS(u,t,n,a,o))o.stopPropagation();else if($g(t,o),n&4&&-1<AS.indexOf(t)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var H=1<<31-ze(y);A.entanglements[1]|=H,y&=~H}Fi(d),(Ot&6)===0&&(ic=b()+500,Do(0))}}break;case 31:case 13:A=fr(d,2),A!==null&&Wn(A,d,2),rc(),vd(d,2)}if(d=yd(o),d===null&&rd(t,n,o,Sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else rd(t,n,o,null,a)}}function yd(t){return t=Su(t),Sd(t)}var Sc=null;function Sd(t){if(Sc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case he:return 2;case ve:return 8;case fe:case Ye:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Md=!1,ja=null,qa=null,Ya=null,Bo=new Map,Io=new Map,Za=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function RS(t,n,a,o,u){switch(n){case"focusin":return ja=zo(ja,t,n,a,o,u),!0;case"dragenter":return qa=zo(qa,t,n,a,o,u),!0;case"mouseover":return Ya=zo(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,zo(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,zo(Io.get(d)||null,t,n,a,o,u)),!0}return!1}function e_(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Aa(a),n!==null&&Kg(n),t.blockedOn=a,!1;n.shift()}return!0}function t_(t,n,a){Mc(t)&&a.delete(n)}function CS(){Md=!1,ja!==null&&Mc(ja)&&(ja=null),qa!==null&&Mc(qa)&&(qa=null),Ya!==null&&Mc(Ya)&&(Ya=null),Bo.forEach(t_),Io.forEach(t_)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Md||(Md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,CS)))}var Ec=null;function n_(t){Ec!==t&&(Ec=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var d=Aa(a);d!==null&&(t.splice(n,3),n-=3,yf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(H){return bc(H,t)}ja!==null&&bc(ja,t),qa!==null&&bc(qa,t),Ya!==null&&bc(Ya,t),Bo.forEach(n),Io.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[xn]||null;if(typeof d=="function")y||n_(a);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)A=y.formAction;else if(Sd(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(t){this._internalRoot=t}Tc.prototype.render=bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();Yg(a,o,t,n,null,null)},Tc.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yg(t.current,2,null,t,null,null),rc(),n[yi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&e_(t)}};var a_=e.version;if(a_!=="19.2.4")throw Error(r(527,a_,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ee=Ac.inject(wS),Ae=Ac}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=f0,d=d0,y=h0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=jg(t,1,!1,null,null,a,o,null,u,d,y,i_),t[yi]=n.current,ad(t),new bd(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=f0,y=d0,A=h0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=jg(t,1,!0,n,a??null,o,u,H,d,y,A,i_),n.context=qg(null),a=n.current,o=ei(),o=Ys(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Fi(n),t[yi]=n.current,ad(t),new Tc(n)},Go.version="19.2.4",Go}var p_;function zS(){if(p_)return Ad.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=IS(),Ad.exports}var HS=zS();var m_="popstate";function GS(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return fh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:tl(l)}return kS(e,i,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ki(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VS(){return Math.random().toString(36).substring(2,10)}function g_(s,e){return{usr:s.state,key:s.key,idx:e}}function fh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Vs(e):e,state:i,key:e&&e.key||r||VS()}}function tl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Vs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function kS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let S=g(),x=S==null?null:S-p;p=S,m&&m({action:h,location:T.location,delta:x})}function v(S,x){h="PUSH";let w=fh(T.location,S,x);p=g()+1;let N=g_(w,p),P=T.createHref(w);try{f.pushState(N,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(P)}c&&m&&m({action:h,location:T.location,delta:1})}function M(S,x){h="REPLACE";let w=fh(T.location,S,x);p=g();let N=g_(w,p),P=T.createHref(w);f.replaceState(N,"",P),c&&m&&m({action:h,location:T.location,delta:0})}function E(S){return XS(S)}let T={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(m_,_),m=S,()=>{l.removeEventListener(m_,_),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(S){return f.go(S)}};return T}function XS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:tl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function bv(s,e,i="/"){return WS(s,e,i,!1)}function WS(s,e,i,r){let l=typeof e=="string"?Vs(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let f=Ev(s);jS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=iM(c);h=tM(f[m],p,r)}return h}function Ev(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;$t(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=_a([r,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Ev(f.children,e,v,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:$S(_,f.index),routesMeta:v})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Tv(f.path))c(f,h,!0,m)}),e}function Tv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Tv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function jS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:eM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var qS=/^:[\w-]+$/,YS=3,ZS=2,KS=1,QS=10,JS=-2,__=s=>s==="*";function $S(s,e){let i=s.split("/"),r=i.length;return i.some(__)&&(r+=JS),e&&(r+=ZS),i.filter(l=>!__(l)).reduce((l,c)=>l+(qS.test(c)?YS:c===""?KS:QS),r)}function eM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function tM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=ou({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=ou({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:_a([c,_.pathname]),pathnameBase:oM(_a([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=_a([c,_.pathnameBase]))}return f}function ou(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=nM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=h[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[v];return _&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function nM(s,e=!1,i=!0){ki(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function iM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ya(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var aM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function rM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Vs(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=v_(i.substring(1),"/"):c=v_(i,e)):c=e,{pathname:c,search:lM(r),hash:cM(l)}}function v_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Dd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Av(s){let e=sM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Rv(s,e,i,r=!1){let l;typeof s=="string"?l=Vs(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),Dd("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Dd("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Dd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}h=_>=0?e[_]:"/"}let m=rM(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),oM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),lM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,cM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,uM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function fM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function dM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wv(s,e){let i=s;if(typeof i!="string"||!aM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Cv)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=ya(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var hM=["GET",...Dv];new Set(hM);var ks=Q.createContext(null);ks.displayName="DataRouter";var hu=Q.createContext(null);hu.displayName="DataRouterState";var pM=Q.createContext(!1),Nv=Q.createContext({isTransitioning:!1});Nv.displayName="ViewTransition";var mM=Q.createContext(new Map);mM.displayName="Fetchers";var gM=Q.createContext(null);gM.displayName="Await";var vi=Q.createContext(null);vi.displayName="Navigation";var sl=Q.createContext(null);sl.displayName="Location";var Wi=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Wi.displayName="Route";var up=Q.createContext(null);up.displayName="RouteError";var Uv="REACT_ROUTER_ERROR",_M="REDIRECT",vM="ROUTE_ERROR_RESPONSE";function xM(s){if(s.startsWith(`${Uv}:${_M}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function yM(s){if(s.startsWith(`${Uv}:${vM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new uM(e.status,e.statusText,e.data)}catch{}}function SM(s,{relative:e}={}){$t(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Q.useContext(vi),{hash:l,pathname:c,search:f}=cl(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:_a([i,c])),r.createHref({pathname:h,search:f,hash:l})}function ol(){return Q.useContext(sl)!=null}function Br(){return $t(ol(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(sl).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ov(s){Q.useContext(vi).static||Q.useLayoutEffect(s)}function ll(){let{isDataRoute:s}=Q.useContext(Wi);return s?PM():MM()}function MM(){$t(ol(),"useNavigate() may be used only in the context of a <Router> component.");let s=Q.useContext(ks),{basename:e,navigator:i}=Q.useContext(vi),{matches:r}=Q.useContext(Wi),{pathname:l}=Br(),c=JSON.stringify(Av(r)),f=Q.useRef(!1);return Ov(()=>{f.current=!0}),Q.useCallback((m,p={})=>{if(ki(f.current,Lv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Rv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:_a([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}Q.createContext(null);function bM(){let{matches:s}=Q.useContext(Wi),e=s[s.length-1];return e?e.params:{}}function cl(s,{relative:e}={}){let{matches:i}=Q.useContext(Wi),{pathname:r}=Br(),l=JSON.stringify(Av(i));return Q.useMemo(()=>Rv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function EM(s,e){return Pv(s,e)}function Pv(s,e,i,r,l){$t(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Q.useContext(vi),{matches:f}=Q.useContext(Wi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let w=_&&_.path||"";Bv(p,!_||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let v=Br(),M;if(e){let w=typeof e=="string"?Vs(e):e;$t(g==="/"||w.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=v;let E=M.pathname||"/",T=E;if(g!=="/"){let w=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=bv(s,{pathname:T});ki(_||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ki(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=wM(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:_a([g,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:_a([g,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&x?Q.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function TM(){let s=OM(),e=fM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),i?Q.createElement("pre",{style:l},i):null,f)}var AM=Q.createElement(TM,null),Fv=class extends Q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=yM(s.digest);i&&(s=i)}let e=s!==void 0?Q.createElement(Wi.Provider,{value:this.props.routeContext},Q.createElement(up.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?Q.createElement(RM,{error:s},e):e}};Fv.contextType=pM;var Nd=new WeakMap;function RM({children:s,error:e}){let{basename:i}=Q.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=xM(e.digest);if(r){let l=Nd.get(e);if(l)throw l;let c=wv(r.location,i);if(Cv&&!Nd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Nd.set(e,f),f}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function CM({routeContext:s,match:e,children:i}){let r=Q.useContext(ks);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Wi.Provider,{value:s},i)}function wM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);$t(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:M}=i,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(g,_)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:dM(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,v)=>{let M,E=!1,T=null,S=null;i&&(M=f&&_.route.id?f[_.route.id]:void 0,T=_.route.errorElement||AM,h&&(m<0&&v===0?(Bv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===v&&(E=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,v+1)),w=()=>{let N;return M?N=T:E?N=S:_.route.Component?N=Q.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=g,Q.createElement(CM,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:i!=null},children:N})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?Q.createElement(Fv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):w()},null)}function fp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DM(s){let e=Q.useContext(ks);return $t(e,fp(s)),e}function NM(s){let e=Q.useContext(hu);return $t(e,fp(s)),e}function UM(s){let e=Q.useContext(Wi);return $t(e,fp(s)),e}function dp(s){let e=UM(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function LM(){return dp("useRouteId")}function OM(){let s=Q.useContext(up),e=NM("useRouteError"),i=dp("useRouteError");return s!==void 0?s:e.errors?.[i]}function PM(){let{router:s}=DM("useNavigate"),e=dp("useNavigate"),i=Q.useRef(!1);return Ov(()=>{i.current=!0}),Q.useCallback(async(l,c={})=>{ki(i.current,Lv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var x_={};function Bv(s,e,i){!e&&!x_[s]&&(x_[s]=!0,ki(!1,i))}Q.memo(FM);function FM({routes:s,future:e,state:i,onError:r}){return Pv(s,void 0,i,r,e)}function Qo(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Vs(i));let{pathname:p="/",search:g="",hash:_="",state:v=null,key:M="default"}=i,E=Q.useMemo(()=>{let T=ya(p,h);return T==null?null:{location:{pathname:T,search:g,hash:_,state:v,key:M},navigationType:r}},[h,p,g,_,v,M,r]);return ki(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:Q.createElement(vi.Provider,{value:m},Q.createElement(sl.Provider,{children:e,value:E}))}function IM({children:s,location:e}){return EM(dh(s),e)}function dh(s,e=[]){let i=[];return Q.Children.forEach(s,(r,l)=>{if(!Q.isValidElement(r))return;let c=[...e,l];if(r.type===Q.Fragment){i.push.apply(i,dh(r.props.children,c));return}$t(r.type===Qo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=dh(r.props.children,c)),i.push(f)}),i}var $c="get",eu="application/x-www-form-urlencoded";function pu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function zM(s){return pu(s)&&s.tagName.toLowerCase()==="button"}function HM(s){return pu(s)&&s.tagName.toLowerCase()==="form"}function GM(s){return pu(s)&&s.tagName.toLowerCase()==="input"}function VM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function kM(s,e){return s.button===0&&(!e||e==="_self")&&!VM(s)}var Rc=null;function XM(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var WM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ud(s){return s!=null&&!WM.has(s)?(ki(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):s}function jM(s,e){let i,r,l,c,f;if(HM(s)){let h=s.getAttribute("action");r=h?ya(h,e):null,i=s.getAttribute("method")||$c,l=Ud(s.getAttribute("enctype"))||eu,c=new FormData(s)}else if(zM(s)||GM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ya(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||$c,l=Ud(s.getAttribute("formenctype"))||Ud(h.getAttribute("enctype"))||eu,c=new FormData(h,s),!XM()){let{name:p,type:g,value:_}=s;if(g==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,_)}}else{if(pu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=$c,r=null,l=eu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function qM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&ya(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function YM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function KM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await YM(c,i);return f.links?f.links():[]}return[]}));return eb(r.flat(1).filter(ZM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function y_(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function QM(s,e,{includeHydrateFallback:i}={}){return JM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function JM(s){return[...new Set(s)]}function $M(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function eb(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify($M(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Iv(){let s=Q.useContext(ks);return hp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function tb(){let s=Q.useContext(hu);return hp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var pp=Q.createContext(void 0);pp.displayName="FrameworkContext";function zv(){let s=Q.useContext(pp);return hp(s,"You must render this element inside a <HydratedRouter> element"),s}function nb(s,e){let i=Q.useContext(pp),[r,l]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,v=Q.useRef(null);Q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=x=>{x.forEach(w=>{f(w.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),Q.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Vo(h,M),onBlur:Vo(m,E),onMouseEnter:Vo(p,M),onMouseLeave:Vo(g,E),onTouchStart:Vo(_,M)}]:[!1,v,{}]}function Vo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function ib({page:s,...e}){let{router:i}=Iv(),r=Q.useMemo(()=>bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Q.createElement(rb,{page:s,matches:r,...e}):null}function ab(s){let{manifest:e,routeModules:i}=zv(),[r,l]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return KM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function rb({page:s,matches:e,...i}){let r=Br(),{future:l,manifest:c,routeModules:f}=zv(),{basename:h}=Iv(),{loaderData:m,matches:p}=tb(),g=Q.useMemo(()=>y_(s,e,p,c,r,"data"),[s,e,p,c,r]),_=Q.useMemo(()=>y_(s,e,p,c,r,"assets"),[s,e,p,c,r]),v=Q.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,S=!1;if(e.forEach(w=>{let N=c.routes[w.route.id];!N||!N.hasLoader||(!g.some(P=>P.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||N.hasClientLoader?S=!0:T.add(w.route.id))}),T.size===0)return[];let x=qM(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&x.searchParams.set("_routes",e.filter(w=>T.has(w.route.id)).map(w=>w.route.id).join(",")),[x.pathname+x.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,r,c,g,e,s,f]),M=Q.useMemo(()=>QM(_,c),[_,c]),E=ab(_);return Q.createElement(Q.Fragment,null,v.map(T=>Q.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>Q.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:S})=>Q.createElement("link",{key:T,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function sb(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ob&&(window.__reactRouterVersion="7.13.0")}catch{}function lb({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=Q.useRef();l.current==null&&(l.current=GS({window:r,v5Compat:!0}));let c=l.current,[f,h]=Q.useState({action:c.action,location:c.location}),m=Q.useCallback(p=>{i===!1?h(p):Q.startTransition(()=>h(p))},[i]);return Q.useLayoutEffect(()=>c.listen(m),[c,m]),Q.createElement(BM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gv=Q.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E){let{basename:T,unstable_useTransitions:S}=Q.useContext(vi),x=typeof p=="string"&&Hv.test(p),w=wv(p,T);p=w.to;let N=SM(p,{relative:l}),[P,I,z]=nb(r,M),F=db(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function K(D){e&&e(D),D.defaultPrevented||F(D)}let C=Q.createElement("a",{...M,...z,href:w.absoluteURL||N,onClick:w.isExternal||c?e:K,ref:sb(E,I),target:m,"data-discover":!x&&i==="render"?"true":void 0});return P&&!x?Q.createElement(Q.Fragment,null,C,Q.createElement(ib,{page:N})):C});Gv.displayName="Link";var cb=Q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let _=cl(f,{relative:p.relative}),v=Br(),M=Q.useContext(hu),{navigator:E,basename:T}=Q.useContext(vi),S=M!=null&&_b(_)&&h===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,w=v.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),N=N?N.toLowerCase():null,x=x.toLowerCase()),N&&T&&(N=ya(N,T)||N);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=w===x||!l&&w.startsWith(x)&&w.charAt(P)==="/",z=N!=null&&(N===x||!l&&N.startsWith(x)&&N.charAt(x.length)==="/"),F={isActive:I,isPending:z,isTransitioning:S},K=I?e:void 0,C;typeof r=="function"?C=r(F):C=[r,I?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(F):c;return Q.createElement(Gv,{...p,"aria-current":K,className:C,ref:g,style:D,to:f,viewTransition:h},typeof m=="function"?m(F):m)});cb.displayName="NavLink";var ub=Q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=$c,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:T}=Q.useContext(vi),S=mb(),x=gb(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&Hv.test(h),P=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let z=I.nativeEvent.submitter,F=z?.getAttribute("formmethod")||f,K=()=>S(z||I.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});T&&i!==!1?Q.startTransition(()=>K()):K()};return Q.createElement("form",{ref:E,method:w,action:x,onSubmit:r?m:P,...M,"data-discover":!N&&s==="render"?"true":void 0})});ub.displayName="Form";function fb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vv(s){let e=Q.useContext(ks);return $t(e,fb(s)),e}function db(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=ll(),g=Br(),_=cl(s,{relative:c});return Q.useCallback(v=>{if(kM(v,e)){v.preventDefault();let M=i!==void 0?i:tl(g)===tl(_),E=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?Q.startTransition(()=>E()):E()}},[g,p,_,i,r,e,s,l,c,f,h,m])}var hb=0,pb=()=>`__${String(++hb)}__`;function mb(){let{router:s}=Vv("useSubmit"),{basename:e}=Q.useContext(vi),i=LM(),r=s.fetch,l=s.navigate;return Q.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:g,body:_}=jM(c,e);if(f.navigate===!1){let v=f.fetcherKey||pb();await r(v,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function gb(s,{relative:e}={}){let{basename:i}=Q.useContext(vi),r=Q.useContext(Wi);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...cl(s||".",{relative:e})},f=Br();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),tl(c)}function _b(s,{relative:e}={}){let i=Q.useContext(Nv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vv("useViewTransitionState"),l=cl(s,{relative:e});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ou(l.pathname,f)!=null||ou(l.pathname,c)!=null}const kv="memory-map-data",Xv="memory-map-context";function vb(s){try{localStorage.setItem(kv,JSON.stringify(s))}catch(e){console.error("Failed to save memories:",e)}}function xb(){try{const s=localStorage.getItem(kv);return s?JSON.parse(s):[]}catch(s){return console.error("Failed to load memories:",s),[]}}function yb(s){try{localStorage.setItem(Xv,JSON.stringify(s))}catch(e){console.error("Failed to save context:",e)}}function Sb(){try{const s=localStorage.getItem(Xv);return s?JSON.parse(s):null}catch(s){return console.error("Failed to load context:",s),null}}function Fs({children:s,variant:e="primary",className:i="",...r}){const l="font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2",c={primary:"bg-accent-primary text-bg-primary px-10 py-4 rounded-[4px] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.25)] active:scale-[0.98]",secondary:"bg-transparent text-accent-primary border border-accent-primary/30 px-8 py-3 rounded-[4px] hover:border-accent-primary/60 hover:bg-accent-primary/5 active:scale-[0.98]",ghost:"bg-transparent text-accent-primary px-4 py-2 hover:text-accent-secondary",icon:"bg-accent-primary text-bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] active:scale-95"};return O.jsx("button",{className:`${l} ${c[e]} ${i}`,...r,children:s})}const mp="182",Mb=0,S_=1,bb=2,tu=1,Eb=2,Jo=3,rr=0,qn=1,ma=2,va=0,Os=1,M_=2,b_=3,E_=4,Tb=5,Ur=100,Ab=101,Rb=102,Cb=103,wb=104,Db=200,Nb=201,Ub=202,Lb=203,hh=204,ph=205,Ob=206,Pb=207,Fb=208,Bb=209,Ib=210,zb=211,Hb=212,Gb=213,Vb=214,mh=0,gh=1,_h=2,Bs=3,vh=4,xh=5,yh=6,Sh=7,Wv=0,kb=1,Xb=2,Gi=0,jv=1,qv=2,Yv=3,Zv=4,Kv=5,Qv=6,Jv=7,$v=300,Fr=301,Is=302,Mh=303,bh=304,mu=306,Eh=1e3,ga=1001,Th=1002,wn=1003,Wb=1004,Cc=1005,On=1006,Ld=1007,Or=1008,gi=1009,ex=1010,tx=1011,nl=1012,gp=1013,Xi=1014,zi=1015,Sa=1016,_p=1017,vp=1018,il=1020,nx=35902,ix=35899,ax=1021,rx=1022,Di=1023,Ma=1026,Pr=1027,sx=1028,xp=1029,zs=1030,yp=1031,Sp=1033,nu=33776,iu=33777,au=33778,ru=33779,Ah=35840,Rh=35841,Ch=35842,wh=35843,Dh=36196,Nh=37492,Uh=37496,Lh=37488,Oh=37489,Ph=37490,Fh=37491,Bh=37808,Ih=37809,zh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,jh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,np=36285,ip=36286,jb=3200,qb=0,Yb=1,ir="",mi="srgb",Hs="srgb-linear",lu="linear",Vt="srgb",ys=7680,T_=519,Zb=512,Kb=513,Qb=514,Mp=515,Jb=516,$b=517,bp=518,eE=519,A_=35044,R_="300 es",Hi=2e3,cu=2001;function ox(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tE(){const s=uu("canvas");return s.style.display="block",s}const C_={};function w_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ot(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Nt(...s){const e="THREE."+s.shift();console.error(e,...s)}function al(...s){const e=s.join(" ");e in C_||(C_[e]=!0,ot(...s))}function nE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,ap=180/Math.PI;function ul(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function iE(s,e){return(s%e+e)%e}function Pd(s,e,i){return(1-i)*s+i*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class jt{constructor(e=0,i=0){jt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3],v=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(h>=1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(_!==T||m!==v||p!==M||g!==E){let S=m*v+p*M+g*E+_*T;S<0&&(v=-v,M=-M,E=-E,T=-T,S=-S);let x=1-h;if(S<.9995){const w=Math.acos(S),N=Math.sin(w);x=Math.sin(x*w)/N,h=Math.sin(h*w)/N,m=m*x+v*h,p=p*x+M*h,g=g*x+E*h,_=_*x+T*h}else{m=m*x+v*h,p=p*x+M*h,g=g*x+E*h,_=_*x+T*h;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+g*_+m*M-p*v,e[i+1]=m*E+g*v+p*_-h*M,e[i+2]=p*E+g*M+h*v-m*_,e[i+3]=g*E-h*_-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),_=h(c/2),v=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*M*E,this._y=p*M*_-v*g*E,this._z=p*g*E+v*M*_,this._w=p*g*_-v*M*E;break;case"YXZ":this._x=v*g*_+p*M*E,this._y=p*M*_-v*g*E,this._z=p*g*E-v*M*_,this._w=p*g*_+v*M*E;break;case"ZXY":this._x=v*g*_-p*M*E,this._y=p*M*_+v*g*E,this._z=p*g*E+v*M*_,this._w=p*g*_-v*M*E;break;case"ZYX":this._x=v*g*_-p*M*E,this._y=p*M*_+v*g*E,this._z=p*g*E-v*M*_,this._w=p*g*_+v*M*E;break;case"YZX":this._x=v*g*_+p*M*E,this._y=p*M*_+v*g*E,this._z=p*g*E-v*M*_,this._w=p*g*_-v*M*E;break;case"XZY":this._x=v*g*_-p*M*E,this._y=p*M*_-v*g*E,this._z=p*g*E+v*M*_,this._w=p*g*_+v*M*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(D_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-h*g,this.y=r+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fd.copy(this).projectOnVector(e),this.sub(Fd)}reflect(e){return this.sub(Fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new re,D_=new fl;class gt{constructor(e,i,r,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],M=r[5],E=r[8],T=l[0],S=l[3],x=l[6],w=l[1],N=l[4],P=l[7],I=l[2],z=l[5],F=l[8];return c[0]=f*T+h*w+m*I,c[3]=f*S+h*N+m*z,c[6]=f*x+h*P+m*F,c[1]=p*T+g*w+_*I,c[4]=p*S+g*N+_*z,c[7]=p*x+g*P+_*F,c[2]=v*T+M*w+E*I,c[5]=v*S+M*N+E*z,c[8]=v*x+M*P+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*f-h*p,v=h*m-g*c,M=p*c-f*m,E=i*_+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(l*p-g*r)*T,e[2]=(h*r-l*f)*T,e[3]=v*T,e[4]=(g*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Bd.makeScale(e,i)),this}rotate(e){return this.premultiply(Bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bd=new gt,N_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aE(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:e,whitePoint:r,transfer:lu,toXYZ:N_,fromXYZ:U_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:N_,fromXYZ:U_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Ct=aE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class rE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=uu("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sE=0;class Ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Id(l[f].image)):c.push(Id(l[f]))}else c=Id(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let oE=0;const zd=new re;class In extends Xs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=ga,l=ga,c=On,f=Or,h=Di,m=gi,p=In.DEFAULT_ANISOTROPY,g=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ul(),this.name="",this.source=new Ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=$v;In.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],M=m[5],E=m[9],T=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,P=(M+1)/2,I=(x+1)/2,z=(g+v)/4,F=(_+T)/4,K=(E+S)/4;return N>P&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=z/r,c=F/r):P>I?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=z/l,c=K/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=K/c),this.set(r,l,c,i),this}let w=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(_-T)/w,this.z=(v-g)/w,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends Xs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new In(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends lE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class lx extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wc.copy(r.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Dc.subVectors(this.max,Xo),Ms.subVectors(e.a,Xo),bs.subVectors(e.b,Xo),Es.subVectors(e.c,Xo),Qa.subVectors(bs,Ms),Ja.subVectors(Es,bs),Er.subVectors(Ms,Es);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Er.z,Er.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Er.z,0,-Er.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Er.y,Er.x,0];return!Hd(i,Ms,bs,Es,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Hd(i,Ms,bs,Es,Dc))?!1:(Nc.crossVectors(Qa,Ja),i=[Nc.x,Nc.y,Nc.z],Hd(i,Ms,bs,Es,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new re,new re,new re,new re,new re,new re,new re,new re],Ti=new re,wc=new dl,Ms=new re,bs=new re,Es=new re,Qa=new re,Ja=new re,Er=new re,Xo=new re,Dc=new re,Nc=new re,Tr=new re;function Hd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Tr.fromArray(s,c);const h=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),g=r.dot(Tr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const uE=new dl,Wo=new re,Gd=new re;class hl{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Gd)),this.expandByPoint(Wo.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new re,Vd=new re,Uc=new re,$a=new re,kd=new re,Lc=new re,Xd=new re;class Tp{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Vd.copy(e).add(i).multiplyScalar(.5),Uc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Vd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Uc),h=$a.dot(this.direction),m=-$a.dot(Uc),p=$a.lengthSq(),g=Math.abs(1-f*f);let _,v,M,E;if(g>0)if(_=f*m-h,v=f*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,M=_*(_+f*v+2*h)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+h)),M=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+h)),M=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),M=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Vd).addScaledVector(Uc,v),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,c){kd.subVectors(i,e),Lc.subVectors(r,e),Xd.crossVectors(kd,Lc);let f=this.direction.dot(Xd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Lc.crossVectors($a,Lc));if(m<0)return null;const p=h*this.direction.dot(kd.cross($a));if(p<0||m+p>f)return null;const g=-h*$a.dot(Xd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,c,f,h,m,p,g,_,v,M,E,T,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,g,_,v,M,E,T,S)}set(e,i,r,l,c,f,h,m,p,g,_,v,M,E,T,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=M,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=f*g,M=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*g,M=m*_,E=p*g,T=p*_;i[0]=v+T*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=M*h-E,i[6]=T+v*h,i[10]=f*m}else if(e.order==="ZXY"){const v=m*g,M=m*_,E=p*g,T=p*_;i[0]=v-T*h,i[4]=-f*_,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const v=f*g,M=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-M,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-v*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*_+E,i[10]=v-T*_}else if(e.order==="XZY"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=h*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fE,e,dE)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),er.crossVectors(r,ti),er.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),er.crossVectors(r,ti)),er.normalize(),Oc.crossVectors(ti,er),l[0]=er.x,l[4]=Oc.x,l[8]=ti.x,l[1]=er.y,l[5]=Oc.y,l[9]=ti.y,l[2]=er.z,l[6]=Oc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],M=r[13],E=r[2],T=r[6],S=r[10],x=r[14],w=r[3],N=r[7],P=r[11],I=r[15],z=l[0],F=l[4],K=l[8],C=l[12],D=l[1],X=l[5],se=l[9],oe=l[13],pe=l[2],ce=l[6],B=l[10],G=l[14],ne=l[3],Me=l[7],be=l[11],L=l[15];return c[0]=f*z+h*D+m*pe+p*ne,c[4]=f*F+h*X+m*ce+p*Me,c[8]=f*K+h*se+m*B+p*be,c[12]=f*C+h*oe+m*G+p*L,c[1]=g*z+_*D+v*pe+M*ne,c[5]=g*F+_*X+v*ce+M*Me,c[9]=g*K+_*se+v*B+M*be,c[13]=g*C+_*oe+v*G+M*L,c[2]=E*z+T*D+S*pe+x*ne,c[6]=E*F+T*X+S*ce+x*Me,c[10]=E*K+T*se+S*B+x*be,c[14]=E*C+T*oe+S*G+x*L,c[3]=w*z+N*D+P*pe+I*ne,c[7]=w*F+N*X+P*ce+I*Me,c[11]=w*K+N*se+P*B+I*be,c[15]=w*C+N*oe+P*G+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],M=e[14],E=e[3],T=e[7],S=e[11],x=e[15],w=m*M-p*v,N=h*M-p*_,P=h*v-m*_,I=f*M-p*g,z=f*v-m*g,F=f*_-h*g;return i*(T*w-S*N+x*P)-r*(E*w-S*I+x*z)+l*(E*N-T*I+x*F)-c*(E*P-T*z+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],M=e[11],E=e[12],T=e[13],S=e[14],x=e[15],w=_*S*p-T*v*p+T*m*M-h*S*M-_*m*x+h*v*x,N=E*v*p-g*S*p-E*m*M+f*S*M+g*m*x-f*v*x,P=g*T*p-E*_*p+E*h*M-f*T*M-g*h*x+f*_*x,I=E*_*m-g*T*m-E*h*v+f*T*v+g*h*S-f*_*S,z=i*w+r*N+l*P+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=w*F,e[1]=(T*v*c-_*S*c-T*l*M+r*S*M+_*l*x-r*v*x)*F,e[2]=(h*S*c-T*m*c+T*l*p-r*S*p-h*l*x+r*m*x)*F,e[3]=(_*m*c-h*v*c-_*l*p+r*v*p+h*l*M-r*m*M)*F,e[4]=N*F,e[5]=(g*S*c-E*v*c+E*l*M-i*S*M-g*l*x+i*v*x)*F,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*x-i*m*x)*F,e[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*M+i*m*M)*F,e[8]=P*F,e[9]=(E*_*c-g*T*c-E*r*M+i*T*M+g*r*x-i*_*x)*F,e[10]=(f*T*c-E*h*c+E*r*p-i*T*p-f*r*x+i*h*x)*F,e[11]=(g*h*c-f*_*c-g*r*p+i*_*p+f*r*M-i*h*M)*F,e[12]=I*F,e[13]=(g*T*l-E*_*l+E*r*v-i*T*v-g*r*S+i*_*S)*F,e[14]=(E*h*l-f*T*l-E*r*m+i*T*m+f*r*S-i*h*S)*F,e[15]=(f*_*l-g*h*l+g*r*m-i*_*m-f*r*v+i*h*v)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,v=c*p,M=c*g,E=c*_,T=f*g,S=f*_,x=h*_,w=m*p,N=m*g,P=m*_,I=r.x,z=r.y,F=r.z;return l[0]=(1-(T+x))*I,l[1]=(M+P)*I,l[2]=(E-N)*I,l[3]=0,l[4]=(M-P)*z,l[5]=(1-(v+x))*z,l[6]=(S+w)*z,l[7]=0,l[8]=(E+N)*F,l[9]=(S-w)*F,l[10]=(1-(v+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),h=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,g=1/f,_=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(r-l),v=(i+e)/(i-e),M=(r+l)/(r-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Hi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===cu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-l),v=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Hi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===cu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ts=new re,Ai=new nn,fE=new re(0,0,0),dE=new re(1,1,1),er=new re,Oc=new re,ti=new re,L_=new nn,O_=new fl;class ba{constructor(e=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return L_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hE=0;const P_=new re,As=new fl,da=new nn,Pc=new re,jo=new re,pE=new re,mE=new fl,F_=new re(1,0,0),B_=new re(0,1,0),I_=new re(0,0,1),z_={type:"added"},gE={type:"removed"},Rs={type:"childadded",child:null},Wd={type:"childremoved",child:null};class zn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new re,i=new ba,r=new fl,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new gt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,i){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Pc.copy(e):Pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(jo,Pc,this.up):da.lookAt(Pc,jo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),As.setFromRotationMatrix(da),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gE),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new re(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new re,ha=new re,jd=new re,pa=new re,Cs=new re,ws=new re,H_=new re,qd=new re,Yd=new re,Zd=new re,Kd=new sn,Qd=new sn,Jd=new sn;class wi{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ha.subVectors(r,i),jd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(ha),m=Ri.dot(jd),p=ha.dot(ha),g=ha.dot(jd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,M=(p*m-h*g)*v,E=(f*g-h*m)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(h,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,r),Jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Kd,c.x),f.addScaledVector(Qd,c.y),f.addScaledVector(Jd,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Cs.subVectors(l,r),ws.subVectors(c,r),qd.subVectors(e,r);const m=Cs.dot(qd),p=ws.dot(qd);if(m<=0&&p<=0)return i.copy(r);Yd.subVectors(e,l);const g=Cs.dot(Yd),_=ws.dot(Yd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Cs,f);Zd.subVectors(e,c);const M=Cs.dot(Zd),E=ws.dot(Zd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ws,h);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return H_.subVectors(c,l),h=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(H_,h);const x=1/(S+T+v);return f=T*x,h=v*x,i.copy(r).addScaledVector(Cs,f).addScaledVector(ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function $d(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ct.workingColorSpace){if(e=iE(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=$d(f,c,e+1/3),this.g=$d(f,c,e),this.b=$d(f,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=ux[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ct.workingToColorSpace(Ln.copy(this),e),Math.round(Et(Ln.r*255,0,255))*65536+Math.round(Et(Ln.g*255,0,255))*256+Math.round(Et(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){Ct.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Fc);const r=Pd(tr.h,Fc.h,i),l=Pd(tr.s,Fc.s,i),c=Pd(tr.l,Fc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Pt;Pt.NAMES=ux;let _E=0;class Ws extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Os,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=ph,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hh&&(r.blendSrc=this.blendSrc),this.blendDst!==ph&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fx extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new re,Bc=new jt;let vE=0;class Bn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=A_,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(e),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class dx extends Bn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hx extends Bn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends Bn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xE=0;const pi=new nn,eh=new zn,Ds=new re,ni=new dl,qo=new dl,vn=new re;class ii extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?hx:dx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,qo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,qo.max),ni.expandByPoint(vn)):(ni.expandByPoint(qo.min),ni.expandByPoint(qo.max))}ni.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new re,m[K]=new re;const p=new re,g=new re,_=new re,v=new jt,M=new jt,E=new jt,T=new re,S=new re;function x(K,C,D){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),v.fromBufferAttribute(c,K),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),M.sub(v),E.sub(v);const X=1/(M.x*E.y-E.x*M.y);isFinite(X)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(X),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(X),h[K].add(T),h[C].add(T),h[D].add(T),m[K].add(S),m[C].add(S),m[D].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let K=0,C=w.length;K<C;++K){const D=w[K],X=D.start,se=D.count;for(let oe=X,pe=X+se;oe<pe;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const N=new re,P=new re,I=new re,z=new re;function F(K){I.fromBufferAttribute(l,K),z.copy(I);const C=h[K];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),P.crossVectors(z,C);const X=P.dot(m[K])<0?-1:1;f.setXYZW(K,N.x,N.y,N.z,X)}for(let K=0,C=w.length;K<C;++K){const D=w[K],X=D.start,se=D.count;for(let oe=X,pe=X+se;oe<pe;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,g=new re,_=new re;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*g;for(let x=0;x<g;x++)v[E++]=p[M++]}return new Bn(v,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],M=e(v,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const M=p[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new nn,Ar=new Tp,Ic=new hl,V_=new re,zc=new re,Hc=new re,Gc=new re,th=new re,Vc=new re,k_=new re,kc=new re;class Ea extends zn{constructor(e=new ii,i=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(th.fromBufferAttribute(_,e),f?Vc.addScaledVector(th,g):Vc.addScaledVector(th.sub(i),g))}i.add(Vc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(Ic.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ic,V_)===null||Ar.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(G_.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(G_),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=f[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=w,I=N;P<I;P+=3){const z=h.getX(P),F=h.getX(P+1),K=h.getX(P+2);l=Xc(this,x,e,r,p,g,_,z,F,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const w=h.getX(S),N=h.getX(S+1),P=h.getX(S+2);l=Xc(this,f,e,r,p,g,_,w,N,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=f[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=w,I=N;P<I;P+=3){const z=P,F=P+1,K=P+2;l=Xc(this,x,e,r,p,g,_,z,F,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const w=S,N=S+1,P=S+2;l=Xc(this,f,e,r,p,g,_,w,N,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yE(s,e,i,r,l,c,f,h){let m;if(e.side===qn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===rr,h),m===null)return null;kc.copy(h),kc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:s}}function Xc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,zc),s.getVertexPosition(m,Hc),s.getVertexPosition(p,Gc);const g=yE(s,e,i,r,zc,Hc,Gc,k_);if(g){const _=new re;wi.getBarycoord(k_,zc,Hc,Gc,_),l&&(g.uv=wi.getInterpolatedAttribute(l,h,m,p,_,new jt)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,m,p,_,new jt)),f&&(g.normal=wi.getInterpolatedAttribute(f,h,m,p,_,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new re,materialIndex:0};wi.getNormal(zc,Hc,Gc,v.normal),g.face=v,g.barycoord=_}return g}class pl extends ii{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(g,3)),this.setAttribute("uv",new Ni(_,2));function E(T,S,x,w,N,P,I,z,F,K,C){const D=P/F,X=I/K,se=P/2,oe=I/2,pe=z/2,ce=F+1,B=K+1;let G=0,ne=0;const Me=new re;for(let be=0;be<B;be++){const L=be*X-oe;for(let ee=0;ee<ce;ee++){const ge=ee*D-se;Me[T]=ge*w,Me[S]=L*N,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[T]=0,Me[S]=0,Me[x]=z>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(ee/F),_.push(1-be/K),G+=1}}for(let be=0;be<K;be++)for(let L=0;L<F;L++){const ee=v+L+ce*be,ge=v+L+ce*(be+1),Ce=v+(L+1)+ce*(be+1),Ve=v+(L+1)+ce*be;m.push(ee,ge,Ve),m.push(ge,Ce,Ve),ne+=6}h.addGroup(M,ne,C),M+=ne,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)e[l]=r[l]}return e}function SE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function px(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const ME={clone:Gs,merge:Fn};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=SE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new re,X_=new jt,W_=new jt;class Ci extends mx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,X_,W_),i.subVectors(W_,X_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Od*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ns=-90,Us=1;class TE extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Ns,Us,e,i);l.layers=this.layers,this.add(l);const c=new Ci(Ns,Us,e,i);c.layers=this.layers,this.add(c);const f=new Ci(Ns,Us,e,i);f.layers=this.layers,this.add(f);const h=new Ci(Ns,Us,e,i);h.layers=this.layers,this.add(h);const m=new Ci(Ns,Us,e,i);m.layers=this.layers,this.add(m);const p=new Ci(Ns,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,v,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gx extends In{constructor(e=[],i=Fr,r,l,c,f,h,m,p,g){super(e,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _x extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new _i({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:va});c.uniforms.tEquirect.value=i;const f=new Ea(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=On),new TE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Wc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,r),x=this._getHandJoint(p,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Wc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class RE extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CE extends In{constructor(e=null,i=1,r=1,l,c,f,h,m,p=wn,g=wn,_,v){super(null,f,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new re,wE=new re,DE=new gt;class Dr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ih.subVectors(r,i).cross(wE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ih),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DE.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new hl,NE=new jt(.5,.5),jc=new re;class vx{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,c=new Dr,f=new Dr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],M=c[7],E=c[8],T=c[9],S=c[10],x=c[11],w=c[12],N=c[13],P=c[14],I=c[15];if(l[0].setComponents(p-f,M-g,x-E,I-w).normalize(),l[1].setComponents(p+f,M+g,x+E,I+w).normalize(),l[2].setComponents(p+h,M+_,x+T,I+N).normalize(),l[3].setComponents(p-h,M-_,x-T,I-N).normalize(),r)l[4].setComponents(m,v,S,P).normalize(),l[5].setComponents(p-m,M-v,x-S,I-P).normalize();else if(l[4].setComponents(p-m,M-v,x-S,I-P).normalize(),i===Hi)l[5].setComponents(p+m,M+v,x+S,I+P).normalize();else if(i===cu)l[5].setComponents(m,v,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=NE.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class UE extends Ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new re,du=new re,j_=new nn,Yo=new Tp,qc=new hl,ah=new re,q_=new re;class LE extends zn{constructor(e=new ii,i=new UE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),du.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=fu.distanceTo(du);e.setAttribute("lineDistance",new Ni(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;j_.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(j_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const x=g.getX(T),w=g.getX(T+1),N=Yc(this,e,Yo,m,x,w,T);N&&i.push(N)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(M),x=Yc(this,e,Yo,m,T,S,E-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const x=Yc(this,e,Yo,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Yc(this,e,Yo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(fu.fromBufferAttribute(h,l),du.fromBufferAttribute(h,c),i.distanceSqToSegment(fu,du,ah,q_)>r)return;ah.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ah);if(!(p<e.near||p>e.far))return{distance:p,point:q_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Y_=new re,Z_=new re;class OE extends LE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Y_.fromBufferAttribute(i,l),Z_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Y_.distanceTo(Z_);e.setAttribute("lineDistance",new Ni(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PE extends Ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new nn,rp=new Tp,Zc=new hl,Kc=new re;class FE extends zn{constructor(e=new ii,i=new PE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zc.copy(r.boundingSphere),Zc.applyMatrix4(l),Zc.radius+=c,e.ray.intersectsSphere(Zc)===!1)return;K_.copy(l).invert(),rp.copy(e.ray).applyMatrix4(K_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const v=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=v,T=M;E<T;E++){const S=p.getX(E);Kc.fromBufferAttribute(_,S),Q_(Kc,S,m,l,e,i,this)}}else{const v=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=v,T=M;E<T;E++)Kc.fromBufferAttribute(_,E),Q_(Kc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Q_(s,e,i,r,l,c,f){const h=rp.distanceSqToPoint(s);if(h<i){const m=new re;rp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class rl extends In{constructor(e,i,r=Xi,l,c,f,h=wn,m=wn,p,g=Ma,_=1){if(g!==Ma&&g!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BE extends rl{constructor(e,i=Xi,r=Fr,l,c,f=wn,h=wn,m,p=Ma){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gu extends ii{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,_=e/h,v=i/m,M=[],E=[],T=[],S=[];for(let x=0;x<g;x++){const w=x*v-f;for(let N=0;N<p;N++){const P=N*_-c;E.push(P,-w,0),T.push(0,0,1),S.push(N/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<h;w++){const N=w+p*x,P=w+p*(x+1),I=w+1+p*(x+1),z=w+1+p*x;M.push(N,P,z),M.push(P,I,z)}this.setIndex(M),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(T,3)),this.setAttribute("uv",new Ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class IE extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zE extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ap extends mx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function J_(s,e,i,r){const l=VE(r);switch(i){case ax:return s*e;case sx:return s*e/l.components*l.byteLength;case xp:return s*e/l.components*l.byteLength;case zs:return s*e*2/l.components*l.byteLength;case yp:return s*e*2/l.components*l.byteLength;case rx:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case Sp:return s*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case au:case ru:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case wh:return Math.max(s,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(s,8)*Math.max(e,8)/2;case Dh:case Nh:case Lh:case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uh:case Ph:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case np:case ip:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VE(s){switch(s){case gi:case ex:return{byteLength:1,components:1};case nl:case tx:case Sa:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Xi:case gp:case zi:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function yx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function kE(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<_.length;M++){const E=_[v],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
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
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
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
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
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
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,a1=`#ifdef USE_BUMPMAP
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m1=`vec3 transformedNormal = objectNormal;
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
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
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
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
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
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G1=`PhysicalMaterial material;
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
#endif`,V1=`uniform sampler2D dfgLUT;
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
}`,k1=`
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$1=`#if defined( USE_POINTS_UV )
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
#endif`,eT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
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
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dT=`#ifdef USE_NORMALMAP
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
#endif`,hT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CT=`float getShadowMask() {
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
}`,wT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
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
}`,KT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,JT=`#define DISTANCE
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,rA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,dA=`#define PHONG
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
}`,hA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,yA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,MA=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:XE,alphahash_pars_fragment:WE,alphamap_fragment:jE,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:a1,clipping_planes_fragment:r1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:f1,color_vertex:d1,common:h1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:_1,emissivemap_fragment:v1,emissivemap_pars_fragment:x1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:M1,envmap_common_pars_fragment:b1,envmap_pars_fragment:E1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:F1,envmap_vertex:A1,fog_vertex:R1,fog_pars_vertex:C1,fog_fragment:w1,fog_pars_fragment:D1,gradientmap_pars_fragment:N1,lightmap_pars_fragment:U1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:O1,lights_pars_begin:P1,lights_toon_fragment:B1,lights_toon_pars_fragment:I1,lights_phong_fragment:z1,lights_phong_pars_fragment:H1,lights_physical_fragment:G1,lights_physical_pars_fragment:V1,lights_fragment_begin:k1,lights_fragment_maps:X1,lights_fragment_end:W1,logdepthbuf_fragment:j1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:Z1,map_fragment:K1,map_pars_fragment:Q1,map_particle_fragment:J1,map_particle_pars_fragment:$1,metalnessmap_fragment:eT,metalnessmap_pars_fragment:tT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:aT,morphtarget_pars_vertex:rT,morphtarget_vertex:sT,normal_fragment_begin:oT,normal_fragment_maps:lT,normal_pars_fragment:cT,normal_pars_vertex:uT,normal_vertex:fT,normalmap_pars_fragment:dT,clearcoat_normal_fragment_begin:hT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:gT,opaque_fragment:_T,packing:vT,premultiplied_alpha_fragment:xT,project_vertex:yT,dithering_fragment:ST,dithering_pars_fragment:MT,roughnessmap_fragment:bT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:AT,shadowmap_vertex:RT,shadowmask_pars_fragment:CT,skinbase_vertex:wT,skinning_pars_vertex:DT,skinning_vertex:NT,skinnormal_vertex:UT,specularmap_fragment:LT,specularmap_pars_fragment:OT,tonemapping_fragment:PT,tonemapping_pars_fragment:FT,transmission_fragment:BT,transmission_pars_fragment:IT,uv_pars_fragment:zT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:VT,background_vert:kT,background_frag:XT,backgroundCube_vert:WT,backgroundCube_frag:jT,cube_vert:qT,cube_frag:YT,depth_vert:ZT,depth_frag:KT,distance_vert:QT,distance_frag:JT,equirect_vert:$T,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:xA,shadow_frag:yA,sprite_vert:SA,sprite_frag:MA},Be={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Fn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Fn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Fn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Fn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Fn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Fn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Fn([Be.common,Be.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Fn([Be.lights,Be.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Qc={r:0,b:0,g:0},Cr=new ba,bA=new nn;function EA(s,e,i,r,l,c,f){const h=new Pt(0);let m=c===!0?0:1,p,g,_=null,v=0,M=null;function E(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?i:e).get(P)),P}function T(N){let P=!1;const I=E(N);I===null?x(h,m):I&&I.isColor&&(x(I,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,P){const I=E(P);I&&(I.isCubeTexture||I.mapping===mu)?(g===void 0&&(g=new Ea(new pl(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Gs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cr.copy(P.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(bA.makeRotationFromEuler(Cr)),g.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Vt,(_!==I||v!==I.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ea(new gu(2,2),new _i({name:"BackgroundMaterial",uniforms:Gs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=I,v=I.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,P){N.getRGB(Qc,px(s)),r.buffers.color.setClear(Qc.r,Qc.g,Qc.b,P,f)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,P=1){h.set(N),m=P,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:T,addToRenderList:S,dispose:w}}function TA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(D,X,se,oe,pe){let ce=!1;const B=_(oe,se,X);c!==B&&(c=B,p(c.object)),ce=M(D,oe,se,pe),ce&&E(D,oe,se,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,P(D,X,se,oe),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,X,se){const oe=se.wireframe===!0;let pe=r[D.id];pe===void 0&&(pe={},r[D.id]=pe);let ce=pe[X.id];ce===void 0&&(ce={},pe[X.id]=ce);let B=ce[oe];return B===void 0&&(B=v(m()),ce[oe]=B),B}function v(D){const X=[],se=[],oe=[];for(let pe=0;pe<i;pe++)X[pe]=0,se[pe]=0,oe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:se,attributeDivisors:oe,object:D,attributes:{},index:null}}function M(D,X,se,oe){const pe=c.attributes,ce=X.attributes;let B=0;const G=se.getAttributes();for(const ne in G)if(G[ne].location>=0){const be=pe[ne];let L=ce[ne];if(L===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),be===void 0||be.attribute!==L||L&&be.data!==L.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function E(D,X,se,oe){const pe={},ce=X.attributes;let B=0;const G=se.getAttributes();for(const ne in G)if(G[ne].location>=0){let be=ce[ne];be===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(be=D.instanceColor));const L={};L.attribute=be,be&&be.data&&(L.data=be.data),pe[ne]=L,B++}c.attributes=pe,c.attributesNum=B,c.index=oe}function T(){const D=c.newAttributes;for(let X=0,se=D.length;X<se;X++)D[X]=0}function S(D){x(D,0)}function x(D,X){const se=c.newAttributes,oe=c.enabledAttributes,pe=c.attributeDivisors;se[D]=1,oe[D]===0&&(s.enableVertexAttribArray(D),oe[D]=1),pe[D]!==X&&(s.vertexAttribDivisor(D,X),pe[D]=X)}function w(){const D=c.newAttributes,X=c.enabledAttributes;for(let se=0,oe=X.length;se<oe;se++)X[se]!==D[se]&&(s.disableVertexAttribArray(se),X[se]=0)}function N(D,X,se,oe,pe,ce,B){B===!0?s.vertexAttribIPointer(D,X,se,pe,ce):s.vertexAttribPointer(D,X,se,oe,pe,ce)}function P(D,X,se,oe){T();const pe=oe.attributes,ce=se.getAttributes(),B=X.defaultAttributeValues;for(const G in ce){const ne=ce[G];if(ne.location>=0){let Me=pe[G];if(Me===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Me!==void 0){const be=Me.normalized,L=Me.itemSize,ee=e.get(Me);if(ee===void 0)continue;const ge=ee.buffer,Ce=ee.type,Ve=ee.bytesPerElement,te=Ce===s.INT||Ce===s.UNSIGNED_INT||Me.gpuType===gp;if(Me.isInterleavedBufferAttribute){const de=Me.data,ye=de.stride,Ie=Me.offset;if(de.isInstancedInterleavedBuffer){for(let De=0;De<ne.locationSize;De++)x(ne.location+De,de.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let De=0;De<ne.locationSize;De++)S(ne.location+De);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let De=0;De<ne.locationSize;De++)N(ne.location+De,L/ne.locationSize,Ce,be,ye*Ve,(Ie+L/ne.locationSize*De)*Ve,te)}else{if(Me.isInstancedBufferAttribute){for(let de=0;de<ne.locationSize;de++)x(ne.location+de,Me.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let de=0;de<ne.locationSize;de++)S(ne.location+de);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let de=0;de<ne.locationSize;de++)N(ne.location+de,L/ne.locationSize,Ce,be,L*Ve,L/ne.locationSize*de*Ve,te)}}else if(B!==void 0){const be=B[G];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv(ne.location,be);break;case 3:s.vertexAttrib3fv(ne.location,be);break;case 4:s.vertexAttrib4fv(ne.location,be);break;default:s.vertexAttrib1fv(ne.location,be)}}}}w()}function I(){K();for(const D in r){const X=r[D];for(const se in X){const oe=X[se];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete X[se]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const se in X){const oe=X[se];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete X[se]}delete r[D.id]}function F(D){for(const X in r){const se=r[X];if(se[D.id]===void 0)continue;const oe=se[D.id];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete se[D.id]}}function K(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:w}}function AA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,r,1)}function m(p,g,_,v){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function RA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Di&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const K=F===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!K)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ot("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:P,maxSamples:I,samples:z}}function CA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Dr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||r!==0||l;return l=v,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,M){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const w=c?0:r,N=w*4;let P=x.clippingState||null;m.value=P,P=g(E,v,N,M);for(let I=0;I!==N;++I)P[I]=i[I];x.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,M,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const x=M+T*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,P=M;N!==T;++N,P+=4)f.copy(_[N]).applyMatrix4(w,h),f.normal.toArray(S,P),S[P+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function wA(s){let e=new WeakMap;function i(f,h){return h===Mh?f.mapping=Fr:h===bh&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Mh||h===bh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new _x(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ar=4,$_=[.125,.215,.35,.446,.526,.582],Lr=20,DA=256,Zo=new Ap,ev=new Pt;let rh=null,sh=0,oh=0,lh=!1;const NA=new re;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=NA}=c;rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,sh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:Sa,format:Di,colorSpace:Hs,depthBuffer:!1},l=nv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UA(c)),this._blurMaterial=OA(c,e,i),this._ggxMaterial=LA(c,e,i)}return l}_compileMaterial(e){const i=new Ea(new ii,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,c){const m=new Ci(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(ev),_.toneMapping=Gi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new pl,new fx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let x=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,x=!0):(S.color.copy(ev),x=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const I=this._cubeSize;Ls(l,P*I,N>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(T,m),_.render(e,m)}_.toneMapping=M,_.autoClear=v,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Fr||e.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,M=_*v,{_lodMax:E}=this,T=this._sizeLods[r],S=3*T*(r>E-ar?r-E+ar:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ls(c,S,x,3*T,2*T),l.setRenderTarget(c),l.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(e,S,x,3*T,2*T),l.setRenderTarget(e),l.render(h,Zo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Lr;S>Lr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Lr}`);const x=[];let w=0;for(let F=0;F<Lr;++F){const K=F/T,C=Math.exp(-K*K/2);x.push(C),F===0?w+=C:F<S&&(w+=2*C)}for(let F=0;F<x.length;F++)x[F]=x[F]/w;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const P=this._sizeLods[l],I=3*P*(l>N-ar?l-N+ar:0),z=4*(this._cubeSize-P);Ls(i,I,z,3*P,2*P),m.setRenderTarget(i),m.render(_,Zo)}}function UA(s){const e=[],i=[],r=[];let l=s;const c=s-ar+1+$_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-ar?m=$_[f-s+ar-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,T=3,S=2,x=1,w=new Float32Array(T*E*M),N=new Float32Array(S*E*M),P=new Float32Array(x*E*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,K=z>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];w.set(C,T*E*z),N.set(v,S*E*z);const D=[z,z,z,z,z,z];P.set(D,x*E*z)}const I=new ii;I.setAttribute("position",new Bn(w,T)),I.setAttribute("uv",new Bn(N,S)),I.setAttribute("faceIndex",new Bn(P,x)),r.push(new Ea(I,null)),l>ar&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function nv(s,e,i){const r=new Vi(s,e,i);return r.texture.mapping=mu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function LA(s,e,i){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function OA(s,e,i){const r=new Float32Array(Lr),l=new re(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function iv(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function av(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function PA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Mh||m===bh,g=m===Fr||m===Is;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new tv(s)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new tv(s)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function FA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&al("WebGLRenderer: "+r+" extension not supported."),l}}}function BA(s,e,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function p(_){const v=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let N=0,P=w.length;N<P;N+=3){const I=w[N+0],z=w[N+1],F=w[N+2];v.push(I,z,z,F,F,I)}}else if(E!==void 0){const w=E.array;T=E.version;for(let N=0,P=w.length/3-1;N<P;N+=3){const I=N+0,z=N+1,F=N+2;v.push(I,z,z,F,F,I)}}else return;const S=new(ox(v)?hx:dx)(v,1);S.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function IA(s,e,i){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,M){s.drawElements(r,M,c,v*f),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,v*f,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,r,1)}function _(v,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/f,M[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,v,0,T,0,E);let x=0;for(let w=0;w<E;w++)x+=M[w]*T[w];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HA(s,e,i){const r=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let D=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let I=h.attributes.position.count*P,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*z*4*_),K=new lx(F,I,z,_);K.type=zi,K.needsUpdate=!0;const C=P*4;for(let X=0;X<_;X++){const se=x[X],oe=w[X],pe=N[X],ce=I*z*4*X;for(let B=0;B<se.count;B++){const G=B*C;E===!0&&(l.fromBufferAttribute(se,B),F[ce+G+0]=l.x,F[ce+G+1]=l.y,F[ce+G+2]=l.z,F[ce+G+3]=0),T===!0&&(l.fromBufferAttribute(oe,B),F[ce+G+4]=l.x,F[ce+G+5]=l.y,F[ce+G+6]=l.z,F[ce+G+7]=0),S===!0&&(l.fromBufferAttribute(pe,B),F[ce+G+8]=l.x,F[ce+G+9]=l.y,F[ce+G+10]=l.z,F[ce+G+11]=pe.itemSize===4?l.w:1)}}v={count:_,texture:K,size:new jt(I,z)},r.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function GA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const VA={[jv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[Zv]:"ACES_FILMIC_TONE_MAPPING",[Qv]:"AGX_TONE_MAPPING",[Jv]:"NEUTRAL_TONE_MAPPING",[Kv]:"CUSTOM_TONE_MAPPING"};function kA(s,e,i,r,l){const c=new Vi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Vi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),h=new ii;h.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const m=new IE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ea(h,m),g=new Ap(-1,1,1,-1,0,1);let _=null,v=null,M=!1,E,T=null,S=[],x=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(w,N)}},this.setEffects=function(w){S=w,x=S.length>0&&S[0].isRenderPass===!0;const N=c.width,P=c.height;for(let I=0;I<S.length;I++){const z=S[I];z.setSize&&z.setSize(N,P)}},this.begin=function(w,N){if(M||w.toneMapping===Gi&&S.length===0)return!1;if(T=N,N!==null){const P=N.width,I=N.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return x===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(w,N){w.toneMapping=E,M=!0;let P=c,I=f;for(let z=0;z<S.length;z++){const F=S[z];if(F.enabled!==!1&&(F.render(w,I,P,N),F.needsSwap!==!1)){const K=P;P=I,I=K}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,m.defines={},Ct.getTransfer(_)===Vt&&(m.defines.SRGB_TRANSFER="");const z=VA[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(T),w.render(p,g),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Sx=new In,sp=new rl(1,1),Mx=new lx,bx=new cE,Ex=new gx,rv=[],sv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function js(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=rv[l];if(c===void 0&&(c=new Float32Array(l),rv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function vu(s,e){let i=sv[e];i===void 0&&(i=new Int32Array(e),sv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function XA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function jA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function qA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function YA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;cv.set(r),s.uniformMatrix2fv(this.addr,!1,cv),gn(i,r)}}function ZA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;lv.set(r),s.uniformMatrix3fv(this.addr,!1,lv),gn(i,r)}}function KA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;ov.set(r),s.uniformMatrix4fv(this.addr,!1,ov),gn(i,r)}}function QA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function eR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function tR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function nR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function iR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function rR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(sp.compareFunction=i.isReversedDepthBuffer()?bp:Mp,c=sp):c=Sx,i.setTexture2D(e||c,l)}function sR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||bx,l)}function oR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ex,l)}function lR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Mx,l)}function cR(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return jA;case 35666:return qA;case 35674:return YA;case 35675:return ZA;case 35676:return KA;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return $A;case 35669:case 35673:return eR;case 5125:return tR;case 36294:return nR;case 36295:return iR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return lR}}function uR(s,e){s.uniform1fv(this.addr,e)}function fR(s,e){const i=js(e,this.size,2);s.uniform2fv(this.addr,i)}function dR(s,e){const i=js(e,this.size,3);s.uniform3fv(this.addr,i)}function hR(s,e){const i=js(e,this.size,4);s.uniform4fv(this.addr,i)}function pR(s,e){const i=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function mR(s,e){const i=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function gR(s,e){const i=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function _R(s,e){s.uniform1iv(this.addr,e)}function vR(s,e){s.uniform2iv(this.addr,e)}function xR(s,e){s.uniform3iv(this.addr,e)}function yR(s,e){s.uniform4iv(this.addr,e)}function SR(s,e){s.uniform1uiv(this.addr,e)}function MR(s,e){s.uniform2uiv(this.addr,e)}function bR(s,e){s.uniform3uiv(this.addr,e)}function ER(s,e){s.uniform4uiv(this.addr,e)}function TR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=sp:f=Sx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function AR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||bx,c[f])}function RR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ex,c[f])}function CR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Mx,c[f])}function wR(s){switch(s){case 5126:return uR;case 35664:return fR;case 35665:return dR;case 35666:return hR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return _R;case 35667:case 35671:return vR;case 35668:case 35672:return xR;case 35669:case 35673:return yR;case 5125:return SR;case 36294:return MR;case 36295:return bR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}class DR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=cR(i.type)}}class NR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wR(i.type)}}class UR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function uv(s,e){s.seq.push(e),s.map[e.id]=e}function LR(s,e,i){const r=s.name,l=r.length;for(ch.lastIndex=0;;){const c=ch.exec(r),f=ch.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){uv(i,p===void 0?new DR(h,s,e):new NR(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new UR(h),uv(i,_)),i=_}}}class su{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);LR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function fv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const OR=37297;let PR=0;function FR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const dv=new gt;function BR(s){Ct._getMatrix(dv,Ct.workingColorSpace,s);const e=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case lu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+FR(s.getShaderSource(e),h)}else return c}function IR(s,e){const i=BR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zR={[jv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[Zv]:"ACESFilmic",[Qv]:"AgX",[Jv]:"Neutral",[Kv]:"Custom"};function HR(s,e){const i=zR[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new re;function GR(){Ct.getLuminanceCoefficients(Jc);const s=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function kR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function XR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function $o(s){return s!==""}function pv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WR=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(s){return s.replace(WR,qR)}const jR=new Map;function qR(s,e){let i=_t[e];if(i===void 0){const r=jR.get(e);if(r!==void 0)i=_t[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return op(i)}const YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(s){return s.replace(YR,ZR)}function ZR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KR={[tu]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function QR(s){return KR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JR={[Fr]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function $R(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":JR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const e2={[Is]:"ENVMAP_MODE_REFRACTION"};function t2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":e2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n2={[Wv]:"ENVMAP_BLENDING_MULTIPLY",[kb]:"ENVMAP_BLENDING_MIX",[Xb]:"ENVMAP_BLENDING_ADD"};function i2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":n2[s.combine]||"ENVMAP_BLENDING_NONE"}function a2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function r2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=QR(i),p=$R(i),g=t2(i),_=i2(i),v=a2(i),M=VR(i),E=kR(c),T=l.createProgram();let S,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),x.length>0&&(x+=`
`)):(S=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?_t.tonemapping_pars_fragment:"",i.toneMapping!==Gi?HR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,IR("linearToOutputTexel",i.outputColorSpace),GR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=op(f),f=pv(f,i),f=mv(f,i),h=op(h),h=pv(h,i),h=mv(h,i),f=gv(f),h=gv(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=w+S+f,P=w+x+h,I=fv(l,l.VERTEX_SHADER,N),z=fv(l,l.FRAGMENT_SHADER,P);l.attachShader(T,I),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(X){if(s.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(z)||"",ce=se.trim(),B=oe.trim(),G=pe.trim();let ne=!0,Me=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,I,z);else{const be=hv(l,I,"vertex"),L=hv(l,z,"fragment");Nt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ce+`
`+be+`
`+L)}else ce!==""?ot("WebGLProgram: Program Info Log:",ce):(B===""||G==="")&&(Me=!1);Me&&(X.diagnostics={runnable:ne,programLog:ce,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(z),K=new su(l,T),C=XR(l,T)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,OR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=z,this}let s2=0;class o2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new l2(e),i.set(e,r)),r}}class l2{constructor(e){this.id=s2++,this.code=e,this.usedTimes=0}}function c2(s,e,i,r,l,c,f){const h=new cx,m=new o2,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,D,X,se,oe){const pe=se.fog,ce=oe.geometry,B=C.isMeshStandardMaterial?se.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||B),ne=G&&G.mapping===mu?G.image.height:null,Me=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ot("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const be=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,L=be!==void 0?be.length:0;let ee=0;ce.morphAttributes.position!==void 0&&(ee=1),ce.morphAttributes.normal!==void 0&&(ee=2),ce.morphAttributes.color!==void 0&&(ee=3);let ge,Ce,Ve,te;if(Me){const Rt=Ii[Me];ge=Rt.vertexShader,Ce=Rt.fragmentShader}else ge=C.vertexShader,Ce=C.fragmentShader,m.update(C),Ve=m.getVertexShaderID(C),te=m.getFragmentShaderID(C);const de=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ie=oe.isInstancedMesh===!0,De=oe.isBatchedMesh===!0,ft=!!C.map,At=!!C.matcap,at=!!G,dt=!!C.aoMap,yt=!!C.lightMap,lt=!!C.bumpMap,Ft=!!C.normalMap,V=!!C.displacementMap,rt=!!C.emissiveMap,we=!!C.metalnessMap,Tt=!!C.roughnessMap,Xe=C.anisotropy>0,U=C.clearcoat>0,b=C.dispersion>0,j=C.iridescence>0,he=C.sheen>0,ve=C.transmission>0,fe=Xe&&!!C.anisotropyMap,Ye=U&&!!C.clearcoatMap,Ue=U&&!!C.clearcoatNormalMap,qe=U&&!!C.clearcoatRoughnessMap,tt=j&&!!C.iridescenceMap,Ee=j&&!!C.iridescenceThicknessMap,Ae=he&&!!C.sheenColorMap,Ge=he&&!!C.sheenRoughnessMap,ze=!!C.specularMap,Le=!!C.specularColorMap,pt=!!C.specularIntensityMap,W=ve&&!!C.transmissionMap,Pe=ve&&!!C.thicknessMap,Re=!!C.gradientMap,He=!!C.alphaMap,Te=C.alphaTest>0,Se=!!C.alphaHash,Ne=!!C.extensions;let st=Gi;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(st=s.toneMapping);const It={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:ge,fragmentShader:Ce,defines:C.defines,customVertexShaderID:Ve,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:De,batchingColor:De&&oe._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&oe.instanceColor!==null,instancingMorph:Ie&&oe.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Hs,alphaToCoverage:!!C.alphaToCoverage,map:ft,matcap:At,envMap:at,envMapMode:at&&G.mapping,envMapCubeUVHeight:ne,aoMap:dt,lightMap:yt,bumpMap:lt,normalMap:Ft,displacementMap:V,emissiveMap:rt,normalMapObjectSpace:Ft&&C.normalMapType===Yb,normalMapTangentSpace:Ft&&C.normalMapType===qb,metalnessMap:we,roughnessMap:Tt,anisotropy:Xe,anisotropyMap:fe,clearcoat:U,clearcoatMap:Ye,clearcoatNormalMap:Ue,clearcoatRoughnessMap:qe,dispersion:b,iridescence:j,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:he,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Le,specularIntensityMap:pt,transmission:ve,transmissionMap:W,thicknessMap:Pe,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:He,alphaTest:Te,alphaHash:Se,combine:C.combine,mapUv:ft&&T(C.map.channel),aoMapUv:dt&&T(C.aoMap.channel),lightMapUv:yt&&T(C.lightMap.channel),bumpMapUv:lt&&T(C.bumpMap.channel),normalMapUv:Ft&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:rt&&T(C.emissiveMap.channel),metalnessMapUv:we&&T(C.metalnessMap.channel),roughnessMapUv:Tt&&T(C.roughnessMap.channel),anisotropyMapUv:fe&&T(C.anisotropyMap.channel),clearcoatMapUv:Ye&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(C.sheenRoughnessMap.channel),specularMapUv:ze&&T(C.specularMap.channel),specularColorMapUv:Le&&T(C.specularColorMap.channel),specularIntensityMapUv:pt&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Pe&&T(C.thicknessMap.channel),alphaMapUv:He&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ft||Xe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ce.attributes.uv&&(ft||He),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:oe.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ee,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:ft&&C.map.isVideoTexture===!0&&Ct.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:rt&&C.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ma,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ne&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&C.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)D.push(X),D.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(w(D,C),N(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function P(C){const D=E[C.type];let X;if(D){const se=Ii[D];X=ME.clone(se.uniforms)}else X=C.uniforms;return X}function I(C,D){let X=_.get(D);return X!==void 0?++X.usedTimes:(X=new r2(s,D,C,c),g.push(X),_.set(D,X)),X}function z(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function K(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:P,acquireProgram:I,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:K}}function u2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function f2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_,v,M,E,T,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=M,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=S),e++,x}function h(_,v,M,E,T,S){const x=f(_,v,M,E,T,S);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,v,M,E,T,S){const x=f(_,v,M,E,T,S);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||f2),r.length>1&&r.sort(v||vv),l.length>1&&l.sort(v||vv)}function g(){for(let _=e,v=s.length;_<v;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function d2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new xv,s.set(r,[f])):l>=c.length?(f=new xv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function h2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Pt};break;case"SpotLight":i={position:new re,direction:new re,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function p2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let m2=0;function g2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _2(s){const e=new h2,i=p2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,c=new nn,f=new nn;function h(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,T=0,S=0,x=0,w=0,N=0,P=0,I=0,z=0,F=0;p.sort(g2);for(let C=0,D=p.length;C<D;C++){const X=p[C],se=X.color,oe=X.intensity,pe=X.distance;let ce=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===zs?ce=X.shadow.map.texture:ce=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=se.r*oe,_+=se.g*oe,v+=se.b*oe;else if(X.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(X.sh.coefficients[B],oe);F++}else if(X.isDirectionalLight){const B=e.get(X);if(B.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[M]=ne,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=X.shadow.matrix,w++}r.directional[M]=B,M++}else if(X.isSpotLight){const B=e.get(X);B.position.setFromMatrixPosition(X.matrixWorld),B.color.copy(se).multiplyScalar(oe),B.distance=pe,B.coneCos=Math.cos(X.angle),B.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),B.decay=X.decay,r.spot[T]=B;const G=X.shadow;if(X.map&&(r.spotLightMap[I]=X.map,I++,G.updateMatrices(X),X.castShadow&&z++),r.spotLightMatrix[T]=G.matrix,X.castShadow){const ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[T]=ne,r.spotShadowMap[T]=ce,P++}T++}else if(X.isRectAreaLight){const B=e.get(X);B.color.copy(se).multiplyScalar(oe),B.halfWidth.set(X.width*.5,0,0),B.halfHeight.set(0,X.height*.5,0),r.rectArea[S]=B,S++}else if(X.isPointLight){const B=e.get(X);if(B.color.copy(X.color).multiplyScalar(X.intensity),B.distance=X.distance,B.decay=X.decay,X.castShadow){const G=X.shadow,ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=X.shadow.matrix,N++}r.point[E]=B,E++}else if(X.isHemisphereLight){const B=e.get(X);B.skyColor.copy(X.color).multiplyScalar(oe),B.groundColor.copy(X.groundColor).multiplyScalar(oe),r.hemi[x]=B,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const K=r.hash;(K.directionalLength!==M||K.pointLength!==E||K.spotLength!==T||K.rectAreaLength!==S||K.hemiLength!==x||K.numDirectionalShadows!==w||K.numPointShadows!==N||K.numSpotShadows!==P||K.numSpotMaps!==I||K.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+I-z,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,K.directionalLength=M,K.pointLength=E,K.spotLength=T,K.rectAreaLength=S,K.hemiLength=x,K.numDirectionalShadows=w,K.numPointShadows=N,K.numSpotShadows=P,K.numSpotMaps=I,K.numLightProbes=F,r.version=m2++)}function m(p,g){let _=0,v=0,M=0,E=0,T=0;const S=g.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const N=p[x];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),_++}else if(N.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:r}}function yv(s){const e=new _2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function v2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new yv(s),e.set(l,[h])):c>=f.length?(h=new yv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const x2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y2=`uniform sampler2D shadow_pass;
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
}`,S2=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],M2=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Sv=new nn,Ko=new re,uh=new re;function b2(s,e,i){let r=new vx;const l=new jt,c=new jt,f=new sn,h=new zE,m=new HE,p={},g=i.maxTextureSize,_={[rr]:qn,[qn]:rr,[ma]:ma},v=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:x2,fragmentShader:y2}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ea(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let x=this.type;this.render=function(z,F,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===Eb&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=tu);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),se=s.state;se.setBlending(va),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const oe=x!==this.type;oe&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ce=>ce.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ce=z.length;pe<ce;pe++){const B=z[pe],G=B.shadow;if(G===void 0){ot("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();if(l.multiply(ne),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y)),G.map===null||oe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Jo){if(B.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vi(l.x,l.y,{format:zs,type:Sa,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new rl(l.x,l.y,zi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else{B.isPointLight?(G.map=new _x(l.x),G.map.depthTexture=new BE(l.x,Xi)):(G.map=new Vi(l.x,l.y),G.map.depthTexture=new rl(l.x,l.y,Xi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ma;const be=s.state.buffers.depth.getReversed();this.type===tu?(G.map.depthTexture.compareFunction=be?bp:Mp,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<Me;be++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,be),s.clear();else{be===0&&(s.setRenderTarget(G.map),s.clear());const L=G.getViewport(be);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),se.viewport(f)}if(B.isPointLight){const L=G.camera,ee=G.matrix,ge=B.distance||L.far;ge!==L.far&&(L.far=ge,L.updateProjectionMatrix()),Ko.setFromMatrixPosition(B.matrixWorld),L.position.copy(Ko),uh.copy(L.position),uh.add(S2[be]),L.up.copy(M2[be]),L.lookAt(uh),L.updateMatrixWorld(),ee.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Sv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Sv,L.coordinateSystem,L.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),P(F,K,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Jo&&w(G,K),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,D,X)};function w(z,F){const K=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Vi(l.x,l.y,{format:zs,type:Sa})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,K,v,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,K,M,T,null)}function N(z,F,K,C){let D=null;const X=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(X!==void 0)D=X;else if(D=K.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=D.uuid,oe=F.uuid;let pe=p[se];pe===void 0&&(pe={},p[se]=pe);let ce=pe[oe];ce===void 0&&(ce=D.clone(),pe[oe]=ce,F.addEventListener("dispose",I)),D=ce}if(D.visible=F.visible,D.wireframe=F.wireframe,C===Jo?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:_[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const se=s.properties.get(D);se.light=K}return D}function P(z,F,K,C,D){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===Jo)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const oe=e.update(z),pe=z.material;if(Array.isArray(pe)){const ce=oe.groups;for(let B=0,G=ce.length;B<G;B++){const ne=ce[B],Me=pe[ne.materialIndex];if(Me&&Me.visible){const be=N(z,Me,C,D);z.onBeforeShadow(s,z,F,K,oe,be,ne),s.renderBufferDirect(K,null,oe,be,z,ne),z.onAfterShadow(s,z,F,K,oe,be,ne)}}}else if(pe.visible){const ce=N(z,pe,C,D);z.onBeforeShadow(s,z,F,K,oe,ce,null),s.renderBufferDirect(K,null,oe,ce,z,null),z.onAfterShadow(s,z,F,K,oe,ce,null)}}const se=z.children;for(let oe=0,pe=se.length;oe<pe;oe++)P(se[oe],F,K,C,D)}function I(z){z.target.removeEventListener("dispose",I);for(const K in p){const C=p[K],D=z.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const E2={[mh]:gh,[_h]:yh,[vh]:Sh,[Bs]:xh,[gh]:mh,[yh]:_h,[Sh]:vh,[xh]:Bs};function T2(s,e){function i(){let W=!1;const Pe=new sn;let Re=null;const He=new sn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(s.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,Se,Ne,st,It){It===!0&&(Te*=st,Se*=st,Ne*=st),Pe.set(Te,Se,Ne,st),He.equals(Pe)===!1&&(s.clearColor(Te,Se,Ne,st),He.copy(Pe))},reset:function(){W=!1,Re=null,He.set(-1,0,0,0)}}}function r(){let W=!1,Pe=!1,Re=null,He=null,Te=null;return{setReversed:function(Se){if(Pe!==Se){const Ne=e.get("EXT_clip_control");Se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;const st=Te;Te=null,this.setClear(st)}},getReversed:function(){return Pe},setTest:function(Se){Se?de(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Se){Re!==Se&&!W&&(s.depthMask(Se),Re=Se)},setFunc:function(Se){if(Pe&&(Se=E2[Se]),He!==Se){switch(Se){case mh:s.depthFunc(s.NEVER);break;case gh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case vh:s.depthFunc(s.EQUAL);break;case xh:s.depthFunc(s.GEQUAL);break;case yh:s.depthFunc(s.GREATER);break;case Sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}He=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Te!==Se&&(Pe&&(Se=1-Se),s.clearDepth(Se),Te=Se)},reset:function(){W=!1,Re=null,He=null,Te=null,Pe=!1}}}function l(){let W=!1,Pe=null,Re=null,He=null,Te=null,Se=null,Ne=null,st=null,It=null;return{setTest:function(Rt){W||(Rt?de(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Rt){Pe!==Rt&&!W&&(s.stencilMask(Rt),Pe=Rt)},setFunc:function(Rt,Dn,xi){(Re!==Rt||He!==Dn||Te!==xi)&&(s.stencilFunc(Rt,Dn,xi),Re=Rt,He=Dn,Te=xi)},setOp:function(Rt,Dn,xi){(Se!==Rt||Ne!==Dn||st!==xi)&&(s.stencilOp(Rt,Dn,xi),Se=Rt,Ne=Dn,st=xi)},setLocked:function(Rt){W=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){W=!1,Pe=null,Re=null,He=null,Te=null,Se=null,Ne=null,st=null,It=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,M=[],E=null,T=!1,S=null,x=null,w=null,N=null,P=null,I=null,z=null,F=new Pt(0,0,0),K=0,C=!1,D=null,X=null,se=null,oe=null,pe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ne)[1]),B=G>=1):ne.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),B=G>=2);let Me=null,be={};const L=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ge=new sn().fromArray(L),Ce=new sn().fromArray(ee);function Ve(W,Pe,Re,He){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(W,Se),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<Re;Ne++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Pe+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Se}const te={};te[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(s.DEPTH_TEST),f.setFunc(Bs),lt(!1),Ft(S_),de(s.CULL_FACE),dt(va);function de(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function ye(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Ie(W,Pe){return _[W]!==Pe?(s.bindFramebuffer(W,Pe),_[W]=Pe,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function De(W,Pe){let Re=M,He=!1;if(W){Re=v.get(Pe),Re===void 0&&(Re=[],v.set(Pe,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ne=Te.length;Se<Ne;Se++)Re[Se]=s.COLOR_ATTACHMENT0+Se;Re.length=Te.length,He=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,He=!0);He&&s.drawBuffers(Re)}function ft(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const At={[Ur]:s.FUNC_ADD,[Ab]:s.FUNC_SUBTRACT,[Rb]:s.FUNC_REVERSE_SUBTRACT};At[Cb]=s.MIN,At[wb]=s.MAX;const at={[Db]:s.ZERO,[Nb]:s.ONE,[Ub]:s.SRC_COLOR,[hh]:s.SRC_ALPHA,[Ib]:s.SRC_ALPHA_SATURATE,[Fb]:s.DST_COLOR,[Ob]:s.DST_ALPHA,[Lb]:s.ONE_MINUS_SRC_COLOR,[ph]:s.ONE_MINUS_SRC_ALPHA,[Bb]:s.ONE_MINUS_DST_COLOR,[Pb]:s.ONE_MINUS_DST_ALPHA,[zb]:s.CONSTANT_COLOR,[Hb]:s.ONE_MINUS_CONSTANT_COLOR,[Gb]:s.CONSTANT_ALPHA,[Vb]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Pe,Re,He,Te,Se,Ne,st,It,Rt){if(W===va){T===!0&&(ye(s.BLEND),T=!1);return}if(T===!1&&(de(s.BLEND),T=!0),W!==Tb){if(W!==S||Rt!==C){if((x!==Ur||P!==Ur)&&(s.blendEquation(s.FUNC_ADD),x=Ur,P=Ur),Rt)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case M_:s.blendFunc(s.ONE,s.ONE);break;case b_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case M_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case b_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}w=null,N=null,I=null,z=null,F.set(0,0,0),K=0,S=W,C=Rt}return}Te=Te||Pe,Se=Se||Re,Ne=Ne||He,(Pe!==x||Te!==P)&&(s.blendEquationSeparate(At[Pe],At[Te]),x=Pe,P=Te),(Re!==w||He!==N||Se!==I||Ne!==z)&&(s.blendFuncSeparate(at[Re],at[He],at[Se],at[Ne]),w=Re,N=He,I=Se,z=Ne),(st.equals(F)===!1||It!==K)&&(s.blendColor(st.r,st.g,st.b,It),F.copy(st),K=It),S=W,C=!1}function yt(W,Pe){W.side===ma?ye(s.CULL_FACE):de(s.CULL_FACE);let Re=W.side===qn;Pe&&(Re=!Re),lt(Re),W.blending===Os&&W.transparent===!1?dt(va):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const He=W.stencilWrite;h.setTest(He),He&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function Ft(W){W!==Mb?(de(s.CULL_FACE),W!==X&&(W===S_?s.cullFace(s.BACK):W===bb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),X=W}function V(W){W!==se&&(B&&s.lineWidth(W),se=W)}function rt(W,Pe,Re){W?(de(s.POLYGON_OFFSET_FILL),(oe!==Pe||pe!==Re)&&(s.polygonOffset(Pe,Re),oe=Pe,pe=Re)):ye(s.POLYGON_OFFSET_FILL)}function we(W){W?de(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Tt(W){W===void 0&&(W=s.TEXTURE0+ce-1),Me!==W&&(s.activeTexture(W),Me=W)}function Xe(W,Pe,Re){Re===void 0&&(Me===null?Re=s.TEXTURE0+ce-1:Re=Me);let He=be[Re];He===void 0&&(He={type:void 0,texture:void 0},be[Re]=He),(He.type!==W||He.texture!==Pe)&&(Me!==Re&&(s.activeTexture(Re),Me=Re),s.bindTexture(W,Pe||te[W]),He.type=W,He.texture=Pe)}function U(){const W=be[Me];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function he(){try{s.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ve(){try{s.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ue(){try{s.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function qe(){try{s.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function tt(){try{s.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ee(){try{s.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ae(W){ge.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Ge(W){Ce.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function ze(W,Pe){let Re=p.get(Pe);Re===void 0&&(Re=new WeakMap,p.set(Pe,Re));let He=Re.get(W);He===void 0&&(He=s.getUniformBlockIndex(Pe,W.name),Re.set(W,He))}function Le(W,Pe){const He=p.get(Pe).get(W);m.get(Pe)!==He&&(s.uniformBlockBinding(Pe,He,W.__bindingPointIndex),m.set(Pe,He))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Me=null,be={},_={},v=new WeakMap,M=[],E=null,T=!1,S=null,x=null,w=null,N=null,P=null,I=null,z=null,F=new Pt(0,0,0),K=0,C=!1,D=null,X=null,se=null,oe=null,pe=null,ge.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:de,disable:ye,bindFramebuffer:Ie,drawBuffers:De,useProgram:ft,setBlending:dt,setMaterial:yt,setFlipSided:lt,setCullFace:Ft,setLineWidth:V,setPolygonOffset:rt,setScissorTest:we,activeTexture:Tt,bindTexture:Xe,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:tt,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:qe,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ye,scissor:Ae,viewport:Ge,reset:pt}}function A2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new jt,g=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return M?new OffscreenCanvas(U,b):uu("canvas")}function T(U,b,j){let he=1;const ve=Xe(U);if((ve.width>j||ve.height>j)&&(he=j/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(he*ve.width),Ye=Math.floor(he*ve.height);_===void 0&&(_=E(fe,Ye));const Ue=b?E(fe,Ye):_;return Ue.width=fe,Ue.height=Ye,Ue.getContext("2d").drawImage(U,0,0,fe,Ye),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ye+")."),Ue}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){s.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,b,j,he,ve=!1){if(U!==null){if(s[U]!==void 0)return s[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=b;if(b===s.RED&&(j===s.FLOAT&&(fe=s.R32F),j===s.HALF_FLOAT&&(fe=s.R16F),j===s.UNSIGNED_BYTE&&(fe=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.R8UI),j===s.UNSIGNED_SHORT&&(fe=s.R16UI),j===s.UNSIGNED_INT&&(fe=s.R32UI),j===s.BYTE&&(fe=s.R8I),j===s.SHORT&&(fe=s.R16I),j===s.INT&&(fe=s.R32I)),b===s.RG&&(j===s.FLOAT&&(fe=s.RG32F),j===s.HALF_FLOAT&&(fe=s.RG16F),j===s.UNSIGNED_BYTE&&(fe=s.RG8)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RG8UI),j===s.UNSIGNED_SHORT&&(fe=s.RG16UI),j===s.UNSIGNED_INT&&(fe=s.RG32UI),j===s.BYTE&&(fe=s.RG8I),j===s.SHORT&&(fe=s.RG16I),j===s.INT&&(fe=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),j===s.UNSIGNED_INT&&(fe=s.RGB32UI),j===s.BYTE&&(fe=s.RGB8I),j===s.SHORT&&(fe=s.RGB16I),j===s.INT&&(fe=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),j===s.UNSIGNED_INT&&(fe=s.RGBA32UI),j===s.BYTE&&(fe=s.RGBA8I),j===s.SHORT&&(fe=s.RGBA16I),j===s.INT&&(fe=s.RGBA32I)),b===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),b===s.RGBA){const Ye=ve?lu:Ct.getTransfer(he);j===s.FLOAT&&(fe=s.RGBA32F),j===s.HALF_FLOAT&&(fe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(fe=Ye===Vt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(U,b){let j;return U?b===null||b===Xi||b===il?j=s.DEPTH24_STENCIL8:b===zi?j=s.DEPTH32F_STENCIL8:b===nl&&(j=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===il?j=s.DEPTH_COMPONENT24:b===zi?j=s.DEPTH_COMPONENT32F:b===nl&&(j=s.DEPTH_COMPONENT16),j}function I(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),K(b),b.isVideoTexture&&g.delete(b)}function F(U){const b=U.target;b.removeEventListener("dispose",F),D(b)}function K(U){const b=r.get(U);if(b.__webglInit===void 0)return;const j=U.source,he=v.get(j);if(he){const ve=he[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(U),Object.keys(he).length===0&&v.delete(j)}r.remove(U)}function C(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const j=U.source,he=v.get(j);delete he[b.__cacheKey],f.memory.textures--}function D(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let ve=0;ve<b.__webglFramebuffer[he].length;ve++)s.deleteFramebuffer(b.__webglFramebuffer[he][ve]);else s.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)s.deleteFramebuffer(b.__webglFramebuffer[he]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let he=0,ve=j.length;he<ve;he++){const fe=r.get(j[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(j[he])}r.remove(U)}let X=0;function se(){X=0}function oe(){const U=X;return U>=l.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),X+=1,U}function pe(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ce(U,b){const j=r.get(U);if(U.isVideoTexture&&we(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const he=U.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function B(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){te(j,U,b);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function G(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){te(j,U,b);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function ne(U,b){const j=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){de(j,U,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const Me={[Eh]:s.REPEAT,[ga]:s.CLAMP_TO_EDGE,[Th]:s.MIRRORED_REPEAT},be={[wn]:s.NEAREST,[Wb]:s.NEAREST_MIPMAP_NEAREST,[Cc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Ld]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},L={[Zb]:s.NEVER,[eE]:s.ALWAYS,[Kb]:s.LESS,[Mp]:s.LEQUAL,[Qb]:s.EQUAL,[bp]:s.GEQUAL,[Jb]:s.GREATER,[$b]:s.NOTEQUAL};function ee(U,b){if(b.type===zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Ld||b.magFilter===Cc||b.magFilter===Or||b.minFilter===On||b.minFilter===Ld||b.minFilter===Cc||b.minFilter===Or)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Me[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Me[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Me[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,be[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Cc&&b.minFilter!==Or||b.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ge(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const he=b.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const fe=pe(b);if(fe!==U.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ve[fe].usedTimes++;const Ye=ve[U.__cacheKey];Ye!==void 0&&(ve[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&C(b)),U.__cacheKey=fe,U.__webglTexture=ve[fe].texture}return j}function Ce(U,b,j){return Math.floor(Math.floor(U/j)/b)}function Ve(U,b,j,he){const fe=U.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,j,he,b.data);else{fe.sort((Ee,Ae)=>Ee.start-Ae.start);let Ye=0;for(let Ee=1;Ee<fe.length;Ee++){const Ae=fe[Ye],Ge=fe[Ee],ze=Ae.start+Ae.count,Le=Ce(Ge.start,b.width,4),pt=Ce(Ae.start,b.width,4);Ge.start<=ze+1&&Le===pt&&Ce(Ge.start+Ge.count-1,b.width,4)===Le?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Ye,fe[Ye]=Ge)}fe.length=Ye+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const Ge=fe[Ee],ze=Math.floor(Ge.start/4),Le=Math.ceil(Ge.count/4),pt=ze%b.width,W=Math.floor(ze/b.width),Pe=Le,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,pt,W,Pe,Re,j,he,b.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function te(U,b,j){let he=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=s.TEXTURE_3D);const ve=ge(U,b),fe=b.source;i.bindTexture(he,U.__webglTexture,s.TEXTURE0+j);const Ye=r.get(fe);if(fe.version!==Ye.__version||ve===!0){i.activeTexture(s.TEXTURE0+j);const Ue=Ct.getPrimaries(Ct.workingColorSpace),qe=b.colorSpace===ir?null:Ct.getPrimaries(b.colorSpace),tt=b.colorSpace===ir||Ue===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=T(b.image,!1,l.maxTextureSize);Ee=Tt(b,Ee);const Ae=c.convert(b.format,b.colorSpace),Ge=c.convert(b.type);let ze=N(b.internalFormat,Ae,Ge,b.colorSpace,b.isVideoTexture);ee(he,b);let Le;const pt=b.mipmaps,W=b.isVideoTexture!==!0,Pe=Ye.__version===void 0||ve===!0,Re=fe.dataReady,He=I(b,Ee);if(b.isDepthTexture)ze=P(b.format===Pr,b.type),Pe&&(W?i.texStorage2D(s.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Ge,null));else if(b.isDataTexture)if(pt.length>0){W&&Pe&&i.texStorage2D(s.TEXTURE_2D,He,ze,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Le=pt[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ae,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,Ae,Ge,Le.data);b.generateMipmaps=!1}else W?(Pe&&i.texStorage2D(s.TEXTURE_2D,He,ze,Ee.width,Ee.height),Re&&Ve(b,Ee,Ae,Ge)):i.texImage2D(s.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Ge,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,pt[0].width,pt[0].height,Ee.depth);for(let Te=0,Se=pt.length;Te<Se;Te++)if(Le=pt[Te],b.format!==Di)if(Ae!==null)if(W){if(Re)if(b.layerUpdates.size>0){const Ne=J_(Le.width,Le.height,b.format,b.type);for(const st of b.layerUpdates){const It=Le.data.subarray(st*Ne/Le.data.BYTES_PER_ELEMENT,(st+1)*Ne/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,st,Le.width,Le.height,1,Ae,It)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ee.depth,Ae,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,ze,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ee.depth,Ae,Ge,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,ze,Le.width,Le.height,Ee.depth,0,Ae,Ge,Le.data)}else{W&&Pe&&i.texStorage2D(s.TEXTURE_2D,He,ze,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Le=pt[Te],b.format!==Di?Ae!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ae,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,Le.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ae,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,Te,ze,Le.width,Le.height,0,Ae,Ge,Le.data)}else if(b.isDataArrayTexture)if(W){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,Ee.width,Ee.height,Ee.depth),Re)if(b.layerUpdates.size>0){const Te=J_(Ee.width,Ee.height,b.format,b.type);for(const Se of b.layerUpdates){const Ne=Ee.data.subarray(Se*Te/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Ae,Ge,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ge,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Ge,Ee.data);else if(b.isData3DTexture)W?(Pe&&i.texStorage3D(s.TEXTURE_3D,He,ze,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ge,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Ge,Ee.data);else if(b.isFramebufferTexture){if(Pe)if(W)i.texStorage2D(s.TEXTURE_2D,He,ze,Ee.width,Ee.height);else{let Te=Ee.width,Se=Ee.height;for(let Ne=0;Ne<He;Ne++)i.texImage2D(s.TEXTURE_2D,Ne,ze,Te,Se,0,Ae,Ge,null),Te>>=1,Se>>=1}}else if(pt.length>0){if(W&&Pe){const Te=Xe(pt[0]);i.texStorage2D(s.TEXTURE_2D,He,ze,Te.width,Te.height)}for(let Te=0,Se=pt.length;Te<Se;Te++)Le=pt[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Ge,Le):i.texImage2D(s.TEXTURE_2D,Te,ze,Ae,Ge,Le);b.generateMipmaps=!1}else if(W){if(Pe){const Te=Xe(Ee);i.texStorage2D(s.TEXTURE_2D,He,ze,Te.width,Te.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ge,Ee)}else i.texImage2D(s.TEXTURE_2D,0,ze,Ae,Ge,Ee);S(b)&&x(he),Ye.__version=fe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function de(U,b,j){if(b.image.length!==6)return;const he=ge(U,b),ve=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const fe=r.get(ve);if(ve.version!==fe.__version||he===!0){i.activeTexture(s.TEXTURE0+j);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Ue=b.colorSpace===ir?null:Ct.getPrimaries(b.colorSpace),qe=b.colorSpace===ir||Ye===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!tt&&!Ee?Ae[Se]=T(b.image[Se],!0,l.maxCubemapSize):Ae[Se]=Ee?b.image[Se].image:b.image[Se],Ae[Se]=Tt(b,Ae[Se]);const Ge=Ae[0],ze=c.convert(b.format,b.colorSpace),Le=c.convert(b.type),pt=N(b.internalFormat,ze,Le,b.colorSpace),W=b.isVideoTexture!==!0,Pe=fe.__version===void 0||he===!0,Re=ve.dataReady;let He=I(b,Ge);ee(s.TEXTURE_CUBE_MAP,b);let Te;if(tt){W&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,He,pt,Ge.width,Ge.height);for(let Se=0;Se<6;Se++){Te=Ae[Se].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){const st=Te[Ne];b.format!==Di?ze!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,st.width,st.height,ze,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,st.width,st.height,0,st.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,st.width,st.height,ze,Le,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,st.width,st.height,0,ze,Le,st.data)}}}else{if(Te=b.mipmaps,W&&Pe){Te.length>0&&He++;const Se=Xe(Ae[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,He,pt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,ze,Le,Ae[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,Ae[Se].width,Ae[Se].height,0,ze,Le,Ae[Se].data);for(let Ne=0;Ne<Te.length;Ne++){const It=Te[Ne].image[Se].image;W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,It.width,It.height,ze,Le,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,It.width,It.height,0,ze,Le,It.data)}}else{W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ze,Le,Ae[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,ze,Le,Ae[Se]);for(let Ne=0;Ne<Te.length;Ne++){const st=Te[Ne];W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,ze,Le,st.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,ze,Le,st.image[Se])}}}S(b)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ye(U,b,j,he,ve,fe){const Ye=c.convert(j.format,j.colorSpace),Ue=c.convert(j.type),qe=N(j.internalFormat,Ye,Ue,j.colorSpace),tt=r.get(b),Ee=r.get(j);if(Ee.__renderTarget=b,!tt.__hasExternalTextures){const Ae=Math.max(1,b.width>>fe),Ge=Math.max(1,b.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,fe,qe,Ae,Ge,b.depth,0,Ye,Ue,null):i.texImage2D(ve,fe,qe,Ae,Ge,0,Ye,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),rt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ve,Ee.__webglTexture,0,V(b)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ve,Ee.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(U,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const he=b.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=P(b.stencilBuffer,ve),Ye=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(b),fe,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(b),fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{const he=b.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],Ye=c.convert(fe.format,fe.colorSpace),Ue=c.convert(fe.type),qe=N(fe.internalFormat,Ye,Ue,fe.colorSpace);rt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(b),qe,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(b),qe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,qe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(U,b,j){const he=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ee(s.TEXTURE_CUBE_MAP,b.depthTexture);const tt=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Ae;b.depthTexture.format===Ma?Ae=s.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(Ae=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ae,b.width,b.height,0,tt,Ee,null)}}else ce(b.depthTexture,0);const fe=ve.__webglTexture,Ye=V(b),Ue=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,qe=b.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)rt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Ue,fe,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Ue,fe,0);else if(b.depthTexture.format===Pr)rt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Ue,fe,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Ue,fe,0);else throw new Error("Unknown depthTexture format")}function ft(U){const b=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=he}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let he=0;he<6;he++)De(b.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?De(b.__webglFramebuffer[0],U,0):De(b.__webglFramebuffer,U,0)}else if(j){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=s.createRenderbuffer(),Ie(b.__webglDepthbuffer[he],U,!1);else{const ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ie(b.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(U,b,j){const he=r.get(U);b!==void 0&&ye(he.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ft(U)}function at(U){const b=U.texture,j=r.get(U),he=r.get(b);U.addEventListener("dispose",F);const ve=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Ye=ve.length>1;if(Ye||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=b.version,f.memory.textures++),fe){j.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Ue]=[];for(let qe=0;qe<b.mipmaps.length;qe++)j.__webglFramebuffer[Ue][qe]=s.createFramebuffer()}else j.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)j.__webglFramebuffer[Ue]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Ue=0,qe=ve.length;Ue<qe;Ue++){const tt=r.get(ve[Ue]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&rt(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ve.length;Ue++){const qe=ve[Ue];j.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const tt=c.convert(qe.format,qe.colorSpace),Ee=c.convert(qe.type),Ae=N(qe.internalFormat,tt,Ee,qe.colorSpace,U.isXRRenderTarget===!0),Ge=V(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ae,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,j.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ee(s.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)ye(j.__webglFramebuffer[Ue][qe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,qe);else ye(j.__webglFramebuffer[Ue],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let Ue=0,qe=ve.length;Ue<qe;Ue++){const tt=ve[Ue],Ee=r.get(tt);let Ae=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),ee(Ae,tt),ye(j.__webglFramebuffer,U,tt,s.COLOR_ATTACHMENT0+Ue,Ae,0),S(tt)&&x(Ae)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,he.__webglTexture),ee(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)ye(j.__webglFramebuffer[qe],U,b,s.COLOR_ATTACHMENT0,Ue,qe);else ye(j.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Ue,0);S(b)&&x(Ue),i.unbindTexture()}U.depthBuffer&&ft(U)}function dt(U){const b=U.textures;for(let j=0,he=b.length;j<he;j++){const ve=b[j];if(S(ve)){const fe=w(U),Ye=r.get(ve).__webglTexture;i.bindTexture(fe,Ye),x(fe),i.unbindTexture()}}}const yt=[],lt=[];function Ft(U){if(U.samples>0){if(rt(U)===!1){const b=U.textures,j=U.width,he=U.height;let ve=s.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(U),Ue=b.length>1;if(Ue)for(let tt=0;tt<b.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const qe=U.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[tt]);const Ee=r.get(b[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,j,he,0,0,j,he,ve,s.NEAREST),m===!0&&(yt.length=0,lt.length=0,yt.push(s.COLOR_ATTACHMENT0+tt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(yt.push(fe),lt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let tt=0;tt<b.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[tt]);const Ee=r.get(b[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function rt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(U){const b=f.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function Tt(U,b){const j=U.colorSpace,he=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Hs&&j!==ir&&(Ct.getTransfer(j)===Vt?(he!==Di||ve!==gi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",j)),b}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=ne,this.rebindTextures=At,this.setupRenderTarget=at,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function R2(s,e){function i(r,l=ir){let c;const f=Ct.getTransfer(l);if(r===gi)return s.UNSIGNED_BYTE;if(r===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ex)return s.BYTE;if(r===tx)return s.SHORT;if(r===nl)return s.UNSIGNED_SHORT;if(r===gp)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Sa)return s.HALF_FLOAT;if(r===ax)return s.ALPHA;if(r===rx)return s.RGB;if(r===Di)return s.RGBA;if(r===Ma)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===sx)return s.RED;if(r===xp)return s.RED_INTEGER;if(r===zs)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Sp)return s.RGBA_INTEGER;if(r===nu||r===iu||r===au||r===ru)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dh||r===Nh||r===Uh||r===Lh||r===Oh||r===Ph||r===Fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dh||r===Nh)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lh)return c.COMPRESSED_R11_EAC;if(r===Oh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ph)return c.COMPRESSED_RG11_EAC;if(r===Fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bh||r===Ih||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===jh||r===qh||r===Yh||r===Zh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Qh)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===tp||r===np||r===ip)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const C2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w2=`
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

}`;class D2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new xx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new _i({vertexShader:C2,fragmentShader:w2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new gu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N2 extends Xs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",S=new D2,x={},w=i.getContextAttributes();let N=null,P=null;const I=[],z=[],F=new jt;let K=null;const C=new Ci;C.viewport=new sn;const D=new Ci;D.viewport=new sn;const X=[C,D],se=new GE;let oe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=I[te];return de===void 0&&(de=new nh,I[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=I[te];return de===void 0&&(de=new nh,I[te]=de),de.getGripSpace()},this.getHand=function(te){let de=I[te];return de===void 0&&(de=new nh,I[te]=de),de.getHandSpace()};function ce(te){const de=z.indexOf(te.inputSource);if(de===-1)return;const ye=I[de];ye!==void 0&&(ye.update(te.inputSource,te.frame,p||f),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let te=0;te<I.length;te++){const de=z[te];de!==null&&(z[te]=null,I[te].disconnect(de))}oe=null,pe=null,S.reset();for(const te in x)delete x[te];e.setRenderTarget(N),M=null,v=null,_=null,l=null,P=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,De=null;w.depth&&(De=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=w.stencil?Pr:Ma,Ie=w.stencil?il:Xi);const ft={colorFormat:i.RGBA8,depthFormat:De,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ft),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Vi(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new rl(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ve.setContext(l),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(te){for(let de=0;de<te.removed.length;de++){const ye=te.removed[de],Ie=z.indexOf(ye);Ie>=0&&(z[Ie]=null,I[Ie].disconnect(ye))}for(let de=0;de<te.added.length;de++){const ye=te.added[de];let Ie=z.indexOf(ye);if(Ie===-1){for(let ft=0;ft<I.length;ft++)if(ft>=z.length){z.push(ye),Ie=ft;break}else if(z[ft]===null){z[ft]=ye,Ie=ft;break}if(Ie===-1)break}const De=I[Ie];De&&De.connect(ye)}}const ne=new re,Me=new re;function be(te,de,ye){ne.setFromMatrixPosition(de.matrixWorld),Me.setFromMatrixPosition(ye.matrixWorld);const Ie=ne.distanceTo(Me),De=de.projectionMatrix.elements,ft=ye.projectionMatrix.elements,At=De[14]/(De[10]-1),at=De[14]/(De[10]+1),dt=(De[9]+1)/De[5],yt=(De[9]-1)/De[5],lt=(De[8]-1)/De[0],Ft=(ft[8]+1)/ft[0],V=At*lt,rt=At*Ft,we=Ie/(-lt+Ft),Tt=we*-lt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Tt),te.translateZ(we),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=At+we,U=at+we,b=V-Tt,j=rt+(Ie-Tt),he=dt*at/U*Xe,ve=yt*at/U*Xe;te.projectionMatrix.makePerspective(b,j,he,ve,Xe,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,ye=te.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),se.near=D.near=C.near=de,se.far=D.far=C.far=ye,(oe!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),oe=se.near,pe=se.far),se.layers.mask=te.layers.mask|6,C.layers.mask=se.layers.mask&3,D.layers.mask=se.layers.mask&5;const Ie=te.parent,De=se.cameras;L(se,Ie);for(let ft=0;ft<De.length;ft++)L(De[ft],Ie);De.length===2?be(se,C,D):se.projectionMatrix.copy(C.projectionMatrix),ee(te,se,Ie)};function ee(te,de,ye){ye===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ap*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let ge=null;function Ce(te,de){if(g=de.getViewerPose(p||f),E=de,g!==null){const ye=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ie=!1;ye.length!==se.cameras.length&&(se.cameras.length=0,Ie=!0);for(let at=0;at<ye.length;at++){const dt=ye[at];let yt=null;if(M!==null)yt=M.getViewport(dt);else{const Ft=_.getViewSubImage(v,dt);yt=Ft.viewport,at===0&&(e.setRenderTargetTextures(P,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(P))}let lt=X[at];lt===void 0&&(lt=new Ci,lt.layers.enable(at),lt.viewport=new sn,X[at]=lt),lt.matrix.fromArray(dt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(dt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(yt.x,yt.y,yt.width,yt.height),at===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ie===!0&&se.cameras.push(lt)}const De=l.enabledFeatures;if(De&&De.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const at=_.getDepthInformation(ye[0]);at&&at.isValid&&at.texture&&S.init(at,l.renderState)}if(De&&De.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let at=0;at<ye.length;at++){const dt=ye[at].camera;if(dt){let yt=x[dt];yt||(yt=new xx,x[dt]=yt);const lt=_.getCameraImage(dt);yt.sourceTexture=lt}}}}for(let ye=0;ye<I.length;ye++){const Ie=z[ye],De=I[ye];Ie!==null&&De!==void 0&&De.update(Ie,de,p||f)}ge&&ge(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ve=new yx;Ve.setAnimationLoop(Ce),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const wr=new ba,U2=new nn;function L2(s,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,px(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,w,N,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&M(S,x,P)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,w,N):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=e.get(x),N=w.envMap,P=w.envMapRotation;N&&(S.envMap.value=N,wr.copy(P),wr.x*=-1,wr.y*=-1,wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),S.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(wr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,w,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=N*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const w=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function O2(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const P=N.program;r.uniformBlockBinding(w,P)}function p(w,N){let P=l[w.id];P===void 0&&(E(w),P=g(w),l[w.id]=P,w.addEventListener("dispose",S));const I=N.program;r.updateUBOMapping(w,I);const z=e.render.frame;c[w.id]!==z&&(v(w),c[w.id]=z)}function g(w){const N=_();w.__bindingPointIndex=N;const P=s.createBuffer(),I=w.__size,z=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const N=l[w.id],P=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let z=0,F=P.length;z<F;z++){const K=Array.isArray(P[z])?P[z]:[P[z]];for(let C=0,D=K.length;C<D;C++){const X=K[C];if(M(X,z,C,I)===!0){const se=X.__offset,oe=Array.isArray(X.value)?X.value:[X.value];let pe=0;for(let ce=0;ce<oe.length;ce++){const B=oe[ce],G=T(B);typeof B=="number"||typeof B=="boolean"?(X.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,se+pe,X.__data)):B.isMatrix3?(X.__data[0]=B.elements[0],X.__data[1]=B.elements[1],X.__data[2]=B.elements[2],X.__data[3]=0,X.__data[4]=B.elements[3],X.__data[5]=B.elements[4],X.__data[6]=B.elements[5],X.__data[7]=0,X.__data[8]=B.elements[6],X.__data[9]=B.elements[7],X.__data[10]=B.elements[8],X.__data[11]=0):(B.toArray(X.__data,pe),pe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,N,P,I){const z=w.value,F=N+"_"+P;if(I[F]===void 0)return typeof z=="number"||typeof z=="boolean"?I[F]=z:I[F]=z.clone(),!0;{const K=I[F];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return I[F]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function E(w){const N=w.uniforms;let P=0;const I=16;for(let F=0,K=N.length;F<K;F++){const C=Array.isArray(N[F])?N[F]:[N[F]];for(let D=0,X=C.length;D<X;D++){const se=C[D],oe=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,ce=oe.length;pe<ce;pe++){const B=oe[pe],G=T(B),ne=P%I,Me=ne%G.boundary,be=ne+Me;P+=Me,be!==0&&I-be<G.storage&&(P+=I-be),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=G.storage}}}const z=P%I;return z>0&&(P+=I-z),w.__size=P,w.__cache={},this}function T(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",w),N}function S(w){const N=w.target;N.removeEventListener("dispose",S);const P=f.indexOf(N.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const P2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function F2(){return Bi===null&&(Bi=new CE(P2,16,16,zs,Sa),Bi.name="DFG_LUT",Bi.minFilter=On,Bi.magFilter=On,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class B2{constructor(e={}){const{canvas:i=tE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const T=M,S=new Set([Sp,yp,xp]),x=new Set([gi,Xi,nl,il,_p,vp]),w=new Uint32Array(4),N=new Int32Array(4);let P=null,I=null;const z=[],F=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=mi;let X=0,se=0,oe=null,pe=-1,ce=null;const B=new sn,G=new sn;let ne=null;const Me=new Pt(0);let be=0,L=i.width,ee=i.height,ge=1,Ce=null,Ve=null;const te=new sn(0,0,L,ee),de=new sn(0,0,L,ee);let ye=!1;const Ie=new vx;let De=!1,ft=!1;const At=new nn,at=new re,dt=new sn,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ft(){return oe===null?ge:1}let V=r;function rt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),V===null){const q="webgl2";if(V=rt(q,R),V===null)throw rt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Nt("WebGLRenderer: "+R.message),R}let we,Tt,Xe,U,b,j,he,ve,fe,Ye,Ue,qe,tt,Ee,Ae,Ge,ze,Le,pt,W,Pe,Re,He,Te;function Se(){we=new FA(V),we.init(),Re=new R2(V,we),Tt=new RA(V,we,e,Re),Xe=new T2(V,we),Tt.reversedDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),U=new zA(V),b=new u2,j=new A2(V,we,Xe,b,Tt,Re,U),he=new wA(C),ve=new PA(C),fe=new kE(V),He=new TA(V,fe),Ye=new BA(V,fe,U,He),Ue=new GA(V,Ye,fe,U),pt=new HA(V,Tt,j),Ge=new CA(b),qe=new c2(C,he,ve,we,Tt,He,Ge),tt=new L2(C,b),Ee=new d2,Ae=new v2(we),Le=new EA(C,he,ve,Xe,Ue,E,m),ze=new b2(C,Ue,Tt),Te=new O2(V,U,Tt,Xe),W=new AA(V,we,U),Pe=new IA(V,we,U),U.programs=qe.programs,C.capabilities=Tt,C.extensions=we,C.properties=b,C.renderLists=Ee,C.shadowMap=ze,C.state=Xe,C.info=U}Se(),T!==gi&&(K=new kA(T,i.width,i.height,l,c));const Ne=new N2(C,V);this.xr=Ne,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=we.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=we.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(L,ee,!1))},this.getSize=function(R){return R.set(L,ee)},this.setSize=function(R,q,le=!0){if(Ne.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,ee=q,i.width=Math.floor(R*ge),i.height=Math.floor(q*ge),le===!0&&(i.style.width=R+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(L*ge,ee*ge).floor()},this.setDrawingBufferSize=function(R,q,le){L=R,ee=q,ge=le,i.width=Math.floor(R*le),i.height=Math.floor(q*le),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,le,ie){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,le,ie),Xe.viewport(B.copy(te).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,q,le,ie){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,q,le,ie),Xe.scissor(G.copy(de).multiplyScalar(ge).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Xe.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){Ve=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,le=!0){let ie=0;if(R){let Z=!1;if(oe!==null){const Oe=oe.texture.format;Z=S.has(Oe)}if(Z){const Oe=oe.texture.type,ke=x.has(Oe),Fe=Le.getClearColor(),We=Le.getClearAlpha(),Ze=Fe.r,et=Fe.g,Ke=Fe.b;ke?(w[0]=Ze,w[1]=et,w[2]=Ke,w[3]=We,V.clearBufferuiv(V.COLOR,0,w)):(N[0]=Ze,N[1]=et,N[2]=Ke,N[3]=We,V.clearBufferiv(V.COLOR,0,N))}else ie|=V.COLOR_BUFFER_BIT}q&&(ie|=V.DEPTH_BUFFER_BIT),le&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Le.dispose(),Ee.dispose(),Ae.dispose(),b.dispose(),he.dispose(),ve.dispose(),Ue.dispose(),He.dispose(),Te.dispose(),qe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",zr),Ne.removeEventListener("sessionend",Zs),Ui.stop()};function st(R){R.preventDefault(),w_("WebGLRenderer: Context Lost."),D=!0}function It(){w_("WebGLRenderer: Context Restored."),D=!1;const R=U.autoReset,q=ze.enabled,le=ze.autoUpdate,ie=ze.needsUpdate,Z=ze.type;Se(),U.autoReset=R,ze.enabled=q,ze.autoUpdate=le,ze.needsUpdate=ie,ze.type=Z}function Rt(R){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const q=R.target;q.removeEventListener("dispose",Dn),xi(q)}function xi(R){gl(R),b.remove(R)}function gl(R){const q=b.get(R).programs;q!==void 0&&(q.forEach(function(le){qe.releaseProgram(le)}),R.isShaderMaterial&&qe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,le,ie,Z,Oe){q===null&&(q=yt);const ke=Z.isMesh&&Z.matrixWorld.determinant()<0,Fe=sr(R,q,le,ie,Z);Xe.setMaterial(ie,ke);let We=le.index,Ze=1;if(ie.wireframe===!0){if(We=Ye.getWireframeAttribute(le),We===void 0)return;Ze=2}const et=le.drawRange,Ke=le.attributes.position;let nt=et.start*Ze,Ut=(et.start+et.count)*Ze;Oe!==null&&(nt=Math.max(nt,Oe.start*Ze),Ut=Math.min(Ut,(Oe.start+Oe.count)*Ze)),We!==null?(nt=Math.max(nt,0),Ut=Math.min(Ut,We.count)):Ke!=null&&(nt=Math.max(nt,0),Ut=Math.min(Ut,Ke.count));const Qt=Ut-nt;if(Qt<0||Qt===1/0)return;He.setup(Z,ie,Fe,le,We);let Yt,Bt=W;if(We!==null&&(Yt=fe.get(We),Bt=Pe,Bt.setIndex(Yt)),Z.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Ft()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if(Z.isLine){let Je=ie.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*Ft()),Z.isLineSegments?Bt.setMode(V.LINES):Z.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else Z.isPoints?Bt.setMode(V.POINTS):Z.isSprite&&Bt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,Lt=Z._multiDrawCounts,ct=Z._multiDrawCount,yn=We?fe.get(We).bytesPerElement:1,ji=b.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<ct;Sn++)ji.setValue(V,"_gl_DrawID",Sn),Bt.render(Je[Sn]/yn,Lt[Sn])}else if(Z.isInstancedMesh)Bt.renderInstances(nt,Qt,Z.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,Je);Bt.renderInstances(nt,Qt,Lt)}else Bt.render(nt,Qt)};function qs(R,q,le){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Gr(R,q,le),R.side=rr,R.needsUpdate=!0,Gr(R,q,le),R.side=ma):Gr(R,q,le)}this.compile=function(R,q,le=null){le===null&&(le=R),I=Ae.get(le),I.init(q),F.push(I),le.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),R!==le&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();const ie=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Oe=Z.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Fe=Oe[ke];qs(Fe,le,Z),ie.add(Fe)}else qs(Oe,le,Z),ie.add(Oe)}),I=F.pop(),ie},this.compileAsync=function(R,q,le=null){const ie=this.compile(R,q,le);return new Promise(Z=>{function Oe(){if(ie.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){Z(R);return}setTimeout(Oe,10)}we.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ir=null;function Ys(R){Ir&&Ir(R)}function zr(){Ui.stop()}function Zs(){Ui.start()}const Ui=new yx;Ui.setAnimationLoop(Ys),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Ir=R,Ne.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},Ne.addEventListener("sessionstart",zr),Ne.addEventListener("sessionend",Zs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const le=Ne.enabled===!0&&Ne.isPresenting===!0,ie=K!==null&&(oe===null||le)&&K.begin(C,oe);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(q),q=Ne.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,oe),I=Ae.get(R,F.length),I.init(q),F.push(I),At.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ie.setFromProjectionMatrix(At,Hi,q.reversedDepth),ft=this.localClippingEnabled,De=Ge.init(this.clippingPlanes,ft),P=Ee.get(R,z.length),P.init(),z.push(P),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=C.xr.getDepthSensingMesh();ke!==null&&ai(ke,q,-1/0,C.sortObjects)}ai(R,q,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Ce,Ve),lt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,lt&&Le.addToRenderList(P,R),this.info.render.frame++,De===!0&&Ge.beginShadows();const Z=I.state.shadowsArray;if(ze.render(Z,R,q),De===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&K.hasRenderPass())===!1){const ke=P.opaque,Fe=P.transmissive;if(I.setupLights(),q.isArrayCamera){const We=q.cameras;if(Fe.length>0)for(let Ze=0,et=We.length;Ze<et;Ze++){const Ke=We[Ze];xn(ke,Fe,R,Ke)}lt&&Le.render(R);for(let Ze=0,et=We.length;Ze<et;Ze++){const Ke=We[Ze];on(P,R,Ke,Ke.viewport)}}else Fe.length>0&&xn(ke,Fe,R,q),lt&&Le.render(R),on(P,R,q)}oe!==null&&se===0&&(j.updateMultisampleRenderTarget(oe),j.updateRenderTargetMipmap(oe)),ie&&K.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),He.resetDefaultState(),pe=-1,ce=null,F.pop(),F.length>0?(I=F[F.length-1],De===!0&&Ge.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?P=z[z.length-1]:P=null};function ai(R,q,le,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ie.intersectsSprite(R)){ie&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(At);const ke=Ue.update(R),Fe=R.material;Fe.visible&&P.push(R,ke,Fe,le,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ie.intersectsObject(R))){const ke=Ue.update(R),Fe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),dt.copy(ke.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(At)),Array.isArray(Fe)){const We=ke.groups;for(let Ze=0,et=We.length;Ze<et;Ze++){const Ke=We[Ze],nt=Fe[Ke.materialIndex];nt&&nt.visible&&P.push(R,ke,nt,le,dt.z,Ke)}}else Fe.visible&&P.push(R,ke,Fe,le,dt.z,null)}}const Oe=R.children;for(let ke=0,Fe=Oe.length;ke<Fe;ke++)ai(Oe[ke],q,le,ie)}function on(R,q,le,ie){const{opaque:Z,transmissive:Oe,transparent:ke}=R;I.setupLightsView(le),De===!0&&Ge.setGlobalState(C.clippingPlanes,le),ie&&Xe.viewport(B.copy(ie)),Z.length>0&&yi(Z,q,le),Oe.length>0&&yi(Oe,q,le),ke.length>0&&yi(ke,q,le),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function xn(R,q,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const nt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:nt?Sa:gi,minFilter:Or,samples:Tt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=I.state.transmissionRenderTarget[ie.id],ke=ie.viewport||B;Oe.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);const Fe=C.getRenderTarget(),We=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Oe),C.getClearColor(Me),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Le.render(le);const et=C.toneMapping;C.toneMapping=Gi;const Ke=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),De===!0&&Ge.setGlobalState(C.clippingPlanes,ie),yi(R,le,ie),j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe),we.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ut=0,Qt=q.length;Ut<Qt;Ut++){const Yt=q[Ut],{object:Bt,geometry:Je,material:Lt,group:ct}=Yt;if(Lt.side===ma&&Bt.layers.test(ie.layers)){const yn=Lt.side;Lt.side=qn,Lt.needsUpdate=!0,Hr(Bt,le,ie,Je,Lt,ct),Lt.side=yn,Lt.needsUpdate=!0,nt=!0}}nt===!0&&(j.updateMultisampleRenderTarget(Oe),j.updateRenderTargetMipmap(Oe))}C.setRenderTarget(Fe,We,Ze),C.setClearColor(Me,be),Ke!==void 0&&(ie.viewport=Ke),C.toneMapping=et}function yi(R,q,le){const ie=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Oe=R.length;Z<Oe;Z++){const ke=R[Z],{object:Fe,geometry:We,group:Ze}=ke;let et=ke.material;et.allowOverride===!0&&ie!==null&&(et=ie),Fe.layers.test(le.layers)&&Hr(Fe,q,le,We,et,Ze)}}function Hr(R,q,le,ie,Z,Oe){R.onBeforeRender(C,q,le,ie,Z,Oe),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,q,le,ie,R,Oe),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=qn,Z.needsUpdate=!0,C.renderBufferDirect(le,q,ie,Z,R,Oe),Z.side=rr,Z.needsUpdate=!0,C.renderBufferDirect(le,q,ie,Z,R,Oe),Z.side=ma):C.renderBufferDirect(le,q,ie,Z,R,Oe),R.onAfterRender(C,q,le,ie,Z,Oe)}function Gr(R,q,le){q.isScene!==!0&&(q=yt);const ie=b.get(R),Z=I.state.lights,Oe=I.state.shadowsArray,ke=Z.state.version,Fe=qe.getParameters(R,Z.state,Oe,q,le),We=qe.getProgramCacheKey(Fe);let Ze=ie.programs;ie.environment=R.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(R.isMeshStandardMaterial?ve:he).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Dn),Ze=new Map,ie.programs=Ze);let et=Ze.get(We);if(et!==void 0){if(ie.currentProgram===et&&ie.lightsStateVersion===ke)return Ks(R,Fe),et}else Fe.uniforms=qe.getUniforms(R),R.onBeforeCompile(Fe,C),et=qe.acquireProgram(Fe,We),Ze.set(We,et),ie.uniforms=Fe.uniforms;const Ke=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),Ks(R,Fe),ie.needsLights=Ta(R),ie.lightsStateVersion=ke,ie.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMap.value=Z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotShadowMap.value=Z.state.spotShadowMap,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMap.value=Z.state.pointShadowMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),ie.currentProgram=et,ie.uniformsList=null,et}function _l(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=su.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ks(R,q){const le=b.get(R);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function sr(R,q,le,ie,Z){q.isScene!==!0&&(q=yt),j.resetTextureUnits();const Oe=q.fog,ke=ie.isMeshStandardMaterial?q.environment:null,Fe=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Hs,We=(ie.isMeshStandardMaterial?ve:he).get(ie.envMap||ke),Ze=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!le.morphAttributes.position,nt=!!le.morphAttributes.normal,Ut=!!le.morphAttributes.color;let Qt=Gi;ie.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qt=C.toneMapping);const Yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Bt=Yt!==void 0?Yt.length:0,Je=b.get(ie),Lt=I.state.lights;if(De===!0&&(ft===!0||R!==ce)){const bn=R===ce&&ie.id===pe;Ge.setState(ie,R,bn)}let ct=!1;ie.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Lt.state.version||Je.outputColorSpace!==Fe||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==We||ie.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ge.numPlanes||Je.numIntersection!==Ge.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==et||Je.morphTargets!==Ke||Je.morphNormals!==nt||Je.morphColors!==Ut||Je.toneMapping!==Qt||Je.morphTargetsCount!==Bt)&&(ct=!0):(ct=!0,Je.__version=ie.version);let yn=Je.currentProgram;ct===!0&&(yn=Gr(ie,q,Z));let ji=!1,Sn=!1,ri=!1;const zt=yn.getUniforms(),Mn=Je.uniforms;if(Xe.useProgram(yn.program)&&(ji=!0,Sn=!0,ri=!0),ie.id!==pe&&(pe=ie.id,Sn=!0),ji||ce!==R){Xe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",R.projectionMatrix),zt.setValue(V,"viewMatrix",R.matrixWorldInverse);const En=zt.map.cameraPosition;En!==void 0&&En.setValue(V,at.setFromMatrixPosition(R.matrixWorld)),Tt.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,Sn=!0,ri=!0)}if(Je.needsLights&&(Lt.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",Lt.state.directionalShadowMap,j),Lt.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",Lt.state.spotShadowMap,j),Lt.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",Lt.state.pointShadowMap,j)),Z.isSkinnedMesh){zt.setOptional(V,Z,"bindMatrix"),zt.setOptional(V,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),zt.setValue(V,"boneTexture",bn.boneTexture,j))}Z.isBatchedMesh&&(zt.setOptional(V,Z,"batchingTexture"),zt.setValue(V,"batchingTexture",Z._matricesTexture,j),zt.setOptional(V,Z,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",Z._indirectTexture,j),zt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",Z._colorsTexture,j));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&pt.update(Z,le,yn),(Sn||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,zt.setValue(V,"receiveShadow",Z.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=We,Mn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=F2()),Sn&&(zt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Je.needsLights&&Qs(Mn,ri),Oe&&ie.fog===!0&&tt.refreshFogUniforms(Mn,Oe),tt.refreshMaterialUniforms(Mn,ie,ge,ee,I.state.transmissionRenderTarget[R.id]),su.upload(V,_l(Je),Mn,j)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(su.upload(V,_l(Je),Mn,j),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(V,"center",Z.center),zt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),zt.setValue(V,"normalMatrix",Z.normalMatrix),zt.setValue(V,"modelMatrix",Z.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let En=0,Vr=bn.length;En<Vr;En++){const Si=bn[En];Te.update(Si,yn),Te.bind(Si,yn)}}return yn}function Qs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ta(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(R,q,le){const ie=b.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=q,b.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const le=b.get(R);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const Aa=V.createFramebuffer();this.setRenderTarget=function(R,q=0,le=0){oe=R,X=q,se=le;let ie=null,Z=!1,Oe=!1;if(R){const Fe=b.get(R);if(Fe.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),B.copy(R.viewport),G.copy(R.scissor),ne=R.scissorTest,Xe.viewport(B),Xe.scissor(G),Xe.setScissorTest(ne),pe=-1;return}else if(Fe.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Fe.__hasExternalTextures)j.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Fe.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const Ze=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?ie=Ze[q][le]:ie=Ze[q],Z=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?ie=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[le]:ie=Ze,B.copy(R.viewport),G.copy(R.scissor),ne=R.scissorTest}else B.copy(te).multiplyScalar(ge).floor(),G.copy(de).multiplyScalar(ge).floor(),ne=ye;if(le!==0&&(ie=Aa),Xe.bindFramebuffer(V.FRAMEBUFFER,ie)&&Xe.drawBuffers(R,ie),Xe.viewport(B),Xe.scissor(G),Xe.setScissorTest(ne),Z){const Fe=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,le)}else if(Oe){const Fe=q;for(let We=0;We<R.textures.length;We++){const Ze=b.get(R.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,Ze.__webglTexture,le,Fe)}}else if(R!==null&&le!==0){const Fe=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,le)}pe=-1},this.readRenderTargetPixels=function(R,q,le,ie,Z,Oe,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Xe.bindFramebuffer(V.FRAMEBUFFER,We);try{const Ze=R.textures[Fe],et=Ze.format,Ke=Ze.type;if(!Tt.textureFormatReadable(et)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Ke)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&le>=0&&le<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(q,le,ie,Z,Re.convert(et),Re.convert(Ke),Oe))}finally{const Ze=oe!==null?b.get(oe).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,le,ie,Z,Oe,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(q>=0&&q<=R.width-ie&&le>=0&&le<=R.height-Z){Xe.bindFramebuffer(V.FRAMEBUFFER,We);const Ze=R.textures[Fe],et=Ze.format,Ke=Ze.type;if(!Tt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,nt),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(q,le,ie,Z,Re.convert(et),Re.convert(Ke),0);const Ut=oe!==null?b.get(oe).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Ut);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await nE(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,nt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(nt),V.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,le=0){const ie=Math.pow(2,-le),Z=Math.floor(R.image.width*ie),Oe=Math.floor(R.image.height*ie),ke=q!==null?q.x:0,Fe=q!==null?q.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ke,Fe,Z,Oe),Xe.unbindTexture()};const or=V.createFramebuffer(),Ra=V.createFramebuffer();this.copyTextureToTexture=function(R,q,le=null,ie=null,Z=0,Oe=null){Oe===null&&(Z!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=Z,Z=0):Oe=0);let ke,Fe,We,Ze,et,Ke,nt,Ut,Qt;const Yt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(le!==null)ke=le.max.x-le.min.x,Fe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,et=le.min.y,Ke=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-Z);ke=Math.floor(Yt.width*hn),Fe=Math.floor(Yt.height*hn),R.isDataArrayTexture?We=Yt.depth:R.isData3DTexture?We=Math.floor(Yt.depth*hn):We=1,Ze=0,et=0,Ke=0}ie!==null?(nt=ie.x,Ut=ie.y,Qt=ie.z):(nt=0,Ut=0,Qt=0);const Bt=Re.convert(q.format),Je=Re.convert(q.type);let Lt;q.isData3DTexture?(j.setTexture3D(q,0),Lt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Lt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ct=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ji=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke);const zt=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const hn=b.get(R),bn=b.get(q),En=b.get(hn.__renderTarget),Vr=b.get(bn.__renderTarget);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<We;Si++)zt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,Z,Ke+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Oe,Qt+Si)),V.blitFramebuffer(Ze,et,ke,Fe,nt,Ut,ke,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||b.has(R)){const hn=b.get(R),bn=b.get(q);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,or),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ra);for(let En=0;En<We;En++)zt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Z,Ke+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Z),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Oe,Qt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Oe),Z!==0?V.blitFramebuffer(Ze,et,ke,Fe,nt,Ut,ke,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Lt,Oe,nt,Ut,Qt+En,Ze,et,ke,Fe):V.copyTexSubImage2D(Lt,Oe,nt,Ut,Ze,et,ke,Fe);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Lt,Oe,nt,Ut,Qt,ke,Fe,We,Bt,Je,Yt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,Oe,nt,Ut,Qt,ke,Fe,We,Bt,Yt.data):V.texSubImage3D(Lt,Oe,nt,Ut,Qt,ke,Fe,We,Bt,Je,Yt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,nt,Ut,ke,Fe,Bt,Je,Yt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,nt,Ut,Yt.width,Yt.height,Bt,Yt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,nt,Ut,ke,Fe,Bt,Je,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Oe===0&&q.generateMipmaps&&V.generateMipmap(Lt),Xe.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){X=0,se=0,oe=null,Xe.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const I2=`
  attribute float alpha;
  attribute float aSize;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`,z2=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.25, 0.5, dist);
    gl_FragColor = vec4(uColor, vAlpha * softEdge);
  }
`,H2=`
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,G2=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function V2(s,e){const i=16*Math.pow(Math.sin(s),3),r=13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s);return{x:i*e,y:r*e}}function k2(s,e){const i=[];for(let r=0;r<s;r++){const l=r/s*Math.PI*2,c=(Math.random()-.5)*e*.6,f=(Math.random()-.5)*e*.6,h=V2(l,e);i.push({x:h.x+c,y:h.y+f})}return i}function X2(s){return s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2}function W2(s,e,i){const r=new Map;for(let l=0;l<s.length;l++){const c=s[l],f=Math.floor((c.x+i)/e)*1e4+Math.floor((c.y+i)/e);r.has(f)||r.set(f,[]),r.get(f).push(l)}return r}function j2(s,e,i){const r=[];for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const f=s.get((e+l)*1e4+(i+c));if(f)for(let h=0;h<f.length;h++)r.push(f[h])}return r}function q2(s,e={}){const{particleCount:i=90,connectionDistance:r=120,color:l=13935988,heartMode:c="heart",alphaMultiplier:f=1,connectionAlphaMultiplier:h=1}=e;let m=window.innerWidth,p=window.innerHeight,g=m/2,_=p/2,v=null;const M=130,E=M*M,T=250,S=.2,x=10,w=3,N=4,P=2.5,I=x+w+N+P,z=c==="heart",F={x:0,y:0,active:!1},K=window.matchMedia("(prefers-reduced-motion: reduce)").matches,C=new B2({canvas:s,alpha:!0,antialias:!1,powerPreference:"low-power"});C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.setSize(m,p);const D=new Ap(-g,g,_,-_,.1,100);D.position.z=10;const X=new RE,se=new Pt(l),oe=Math.min(m,p)*.028,pe=z?k2(i,oe):null,ce=[];for(let ye=0;ye<i;ye++)ce.push({x:(Math.random()-.5)*m,y:(Math.random()-.5)*p,homeX:(Math.random()-.5)*m,homeY:(Math.random()-.5)*p,heartX:pe?pe[ye].x:0,heartY:pe?pe[ye].y:0,snapX:0,snapY:0,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,baseAlpha:(.2+Math.random()*.4)*f,size:(2+Math.random()*2.5)*Math.min(window.devicePixelRatio,2),phase:Math.random()*Math.PI*2});const B=new Float32Array(i*3),G=new Float32Array(i),ne=new Float32Array(i);for(let ye=0;ye<i;ye++)B[ye*3]=ce[ye].x,B[ye*3+1]=ce[ye].y,B[ye*3+2]=0,G[ye]=ce[ye].baseAlpha,ne[ye]=ce[ye].size;const Me=new ii;Me.setAttribute("position",new Bn(B,3)),Me.setAttribute("alpha",new Bn(G,1)),Me.setAttribute("aSize",new Bn(ne,1));const be=new _i({uniforms:{uColor:{value:se}},vertexShader:I2,fragmentShader:z2,transparent:!0,depthWrite:!1});X.add(new FE(Me,be));const L=new Float32Array(T*6),ee=new Float32Array(T*2),ge=new ii;ge.setAttribute("position",new Bn(L,3)),ge.setAttribute("alpha",new Bn(ee,1)),ge.setDrawRange(0,0);const Ce=new _i({uniforms:{uColor:{value:se}},vertexShader:H2,fragmentShader:G2,transparent:!0,depthWrite:!1});X.add(new OE(ge,Ce));const Ve=r*r;let te="drift";function de(ye){v=requestAnimationFrame(de);const Ie=ye*.001;let De="drift",ft=0;if(z){const rt=Ie%I;rt<x?(De="drift",ft=rt/x):rt<x+w?(De="gather",ft=(rt-x)/w):rt<x+w+N?(De="hold",ft=(rt-x-w)/N):(De="scatter",ft=(rt-x-w-N)/P)}if(De!==te){for(let rt=0;rt<i;rt++){const we=ce[rt];we.snapX=we.x,we.snapY=we.y,De==="scatter"&&(we.homeX=(Math.random()-.5)*m,we.homeY=(Math.random()-.5)*p)}te=De}const At=X2(Math.min(ft,1));for(let rt=0;rt<i;rt++){const we=ce[rt];if(De==="drift")we.x+=we.vx,we.y+=we.vy,we.x>g+30&&(we.x=-g-30),we.x<-g-30&&(we.x=g+30),we.y>_+30&&(we.y=-_-30),we.y<-_-30&&(we.y=_+30);else if(De==="gather")we.x=we.snapX+(we.heartX-we.snapX)*At,we.y=we.snapY+(we.heartY-we.snapY)*At;else if(De==="hold"){const U=1+Math.sin(Ie*2)*.03;we.x=we.heartX*U,we.y=we.heartY*U}else De==="scatter"&&(we.x=we.snapX+(we.homeX-we.snapX)*At,we.y=we.snapY+(we.homeY-we.snapY)*At);if(F.active){const U=we.x-F.x,b=we.y-F.y,j=U*U+b*b;if(j<E&&j>1){const he=Math.sqrt(j),ve=(1-he/M)*.9;we.x+=U/he*ve,we.y+=b/he*ve}}const Tt=Math.sin(Ie*.5+we.phase)*.12;let Xe=0;De==="gather"&&(Xe=At*.15),De==="hold"&&(Xe=.15),De==="scatter"&&(Xe=(1-At)*.15),B[rt*3]=we.x,B[rt*3+1]=we.y,G[rt]=Math.max(.05,we.baseAlpha+Tt+Xe)}let at=r,dt=Ve,yt=S*h;De==="gather"?(at+=At*60,dt=at*at,yt+=At*.1):De==="hold"?(at+=60,dt=at*at,yt+=.1):De==="scatter"&&(at+=(1-At)*60,dt=at*at,yt+=(1-At)*.1);const lt=W2(ce,at,g);let Ft=0;const V=new Set;for(let rt=0;rt<i&&Ft<T;rt++){const we=ce[rt],Tt=Math.floor((we.x+g)/at),Xe=Math.floor((we.y+g)/at),U=j2(lt,Tt,Xe);for(let b=0;b<U.length&&Ft<T;b++){const j=U[b];if(j<=rt)continue;const he=rt*i+j;if(V.has(he))continue;V.add(he);const ve=ce[j],fe=we.x-ve.x,Ye=we.y-ve.y,Ue=fe*fe+Ye*Ye;if(Ue<dt){const qe=Math.sqrt(Ue),tt=(1-qe/at)*yt,Ee=Ft*6;L[Ee]=we.x,L[Ee+1]=we.y,L[Ee+2]=0,L[Ee+3]=ve.x,L[Ee+4]=ve.y,L[Ee+5]=0,ee[Ft*2]=tt,ee[Ft*2+1]=tt,Ft++}}}ge.setDrawRange(0,Ft*2),Me.attributes.position.needsUpdate=!0,Me.attributes.alpha.needsUpdate=!0,ge.attributes.position.needsUpdate=!0,ge.attributes.alpha.needsUpdate=!0,C.render(X,D)}if(K){if(pe)for(let ye=0;ye<i;ye++)B[ye*3]=pe[ye].x,B[ye*3+1]=pe[ye].y,G[ye]=ce[ye].baseAlpha+.15;Me.attributes.position.needsUpdate=!0,Me.attributes.alpha.needsUpdate=!0,C.render(X,D)}else v=requestAnimationFrame(de);return{destroy(){v!==null&&cancelAnimationFrame(v),Me.dispose(),be.dispose(),ge.dispose(),Ce.dispose(),C.dispose()},resize(ye,Ie){m=ye,p=Ie,g=ye/2,_=Ie/2,C.setSize(ye,Ie),D.left=-g,D.right=g,D.top=_,D.bottom=-_,D.updateProjectionMatrix()},setMouse(ye,Ie,De){F.x=ye-g,F.y=-(Ie-_),F.active=De}}}function Y2(){try{const s=document.createElement("canvas");return!!(s.getContext("webgl")||s.getContext("experimental-webgl"))}catch{return!1}}function ml({mode:s="heart",intensity:e=.6,color:i=13935988,className:r="",fixed:l=!1}){const c=Q.useRef(null),f=Q.useRef(null),[h]=Q.useState(()=>Y2());if(Q.useEffect(()=>{if(!h)return;const p=c.current;if(!p)return;const g=window.innerWidth<768,v=Math.round((g?35:70)*(.4+e*.8)),E=Math.round((g?80:110)*(.7+e*.5));let T="heart";(s==="drift"||s==="ambient")&&(T="none");try{f.current=q2(p,{particleCount:v,connectionDistance:E,color:i,heartMode:T,alphaMultiplier:s==="ambient"?.4:.6+e*.4,connectionAlphaMultiplier:s==="ambient"?.3:.5+e*.5})}catch(z){console.warn("ParticleField: scene creation failed",z)}let S=null;const x=()=>{clearTimeout(S),S=setTimeout(()=>{f.current?.resize(window.innerWidth,window.innerHeight)},200)};window.addEventListener("resize",x);const w=z=>f.current?.setMouse(z.clientX,z.clientY,!0),N=()=>f.current?.setMouse(0,0,!1),P=z=>{const F=z.touches[0];F&&f.current?.setMouse(F.clientX,F.clientY,!0)},I=()=>f.current?.setMouse(0,0,!1);return window.addEventListener("mousemove",w),document.addEventListener("mouseleave",N),window.addEventListener("touchmove",P,{passive:!0}),window.addEventListener("touchend",I),()=>{clearTimeout(S),f.current?.destroy(),f.current=null,window.removeEventListener("resize",x),window.removeEventListener("mousemove",w),document.removeEventListener("mouseleave",N),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",I)}},[h,s,e,i]),!h)return null;const m=l?"fixed":"absolute";return O.jsx("canvas",{ref:c,className:`${m} inset-0 w-full h-full pointer-events-none ${r}`,style:{zIndex:1},"aria-hidden":"true"})}function Z2(){const s=ll();return O.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[O.jsx(ml,{mode:"heart",intensity:.7}),O.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 60%)"}}),O.jsx("div",{className:"absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.04) 0%, transparent 70%)",animationDelay:"2s"}}),O.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.03) 0%, transparent 50%)"}}),O.jsxs("div",{className:"max-w-[680px] text-center relative z-10",children:[O.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/50 mb-6 opacity-0 animate-fade-in",style:{animationDelay:"0.1s",animationFillMode:"forwards"},children:"A valentine's day experience"}),O.jsx("h1",{className:"font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up",style:{animationFillMode:"forwards",animationDelay:"0.2s"},children:"Turn your memories into something they can see."}),O.jsx("p",{className:"font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-6 max-w-[480px] mx-auto leading-relaxed opacity-0 animate-fade-up",style:{animationDelay:"0.5s",animationFillMode:"forwards"},children:"Talk about the person you love. We'll turn it into a visual story you can share."}),O.jsx("div",{className:"mt-12 opacity-0 animate-fade-up",style:{animationDelay:"0.7s",animationFillMode:"forwards"},children:O.jsx(Fs,{onClick:()=>s("/create"),children:"Start Your Memory Map"})}),O.jsx("p",{className:"font-body text-[11px] text-text-tertiary/40 mt-4 opacity-0 animate-fade-in",style:{animationDelay:"1s",animationFillMode:"forwards"},children:"No account needed. Free to create."})]}),O.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in",style:{animationDelay:"1.5s",animationFillMode:"forwards"},children:O.jsx("div",{className:"animate-gentle-bounce",children:O.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:O.jsx("path",{d:"M6 9l6 6 6-6"})})})})]})}function xu(s={}){const e=Q.useRef(null),[i,r]=Q.useState(!1);return Q.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(r(!0),c.unobserve(l))},{threshold:s.threshold||.1,rootMargin:s.rootMargin||"0px 0px -40px 0px"});return c.observe(l),()=>c.disconnect()},[s.threshold,s.rootMargin]),[e,i]}function Nr({children:s,className:e="",delay:i=0,direction:r="up"}){const[l,c]=xu(),f={up:"translate-y-5",left:"-translate-x-[30px]",right:"translate-x-[30px]",none:""};return O.jsx("div",{ref:l,className:`transition-all duration-600 ease-out ${c?"opacity-100 translate-y-0 translate-x-0":`opacity-0 ${f[r]}`} ${e}`,style:{transitionDelay:`${i}s`},children:s})}const K2=[{number:"1",label:"Share your memories",description:"Talk or type about moments that matter"},{number:"2",label:"Watch it take shape",description:"Each memory becomes a point on your timeline"},{number:"3",label:"Send it as a gift",description:"Share a link they'll actually want to keep"}];function Q2(){return O.jsx("section",{className:"py-[120px] px-6",children:O.jsx("div",{className:"max-w-[900px] mx-auto",children:O.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative",children:[O.jsx("div",{className:"hidden md:block absolute top-[32px] left-[16.6%] right-[16.6%] h-px bg-accent-primary/20"}),K2.map((s,e)=>O.jsx(Nr,{delay:e*.15,children:O.jsxs("div",{className:"text-center",children:[O.jsx("span",{className:"font-accent italic text-[48px] text-accent-primary/60 leading-none",children:s.number}),O.jsx("h3",{className:"font-body text-sm uppercase tracking-[0.1em] text-text-primary mt-4 mb-2",children:s.label}),O.jsx("p",{className:"font-body text-base text-text-secondary",children:s.description})]})},s.number))]})})})}function J2(){return O.jsxs("main",{children:[O.jsx(Z2,{}),O.jsx(Q2,{})]})}function $2({onSubmit:s,isProcessing:e,recipientName:i}){const[r,l]=Q.useState(""),[c,f]=Q.useState(!1),h=Q.useRef(null);Q.useEffect(()=>{const g=h.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,240)+"px")},[r]);const m=()=>{const g=r.trim();!g||e||(s(g),l(""))},p=g=>{g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&(g.preventDefault(),m())};return O.jsxs("div",{className:"relative",children:[O.jsxs("div",{className:`relative group rounded-xl transition-all duration-500 ${c?"shadow-[0_0_40px_rgba(212,165,116,0.08)]":""}`,children:[O.jsx("div",{className:`absolute -inset-px rounded-xl bg-gradient-to-b from-accent-primary/20 to-transparent transition-opacity duration-500 ${c?"opacity-100":"opacity-0"}`}),O.jsx("textarea",{ref:h,value:r,onChange:g=>l(g.target.value),onKeyDown:p,onFocus:()=>f(!0),onBlur:()=>f(!1),placeholder:i?`Tell me about a moment with ${i}...`:"Tell me about a moment you shared...",rows:3,className:"relative w-full min-h-[130px] max-h-[240px] resize-none bg-bg-secondary/90 backdrop-blur-sm border border-border-subtle rounded-xl p-6 pr-14 font-body text-base text-text-primary placeholder:font-accent placeholder:italic placeholder:text-lg placeholder:text-text-tertiary/60 focus:outline-none focus:border-accent-primary/30 transition-all duration-300"}),O.jsx("div",{className:"absolute top-5 right-5 w-2 h-2 rounded-full bg-accent-primary animate-breathe"}),O.jsx("button",{onClick:m,disabled:!r.trim()||e,className:`absolute bottom-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 ${r.trim()&&!e?"bg-accent-primary text-bg-primary shadow-[0_0_16px_rgba(212,165,116,0.3)] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.4)]":"bg-bg-elevated text-text-tertiary/30 cursor-not-allowed"}`,"aria-label":"Submit memory",children:e?O.jsx("svg",{className:"w-4 h-4 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"})}):O.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:O.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]}),e&&O.jsxs("div",{className:"mt-3 flex items-center gap-2 animate-fade-in",children:[O.jsx("div",{className:"w-1 h-1 rounded-full bg-accent-primary animate-breathe"}),O.jsx("p",{className:"font-body text-[12px] text-text-tertiary",children:"Understanding your memory..."})]}),!e&&O.jsx("p",{className:"mt-3 font-body text-[11px] text-text-tertiary/30",children:"Press Ctrl+Enter to submit · Speak naturally, we'll organize it"})]})}function e3({lines:s=3}){return O.jsx("div",{className:"space-y-3",children:Array.from({length:s}).map((e,i)=>O.jsx("div",{className:"h-4 rounded animate-shimmer",style:{width:i===s-1?"60%":i===0?"80%":"100%"}},i))})}function t3({memory:s,index:e,onDelete:i}){const[r,l]=Q.useState(!1),c=e%2===0;return s.loading?O.jsxs("div",{className:`w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${c?"md:mr-auto":"md:ml-auto"}`,style:{animationFillMode:"forwards",opacity:0},children:[O.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[O.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent-primary animate-breathe"}),O.jsx("span",{className:"font-body text-[11px] text-text-tertiary italic",children:"Understanding your memory..."})]}),O.jsx(e3,{lines:4})]}):O.jsxs("div",{className:`relative w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${c?"md:mr-auto":"md:ml-auto"}`,style:{animationFillMode:"forwards",opacity:0,animationDelay:"0.1s"},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[i&&O.jsx("button",{onClick:()=>i(s.id),className:`absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-all duration-200 cursor-pointer ${r?"opacity-100 scale-100":"opacity-0 scale-90"}`,"aria-label":"Delete memory",children:O.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),O.jsx("h3",{className:"font-display text-xl font-medium text-text-primary mb-1 pr-6",children:s.title}),s.date_hint&&O.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-3",children:s.date_hint}),O.jsxs("p",{className:"font-accent text-[17px] text-text-secondary leading-relaxed mb-4",children:["“",s.excerpt,"”"]}),O.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s.emotion&&O.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80 border border-accent-primary/20 rounded-full px-3 py-1",children:s.emotion}),s.location?.place_name&&O.jsxs("span",{className:"font-body text-[11px] text-text-tertiary flex items-center gap-1",children:[O.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"shrink-0",children:[O.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),O.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.location.place_name]}),s.theme_tags?.map(f=>O.jsx("span",{className:"font-body text-[10px] text-text-tertiary/60 bg-bg-elevated/50 rounded-full px-2.5 py-0.5",children:f},f))]})]})}function Tx({memories:s,onDelete:e}){return s.length===0?O.jsxs("div",{className:"py-16 text-center",children:[O.jsx("div",{className:"w-px h-24 bg-accent-primary/10 mx-auto mb-6",style:{borderLeft:"1px dashed rgba(212,165,116,0.2)"}}),O.jsx("p",{className:"font-body text-sm text-text-tertiary max-w-[360px] mx-auto leading-relaxed",children:"Start with any memory. The first time you met. Last Tuesday. The thing they always say. There's no wrong place to begin."})]}):O.jsxs("div",{className:"relative py-8",role:"region","aria-label":"Memory timeline",children:[O.jsx("div",{className:"hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-timeline-line -translate-x-1/2"}),O.jsx("ol",{className:"space-y-8 md:space-y-12 list-none p-0 m-0",children:s.map((i,r)=>O.jsxs("li",{className:"relative",children:[O.jsx("div",{className:"hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-2 h-2 rounded-full bg-accent-primary animate-node-pulse"}),O.jsx(t3,{memory:i,index:r,onDelete:e})]},i.id))})]})}const n3="modulepreload",i3=function(s){return"/"+s},Mv={},el=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(g){return Promise.all(g.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(g=>{if(g=i3(g),g in Mv)return;Mv[g]=!0;const _=g.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${v}`))return;const M=document.createElement("link");if(M.rel=_?"stylesheet":n3,_||(M.as="script"),M.crossOrigin="",M.href=g,m&&M.setAttribute("nonce",m),document.head.appendChild(M),_)return new Promise((E,T)=>{M.addEventListener("load",E),M.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${g}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function lp({memories:s}){const e=Q.useRef(null),i=Q.useRef(null),[r,l]=Q.useState(!1),c=s.filter(f=>f.location?.coordinates&&!f.loading);return Q.useEffect(()=>!e.current||i.current?void 0:((async()=>{const h=(await el(async()=>{const{default:p}=await import("./mapbox-gl-yvUAwFkg.js").then(g=>g.m);return{default:p}},[])).default;await el(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const g=await(await fetch("/api/config")).json();h.accessToken=g.mapboxToken||""}catch{h.accessToken=""}if(!h.accessToken){console.warn("Mapbox token not set. Map will not render.");return}const m=new h.Map({container:e.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,logoPosition:"bottom-left"});m.on("load",()=>{l(!0)}),i.current=m})(),()=>{i.current&&(i.current.remove(),i.current=null)}),[]),Q.useEffect(()=>{if(!i.current||!r)return;const f=i.current;if(document.querySelectorAll(".memory-marker").forEach(p=>p.remove()),c.length===0)return;(async()=>{const p=(await el(async()=>{const{default:_}=await import("./mapbox-gl-yvUAwFkg.js").then(v=>v.m);return{default:_}},[])).default,g=new p.LngLatBounds;if(c.forEach((_,v)=>{const[M,E]=_.location.coordinates,T=[E,M];g.extend(T);const S=document.createElement("div");S.className="memory-marker",S.style.cssText=`
          width: 12px;
          height: 12px;
          background: #D4A574;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(212,165,116,0.5);
          animation: marker-drop 0.5s ease-out forwards;
          animation-delay: ${v*.3}s;
          opacity: 0;
        `;const x=new p.Popup({offset:15,closeButton:!1,className:"memory-popup"}).setHTML(`<div style="font-family: Satoshi, sans-serif; font-size: 11px; color: #E8C9A0; background: #111; padding: 6px 10px; border-radius: 4px;">
            ${_.location.place_name}
          </div>`);new p.Marker({element:S}).setLngLat(T).setPopup(x).addTo(f)}),c.length>1)f.fitBounds(g,{padding:60,maxZoom:12});else{const[_,v]=c[0].location.coordinates;f.flyTo({center:[v,_],zoom:10})}})()},[c,r]),O.jsxs("div",{className:"relative h-full min-h-[300px] rounded-lg overflow-hidden border border-border-subtle",children:[O.jsx("div",{ref:e,className:"w-full h-full"}),c.length===0&&O.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-bg-secondary/80 pointer-events-none",children:O.jsx("p",{className:"font-body text-sm text-text-tertiary text-center px-6",children:"Memories with places will appear here"})})]})}function a3({memoryCount:s,onScrollToInput:e}){const i=ll();return O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"hidden md:flex items-center justify-between py-4 mt-4",children:[O.jsxs("span",{className:"font-body text-xs text-text-tertiary",children:[s," ",s===1?"memory":"memories"]}),O.jsxs("div",{className:"flex items-center gap-4",children:[s>0&&O.jsx("button",{onClick:e,className:"font-body text-sm text-accent-primary hover:text-accent-secondary transition-colors cursor-pointer",children:"Add Another Memory"}),s>=3&&O.jsx(Fs,{onClick:()=>i("/preview"),children:"Preview Your Map"})]})]}),O.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 z-30 bg-bg-primary/90 backdrop-blur-md border-t border-border-subtle px-6 py-3 flex items-center justify-between",children:[O.jsxs("span",{className:"font-body text-xs text-text-tertiary",children:[s," ",s===1?"memory":"memories"]}),O.jsxs("div",{className:"flex items-center gap-3",children:[s>0&&O.jsx("button",{onClick:e,className:"font-body text-sm text-accent-primary cursor-pointer",children:"+ Add"}),s>=3&&O.jsx(Fs,{onClick:()=>i("/preview"),children:"Preview"})]})]}),O.jsx("div",{className:"md:hidden h-16"})]})}const r3=[{id:"partner",label:"My Partner",sub:"romantic love"},{id:"friend",label:"My Best Friend",sub:"the one who gets it"},{id:"parent",label:"My Parent",sub:"who shaped me"},{id:"sibling",label:"My Sibling",sub:"built-in best friend"},{id:"grandparent",label:"My Grandparent",sub:"living history"},{id:"other",label:"Someone Special",sub:"in my own words"}];function s3({onComplete:s}){const[e,i]=Q.useState(""),[r,l]=Q.useState(null),[c,f]=Q.useState(0),h=p=>{p.preventDefault(),e.trim()&&f(1)},m=p=>{l(p),f(2),setTimeout(()=>{s({name:e.trim(),type:p.id,typeLabel:p.label})},600)};return O.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[O.jsx(ml,{mode:"ambient",intensity:.4}),O.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),O.jsxs("div",{className:`text-center max-w-[560px] relative z-10 transition-all duration-700 ease-out ${c===2?"opacity-0 translate-y-[-20px]":"opacity-100"}`,children:[c===0&&O.jsxs("form",{onSubmit:h,className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[O.jsx("p",{className:"font-accent text-[clamp(24px,4vw,32px)] font-light text-text-primary leading-[1.3] mb-10",children:"Who is this Memory Map for?"}),O.jsxs("div",{className:"relative max-w-[400px] mx-auto",children:[O.jsx("input",{type:"text",value:e,onChange:p=>i(p.target.value),placeholder:"Their first name",autoFocus:!0,className:"w-full bg-transparent border-0 border-b-2 border-accent-primary/20 focus:border-accent-primary/60 text-center font-display text-[clamp(28px,5vw,40px)] font-medium text-text-primary placeholder:text-text-tertiary/30 focus:outline-none pb-3 transition-all duration-300"}),O.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-500",style:{width:e?"100%":"0%"}})]}),O.jsxs("button",{type:"submit",disabled:!e.trim(),className:`mt-10 font-body text-sm tracking-wide transition-all duration-500 cursor-pointer ${e.trim()?"text-accent-primary opacity-100 translate-y-0":"text-text-tertiary/30 opacity-0 translate-y-2 pointer-events-none"}`,children:["Continue",O.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"inline-block ml-2",children:O.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c>=1&&c<2&&O.jsxs("div",{className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[O.jsxs("p",{className:"font-accent text-[clamp(20px,3.5vw,28px)] font-light text-text-primary leading-[1.3] mb-3",children:[O.jsx("span",{className:"text-accent-primary",children:e.trim()})," is..."]}),O.jsx("p",{className:"font-body text-sm text-text-tertiary/60 mb-10",children:"This helps us understand the tone of your memories"}),O.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto",children:r3.map(p=>O.jsxs("button",{onClick:()=>m(p),className:"group glass-card rounded-lg px-4 py-5 text-center cursor-pointer transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated/60 active:scale-[0.97]",children:[O.jsx("span",{className:"font-body text-sm font-medium text-text-primary block",children:p.label}),O.jsx("span",{className:"font-body text-[10px] text-text-tertiary/50 mt-1 block",children:p.sub})]},p.id))})]}),c===2&&r&&O.jsx("div",{className:"animate-fade-in",children:O.jsxs("p",{className:"font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary",children:["A Memory Map for ",O.jsx("span",{className:"text-accent-primary",children:e.trim()})]})})]})]})}const Ax="/api";async function o3(s,e){const i=await fetch(`${Ax}/process-memory`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}async function l3(s,e){const i=await fetch(`${Ax}/relationship-summary`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({memories:s,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}function c3({addMemory:s,updateMemory:e,memories:i,setRelationshipSummary:r,relationshipContext:l}){return{submitMemory:Q.useCallback(async f=>{const h=Date.now().toString();s({id:h,rawText:f,loading:!0,title:null,date_hint:null,location:null,emotion:null,excerpt:null,theme_tags:[]});try{const p=await o3(f,l);if(e(h,{...p,loading:!1,rawText:f}),i.length+1>=3){const _=[...i.map(v=>v.rawText||v.excerpt),f];try{const v=await l3(_,l);r(v)}catch(v){console.error("Summary generation failed:",v)}}}catch(p){console.error("Memory processing failed:",p),e(h,{loading:!1,title:"A moment remembered",excerpt:f,emotion:"nostalgia",theme_tags:["personal"]})}},[s,e,i,r,l])}}function u3({memories:s,addMemory:e,updateMemory:i,deleteMemory:r,relationshipContext:l,setRelationshipContext:c,relationshipSummary:f,setRelationshipSummary:h}){const[m,p]=Q.useState(!1),g=Q.useRef(null),{submitMemory:_}=c3({addMemory:e,updateMemory:i,memories:s,setRelationshipSummary:h,relationshipContext:l}),v=async T=>{p(!0),await _(T),p(!1)},M=Q.useCallback(()=>{g.current?.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{g.current?.querySelector("textarea")?.focus()},400)},[]);if(!l)return O.jsx("main",{className:"min-h-screen bg-bg-primary",children:O.jsx(s3,{onComplete:c})});const E=Math.min(s.length/5,1)*100;return O.jsxs("main",{className:"min-h-screen bg-bg-primary relative",children:[O.jsx(ml,{mode:"drift",intensity:.3,fixed:!0}),O.jsx("div",{className:"fixed top-0 right-0 w-[500px] h-[500px] pointer-events-none",style:{background:"radial-gradient(circle at 80% 20%, rgba(212,165,116,0.03) 0%, transparent 60%)"}}),O.jsxs("div",{className:"max-w-[1200px] mx-auto px-6 py-12",children:[O.jsxs("div",{className:"mb-2",children:[O.jsxs("h1",{className:"font-display text-3xl font-medium text-text-primary",children:["Memories of ",l.name]}),f?.timeline_title?O.jsx("p",{className:"font-accent italic text-lg text-text-secondary mt-1",children:f.timeline_title}):O.jsx("p",{className:"font-body text-sm text-text-tertiary/50 mt-1",children:l.typeLabel})]}),O.jsxs("div",{className:"mb-10",children:[O.jsx("div",{className:"memory-progress",children:O.jsx("div",{className:"memory-progress-fill",style:{width:`${E}%`}})}),O.jsxs("div",{className:"flex justify-between mt-2",children:[O.jsxs("span",{className:"font-body text-[11px] text-text-tertiary/50",children:[s.length," ",s.length===1?"memory":"memories"]}),s.length<3&&O.jsxs("span",{className:"font-body text-[11px] text-text-tertiary/50",children:[3-s.length," more to unlock preview"]})]})]}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_0.65fr] gap-10",children:[O.jsxs("div",{children:[O.jsx("div",{ref:g,className:"sticky top-6 z-20 bg-bg-primary/80 backdrop-blur-md pb-6",children:O.jsx($2,{onSubmit:v,isProcessing:m,recipientName:l.name})}),O.jsx(Tx,{memories:s,onDelete:r}),O.jsx(a3,{memoryCount:s.length,onScrollToInput:M})]}),O.jsx("div",{className:"hidden lg:block",children:O.jsx("div",{className:"sticky top-6 h-[calc(100vh-96px)] rounded-lg overflow-hidden",children:O.jsx(lp,{memories:s})})})]}),O.jsx("div",{className:"lg:hidden mt-8",children:O.jsxs("details",{className:"group",children:[O.jsxs("summary",{className:"font-body text-sm text-accent-primary cursor-pointer list-none flex items-center gap-2 py-3",children:[O.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"transition-transform duration-300 group-open:rotate-90",children:O.jsx("path",{d:"M9 18l6-6-6-6"})}),"View Map"]}),O.jsx("div",{className:"mt-2 h-[350px] rounded-lg overflow-hidden",children:O.jsx(lp,{memories:s})})]})})]})]})}function f3(s,e,i,r){const l={m:s.map(h=>({t:h.title,e:h.excerpt,d:h.date_hint,em:h.emotion,l:h.location,tags:h.theme_tags})),s:e?{e:e.relationship_essence,t:e.timeline_title,th:e.dominant_themes,c:e.color_mood}:null,n:i||null,r:r?{name:r.name,type:r.type}:null},c=JSON.stringify(l);return btoa(unescape(encodeURIComponent(c)))}function d3(s){try{const e=decodeURIComponent(escape(atob(s))),i=JSON.parse(e),r=i.m.map((f,h)=>({id:`shared-${h}`,title:f.t,excerpt:f.e,date_hint:f.d,emotion:f.em,location:f.l,theme_tags:f.tags||[]})),l=i.s?{relationship_essence:i.s.e,timeline_title:i.s.t,dominant_themes:i.s.th,color_mood:i.s.c}:null,c=i.r||null;return{memories:r,summary:l,personalNote:i.n,relationshipContext:c}}catch(e){return console.error("Failed to decode share data:",e),null}}function h3(s,e,i,r){const l=f3(s,e,i,r);return`${window.location.origin}/shared/${l}`}function p3({memories:s,summary:e,personalNote:i,relationshipContext:r}){const[l,c]=Q.useState(""),[f,h]=Q.useState(!1),[m,p]=Q.useState(!1),g=()=>{p(!0),setTimeout(()=>{const E=h3(s,e,i,r);c(E),p(!1)},600)},_=async()=>{try{await navigator.clipboard.writeText(l),h(!0),setTimeout(()=>h(!1),2e3)}catch{const E=document.createElement("input");E.value=l,document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E),h(!0),setTimeout(()=>h(!1),2e3)}},v=()=>{const E=encodeURIComponent("I made a Memory Map for someone I care about. Check it out:");window.open(`https://twitter.com/intent/tweet?text=${E}&url=${encodeURIComponent(l)}`,"_blank")},M=()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(l)}`,"_blank")};return O.jsxs("div",{className:"text-center py-12",children:[O.jsx("h3",{className:"font-body text-base uppercase tracking-[0.1em] text-text-secondary mb-8",children:"Share This Memory Map"}),l?O.jsxs("div",{className:"space-y-4 animate-fade-up",style:{animationFillMode:"forwards"},children:[O.jsxs("div",{className:"flex items-center gap-2 max-w-[500px] mx-auto",children:[O.jsx("input",{type:"text",readOnly:!0,value:l,className:"flex-1 bg-bg-secondary border border-border-subtle rounded px-4 py-3 font-body text-sm text-text-secondary truncate"}),O.jsx(Fs,{variant:"secondary",onClick:_,children:f?O.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M20 6L9 17l-5-5"})}):"Copy"})]}),O.jsxs("div",{className:"flex items-center justify-center gap-4 pt-2",children:[O.jsx("button",{onClick:v,className:"text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer","aria-label":"Share on X",children:O.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:O.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),O.jsx("button",{onClick:M,className:"text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer","aria-label":"Share on LinkedIn",children:O.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:O.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}):O.jsx(Fs,{onClick:g,disabled:m,children:m?O.jsxs("span",{className:"flex items-center gap-2",children:[O.jsx("svg",{className:"w-4 h-4 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"})}),"Creating your link..."]}):"Generate Share Link"})]})}function m3({memories:s,relationshipContext:e,relationshipSummary:i,personalNote:r,setPersonalNote:l}){const c=ll();if(s.length===0)return O.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center px-6",children:O.jsxs("div",{className:"text-center",children:[O.jsx("p",{className:"font-accent text-xl text-text-secondary mb-6",children:"No memories yet. Start by sharing some moments."}),O.jsx(Fs,{onClick:()=>c("/create"),children:"Create Memories"})]})});const f=s.some(h=>h.location?.coordinates);return O.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[O.jsx(ml,{mode:"heart",intensity:.5,fixed:!0}),O.jsxs("div",{className:"max-w-[900px] mx-auto px-6 py-[80px] relative z-10",children:[O.jsxs("button",{onClick:()=>c("/create"),className:"font-body text-sm text-text-tertiary hover:text-accent-primary transition-colors mb-12 flex items-center gap-2 cursor-pointer",children:[O.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to editing"]}),O.jsx(Nr,{children:O.jsxs("div",{className:"text-center mb-16",children:[i?.timeline_title?O.jsx("h1",{className:"font-display text-[40px] font-medium text-text-primary mb-4",children:i.timeline_title}):O.jsx("h1",{className:"font-display text-[40px] font-medium text-text-primary mb-4",children:"Your Memory Map"}),i?.relationship_essence&&O.jsx("p",{className:"font-accent italic text-xl text-text-secondary max-w-[600px] mx-auto",children:i.relationship_essence})]})}),O.jsx(Nr,{delay:.2,children:O.jsx("p",{className:"text-center font-body text-sm text-text-tertiary mb-12",children:"This is your Memory Map. Every point is a real moment, in your own words. Send it to the person who was there."})}),O.jsx(Nr,{delay:.3,children:O.jsx(Tx,{memories:s})}),f&&O.jsx(Nr,{delay:.2,children:O.jsx("div",{className:"mt-16 h-[400px] w-[80%] mx-auto",children:O.jsx(lp,{memories:s})})}),i?.dominant_themes&&O.jsx(Nr,{delay:.2,children:O.jsx("div",{className:"flex items-center justify-center gap-3 mt-8 flex-wrap",children:i.dominant_themes.map(h=>O.jsx("span",{className:"font-body text-xs uppercase tracking-[0.06em] text-accent-primary/70 border border-accent-primary/20 rounded-full px-4 py-1.5",children:h},h))})}),O.jsx(Nr,{delay:.1,children:O.jsxs("div",{className:"mt-16 max-w-[500px] mx-auto",children:[O.jsx("label",{className:"font-body text-sm text-text-tertiary block mb-2",children:"Add a personal note (optional)"}),O.jsx("textarea",{value:r,onChange:h=>l(h.target.value),placeholder:"A message that appears when they open your Memory Map...",rows:3,className:"w-full bg-bg-secondary border border-border-subtle rounded-lg p-4 font-body text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"})]})}),O.jsx(p3,{memories:s,summary:i,personalNote:r,relationshipContext:e})]})]})}function g3({memory:s,index:e,total:i}){const[r,l]=xu({threshold:.25}),[c,f]=Q.useState(!1),[h,m]=Q.useState(!1);Q.useEffect(()=>{if(l){const _=setTimeout(()=>f(!0),400),v=setTimeout(()=>m(!0),1e3);return()=>{clearTimeout(_),clearTimeout(v)}}},[l]);const p={joy:{color:"rgba(212, 165, 116, 0.05)",glow:"rgba(212, 165, 116, 0.03)"},nostalgia:{color:"rgba(180, 160, 200, 0.04)",glow:"rgba(180, 160, 200, 0.02)"},gratitude:{color:"rgba(160, 200, 170, 0.04)",glow:"rgba(160, 200, 170, 0.02)"},love:{color:"rgba(200, 140, 140, 0.04)",glow:"rgba(200, 140, 140, 0.02)"},humor:{color:"rgba(212, 190, 116, 0.04)",glow:"rgba(212, 190, 116, 0.02)"},bittersweet:{color:"rgba(170, 155, 190, 0.04)",glow:"rgba(170, 155, 190, 0.02)"},adventure:{color:"rgba(116, 175, 212, 0.04)",glow:"rgba(116, 175, 212, 0.02)"},comfort:{color:"rgba(212, 185, 140, 0.04)",glow:"rgba(212, 185, 140, 0.02)"}},g=p[s.emotion]||p.joy;return O.jsxs("section",{ref:r,className:"min-h-[85vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",style:{backgroundColor:g.color},children:[O.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",style:{background:`radial-gradient(circle, ${g.glow} 0%, transparent 70%)`,opacity:l?1:0,transition:"opacity 1.5s ease-out"}}),O.jsxs("div",{className:"max-w-[580px] text-center relative z-10",children:[O.jsxs("span",{className:`font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/30 block mb-8 transition-all duration-500 ${l?"opacity-100":"opacity-0"}`,children:[e+1," / ",i]}),O.jsx("h2",{className:`font-display text-[clamp(28px,5vw,42px)] font-medium text-text-primary leading-[1.15] transition-all duration-800 ease-out ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:s.title}),O.jsx("div",{className:`w-8 h-px bg-accent-primary/30 mx-auto mt-6 mb-8 transition-all duration-600 ${c?"opacity-100 w-8":"opacity-0 w-0"}`}),O.jsxs("p",{className:`font-accent text-[clamp(18px,2.5vw,22px)] text-text-secondary leading-[1.7] transition-all duration-800 ease-out ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:["“",s.excerpt,"”"]}),O.jsxs("div",{className:`mt-10 space-y-2 transition-all duration-600 ease-out ${h?"opacity-100":"opacity-0"}`,children:[s.date_hint&&O.jsx("p",{className:"font-body text-[12px] uppercase tracking-[0.1em] text-text-tertiary/60",children:s.date_hint}),s.location?.place_name&&O.jsxs("p",{className:"font-body text-[12px] text-text-tertiary/50 flex items-center justify-center gap-1.5",children:[O.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"shrink-0",children:[O.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),O.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.location.place_name]}),O.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4 flex-wrap",children:[s.emotion&&O.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-3 py-0.5",children:s.emotion}),s.theme_tags?.map(_=>O.jsx("span",{className:"font-body text-[9px] text-text-tertiary/30 bg-bg-elevated/30 rounded-full px-2.5 py-0.5",children:_},_))]})]})]}),O.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-accent-primary/15 to-transparent"})]})}function _3({memories:s}){const[e,i]=xu({threshold:.2}),r=Q.useRef(null),l=Q.useRef(null),[c,f]=Q.useState(!1),h=s.filter(m=>m.location?.coordinates);return Q.useEffect(()=>!i||!r.current||l.current?void 0:((async()=>{const p=(await el(async()=>{const{default:_}=await import("./mapbox-gl-yvUAwFkg.js").then(v=>v.m);return{default:_}},[])).default;await el(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const v=await(await fetch("/api/config")).json();p.accessToken=v.mapboxToken||""}catch{p.accessToken=""}if(!p.accessToken)return;const g=new p.Map({container:r.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,interactive:!0});g.on("load",()=>{if(f(!0),h.length===0)return;const _=new p.LngLatBounds;if(h.forEach((v,M)=>{const[E,T]=v.location.coordinates,S=[T,E];_.extend(S),setTimeout(()=>{const x=document.createElement("div");x.style.cssText=`
              width: 12px;
              height: 12px;
              background: #D4A574;
              border-radius: 50%;
              box-shadow: 0 0 12px rgba(212,165,116,0.5);
              animation: marker-drop 0.5s ease-out forwards;
            `,new p.Marker({element:x}).setLngLat(S).addTo(g)},M*300)}),h.length>1)g.fitBounds(_,{padding:80,maxZoom:12});else{const[v,M]=h[0].location.coordinates;g.flyTo({center:[M,v],zoom:10})}}),l.current=g})(),()=>{l.current&&(l.current.remove(),l.current=null)}),[i,h]),h.length===0?null:O.jsx("section",{ref:e,className:"min-h-[70vh] flex items-center justify-center px-6 py-20",children:O.jsx("div",{className:`w-full max-w-[900px] h-[500px] rounded-lg overflow-hidden border border-border-subtle transition-all duration-1000 ${i?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:O.jsx("div",{ref:r,className:"w-full h-full"})})})}function v3({summary:s}){const[e,i]=xu({threshold:.3}),r=ll();return O.jsxs("section",{ref:e,className:"min-h-[70vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",children:[O.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 70%)",opacity:i?1:0,transition:"opacity 2s ease-out"}}),O.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[s?.relationship_essence&&O.jsxs("p",{className:`font-accent italic text-[clamp(20px,3vw,26px)] text-text-secondary leading-[1.6] transition-all duration-1200 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:["“",s.relationship_essence,"”"]}),s?.dominant_themes&&O.jsx("div",{className:`flex items-center justify-center gap-3 mt-8 flex-wrap transition-all duration-700 ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:s.dominant_themes.map(l=>O.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-4 py-1",children:l},l))}),O.jsx("div",{className:`w-12 h-px bg-accent-primary/20 mx-auto my-10 transition-all duration-800 ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.6s"}}),O.jsxs("div",{className:`space-y-5 transition-all duration-700 ease-out ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:[O.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Made with The Memory Map"}),O.jsx("button",{onClick:()=>r("/"),className:"font-body text-sm text-accent-primary/80 hover:text-accent-secondary transition-all duration-300 cursor-pointer border border-accent-primary/20 rounded-full px-6 py-2 hover:border-accent-primary/40 hover:shadow-[0_0_16px_rgba(212,165,116,0.1)]",children:"Create Your Own Memory Map"})]})]})]})}function x3(){const{data:s}=bM(),[e,i]=Q.useState(0),r=Q.useMemo(()=>s?d3(s):null,[s]);if(Q.useEffect(()=>{const p=setTimeout(()=>i(1),400),g=setTimeout(()=>i(2),2200),_=setTimeout(()=>i(3),3500);return()=>{clearTimeout(p),clearTimeout(g),clearTimeout(_)}},[]),!r)return O.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:O.jsx("p",{className:"font-accent text-xl text-text-secondary",children:"This memory map couldn't be found."})});const{memories:l,summary:c,personalNote:f,relationshipContext:h}=r,m=h?.name;return O.jsxs("main",{className:"min-h-screen bg-bg-primary relative",children:[O.jsx(ml,{mode:"heart",intensity:.8,fixed:!0}),O.jsxs("section",{className:"min-h-screen flex items-center justify-center relative px-6 overflow-hidden",children:[O.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),O.jsx("div",{className:`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${e>=1?"h-16 opacity-100":"h-0 opacity-0"}`}),O.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[O.jsx("p",{className:`font-accent text-[clamp(26px,5vw,32px)] font-light text-text-primary leading-[1.3] transition-all duration-[1500ms] ease-out ${e>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:m?O.jsxs(O.Fragment,{children:["Someone made this for you, ",O.jsx("span",{className:"text-accent-primary",children:m}),"."]}):"Someone made this for you."}),O.jsx("p",{className:`font-accent text-base text-text-tertiary/60 mt-4 transition-all duration-1000 ease-out ${e>=1?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:"These are their memories of the two of you, in their own words."}),f&&O.jsxs("p",{className:`font-accent italic text-lg text-text-secondary mt-10 leading-relaxed transition-all duration-800 ease-out ${e>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:["“",f,"”"]}),c?.timeline_title&&O.jsx("p",{className:`font-display text-lg text-accent-primary/60 mt-8 tracking-wide transition-all duration-700 ${e>=2?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:c.timeline_title})]}),O.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${e>=3?"opacity-100":"opacity-0"}`,children:O.jsxs("div",{className:"flex flex-col items-center gap-2",children:[O.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Scroll to begin"}),O.jsx("div",{className:"animate-gentle-bounce",children:O.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:O.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),O.jsx("div",{className:"flex items-center justify-center py-8",children:O.jsx("div",{className:"w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent"})}),l.map((p,g)=>O.jsx(g3,{memory:p,index:g,total:l.length},p.id)),O.jsx(_3,{memories:l}),O.jsx(v3,{summary:c})]})}function y3(){const[s,e]=Q.useState(()=>xb()),[i,r]=Q.useState(()=>Sb()),[l,c]=Q.useState(null),[f,h]=Q.useState("");Q.useEffect(()=>{const _=s.filter(v=>!v.loading);_.length>0&&vb(_)},[s]),Q.useEffect(()=>{i&&yb(i)},[i]);const m=Q.useCallback(_=>{e(v=>[...v,{..._,id:_.id||Date.now().toString()}])},[]),p=Q.useCallback((_,v)=>{e(M=>M.map(E=>E.id===_?{...E,...v}:E))},[]),g=Q.useCallback(_=>{e(v=>v.filter(M=>M.id!==_))},[]);return O.jsx("div",{className:"min-h-screen bg-bg-primary",children:O.jsxs(IM,{children:[O.jsx(Qo,{path:"/",element:O.jsx(J2,{})}),O.jsx(Qo,{path:"/create",element:O.jsx(u3,{memories:s,addMemory:m,updateMemory:p,deleteMemory:g,relationshipContext:i,setRelationshipContext:r,relationshipSummary:l,setRelationshipSummary:c})}),O.jsx(Qo,{path:"/preview",element:O.jsx(m3,{memories:s,relationshipContext:i,relationshipSummary:l,personalNote:f,setPersonalNote:h})}),O.jsx(Qo,{path:"/shared/:data",element:O.jsx(x3,{})})]})})}HS.createRoot(document.getElementById("root")).render(O.jsx(Q.StrictMode,{children:O.jsx(lb,{children:O.jsx(y3,{})})}));
